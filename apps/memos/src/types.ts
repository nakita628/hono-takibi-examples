type TranscribeRequest = {
  audio: {
    content?: string | undefined
    uri?: string | undefined
    filename?: string | undefined
    contentType?: string | undefined
  }
}
type TranscribeResponse = { text?: string | undefined }
type GoogleProtobufAny = { '@type'?: string | undefined }
type Status = {
  code?: number | undefined
  message?: string | undefined
  details?: GoogleProtobufAny[] | undefined
}
type Attachment = {
  name?: string | undefined
  creator?: string | undefined
  filename: string
  type: string
  content?: string | undefined
  externalLink?: string | undefined
  motionMedia?:
    | {
        family?:
          | 'MOTION_MEDIA_FAMILY_UNSPECIFIED'
          | 'APPLE_LIVE_PHOTO'
          | 'ANDROID_MOTION_PHOTO'
          | undefined
        role?: 'MOTION_MEDIA_ROLE_UNSPECIFIED' | 'STILL' | 'VIDEO' | 'CONTAINER' | undefined
        groupId?: string | undefined
        presentationTimestampUs?: string | undefined
        hasEmbeddedVideo?: boolean | undefined
      }
    | undefined
  mediaMetadata?:
    | {
        width?: number | undefined
        height?: number | undefined
        photo?:
          | {
              captureTime?:
                | { localDateTime?: string | undefined; utcOffset?: string | undefined }
                | undefined
              location?:
                | {
                    latitude?: number | undefined
                    longitude?: number | undefined
                    altitudeMeters?: number | undefined
                  }
                | undefined
              sourceExifOrientation?: number | undefined
              cameraMake?: string | undefined
              cameraModel?: string | undefined
              lensModel?: string | undefined
              fNumber?: number | undefined
              exposureTimeSeconds?: number | undefined
              iso?: number | undefined
              focalLengthMm?: number | undefined
            }
          | undefined
        video?: { durationSeconds?: number | undefined } | undefined
      }
    | undefined
  memo?: string | undefined
  size?: string | undefined
  createTime?: string | undefined
}
type ListAttachmentsResponse = {
  attachments?: Attachment[] | undefined
  nextPageToken?: string | undefined
}
type BatchDeleteAttachmentsRequest = { names: string[] }
type UploadAttachmentRequest = {
  spec?:
    | {
        attachment: {
          name?: string | undefined
          creator?: string | undefined
          filename: string
          type: string
          content?: string | undefined
          externalLink?: string | undefined
          motionMedia?:
            | {
                family?:
                  | 'MOTION_MEDIA_FAMILY_UNSPECIFIED'
                  | 'APPLE_LIVE_PHOTO'
                  | 'ANDROID_MOTION_PHOTO'
                  | undefined
                role?: 'MOTION_MEDIA_ROLE_UNSPECIFIED' | 'STILL' | 'VIDEO' | 'CONTAINER' | undefined
                groupId?: string | undefined
                presentationTimestampUs?: string | undefined
                hasEmbeddedVideo?: boolean | undefined
              }
            | undefined
          mediaMetadata?:
            | {
                width?: number | undefined
                height?: number | undefined
                photo?:
                  | {
                      captureTime?:
                        | { localDateTime?: string | undefined; utcOffset?: string | undefined }
                        | undefined
                      location?:
                        | {
                            latitude?: number | undefined
                            longitude?: number | undefined
                            altitudeMeters?: number | undefined
                          }
                        | undefined
                      sourceExifOrientation?: number | undefined
                      cameraMake?: string | undefined
                      cameraModel?: string | undefined
                      lensModel?: string | undefined
                      fNumber?: number | undefined
                      exposureTimeSeconds?: number | undefined
                      iso?: number | undefined
                      focalLengthMm?: number | undefined
                    }
                  | undefined
                video?: { durationSeconds?: number | undefined } | undefined
              }
            | undefined
          memo?: string | undefined
          size?: string | undefined
          createTime?: string | undefined
        }
        attachmentId?: string | undefined
        totalSize?: string | undefined
        replaceAttachment?: string | undefined
      }
    | undefined
  uploadId?: string | undefined
  writeOffset: string
  data?: string | undefined
  finishWrite?: boolean | undefined
}
type UploadAttachmentResponse = {
  uploadId?: string | undefined
  committedSize?: string | undefined
  maxChunkSize?: number | undefined
  attachment?:
    | {
        name?: string | undefined
        creator?: string | undefined
        filename: string
        type: string
        content?: string | undefined
        externalLink?: string | undefined
        motionMedia?:
          | {
              family?:
                | 'MOTION_MEDIA_FAMILY_UNSPECIFIED'
                | 'APPLE_LIVE_PHOTO'
                | 'ANDROID_MOTION_PHOTO'
                | undefined
              role?: 'MOTION_MEDIA_ROLE_UNSPECIFIED' | 'STILL' | 'VIDEO' | 'CONTAINER' | undefined
              groupId?: string | undefined
              presentationTimestampUs?: string | undefined
              hasEmbeddedVideo?: boolean | undefined
            }
          | undefined
        mediaMetadata?:
          | {
              width?: number | undefined
              height?: number | undefined
              photo?:
                | {
                    captureTime?:
                      | { localDateTime?: string | undefined; utcOffset?: string | undefined }
                      | undefined
                    location?:
                      | {
                          latitude?: number | undefined
                          longitude?: number | undefined
                          altitudeMeters?: number | undefined
                        }
                      | undefined
                    sourceExifOrientation?: number | undefined
                    cameraMake?: string | undefined
                    cameraModel?: string | undefined
                    lensModel?: string | undefined
                    fNumber?: number | undefined
                    exposureTimeSeconds?: number | undefined
                    iso?: number | undefined
                    focalLengthMm?: number | undefined
                  }
                | undefined
              video?: { durationSeconds?: number | undefined } | undefined
            }
          | undefined
        memo?: string | undefined
        size?: string | undefined
        createTime?: string | undefined
      }
    | undefined
}
type GetCurrentUserResponse = {
  user?:
    | {
        name?: string | undefined
        username: string
        displayName?: string | undefined
        email?: string | undefined
        avatarUrl?: string | undefined
        description?: string | undefined
        password?: string | undefined
        role: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER'
        state: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED'
        createTime?: string | undefined
        updateTime?: string | undefined
      }
    | undefined
}
type RefreshTokenRequest = { [x: string]: unknown }
type RefreshTokenResponse = {
  accessToken?: string | undefined
  accessTokenExpireTime?: string | undefined
}
type SignInRequest = {
  passwordCredentials?: { username: string; password: string } | undefined
  ssoCredentials?:
    | {
        identityProvider: string
        code: string
        redirectUri: string
        codeVerifier?: string | undefined
      }
    | undefined
}
type SignInResponse = {
  user?:
    | {
        name?: string | undefined
        username: string
        displayName?: string | undefined
        email?: string | undefined
        avatarUrl?: string | undefined
        description?: string | undefined
        password?: string | undefined
        role: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER'
        state: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED'
        createTime?: string | undefined
        updateTime?: string | undefined
      }
    | undefined
  accessToken?: string | undefined
  accessTokenExpireTime?: string | undefined
}
type IdentityProvider = {
  name?: string | undefined
  type: 'TYPE_UNSPECIFIED' | 'OAUTH2'
  title: string
  identifierFilter?: string | undefined
  config: {
    oauth2Config?:
      | {
          clientId?: string | undefined
          clientSecret?: string | undefined
          authUrl?: string | undefined
          tokenUrl?: string | undefined
          userInfoUrl?: string | undefined
          scopes?: string[] | undefined
          fieldMapping?:
            | {
                identifier?: string | undefined
                displayName?: string | undefined
                email?: string | undefined
                avatarUrl?: string | undefined
              }
            | undefined
        }
      | undefined
  }
}
type ListIdentityProvidersResponse = { identityProviders?: IdentityProvider[] | undefined }
type ConfigurationStatusManagedResource = {
  resource?: string | undefined
  source?: string | undefined
  managedFields?: string[] | undefined
  ignoredFields?: string[] | undefined
}
type ConfigurationStatus = {
  serial?: string | undefined
  configDigest?: string | undefined
  appliedBy?: string | undefined
  version?: string | undefined
  managedResources?: ConfigurationStatusManagedResource[] | undefined
  applyTime?: string | undefined
}
type InstanceProfile = {
  version?: string | undefined
  commit?: string | undefined
  demo?: boolean | undefined
  instanceUrl?: string | undefined
  accessMode?:
    | 'INSTANCE_ACCESS_MODE_UNSPECIFIED'
    | 'INSTANCE_ACCESS_MODE_PRIVATE'
    | 'INSTANCE_ACCESS_MODE_PUBLIC'
    | undefined
  needsSetup?: boolean | undefined
  admin?:
    | {
        name?: string | undefined
        username: string
        displayName?: string | undefined
        email?: string | undefined
        avatarUrl?: string | undefined
        description?: string | undefined
        password?: string | undefined
        role: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER'
        state: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED'
        createTime?: string | undefined
        updateTime?: string | undefined
      }
    | undefined
  challenge?: { provider?: string | undefined; siteKey?: string | undefined } | undefined
}
type TestInstanceEmailSettingRequest = {
  email?:
    | {
        enabled?: boolean | undefined
        smtpHost?: string | undefined
        smtpPort?: number | undefined
        smtpUsername?: string | undefined
        smtpPassword?: string | undefined
        useTls?: boolean | undefined
        useSsl?: boolean | undefined
        fromEmail?: string | undefined
        fromName?: string | undefined
        replyTo?: string | undefined
      }
    | undefined
  recipientEmail?: string | undefined
}
type BatchGetInstanceSettingsRequest = { names: string[] }
type InstanceSettingStorage = {
  id?: string | undefined
  name?: string | undefined
  type?: 'STORAGE_TYPE_UNSPECIFIED' | 'DATABASE' | 'LOCAL' | 'S3' | undefined
  s3Config?:
    | {
        endpoint?: string | undefined
        region?: string | undefined
        bucket?: string | undefined
        accessKeyId?: string | undefined
        accessKeySecret?: string | undefined
        usePathStyle?: boolean | undefined
        insecureSkipTlsVerify?: boolean | undefined
      }
    | undefined
}
type InstanceSettingTagMetadata = {
  backgroundColor?:
    | {
        red?: number | undefined
        green?: number | undefined
        blue?: number | undefined
        alpha?: number | undefined
      }
    | undefined
  blurContent?: boolean | undefined
}
type InstanceSettingAIProviderConfig = {
  id?: string | undefined
  title?: string | undefined
  type?: 'AI_PROVIDER_TYPE_UNSPECIFIED' | 'OPENAI' | 'GEMINI' | undefined
  endpoint?: string | undefined
  apiKey?: string | undefined
  apiKeySet?: boolean | undefined
  apiKeyHint?: string | undefined
}
type UsageLimitsSettingUsageLimit = {
  users?: string[] | undefined
  allUsers?: boolean | undefined
  memoCount?: string | undefined
  memoContentBytes?: string | undefined
  storageBytes?: string | undefined
  uploadBytes?: string | undefined
}
type InstanceSetting = {
  name?: string | undefined
  generalSetting?:
    | {
        customProfile?:
          | {
              title?: string | undefined
              description?: string | undefined
              logoUrl?: string | undefined
            }
          | undefined
        disallowUserRegistration?: boolean | undefined
        disallowPasswordAuth?: boolean | undefined
        disallowChangeUsername?: boolean | undefined
        disallowChangeNickname?: boolean | undefined
        weekStartDayOffset?: number | undefined
        additionalStyle?: string | undefined
        additionalScript?: string | undefined
      }
    | undefined
  storageSetting?:
    | {
        storages?: InstanceSettingStorage[] | undefined
        defaultStorageId?: string | undefined
        filepathTemplate?: string | undefined
        storageType?: 'STORAGE_TYPE_UNSPECIFIED' | 'DATABASE' | 'LOCAL' | 'S3' | undefined
        s3Config?:
          | {
              endpoint?: string | undefined
              region?: string | undefined
              bucket?: string | undefined
              accessKeyId?: string | undefined
              accessKeySecret?: string | undefined
              usePathStyle?: boolean | undefined
              insecureSkipTlsVerify?: boolean | undefined
            }
          | undefined
      }
    | undefined
  tagsSetting?: { tags?: { [x: string]: InstanceSettingTagMetadata } | undefined } | undefined
  notificationSetting?:
    | {
        email?:
          | {
              enabled?: boolean | undefined
              smtpHost?: string | undefined
              smtpPort?: number | undefined
              smtpUsername?: string | undefined
              smtpPassword?: string | undefined
              useTls?: boolean | undefined
              useSsl?: boolean | undefined
              fromEmail?: string | undefined
              fromName?: string | undefined
              replyTo?: string | undefined
            }
          | undefined
      }
    | undefined
  aiSetting?:
    | {
        providers?: InstanceSettingAIProviderConfig[] | undefined
        transcription?:
          | {
              providerId?: string | undefined
              model?: string | undefined
              language?: string | undefined
              prompt?: string | undefined
            }
          | undefined
      }
    | undefined
  accessSetting?:
    | {
        accessMode?:
          | 'INSTANCE_ACCESS_MODE_UNSPECIFIED'
          | 'INSTANCE_ACCESS_MODE_PRIVATE'
          | 'INSTANCE_ACCESS_MODE_PUBLIC'
          | undefined
      }
    | undefined
  usageLimitsSetting?: { limits?: UsageLimitsSettingUsageLimit[] | undefined } | undefined
}
type BatchGetInstanceSettingsResponse = { instanceSettings?: InstanceSetting[] | undefined }
type InstanceStats = {
  database?: { driver?: string | undefined; sizeBytes?: string | undefined } | undefined
  localStorageBytes?: string | undefined
  generatedTime?: string | undefined
}
type MemoRelation = {
  memo: { name: string; snippet?: string | undefined }
  relatedMemo: { name: string; snippet?: string | undefined }
  type: 'TYPE_UNSPECIFIED' | 'REFERENCE'
}
type Reaction = {
  name?: string | undefined
  creator?: string | undefined
  reactionType: string
  createTime?: string | undefined
}
type Memo = {
  name?: string | undefined
  creator?: string | undefined
  space?: string | undefined
  content: string
  location?:
    | {
        placeholder?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
      }
    | undefined
  visibility: 'VISIBILITY_UNSPECIFIED' | 'PRIVATE' | 'PROTECTED' | 'PUBLIC' | 'SPACE'
  state: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED'
  pinned?: boolean | undefined
  attachments?: Attachment[] | undefined
  relations?: MemoRelation[] | undefined
  reactions?: Reaction[] | undefined
  parent?: string | undefined
  tags?: string[] | undefined
  property?:
    | {
        title?: string | undefined
        hasLink?: boolean | undefined
        hasCode?: boolean | undefined
        hasTaskList?: boolean | undefined
        hasIncompleteTasks?: boolean | undefined
        hasInlineImage?: boolean | undefined
      }
    | undefined
  snippet?: string | undefined
  createTime?: string | undefined
  updateTime?: string | undefined
  commentCount?: number | undefined
}
type ListMemosResponse = { memos?: Memo[] | undefined; nextPageToken?: string | undefined }
type LinkMetadata = {
  url?: string | undefined
  title?: string | undefined
  description?: string | undefined
  image?: string | undefined
}
type BatchGetLinkMetadataRequest = { urls: string[] }
type BatchGetLinkMetadataResponse = { linkMetadata?: LinkMetadata[] | undefined }
type ListMemoAttachmentsResponse = {
  attachments?: Attachment[] | undefined
  nextPageToken?: string | undefined
}
type SetMemoAttachmentsRequest = { name: string; attachments: Attachment[] }
type ListMemoReactionsResponse = {
  reactions?: Reaction[] | undefined
  nextPageToken?: string | undefined
}
type UpsertMemoReactionRequest = {
  parent: string
  reaction: {
    name?: string | undefined
    creator?: string | undefined
    reactionType: string
    createTime?: string | undefined
  }
}
type ListMemoRelationsResponse = {
  relations?: MemoRelation[] | undefined
  nextPageToken?: string | undefined
}
type SetMemoRelationsRequest = { name: string; relations: MemoRelation[] }
type MemoShare = {
  name?: string | undefined
  createTime?: string | undefined
  expireTime?: string | undefined
}
type ListMemoSharesResponse = { memoShares?: MemoShare[] | undefined }
type Space = {
  name?: string | undefined
  title: string
  description?: string | undefined
  icon?: { emoji?: string | undefined; lucide?: string | undefined } | undefined
  currentUserRole?: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER' | undefined
  memberCount?: number | undefined
}
type ListSpacesResponse = { spaces?: Space[] | undefined; nextPageToken?: string | undefined }
type SpaceInvitation = {
  name?: string | undefined
  invitee: string
  role: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER'
  space?:
    | {
        name?: string | undefined
        title: string
        description?: string | undefined
        icon?: { emoji?: string | undefined; lucide?: string | undefined } | undefined
        currentUserRole?: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER' | undefined
        memberCount?: number | undefined
      }
    | undefined
}
type ListSpaceInvitationsResponse = {
  spaceInvitations?: SpaceInvitation[] | undefined
  nextPageToken?: string | undefined
}
type AcceptSpaceInvitationRequest = { name: string }
type SpaceMember = {
  name?: string | undefined
  user: string
  role: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER'
}
type DeclineSpaceInvitationRequest = { name: string }
type ListSpaceMembersResponse = {
  spaceMembers?: SpaceMember[] | undefined
  nextPageToken?: string | undefined
}
type User = {
  name?: string | undefined
  username: string
  displayName?: string | undefined
  email?: string | undefined
  avatarUrl?: string | undefined
  description?: string | undefined
  password?: string | undefined
  role: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER'
  state: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED'
  createTime?: string | undefined
  updateTime?: string | undefined
}
type ListUsersResponse = { users?: User[] | undefined; nextPageToken?: string | undefined }
type LinkedIdentity = {
  name?: string | undefined
  identityProvider?: string | undefined
  externalUid?: string | undefined
}
type ListLinkedIdentitiesResponse = { linkedIdentities?: LinkedIdentity[] | undefined }
type CreateLinkedIdentityRequest = {
  parent: string
  identityProvider: string
  code: string
  redirectUri: string
  codeVerifier?: string | undefined
}
type UserNotification = {
  name?: string | undefined
  sender?: string | undefined
  senderUser?:
    | {
        name?: string | undefined
        username: string
        displayName?: string | undefined
        email?: string | undefined
        avatarUrl?: string | undefined
        description?: string | undefined
        password?: string | undefined
        role: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER'
        state: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED'
        createTime?: string | undefined
        updateTime?: string | undefined
      }
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'MEMO_COMMENT' | 'MEMO_MENTION' | 'SPACE_INVITATION' | undefined
  memoComment?:
    | {
        memo?: string | undefined
        relatedMemo?: string | undefined
        memoSnippet?: string | undefined
        relatedMemoSnippet?: string | undefined
      }
    | undefined
  memoMention?:
    | {
        memo?: string | undefined
        relatedMemo?: string | undefined
        memoSnippet?: string | undefined
        relatedMemoSnippet?: string | undefined
      }
    | undefined
  spaceInvitation?:
    | {
        spaceInvitation?: string | undefined
        space?:
          | {
              name?: string | undefined
              title: string
              description?: string | undefined
              icon?: { emoji?: string | undefined; lucide?: string | undefined } | undefined
              currentUserRole?: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER' | undefined
              memberCount?: number | undefined
            }
          | undefined
        role?: 'ROLE_UNSPECIFIED' | 'ADMIN' | 'USER' | undefined
        state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'ACCEPTED' | undefined
      }
    | undefined
  status?: 'STATUS_UNSPECIFIED' | 'UNREAD' | 'ARCHIVED' | undefined
  createTime?: string | undefined
}
type ListUserNotificationsResponse = {
  notifications?: UserNotification[] | undefined
  nextPageToken?: string | undefined
}
type PersonalAccessToken = {
  name?: string | undefined
  description?: string | undefined
  createTime?: string | undefined
  expireTime?: string | undefined
  lastUseTime?: string | undefined
}
type ListPersonalAccessTokensResponse = {
  personalAccessTokens?: PersonalAccessToken[] | undefined
  nextPageToken?: string | undefined
}
type CreatePersonalAccessTokenRequest = {
  parent: string
  description?: string | undefined
  expiresInDays?: number | undefined
}
type CreatePersonalAccessTokenResponse = {
  personalAccessToken?:
    | {
        name?: string | undefined
        description?: string | undefined
        createTime?: string | undefined
        expireTime?: string | undefined
        lastUseTime?: string | undefined
      }
    | undefined
  token?: string | undefined
}
type UserWebhook = {
  name?: string | undefined
  displayName?: string | undefined
  url?: string | undefined
  signingSecret?: string | undefined
  signingSecretSet?: boolean | undefined
  createTime?: string | undefined
  updateTime?: string | undefined
}
type UserSettingTagMetadata = {
  backgroundColor?:
    | {
        red?: number | undefined
        green?: number | undefined
        blue?: number | undefined
        alpha?: number | undefined
      }
    | undefined
  blurContent?: boolean | undefined
}
type UserSetting = {
  name?: string | undefined
  generalSetting?:
    | {
        locale?: string | undefined
        memoVisibility?: string | undefined
        theme?: string | undefined
        saveMediaMetadata?: boolean | undefined
      }
    | undefined
  webhooksSetting?: { webhooks?: UserWebhook[] | undefined } | undefined
  tagsSetting?: { tags?: { [x: string]: UserSettingTagMetadata } | undefined } | undefined
  editorSetting?: { sourceMode?: boolean | undefined } | undefined
}
type ListUserSettingsResponse = {
  userSettings?: UserSetting[] | undefined
  nextPageToken?: string | undefined
}
type ListUserSpaceInvitationsResponse = {
  spaceInvitations?: SpaceInvitation[] | undefined
  nextPageToken?: string | undefined
}
type UserStats = {
  name?: string | undefined
  totalMemoCount?: number | undefined
  memoTypeStats?:
    | {
        linkCount?: number | undefined
        codeCount?: number | undefined
        todoCount?: number | undefined
        undoCount?: number | undefined
      }
    | undefined
  tagCounts?: { [x: string]: number } | undefined
  pinnedMemos?: string[] | undefined
  memoCreatedTimestamps?: string[] | undefined
  memoUpdatedTimestamps?: string[] | undefined
  attachmentStorageBytes?: string | undefined
}
type ListUserStatsResponse = { userStats?: UserStats[] | undefined }
type UserUsage = {
  name?: string | undefined
  memoCount?: string | undefined
  storageBytes?: string | undefined
  limits?:
    | {
        memoCount?: string | undefined
        memoContentBytes?: string | undefined
        storageBytes?: string | undefined
        uploadBytes?: string | undefined
      }
    | undefined
  limitIndex?: number | undefined
}
type MemoView = {
  name?: string | undefined
  title: string
  filter: string
  icon?: { emoji?: string | undefined; lucide?: string | undefined } | undefined
}
type ListMemoViewsResponse = { memoViews?: MemoView[] | undefined }
type ReorderMemoViewsRequest = { parent: string; names: string[] }
type ReorderMemoViewsResponse = { memoViews?: MemoView[] | undefined }
type ListUserWebhooksResponse = { webhooks?: UserWebhook[] | undefined }
type GetUserWebhookSigningSecretResponse = { signingSecret?: string | undefined }
type ImportMemosRequest = {
  name: string
  spec?: { totalSize?: string | undefined } | undefined
  uploadId?: string | undefined
  writeOffset: string
  data?: string | undefined
  finishWrite?: boolean | undefined
  conflictPolicy?: 'CONFLICT_POLICY_UNSPECIFIED' | 'SKIP' | 'REPLACE' | 'DUPLICATE' | undefined
  validateOnly?: boolean | undefined
}
type ImportMemosIssue = { memoUid?: string | undefined; message?: string | undefined }
type ImportMemosResponse = {
  uploadId?: string | undefined
  committedSize?: string | undefined
  maxChunkSize?: number | undefined
  plan?:
    | {
        exportTime?: string | undefined
        exporter?: string | undefined
        generator?: string | undefined
        memoCount?: number | undefined
        attachmentCount?: number | undefined
        new?: number | undefined
        existing?: number | undefined
        renamed?: number | undefined
        warnings?: ImportMemosIssue[] | undefined
      }
    | undefined
  report?:
    | {
        created?: number | undefined
        updated?: number | undefined
        skipped?: number | undefined
        failed?: number | undefined
        warnings?: ImportMemosIssue[] | undefined
        failures?: ImportMemosIssue[] | undefined
      }
    | undefined
}
type BatchGetUsersRequest = { names: string[] }
type BatchGetUsersResponse = { users?: User[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/ai:transcribe': {
      $post:
        | {
            input: { json: TranscribeRequest }
            output: TranscribeResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: TranscribeRequest }; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/attachments': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
                orderBy?: string | undefined
              }
            }
            output: ListAttachmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
                orderBy?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { attachmentId?: string | undefined } } & { json: Attachment }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { attachmentId?: string | undefined } } & { json: Attachment }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/attachments/:attachment': {
      $get:
        | {
            input: { param: { attachment: string } }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attachment: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { attachment: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { attachment: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { attachment: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: Attachment }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attachment: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: Attachment }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/attachments:batchDelete': {
      $post:
        | {
            input: { json: BatchDeleteAttachmentsRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: BatchDeleteAttachmentsRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/attachments:upload': {
      $post:
        | {
            input: { json: UploadAttachmentRequest }
            output: UploadAttachmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UploadAttachmentRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/auth/me': {
      $get:
        | { input: {}; output: GetCurrentUserResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/auth/refresh': {
      $post:
        | {
            input: { json: RefreshTokenRequest }
            output: RefreshTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RefreshTokenRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/auth/signin': {
      $post:
        | {
            input: { json: SignInRequest }
            output: SignInResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SignInRequest }; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/auth/signout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/identity-providers': {
      $get:
        | { input: {}; output: ListIdentityProvidersResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { query: { identityProviderId?: string | undefined } } & {
              json: IdentityProvider
            }
            output: IdentityProvider
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { identityProviderId?: string | undefined } } & {
              json: IdentityProvider
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-providers/:identity-provider': {
      $get:
        | {
            input: { param: { 'identity-provider': string } }
            output: IdentityProvider
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'identity-provider': string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { 'identity-provider': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { 'identity-provider': string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { 'identity-provider': string } } & {
              query: { updateMask?: string | undefined }
            } & { json: IdentityProvider }
            output: IdentityProvider
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'identity-provider': string } } & {
              query: { updateMask?: string | undefined }
            } & { json: IdentityProvider }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/instance/configuration': {
      $get:
        | { input: {}; output: ConfigurationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/instance/profile': {
      $get:
        | { input: {}; output: InstanceProfile; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/instance/settings/notification:testEmail': {
      $post:
        | {
            input: { json: TestInstanceEmailSettingRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: TestInstanceEmailSettingRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/instance/settings:batchGet': {
      $post:
        | {
            input: { json: BatchGetInstanceSettingsRequest }
            output: BatchGetInstanceSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchGetInstanceSettingsRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/instance/stats': {
      $get:
        | { input: {}; output: InstanceStats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/instance/:instance/*': {
      $get:
        | {
            input: { param: { instance: string } }
            output: InstanceSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instance: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { instance: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: InstanceSetting }
            output: InstanceSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instance: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: InstanceSetting }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
                orderBy?: string | undefined
                showDeleted?: boolean | undefined
                state?: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED' | undefined
              }
            }
            output: ListMemosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
                orderBy?: string | undefined
                showDeleted?: boolean | undefined
                state?: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED' | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { memoId?: string | undefined } } & { json: Memo }
            output: Memo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { memoId?: string | undefined } } & { json: Memo }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/-/linkMetadata': {
      $get:
        | {
            input: { query: { url?: string | undefined } }
            output: LinkMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/-/linkMetadata:batchGet': {
      $post:
        | {
            input: { json: BatchGetLinkMetadataRequest }
            output: BatchGetLinkMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchGetLinkMetadataRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/:memo': {
      $get:
        | { input: { param: { memo: string } }; output: Memo; outputFormat: 'json'; status: 200 }
        | { input: { param: { memo: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $delete:
        | {
            input: { param: { memo: string } } & { query: { force?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { memo: string } } & { query: { force?: boolean | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { memo: string } } & { query: { updateMask?: string | undefined } } & {
              json: Memo
            }
            output: Memo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memo: string } } & { query: { updateMask?: string | undefined } } & {
              json: Memo
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/:memo/attachments': {
      $get:
        | {
            input: { param: { memo: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListMemoAttachmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memo: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { memo: string } } & { json: SetMemoAttachmentsRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { memo: string } } & { json: SetMemoAttachmentsRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/:memo/reactions': {
      $get:
        | {
            input: { param: { memo: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListMemoReactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memo: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { memo: string } } & { json: UpsertMemoReactionRequest }
            output: Reaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memo: string } } & { json: UpsertMemoReactionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/:memo/reactions/:reaction': {
      $delete:
        | {
            input: { param: { memo: string; reaction: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { memo: string; reaction: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/:memo/relations': {
      $get:
        | {
            input: { param: { memo: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListMemoRelationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memo: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { memo: string } } & { json: SetMemoRelationsRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { memo: string } } & { json: SetMemoRelationsRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/:memo/shares': {
      $get:
        | {
            input: { param: { memo: string } }
            output: ListMemoSharesResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { memo: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { param: { memo: string } } & { json: MemoShare }
            output: MemoShare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { memo: string } } & { json: MemoShare }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/memos/:memo/shares/:share': {
      $delete:
        | {
            input: { param: { memo: string; share: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { memo: string; share: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/shares/:shareToken/memo': {
      $get:
        | {
            input: { param: { shareToken: string } }
            output: Memo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shareToken: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces': {
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: ListSpacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { spaceId?: string | undefined } } & { json: Space }
            output: Space
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { spaceId?: string | undefined } } & { json: Space }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces/:space': {
      $get:
        | { input: { param: { space: string } }; output: Space; outputFormat: 'json'; status: 200 }
        | { input: { param: { space: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: { param: { space: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { space: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { space: string } } & { query: { updateMask?: string | undefined } } & {
              json: Space
            }
            output: Space
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string } } & { query: { updateMask?: string | undefined } } & {
              json: Space
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces/:space/invitations': {
      $get:
        | {
            input: { param: { space: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListSpaceInvitationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { space: string } } & { json: SpaceInvitation }
            output: SpaceInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string } } & { json: SpaceInvitation }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces/:space/invitations/:invitation': {
      $get:
        | {
            input: { param: { space: string; invitation: string } }
            output: SpaceInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string; invitation: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { space: string; invitation: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { space: string; invitation: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces/:space/invitations/:invitation:accept': {
      $post:
        | {
            input: { param: { space: string; invitation: string } } & {
              json: AcceptSpaceInvitationRequest
            }
            output: SpaceMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string; invitation: string } } & {
              json: AcceptSpaceInvitationRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces/:space/invitations/:invitation:decline': {
      $post:
        | {
            input: { param: { space: string; invitation: string } } & {
              json: DeclineSpaceInvitationRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { space: string; invitation: string } } & {
              json: DeclineSpaceInvitationRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces/:space/members': {
      $get:
        | {
            input: { param: { space: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListSpaceMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/spaces/:space/members/:member': {
      $get:
        | {
            input: { param: { space: string; member: string } }
            output: SpaceMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string; member: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { space: string; member: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { space: string; member: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { space: string; member: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: SpaceMember }
            output: SpaceMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { space: string; member: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: SpaceMember }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
                showDeleted?: boolean | undefined
              }
            }
            output: ListUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
                showDeleted?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                userId?: string | undefined
                validateOnly?: boolean | undefined
                requestId?: string | undefined
              }
            } & { json: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                validateOnly?: boolean | undefined
                requestId?: string | undefined
              }
            } & { json: User }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user': {
      $get:
        | {
            input: { param: { user: string } } & { query: { readMask?: string | undefined } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { readMask?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { user: string } } & { query: { force?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { force?: boolean | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { user: string } } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: User }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/linkedIdentities': {
      $get:
        | {
            input: { param: { user: string } }
            output: ListLinkedIdentitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { param: { user: string } } & { json: CreateLinkedIdentityRequest }
            output: LinkedIdentity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { json: CreateLinkedIdentityRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/linkedIdentities/:linkedIdentity': {
      $get:
        | {
            input: { param: { user: string; linkedIdentity: string } }
            output: LinkedIdentity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; linkedIdentity: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { user: string; linkedIdentity: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string; linkedIdentity: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/notifications': {
      $get:
        | {
            input: { param: { user: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: ListUserNotificationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/notifications/:notification': {
      $delete:
        | {
            input: { param: { user: string; notification: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string; notification: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { user: string; notification: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: UserNotification }
            output: UserNotification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; notification: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: UserNotification }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/personalAccessTokens': {
      $get:
        | {
            input: { param: { user: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListPersonalAccessTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { user: string } } & { json: CreatePersonalAccessTokenRequest }
            output: CreatePersonalAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { json: CreatePersonalAccessTokenRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/personalAccessTokens/:personalAccessToken': {
      $delete:
        | {
            input: { param: { user: string; personalAccessToken: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string; personalAccessToken: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/settings': {
      $get:
        | {
            input: { param: { user: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListUserSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/settings/:setting': {
      $get:
        | {
            input: { param: { user: string; setting: string } }
            output: UserSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; setting: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { user: string; setting: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: UserSetting }
            output: UserSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; setting: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: UserSetting }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/spaceInvitations': {
      $get:
        | {
            input: { param: { user: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: ListUserSpaceInvitationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/stats': {
      $get:
        | {
            input: { param: { user: string } } & {
              query: {
                filter?: string | undefined
                state?: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED' | undefined
              }
            }
            output: ListUserStatsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & {
              query: {
                filter?: string | undefined
                state?: 'STATE_UNSPECIFIED' | 'NORMAL' | 'ARCHIVED' | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/usage': {
      $get:
        | {
            input: { param: { user: string } }
            output: UserUsage
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user: string } }; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/users/:user/views': {
      $get:
        | {
            input: { param: { user: string } }
            output: ListMemoViewsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { param: { user: string } } & {
              query: { validateOnly?: boolean | undefined }
            } & { json: MemoView }
            output: MemoView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & {
              query: { validateOnly?: boolean | undefined }
            } & { json: MemoView }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/views/:view': {
      $get:
        | {
            input: { param: { user: string; view: string } }
            output: MemoView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; view: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { user: string; view: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string; view: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { user: string; view: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: MemoView }
            output: MemoView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; view: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: MemoView }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/views:reorder': {
      $post:
        | {
            input: { param: { user: string } } & { json: ReorderMemoViewsRequest }
            output: ReorderMemoViewsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { json: ReorderMemoViewsRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/webhooks': {
      $get:
        | {
            input: { param: { user: string } }
            output: ListUserWebhooksResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { param: { user: string } } & { json: UserWebhook }
            output: UserWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { json: UserWebhook }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/webhooks/:webhook': {
      $delete:
        | {
            input: { param: { user: string; webhook: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string; webhook: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { user: string; webhook: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: UserWebhook }
            output: UserWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; webhook: string } } & {
              query: { updateMask?: string | undefined }
            } & { json: UserWebhook }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user/webhooks/:webhook:getSigningSecret': {
      $get:
        | {
            input: { param: { user: string; webhook: string } }
            output: GetUserWebhookSigningSecretResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; webhook: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user:getStats': {
      $get:
        | {
            input: { param: { user: string } } & { query: { filter?: string | undefined } }
            output: UserStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { filter?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users/:user:importMemos': {
      $post:
        | {
            input: { param: { user: string } } & { json: ImportMemosRequest }
            output: ImportMemosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { json: ImportMemosRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/users:batchGet': {
      $post:
        | {
            input: { json: BatchGetUsersRequest }
            output: BatchGetUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchGetUsersRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
