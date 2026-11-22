import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSEventsActivateEventSourceKey() {
  return ['#X-Amz-Target=AWSEvents.ActivateEventSource'] as const
}

export function getXAmzTargetAWSEventsCancelReplayKey() {
  return ['#X-Amz-Target=AWSEvents.CancelReplay'] as const
}

export function getXAmzTargetAWSEventsCreateApiDestinationKey() {
  return ['#X-Amz-Target=AWSEvents.CreateApiDestination'] as const
}

export function getXAmzTargetAWSEventsCreateArchiveKey() {
  return ['#X-Amz-Target=AWSEvents.CreateArchive'] as const
}

export function getXAmzTargetAWSEventsCreateConnectionKey() {
  return ['#X-Amz-Target=AWSEvents.CreateConnection'] as const
}

export function getXAmzTargetAWSEventsCreateEventBusKey() {
  return ['#X-Amz-Target=AWSEvents.CreateEventBus'] as const
}

export function getXAmzTargetAWSEventsCreatePartnerEventSourceKey() {
  return ['#X-Amz-Target=AWSEvents.CreatePartnerEventSource'] as const
}

export function getXAmzTargetAWSEventsDeactivateEventSourceKey() {
  return ['#X-Amz-Target=AWSEvents.DeactivateEventSource'] as const
}

export function getXAmzTargetAWSEventsDeauthorizeConnectionKey() {
  return ['#X-Amz-Target=AWSEvents.DeauthorizeConnection'] as const
}

export function getXAmzTargetAWSEventsDeleteApiDestinationKey() {
  return ['#X-Amz-Target=AWSEvents.DeleteApiDestination'] as const
}

export function getXAmzTargetAWSEventsDeleteArchiveKey() {
  return ['#X-Amz-Target=AWSEvents.DeleteArchive'] as const
}

export function getXAmzTargetAWSEventsDeleteConnectionKey() {
  return ['#X-Amz-Target=AWSEvents.DeleteConnection'] as const
}

export function getXAmzTargetAWSEventsDeleteEventBusKey() {
  return ['#X-Amz-Target=AWSEvents.DeleteEventBus'] as const
}

export function getXAmzTargetAWSEventsDeletePartnerEventSourceKey() {
  return ['#X-Amz-Target=AWSEvents.DeletePartnerEventSource'] as const
}

export function getXAmzTargetAWSEventsDeleteRuleKey() {
  return ['#X-Amz-Target=AWSEvents.DeleteRule'] as const
}

export function getXAmzTargetAWSEventsDescribeApiDestinationKey() {
  return ['#X-Amz-Target=AWSEvents.DescribeApiDestination'] as const
}

export function getXAmzTargetAWSEventsDescribeArchiveKey() {
  return ['#X-Amz-Target=AWSEvents.DescribeArchive'] as const
}

export function getXAmzTargetAWSEventsDescribeConnectionKey() {
  return ['#X-Amz-Target=AWSEvents.DescribeConnection'] as const
}

export function getXAmzTargetAWSEventsDescribeEventBusKey() {
  return ['#X-Amz-Target=AWSEvents.DescribeEventBus'] as const
}

export function getXAmzTargetAWSEventsDescribeEventSourceKey() {
  return ['#X-Amz-Target=AWSEvents.DescribeEventSource'] as const
}

export function getXAmzTargetAWSEventsDescribePartnerEventSourceKey() {
  return ['#X-Amz-Target=AWSEvents.DescribePartnerEventSource'] as const
}

export function getXAmzTargetAWSEventsDescribeReplayKey() {
  return ['#X-Amz-Target=AWSEvents.DescribeReplay'] as const
}

export function getXAmzTargetAWSEventsDescribeRuleKey() {
  return ['#X-Amz-Target=AWSEvents.DescribeRule'] as const
}

export function getXAmzTargetAWSEventsDisableRuleKey() {
  return ['#X-Amz-Target=AWSEvents.DisableRule'] as const
}

export function getXAmzTargetAWSEventsEnableRuleKey() {
  return ['#X-Amz-Target=AWSEvents.EnableRule'] as const
}

export function getXAmzTargetAWSEventsListApiDestinationsKey() {
  return ['#X-Amz-Target=AWSEvents.ListApiDestinations'] as const
}

export function getXAmzTargetAWSEventsListArchivesKey() {
  return ['#X-Amz-Target=AWSEvents.ListArchives'] as const
}

export function getXAmzTargetAWSEventsListConnectionsKey() {
  return ['#X-Amz-Target=AWSEvents.ListConnections'] as const
}

