type UserRole = 'admin' | 'member' | 'viewer' | 'guest'
type User = {
  id?: string | undefined
  name?: string | undefined
  avatarUrl?: string | undefined
  color?: string | undefined
  email?: string | undefined
  role?: UserRole | undefined
  isSuspended?: boolean | undefined
  lastActiveAt?: (string | null) | undefined
  timezone?: (string | null) | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  deletedAt?: (string | null) | undefined
  invitedBy?: {} | undefined
}
type AccessRequest = {
  id?: string | undefined
  documentId?: string | undefined
  userId?: string | undefined
  user?: User | undefined
  teamId?: string | undefined
  status?: 'pending' | 'approved' | 'dismissed' | undefined
  responderId?: (string | null) | undefined
  responder?: User | undefined
  respondedAt?: (string | null) | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Ability = string[] | boolean
type Policy = { id?: string | undefined; abilities?: { [x: string]: Ability } | undefined }
type Error = {
  ok?: boolean | undefined
  error?: string | undefined
  message?: string | undefined
  status?: number | undefined
  data?: { [x: string]: unknown } | undefined
}
type ApiKey = {
  id?: string | undefined
  name?: string | undefined
  scope?: (string[] | null) | undefined
  last4?: string | undefined
  value?: string | undefined
  expiresAt?: (string | null) | undefined
  lastActiveAt?: (string | null) | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Pagination = { offset?: number | undefined; limit?: number | undefined }
type Attachment = {
  contentType?: string | undefined
  size?: string | undefined
  name?: string | undefined
  url?: string | undefined
  documentId?: (string | null) | undefined
  userId?: string | undefined
}
type PlanFeature =
  | 'auditLog'
  | 'advancedSecurity'
  | 'guests'
  | 'groupSync'
  | 'premiumIntegrations'
  | 'apiKeyManagement'
  | 'contentManagement'
  | 'aiAnswers'
  | 'customDomain'
  | 'saml'
type Team = {
  id?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  avatarUrl?: string | undefined
  sharing?: boolean | undefined
  defaultCollectionId?: string | undefined
  defaultUserRole?: UserRole | undefined
  memberCollectionCreate?: boolean | undefined
  memberTeamCreate?: boolean | undefined
  documentEmbeds?: boolean | undefined
  inviteRequired?: boolean | undefined
  allowedDomains?: string[] | undefined
  guestSignin?: boolean | undefined
  subdomain?: string | undefined
  domain?: (string | null) | undefined
  url?: string | undefined
  passkeysEnabled?: boolean | undefined
  preferences?: ({ [x: string]: unknown } | null) | undefined
  guidanceMCP?: (string | null) | undefined
  plan?: {} | undefined
  entitlements?: PlanFeature[] | undefined
}
type Auth = { user?: User | undefined; team?: Team | undefined }
type Permission = 'read' | 'read_write'
type Collection = {
  id?: string | undefined
  url?: string | undefined
  urlId?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  sort?: { field?: string | undefined; direction?: 'asc' | 'desc' | undefined } | undefined
  index?: (string | null) | undefined
  color?: (string | null) | undefined
  icon?: (string | null) | undefined
  ownerId?: (string | null) | undefined
  permission?: Permission | undefined
  templateManagement?: Permission | undefined
  sharing?: boolean | undefined
  commenting?: (boolean | null) | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  deletedAt?: (string | null) | undefined
  archivedAt?: (string | null) | undefined
  archivedBy?: User | undefined
  deprecatedReason?: (string | null) | undefined
  sourceMetadata?:
    | ({
        externalId?: string | undefined
        externalName?: string | undefined
        createdByName?: string | undefined
      } | null)
    | undefined
}
type NavigationNode = {
  id?: string | undefined
  title?: string | undefined
  url?: string | undefined
  children?: NavigationNode[] | undefined
}
type CollectionFilter =
  | {
      field: 'name' | 'createdAt' | 'updatedAt' | 'archivedAt' | 'createdById' | 'permission'
      operator:
        | 'eq'
        | 'neq'
        | 'lt'
        | 'lte'
        | 'gt'
        | 'gte'
        | 'contains'
        | 'startsWith'
        | 'endsWith'
        | 'containsStrict'
        | 'startsWithStrict'
        | 'endsWithStrict'
        | 'in'
        | 'notIn'
        | 'isNull'
        | 'isNotNull'
      value?: { [x: string]: unknown } | undefined
    }
  | { operator: 'AND' | 'OR'; filters: CollectionFilter[] }
type CollectionStatus = 'archived'
type Membership = {
  id?: string | undefined
  userId?: string | undefined
  documentId?: (string | null) | undefined
  collectionId?: (string | null) | undefined
  permission?: Permission | undefined
  createdById?: string | undefined
  sourceId?: (string | null) | undefined
  index?: (string | null) | undefined
}
type CollectionGroupMembership = {
  id?: string | undefined
  groupId?: string | undefined
  documentId?: (string | null) | undefined
  collectionId?: (string | null) | undefined
  permission?: Permission | undefined
  sourceId?: (string | null) | undefined
}
type Group = {
  id?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  icon?: (string | null) | undefined
  color?: (string | null) | undefined
  externalId?: (string | null) | undefined
  disableMentions?: boolean | undefined
  externalGroup?: ({ [x: string]: unknown } | null) | undefined
  memberCount?: number | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type FileOperation = {
  id?: string | undefined
  type?: 'import' | 'export' | undefined
  format?: string | undefined
  name?: string | undefined
  state?: 'creating' | 'uploading' | 'complete' | 'error' | 'expired' | undefined
  error?: (string | null) | undefined
  size?: string | undefined
  collectionId?: (string | null) | undefined
  documentId?: (string | null) | undefined
  user?: User | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Comment = {
  id?: string | undefined
  data?: { [x: string]: unknown } | undefined
  documentId?: string | undefined
  parentCommentId?: string | undefined
  createdAt?: string | undefined
  createdBy?: User | undefined
  createdById?: string | undefined
  updatedAt?: string | undefined
  resolvedAt?: (string | null) | undefined
  resolvedBy?:
    | {
        id?: string | undefined
        name?: string | undefined
        avatarUrl?: string | undefined
        color?: string | undefined
        email?: string | undefined
        role?: UserRole | undefined
        isSuspended?: boolean | undefined
        lastActiveAt?: (string | null) | undefined
        timezone?: (string | null) | undefined
        createdAt?: string | undefined
        updatedAt?: string | undefined
        deletedAt?: (string | null) | undefined
        invitedBy?: {} | undefined
      }
    | undefined
  resolvedById?: (string | null) | undefined
  reactions?: { [x: string]: unknown }[] | undefined
  anchorText?: string | undefined
}
type DataAttributeDataType = 'string' | 'number' | 'boolean' | 'list'
type DataAttributeOptions = {
  icon?: string | undefined
  options?: { value?: string | undefined; color?: string | undefined }[] | undefined
}
type DataAttribute = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  dataType?: DataAttributeDataType | undefined
  options?: DataAttributeOptions | undefined
  pinned?: boolean | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  deletedAt?: (string | null) | undefined
}
type DocumentDataAttribute = {
  dataAttributeId?: string | undefined
  value?: string | boolean | number | undefined
  updatedAt?: string | undefined
}
type Document = {
  id?: string | undefined
  collectionId?: (string | null) | undefined
  parentDocumentId?: (string | null) | undefined
  title?: string | undefined
  fullWidth?: boolean | undefined
  icon?: (string | null) | undefined
  color?: (string | null) | undefined
  text?: string | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  url?: string | undefined
  path?: string | undefined
  urlId?: string | undefined
  collaboratorIds?: string[] | undefined
  tasks?: { completed?: number | undefined; total?: number | undefined } | undefined
  templateId?: string | undefined
  revision?: number | undefined
  createdAt?: string | undefined
  createdBy?: User | undefined
  updatedAt?: string | undefined
  updatedBy?: User | undefined
  publishedAt?: (string | null) | undefined
  dataAttributes?: (DocumentDataAttribute[] | null) | undefined
  archivedAt?: (string | null) | undefined
  deletedAt?: (string | null) | undefined
  deletedBy?:
    | {
        id?: string | undefined
        name?: string | undefined
        avatarUrl?: string | undefined
        color?: string | undefined
        email?: string | undefined
        role?: UserRole | undefined
        isSuspended?: boolean | undefined
        lastActiveAt?: (string | null) | undefined
        timezone?: (string | null) | undefined
        createdAt?: string | undefined
        updatedAt?: string | undefined
        deletedAt?: (string | null) | undefined
        invitedBy?: {} | undefined
      }
    | undefined
  deprecatedReason?: (string | null) | undefined
  preferences?:
    | ({ headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined } | null)
    | undefined
}
type DocumentInsight = {
  date?: string | undefined
  period?: 'day' | 'week' | undefined
  viewCount?: number | undefined
  viewerCount?: number | undefined
  commentCount?: number | undefined
  reactionCount?: number | undefined
  revisionCount?: number | undefined
  editorCount?: number | undefined
}
type DocumentFilter =
  | {
      field:
        | 'createdAt'
        | 'updatedAt'
        | 'publishedAt'
        | 'archivedAt'
        | 'title'
        | 'templateId'
        | 'collectionId'
        | 'createdById'
        | 'userId'
        | 'documentId'
        | 'parentDocumentId'
      operator:
        | 'eq'
        | 'neq'
        | 'lt'
        | 'lte'
        | 'gt'
        | 'gte'
        | 'contains'
        | 'startsWith'
        | 'endsWith'
        | 'containsStrict'
        | 'startsWithStrict'
        | 'endsWithStrict'
        | 'in'
        | 'notIn'
        | 'isNull'
        | 'isNotNull'
      value?: { [x: string]: unknown } | undefined
    }
  | { operator: 'AND' | 'OR'; filters: DocumentFilter[] }
type SearchResult = {
  id?: string | undefined
  query?: string | undefined
  answer?: string | undefined
  source?: 'api' | 'app' | 'mcp' | undefined
  createdAt?: string | undefined
}
type TextEditMode = 'append' | 'prepend' | 'replace' | 'patch'
type Template = {
  id?: string | undefined
  url?: string | undefined
  path?: string | undefined
  urlId?: string | undefined
  title?: string | undefined
  data?: { [x: string]: unknown } | undefined
  icon?: (string | null) | undefined
  color?: (string | null) | undefined
  fullWidth?: boolean | undefined
  collectionId?: (string | null) | undefined
  createdAt?: string | undefined
  createdBy?: User | undefined
  updatedAt?: string | undefined
  updatedBy?: User | undefined
  deletedAt?: (string | null) | undefined
  publishedAt?: (string | null) | undefined
}
type DocumentsDeletedFilter =
  | {
      field: 'deletedAt' | 'deletedById'
      operator: 'eq' | 'neq' | 'lt' | 'lte' | 'gt' | 'gte' | 'in' | 'notIn' | 'isNull' | 'isNotNull'
      value?: { [x: string]: unknown } | undefined
    }
  | { operator: 'AND' | 'OR'; filters: DocumentsDeletedFilter[] }
type Event = {
  id?: string | undefined
  name?: string | undefined
  modelId?: string | undefined
  userId?: string | undefined
  actorId?: string | undefined
  authType?: 'api' | 'app' | 'mcp' | 'oauth' | undefined
  actorIpAddress?: string | undefined
  collectionId?: string | undefined
  documentId?: string | undefined
  createdAt?: string | undefined
  data?: { [x: string]: unknown } | undefined
  changes?: ({ [x: string]: unknown } | null) | undefined
  actor?: User | undefined
}
type GroupMembership = {
  id?: string | undefined
  groupId?: string | undefined
  documentId?: (string | null) | undefined
  collectionId?: (string | null) | undefined
  permission?: Permission | undefined
  createdById?: (string | null) | undefined
  createdBy?: User | undefined
  createdAt?: string | undefined
  sourceId?: (string | null) | undefined
}
type Notification = {
  id?: string | undefined
  event?: string | undefined
  userId?: string | undefined
  actorId?: (string | null) | undefined
  actor?: User | undefined
  documentId?: (string | null) | undefined
  collectionId?: (string | null) | undefined
  commentId?: (string | null) | undefined
  revisionId?: (string | null) | undefined
  fileOperationId?: (string | null) | undefined
  fileOperation?: FileOperation | undefined
  viewedAt?: (string | null) | undefined
  archivedAt?: (string | null) | undefined
  createdAt?: string | undefined
}
type OAuthAuthentication = {
  id?: string | undefined
  oauthClientId?: string | undefined
  oauthClient?:
    | {
        name?: string | undefined
        description?: (string | null) | undefined
        developerName?: (string | null) | undefined
        developerUrl?: (string | null) | undefined
        avatarUrl?: (string | null) | undefined
        clientId?: string | undefined
        published?: boolean | undefined
      }
    | undefined
  userId?: string | undefined
  scope?: string[] | undefined
  lastActiveAt?: string | undefined
  createdAt?: string | undefined
}
type OAuthClient = {
  id?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  developerName?: (string | null) | undefined
  developerUrl?: (string | null) | undefined
  avatarUrl?: (string | null) | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  clientType?: 'public' | 'confidential' | undefined
  redirectUris?: string[] | undefined
  published?: boolean | undefined
  lastActiveAt?: (string | null) | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Pin = {
  id?: string | undefined
  documentId?: string | undefined
  collectionId?: (string | null) | undefined
  index?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Reaction = {
  id?: string | undefined
  emoji?: string | undefined
  commentId?: string | undefined
  userId?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type RevisionDetail = {
  id?: string | undefined
  documentId?: string | undefined
  title?: string | undefined
  name?: (string | null) | undefined
  icon?: (string | null) | undefined
  color?: (string | null) | undefined
  collaborators?: User[] | undefined
  createdAt?: string | undefined
  createdBy?: User | undefined
  createdById?: string | undefined
  deletedAt?: (string | null) | undefined
  sourceMetadata?: ({ authType?: 'api' | 'app' | 'mcp' | 'oauth' | undefined } | null) | undefined
  data?: { [x: string]: unknown } | undefined
  text?: string | undefined
}
type Revision = {
  id?: string | undefined
  documentId?: string | undefined
  title?: string | undefined
  name?: (string | null) | undefined
  icon?: (string | null) | undefined
  color?: (string | null) | undefined
  collaborators?: User[] | undefined
  createdAt?: string | undefined
  createdBy?: User | undefined
  createdById?: string | undefined
  deletedAt?: (string | null) | undefined
  sourceMetadata?: ({ authType?: 'api' | 'app' | 'mcp' | 'oauth' | undefined } | null) | undefined
}
type Share = {
  id?: string | undefined
  documentTitle?: string | undefined
  documentUrl?: string | undefined
  sourceTitle?: string | undefined
  sourcePath?: string | undefined
  documentId?: (string | null) | undefined
  collectionId?: (string | null) | undefined
  urlId?: (string | null) | undefined
  url?: string | undefined
  domain?: (string | null) | undefined
  title?: (string | null) | undefined
  iconUrl?: (string | null) | undefined
  published?: boolean | undefined
  includeChildDocuments?: boolean | undefined
  allowSubscriptions?: boolean | undefined
  allowIndexing?: boolean | undefined
  showLastUpdated?: boolean | undefined
  showTOC?: boolean | undefined
  expiresAt?: (string | null) | undefined
  views?: number | undefined
  createdAt?: string | undefined
  createdBy?:
    | {
        id?: string | undefined
        name?: string | undefined
        avatarUrl?: string | undefined
        color?: string | undefined
        email?: string | undefined
        role?: UserRole | undefined
        isSuspended?: boolean | undefined
        lastActiveAt?: (string | null) | undefined
        timezone?: (string | null) | undefined
        createdAt?: string | undefined
        updatedAt?: string | undefined
        deletedAt?: (string | null) | undefined
        invitedBy?: {} | undefined
      }
    | undefined
  updatedAt?: string | undefined
  lastAccessedAt?: (string | null) | undefined
}
type Star = {
  id?: string | undefined
  index?: string | undefined
  documentId?: (string | null) | undefined
  collectionId?: (string | null) | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Subscription = {
  id?: string | undefined
  userId?: string | undefined
  documentId?: (string | null) | undefined
  collectionId?: (string | null) | undefined
  event?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Invite = { name?: string | undefined; email?: string | undefined; role?: UserRole | undefined }
type UserFilter =
  | {
      field:
        | 'id'
        | 'name'
        | 'email'
        | 'role'
        | 'createdAt'
        | 'updatedAt'
        | 'lastActiveAt'
        | 'suspendedAt'
      operator:
        | 'eq'
        | 'neq'
        | 'lt'
        | 'lte'
        | 'gt'
        | 'gte'
        | 'contains'
        | 'startsWith'
        | 'endsWith'
        | 'containsStrict'
        | 'startsWithStrict'
        | 'endsWithStrict'
        | 'in'
        | 'notIn'
        | 'isNull'
        | 'isNotNull'
      value?: { [x: string]: unknown } | undefined
    }
  | { operator: 'AND' | 'OR'; filters: UserFilter[] }
type View = {
  id?: string | undefined
  documentId?: string | undefined
  firstViewedAt?: string | undefined
  lastViewedAt?: string | undefined
  count?: number | undefined
  userId?: string | undefined
  user?: User | undefined
}
type WebhookSubscription = {
  id?: string | undefined
  name?: string | undefined
  url?: string | undefined
  secret?: (string | null) | undefined
  events?: string[] | undefined
  enabled?: boolean | undefined
  createdBy?:
    | {
        id?: string | undefined
        name?: string | undefined
        avatarUrl?: string | undefined
        color?: string | undefined
        email?: string | undefined
        role?: UserRole | undefined
        isSuspended?: boolean | undefined
        lastActiveAt?: (string | null) | undefined
        timezone?: (string | null) | undefined
        createdAt?: string | undefined
        updatedAt?: string | undefined
        deletedAt?: (string | null) | undefined
        invitedBy?: {} | undefined
      }
    | undefined
  createdById?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accessRequests.create': {
      $post:
        | {
            input: { json: { documentId: string } }
            output: { data?: AccessRequest | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { documentId: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/accessRequests.info': {
      $post:
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: { data?: AccessRequest | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/accessRequests.approve': {
      $post:
        | {
            input: {
              json: { id: string; permission?: 'read' | 'read_write' | 'admin' | undefined }
            }
            output: { data?: AccessRequest | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { id: string; permission?: 'read' | 'read_write' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { id: string; permission?: 'read' | 'read_write' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { id: string; permission?: 'read' | 'read_write' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { id: string; permission?: 'read' | 'read_write' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: { id: string; permission?: 'read' | 'read_write' | 'admin' | undefined }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/accessRequests.dismiss': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: AccessRequest | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/apiKeys.create': {
      $post:
        | {
            input: {
              json: { name: string; expiresAt?: string | undefined; scope?: string[] | undefined }
            }
            output: { data?: ApiKey | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { name: string; expiresAt?: string | undefined; scope?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { name: string; expiresAt?: string | undefined; scope?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { name: string; expiresAt?: string | undefined; scope?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { name: string; expiresAt?: string | undefined; scope?: string[] | undefined }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/apiKeys.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                query?: string | undefined
              }
            }
            output: {
              data?: ApiKey[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                query?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/apiKeys.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/attachments.create': {
      $post:
        | {
            input: {
              json: {
                name: string
                documentId?: string | undefined
                contentType: string
                size: number
              }
            }
            output: {
              data?:
                | {
                    maxUploadSize?: number | undefined
                    mode?: 'post' | 'put' | undefined
                    uploadUrl?: string | undefined
                    form?: { [x: string]: unknown } | undefined
                    url?: string | undefined
                    headers?: { [x: string]: unknown } | undefined
                    attachment?: Attachment | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                documentId?: string | undefined
                contentType: string
                size: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                documentId?: string | undefined
                contentType: string
                size: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                documentId?: string | undefined
                contentType: string
                size: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                documentId?: string | undefined
                contentType: string
                size: number
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/attachments.redirect': {
      $post:
        | { input: { json: { id: string } }; output: {}; outputFormat: string; status: 302 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/attachments.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/attachments.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                userId?: string | undefined
              }
            }
            output: {
              data?: Attachment[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                userId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                userId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                userId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                userId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/attachments.createFromUrl': {
      $post:
        | {
            input: {
              json: { url: string; documentId?: string | undefined; id?: string | undefined }
            }
            output: { data?: Attachment | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { url: string; documentId?: string | undefined; id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { url: string; documentId?: string | undefined; id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { url: string; documentId?: string | undefined; id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { url: string; documentId?: string | undefined; id?: string | undefined }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/auth.info': {
      $post:
        | { input: {}; output: { data?: Auth | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | {
            input: {}
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/auth.config': {
      $post:
        | {
            input: {}
            output: {
              data?:
                | {
                    name?: string | undefined
                    hostname?: string | undefined
                    services?:
                      | {
                          id?: string | undefined
                          name?: string | undefined
                          authUrl?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/auth.delete': {
      $post:
        | {
            input: { json: { [x: string]: unknown } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.info': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: Collection | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.documents': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: NavigationNode[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: CollectionFilter[] | undefined
                query?: string | undefined
                statusFilter?: CollectionStatus[] | undefined
              }
            }
            output: {
              data?: Collection[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: CollectionFilter[] | undefined
                query?: string | undefined
                statusFilter?: CollectionStatus[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: CollectionFilter[] | undefined
                query?: string | undefined
                statusFilter?: CollectionStatus[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: CollectionFilter[] | undefined
                query?: string | undefined
                statusFilter?: CollectionStatus[] | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.create': {
      $post:
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
              }
            }
            output: { data?: Collection | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.duplicate': {
      $post:
        | {
            input: { json: { id: string; name?: string | undefined } }
            output: { data?: Collection | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; name?: string | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: { data?: Collection | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                data?: { [x: string]: unknown } | undefined
                permission?: Permission | undefined
                icon?: string | undefined
                color?: string | undefined
                sharing?: boolean | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.add_user': {
      $post:
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: {
              data?:
                | { users?: User[] | undefined; memberships?: Membership[] | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.remove_user': {
      $post:
        | {
            input: { json: { id: string; userId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; userId: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.memberships': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: {
              data?:
                | { users?: User[] | undefined; memberships?: Membership[] | undefined }
                | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.add_group': {
      $post:
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: {
              data?:
                | { collectionGroupMemberships?: CollectionGroupMembership[] | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.remove_group': {
      $post:
        | {
            input: { json: { id: string; groupId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.group_memberships': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: {
              data?:
                | {
                    groups?: Group[] | undefined
                    collectionGroupMemberships?: CollectionGroupMembership[] | undefined
                  }
                | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.delete': {
      $post:
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.export': {
      $post:
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                id: string
              }
            }
            output: { data?: { fileOperation?: FileOperation | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                id: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                id: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                id: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                id: string
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.export_all': {
      $post:
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                includeAttachments?: boolean | undefined
                includePrivate?: boolean | undefined
              }
            }
            output: { data?: { fileOperation?: FileOperation | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                includeAttachments?: boolean | undefined
                includePrivate?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                includeAttachments?: boolean | undefined
                includePrivate?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                includeAttachments?: boolean | undefined
                includePrivate?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                format?: 'outline-markdown' | 'json' | 'html' | 'okf' | undefined
                includeAttachments?: boolean | undefined
                includePrivate?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.archive': {
      $post:
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: { data?: Collection | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.restore': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: Collection | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.move': {
      $post:
        | {
            input: { json: { id: string; index: string } }
            output: {
              success?: boolean | undefined
              data?: { index?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; index: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/collections.import': {
      $post:
        | {
            input: {
              json: {
                attachmentId: string
                format?: 'outline-markdown' | 'json' | undefined
                permission?: Permission | undefined
              }
            }
            output: { data?: { fileOperation?: FileOperation | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                attachmentId: string
                format?: 'outline-markdown' | 'json' | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                attachmentId: string
                format?: 'outline-markdown' | 'json' | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                attachmentId: string
                format?: 'outline-markdown' | 'json' | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                attachmentId: string
                format?: 'outline-markdown' | 'json' | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                attachmentId: string
                format?: 'outline-markdown' | 'json' | undefined
                permission?: Permission | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.create': {
      $post:
        | {
            input: {
              json: {
                id?: string | undefined
                documentId: string
                parentCommentId?: string | undefined
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
                anchorText?: string | undefined
                anchorPrefix?: string | undefined
                anchorSuffix?: string | undefined
              }
            }
            output: { data?: Comment | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id?: string | undefined
                documentId: string
                parentCommentId?: string | undefined
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
                anchorText?: string | undefined
                anchorPrefix?: string | undefined
                anchorSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id?: string | undefined
                documentId: string
                parentCommentId?: string | undefined
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
                anchorText?: string | undefined
                anchorPrefix?: string | undefined
                anchorSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id?: string | undefined
                documentId: string
                parentCommentId?: string | undefined
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
                anchorText?: string | undefined
                anchorPrefix?: string | undefined
                anchorSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id?: string | undefined
                documentId: string
                parentCommentId?: string | undefined
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
                anchorText?: string | undefined
                anchorPrefix?: string | undefined
                anchorSuffix?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.info': {
      $post:
        | {
            input: { json: { id: string; includeAnchorText?: boolean | undefined } }
            output: { data?: Comment | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; includeAnchorText?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; includeAnchorText?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; includeAnchorText?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; includeAnchorText?: boolean | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            }
            output: { data?: Comment | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                data?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                includeAnchorText?: boolean | undefined
              }
            }
            output: {
              data?: Comment[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                includeAnchorText?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                includeAnchorText?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                includeAnchorText?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.resolve': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: Comment | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.unresolve': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: Comment | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.add_reaction': {
      $post:
        | {
            input: { json: { id: string; emoji: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/comments.remove_reaction': {
      $post:
        | {
            input: { json: { id: string; emoji: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; emoji: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/dataAttributes.info': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: DataAttribute | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/dataAttributes.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: { data?: DataAttribute[] | undefined; pagination?: Pagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/dataAttributes.create': {
      $post:
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                dataType: DataAttributeDataType
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: { data?: DataAttribute | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                dataType: DataAttributeDataType
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                dataType: DataAttributeDataType
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                dataType: DataAttributeDataType
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/dataAttributes.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                name: string
                description?: string | undefined
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: { data?: DataAttribute | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                name: string
                description?: string | undefined
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                name: string
                description?: string | undefined
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                name: string
                description?: string | undefined
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                name: string
                description?: string | undefined
                options?: DataAttributeOptions | undefined
                pinned?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/dataAttributes.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.info': {
      $post:
        | {
            input: { json: { id?: string | undefined; shareId?: string | undefined } }
            output: { data?: Document | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id?: string | undefined; shareId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id?: string | undefined; shareId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id?: string | undefined; shareId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id?: string | undefined; shareId?: string | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.insights': {
      $post:
        | {
            input: {
              json: { id: string; startDate?: string | undefined; endDate?: string | undefined }
            }
            output: { data?: DocumentInsight[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { id: string; startDate?: string | undefined; endDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { id: string; startDate?: string | undefined; endDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { id: string; startDate?: string | undefined; endDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { id: string; startDate?: string | undefined; endDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: { id: string; startDate?: string | undefined; endDate?: string | undefined }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.import': {
      $post:
        | {
            input: {
              form: {
                file: { [x: string]: unknown }
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: { data?: Document | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                file: { [x: string]: unknown }
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                file: { [x: string]: unknown }
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              form: {
                file: { [x: string]: unknown }
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              form: {
                file: { [x: string]: unknown }
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.export': {
      $post:
        | {
            input: {
              json: {
                id: string
                paperSize?: string | undefined
                signedUrls?: number | undefined
                includeChildDocuments?: boolean | undefined
              }
            }
            output: { data?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                paperSize?: string | undefined
                signedUrls?: number | undefined
                includeChildDocuments?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                paperSize?: string | undefined
                signedUrls?: number | undefined
                includeChildDocuments?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                paperSize?: string | undefined
                signedUrls?: number | undefined
                includeChildDocuments?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                paperSize?: string | undefined
                signedUrls?: number | undefined
                includeChildDocuments?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                backlinkDocumentId?: string | undefined
                parentDocumentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
              }
            }
            output: {
              data?: Document[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                backlinkDocumentId?: string | undefined
                parentDocumentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                backlinkDocumentId?: string | undefined
                parentDocumentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                backlinkDocumentId?: string | undefined
                parentDocumentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.documents': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: NavigationNode | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.drafts': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: {
              data?: Document[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.viewed': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'updatedAt' | 'createdAt' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              data?: Document[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'updatedAt' | 'createdAt' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'updatedAt' | 'createdAt' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'updatedAt' | 'createdAt' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.answerQuestion': {
      $post:
        | {
            input: {
              json: {
                query?: string | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: 'draft' | 'archived' | 'published' | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: {
              documents?: Document[] | undefined
              policies?: Policy[] | undefined
              search?: SearchResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query?: string | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: 'draft' | 'archived' | 'published' | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                query?: string | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: 'draft' | 'archived' | 'published' | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                query?: string | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: 'draft' | 'archived' | 'published' | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.search_titles': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query: string
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              data?: Document[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query: string
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query: string
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query: string
                filters?: DocumentFilter[] | undefined
                collectionId?: string | undefined
                userId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.search': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query?: string | undefined
                filters?: DocumentFilter[] | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                snippetMinWords?: number | undefined
                snippetMaxWords?: number | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              data?:
                | {
                    context?: string | undefined
                    ranking?: number | undefined
                    document?: Document | undefined
                  }[]
                | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query?: string | undefined
                filters?: DocumentFilter[] | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                snippetMinWords?: number | undefined
                snippetMaxWords?: number | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query?: string | undefined
                filters?: DocumentFilter[] | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                snippetMinWords?: number | undefined
                snippetMaxWords?: number | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                query?: string | undefined
                filters?: DocumentFilter[] | undefined
                userId?: string | undefined
                collectionId?: string | undefined
                documentId?: string | undefined
                statusFilter?: ('draft' | 'archived' | 'published')[] | undefined
                dateFilter?: 'day' | 'week' | 'month' | 'year' | undefined
                shareId?: string | undefined
                snippetMinWords?: number | undefined
                snippetMaxWords?: number | undefined
                sort?: 'relevance' | 'createdAt' | 'updatedAt' | 'title' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.create': {
      $post:
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                text?: string | undefined
                icon?: string | undefined
                color?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                templateId?: string | undefined
                publish?: boolean | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                createdAt?: string | undefined
                dataAttributes?:
                  | { dataAttributeId: string; value: string | boolean | number }[]
                  | undefined
              }
            }
            output: { data?: Document | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                text?: string | undefined
                icon?: string | undefined
                color?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                templateId?: string | undefined
                publish?: boolean | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                createdAt?: string | undefined
                dataAttributes?:
                  | { dataAttributeId: string; value: string | boolean | number }[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                text?: string | undefined
                icon?: string | undefined
                color?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                templateId?: string | undefined
                publish?: boolean | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                createdAt?: string | undefined
                dataAttributes?:
                  | { dataAttributeId: string; value: string | boolean | number }[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                text?: string | undefined
                icon?: string | undefined
                color?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                templateId?: string | undefined
                publish?: boolean | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                createdAt?: string | undefined
                dataAttributes?:
                  | { dataAttributeId: string; value: string | boolean | number }[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                text?: string | undefined
                icon?: string | undefined
                color?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                parentDocumentId?: (string | null) | undefined
                templateId?: string | undefined
                publish?: boolean | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                createdAt?: string | undefined
                dataAttributes?:
                  | { dataAttributeId: string; value: string | boolean | number }[]
                  | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                text?: string | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                templateId?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                insightsEnabled?: boolean | undefined
                editMode?: TextEditMode | undefined
                findText?: string | undefined
                publish?: boolean | undefined
                lastRevision?: number | undefined
                dataAttributes?:
                  | ({ dataAttributeId: string; value: string | boolean | number }[] | null)
                  | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: { data?: Document | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                text?: string | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                templateId?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                insightsEnabled?: boolean | undefined
                editMode?: TextEditMode | undefined
                findText?: string | undefined
                publish?: boolean | undefined
                lastRevision?: number | undefined
                dataAttributes?:
                  | ({ dataAttributeId: string; value: string | boolean | number }[] | null)
                  | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                text?: string | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                templateId?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                insightsEnabled?: boolean | undefined
                editMode?: TextEditMode | undefined
                findText?: string | undefined
                publish?: boolean | undefined
                lastRevision?: number | undefined
                dataAttributes?:
                  | ({ dataAttributeId: string; value: string | boolean | number }[] | null)
                  | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                text?: string | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                templateId?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                insightsEnabled?: boolean | undefined
                editMode?: TextEditMode | undefined
                findText?: string | undefined
                publish?: boolean | undefined
                lastRevision?: number | undefined
                dataAttributes?:
                  | ({ dataAttributeId: string; value: string | boolean | number }[] | null)
                  | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                text?: string | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                templateId?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                insightsEnabled?: boolean | undefined
                editMode?: TextEditMode | undefined
                findText?: string | undefined
                publish?: boolean | undefined
                lastRevision?: number | undefined
                dataAttributes?:
                  | ({ dataAttributeId: string; value: string | boolean | number }[] | null)
                  | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                text?: string | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                templateId?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                insightsEnabled?: boolean | undefined
                editMode?: TextEditMode | undefined
                findText?: string | undefined
                publish?: boolean | undefined
                lastRevision?: number | undefined
                dataAttributes?:
                  | ({ dataAttributeId: string; value: string | boolean | number }[] | null)
                  | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                text?: string | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                preferences?:
                  | ({
                      headingPrefix?: 'none' | 'numeric' | 'alphanumeric' | 'outline' | undefined
                    } | null)
                  | undefined
                templateId?: (string | null) | undefined
                collectionId?: (string | null) | undefined
                insightsEnabled?: boolean | undefined
                editMode?: TextEditMode | undefined
                findText?: string | undefined
                publish?: boolean | undefined
                lastRevision?: number | undefined
                dataAttributes?:
                  | ({ dataAttributeId: string; value: string | boolean | number }[] | null)
                  | undefined
                deprecatedReason?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.templatize': {
      $post:
        | {
            input: {
              json: { id: string; collectionId?: (string | null) | undefined; publish: boolean }
            }
            output: { data?: Template | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { id: string; collectionId?: (string | null) | undefined; publish: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { id: string; collectionId?: (string | null) | undefined; publish: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { id: string; collectionId?: (string | null) | undefined; publish: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { id: string; collectionId?: (string | null) | undefined; publish: boolean }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.unpublish': {
      $post:
        | {
            input: { json: { id: string; detach?: boolean | undefined } }
            output: { data?: Document | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; detach?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; detach?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; detach?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; detach?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; detach?: boolean | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.move': {
      $post:
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
                index?: number | undefined
              }
            }
            output: {
              data?:
                | { documents?: Document[] | undefined; collections?: Collection[] | undefined }
                | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
                index?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
                index?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
                index?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
                index?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
                index?: number | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.archive': {
      $post:
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: { data?: Document | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; reason?: (string | null) | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.restore': {
      $post:
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                revisionId?: string | undefined
              }
            }
            output: { data?: Document | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                revisionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                revisionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                revisionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                revisionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                collectionId?: string | undefined
                revisionId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.delete': {
      $post:
        | {
            input: {
              json: {
                id: string
                permanent?: boolean | undefined
                reason?: (string | null) | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                permanent?: boolean | undefined
                reason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                permanent?: boolean | undefined
                reason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                permanent?: boolean | undefined
                reason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                permanent?: boolean | undefined
                reason?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                permanent?: boolean | undefined
                reason?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.users': {
      $post:
        | {
            input: { json: { id: string; query?: string | undefined; userId?: string | undefined } }
            output: {
              data?: User[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; query?: string | undefined; userId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; query?: string | undefined; userId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; query?: string | undefined; userId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; query?: string | undefined; userId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; query?: string | undefined; userId?: string | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.memberships': {
      $post:
        | {
            input: {
              json: { id: string; query?: string | undefined; permission?: Permission | undefined }
            }
            output: {
              data?:
                | { users?: User[] | undefined; memberships?: Membership[] | undefined }
                | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { id: string; query?: string | undefined; permission?: Permission | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { id: string; query?: string | undefined; permission?: Permission | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { id: string; query?: string | undefined; permission?: Permission | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { id: string; query?: string | undefined; permission?: Permission | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: { id: string; query?: string | undefined; permission?: Permission | undefined }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.add_user': {
      $post:
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: {
              data?:
                | { users?: User[] | undefined; memberships?: Membership[] | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; userId: string; permission?: Permission | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.remove_user': {
      $post:
        | {
            input: { json: { id: string; userId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; userId: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.archived': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
              }
            }
            output: {
              data?: Document[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.deleted': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentsDeletedFilter[] | undefined
              }
            }
            output: {
              data?: Document[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentsDeletedFilter[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentsDeletedFilter[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                filters?: DocumentsDeletedFilter[] | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.duplicate': {
      $post:
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                recursive?: boolean | undefined
                publish?: boolean | undefined
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
              }
            }
            output: {
              data?: { documents?: Document[] | undefined } | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                recursive?: boolean | undefined
                publish?: boolean | undefined
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                recursive?: boolean | undefined
                publish?: boolean | undefined
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                recursive?: boolean | undefined
                publish?: boolean | undefined
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                recursive?: boolean | undefined
                publish?: boolean | undefined
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                recursive?: boolean | undefined
                publish?: boolean | undefined
                collectionId?: string | undefined
                parentDocumentId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.add_group': {
      $post:
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: {
              data?: { groupMemberships?: CollectionGroupMembership[] | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; groupId: string; permission?: Permission | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.remove_group': {
      $post:
        | {
            input: { json: { id: string; groupId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; groupId: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.group_memberships': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: {
              data?:
                | {
                    groups?: Group[] | undefined
                    groupMemberships?: CollectionGroupMembership[] | undefined
                  }
                | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
                permission?: Permission | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/documents.empty_trash': {
      $post:
        | {
            input: {}
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
        | {
            input: {}
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/events.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                name?: string | undefined
                actorId?: string | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                auditLog?: boolean | undefined
              }
            }
            output: { data?: Event[] | undefined; pagination?: Pagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                name?: string | undefined
                actorId?: string | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                auditLog?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                name?: string | undefined
                actorId?: string | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                auditLog?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                name?: string | undefined
                actorId?: string | undefined
                documentId?: string | undefined
                collectionId?: string | undefined
                auditLog?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fileOperations.info': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: FileOperation | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fileOperations.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fileOperations.redirect': {
      $post:
        | { input: { json: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fileOperations.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                type: 'export' | 'import'
              }
            }
            output: { data?: FileOperation[] | undefined; pagination?: Pagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                type: 'export' | 'import'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                type: 'export' | 'import'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                type: 'export' | 'import'
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groupMemberships.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                groupId?: string | undefined
              }
            }
            output: {
              data?:
                | {
                    groupMemberships?: GroupMembership[] | undefined
                    groups?: Group[] | undefined
                    documents?: Document[] | undefined
                  }
                | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                groupId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                groupId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                groupId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.info': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: Group | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                externalId?: string | undefined
                query?: string | undefined
              }
            }
            output: {
              data?:
                | { groups?: Group[] | undefined; groupMemberships?: GroupMembership[] | undefined }
                | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                externalId?: string | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                externalId?: string | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                userId?: string | undefined
                externalId?: string | undefined
                query?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.create': {
      $post:
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: { data?: Group | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                name: string
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: { data?: Group | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                name: string
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                name: string
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                name: string
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                name: string
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                name: string
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.memberships': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
              }
            }
            output: {
              data?:
                | { users?: User[] | undefined; groupMemberships?: GroupMembership[] | undefined }
                | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                id: string
                query?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.add_user': {
      $post:
        | {
            input: {
              json: { id: string; userId: string; permission?: 'member' | 'admin' | undefined }
            }
            output: {
              data?:
                | {
                    users?: User[] | undefined
                    groups?: Group[] | undefined
                    groupMemberships?: GroupMembership[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { id: string; userId: string; permission?: 'member' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { id: string; userId: string; permission?: 'member' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { id: string; userId: string; permission?: 'member' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { id: string; userId: string; permission?: 'member' | 'admin' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: { id: string; userId: string; permission?: 'member' | 'admin' | undefined }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.remove_user': {
      $post:
        | {
            input: { json: { id: string; userId: string } }
            output: { data?: { groups?: Group[] | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; userId: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups.update_user': {
      $post:
        | {
            input: { json: { id: string; userId: string; permission: 'member' | 'admin' } }
            output: {
              data?:
                | {
                    users?: User[] | undefined
                    groups?: Group[] | undefined
                    groupMemberships?: GroupMembership[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; userId: string; permission: 'member' | 'admin' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; userId: string; permission: 'member' | 'admin' } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; userId: string; permission: 'member' | 'admin' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; userId: string; permission: 'member' | 'admin' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; userId: string; permission: 'member' | 'admin' } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/notifications.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                eventType?: string | undefined
                archived?: boolean | undefined
              }
            }
            output: {
              data?: Notification[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                eventType?: string | undefined
                archived?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                eventType?: string | undefined
                archived?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                eventType?: string | undefined
                archived?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/notifications.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: { data?: Notification | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/notifications.update_all': {
      $post:
        | {
            input: {
              json: {
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                viewedAt?: (string | null) | undefined
                archivedAt?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthAuthentications.list': {
      $post:
        | {
            input: { json: Pagination }
            output: {
              data?: OAuthAuthentication[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 403 }
        | {
            input: { json: Pagination }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthAuthentications.delete': {
      $post:
        | {
            input: { json: { oauthClientId: string; scope?: string[] | undefined } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { oauthClientId: string; scope?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { oauthClientId: string; scope?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { oauthClientId: string; scope?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { oauthClientId: string; scope?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { oauthClientId: string; scope?: string[] | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthClients.info': {
      $post:
        | {
            input: { json: { id?: string | undefined; clientId?: string | undefined } }
            output: { data?: OAuthClient | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id?: string | undefined; clientId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id?: string | undefined; clientId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id?: string | undefined; clientId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id?: string | undefined; clientId?: string | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthClients.list': {
      $post:
        | {
            input: { json: Pagination }
            output: {
              data?: OAuthClient[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 403 }
        | {
            input: { json: Pagination }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthClients.create': {
      $post:
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris: string[]
                published?: boolean | undefined
              }
            }
            output: { data?: OAuthClient | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris: string[]
                published?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris: string[]
                published?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris: string[]
                published?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthClients.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris?: string[] | undefined
                published?: boolean | undefined
              }
            }
            output: { data?: OAuthClient | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris?: string[] | undefined
                published?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris?: string[] | undefined
                published?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                name?: string | undefined
                description?: string | undefined
                developerName?: string | undefined
                developerUrl?: string | undefined
                avatarUrl?: string | undefined
                redirectUris?: string[] | undefined
                published?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthClients.rotate_secret': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: OAuthClient | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauthClients.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/pins.create': {
      $post:
        | {
            input: {
              json: {
                documentId: string
                collectionId?: (string | null) | undefined
                index?: string | undefined
              }
            }
            output: { data?: Pin | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                documentId: string
                collectionId?: (string | null) | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                documentId: string
                collectionId?: (string | null) | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                documentId: string
                collectionId?: (string | null) | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                documentId: string
                collectionId?: (string | null) | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                documentId: string
                collectionId?: (string | null) | undefined
                index?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/pins.info': {
      $post:
        | {
            input: { json: { documentId: string; collectionId?: (string | null) | undefined } }
            output: { data?: Pin | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { documentId: string; collectionId?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { documentId: string; collectionId?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { documentId: string; collectionId?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { documentId: string; collectionId?: (string | null) | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/pins.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: {
              data?: Pin[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/pins.update': {
      $post:
        | {
            input: { json: { id: string; index: string } }
            output: { data?: Pin | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; index: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/pins.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/reactions.list': {
      $post:
        | {
            input: {
              json: { offset?: number | undefined; limit?: number | undefined; commentId: string }
            }
            output: {
              data?: Reaction[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { offset?: number | undefined; limit?: number | undefined; commentId: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { offset?: number | undefined; limit?: number | undefined; commentId: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { offset?: number | undefined; limit?: number | undefined; commentId: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { offset?: number | undefined; limit?: number | undefined; commentId: string }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/revisions.info': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: RevisionDetail | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/revisions.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
              }
            }
            output: { data?: Revision[] | undefined; pagination?: Pagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                documentId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/revisions.update': {
      $post:
        | {
            input: { json: { id: string; name: string | null } }
            output: { data?: Revision | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; name: string | null } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; name: string | null } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; name: string | null } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; name: string | null } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; name: string | null } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/revisions.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/revisions.export': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: { fileOperation?: FileOperation | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shares.info': {
      $post:
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: { data?: Share | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id?: string | undefined; documentId?: string | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shares.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: {
              data?: Share[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shares.create': {
      $post:
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: { data?: Share | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shares.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                published: boolean
                title?: (string | null) | undefined
                iconUrl?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
              }
            }
            output: { data?: Share | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                published: boolean
                title?: (string | null) | undefined
                iconUrl?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                published: boolean
                title?: (string | null) | undefined
                iconUrl?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                published: boolean
                title?: (string | null) | undefined
                iconUrl?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                published: boolean
                title?: (string | null) | undefined
                iconUrl?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shares.revoke': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/stars.create': {
      $post:
        | {
            input: {
              json: {
                documentId?: string | undefined
                collectionId?: string | undefined
                index?: string | undefined
              }
            }
            output: { data?: Star | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                documentId?: string | undefined
                collectionId?: string | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                documentId?: string | undefined
                collectionId?: string | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                documentId?: string | undefined
                collectionId?: string | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                documentId?: string | undefined
                collectionId?: string | undefined
                index?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                documentId?: string | undefined
                collectionId?: string | undefined
                index?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/stars.list': {
      $post:
        | {
            input: { json: Pagination }
            output: {
              data?: { stars?: Star[] | undefined; documents?: Document[] | undefined } | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 403 }
        | {
            input: { json: Pagination }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/stars.update': {
      $post:
        | {
            input: { json: { id: string; index: string } }
            output: { data?: Star | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; index: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/stars.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/subscriptions.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: {
              data?: Subscription[] | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/subscriptions.info': {
      $post:
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: { data?: Subscription | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/subscriptions.create': {
      $post:
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: { data?: Subscription | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                event: 'documents'
                documentId?: string | undefined
                collectionId?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/subscriptions.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates.create': {
      $post:
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                collectionId?: string | undefined
                publish?: boolean | undefined
              }
            }
            output: { data?: Template | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                collectionId?: string | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                collectionId?: string | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                collectionId?: string | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id?: string | undefined
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                collectionId?: string | undefined
                publish?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                query?: string | undefined
              }
            }
            output: {
              data?: Template[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                collectionId?: string | undefined
                query?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates.info': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: Template | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                collectionId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: { data?: Template | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                collectionId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                collectionId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                collectionId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                collectionId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                data?: { [x: string]: unknown } | undefined
                icon?: (string | null) | undefined
                color?: (string | null) | undefined
                fullWidth?: boolean | undefined
                collectionId?: (string | null) | undefined
                publish?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates.restore': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: Template | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates.duplicate': {
      $post:
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: { data?: Template | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                title?: string | undefined
                collectionId?: (string | null) | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/userMemberships.list': {
      $post:
        | {
            input: { json: Pagination }
            output: {
              data?:
                | { memberships?: Membership[] | undefined; documents?: Document[] | undefined }
                | undefined
              pagination?: Pagination | undefined
              policies?: Policy[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: Pagination }; output: Error; outputFormat: 'json'; status: 403 }
        | {
            input: { json: Pagination }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/userMemberships.update': {
      $post:
        | {
            input: { json: { id: string; index: string } }
            output: { data?: Membership | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; index: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; index: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.invite': {
      $post:
        | {
            input: { json: { invites: Invite[]; suppressEmail?: boolean | undefined } }
            output: {
              data?: { sent?: Invite[] | undefined; users?: User[] | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { invites: Invite[]; suppressEmail?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { invites: Invite[]; suppressEmail?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { invites: Invite[]; suppressEmail?: boolean | undefined } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.info': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: User | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
                filters?: UserFilter[] | undefined
                emails?: string[] | undefined
                filter?: 'all' | 'invited' | 'active' | 'suspended' | undefined
                role?: {} | undefined
              }
            }
            output: {
              data?: User[] | undefined
              policies?: Policy[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
                filters?: UserFilter[] | undefined
                emails?: string[] | undefined
                filter?: 'all' | 'invited' | 'active' | 'suspended' | undefined
                role?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
                filters?: UserFilter[] | undefined
                emails?: string[] | undefined
                filter?: 'all' | 'invited' | 'active' | 'suspended' | undefined
                role?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
                filters?: UserFilter[] | undefined
                emails?: string[] | undefined
                filter?: 'all' | 'invited' | 'active' | 'suspended' | undefined
                role?: {} | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.update': {
      $post:
        | {
            input: {
              json: {
                name?: string | undefined
                language?: string | undefined
                avatarUrl?: string | undefined
                preferences?:
                  | { sidebarSectionOrder?: ('starred' | 'shared' | 'collections')[] | undefined }
                  | undefined
              }
            }
            output: { data?: User | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: string | undefined
                language?: string | undefined
                avatarUrl?: string | undefined
                preferences?:
                  | { sidebarSectionOrder?: ('starred' | 'shared' | 'collections')[] | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name?: string | undefined
                language?: string | undefined
                avatarUrl?: string | undefined
                preferences?:
                  | { sidebarSectionOrder?: ('starred' | 'shared' | 'collections')[] | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name?: string | undefined
                language?: string | undefined
                avatarUrl?: string | undefined
                preferences?:
                  | { sidebarSectionOrder?: ('starred' | 'shared' | 'collections')[] | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name?: string | undefined
                language?: string | undefined
                avatarUrl?: string | undefined
                preferences?:
                  | { sidebarSectionOrder?: ('starred' | 'shared' | 'collections')[] | undefined }
                  | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.update_role': {
      $post:
        | {
            input: { json: { id: string; role: UserRole } }
            output: { data?: User | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; role: UserRole } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; role: UserRole } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { id: string; role: UserRole } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; role: UserRole } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.suspend': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: User | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.activate': {
      $post:
        | {
            input: { json: { id: string } }
            output: { data?: User | undefined; policies?: Policy[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.resendInvite': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.notificationsSubscribe': {
      $post:
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: { data?: User | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users.notificationsUnsubscribe': {
      $post:
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: { data?: User | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                eventType?:
                  | 'documents.publish'
                  | 'documents.update'
                  | 'documents.add_user'
                  | 'collections.add_user'
                  | 'revisions.create'
                  | 'collections.create'
                  | 'comments.create'
                  | 'comments.resolve'
                  | 'reactions.create'
                  | 'documents.mentioned'
                  | 'comments.mentioned'
                  | 'documents.group_mentioned'
                  | 'comments.group_mentioned'
                  | 'emails.invite_accepted'
                  | 'emails.onboarding'
                  | 'emails.features'
                  | 'emails.export_completed'
                  | 'access_requests.create'
                  | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/views.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                documentId: string
                includeSuspended?: boolean | undefined
              }
            }
            output: { data?: View[] | undefined; pagination?: Pagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                documentId: string
                includeSuspended?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                documentId: string
                includeSuspended?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                documentId: string
                includeSuspended?: boolean | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/webhookSubscriptions.list': {
      $post:
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: {
              data?: WebhookSubscription[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                offset?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                query?: string | undefined
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/webhookSubscriptions.create': {
      $post:
        | {
            input: {
              json: {
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: { data?: WebhookSubscription | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/webhookSubscriptions.update': {
      $post:
        | {
            input: {
              json: {
                id: string
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: { data?: WebhookSubscription | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id: string
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                id: string
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                id: string
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id: string
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id: string
                name: string
                url: string
                secret?: (string | null) | undefined
                events: string[]
              }
            }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/webhookSubscriptions.delete': {
      $post:
        | {
            input: { json: { id: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { json: { id: string } }
            output: {
              ok?: boolean | undefined
              error?: string | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
