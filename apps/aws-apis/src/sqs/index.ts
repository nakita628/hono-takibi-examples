import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountNumberHandler,
  actionAddPermissionHandler,
  actionCancelMessageMoveTaskHandler,
  actionChangeMessageVisibilityBatchHandler,
  actionChangeMessageVisibilityHandler,
  actionCreateQueueHandler,
  actionDeleteMessageBatchHandler,
  actionDeleteMessageHandler,
  actionDeleteQueueHandler,
  actionGetQueueAttributesHandler,
  actionGetQueueUrlHandler,
  actionListDeadLetterSourceQueuesHandler,
  actionListMessageMoveTasksHandler,
  actionListQueuesHandler,
  actionListQueueTagsHandler,
  actionPurgeQueueHandler,
  actionReceiveMessageHandler,
  actionRemovePermissionHandler,
  actionSendMessageBatchHandler,
  actionSendMessageHandler,
  actionSetQueueAttributesHandler,
  actionStartMessageMoveTaskHandler,
  actionTagQueueHandler,
  actionUntagQueueHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountNumberHandler)
  .route('/', actionAddPermissionHandler)
  .route('/', actionCancelMessageMoveTaskHandler)
  .route('/', actionChangeMessageVisibilityHandler)
  .route('/', actionChangeMessageVisibilityBatchHandler)
  .route('/', actionCreateQueueHandler)
  .route('/', actionDeleteMessageHandler)
  .route('/', actionDeleteMessageBatchHandler)
  .route('/', actionDeleteQueueHandler)
  .route('/', actionGetQueueAttributesHandler)
  .route('/', actionGetQueueUrlHandler)
  .route('/', actionListDeadLetterSourceQueuesHandler)
  .route('/', actionListMessageMoveTasksHandler)
  .route('/', actionListQueueTagsHandler)
  .route('/', actionListQueuesHandler)
  .route('/', actionPurgeQueueHandler)
  .route('/', actionReceiveMessageHandler)
  .route('/', actionRemovePermissionHandler)
  .route('/', actionSendMessageHandler)
  .route('/', actionSendMessageBatchHandler)
  .route('/', actionSetQueueAttributesHandler)
  .route('/', actionStartMessageMoveTaskHandler)
  .route('/', actionTagQueueHandler)
  .route('/', actionUntagQueueHandler)

export default app
