import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetAWSEventsActivateEventSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ActivateEventSource',
    '/#X-Amz-Target=AWSEvents.ActivateEventSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsActivateEventSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ActivateEventSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsActivateEventSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.ActivateEventSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.ActivateEventSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsActivateEventSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ActivateEventSource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsActivateEventSourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsCancelReplayMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.CancelReplay',
    '/#X-Amz-Target=AWSEvents.CancelReplay',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsCancelReplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsCancelReplayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.CancelReplay'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsCancelReplay<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsCancelReplayMutationOptions<
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

export function getPostXAmzTargetAWSEventsCreateApiDestinationMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateApiDestination',
    '/#X-Amz-Target=AWSEvents.CreateApiDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsCreateApiDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateApiDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsCreateApiDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.CreateApiDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.CreateApiDestination'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsCreateApiDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateApiDestination']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsCreateApiDestinationMutationOptions<
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

export function getPostXAmzTargetAWSEventsCreateArchiveMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateArchive',
    '/#X-Amz-Target=AWSEvents.CreateArchive',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsCreateArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsCreateArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.CreateArchive'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsCreateArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsCreateArchiveMutationOptions<
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

export function getPostXAmzTargetAWSEventsCreateConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateConnection',
    '/#X-Amz-Target=AWSEvents.CreateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsCreateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsCreateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.CreateConnection'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsCreateConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsCreateConnectionMutationOptions<
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

export function getPostXAmzTargetAWSEventsCreateEventBusMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreateEventBus',
    '/#X-Amz-Target=AWSEvents.CreateEventBus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsCreateEventBusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsCreateEventBusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.CreateEventBus'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsCreateEventBus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsCreateEventBusMutationOptions<
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

export function getPostXAmzTargetAWSEventsCreatePartnerEventSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.CreatePartnerEventSource',
    '/#X-Amz-Target=AWSEvents.CreatePartnerEventSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsCreatePartnerEventSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsCreatePartnerEventSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.CreatePartnerEventSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsCreatePartnerEventSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsCreatePartnerEventSourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeactivateEventSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeactivateEventSource',
    '/#X-Amz-Target=AWSEvents.DeactivateEventSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeactivateEventSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeactivateEventSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DeactivateEventSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDeactivateEventSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeactivateEventSourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeauthorizeConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeauthorizeConnection',
    '/#X-Amz-Target=AWSEvents.DeauthorizeConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeauthorizeConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeauthorizeConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DeauthorizeConnection'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDeauthorizeConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeauthorizeConnectionMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeleteApiDestinationMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteApiDestination',
    '/#X-Amz-Target=AWSEvents.DeleteApiDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeleteApiDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteApiDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeleteApiDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DeleteApiDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DeleteApiDestination'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDeleteApiDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteApiDestination']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeleteApiDestinationMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeleteArchiveMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteArchive',
    '/#X-Amz-Target=AWSEvents.DeleteArchive',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeleteArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeleteArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DeleteArchive'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDeleteArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeleteArchiveMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeleteConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteConnection',
    '/#X-Amz-Target=AWSEvents.DeleteConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeleteConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeleteConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DeleteConnection'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDeleteConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeleteConnectionMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeleteEventBusMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteEventBus',
    '/#X-Amz-Target=AWSEvents.DeleteEventBus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeleteEventBusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeleteEventBusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DeleteEventBus'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDeleteEventBus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeleteEventBusMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeletePartnerEventSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeletePartnerEventSource',
    '/#X-Amz-Target=AWSEvents.DeletePartnerEventSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeletePartnerEventSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeletePartnerEventSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DeletePartnerEventSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDeletePartnerEventSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeletePartnerEventSourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsDeleteRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DeleteRule',
    '/#X-Amz-Target=AWSEvents.DeleteRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDeleteRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDeleteRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DeleteRule'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDeleteRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDeleteRuleMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribeApiDestinationMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeApiDestination',
    '/#X-Amz-Target=AWSEvents.DescribeApiDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribeApiDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribeApiDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DescribeApiDestination'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribeApiDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribeApiDestinationMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribeArchiveMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeArchive',
    '/#X-Amz-Target=AWSEvents.DescribeArchive',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribeArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribeArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DescribeArchive'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribeArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribeArchiveMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribeConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeConnection',
    '/#X-Amz-Target=AWSEvents.DescribeConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribeConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribeConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DescribeConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DescribeConnection'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribeConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeConnection']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribeConnectionMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribeEventBusMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeEventBus',
    '/#X-Amz-Target=AWSEvents.DescribeEventBus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribeEventBusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribeEventBusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DescribeEventBus'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribeEventBus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribeEventBusMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribeEventSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeEventSource',
    '/#X-Amz-Target=AWSEvents.DescribeEventSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribeEventSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventSource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribeEventSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DescribeEventSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DescribeEventSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribeEventSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventSource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribeEventSourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribePartnerEventSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribePartnerEventSource',
    '/#X-Amz-Target=AWSEvents.DescribePartnerEventSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribePartnerEventSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSEvents.DescribePartnerEventSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribePartnerEventSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.DescribePartnerEventSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.DescribePartnerEventSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribePartnerEventSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEvents.DescribePartnerEventSource']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribePartnerEventSourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribeReplayMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeReplay',
    '/#X-Amz-Target=AWSEvents.DescribeReplay',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribeReplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribeReplayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DescribeReplay'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribeReplay<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribeReplayMutationOptions<
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

