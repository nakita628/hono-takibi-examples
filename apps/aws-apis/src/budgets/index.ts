import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSBudgetServiceGatewayCreateBudgetActionHandler,
  XAmzTargetAWSBudgetServiceGatewayCreateBudgetHandler,
  XAmzTargetAWSBudgetServiceGatewayCreateNotificationHandler,
  XAmzTargetAWSBudgetServiceGatewayCreateSubscriberHandler,
  XAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionHandler,
  XAmzTargetAWSBudgetServiceGatewayDeleteBudgetHandler,
  XAmzTargetAWSBudgetServiceGatewayDeleteNotificationHandler,
  XAmzTargetAWSBudgetServiceGatewayDeleteSubscriberHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeBudgetsHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetHandler,
  XAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationHandler,
  XAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionHandler,
  XAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionHandler,
  XAmzTargetAWSBudgetServiceGatewayUpdateBudgetHandler,
  XAmzTargetAWSBudgetServiceGatewayUpdateNotificationHandler,
  XAmzTargetAWSBudgetServiceGatewayUpdateSubscriberHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSBudgetServiceGatewayCreateBudgetHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayCreateBudgetActionHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayCreateNotificationHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayCreateSubscriberHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDeleteBudgetHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDeleteNotificationHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDeleteSubscriberHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeBudgetsHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayUpdateBudgetHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayUpdateNotificationHandler)
  .route('/', XAmzTargetAWSBudgetServiceGatewayUpdateSubscriberHandler)

export default app
