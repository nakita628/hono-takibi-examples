import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountNumberQueueNameActionAddPermissionRoute,
  getAccountNumberQueueNameActionChangeMessageVisibilityBatchRoute,
  getAccountNumberQueueNameActionChangeMessageVisibilityRoute,
  getAccountNumberQueueNameActionDeleteMessageBatchRoute,
  getAccountNumberQueueNameActionDeleteMessageRoute,
  getAccountNumberQueueNameActionDeleteQueueRoute,
  getAccountNumberQueueNameActionGetQueueAttributesRoute,
  getAccountNumberQueueNameActionListDeadLetterSourceQueuesRoute,
  getAccountNumberQueueNameActionListQueueTagsRoute,
  getAccountNumberQueueNameActionPurgeQueueRoute,
  getAccountNumberQueueNameActionReceiveMessageRoute,
  getAccountNumberQueueNameActionRemovePermissionRoute,
  getAccountNumberQueueNameActionSendMessageBatchRoute,
  getAccountNumberQueueNameActionSendMessageRoute,
  getAccountNumberQueueNameActionSetQueueAttributesRoute,
  getAccountNumberQueueNameActionTagQueueRoute,
  getAccountNumberQueueNameActionUntagQueueRoute,
  getActionCancelMessageMoveTaskRoute,
  getActionCreateQueueRoute,
  getActionGetQueueUrlRoute,
  getActionListMessageMoveTasksRoute,
  getActionListQueuesRoute,
  getActionStartMessageMoveTaskRoute,
  postActionAddPermissionRoute,
  postActionCancelMessageMoveTaskRoute,
  postActionChangeMessageVisibilityBatchRoute,
  postActionChangeMessageVisibilityRoute,
  postActionCreateQueueRoute,
  postActionDeleteMessageBatchRoute,
  postActionDeleteMessageRoute,
  postActionDeleteQueueRoute,
  postActionGetQueueAttributesRoute,
  postActionGetQueueUrlRoute,
  postActionListDeadLetterSourceQueuesRoute,
  postActionListMessageMoveTasksRoute,
  postActionListQueuesRoute,
  postActionListQueueTagsRoute,
  postActionPurgeQueueRoute,
  postActionReceiveMessageRoute,
  postActionRemovePermissionRoute,
  postActionSendMessageBatchRoute,
  postActionSendMessageRoute,
  postActionSetQueueAttributesRoute,
  postActionStartMessageMoveTaskRoute,
  postActionTagQueueRoute,
  postActionUntagQueueRoute,
} from './routes'
import {
  getAccountNumberQueueNameActionAddPermissionRouteHandler,
  getAccountNumberQueueNameActionChangeMessageVisibilityBatchRouteHandler,
  getAccountNumberQueueNameActionChangeMessageVisibilityRouteHandler,
  getAccountNumberQueueNameActionDeleteMessageBatchRouteHandler,
  getAccountNumberQueueNameActionDeleteMessageRouteHandler,
  getAccountNumberQueueNameActionDeleteQueueRouteHandler,
  getAccountNumberQueueNameActionGetQueueAttributesRouteHandler,
  getAccountNumberQueueNameActionListDeadLetterSourceQueuesRouteHandler,
  getAccountNumberQueueNameActionListQueueTagsRouteHandler,
  getAccountNumberQueueNameActionPurgeQueueRouteHandler,
  getAccountNumberQueueNameActionReceiveMessageRouteHandler,
  getAccountNumberQueueNameActionRemovePermissionRouteHandler,
  getAccountNumberQueueNameActionSendMessageBatchRouteHandler,
  getAccountNumberQueueNameActionSendMessageRouteHandler,
  getAccountNumberQueueNameActionSetQueueAttributesRouteHandler,
  getAccountNumberQueueNameActionTagQueueRouteHandler,
  getAccountNumberQueueNameActionUntagQueueRouteHandler,
  getActionCancelMessageMoveTaskRouteHandler,
  getActionCreateQueueRouteHandler,
  getActionGetQueueUrlRouteHandler,
  getActionListMessageMoveTasksRouteHandler,
  getActionListQueuesRouteHandler,
  getActionStartMessageMoveTaskRouteHandler,
  postActionAddPermissionRouteHandler,
  postActionCancelMessageMoveTaskRouteHandler,
  postActionChangeMessageVisibilityBatchRouteHandler,
  postActionChangeMessageVisibilityRouteHandler,
  postActionCreateQueueRouteHandler,
  postActionDeleteMessageBatchRouteHandler,
  postActionDeleteMessageRouteHandler,
  postActionDeleteQueueRouteHandler,
  postActionGetQueueAttributesRouteHandler,
  postActionGetQueueUrlRouteHandler,
  postActionListDeadLetterSourceQueuesRouteHandler,
  postActionListMessageMoveTasksRouteHandler,
  postActionListQueuesRouteHandler,
  postActionListQueueTagsRouteHandler,
  postActionPurgeQueueRouteHandler,
  postActionReceiveMessageRouteHandler,
  postActionRemovePermissionRouteHandler,
  postActionSendMessageBatchRouteHandler,
  postActionSendMessageRouteHandler,
  postActionSetQueueAttributesRouteHandler,
  postActionStartMessageMoveTaskRouteHandler,
  postActionTagQueueRouteHandler,
  postActionUntagQueueRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getAccountNumberQueueNameActionAddPermissionRoute,
    getAccountNumberQueueNameActionAddPermissionRouteHandler,
  )
  .openapi(postActionAddPermissionRoute, postActionAddPermissionRouteHandler)
  .openapi(getActionCancelMessageMoveTaskRoute, getActionCancelMessageMoveTaskRouteHandler)
  .openapi(postActionCancelMessageMoveTaskRoute, postActionCancelMessageMoveTaskRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionChangeMessageVisibilityRoute,
    getAccountNumberQueueNameActionChangeMessageVisibilityRouteHandler,
  )
  .openapi(postActionChangeMessageVisibilityRoute, postActionChangeMessageVisibilityRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionChangeMessageVisibilityBatchRoute,
    getAccountNumberQueueNameActionChangeMessageVisibilityBatchRouteHandler,
  )
  .openapi(
    postActionChangeMessageVisibilityBatchRoute,
    postActionChangeMessageVisibilityBatchRouteHandler,
  )
  .openapi(getActionCreateQueueRoute, getActionCreateQueueRouteHandler)
  .openapi(postActionCreateQueueRoute, postActionCreateQueueRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionDeleteMessageRoute,
    getAccountNumberQueueNameActionDeleteMessageRouteHandler,
  )
  .openapi(postActionDeleteMessageRoute, postActionDeleteMessageRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionDeleteMessageBatchRoute,
    getAccountNumberQueueNameActionDeleteMessageBatchRouteHandler,
  )
  .openapi(postActionDeleteMessageBatchRoute, postActionDeleteMessageBatchRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionDeleteQueueRoute,
    getAccountNumberQueueNameActionDeleteQueueRouteHandler,
  )
  .openapi(postActionDeleteQueueRoute, postActionDeleteQueueRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionGetQueueAttributesRoute,
    getAccountNumberQueueNameActionGetQueueAttributesRouteHandler,
  )
  .openapi(postActionGetQueueAttributesRoute, postActionGetQueueAttributesRouteHandler)
  .openapi(getActionGetQueueUrlRoute, getActionGetQueueUrlRouteHandler)
  .openapi(postActionGetQueueUrlRoute, postActionGetQueueUrlRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionListDeadLetterSourceQueuesRoute,
    getAccountNumberQueueNameActionListDeadLetterSourceQueuesRouteHandler,
  )
  .openapi(
    postActionListDeadLetterSourceQueuesRoute,
    postActionListDeadLetterSourceQueuesRouteHandler,
  )
  .openapi(getActionListMessageMoveTasksRoute, getActionListMessageMoveTasksRouteHandler)
  .openapi(postActionListMessageMoveTasksRoute, postActionListMessageMoveTasksRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionListQueueTagsRoute,
    getAccountNumberQueueNameActionListQueueTagsRouteHandler,
  )
  .openapi(postActionListQueueTagsRoute, postActionListQueueTagsRouteHandler)
  .openapi(getActionListQueuesRoute, getActionListQueuesRouteHandler)
  .openapi(postActionListQueuesRoute, postActionListQueuesRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionPurgeQueueRoute,
    getAccountNumberQueueNameActionPurgeQueueRouteHandler,
  )
  .openapi(postActionPurgeQueueRoute, postActionPurgeQueueRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionReceiveMessageRoute,
    getAccountNumberQueueNameActionReceiveMessageRouteHandler,
  )
  .openapi(postActionReceiveMessageRoute, postActionReceiveMessageRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionRemovePermissionRoute,
    getAccountNumberQueueNameActionRemovePermissionRouteHandler,
  )
  .openapi(postActionRemovePermissionRoute, postActionRemovePermissionRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionSendMessageRoute,
    getAccountNumberQueueNameActionSendMessageRouteHandler,
  )
  .openapi(postActionSendMessageRoute, postActionSendMessageRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionSendMessageBatchRoute,
    getAccountNumberQueueNameActionSendMessageBatchRouteHandler,
  )
  .openapi(postActionSendMessageBatchRoute, postActionSendMessageBatchRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionSetQueueAttributesRoute,
    getAccountNumberQueueNameActionSetQueueAttributesRouteHandler,
  )
  .openapi(postActionSetQueueAttributesRoute, postActionSetQueueAttributesRouteHandler)
  .openapi(getActionStartMessageMoveTaskRoute, getActionStartMessageMoveTaskRouteHandler)
  .openapi(postActionStartMessageMoveTaskRoute, postActionStartMessageMoveTaskRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionTagQueueRoute,
    getAccountNumberQueueNameActionTagQueueRouteHandler,
  )
  .openapi(postActionTagQueueRoute, postActionTagQueueRouteHandler)
  .openapi(
    getAccountNumberQueueNameActionUntagQueueRoute,
    getAccountNumberQueueNameActionUntagQueueRouteHandler,
  )
  .openapi(postActionUntagQueueRoute, postActionUntagQueueRouteHandler)

export default app