export function getPostXAmzTargetAWSEventsDescribeRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DescribeRule',
    '/#X-Amz-Target=AWSEvents.DescribeRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDescribeRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDescribeRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DescribeRule'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDescribeRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDescribeRuleMutationOptions<
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

export function getPostXAmzTargetAWSEventsDisableRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.DisableRule',
    '/#X-Amz-Target=AWSEvents.DisableRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsDisableRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsDisableRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.DisableRule'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsDisableRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsDisableRuleMutationOptions<
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

export function getPostXAmzTargetAWSEventsEnableRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.EnableRule',
    '/#X-Amz-Target=AWSEvents.EnableRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsEnableRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsEnableRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.EnableRule'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsEnableRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsEnableRuleMutationOptions<
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

export function getPostXAmzTargetAWSEventsListApiDestinationsMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListApiDestinations',
    '/#X-Amz-Target=AWSEvents.ListApiDestinations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListApiDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListApiDestinations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListApiDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.ListApiDestinations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.ListApiDestinations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsListApiDestinations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListApiDestinations']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListApiDestinationsMutationOptions<
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

export function getPostXAmzTargetAWSEventsListArchivesMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListArchives',
    '/#X-Amz-Target=AWSEvents.ListArchives',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListArchivesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListArchivesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.ListArchives'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsListArchives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListArchivesMutationOptions<
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

export function getPostXAmzTargetAWSEventsListConnectionsMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListConnections',
    '/#X-Amz-Target=AWSEvents.ListConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.ListConnections'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsListConnections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListConnectionsMutationOptions<
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

export function getPostXAmzTargetAWSEventsListEventBusesMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListEventBuses',
    '/#X-Amz-Target=AWSEvents.ListEventBuses',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListEventBusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListEventBusesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.ListEventBuses'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsListEventBuses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListEventBusesMutationOptions<
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

export function getPostXAmzTargetAWSEventsListEventSourcesMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListEventSources',
    '/#X-Amz-Target=AWSEvents.ListEventSources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListEventSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListEventSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.ListEventSources'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsListEventSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListEventSourcesMutationOptions<
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

export function getPostXAmzTargetAWSEventsListPartnerEventSourceAccountsMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts',
    '/#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListPartnerEventSourceAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListPartnerEventSourceAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsListPartnerEventSourceAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSEventsListPartnerEventSourceAccountsMutationOptions<
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

export function getPostXAmzTargetAWSEventsListPartnerEventSourcesMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListPartnerEventSources',
    '/#X-Amz-Target=AWSEvents.ListPartnerEventSources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListPartnerEventSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListPartnerEventSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.ListPartnerEventSources'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsListPartnerEventSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListPartnerEventSourcesMutationOptions<
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

export function getPostXAmzTargetAWSEventsListReplaysMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListReplays',
    '/#X-Amz-Target=AWSEvents.ListReplays',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListReplaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListReplaysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.ListReplays'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsListReplays<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListReplaysMutationOptions<
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

export function getPostXAmzTargetAWSEventsListRuleNamesByTargetMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListRuleNamesByTarget',
    '/#X-Amz-Target=AWSEvents.ListRuleNamesByTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListRuleNamesByTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListRuleNamesByTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsListRuleNamesByTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListRuleNamesByTargetMutationOptions<
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