export function getXAmzTargetAWSEventsListEventBusesKey() {
  return ['#X-Amz-Target=AWSEvents.ListEventBuses'] as const
}

export function getXAmzTargetAWSEventsListEventSourcesKey() {
  return ['#X-Amz-Target=AWSEvents.ListEventSources'] as const
}

export function getXAmzTargetAWSEventsListPartnerEventSourceAccountsKey() {
  return ['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts'] as const
}

export function getXAmzTargetAWSEventsListPartnerEventSourcesKey() {
  return ['#X-Amz-Target=AWSEvents.ListPartnerEventSources'] as const
}

export function getXAmzTargetAWSEventsListReplaysKey() {
  return ['#X-Amz-Target=AWSEvents.ListReplays'] as const
}

export function getXAmzTargetAWSEventsListRuleNamesByTargetKey() {
  return ['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget'] as const
}

export function getXAmzTargetAWSEventsListRulesKey() {
  return ['#X-Amz-Target=AWSEvents.ListRules'] as const
}

export function getXAmzTargetAWSEventsListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSEvents.ListTagsForResource'] as const
}

export function getXAmzTargetAWSEventsListTargetsByRuleKey() {
  return ['#X-Amz-Target=AWSEvents.ListTargetsByRule'] as const
}

export function getXAmzTargetAWSEventsPutEventsKey() {
  return ['#X-Amz-Target=AWSEvents.PutEvents'] as const
}

export function getXAmzTargetAWSEventsPutPartnerEventsKey() {
  return ['#X-Amz-Target=AWSEvents.PutPartnerEvents'] as const
}

export function getXAmzTargetAWSEventsPutPermissionKey() {
  return ['#X-Amz-Target=AWSEvents.PutPermission'] as const
}

export function getXAmzTargetAWSEventsPutRuleKey() {
  return ['#X-Amz-Target=AWSEvents.PutRule'] as const
}

export function getXAmzTargetAWSEventsPutTargetsKey() {
  return ['#X-Amz-Target=AWSEvents.PutTargets'] as const
}

export function getXAmzTargetAWSEventsRemovePermissionKey() {
  return ['#X-Amz-Target=AWSEvents.RemovePermission'] as const
}

export function getXAmzTargetAWSEventsRemoveTargetsKey() {
  return ['#X-Amz-Target=AWSEvents.RemoveTargets'] as const
}

export function getXAmzTargetAWSEventsStartReplayKey() {
  return ['#X-Amz-Target=AWSEvents.StartReplay'] as const
}

export function getXAmzTargetAWSEventsTagResourceKey() {
  return ['#X-Amz-Target=AWSEvents.TagResource'] as const
}

export function getXAmzTargetAWSEventsTestEventPatternKey() {
  return ['#X-Amz-Target=AWSEvents.TestEventPattern'] as const
}

export function getXAmzTargetAWSEventsUntagResourceKey() {
  return ['#X-Amz-Target=AWSEvents.UntagResource'] as const
}

export function getXAmzTargetAWSEventsUpdateApiDestinationKey() {
  return ['#X-Amz-Target=AWSEvents.UpdateApiDestination'] as const
}

export function getXAmzTargetAWSEventsUpdateArchiveKey() {
  return ['#X-Amz-Target=AWSEvents.UpdateArchive'] as const
}

export function getXAmzTargetAWSEventsUpdateConnectionKey() {
  return ['#X-Amz-Target=AWSEvents.UpdateConnection'] as const
}

