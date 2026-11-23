import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsBudgetServiceGatewayCreateBudgetActionHandler,
  xAmzTargetAwsBudgetServiceGatewayCreateBudgetHandler,
  xAmzTargetAwsBudgetServiceGatewayCreateNotificationHandler,
  xAmzTargetAwsBudgetServiceGatewayCreateSubscriberHandler,
  xAmzTargetAwsBudgetServiceGatewayDeleteBudgetActionHandler,
  xAmzTargetAwsBudgetServiceGatewayDeleteBudgetHandler,
  xAmzTargetAwsBudgetServiceGatewayDeleteNotificationHandler,
  xAmzTargetAwsBudgetServiceGatewayDeleteSubscriberHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionHistoriesHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionsForAccountHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionsForBudgetHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetNotificationsForAccountHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetPerformanceHistoryHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeBudgetsHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeNotificationsForBudgetHandler,
  xAmzTargetAwsBudgetServiceGatewayDescribeSubscribersForNotificationHandler,
  xAmzTargetAwsBudgetServiceGatewayExecuteBudgetActionHandler,
  xAmzTargetAwsBudgetServiceGatewayUpdateBudgetActionHandler,
  xAmzTargetAwsBudgetServiceGatewayUpdateBudgetHandler,
  xAmzTargetAwsBudgetServiceGatewayUpdateNotificationHandler,
  xAmzTargetAwsBudgetServiceGatewayUpdateSubscriberHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsBudgetServiceGatewayCreateBudgetHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayCreateBudgetActionHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayCreateNotificationHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayCreateSubscriberHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDeleteBudgetHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDeleteBudgetActionHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDeleteNotificationHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDeleteSubscriberHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionHistoriesHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionsForAccountHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionsForBudgetHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetNotificationsForAccountHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetPerformanceHistoryHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeBudgetsHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeNotificationsForBudgetHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayDescribeSubscribersForNotificationHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayExecuteBudgetActionHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayUpdateBudgetHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayUpdateBudgetActionHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayUpdateNotificationHandler)
  .route('/', xAmzTargetAwsBudgetServiceGatewayUpdateSubscriberHandler)

export default app
