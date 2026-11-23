import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountNumberQueueNameActionAddPermissionKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=AddPermission', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionAddPermission<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionAddPermissionKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=AddPermission'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionAddPermission<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionAddPermissionKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=AddPermission'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddPermissionKey() {
  return ['#Action=AddPermission', '/#Action=AddPermission', 'POST'] as const
}

export function usePostActionAddPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddPermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddPermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddPermission']['$post']> },
      ) => parseResponse(client['#Action=AddPermission'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCancelMessageMoveTaskKey(
  args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CancelMessageMoveTask', '/#Action=CancelMessageMoveTask', keyArgs] as const
}

export function useGetActionCancelMessageMoveTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
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
        ? getGetActionCancelMessageMoveTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CancelMessageMoveTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCancelMessageMoveTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
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
        ? getGetActionCancelMessageMoveTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CancelMessageMoveTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCancelMessageMoveTaskKey() {
  return ['#Action=CancelMessageMoveTask', '/#Action=CancelMessageMoveTask', 'POST'] as const
}

export function usePostActionCancelMessageMoveTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCancelMessageMoveTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$post']> },
      ) => parseResponse(client['#Action=CancelMessageMoveTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionChangeMessageVisibilityKey(
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

export function useGetAccountNumberQueueNameActionChangeMessageVisibility<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionChangeMessageVisibilityKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionChangeMessageVisibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionChangeMessageVisibilityKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionChangeMessageVisibilityKey() {
  return ['#Action=ChangeMessageVisibility', '/#Action=ChangeMessageVisibility', 'POST'] as const
}

export function usePostActionChangeMessageVisibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionChangeMessageVisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ChangeMessageVisibility']['$post']> },
      ) => parseResponse(client['#Action=ChangeMessageVisibility'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionChangeMessageVisibilityBatchKey(
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

export function useGetAccountNumberQueueNameActionChangeMessageVisibilityBatch<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionChangeMessageVisibilityBatchKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionChangeMessageVisibilityBatch<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionChangeMessageVisibilityBatchKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionChangeMessageVisibilityBatchKey() {
  return [
    '#Action=ChangeMessageVisibilityBatch',
    '/#Action=ChangeMessageVisibilityBatch',
    'POST',
  ] as const
}

export function usePostActionChangeMessageVisibilityBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionChangeMessageVisibilityBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>
        },
      ) => parseResponse(client['#Action=ChangeMessageVisibilityBatch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateQueueKey(
  args: InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateQueue', '/#Action=CreateQueue', keyArgs] as const
}

export function useGetActionCreateQueue<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
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
        ? getGetActionCreateQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateQueue'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateQueue<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
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
        ? getGetActionCreateQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateQueue'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateQueueKey() {
  return ['#Action=CreateQueue', '/#Action=CreateQueue', 'POST'] as const
}

export function usePostActionCreateQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateQueue']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateQueue']['$post']> },
      ) => parseResponse(client['#Action=CreateQueue'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionDeleteMessageKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=DeleteMessage', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionDeleteMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionDeleteMessageKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=DeleteMessage'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionDeleteMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionDeleteMessageKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=DeleteMessage'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteMessageKey() {
  return ['#Action=DeleteMessage', '/#Action=DeleteMessage', 'POST'] as const
}

export function usePostActionDeleteMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteMessage']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteMessage']['$post']> },
      ) => parseResponse(client['#Action=DeleteMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionDeleteMessageBatchKey(
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

export function useGetAccountNumberQueueNameActionDeleteMessageBatch<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionDeleteMessageBatchKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionDeleteMessageBatch<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionDeleteMessageBatchKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteMessageBatchKey() {
  return ['#Action=DeleteMessageBatch', '/#Action=DeleteMessageBatch', 'POST'] as const
}

export function usePostActionDeleteMessageBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteMessageBatch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteMessageBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteMessageBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteMessageBatch']['$post']> },
      ) => parseResponse(client['#Action=DeleteMessageBatch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionDeleteQueueKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=DeleteQueue', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionDeleteQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionDeleteQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=DeleteQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionDeleteQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionDeleteQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=DeleteQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteQueueKey() {
  return ['#Action=DeleteQueue', '/#Action=DeleteQueue', 'POST'] as const
}

export function usePostActionDeleteQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteQueue']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteQueue']['$post']> },
      ) => parseResponse(client['#Action=DeleteQueue'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionGetQueueAttributesKey(
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

export function useGetAccountNumberQueueNameActionGetQueueAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionGetQueueAttributesKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionGetQueueAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionGetQueueAttributesKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetQueueAttributesKey() {
  return ['#Action=GetQueueAttributes', '/#Action=GetQueueAttributes', 'POST'] as const
}

export function usePostActionGetQueueAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetQueueAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetQueueAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetQueueAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetQueueAttributes']['$post']> },
      ) => parseResponse(client['#Action=GetQueueAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetQueueUrlKey(
  args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetQueueUrl', '/#Action=GetQueueUrl', keyArgs] as const
}

export function useGetActionGetQueueUrl<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
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
        ? getGetActionGetQueueUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetQueueUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetQueueUrl<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
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
        ? getGetActionGetQueueUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetQueueUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetQueueUrlKey() {
  return ['#Action=GetQueueUrl', '/#Action=GetQueueUrl', 'POST'] as const
}

export function usePostActionGetQueueUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetQueueUrl']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetQueueUrl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetQueueUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$post']> },
      ) => parseResponse(client['#Action=GetQueueUrl'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionListDeadLetterSourceQueuesKey(
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

export function useGetAccountNumberQueueNameActionListDeadLetterSourceQueues<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionListDeadLetterSourceQueuesKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionListDeadLetterSourceQueues<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionListDeadLetterSourceQueuesKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionListDeadLetterSourceQueuesKey() {
  return [
    '#Action=ListDeadLetterSourceQueues',
    '/#Action=ListDeadLetterSourceQueues',
    'POST',
  ] as const
}

export function usePostActionListDeadLetterSourceQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListDeadLetterSourceQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>
        },
      ) => parseResponse(client['#Action=ListDeadLetterSourceQueues'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListMessageMoveTasksKey(
  args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMessageMoveTasks', '/#Action=ListMessageMoveTasks', keyArgs] as const
}

export function useGetActionListMessageMoveTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
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
        ? getGetActionListMessageMoveTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMessageMoveTasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListMessageMoveTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
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
        ? getGetActionListMessageMoveTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMessageMoveTasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListMessageMoveTasksKey() {
  return ['#Action=ListMessageMoveTasks', '/#Action=ListMessageMoveTasks', 'POST'] as const
}

export function usePostActionListMessageMoveTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListMessageMoveTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$post']> },
      ) => parseResponse(client['#Action=ListMessageMoveTasks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionListQueueTagsKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=ListQueueTags', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionListQueueTags<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionListQueueTagsKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ListQueueTags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionListQueueTags<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionListQueueTagsKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ListQueueTags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionListQueueTagsKey() {
  return ['#Action=ListQueueTags', '/#Action=ListQueueTags', 'POST'] as const
}

export function usePostActionListQueueTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueueTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListQueueTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListQueueTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListQueueTags']['$post']> },
      ) => parseResponse(client['#Action=ListQueueTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListQueuesKey(
  args: InferRequestType<(typeof client)['#Action=ListQueues']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListQueues', '/#Action=ListQueues', keyArgs] as const
}

export function useGetActionListQueues<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListQueues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
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
        ? getGetActionListQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListQueues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListQueues<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListQueues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
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
        ? getGetActionListQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListQueues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListQueuesKey() {
  return ['#Action=ListQueues', '/#Action=ListQueues', 'POST'] as const
}

export function usePostActionListQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListQueues']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListQueues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListQueues']['$post']> },
      ) => parseResponse(client['#Action=ListQueues'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionPurgeQueueKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=PurgeQueue', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionPurgeQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionPurgeQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=PurgeQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionPurgeQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionPurgeQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=PurgeQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionPurgeQueueKey() {
  return ['#Action=PurgeQueue', '/#Action=PurgeQueue', 'POST'] as const
}

export function usePostActionPurgeQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PurgeQueue']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PurgeQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPurgeQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PurgeQueue']['$post']> },
      ) => parseResponse(client['#Action=PurgeQueue'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionReceiveMessageKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=ReceiveMessage', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionReceiveMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionReceiveMessageKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ReceiveMessage'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionReceiveMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionReceiveMessageKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=ReceiveMessage'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionReceiveMessageKey() {
  return ['#Action=ReceiveMessage', '/#Action=ReceiveMessage', 'POST'] as const
}

export function usePostActionReceiveMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ReceiveMessage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ReceiveMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionReceiveMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ReceiveMessage']['$post']> },
      ) => parseResponse(client['#Action=ReceiveMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionRemovePermissionKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=RemovePermission', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionRemovePermission<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionRemovePermissionKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=RemovePermission'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionRemovePermission<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionRemovePermissionKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=RemovePermission'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemovePermissionKey() {
  return ['#Action=RemovePermission', '/#Action=RemovePermission', 'POST'] as const
}

export function usePostActionRemovePermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemovePermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RemovePermission']['$post']> },
      ) => parseResponse(client['#Action=RemovePermission'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionSendMessageKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=SendMessage', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionSendMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionSendMessageKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=SendMessage'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionSendMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionSendMessageKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=SendMessage'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendMessageKey() {
  return ['#Action=SendMessage', '/#Action=SendMessage', 'POST'] as const
}

export function usePostActionSendMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendMessage']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SendMessage']['$post']> },
      ) => parseResponse(client['#Action=SendMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionSendMessageBatchKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=SendMessageBatch', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionSendMessageBatch<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionSendMessageBatchKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=SendMessageBatch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionSendMessageBatch<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionSendMessageBatchKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=SendMessageBatch'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendMessageBatchKey() {
  return ['#Action=SendMessageBatch', '/#Action=SendMessageBatch', 'POST'] as const
}

export function usePostActionSendMessageBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendMessageBatch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendMessageBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendMessageBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SendMessageBatch']['$post']> },
      ) => parseResponse(client['#Action=SendMessageBatch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionSetQueueAttributesKey(
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

export function useGetAccountNumberQueueNameActionSetQueueAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionSetQueueAttributesKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionSetQueueAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionSetQueueAttributesKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetQueueAttributesKey() {
  return ['#Action=SetQueueAttributes', '/#Action=SetQueueAttributes', 'POST'] as const
}

export function usePostActionSetQueueAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetQueueAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetQueueAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetQueueAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetQueueAttributes']['$post']> },
      ) => parseResponse(client['#Action=SetQueueAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStartMessageMoveTaskKey(
  args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartMessageMoveTask', '/#Action=StartMessageMoveTask', keyArgs] as const
}

export function useGetActionStartMessageMoveTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
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
        ? getGetActionStartMessageMoveTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartMessageMoveTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStartMessageMoveTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
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
        ? getGetActionStartMessageMoveTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartMessageMoveTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStartMessageMoveTaskKey() {
  return ['#Action=StartMessageMoveTask', '/#Action=StartMessageMoveTask', 'POST'] as const
}

export function usePostActionStartMessageMoveTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartMessageMoveTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStartMessageMoveTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$post']> },
      ) => parseResponse(client['#Action=StartMessageMoveTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionTagQueueKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=TagQueue', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionTagQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionTagQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=TagQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionTagQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionTagQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=TagQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagQueueKey() {
  return ['#Action=TagQueue', '/#Action=TagQueue', 'POST'] as const
}

export function usePostActionTagQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagQueue']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagQueue']['$post']> },
      ) => parseResponse(client['#Action=TagQueue'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumberQueueNameActionUntagQueueKey(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':AccountNumber', '/:AccountNumber/:QueueName/#Action=UntagQueue', keyArgs] as const
}

export function useGetAccountNumberQueueNameActionUntagQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionUntagQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=UntagQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumberQueueNameActionUntagQueue<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountNumberQueueNameActionUntagQueueKey(args)
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
                (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
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
          client[':AccountNumber'][':QueueName']['#Action=UntagQueue'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagQueueKey() {
  return ['#Action=UntagQueue', '/#Action=UntagQueue', 'POST'] as const
}

export function usePostActionUntagQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagQueue']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagQueue']['$post']> },
      ) => parseResponse(client['#Action=UntagQueue'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
