type MessagePartBody = {
  attachmentId?: string | undefined
  data?: string | undefined
  size?: number | undefined
}
type MessagePartHeader = { name?: string | undefined; value?: string | undefined }
type MessagePart = {
  body?: MessagePartBody | undefined
  filename?: string | undefined
  headers?: MessagePartHeader[] | undefined
  mimeType?: string | undefined
  partId?: string | undefined
  parts?: MessagePart[] | undefined
}
type Message = {
  historyId?: string | undefined
  id?: string | undefined
  internalDate?: string | undefined
  labelIds?: string[] | undefined
  payload?: MessagePart | undefined
  raw?: string | undefined
  sizeEstimate?: number | undefined
  snippet?: string | undefined
  threadId?: string | undefined
}
type Draft = { id?: string | undefined; message?: Message | undefined }
type ListDraftsResponse = {
  drafts?: Draft[] | undefined
  nextPageToken?: string | undefined
  resultSizeEstimate?: number | undefined
}
type HistoryLabelAdded = { labelIds?: string[] | undefined; message?: Message | undefined }
type HistoryLabelRemoved = { labelIds?: string[] | undefined; message?: Message | undefined }
type HistoryMessageAdded = { message?: Message | undefined }
type HistoryMessageDeleted = { message?: Message | undefined }
type History = {
  id?: string | undefined
  labelsAdded?: HistoryLabelAdded[] | undefined
  labelsRemoved?: HistoryLabelRemoved[] | undefined
  messages?: Message[] | undefined
  messagesAdded?: HistoryMessageAdded[] | undefined
  messagesDeleted?: HistoryMessageDeleted[] | undefined
}
type ListHistoryResponse = {
  history?: History[] | undefined
  historyId?: string | undefined
  nextPageToken?: string | undefined
}
type LabelColor = { backgroundColor?: string | undefined; textColor?: string | undefined }
type Label = {
  color?: LabelColor | undefined
  id?: string | undefined
  labelListVisibility?: 'labelShow' | 'labelShowIfUnread' | 'labelHide' | undefined
  messageListVisibility?: 'show' | 'hide' | undefined
  messagesTotal?: number | undefined
  messagesUnread?: number | undefined
  name?: string | undefined
  threadsTotal?: number | undefined
  threadsUnread?: number | undefined
  type?: 'system' | 'user' | undefined
}
type ListLabelsResponse = { labels?: Label[] | undefined }
type ListMessagesResponse = {
  messages?: Message[] | undefined
  nextPageToken?: string | undefined
  resultSizeEstimate?: number | undefined
}
type BatchDeleteMessagesRequest = { ids?: string[] | undefined }
type BatchModifyMessagesRequest = {
  addLabelIds?: string[] | undefined
  ids?: string[] | undefined
  removeLabelIds?: string[] | undefined
}
type ModifyMessageRequest = {
  addLabelIds?: string[] | undefined
  removeLabelIds?: string[] | undefined
}
type Profile = {
  emailAddress?: string | undefined
  historyId?: string | undefined
  messagesTotal?: number | undefined
  threadsTotal?: number | undefined
}
type AutoForwarding = {
  disposition?:
    | 'dispositionUnspecified'
    | 'leaveInInbox'
    | 'archive'
    | 'trash'
    | 'markRead'
    | undefined
  emailAddress?: string | undefined
  enabled?: boolean | undefined
}
type SignAndEncryptKeyPairs = {
  encryptionKeyPairId?: string | undefined
  signingKeyPairId?: string | undefined
}
type CseIdentity = {
  emailAddress?: string | undefined
  primaryKeyPairId?: string | undefined
  signAndEncryptKeyPairs?: SignAndEncryptKeyPairs | undefined
}
type ListCseIdentitiesResponse = {
  cseIdentities?: CseIdentity[] | undefined
  nextPageToken?: string | undefined
}
type HardwareKeyMetadata = { description?: string | undefined }
type KaclsKeyMetadata = { kaclsData?: string | undefined; kaclsUri?: string | undefined }
type CsePrivateKeyMetadata = {
  hardwareKeyMetadata?: HardwareKeyMetadata | undefined
  kaclsKeyMetadata?: KaclsKeyMetadata | undefined
  privateKeyMetadataId?: string | undefined
}
type CseKeyPair = {
  disableTime?: string | undefined
  enablementState?: 'stateUnspecified' | 'enabled' | 'disabled' | undefined
  keyPairId?: string | undefined
  pem?: string | undefined
  pkcs7?: string | undefined
  privateKeyMetadata?: CsePrivateKeyMetadata[] | undefined
  subjectEmailAddresses?: string[] | undefined
}
type ListCseKeyPairsResponse = {
  cseKeyPairs?: CseKeyPair[] | undefined
  nextPageToken?: string | undefined
}
type DisableCseKeyPairRequest = { [x: string]: unknown }
type EnableCseKeyPairRequest = { [x: string]: unknown }
type ObliterateCseKeyPairRequest = { [x: string]: unknown }
type Delegate = {
  delegateEmail?: string | undefined
  verificationStatus?:
    | 'verificationStatusUnspecified'
    | 'accepted'
    | 'pending'
    | 'rejected'
    | 'expired'
    | undefined
}
type ListDelegatesResponse = { delegates?: Delegate[] | undefined }
type FilterAction = {
  addLabelIds?: string[] | undefined
  forward?: string | undefined
  removeLabelIds?: string[] | undefined
}
type FilterCriteria = {
  excludeChats?: boolean | undefined
  from?: string | undefined
  hasAttachment?: boolean | undefined
  negatedQuery?: string | undefined
  query?: string | undefined
  size?: number | undefined
  sizeComparison?: 'unspecified' | 'smaller' | 'larger' | undefined
  subject?: string | undefined
  to?: string | undefined
}
type Filter = {
  action?: FilterAction | undefined
  criteria?: FilterCriteria | undefined
  id?: string | undefined
}
type ListFiltersResponse = { filter?: Filter[] | undefined }
type ForwardingAddress = {
  forwardingEmail?: string | undefined
  verificationStatus?: 'verificationStatusUnspecified' | 'accepted' | 'pending' | undefined
}
type ListForwardingAddressesResponse = { forwardingAddresses?: ForwardingAddress[] | undefined }
type ImapSettings = {
  autoExpunge?: boolean | undefined
  enabled?: boolean | undefined
  expungeBehavior?: 'expungeBehaviorUnspecified' | 'archive' | 'trash' | 'deleteForever' | undefined
  maxFolderSize?: number | undefined
}
type LanguageSettings = { displayLanguage?: string | undefined }
type PopSettings = {
  accessWindow?: 'accessWindowUnspecified' | 'disabled' | 'fromNowOn' | 'allMail' | undefined
  disposition?:
    | 'dispositionUnspecified'
    | 'leaveInInbox'
    | 'archive'
    | 'trash'
    | 'markRead'
    | undefined
}
type SmtpMsa = {
  host?: string | undefined
  password?: string | undefined
  port?: number | undefined
  securityMode?: 'securityModeUnspecified' | 'none' | 'ssl' | 'starttls' | undefined
  username?: string | undefined
}
type SendAs = {
  displayName?: string | undefined
  isDefault?: boolean | undefined
  isPrimary?: boolean | undefined
  replyToAddress?: string | undefined
  sendAsEmail?: string | undefined
  signature?: string | undefined
  smtpMsa?: SmtpMsa | undefined
  treatAsAlias?: boolean | undefined
  verificationStatus?: 'verificationStatusUnspecified' | 'accepted' | 'pending' | undefined
}
type ListSendAsResponse = { sendAs?: SendAs[] | undefined }
type SmimeInfo = {
  encryptedKeyPassword?: string | undefined
  expiration?: string | undefined
  id?: string | undefined
  isDefault?: boolean | undefined
  issuerCn?: string | undefined
  pem?: string | undefined
  pkcs12?: string | undefined
}
type ListSmimeInfoResponse = { smimeInfo?: SmimeInfo[] | undefined }
type VacationSettings = {
  enableAutoReply?: boolean | undefined
  endTime?: string | undefined
  responseBodyHtml?: string | undefined
  responseBodyPlainText?: string | undefined
  responseSubject?: string | undefined
  restrictToContacts?: boolean | undefined
  restrictToDomain?: boolean | undefined
  startTime?: string | undefined
}
type Thread = {
  historyId?: string | undefined
  id?: string | undefined
  messages?: Message[] | undefined
  snippet?: string | undefined
}
type ListThreadsResponse = {
  nextPageToken?: string | undefined
  resultSizeEstimate?: number | undefined
  threads?: Thread[] | undefined
}
type ModifyThreadRequest = {
  addLabelIds?: string[] | undefined
  removeLabelIds?: string[] | undefined
}
type WatchRequest = {
  labelFilterAction?: 'include' | 'exclude' | undefined
  labelFilterBehavior?: 'include' | 'exclude' | undefined
  labelIds?: string[] | undefined
  topicName?: string | undefined
}
type WatchResponse = { expiration?: string | undefined; historyId?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/gmail/v1/users/:userId/drafts': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            includeSpamTrash?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            q?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListDraftsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Draft
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/drafts/send': {
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/drafts/:id': {
      $delete: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; id: string } } & {
          query: {
            format?: 'minimal' | 'full' | 'raw' | 'metadata' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Draft
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Draft
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/history': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            historyTypes?:
              | ('messageAdded' | 'messageDeleted' | 'labelAdded' | 'labelRemoved')[]
              | undefined
            labelId?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            startHistoryId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/labels': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLabelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Label }
        output: Label
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/labels/:id': {
      $delete: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Label
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Label }
        output: Label
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Label }
        output: Label
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            includeSpamTrash?: boolean | undefined
            labelIds?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            q?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListMessagesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            deleted?: boolean | undefined
            internalDateSource?: 'receivedTime' | 'dateHeader' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/batchDelete': {
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchDeleteMessagesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/batchModify': {
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchModifyMessagesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/import': {
      $post: {
        input: { param: { userId: string } } & {
          query: {
            deleted?: boolean | undefined
            internalDateSource?: 'receivedTime' | 'dateHeader' | undefined
            neverMarkSpam?: boolean | undefined
            processForCalendar?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/send': {
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/:id': {
      $delete: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; id: string } } & {
          query: {
            format?: 'minimal' | 'full' | 'raw' | 'metadata' | undefined
            metadataHeaders?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/:id/modify': {
      $post: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ModifyMessageRequest }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/:id/trash': {
      $post: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/:id/untrash': {
      $post: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/messages/:messageId/attachments/:id': {
      $get: {
        input: { param: { userId: string; messageId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: MessagePartBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/profile': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/autoForwarding': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AutoForwarding
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AutoForwarding }
        output: AutoForwarding
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/identities': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListCseIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CseIdentity }
        output: CseIdentity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/identities/:cseEmailAddress': {
      $delete: {
        input: { param: { userId: string; cseEmailAddress: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; cseEmailAddress: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CseIdentity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/identities/:emailAddress': {
      $patch: {
        input: { param: { userId: string; emailAddress: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CseIdentity }
        output: CseIdentity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/keypairs': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListCseKeyPairsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CseKeyPair }
        output: CseKeyPair
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId': {
      $get: {
        input: { param: { userId: string; keyPairId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CseKeyPair
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:disable': {
      $post: {
        input: { param: { userId: string; keyPairId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DisableCseKeyPairRequest }
        output: CseKeyPair
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:enable': {
      $post: {
        input: { param: { userId: string; keyPairId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: EnableCseKeyPairRequest }
        output: CseKeyPair
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:obliterate': {
      $post: {
        input: { param: { userId: string; keyPairId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ObliterateCseKeyPairRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/delegates': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListDelegatesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Delegate }
        output: Delegate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/delegates/:delegateEmail': {
      $delete: {
        input: { param: { userId: string; delegateEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; delegateEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Delegate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/filters': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListFiltersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Filter }
        output: Filter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/filters/:id': {
      $delete: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Filter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/forwardingAddresses': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListForwardingAddressesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ForwardingAddress }
        output: ForwardingAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/forwardingAddresses/:forwardingEmail': {
      $delete: {
        input: { param: { userId: string; forwardingEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; forwardingEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ForwardingAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/imap': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ImapSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ImapSettings }
        output: ImapSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/language': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LanguageSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LanguageSettings }
        output: LanguageSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/pop': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PopSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PopSettings }
        output: PopSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/sendAs': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListSendAsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SendAs }
        output: SendAs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail': {
      $delete: {
        input: { param: { userId: string; sendAsEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; sendAsEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SendAs
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userId: string; sendAsEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SendAs }
        output: SendAs
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string; sendAsEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SendAs }
        output: SendAs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo': {
      $get: {
        input: { param: { userId: string; sendAsEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListSmimeInfoResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string; sendAsEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SmimeInfo }
        output: SmimeInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id': {
      $delete: {
        input: { param: { userId: string; sendAsEmail: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; sendAsEmail: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SmimeInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id/setDefault': {
      $post: {
        input: { param: { userId: string; sendAsEmail: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/verify': {
      $post: {
        input: { param: { userId: string; sendAsEmail: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/settings/vacation': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: VacationSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: VacationSettings }
        output: VacationSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/stop': {
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/threads': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            includeSpamTrash?: boolean | undefined
            labelIds?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            q?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListThreadsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/threads/:id': {
      $delete: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { userId: string; id: string } } & {
          query: {
            format?: 'full' | 'metadata' | 'minimal' | undefined
            metadataHeaders?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Thread
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/threads/:id/modify': {
      $post: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ModifyThreadRequest }
        output: Thread
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/threads/:id/trash': {
      $post: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Thread
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/threads/:id/untrash': {
      $post: {
        input: { param: { userId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Thread
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gmail/v1/users/:userId/watch': {
      $post: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: WatchRequest }
        output: WatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
