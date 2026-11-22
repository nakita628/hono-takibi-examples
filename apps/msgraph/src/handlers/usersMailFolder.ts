import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
  deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1Route,
  deleteUsersUserIdMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdRoute,
  deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdValueRoute,
  deleteUsersUserIdMailFoldersMailFolderIdRoute,
  getUsersUserIdMailFoldersCountRoute,
  getUsersUserIdMailFoldersDeltaRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersDeltaRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesDeltaRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1Route,
  getUsersUserIdMailFoldersMailFolderIdChildFoldersRoute,
  getUsersUserIdMailFoldersMailFolderIdMessageRulesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute,
  getUsersUserIdMailFoldersMailFolderIdMessageRulesRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesDeltaRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdValueRoute,
  getUsersUserIdMailFoldersMailFolderIdMessagesRoute,
  getUsersUserIdMailFoldersMailFolderIdRoute,
  getUsersUserIdMailFoldersRoute,
  patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
  patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
  patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
  patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1Route,
  patchUsersUserIdMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute,
  patchUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
  patchUsersUserIdMailFoldersMailFolderIdMessagesMessageIdRoute,
  patchUsersUserIdMailFoldersMailFolderIdRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1CopyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCopyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMoveRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdPermanentDeleteRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSendRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MoveRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1PermanentDeleteRoute,
  postUsersUserIdMailFoldersMailFolderIdChildFoldersRoute,
  postUsersUserIdMailFoldersMailFolderIdCopyRoute,
  postUsersUserIdMailFoldersMailFolderIdMessageRulesRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCopyRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCreateForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCreateReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCreateReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdForwardRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMoveRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdPermanentDeleteRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdReplyAllRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdReplyRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdSendRoute,
  postUsersUserIdMailFoldersMailFolderIdMessagesRoute,
  postUsersUserIdMailFoldersMailFolderIdMoveRoute,
  postUsersUserIdMailFoldersMailFolderIdPermanentDeleteRoute,
  postUsersUserIdMailFoldersRoute,
  putUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
  putUsersUserIdMailFoldersMailFolderIdMessagesMessageIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersMailFolderHandler = app
  .openapi(getUsersUserIdMailFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMailFoldersMailFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMailFoldersMailFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdChildFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesMessageRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessageRulesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCopyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdCreateReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdMoveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdPermanentDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdReplyAllRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesMessageIdSendRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MessagesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1CopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1MoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdChildFoldersMailFolderId1PermanentDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdChildFoldersDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessageRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessageRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMailFoldersMailFolderIdMessageRulesMessageRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessageRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMailFoldersMailFolderIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdMailFoldersMailFolderIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCreateForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCreateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdCreateReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMessagesMessageIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersMailFolderIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMailFoldersMailFolderIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMailFoldersDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
