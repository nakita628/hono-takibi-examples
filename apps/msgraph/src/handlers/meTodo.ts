import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeTodoListsTodoTaskListIdExtensionsExtensionIdRoute,
  deleteMeTodoListsTodoTaskListIdRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdValueRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdContentRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsChecklistItemIdRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsExtensionIdRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesLinkedResourceIdRoute,
  deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdRoute,
  deleteMeTodoRoute,
  getMeTodoListsCountRoute,
  getMeTodoListsDeltaRoute,
  getMeTodoListsRoute,
  getMeTodoListsTodoTaskListIdExtensionsCountRoute,
  getMeTodoListsTodoTaskListIdExtensionsExtensionIdRoute,
  getMeTodoListsTodoTaskListIdExtensionsRoute,
  getMeTodoListsTodoTaskListIdRoute,
  getMeTodoListsTodoTaskListIdTasksCountRoute,
  getMeTodoListsTodoTaskListIdTasksDeltaRoute,
  getMeTodoListsTodoTaskListIdTasksRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdValueRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdContentRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsChecklistItemIdRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsExtensionIdRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesCountRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesLinkedResourceIdRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesRoute,
  getMeTodoListsTodoTaskListIdTasksTodoTaskIdRoute,
  getMeTodoRoute,
  patchMeTodoListsTodoTaskListIdExtensionsExtensionIdRoute,
  patchMeTodoListsTodoTaskListIdRoute,
  patchMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdRoute,
  patchMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsChecklistItemIdRoute,
  patchMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsExtensionIdRoute,
  patchMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesLinkedResourceIdRoute,
  patchMeTodoListsTodoTaskListIdTasksTodoTaskIdRoute,
  patchMeTodoRoute,
  postMeTodoListsRoute,
  postMeTodoListsTodoTaskListIdExtensionsRoute,
  postMeTodoListsTodoTaskListIdTasksRoute,
  postMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCreateUploadSessionRoute,
  postMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsRoute,
  postMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsRoute,
  postMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsRoute,
  postMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesRoute,
  putMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdValueRoute,
  putMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meTodoHandler = app
  .openapi(getMeTodoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTodoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTodoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTodoListsTodoTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTodoListsTodoTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsTodoTaskListIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTodoListsTodoTaskListIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTodoListsTodoTaskListIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsTodoTaskListIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTodoListsTodoTaskListIdTasksTodoTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsAttachmentBaseIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsAttachmentSessionIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdAttachmentSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsChecklistItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsChecklistItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsChecklistItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdChecklistItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesLinkedResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesLinkedResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesLinkedResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeTodoListsTodoTaskListIdTasksTodoTaskIdLinkedResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsTodoTaskListIdTasksDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTodoListsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
