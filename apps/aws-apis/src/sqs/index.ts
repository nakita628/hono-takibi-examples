import { OpenAPIHono } from '@hono/zod-openapi'
import {
  AccountNumberHandler,
  ActionAddPermissionHandler,
  ActionCancelMessageMoveTaskHandler,
  ActionChangeMessageVisibilityBatchHandler,
  ActionChangeMessageVisibilityHandler,
  ActionCreateQueueHandler,
  ActionDeleteMessageBatchHandler,
  ActionDeleteMessageHandler,
  ActionDeleteQueueHandler,
  ActionGetQueueAttributesHandler,
  ActionGetQueueUrlHandler,
  ActionListDeadLetterSourceQueuesHandler,
  ActionListMessageMoveTasksHandler,
  ActionListQueuesHandler,
  ActionListQueueTagsHandler,
  ActionPurgeQueueHandler,
  ActionReceiveMessageHandler,
  ActionRemovePermissionHandler,
  ActionSendMessageBatchHandler,
  ActionSendMessageHandler,
  ActionSetQueueAttributesHandler,
  ActionStartMessageMoveTaskHandler,
  ActionTagQueueHandler,
  ActionUntagQueueHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', AccountNumberHandler)
  .route('/', ActionAddPermissionHandler)
  .route('/', ActionCancelMessageMoveTaskHandler)
  .route('/', ActionChangeMessageVisibilityHandler)
  .route('/', ActionChangeMessageVisibilityBatchHandler)
  .route('/', ActionCreateQueueHandler)
  .route('/', ActionDeleteMessageHandler)
  .route('/', ActionDeleteMessageBatchHandler)
  .route('/', ActionDeleteQueueHandler)
  .route('/', ActionGetQueueAttributesHandler)
  .route('/', ActionGetQueueUrlHandler)
  .route('/', ActionListDeadLetterSourceQueuesHandler)
  .route('/', ActionListMessageMoveTasksHandler)
  .route('/', ActionListQueueTagsHandler)
  .route('/', ActionListQueuesHandler)
  .route('/', ActionPurgeQueueHandler)
  .route('/', ActionReceiveMessageHandler)
  .route('/', ActionRemovePermissionHandler)
  .route('/', ActionSendMessageHandler)
  .route('/', ActionSendMessageBatchHandler)
  .route('/', ActionSetQueueAttributesHandler)
  .route('/', ActionStartMessageMoveTaskHandler)
  .route('/', ActionTagQueueHandler)
  .route('/', ActionUntagQueueHandler)

export default app