export function getPostXAmzTargetAWSEventsListRulesMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListRules',
    '/#X-Amz-Target=AWSEvents.ListRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.ListRules'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsListRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListRulesMutationOptions<
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

export function getPostXAmzTargetAWSEventsListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListTagsForResource',
    '/#X-Amz-Target=AWSEvents.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTagsForResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsListTargetsByRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.ListTargetsByRule',
    '/#X-Amz-Target=AWSEvents.ListTargetsByRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsListTargetsByRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsListTargetsByRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.ListTargetsByRule'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsListTargetsByRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsListTargetsByRuleMutationOptions<
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

export function getPostXAmzTargetAWSEventsPutEventsMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutEvents',
    '/#X-Amz-Target=AWSEvents.PutEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsPutEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsPutEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.PutEvents'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsPutEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsPutEventsMutationOptions<
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

export function getPostXAmzTargetAWSEventsPutPartnerEventsMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutPartnerEvents',
    '/#X-Amz-Target=AWSEvents.PutPartnerEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsPutPartnerEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsPutPartnerEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.PutPartnerEvents'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsPutPartnerEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsPutPartnerEventsMutationOptions<
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

export function getPostXAmzTargetAWSEventsPutPermissionMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutPermission',
    '/#X-Amz-Target=AWSEvents.PutPermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsPutPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsPutPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.PutPermission'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsPutPermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsPutPermissionMutationOptions<
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

export function getPostXAmzTargetAWSEventsPutRuleMutationKey() {
  return ['#X-Amz-Target=AWSEvents.PutRule', '/#X-Amz-Target=AWSEvents.PutRule', 'POST'] as const
}

export function getPostXAmzTargetAWSEventsPutRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsPutRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.PutRule'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsPutRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsPutRuleMutationOptions<
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

export function getPostXAmzTargetAWSEventsPutTargetsMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.PutTargets',
    '/#X-Amz-Target=AWSEvents.PutTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsPutTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsPutTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.PutTargets'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsPutTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsPutTargetsMutationOptions<
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

export function getPostXAmzTargetAWSEventsRemovePermissionMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.RemovePermission',
    '/#X-Amz-Target=AWSEvents.RemovePermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsRemovePermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsRemovePermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.RemovePermission'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsRemovePermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsRemovePermissionMutationOptions<
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

export function getPostXAmzTargetAWSEventsRemoveTargetsMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.RemoveTargets',
    '/#X-Amz-Target=AWSEvents.RemoveTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsRemoveTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsRemoveTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.RemoveTargets'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsRemoveTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsRemoveTargetsMutationOptions<
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

export function getPostXAmzTargetAWSEventsStartReplayMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.StartReplay',
    '/#X-Amz-Target=AWSEvents.StartReplay',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsStartReplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsStartReplayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.StartReplay'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsStartReplay<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsStartReplayMutationOptions<
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

export function getPostXAmzTargetAWSEventsTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.TagResource',
    '/#X-Amz-Target=AWSEvents.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.TagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsTagResourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsTestEventPatternMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.TestEventPattern',
    '/#X-Amz-Target=AWSEvents.TestEventPattern',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsTestEventPatternMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsTestEventPatternMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.TestEventPattern'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsTestEventPattern<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsTestEventPatternMutationOptions<
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

export function getPostXAmzTargetAWSEventsUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.UntagResource',
    '/#X-Amz-Target=AWSEvents.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.UntagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsUntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSEventsUpdateApiDestinationMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.UpdateApiDestination',
    '/#X-Amz-Target=AWSEvents.UpdateApiDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsUpdateApiDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateApiDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsUpdateApiDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSEvents.UpdateApiDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSEvents.UpdateApiDestination'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSEventsUpdateApiDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateApiDestination']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsUpdateApiDestinationMutationOptions<
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

export function getPostXAmzTargetAWSEventsUpdateArchiveMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.UpdateArchive',
    '/#X-Amz-Target=AWSEvents.UpdateArchive',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsUpdateArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsUpdateArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.UpdateArchive'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsUpdateArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsUpdateArchiveMutationOptions<
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

export function getPostXAmzTargetAWSEventsUpdateConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSEvents.UpdateConnection',
    '/#X-Amz-Target=AWSEvents.UpdateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSEventsUpdateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSEventsUpdateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSEvents.UpdateConnection'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSEventsUpdateConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSEventsUpdateConnectionMutationOptions<
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
