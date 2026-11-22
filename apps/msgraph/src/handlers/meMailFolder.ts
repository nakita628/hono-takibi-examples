import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
  deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
  deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
  deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
  deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1Route,
  deleteMeMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute,
  deleteMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteMeMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
  deleteMeMailFoldersMailFolderIdMessagesMessageIdRoute,
  deleteMeMailFoldersMailFolderIdMessagesMessageIdValueRoute,
  deleteMeMailFoldersMailFolderIdRoute,
  getMeMailFoldersCountRoute,
  getMeMailFoldersDeltaRoute,
  getMeMailFoldersMailFolderIdChildFoldersCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersDeltaRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesDeltaRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute,
  getMeMailFoldersMailFolderIdChildFoldersMailFolderId1Route,
  getMeMailFoldersMailFolderIdChildFoldersRoute,
  getMeMailFoldersMailFolderIdMessageRulesCountRoute,
  getMeMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute,
  getMeMailFoldersMailFolderIdMessageRulesRoute,
  getMeMailFoldersMailFolderIdMessagesCountRoute,
  getMeMailFoldersMailFolderIdMessagesDeltaRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdRoute,
  getMeMailFoldersMailFolderIdMessagesMessageIdValueRoute,
  getMeMailFoldersMailFolderIdMessagesRoute,
  getMeMailFoldersMailFolderIdRoute,
  getMeMailFoldersRoute,
  patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
  patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
  patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
  patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1Route,
  patchMeMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute,
  patchMeMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
  patchMeMailFoldersMailFolderIdMessagesMessageIdRoute,
  patchMeMailFoldersMailFolderIdRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1CopyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCreateUploadSessionRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCopyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateForwardRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyAllRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdForwardRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMoveRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdPermanentDeleteRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyAllRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSendRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MoveRoute,
  postMeMailFoldersMailFolderIdChildFoldersMailFolderId1PermanentDeleteRoute,
  postMeMailFoldersMailFolderIdChildFoldersRoute,
  postMeMailFoldersMailFolderIdCopyRoute,
  postMeMailFoldersMailFolderIdMessageRulesRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsCreateUploadSessionRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdCopyRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdCreateForwardRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdCreateReplyAllRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdCreateReplyRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdForwardRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdMoveRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdPermanentDeleteRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdReplyAllRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdReplyRoute,
  postMeMailFoldersMailFolderIdMessagesMessageIdSendRoute,
  postMeMailFoldersMailFolderIdMessagesRoute,
  postMeMailFoldersMailFolderIdMoveRoute,
  postMeMailFoldersMailFolderIdPermanentDeleteRoute,
  postMeMailFoldersRoute,
  putMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
  putMeMailFoldersMailFolderIdMessagesMessageIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meMailFolderHandler = app
  .openapi(getMeMailFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMailFoldersMailFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdChildFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCopyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMoveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdPermanentDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSendRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdChildFoldersMailFolderId1CopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdChildFoldersMailFolderId1MoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdChildFoldersMailFolderId1PermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdChildFoldersDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessageRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessageRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessageRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMailFoldersMailFolderIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeMailFoldersMailFolderIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeMailFoldersMailFolderIdMessagesMessageIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdCreateForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdCreateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdCreateReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMessagesMessageIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersMailFolderIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMailFoldersMailFolderIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMailFoldersDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
