import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSBudgetServiceGatewayCreateBudgetKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayCreateNotificationKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayCreateSubscriberKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDeleteBudgetKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDeleteNotificationKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayUpdateBudgetKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayUpdateNotificationKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification'] as const
}

export function getXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberKey() {
  return ['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber'] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayCreateBudget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayCreateBudgetAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateNotificationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayCreateNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayCreateNotificationKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateSubscriberKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayCreateSubscriber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayCreateSubscriberKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDeleteBudget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteNotificationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDeleteNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDeleteNotificationKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeBudgets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayUpdateBudget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateNotificationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayUpdateNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayUpdateNotificationKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberKey()
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
            (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
