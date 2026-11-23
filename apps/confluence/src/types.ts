type OperationCheckResult = {
  operation:
    | 'administer'
    | 'archive'
    | 'clear_permissions'
    | 'copy'
    | 'create'
    | 'create_space'
    | 'delete'
    | 'export'
    | 'move'
    | 'purge'
    | 'purge_version'
    | 'read'
    | 'restore'
    | 'restrict_content'
    | 'update'
    | 'use'
  targetType: string
}
type GenericUserName = string | null
type GenericUserKey = string | null
type GenericAccountId = string | null
type AffectedObject = { name: string; objectType: string }
type ChangedValue = {
  name: string
  oldValue: string
  hiddenOldValue?: string | undefined
  newValue: string
  hiddenNewValue?: string | undefined
}
type AuditRecord = {
  author: {
    type: 'user'
    displayName: string
    operations?: (OperationCheckResult[] | null) | undefined
    username?: GenericUserName | undefined
    userKey?: GenericUserKey | undefined
    accountId?: GenericAccountId | undefined
    accountType?: string | undefined
    externalCollaborator?: boolean | undefined
    isExternalCollaborator?: boolean | undefined
    isGuest?: boolean | undefined
    publicName?: string | undefined
  }
  remoteAddress: string
  creationDate: bigint
  summary: string
  description: string
  category: string
  sysAdmin: boolean
  superAdmin?: boolean | undefined
  affectedObject: AffectedObject
  changedValues: ChangedValue[]
  associatedObjects: AffectedObject[]
}
type GenericLinks = { [x: string]: { [x: string]: unknown } | string }
type AuditRecordArray = {
  results: AuditRecord[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type AuditRecordCreate = {
  author?:
    | {
        type: 'user'
        displayName?: string | undefined
        operations?: OperationCheckResult[] | undefined
        username?: GenericUserName | undefined
        userKey?: GenericUserKey | undefined
      }
    | undefined
  remoteAddress: string
  creationDate?: bigint | undefined
  summary?: string | undefined
  description?: string | undefined
  category?: string | undefined
  sysAdmin?: boolean | undefined
  affectedObject?: AffectedObject | undefined
  changedValues?: ChangedValue[] | undefined
  associatedObjects?: AffectedObject[] | undefined
}
type RetentionPeriod = {
  number: number
  units:
    | 'NANOS'
    | 'MICROS'
    | 'MILLIS'
    | 'SECONDS'
    | 'MINUTES'
    | 'HOURS'
    | 'HALF_DAYS'
    | 'DAYS'
    | 'WEEKS'
    | 'MONTHS'
    | 'YEARS'
    | 'DECADES'
    | 'CENTURIES'
    | 'MILLENNIA'
    | 'ERAS'
    | 'FOREVER'
}
type LongTask = { ari?: string | undefined; id: string; links: { status?: string | undefined } }
type ContentBlueprintDraft = {
  version: { number: number }
  title: string
  type: 'page'
  status?: 'current' | undefined
  space?: { key: string } | undefined
  ancestors?: ({ id: string }[] | null) | undefined
}
type Icon = { path: string; width: number; height: number; isDefault: boolean } | null
type SpaceDescription = {
  value: string
  representation: 'plain' | 'view'
  embeddedContent: { [x: string]: unknown }[]
}
type Label = { prefix: string; name: string; id: string; label: string }
type LabelArray = {
  results: Label[]
  start?: number | undefined
  limit?: number | undefined
  size: number
  _links?: GenericLinks | undefined
}
type UserDetails = {
  business?:
    | {
        position?: string | undefined
        department?: string | undefined
        location?: string | undefined
      }
    | undefined
  personal?:
    | {
        phone?: string | undefined
        im?: string | undefined
        website?: string | undefined
        email?: string | undefined
      }
    | undefined
}
type User = {
  type: 'known' | 'unknown' | 'anonymous' | 'user'
  username?: GenericUserName | undefined
  userKey?: GenericUserKey | undefined
  accountId?: GenericAccountId | undefined
  accountType?: 'atlassian' | 'app' | '' | undefined
  email?: (string | null) | undefined
  publicName?: string | undefined
  profilePicture?: Icon | undefined
  displayName?: (string | null) | undefined
  timeZone?: (string | null) | undefined
  externalCollaborator?: boolean | undefined
  isExternalCollaborator?: boolean | undefined
  isGuest?: boolean | undefined
  operations?: (OperationCheckResult[] | null) | undefined
  details?: UserDetails | undefined
  personalSpace?: Space | undefined
  _expandable?:
    | {
        operations?: string | undefined
        details?: string | undefined
        personalSpace?: string | undefined
      }
    | undefined
  _links?: GenericLinks | undefined
} | null
type Group = {
  type: 'group'
  name: string
  id: string
  usageType?: 'USERBASE_GROUP' | 'TEAM_COLLABORATION' | undefined
  managedBy?: 'ADMINS' | 'EXTERNAL' | 'TEAM_MEMBERS' | 'OPEN' | undefined
  _links?: GenericLinks | undefined
}
type SpacePermission = {
  id?: bigint | undefined
  subjects?:
    | {
        user?:
          | {
              results: User[]
              size: number
              start?: number | undefined
              limit?: number | undefined
            }
          | undefined
        group?:
          | {
              results: Group[]
              size: number
              start?: number | undefined
              limit?: number | undefined
            }
          | undefined
        _expandable?: { user?: string | undefined; group?: string | undefined } | undefined
      }
    | undefined
  operation: OperationCheckResult
  anonymousAccess: boolean
  unlicensedAccess: boolean
}
type SpaceSettings = {
  routeOverrideEnabled: boolean
  editor?: { page: string; blogpost: string; default: string } | undefined
  contentMode?: 'standard' | 'compact' | undefined
  spaceKey?: string | undefined
  _links: GenericLinks
} | null
type Theme = {
  themeKey: string
  name?: string | undefined
  description?: string | undefined
  icon?: Icon | undefined
  _links?: GenericLinks | undefined
}
type MenusLookAndFeel = { hoverOrFocus: { backgroundColor: string }; color: string }
type ButtonLookAndFeel = { backgroundColor: string; color: string } | null
type NavigationLookAndFeel = {
  color: string
  highlightColor?: (string | null) | undefined
  hoverOrFocus: { backgroundColor: string; color: string }
} | null
type SearchFieldLookAndFeel = { backgroundColor: string; color: string } | null
type HeaderLookAndFeel = {
  backgroundColor: string
  button: ButtonLookAndFeel
  primaryNavigation: NavigationLookAndFeel
  secondaryNavigation: NavigationLookAndFeel
  search: SearchFieldLookAndFeel
}
type TopNavigationLookAndFeel = {
  color?: (string | null) | undefined
  highlightColor: string
  hoverOrFocus?: { backgroundColor?: string | undefined; color?: string | undefined } | undefined
}
type HorizontalHeaderLookAndFeel = {
  backgroundColor: string
  button?: ButtonLookAndFeel | undefined
  primaryNavigation: TopNavigationLookAndFeel
  secondaryNavigation?: NavigationLookAndFeel | undefined
  search?: SearchFieldLookAndFeel | undefined
}
type ScreenLookAndFeel = {
  background: string
  backgroundAttachment?: (string | null) | undefined
  backgroundBlendMode?: (string | null) | undefined
  backgroundClip?: (string | null) | undefined
  backgroundColor?: (string | null) | undefined
  backgroundImage?: (string | null) | undefined
  backgroundOrigin?: (string | null) | undefined
  backgroundPosition?: (string | null) | undefined
  backgroundRepeat?: (string | null) | undefined
  backgroundSize?: (string | null) | undefined
  layer?: ({ width?: string | undefined; height?: string | undefined } | null) | undefined
  gutterTop?: (string | null) | undefined
  gutterRight?: (string | null) | undefined
  gutterBottom?: (string | null) | undefined
  gutterLeft?: (string | null) | undefined
}
type ContainerLookAndFeel = {
  background: string
  backgroundAttachment?: (string | null) | undefined
  backgroundBlendMode?: (string | null) | undefined
  backgroundClip?: (string | null) | undefined
  backgroundColor: string | null
  backgroundImage: string | null
  backgroundOrigin?: (string | null) | undefined
  backgroundPosition?: (string | null) | undefined
  backgroundRepeat?: (string | null) | undefined
  backgroundSize: string | null
  padding: string
  borderRadius: string
} | null
type ContentLookAndFeel = {
  screen?: ScreenLookAndFeel | undefined
  container?: ContainerLookAndFeel | undefined
  header?: ContainerLookAndFeel | undefined
  body?: ContainerLookAndFeel | undefined
}
type LookAndFeel = {
  headings: { color: string }
  links: { color: string }
  menus: MenusLookAndFeel
  header: HeaderLookAndFeel
  horizontalHeader?: HorizontalHeaderLookAndFeel | undefined
  content: ContentLookAndFeel
  bordersAndDividers: { color: string }
  spaceReference?: ({ [x: string]: unknown } | null) | undefined
}
type Space = {
  id?: bigint | undefined
  key: string
  alias?: string | undefined
  name: string
  icon?: Icon | undefined
  description?:
    | {
        plain?: SpaceDescription | undefined
        view?: SpaceDescription | undefined
        _expandable?: { view?: string | undefined; plain?: string | undefined } | undefined
      }
    | undefined
  homepage?: Content | undefined
  type: string
  metadata?:
    | { labels?: LabelArray | undefined; _expandable?: { [x: string]: unknown } | undefined }
    | undefined
  operations?: OperationCheckResult[] | undefined
  permissions?: SpacePermission[] | undefined
  status: string
  settings?: SpaceSettings | undefined
  theme?: Theme | undefined
  lookAndFeel?: LookAndFeel | undefined
  history?: { createdDate: string; createdBy?: User | undefined } | undefined
  _expandable: {
    settings?: string | undefined
    metadata?: string | undefined
    operations?: string | undefined
    lookAndFeel?: string | undefined
    permissions?: string | undefined
    icon?: string | undefined
    description?: string | undefined
    theme?: string | undefined
    history?: string | undefined
    homepage?: string | undefined
    identifiers?: string | undefined
  }
  _links: GenericLinks
} | null
type UsersUserKeys = {
  users?: User[] | undefined
  userKeys?: string[] | undefined
  _links?: GenericLinks | undefined
} | null
type Version = {
  by?: User | undefined
  when: string | null
  friendlyWhen?: (string | null) | undefined
  message?: (string | null) | undefined
  number: number
  minorEdit: boolean
  content?: Content | undefined
  collaborators?: UsersUserKeys | undefined
  _expandable?: { content?: string | undefined; collaborators?: string | undefined } | undefined
  _links?: GenericLinks | undefined
  contentTypeModified?: boolean | undefined
  confRev?: (string | null) | undefined
  syncRev?: (string | null) | undefined
  syncRevSource?: (string | null) | undefined
} | null
type ContentHistory = {
  latest: boolean
  createdBy?: User | undefined
  ownedBy?: User | undefined
  lastOwnedBy?: User | undefined
  createdDate?: string | undefined
  lastUpdated?: Version | undefined
  previousVersion?: Version | undefined
  contributors?: { publishers?: UsersUserKeys | undefined } | undefined
  nextVersion?: Version | undefined
  _expandable?:
    | {
        lastUpdated?: string | undefined
        previousVersion?: string | undefined
        contributors?: string | undefined
        nextVersion?: string | undefined
        ownedBy?: string | undefined
        lastOwnedBy?: string | undefined
      }
    | undefined
  _links?: GenericLinks | undefined
} | null
type ContentArray = {
  results: Content[]
  start?: number | undefined
  limit?: number | undefined
  size: number
  _links: GenericLinks
}
type ContentChildren = {
  attachment?: ContentArray | undefined
  comment?: ContentArray | undefined
  page?: ContentArray | undefined
  whiteboard?: ContentArray | undefined
  database?: ContentArray | undefined
  embed?: ContentArray | undefined
  folder?: ContentArray | undefined
  _expandable?:
    | {
        attachment?: string | undefined
        comment?: string | undefined
        page?: string | undefined
        whiteboard?: string | undefined
        database?: string | undefined
        embed?: string | undefined
        folder?: string | undefined
      }
    | undefined
  _links?: GenericLinks | undefined
}
type ContentChildType = {
  attachment?: { value: boolean; _links: GenericLinks } | undefined
  comment?: { value: boolean; _links: GenericLinks } | undefined
  page?: { value: boolean; _links: GenericLinks } | undefined
  _expandable?:
    | {
        all?: string | undefined
        attachment?: string | undefined
        comment?: string | undefined
        page?: string | undefined
        whiteboard?: string | undefined
        database?: string | undefined
        embed?: string | undefined
        folder?: string | undefined
      }
    | undefined
}
type Container = { [x: string]: unknown } | null
type Embeddable = { [x: string]: unknown }
type EmbeddedContent = {
  entityId?: bigint | undefined
  entityType?: string | undefined
  entity?: Embeddable | undefined
}
type SuperBatchWebResources = {
  uris?:
    | {
        all?: string[] | string | undefined
        css?: string[] | string | undefined
        js?: string[] | string | undefined
      }
    | undefined
  tags?:
    | {
        all?: string | undefined
        css?: string | undefined
        data?: string | undefined
        js?: string | undefined
      }
    | undefined
  metatags?: string | undefined
  _expandable?: { [x: string]: unknown } | undefined
}
type WebResourceDependencies = {
  _expandable?: { uris?: string | { [x: string]: unknown } | undefined } | undefined
  keys?: string[] | undefined
  contexts?: string[] | undefined
  uris?:
    | {
        all?: string[] | string | undefined
        css?: string[] | string | undefined
        js?: string[] | string | undefined
        _expandable?:
          | { css?: string[] | string | undefined; js?: string[] | string | undefined }
          | undefined
      }
    | undefined
  tags?:
    | {
        all?: string | undefined
        css?: string | undefined
        data?: string | undefined
        js?: string | undefined
        _expandable?: { [x: string]: unknown } | undefined
      }
    | undefined
  superbatch?: SuperBatchWebResources | undefined
}
type ContentBody = {
  value: string
  representation:
    | 'view'
    | 'export_view'
    | 'styled_view'
    | 'storage'
    | 'editor'
    | 'editor2'
    | 'anonymous_export_view'
    | 'wiki'
    | 'atlas_doc_format'
    | 'raw'
  embeddedContent?: EmbeddedContent[] | undefined
  webresource?: WebResourceDependencies | undefined
  mediaToken?:
    | {
        collectionIds?: string[] | undefined
        contentId?: string | undefined
        expiryDateTime?: string | undefined
        fileIds?: string[] | undefined
        token?: string | undefined
      }
    | undefined
  _expandable?:
    | {
        content?: string | undefined
        embeddedContent?: string | undefined
        webresource?: string | undefined
        mediaToken?: string | undefined
      }
    | undefined
  _links?: GenericLinks | undefined
}
type UserArray = {
  results: User[]
  start?: number | undefined
  limit?: number | undefined
  size?: number | undefined
  totalSize?: bigint | undefined
  _links?: GenericLinks | undefined
}
type GroupArray = { results: Group[]; start: number; limit: number; size: number }
type ContentRestriction = {
  operation:
    | 'administer'
    | 'copy'
    | 'create'
    | 'delete'
    | 'export'
    | 'move'
    | 'purge'
    | 'purge_version'
    | 'read'
    | 'restore'
    | 'update'
    | 'use'
  restrictions?:
    | {
        user?: UserArray | undefined
        group?: GroupArray | undefined
        _expandable?: { user?: string | undefined; group?: string | undefined } | undefined
      }
    | undefined
  content?: Content | undefined
  _expandable: { restrictions?: string | undefined; content?: string | undefined }
  _links: GenericLinks
}
type ContentMetadata = {
  currentuser?:
    | {
        favourited?:
          | { isFavourite?: boolean | undefined; favouritedDate?: string | undefined }
          | undefined
        lastmodified?:
          | { version?: Version | undefined; friendlyLastModified?: string | undefined }
          | undefined
        lastcontributed?: { status?: string | undefined; when?: string | undefined } | undefined
        viewed?:
          | { lastSeen?: string | undefined; friendlyLastSeen?: string | undefined }
          | undefined
        scheduled?: { [x: string]: unknown } | undefined
        _expandable?:
          | {
              favourited?: string | undefined
              lastmodified?: string | undefined
              lastcontributed?: string | undefined
              viewed?: string | undefined
              scheduled?: string | undefined
            }
          | undefined
      }
    | undefined
  properties?: GenericLinks | undefined
  frontend?: { [x: string]: unknown } | undefined
  labels?: LabelArray | Label[] | undefined
}
type Content = {
  id?: string | undefined
  type: string
  status: string
  title?: string | undefined
  space?: Space | undefined
  history?: ContentHistory | undefined
  version?: Version | undefined
  ancestors?: (Content[] | null) | undefined
  operations?: OperationCheckResult[] | undefined
  children?: ContentChildren | undefined
  childTypes?: ContentChildType | undefined
  descendants?: ContentChildren | undefined
  container?: Container | undefined
  body?:
    | {
        view?: ContentBody | undefined
        export_view?: ContentBody | undefined
        styled_view?: ContentBody | undefined
        storage?: ContentBody | undefined
        wiki?: ContentBody | undefined
        editor?: ContentBody | undefined
        editor2?: ContentBody | undefined
        anonymous_export_view?: ContentBody | undefined
        atlas_doc_format?: ContentBody | undefined
        dynamic?: ContentBody | undefined
        raw?: ContentBody | undefined
        _expandable?:
          | {
              editor?: string | undefined
              view?: string | undefined
              export_view?: string | undefined
              styled_view?: string | undefined
              storage?: string | undefined
              editor2?: string | undefined
              anonymous_export_view?: string | undefined
              atlas_doc_format?: string | undefined
              wiki?: string | undefined
              dynamic?: string | undefined
              raw?: string | undefined
            }
          | undefined
      }
    | undefined
  restrictions?:
    | {
        read?: ContentRestriction | undefined
        update?: ContentRestriction | undefined
        _expandable?: { read?: string | undefined; update?: string | undefined } | undefined
        _links?: GenericLinks | undefined
      }
    | undefined
  metadata?: ContentMetadata | undefined
  macroRenderedOutput?: { [x: string]: { [x: string]: unknown } } | undefined
  extensions?: { [x: string]: unknown } | undefined
  _expandable?:
    | {
        childTypes?: string | undefined
        container?: string | undefined
        metadata?: string | undefined
        operations?: string | undefined
        children?: string | undefined
        restrictions?: string | undefined
        history?: string | undefined
        ancestors?: string | undefined
        body?: string | undefined
        version?: string | undefined
        descendants?: string | undefined
        space?: string | undefined
        extensions?: string | undefined
        schedulePublishDate?: string | undefined
        schedulePublishInfo?: string | undefined
        macroRenderedOutput?: string | undefined
      }
    | undefined
  _links?: GenericLinks | undefined
} | null
type ContentId = string
type AttachmentPropertiesUpdateBody = {
  id: string
  type: string
  status?: string | undefined
  title?: string | undefined
  container?: Container | undefined
  metadata?: { mediaType?: string | undefined } | undefined
  extensions?: { [x: string]: unknown } | undefined
  version: Version
}
type MacroInstance = {
  name?: string | undefined
  body?: string | undefined
  parameters?: { [x: string]: unknown } | undefined
  _links?: GenericLinks | undefined
}
type AsyncId = { asyncId: string }
type LabelCreate = { prefix: string; name: string }
type LabelCreateArray = LabelCreate[]
type WatchUser = {
  type: string
  username?: GenericUserName | undefined
  userKey?: GenericUserKey | undefined
  accountId: GenericAccountId
  profilePicture: Icon
  displayName: string
  timeZone?: (string | null) | undefined
  operations: OperationCheckResult[] | null
  externalCollaborator: boolean
  isGuest: boolean | null
  isExternalCollaborator: boolean
  details?: UserDetails | undefined
  accountType: string
  email: string
  publicName: string
  personalSpace: { [x: string]: unknown } | null
}
type Watch = { type: string; watcher: WatchUser; contentId: bigint }
type WatchArray = {
  results: Watch[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type SpaceWatch = {
  type: string
  watcher: WatchUser
  spaceKey?: string | undefined
  labelName?: string | undefined
  prefix?: string | undefined
}
type SpaceWatchArray = {
  results: SpaceWatch[]
  start: number
  limit: number
  size: number
  _links?: GenericLinks | undefined
}
type CopyPageHierarchyTitleOptions = {
  prefix?: string | undefined
  replace?: string | undefined
  search?: string | undefined
}
type CopyPageHierarchyRequest = {
  copyAttachments?: boolean | undefined
  copyPermissions?: boolean | undefined
  copyProperties?: boolean | undefined
  copyLabels?: boolean | undefined
  copyCustomContents?: boolean | undefined
  copyDescendants?: boolean | undefined
  destinationPageId: ContentId
  titleOptions?: CopyPageHierarchyTitleOptions | undefined
}
type CopyPageRequestDestination = {
  type: 'space' | 'existing_page' | 'parent_page' | 'parent_content'
  value: string
}
type ContentBodyCreate = {
  value: string
  representation:
    | 'view'
    | 'export_view'
    | 'styled_view'
    | 'storage'
    | 'editor'
    | 'editor2'
    | 'anonymous_export_view'
    | 'wiki'
    | 'atlas_doc_format'
    | 'plain'
    | 'raw'
}
type CopyPageRequest = {
  copyAttachments?: boolean | undefined
  copyPermissions?: boolean | undefined
  copyProperties?: boolean | undefined
  copyLabels?: boolean | undefined
  copyCustomContents?: boolean | undefined
  destination: CopyPageRequestDestination
  pageTitle?: string | undefined
  body?:
    | { storage?: ContentBodyCreate | undefined; editor2?: ContentBodyCreate | undefined }
    | undefined
}
type PermissionSubjectWithGroupId = { type: 'user' | 'group'; identifier: string }
type ContentPermissionRequest = {
  subject: PermissionSubjectWithGroupId
  operation: 'read' | 'update' | 'delete'
}
type Message = { translation?: string | undefined; args: (string | { [x: string]: unknown })[] }
type PermissionCheckResponse = {
  hasPermission: boolean
  errors?: Message[] | undefined
  _links?: GenericLinks | undefined
}
type ContentRestrictionArray = {
  results: ContentRestriction[]
  start: number
  limit: number
  size: number
  restrictionsHash: string
  _links: GenericLinks
}
type ContentRestrictionUpdate = {
  operation: 'read' | 'update'
  restrictions: { [x: string]: unknown } | { [x: string]: unknown }
  content?: { id: string } | undefined
}
type ContentRestrictionAddOrUpdateArray =
  | { results: ContentRestrictionUpdate[] }
  | ContentRestrictionUpdate[]
type ContentState = { id: bigint; name: string; color: string }
type ContentStateResponse = {
  contentState?: ContentState | undefined
  lastUpdated?: string | undefined
}
type ContentStateRestInput = {
  name?: string | undefined
  color?: string | undefined
  id?: bigint | undefined
}
type AvailableContentStates = {
  spaceContentStates: ContentState[]
  customContentStates: ContentState[]
}
type VersionRestore = {
  operationKey: 'restore'
  params: { versionNumber: number; message: string; restoreTitle?: boolean | undefined }
}
type AsyncContentBody = {
  value?: string | undefined
  representation?:
    | 'view'
    | 'export_view'
    | 'styled_view'
    | 'storage'
    | 'editor'
    | 'editor2'
    | 'anonymous_export_view'
    | 'wiki'
    | 'atlas_doc_format'
    | undefined
  renderTaskId?: string | undefined
  error?: string | undefined
  status?: 'WORKING' | 'QUEUED' | 'FAILED' | 'COMPLETED' | 'RERUNNING' | undefined
  embeddedContent?: EmbeddedContent[] | undefined
  webresource?: WebResourceDependencies | undefined
  mediaToken?:
    | {
        collectionIds?: string[] | undefined
        contentId?: string | undefined
        expiryDateTime?: string | undefined
        fileIds?: string[] | undefined
        token?: string | undefined
      }
    | undefined
  _expandable?:
    | {
        content?: string | undefined
        embeddedContent?: string | undefined
        webresource?: string | undefined
        mediaToken?: string | undefined
      }
    | undefined
  _links?: GenericLinks | undefined
}
type ContentBodyConversionInput = {
  to: string
  allowCache?: boolean | undefined
  spaceKeyContext?: string | undefined
  contentIdContext?: string | undefined
  embeddedContentRender?: 'current' | 'version-at-save' | undefined
  expand?: string[] | undefined
  body: ContentBodyCreate
}
type BulkContentBodyConversionInput = {
  conversionInputs?: ContentBodyConversionInput[] | undefined
}
type AsyncIdArray = AsyncId[]
type AsyncContentBodyArray = AsyncContentBody[]
type LabeledContentType = 'page' | 'blogpost' | 'attachment' | 'page_template'
type LabeledContent = { contentType: LabeledContentType; contentId: bigint; title: string }
type LabeledContentPageResponse = {
  results: LabeledContent[]
  start?: number | undefined
  limit?: number | undefined
  size: number
}
type LabelDetails = { label: Label; associatedContents?: LabeledContentPageResponse | undefined }
type GroupArrayWithLinks = {
  results: Group[]
  start: number
  limit: number
  size: number
  totalSize?: bigint | undefined
  _links: GenericLinks
}
type GroupName = { name: string }
type AccountId = { accountId: string }
type LongTaskStatus = {
  ari?: string | undefined
  id: string
  name: { key: string; args: { [x: string]: unknown }[] }
  elapsedTime: bigint
  percentageComplete: number
  successful: boolean
  finished: boolean
  messages: Message[]
  status?: string | undefined
  errors?: Message[] | undefined
  additionalDetails?:
    | {
        destinationId?: string | undefined
        destinationUrl?: string | undefined
        totalPageNeedToCopy?: number | undefined
        additionalProperties?: string | undefined
      }
    | undefined
}
type LongTaskStatusArray = {
  results: LongTaskStatus[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type LongTaskStatusWithLinks = {
  ari?: string | undefined
  id: string
  name: { key: string; args: { [x: string]: unknown }[] }
  elapsedTime: bigint
  percentageComplete: number
  successful: boolean
  finished: boolean
  messages: Message[]
  _links: GenericLinks
  status?: string | undefined
  errors?: Message[] | undefined
  additionalDetails?:
    | {
        destinationId?: (string | null) | undefined
        destinationUrl?: string | undefined
        totalPageNeedToCopy?: number | undefined
        additionalProperties?: string | undefined
      }
    | undefined
}
type RelationData = {
  createdBy?: User | undefined
  createdDate?: string | undefined
  friendlyCreatedDate?: string | undefined
}
type Relation = {
  name: string
  relationData?: RelationData | undefined
  source?: Content | User | Space | undefined
  target?: Content | User | Space | undefined
  _expandable?:
    | {
        relationData?: string | undefined
        source?: string | undefined
        target?: string | undefined
      }
    | undefined
  _links: GenericLinks
}
type RelationArray = {
  results: Relation[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type ContainerSummary = { title: string; displayUrl: string }
type Breadcrumb = { label: string; url: string; separator: string }
type SearchResult = {
  content?: Content | undefined
  user?: User | undefined
  space?: Space | undefined
  title: string
  excerpt: string
  url: string
  resultParentContainer?: ContainerSummary | undefined
  resultGlobalContainer?: ContainerSummary | undefined
  breadcrumbs: Breadcrumb[]
  entityType: string
  iconCssClass: string
  lastModified: string
  friendlyLastModified?: string | undefined
  score?: number | undefined
}
type SearchPageResponseSearchResult = {
  results: SearchResult[]
  start: number
  limit: number
  size: number
  totalSize: number
  cqlQuery: string
  searchDuration: number
  archivedResultCount?: number | undefined
  _links: GenericLinks
}
type LookAndFeelSettings = {
  selected: 'global' | 'custom'
  global: LookAndFeel
  theme?: LookAndFeel | undefined
  custom: LookAndFeel
}
type LookAndFeelSelection = { spaceKey: string; lookAndFeelType: 'global' | 'custom' | 'theme' }
type LookAndFeelWithLinks = {
  headings: { color: string }
  links: { color: string }
  menus: MenusLookAndFeel
  header: HeaderLookAndFeel
  horizontalHeader?: HorizontalHeaderLookAndFeel | undefined
  content: ContentLookAndFeel
  bordersAndDividers: { color: string }
  spaceReference?: ({ [x: string]: unknown } | null) | undefined
  _links?: GenericLinks | undefined
}
type SystemInfoEntity = {
  cloudId: string
  commitHash: string
  baseUrl?: string | undefined
  fallbackBaseUrl?: string | undefined
  edition?: string | undefined
  siteTitle?: string | undefined
  defaultLocale?: string | undefined
  defaultTimeZone?: string | undefined
  microsPerimeter?: string | undefined
} | null
type ThemeNoLinks = {
  themeKey: string
  name?: string | undefined
  description?: string | undefined
  icon?: Icon | undefined
}
type ThemeArray = {
  results: ThemeNoLinks[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type SpaceDescriptionCreate = {
  plain: { value?: string | undefined; representation?: string | undefined }
} | null
type GroupCreate = { type: 'group'; id?: string | undefined }
type SpacePermissionCreate = {
  subjects?:
    | {
        user?: { results: User[]; size: number } | undefined
        group?: { results: GroupCreate[]; size: number } | undefined
      }
    | undefined
  operation: OperationCheckResult
  anonymousAccess: boolean
  unlicensedAccess: boolean
}
type SpaceCreate = {
  name: string
  key?: string | undefined
  alias?: string | undefined
  description?: SpaceDescriptionCreate | undefined
  permissions?: (SpacePermissionCreate[] | null) | undefined
}
type SpaceUpdate = {
  name?: (string | null) | undefined
  description?: SpaceDescriptionCreate | undefined
  homepage?: ({ [x: string]: unknown } | null) | undefined
  type?: string | undefined
  status?: (string | null) | undefined
}
type PermissionSubject = { type: 'user' | 'group'; identifier: string }
type SpacePermissionRequest = {
  subject: PermissionSubject
  operation: {
    key:
      | 'administer'
      | 'archive'
      | 'copy'
      | 'create'
      | 'delete'
      | 'export'
      | 'move'
      | 'purge'
      | 'purge_version'
      | 'read'
      | 'restore'
      | 'restrict_content'
      | 'update'
      | 'use'
    target: 'page' | 'blogpost' | 'comment' | 'attachment' | 'space'
  }
  _links?: GenericLinks | undefined
}
type SpacePermissionV2 = {
  id: bigint
  subject: PermissionSubject
  operation: {
    key:
      | 'administer'
      | 'archive'
      | 'copy'
      | 'create'
      | 'delete'
      | 'export'
      | 'move'
      | 'purge'
      | 'purge_version'
      | 'read'
      | 'restore'
      | 'restrict_content'
      | 'update'
      | 'use'
    target: 'page' | 'blogpost' | 'comment' | 'attachment' | 'space'
  }
  _links?: GenericLinks | undefined
}
type SpacePermissionCustomContent = {
  subject: PermissionSubject
  operations: { key: 'read' | 'create' | 'delete'; target: string; access: boolean }[]
}
type SpaceSettingsUpdate = {
  routeOverrideEnabled?: boolean | undefined
  contentMode?: 'standard' | 'compact' | undefined
}
type ContentStateSettings = {
  contentStatesAllowed: boolean
  customContentStatesAllowed: boolean
  spaceContentStatesAllowed: boolean
  spaceContentStates?: ContentState[] | undefined
}
type ThemeUpdate = { themeKey: string }
type ContentTemplateBodyCreate = {
  view?: ContentBodyCreate | undefined
  export_view?: ContentBodyCreate | undefined
  styled_view?: ContentBodyCreate | undefined
  storage?: ContentBodyCreate | undefined
  editor?: ContentBodyCreate | undefined
  editor2?: ContentBodyCreate | undefined
  wiki?: ContentBodyCreate | undefined
  atlas_doc_format?: ContentBodyCreate | undefined
  anonymous_export_view?: ContentBodyCreate | undefined
}
type ContentTemplateUpdate = {
  templateId: string
  name: string
  templateType: 'page'
  body: ContentTemplateBodyCreate
  description?: string | undefined
  labels?: Label[] | undefined
  space?: ({ key: string } | null) | undefined
}
type ContentTemplateBody = {
  view?: ContentBody | undefined
  export_view?: ContentBody | undefined
  styled_view?: ContentBody | undefined
  storage?: ContentBody | undefined
  editor?: ContentBody | undefined
  editor2?: ContentBody | undefined
  wiki?: ContentBody | undefined
  atlas_doc_format?: ContentBody | undefined
  anonymous_export_view?: ContentBody | undefined
}
type ContentTemplate = {
  templateId: string
  originalTemplate?: { pluginKey?: string | undefined; moduleKey?: string | undefined } | undefined
  referencingBlueprint?: string | undefined
  name: string
  description: string
  space?: { [x: string]: unknown } | undefined
  labels: Label[]
  templateType: string
  editorVersion?: string | undefined
  body?: ContentTemplateBody | undefined
  _expandable?: { body?: string | undefined } | undefined
  _links: GenericLinks
}
type ContentTemplateCreate = {
  name: string
  templateType: string
  body: ContentTemplateBodyCreate
  description?: string | undefined
  labels?: Label[] | undefined
  space?: ({ key: string } | null) | undefined
}
type BlueprintTemplate = {
  templateId: string
  originalTemplate: { pluginKey: string; moduleKey: string }
  referencingBlueprint: string
  name: string
  description: string
  space?: { [x: string]: unknown } | undefined
  labels: Label[]
  templateType: string
  editorVersion?: string | undefined
  body?: ContentTemplateBody | undefined
  _expandable?: { body?: string | undefined } | undefined
  _links: GenericLinks
}
type BlueprintTemplateArray = {
  results: BlueprintTemplate[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type ContentTemplateArray = {
  results: ContentTemplate[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type UserAnonymous = {
  type: string
  profilePicture: Icon
  displayName: string
  operations?: OperationCheckResult[] | undefined
  _expandable?: { operations?: string | undefined } | undefined
  _links: GenericLinks
}
type BulkUserLookup = {
  type: 'known' | 'unknown' | 'anonymous' | 'user'
  username?: GenericUserName | undefined
  userKey?: GenericUserKey | undefined
  accountId: GenericAccountId
  accountType: string
  email: string
  publicName: string
  profilePicture: Icon
  displayName: string
  timeZone?: (string | null) | undefined
  isExternalCollaborator?: boolean | undefined
  isGuest?: boolean | undefined
  operations?: OperationCheckResult[] | undefined
  details?: UserDetails | undefined
  personalSpace?: Space | undefined
  _expandable: {
    operations?: string | undefined
    details?: string | undefined
    personalSpace?: string | undefined
  }
  _links: GenericLinks
}
type BulkUserLookupArray = {
  results: BulkUserLookup[]
  start: number
  limit: number
  size: number
  _links: GenericLinks
}
type UserWatch = { watching: boolean }
type AccountIdEmailRecord = { accountId: string; email: string }
type AccountIdEmailRecordArray = AccountIdEmailRecord[]
type ConnectModule = { [x: string]: unknown }
type ConnectModules = { modules: ConnectModule[] }
type DynamicModulesErrorMessage = { message: string }
type UserPropertyKeyArray = {
  results: { key?: string | undefined }[]
  start?: number | undefined
  limit?: number | undefined
  size?: number | undefined
  _links?: GenericLinks | undefined
}
type UserProperty = {
  key: string
  value: { [x: string]: unknown }
  id: string
  lastModifiedDate: string
  createdDate: string
  _links?: GenericLinks | undefined
}
type UserPropertyUpdate = { value: { [x: string]: unknown } }
type UserPropertyCreate = { value: { [x: string]: unknown } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/wiki/rest/api/audit': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                searchString?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: AuditRecordArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                searchString?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                searchString?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: AuditRecordCreate }
            output: AuditRecord
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AuditRecordCreate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: AuditRecordCreate }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/wiki/rest/api/audit/export': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                searchString?: string | undefined
                format?: 'csv' | 'zip' | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                searchString?: string | undefined
                format?: 'csv' | 'zip' | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                searchString?: string | undefined
                format?: 'csv' | 'zip' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/audit/retention': {
      $get:
        | { input: {}; output: RetentionPeriod; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { json: RetentionPeriod }
            output: RetentionPeriod
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: RetentionPeriod }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/wiki/rest/api/audit/since': {
      $get:
        | {
            input: {
              query: {
                number?: bigint | undefined
                units?:
                  | 'NANOS'
                  | 'MICROS'
                  | 'MILLIS'
                  | 'SECONDS'
                  | 'MINUTES'
                  | 'HOURS'
                  | 'HALF_DAYS'
                  | 'DAYS'
                  | 'WEEKS'
                  | 'MONTHS'
                  | 'YEARS'
                  | 'DECADES'
                  | 'CENTURIES'
                  | undefined
                searchString?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: AuditRecordArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                number?: bigint | undefined
                units?:
                  | 'NANOS'
                  | 'MICROS'
                  | 'MILLIS'
                  | 'SECONDS'
                  | 'MINUTES'
                  | 'HOURS'
                  | 'HALF_DAYS'
                  | 'DAYS'
                  | 'WEEKS'
                  | 'MONTHS'
                  | 'YEARS'
                  | 'DECADES'
                  | 'CENTURIES'
                  | undefined
                searchString?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/content/archive': {
      $post:
        | {
            input: { json: { pages?: { id: bigint }[] | undefined } }
            output: LongTask
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { pages?: { id: bigint }[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { pages?: { id: bigint }[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/wiki/rest/api/content/blueprint/instance/:draftId': {
      $put:
        | {
            input: { param: { draftId: string } } & {
              query: { status?: string | undefined; expand?: string[] | undefined }
            } & { json: ContentBlueprintDraft }
            output: Content
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { draftId: string } } & {
              query: { status?: string | undefined; expand?: string[] | undefined }
            } & { json: ContentBlueprintDraft }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { draftId: string } } & {
              query: { status?: string | undefined; expand?: string[] | undefined }
            } & { json: ContentBlueprintDraft }
            output: {}
            outputFormat: string
            status: 409
          }
      $post:
        | {
            input: { param: { draftId: string } } & {
              query: { status?: string | undefined; expand?: string[] | undefined }
            } & { json: ContentBlueprintDraft }
            output: Content
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { draftId: string } } & {
              query: { status?: string | undefined; expand?: string[] | undefined }
            } & { json: ContentBlueprintDraft }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { draftId: string } } & {
              query: { status?: string | undefined; expand?: string[] | undefined }
            } & { json: ContentBlueprintDraft }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/wiki/rest/api/content/search': {
      $get:
        | {
            input: {
              query: {
                cql: string
                cqlcontext?: string | undefined
                expand?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cql: string
                cqlcontext?: string | undefined
                expand?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                cql: string
                cqlcontext?: string | undefined
                expand?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/wiki/rest/api/content/:id/pageTree': {
      $delete:
        | { input: { param: { id: string } }; output: LongTask; outputFormat: 'json'; status: 202 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/content/:pageId/move/:position/:targetId': {
      $put:
        | {
            input: {
              param: { pageId: string; position: 'before' | 'after' | 'append'; targetId: string }
            }
            output: { pageId?: ContentId | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { pageId: string; position: 'before' | 'after' | 'append'; targetId: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { pageId: string; position: 'before' | 'after' | 'append'; targetId: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { pageId: string; position: 'before' | 'after' | 'append'; targetId: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/child/attachment': {
      $put:
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            } & { form: { file: File; comment?: File | undefined; minorEdit: File } }
            output: ContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            } & { form: { file: File; comment?: File | undefined; minorEdit: File } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            } & { form: { file: File; comment?: File | undefined; minorEdit: File } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            } & { form: { file: File; comment?: File | undefined; minorEdit: File } }
            output: ContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            } & { form: { file: File; comment?: File | undefined; minorEdit: File } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            } & { form: { file: File; comment?: File | undefined; minorEdit: File } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            } & { form: { file: File; comment?: File | undefined; minorEdit: File } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/child/attachment/:attachmentId': {
      $put:
        | {
            input: { param: { id: string; attachmentId: string } } & {
              json: AttachmentPropertiesUpdateBody
            }
            output: Content
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              json: AttachmentPropertiesUpdateBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              json: AttachmentPropertiesUpdateBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              json: AttachmentPropertiesUpdateBody
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              json: AttachmentPropertiesUpdateBody
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/wiki/rest/api/content/:id/child/attachment/:attachmentId/data': {
      $post:
        | {
            input: { param: { id: string; attachmentId: string } } & {
              form: { file: File; comment?: File | undefined; minorEdit: File }
            }
            output: Content
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              form: { file: File; comment?: File | undefined; minorEdit: File }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              form: { file: File; comment?: File | undefined; minorEdit: File }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/child/attachment/:attachmentId/download': {
      $get:
        | {
            input: { param: { id: string; attachmentId: string } } & {
              query: { version?: number | undefined; status?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              query: { version?: number | undefined; status?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              query: { version?: number | undefined; status?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; attachmentId: string } } & {
              query: { version?: number | undefined; status?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/descendant': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { expand?: ('attachment' | 'comment' | 'page')[] | undefined }
            }
            output: ContentChildren
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: ('attachment' | 'comment' | 'page')[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/descendant/:type': {
      $get:
        | {
            input: { param: { id: string; type: 'page' | 'comment' | 'attachment' } } & {
              query: {
                depth?:
                  | 'all'
                  | 'root'
                  | '<any positive integer argument in the range of 1 and 100>'
                  | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; type: 'page' | 'comment' | 'attachment' } } & {
              query: {
                depth?:
                  | 'all'
                  | 'root'
                  | '<any positive integer argument in the range of 1 and 100>'
                  | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; type: 'page' | 'comment' | 'attachment' } } & {
              query: {
                depth?:
                  | 'all'
                  | 'root'
                  | '<any positive integer argument in the range of 1 and 100>'
                  | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId': {
      $get:
        | {
            input: { param: { id: string; version: number; macroId: string } }
            output: MacroInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; version: number; macroId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; version: number; macroId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/:to': {
      $get:
        | {
            input: { param: { id: string; version: number; macroId: string; to: string } } & {
              query: {
                expand?: string[] | undefined
                spaceKeyContext?: string | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            }
            output: ContentBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; version: number; macroId: string; to: string } } & {
              query: {
                expand?: string[] | undefined
                spaceKeyContext?: string | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; version: number; macroId: string; to: string } } & {
              query: {
                expand?: string[] | undefined
                spaceKeyContext?: string | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; version: number; macroId: string; to: string } } & {
              query: {
                expand?: string[] | undefined
                spaceKeyContext?: string | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/async/:to': {
      $get:
        | {
            input: {
              param: {
                id: string
                version: number
                macroId: string
                to: 'export_view' | 'view' | 'styled_view'
              }
            } & {
              query: {
                expand?: string[] | undefined
                allowCache?: boolean | undefined
                spaceKeyContext?: string | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            }
            output: AsyncId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                id: string
                version: number
                macroId: string
                to: 'export_view' | 'view' | 'styled_view'
              }
            } & {
              query: {
                expand?: string[] | undefined
                allowCache?: boolean | undefined
                spaceKeyContext?: string | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                id: string
                version: number
                macroId: string
                to: 'export_view' | 'view' | 'styled_view'
              }
            } & {
              query: {
                expand?: string[] | undefined
                allowCache?: boolean | undefined
                spaceKeyContext?: string | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/label': {
      $post:
        | {
            input: { param: { id: string } } & { json: LabelCreateArray | LabelCreate }
            output: LabelArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LabelCreateArray | LabelCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LabelCreateArray | LabelCreate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LabelCreateArray | LabelCreate }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/label/:label': {
      $delete:
        | {
            input: { param: { id: string; label: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; label: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; label: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; label: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/notification/child-created': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: WatchArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/wiki/rest/api/content/:id/notification/created': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: SpaceWatchArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/wiki/rest/api/content/:id/pagehierarchy/copy': {
      $post:
        | {
            input: { param: { id: string } } & { json: CopyPageHierarchyRequest }
            output: LongTask
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CopyPageHierarchyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CopyPageHierarchyRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CopyPageHierarchyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/copy': {
      $post:
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: CopyPageRequest
            }
            output: Content
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: CopyPageRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: CopyPageRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: CopyPageRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: CopyPageRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/permission/check': {
      $post:
        | {
            input: { param: { id: string } } & { json: ContentPermissionRequest }
            output: PermissionCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ContentPermissionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ContentPermissionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ContentPermissionRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ContentPermissionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/restriction': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ContentRestrictionArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            } & { json: ContentRestrictionAddOrUpdateArray }
            output: ContentRestrictionArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            } & { json: ContentRestrictionAddOrUpdateArray }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            } & { json: ContentRestrictionAddOrUpdateArray }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            } & { json: ContentRestrictionAddOrUpdateArray }
            output: ContentRestrictionArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            } & { json: ContentRestrictionAddOrUpdateArray }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            } & { json: ContentRestrictionAddOrUpdateArray }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            }
            output: ContentRestrictionArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                expand?:
                  | (
                      | 'restrictions.user'
                      | 'read.restrictions.user'
                      | 'update.restrictions.user'
                      | 'restrictions.group'
                      | 'read.restrictions.group'
                      | 'update.restrictions.group'
                      | 'content'
                    )[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/restriction/byOperation': {
      $get: {
        input: { param: { id: string } } & {
          query: { expand?: ('restrictions.user' | 'restrictions.group' | 'content')[] | undefined }
        }
        output: {
          [x: string]: {
            operationType?: ContentRestriction | undefined
            _links?: GenericLinks | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey': {
      $get: {
        input: { param: { id: string; operationKey: 'read' | 'update' } } & {
          query: {
            expand?: ('restrictions.user' | 'restrictions.group' | 'content')[] | undefined
            start?: number | undefined
            limit?: number | undefined
          }
        }
        output: ContentRestriction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId': {
      $get:
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update'; groupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user': {
      $get:
        | {
            input: { param: { id: string; operationKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; operationKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string; operationKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; operationKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; operationKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string; operationKey: 'read' | 'update' } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update' } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; operationKey: 'read' | 'update' } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/state': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | 'archived' | undefined }
            }
            output: ContentStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | 'archived' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | 'archived' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | 'archived' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { status: 'current' | 'draft' } } & {
              json: ContentStateRestInput
            }
            output: ContentStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { status: 'current' | 'draft' } } & {
              json: ContentStateRestInput
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { status: 'current' | 'draft' } } & {
              json: ContentStateRestInput
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { status: 'current' | 'draft' } } & {
              json: ContentStateRestInput
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { status: 'current' | 'draft' } } & {
              json: ContentStateRestInput
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            }
            output: ContentStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { status?: 'current' | 'draft' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/content/:id/state/available': {
      $get:
        | {
            input: { param: { id: string } }
            output: AvailableContentStates
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/content/:id/version': {
      $post:
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: VersionRestore
            }
            output: Version
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: VersionRestore
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string[] | undefined } } & {
              json: VersionRestore
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/content/:id/version/:versionNumber': {
      $delete:
        | {
            input: { param: { id: string; versionNumber: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; versionNumber: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; versionNumber: number } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/content-states': {
      $get:
        | { input: {}; output: ContentState[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/wiki/rest/api/contentbody/convert/async/:to': {
      $post:
        | {
            input: { param: { to: 'export_view' } } & {
              query: {
                expand?: string[] | undefined
                spaceKeyContext?: string | undefined
                contentIdContext?: string | undefined
                allowCache?: boolean | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            } & { json: ContentBodyCreate }
            output: AsyncId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { to: 'export_view' } } & {
              query: {
                expand?: string[] | undefined
                spaceKeyContext?: string | undefined
                contentIdContext?: string | undefined
                allowCache?: boolean | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            } & { json: ContentBodyCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { to: 'export_view' } } & {
              query: {
                expand?: string[] | undefined
                spaceKeyContext?: string | undefined
                contentIdContext?: string | undefined
                allowCache?: boolean | undefined
                embeddedContentRender?: 'current' | 'version-at-save' | undefined
              }
            } & { json: ContentBodyCreate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/contentbody/convert/async/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AsyncContentBody
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/contentbody/convert/async/bulk/tasks': {
      $post:
        | {
            input: { json: BulkContentBodyConversionInput }
            output: AsyncIdArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkContentBodyConversionInput }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { query: { ids: string[] } }
            output: AsyncContentBodyArray
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { ids: string[] } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/wiki/rest/api/label': {
      $get:
        | {
            input: {
              query: {
                name: string
                type?: 'page' | 'blogpost' | 'attachment' | 'page_template' | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: LabelDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                type?: 'page' | 'blogpost' | 'attachment' | 'page_template' | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                name: string
                type?: 'page' | 'blogpost' | 'attachment' | 'page_template' | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                name: string
                type?: 'page' | 'blogpost' | 'attachment' | 'page_template' | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/group': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accessType?: 'user' | 'admin' | 'site-admin' | undefined
              }
            }
            output: GroupArrayWithLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accessType?: 'user' | 'admin' | 'site-admin' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | { input: { json: GroupName }; output: Group; outputFormat: 'json'; status: 201 }
        | { input: { json: GroupName }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: GroupName }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: GroupName }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/wiki/rest/api/group/by-id': {
      $get:
        | { input: { query: { id: string } }; output: Group; outputFormat: 'json'; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/group/picker': {
      $get:
        | {
            input: {
              query: {
                query: string
                start?: number | undefined
                limit?: number | undefined
                shouldReturnTotalSize?: boolean | undefined
              }
            }
            output: GroupArrayWithLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start?: number | undefined
                limit?: number | undefined
                shouldReturnTotalSize?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/group/:groupId/membersByGroupId': {
      $get:
        | {
            input: { param: { groupId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                shouldReturnTotalSize?: boolean | undefined
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: UserArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                shouldReturnTotalSize?: boolean | undefined
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                shouldReturnTotalSize?: boolean | undefined
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/group/userByGroupId': {
      $post:
        | {
            input: { query: { groupId: string } } & { json: AccountId }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { query: { groupId: string } } & { json: AccountId }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { groupId: string } } & { json: AccountId }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { groupId: string } } & { json: AccountId }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { groupId: string } } & { json: AccountId }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: {
              query: {
                groupId: string
                accountId: string
                key?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                groupId: string
                accountId: string
                key?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                groupId: string
                accountId: string
                key?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                groupId: string
                accountId: string
                key?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                groupId: string
                accountId: string
                key?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/longtask': {
      $get:
        | {
            input: {
              query: {
                key?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: LongTaskStatusArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                key?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/wiki/rest/api/longtask/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: LongTaskStatusWithLinks
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType': {
      $get:
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: RelationArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey': {
      $get:
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
              }
            }
            output: Relation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: Relation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                sourceKey: string
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/relation/:relationName/to/:targetType/:targetKey/from/:sourceType': {
      $get:
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: RelationArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                relationName: string
                sourceType: 'user' | 'content' | 'space'
                targetType: 'user' | 'content' | 'space'
                targetKey: string
              }
            } & {
              query: {
                sourceStatus?: string | undefined
                targetStatus?: string | undefined
                sourceVersion?: number | undefined
                targetVersion?: number | undefined
                expand?: ('relationData' | 'source' | 'target')[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/search': {
      $get:
        | {
            input: {
              query: {
                cql: string
                cqlcontext?: string | undefined
                cursor?: string | undefined
                next?: boolean | undefined
                prev?: boolean | undefined
                limit?: number | undefined
                start?: number | undefined
                includeArchivedSpaces?: boolean | undefined
                excludeCurrentSpaces?: boolean | undefined
                excerpt?:
                  | 'highlight'
                  | 'indexed'
                  | 'none'
                  | 'highlight_unescaped'
                  | 'indexed_unescaped'
                  | undefined
                sitePermissionTypeFilter?: 'all' | 'externalCollaborator' | 'none' | undefined
                _?: bigint | undefined
                expand?: string[] | undefined
              }
            }
            output: SearchPageResponseSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cql: string
                cqlcontext?: string | undefined
                cursor?: string | undefined
                next?: boolean | undefined
                prev?: boolean | undefined
                limit?: number | undefined
                start?: number | undefined
                includeArchivedSpaces?: boolean | undefined
                excludeCurrentSpaces?: boolean | undefined
                excerpt?:
                  | 'highlight'
                  | 'indexed'
                  | 'none'
                  | 'highlight_unescaped'
                  | 'indexed_unescaped'
                  | undefined
                sitePermissionTypeFilter?: 'all' | 'externalCollaborator' | 'none' | undefined
                _?: bigint | undefined
                expand?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                cql: string
                cqlcontext?: string | undefined
                cursor?: string | undefined
                next?: boolean | undefined
                prev?: boolean | undefined
                limit?: number | undefined
                start?: number | undefined
                includeArchivedSpaces?: boolean | undefined
                excludeCurrentSpaces?: boolean | undefined
                excerpt?:
                  | 'highlight'
                  | 'indexed'
                  | 'none'
                  | 'highlight_unescaped'
                  | 'indexed_unescaped'
                  | undefined
                sitePermissionTypeFilter?: 'all' | 'externalCollaborator' | 'none' | undefined
                _?: bigint | undefined
                expand?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/search/user': {
      $get:
        | {
            input: {
              query: {
                cql: string
                start?: number | undefined
                limit?: number | undefined
                expand?: string[] | undefined
                sitePermissionTypeFilter?: 'all' | 'externalCollaborator' | 'none' | undefined
              }
            }
            output: SearchPageResponseSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cql: string
                start?: number | undefined
                limit?: number | undefined
                expand?: string[] | undefined
                sitePermissionTypeFilter?: 'all' | 'externalCollaborator' | 'none' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                cql: string
                start?: number | undefined
                limit?: number | undefined
                expand?: string[] | undefined
                sitePermissionTypeFilter?: 'all' | 'externalCollaborator' | 'none' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/settings/lookandfeel': {
      $get:
        | {
            input: { query: { spaceKey?: string | undefined } }
            output: LookAndFeelSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { spaceKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { spaceKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { json: LookAndFeelSelection }
            output: LookAndFeelSelection
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: LookAndFeelSelection }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: LookAndFeelSelection }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: LookAndFeelSelection }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: LookAndFeelSelection }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/wiki/rest/api/settings/lookandfeel/custom': {
      $post:
        | {
            input: { query: { spaceKey?: string | undefined } } & { json: LookAndFeel }
            output: LookAndFeelWithLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { spaceKey?: string | undefined } } & { json: LookAndFeel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { spaceKey?: string | undefined } } & { json: LookAndFeel }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { spaceKey?: string | undefined } } & { json: LookAndFeel }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { query: { spaceKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { spaceKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { spaceKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { spaceKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/settings/systemInfo': {
      $get:
        | { input: {}; output: SystemInfoEntity; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/wiki/rest/api/settings/theme': {
      $get: {
        input: { query: { start?: number | undefined; limit?: number | undefined } }
        output: ThemeArray
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wiki/rest/api/settings/theme/selected': {
      $get:
        | { input: {}; output: Theme; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/settings/theme/:themeKey': {
      $get:
        | {
            input: { param: { themeKey: string } }
            output: Theme
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { themeKey: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/space': {
      $post:
        | { input: { json: SpaceCreate }; output: Space; outputFormat: 'json'; status: 200 }
        | { input: { json: SpaceCreate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SpaceCreate }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SpaceCreate }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/wiki/rest/api/space/_private': {
      $post:
        | { input: { json: SpaceCreate }; output: Space; outputFormat: 'json'; status: 200 }
        | { input: { json: SpaceCreate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SpaceCreate }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SpaceCreate }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey': {
      $put:
        | {
            input: { param: { spaceKey: string } } & { json: SpaceUpdate }
            output: Space
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpaceUpdate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpaceUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { spaceKey: string } }
            output: LongTask
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/permission': {
      $post:
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionRequest }
            output: SpacePermissionV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/permission/custom-content': {
      $post:
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionCustomContent }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionCustomContent }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionCustomContent }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionCustomContent }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpacePermissionCustomContent }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/permission/:id': {
      $delete:
        | {
            input: { param: { spaceKey: string; id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { spaceKey: string; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceKey: string; id: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceKey: string; id: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/settings': {
      $get:
        | {
            input: { param: { spaceKey: string } }
            output: SpaceSettings
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { spaceKey: string } } & { json: SpaceSettingsUpdate }
            output: SpaceSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpaceSettingsUpdate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceKey: string } } & { json: SpaceSettingsUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/state': {
      $get:
        | {
            input: { param: { spaceKey: string } }
            output: ContentState[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/state/settings': {
      $get:
        | {
            input: { param: { spaceKey: string } }
            output: ContentStateSettings
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/state/content': {
      $get:
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                'state-id': number
                expand?: string[] | undefined
                limit?: number | undefined
                start?: number | undefined
              }
            }
            output: ContentArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                'state-id': number
                expand?: string[] | undefined
                limit?: number | undefined
                start?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                'state-id': number
                expand?: string[] | undefined
                limit?: number | undefined
                start?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                'state-id': number
                expand?: string[] | undefined
                limit?: number | undefined
                start?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                'state-id': number
                expand?: string[] | undefined
                limit?: number | undefined
                start?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/theme': {
      $get:
        | {
            input: { param: { spaceKey: string } }
            output: Theme
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { spaceKey: string } } & { json: ThemeUpdate }
            output: Theme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & { json: ThemeUpdate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & { json: ThemeUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { spaceKey: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/watch': {
      $get:
        | {
            input: { param: { spaceKey: string } } & {
              query: { start?: string | undefined; limit?: string | undefined }
            }
            output: SpaceWatchArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: { start?: string | undefined; limit?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/space/:spaceKey/label': {
      $get:
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                prefix?: 'global' | 'my' | 'team' | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: LabelArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                prefix?: 'global' | 'my' | 'team' | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { spaceKey: string } } & { json: LabelCreate[] }
            output: LabelArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & { json: LabelCreate[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceKey: string } } & { json: LabelCreate[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & { json: LabelCreate[] }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { spaceKey: string } } & {
              query: { name: string; prefix?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: { name: string; prefix?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: { name: string; prefix?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/template': {
      $put:
        | {
            input: { json: ContentTemplateUpdate }
            output: ContentTemplate
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ContentTemplateUpdate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ContentTemplateUpdate }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ContentTemplateUpdate }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: ContentTemplateCreate }
            output: ContentTemplate
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ContentTemplateCreate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ContentTemplateCreate }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/wiki/rest/api/template/blueprint': {
      $get:
        | {
            input: {
              query: {
                spaceKey?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                expand?: ('body' | 'body.storage')[] | undefined
              }
            }
            output: BlueprintTemplateArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                spaceKey?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                expand?: ('body' | 'body.storage')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/template/page': {
      $get:
        | {
            input: {
              query: {
                spaceKey?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                expand?: ('body' | 'body.storage')[] | undefined
              }
            }
            output: ContentTemplateArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                spaceKey?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                expand?: ('body' | 'body.storage')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/template/:contentTemplateId': {
      $get:
        | {
            input: { param: { contentTemplateId: string } } & {
              query: { expand?: ('body' | 'body.storage')[] | undefined }
            }
            output: ContentTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentTemplateId: string } } & {
              query: { expand?: ('body' | 'body.storage')[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { param: { contentTemplateId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentTemplateId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/user': {
      $get:
        | {
            input: {
              query: {
                accountId: string
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountId: string
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId: string
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                accountId: string
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/user/anonymous': {
      $get:
        | {
            input: { query: { expand?: 'operations'[] | undefined } }
            output: UserAnonymous
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: 'operations'[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/user/current': {
      $get:
        | {
            input: {
              query: {
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/user/memberof': {
      $get:
        | {
            input: {
              query: { accountId: string; start?: number | undefined; limit?: number | undefined }
            }
            output: GroupArrayWithLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { accountId: string; start?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/user/bulk': {
      $get:
        | {
            input: {
              query: {
                accountId: string
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: BulkUserLookupArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountId: string
                expand?: ('operations' | 'personalSpace' | 'isExternalCollaborator')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/wiki/rest/api/user/watch/content/:contentId': {
      $get:
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: UserWatch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contentId: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/user/watch/label/:labelName': {
      $get:
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: UserWatch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { labelName: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/user/watch/space/:spaceKey': {
      $get:
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: UserWatch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            } & { header: { 'X-Atlassian-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { spaceKey: string } } & {
              query: {
                key?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/user/email': {
      $get:
        | {
            input: { query: { accountId: string } }
            output: AccountIdEmailRecord
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 501 }
    }
  } & {
    '/wiki/rest/api/user/email/bulk': {
      $get:
        | {
            input: { query: { accountId: string[] } }
            output: AccountIdEmailRecordArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { accountId: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { accountId: string[] } }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/wiki/rest/atlassian-connect/1/app/module/dynamic': {
      $get:
        | { input: {}; output: ConnectModules; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DynamicModulesErrorMessage; outputFormat: 'text'; status: 401 }
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: DynamicModulesErrorMessage; outputFormat: 'text'; status: 400 }
        | { input: {}; output: DynamicModulesErrorMessage; outputFormat: 'text'; status: 401 }
      $delete:
        | {
            input: { query: { moduleKey: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { moduleKey: string[] } }
            output: DynamicModulesErrorMessage
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/wiki/rest/api/analytics/content/:contentId/views': {
      $get:
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: { id?: number | undefined; count?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/analytics/content/:contentId/viewers': {
      $get:
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: { id?: number | undefined; count?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contentId: string } } & { query: { fromDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/user/:userId/property': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: UserPropertyKeyArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/wiki/rest/api/user/:userId/property/:key': {
      $get:
        | {
            input: { param: { userId: string; key: string } }
            output: UserProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyUpdate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyUpdate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyCreate }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyCreate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyCreate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyCreate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { userId: string; key: string } } & { json: UserPropertyCreate }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: string; key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