export function getPostXAmzTargetAWSEventsActivateEventSourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.ActivateEventSource',
    '/#X-Amz-Target=AWSEvents.ActivateEventSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsActivateEventSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ActivateEventSource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ActivateEventSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsActivateEventSourceKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ActivateEventSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.ActivateEventSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsCancelReplayKey() {
  return [
    '#X-Amz-Target=AWSEvents.CancelReplay',
    '/#X-Amz-Target=AWSEvents.CancelReplay',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsCancelReplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsCancelReplayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.CancelReplay'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsCreateApiDestinationKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateApiDestination',
    '/#X-Amz-Target=AWSEvents.CreateApiDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsCreateApiDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateApiDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateApiDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsCreateApiDestinationKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.CreateApiDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.CreateApiDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsCreateArchiveKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateArchive',
    '/#X-Amz-Target=AWSEvents.CreateArchive',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsCreateArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsCreateArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.CreateArchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsCreateConnectionKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateConnection',
    '/#X-Amz-Target=AWSEvents.CreateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsCreateConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsCreateConnectionKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.CreateConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsCreateEventBusKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateEventBus',
    '/#X-Amz-Target=AWSEvents.CreateEventBus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsCreateEventBus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsCreateEventBusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.CreateEventBus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsCreatePartnerEventSourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreatePartnerEventSource',
    '/#X-Amz-Target=AWSEvents.CreatePartnerEventSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsCreatePartnerEventSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsCreatePartnerEventSourceKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.CreatePartnerEventSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeactivateEventSourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeactivateEventSource',
    '/#X-Amz-Target=AWSEvents.DeactivateEventSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeactivateEventSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeactivateEventSourceKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DeactivateEventSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeauthorizeConnectionKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeauthorizeConnection',
    '/#X-Amz-Target=AWSEvents.DeauthorizeConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeauthorizeConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeauthorizeConnectionKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DeauthorizeConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeleteApiDestinationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteApiDestination',
    '/#X-Amz-Target=AWSEvents.DeleteApiDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeleteApiDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteApiDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteApiDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeleteApiDestinationKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DeleteApiDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DeleteApiDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeleteArchiveKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteArchive',
    '/#X-Amz-Target=AWSEvents.DeleteArchive',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeleteArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeleteArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.DeleteArchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeleteConnectionKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteConnection',
    '/#X-Amz-Target=AWSEvents.DeleteConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeleteConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeleteConnectionKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.DeleteConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeleteEventBusKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteEventBus',
    '/#X-Amz-Target=AWSEvents.DeleteEventBus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeleteEventBus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeleteEventBusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.DeleteEventBus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeletePartnerEventSourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeletePartnerEventSource',
    '/#X-Amz-Target=AWSEvents.DeletePartnerEventSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeletePartnerEventSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeletePartnerEventSourceKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DeletePartnerEventSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDeleteRuleKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteRule',
    '/#X-Amz-Target=AWSEvents.DeleteRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDeleteRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDeleteRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.DeleteRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribeApiDestinationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeApiDestination',
    '/#X-Amz-Target=AWSEvents.DescribeApiDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribeApiDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribeApiDestinationKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DescribeApiDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribeArchiveKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeArchive',
    '/#X-Amz-Target=AWSEvents.DescribeArchive',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribeArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribeArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.DescribeArchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribeConnectionKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeConnection',
    '/#X-Amz-Target=AWSEvents.DescribeConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribeConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeConnection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribeConnectionKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DescribeConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DescribeConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribeEventBusKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeEventBus',
    '/#X-Amz-Target=AWSEvents.DescribeEventBus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribeEventBus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribeEventBusKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.DescribeEventBus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribeEventSourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeEventSource',
    '/#X-Amz-Target=AWSEvents.DescribeEventSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribeEventSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventSource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribeEventSourceKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DescribeEventSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DescribeEventSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribePartnerEventSourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribePartnerEventSource',
    '/#X-Amz-Target=AWSEvents.DescribePartnerEventSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribePartnerEventSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSEvents.DescribePartnerEventSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribePartnerEventSource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribePartnerEventSourceKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.DescribePartnerEventSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.DescribePartnerEventSource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribeReplayKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeReplay',
    '/#X-Amz-Target=AWSEvents.DescribeReplay',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribeReplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribeReplayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.DescribeReplay'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDescribeRuleKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeRule',
    '/#X-Amz-Target=AWSEvents.DescribeRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDescribeRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDescribeRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.DescribeRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsDisableRuleKey() {
  return [
    '#X-Amz-Target=AWSEvents.DisableRule',
    '/#X-Amz-Target=AWSEvents.DisableRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsDisableRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsDisableRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.DisableRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsEnableRuleKey() {
  return [
    '#X-Amz-Target=AWSEvents.EnableRule',
    '/#X-Amz-Target=AWSEvents.EnableRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsEnableRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsEnableRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.EnableRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListApiDestinationsKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListApiDestinations',
    '/#X-Amz-Target=AWSEvents.ListApiDestinations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListApiDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListApiDestinations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListApiDestinations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListApiDestinationsKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ListApiDestinations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.ListApiDestinations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListArchivesKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListArchives',
    '/#X-Amz-Target=AWSEvents.ListArchives',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListArchives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListArchivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.ListArchives'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListConnectionsKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListConnections',
    '/#X-Amz-Target=AWSEvents.ListConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.ListConnections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListEventBusesKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListEventBuses',
    '/#X-Amz-Target=AWSEvents.ListEventBuses',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListEventBuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListEventBusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.ListEventBuses'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListEventSourcesKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListEventSources',
    '/#X-Amz-Target=AWSEvents.ListEventSources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListEventSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListEventSourcesKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.ListEventSources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListPartnerEventSourceAccountsKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts',
    '/#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListPartnerEventSourceAccounts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListPartnerEventSourceAccountsKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListPartnerEventSourcesKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListPartnerEventSources',
    '/#X-Amz-Target=AWSEvents.ListPartnerEventSources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListPartnerEventSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListPartnerEventSourcesKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.ListPartnerEventSources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListReplaysKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListReplays',
    '/#X-Amz-Target=AWSEvents.ListReplays',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListReplays<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListReplaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.ListReplays'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListRuleNamesByTargetKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListRuleNamesByTarget',
    '/#X-Amz-Target=AWSEvents.ListRuleNamesByTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListRuleNamesByTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListRuleNamesByTargetKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListRulesKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListRules',
    '/#X-Amz-Target=AWSEvents.ListRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.ListRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListTagsForResource',
    '/#X-Amz-Target=AWSEvents.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsListTargetsByRuleKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListTargetsByRule',
    '/#X-Amz-Target=AWSEvents.ListTargetsByRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsListTargetsByRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsListTargetsByRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.ListTargetsByRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsPutEventsKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutEvents',
    '/#X-Amz-Target=AWSEvents.PutEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsPutEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsPutEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.PutEvents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsPutPartnerEventsKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutPartnerEvents',
    '/#X-Amz-Target=AWSEvents.PutPartnerEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsPutPartnerEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsPutPartnerEventsKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.PutPartnerEvents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsPutPermissionKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutPermission',
    '/#X-Amz-Target=AWSEvents.PutPermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsPutPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsPutPermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.PutPermission'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsPutRuleKey() {
  return ['#X-Amz-Target=AWSEvents.PutRule', '/#X-Amz-Target=AWSEvents.PutRule', 'POST'] as const
}

export function usePostXAmzTargetAWSEventsPutRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsPutRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.PutRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsPutTargetsKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutTargets',
    '/#X-Amz-Target=AWSEvents.PutTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsPutTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsPutTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.PutTargets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsRemovePermissionKey() {
  return [
    '#X-Amz-Target=AWSEvents.RemovePermission',
    '/#X-Amz-Target=AWSEvents.RemovePermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsRemovePermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsRemovePermissionKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.RemovePermission'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsRemoveTargetsKey() {
  return [
    '#X-Amz-Target=AWSEvents.RemoveTargets',
    '/#X-Amz-Target=AWSEvents.RemoveTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsRemoveTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsRemoveTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.RemoveTargets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsStartReplayKey() {
  return [
    '#X-Amz-Target=AWSEvents.StartReplay',
    '/#X-Amz-Target=AWSEvents.StartReplay',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsStartReplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsStartReplayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.StartReplay'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsTagResourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.TagResource',
    '/#X-Amz-Target=AWSEvents.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsTestEventPatternKey() {
  return [
    '#X-Amz-Target=AWSEvents.TestEventPattern',
    '/#X-Amz-Target=AWSEvents.TestEventPattern',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsTestEventPattern<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsTestEventPatternKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.TestEventPattern'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSEvents.UntagResource',
    '/#X-Amz-Target=AWSEvents.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsUpdateApiDestinationKey() {
  return [
    '#X-Amz-Target=AWSEvents.UpdateApiDestination',
    '/#X-Amz-Target=AWSEvents.UpdateApiDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsUpdateApiDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateApiDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateApiDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsUpdateApiDestinationKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.UpdateApiDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSEvents.UpdateApiDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsUpdateArchiveKey() {
  return [
    '#X-Amz-Target=AWSEvents.UpdateArchive',
    '/#X-Amz-Target=AWSEvents.UpdateArchive',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsUpdateArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsUpdateArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSEvents.UpdateArchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSEventsUpdateConnectionKey() {
  return [
    '#X-Amz-Target=AWSEvents.UpdateConnection',
    '/#X-Amz-Target=AWSEvents.UpdateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSEventsUpdateConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSEventsUpdateConnectionKey()
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
            (typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSEvents.UpdateConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
