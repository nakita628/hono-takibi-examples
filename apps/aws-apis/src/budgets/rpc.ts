import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSBudgetServiceGatewayCreateBudget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayCreateBudgetAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayCreateNotification(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayCreateSubscriber(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDeleteBudget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDeleteNotification(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDeleteSubscriber(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeBudgets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotification(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayExecuteBudgetAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayUpdateBudget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayUpdateBudgetAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayUpdateNotification(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification'].$post(args, options),
  )
}

export async function postXAmzTargetAWSBudgetServiceGatewayUpdateSubscriber(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber'].$post(args, options),
  )
}
