import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayCreateBudget<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetAction<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateNotificationMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayCreateNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayCreateNotification<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayCreateNotificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateSubscriberMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber',
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayCreateSubscriberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayCreateSubscriberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayCreateSubscriber<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayCreateSubscriberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDeleteBudget<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetAction<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteNotificationMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDeleteNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDeleteNotification<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDeleteNotificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriber<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudget<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetAction<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistories<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccount<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudget<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccount<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistory<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgets<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudget<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotification<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetAction<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayUpdateBudget<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetAction<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateNotificationMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayUpdateNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayUpdateNotification<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayUpdateNotificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberMutationKey() {
  return [
    '#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber',
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriber<
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
                  (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
