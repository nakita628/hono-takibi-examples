type TrelloID = string
type ActionFields =
  | 'id'
  | 'idMemberCreator'
  | 'data'
  | 'type'
  | 'date'
  | 'limits'
  | 'display'
  | 'memberCreator'
type Action = {
  id?: TrelloID | undefined
  idMemberCreator?: TrelloID | undefined
  data?:
    | {
        text?: string | undefined
        card?:
          | {
              id?: TrelloID | undefined
              name?: string | undefined
              idShort?: number | undefined
              shortLink?: string | undefined
            }
          | undefined
        board?:
          | { id?: TrelloID | undefined; name?: string | undefined; shortLink?: string | undefined }
          | undefined
        list?: { id?: TrelloID | undefined; name?: string | undefined } | undefined
      }
    | undefined
  type?: string | undefined
  date?: string | undefined
  limits?:
    | {
        reactions?:
          | {
              perAction?:
                | {
                    status?: string | undefined
                    disableAt?: number | undefined
                    warnAt?: number | undefined
                  }
                | undefined
              uniquePerAction?:
                | {
                    status?: string | undefined
                    disableAt?: number | undefined
                    warnAt?: number | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  display?:
    | {
        translationKey?: string | undefined
        entities?:
          | {
              contextOn?:
                | {
                    type?: string | undefined
                    translationKey?: string | undefined
                    hideIfContext?: boolean | undefined
                    idContext?: TrelloID | undefined
                  }
                | undefined
              card?:
                | {
                    type?: string | undefined
                    hideIfContext?: boolean | undefined
                    id?: TrelloID | undefined
                    shortLink?: string | undefined
                    text?: string | undefined
                  }
                | undefined
              comment?: { type?: string | undefined; text?: string | undefined } | undefined
              memberCreator?:
                | {
                    type?: string | undefined
                    id?: TrelloID | undefined
                    username?: string | undefined
                    text?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  memberCreator?:
    | {
        id?: TrelloID | undefined
        activityBlocked?: boolean | undefined
        avatarHash?: string | undefined
        avatarUrl?: string | undefined
        fullName?: string | undefined
        idMemberReferrer?: TrelloID | undefined
        initials?: string | undefined
        username?: string | undefined
      }
    | undefined
}
type BoardFields =
  | 'id'
  | 'name'
  | 'desc'
  | 'descData'
  | 'closed'
  | 'idMemberCreator'
  | 'idOrganization'
  | 'pinned'
  | 'url'
  | 'shortUrl'
  | 'prefs'
  | 'labelNames'
  | 'starred'
  | 'limits'
  | 'memberships'
  | 'enterpriseOwned'
type CardAging = 'pirate' | 'regular'
type ImageDescriptor = {
  width?: number | undefined
  height?: number | undefined
  url?: string | undefined
}
type Prefs = {
  permissionLevel?: 'org' | 'board' | undefined
  hideVotes?: boolean | undefined
  voting?: 'disabled' | 'enabled' | undefined
  comments?: string | undefined
  invitations?: 'admins' | 'members' | undefined
  selfJoin?: boolean | undefined
  cardCovers?: boolean | undefined
  isTemplate?: boolean | undefined
  cardAging?: CardAging | undefined
  calendarFeedEnabled?: boolean | undefined
  background?: TrelloID | undefined
  backgroundImage?: string | undefined
  backgroundImageScaled?: ImageDescriptor[] | undefined
  backgroundTile?: boolean | undefined
  backgroundBrightness?: string | undefined
  backgroundBottomColor?: string | undefined
  backgroundTopColor?: string | undefined
  canBePublic?: boolean | undefined
  canBeEnterprise?: boolean | undefined
  canBeOrg?: boolean | undefined
  canBePrivate?: boolean | undefined
  canInvite?: boolean | undefined
}
type LimitsObject = {
  status?: 'ok' | 'warning' | undefined
  disableAt?: number | undefined
  warnAt?: number | undefined
}
type Limits = { attachments?: { perBoard?: LimitsObject | undefined } | undefined }
type Board = {
  id: TrelloID
  name?: string | undefined
  desc?: string | undefined
  descData?: string | undefined
  closed?: boolean | undefined
  idMemberCreator?: TrelloID | undefined
  idOrganization?: TrelloID | undefined
  pinned?: boolean | undefined
  url?: string | undefined
  shortUrl?: string | undefined
  prefs?: Prefs | undefined
  labelNames?:
    | {
        green?: string | undefined
        yellow?: string | undefined
        orange?: string | undefined
        red?: string | undefined
        purple?: string | undefined
        blue?: string | undefined
        sky?: string | undefined
        lime?: string | undefined
        pink?: string | undefined
        black?: string | undefined
      }
    | undefined
  limits?: Limits | undefined
  starred?: boolean | undefined
  memberships?: string | undefined
  shortLink?: string | undefined
  subscribed?: boolean | undefined
  powerUps?: string | undefined
  dateLastActivity?: string | undefined
  dateLastView?: string | undefined
  idTags?: string | undefined
  datePluginDisable?: (string | null) | undefined
  creationMethod?: (string | null) | undefined
  ixUpdate?: number | undefined
  templateGallery?: (string | null) | undefined
  enterpriseOwned?: boolean | undefined
}
type CardFields =
  | 'id'
  | 'address'
  | 'badges'
  | 'checkItemStates'
  | 'closed'
  | 'coordinates'
  | 'creationMethod'
  | 'dueComplete'
  | 'dateLastActivity'
  | 'desc'
  | 'descData'
  | 'due'
  | 'dueReminder'
  | 'idBoard'
  | 'idChecklists'
  | 'idLabels'
  | 'idList'
  | 'idMembers'
  | 'idMembersVoted'
  | 'idShort'
  | 'idAttachmentCover'
  | 'labels'
  | 'limits'
  | 'locationName'
  | 'manualCoverAttachment'
  | 'name'
  | 'pos'
  | 'shortLink'
  | 'shortUrl'
  | 'subscribed'
  | 'url'
  | 'cover'
  | 'isTemplate'
type Checklist = { id?: TrelloID | undefined }
type Color =
  | 'yellow'
  | 'purple'
  | 'blue'
  | 'red'
  | 'green'
  | 'orange'
  | 'black'
  | 'sky'
  | 'pink'
  | 'lime'
type Label = {
  id?: TrelloID | undefined
  idBoard?: TrelloID | undefined
  name?: (string | null) | undefined
  color?: Color | undefined
}
type Card = {
  id?: TrelloID | undefined
  address?: (string | null) | undefined
  badges?:
    | {
        attachmentsByType?:
          | { trello?: { board?: number | undefined; card?: number | undefined } | undefined }
          | undefined
        location?: boolean | undefined
        votes?: number | undefined
        viewingMemberVoted?: boolean | undefined
        subscribed?: boolean | undefined
        fogbugz?: string | undefined
        checkItems?: number | undefined
        checkItemsChecked?: number | undefined
        comments?: number | undefined
        attachments?: number | undefined
        description?: boolean | undefined
        due?: (string | null) | undefined
        start?: (string | null) | undefined
        dueComplete?: boolean | undefined
      }
    | undefined
  cardRole?: 'separator' | 'board' | 'mirror' | 'link' | undefined
  checkItemStates?: string[] | undefined
  closed?: boolean | undefined
  coordinates?: (string | null) | undefined
  creationMethod?: (string | null) | undefined
  dateLastActivity?: string | undefined
  desc?: string | undefined
  descData?: { emoji?: { [x: string]: unknown } | undefined } | undefined
  due?: (string | null) | undefined
  dueReminder?: (string | null) | undefined
  idBoard?: TrelloID | undefined
  idChecklists?: (Checklist | TrelloID)[] | undefined
  idLabels?: (Label | TrelloID)[] | undefined
  idList?: TrelloID | undefined
  idMembers?: TrelloID[] | undefined
  idMembersVoted?: TrelloID[] | undefined
  idShort?: number | undefined
  idAttachmentCover?: TrelloID | undefined
  labels?: TrelloID[] | undefined
  limits?: Limits | undefined
  locationName?: (string | null) | undefined
  manualCoverAttachment?: boolean | undefined
  mirrorSourceId?: TrelloID | undefined
  name?: string | undefined
  pos?: number | undefined
  shortLink?: string | undefined
  shortUrl?: string | undefined
  subscribed?: boolean | undefined
  url?: string | undefined
  cover?:
    | {
        idAttachment?: TrelloID | undefined
        color?: Color | undefined
        idUploadedBackground?: (boolean | null) | undefined
        size?: 'normal' | undefined
        brightness?: 'light' | 'dark' | undefined
        isTemplate?: boolean | undefined
      }
    | undefined
}
type ListFields = 'id'
type TrelloList = {
  id?: TrelloID | undefined
  name?: string | undefined
  closed?: boolean | undefined
  pos?: number | undefined
  softLimit?: string | undefined
  idBoard?: string | undefined
  subscribed?: boolean | undefined
  limits?: Limits | undefined
}
type MemberFields = 'id'
type MemberPrefs = {
  timezoneInfo?:
    | {
        offsetCurrent?: number | undefined
        timezoneCurrent?: string | undefined
        offsetNext?: number | undefined
        dateNext?: string | undefined
        timezoneNext?: string | undefined
      }
    | undefined
  privacy?:
    | {
        fullName?: 'public' | 'private' | 'collaborator' | undefined
        avatar?: 'public' | 'private' | 'collaborator' | undefined
      }
    | undefined
  sendSummaries?: boolean | undefined
  minutesBetweenSummaries?: number | undefined
  minutesBeforeDeadlineToNotify?: number | undefined
  colorBlind?: boolean | undefined
  locale?: string | undefined
  timezone?: string | undefined
  twoFactor?: { enabled?: boolean | undefined; needsNewBackups?: boolean | undefined } | undefined
}
type Member = {
  id?: TrelloID | undefined
  activityBlocked?: boolean | undefined
  avatarHash?: string | undefined
  avatarUrl?: string | undefined
  bio?: string | undefined
  bioData?: { emoji?: { [x: string]: unknown } | undefined } | undefined
  confirmed?: boolean | undefined
  fullName?: string | undefined
  idEnterprise?: TrelloID | undefined
  idEnterprisesDeactivated?: string[] | undefined
  idMemberReferrer?: TrelloID | undefined
  idPremOrgsAdmin?: TrelloID[] | undefined
  initials?: string | undefined
  memberType?: 'normal' | 'ghost' | undefined
  nonPublic?:
    | {
        fullName?: string | undefined
        initials?: string | undefined
        avatarUrl?: string | undefined
        avatarHash?: string | undefined
      }
    | undefined
  nonPublicAvailable?: boolean | undefined
  products?: number[] | undefined
  url?: string | undefined
  username?: string | undefined
  status?: 'disconnected' | undefined
  aaEmail?: (string | null) | undefined
  aaEnrolledDate?: (string | null) | undefined
  aaId?: (string | null) | undefined
  avatarSource?: 'gravatar' | 'upload' | undefined
  email?: string | undefined
  gravatarHash?: string | undefined
  idBoards?: TrelloID[] | undefined
  idOrganizations?: TrelloID[] | undefined
  idEnterprisesAdmin?: TrelloID[] | undefined
  limits?: LimitsObject | undefined
  loginTypes?: ('password' | 'saml')[] | undefined
  marketingOptIn?: { optedIn?: boolean | undefined; date?: string | undefined } | undefined
  messagesDismissed?:
    | {
        name?: string | undefined
        count?: string | undefined
        lastDismissed?: string | undefined
        _id?: TrelloID | undefined
      }
    | undefined
  oneTimeMessagesDismissed?: string[] | undefined
  prefs?: MemberPrefs | undefined
  trophies?: string[] | undefined
  uploadedAvatarHash?: string | undefined
  uploadedAvatarUrl?: string | undefined
  premiumFeatures?: string[] | undefined
  isAaMastered?: boolean | undefined
  ixUpdate?: number | undefined
  idBoardsPinned?: (TrelloID[] | null) | undefined
}
type OrganizationFields = 'id' | 'name'
type OrganizationPrefs = {
  boardVisibilityRestrict?: { [x: string]: unknown } | undefined
  boardDeleteRestrict?: { [x: string]: unknown } | undefined
  attachmentRestrictions?:
    | ('computer' | 'trello' | 'google-drive' | 'box' | 'onedrive' | 'link')[]
    | undefined
  permissionLevel?: 'org' | 'private' | 'public' | 'enterprise' | 'domain' | undefined
}
type Organization = {
  id?: TrelloID | undefined
  name?: string | undefined
  displayName?: string | undefined
  dateLastActivity?: string | undefined
  prefs?: OrganizationPrefs | undefined
  idEnterprise?: TrelloID | undefined
  offering?: string | undefined
  url?: string | undefined
  idBoards?: TrelloID[] | undefined
  memberships?: TrelloID[] | undefined
  premiumFeatures?: string[] | undefined
}
type Memberships = { id?: TrelloID | undefined }
type Error = { code: string; message: string }
type BoardStars = {
  id?: TrelloID | undefined
  idBoard?: TrelloID | undefined
  pos?: number | undefined
}
type CustomField = {
  id?: TrelloID | undefined
  idModel?: string | undefined
  modelType?: 'card' | 'board' | 'member' | undefined
  fieldGroup?: string | undefined
  display?:
    | {
        cardFront?: boolean | undefined
        name?: string | undefined
        pos?: string | undefined
        options?:
          | {
              id?: TrelloID | undefined
              idCustomField?: TrelloID | undefined
              value?: { text?: string | undefined } | undefined
              color?: string | undefined
              pos?: number | undefined
            }[]
          | undefined
      }
    | undefined
  type?: string | undefined
}
type ViewFilter = 'all' | 'closed' | 'none' | 'open'
type Plugin = { id?: TrelloID | undefined }
type Export = {
  id?: TrelloID | undefined
  status?:
    | { attempts?: number | undefined; finished?: boolean | undefined; stage?: string | undefined }
    | undefined
  startedAt?: string | undefined
  size?: (string | null) | undefined
  exportUrl?: (string | null) | undefined
}
type Attachment = {
  id?: TrelloID | undefined
  bytes?: (string | null) | undefined
  date?: string | undefined
  edgeColor?: Color | undefined
  idMember?: TrelloID | undefined
  isUpload?: boolean | undefined
  mimeType?: string | undefined
  name?: string | undefined
  previews?: string[] | undefined
  url?: string | undefined
  pos?: number | undefined
}
type AttachmentFields =
  | 'id'
  | 'bytes'
  | 'date'
  | 'edgeColor'
  | 'idMember'
  | 'isUpload'
  | 'mimeType'
  | 'name'
  | 'previews'
  | 'url'
  | 'pos'
type PosStringOrNumber = 'top' | 'bottom' | number
type CustomFieldItems = {
  id?: TrelloID | undefined
  value?: { checked?: string | undefined } | undefined
  idCustomField?: TrelloID | undefined
  idModel?: TrelloID | undefined
  modelType?: 'card' | 'board' | 'member' | undefined
}
type CheckItem = {
  idChecklist?: TrelloID | undefined
  state?: 'complete' | 'incomplete' | undefined
  id?: TrelloID | undefined
  name?: string | undefined
  nameData?: (string | null) | undefined
  pos?: string | undefined
}
type Emoji = {
  trello?:
    | {
        unified?: string | undefined
        name?: string | undefined
        native?: string | undefined
        shortName?: string | undefined
        shortNames?: string[] | undefined
        text?: string | undefined
        texts?: (string | null) | undefined
        category?: string | undefined
        sheetX?: number | undefined
        sheetY?: number | undefined
        tts?: string | undefined
        keywords?: string[] | undefined
      }[]
    | undefined
}
type Enterprise = {
  id?: TrelloID | undefined
  name?: string | undefined
  displayName?: string | undefined
  logoHash?: (string | null) | undefined
  logoUrl?: (string | null) | undefined
  prefs?:
    | {
        ssoOnly?: boolean | undefined
        signup?: { banner?: string | undefined; bannerHtml?: string | undefined } | undefined
        mandatoryTransferDate?: (string | null) | undefined
        brandingColor?: string | undefined
        autoJoinOrganizations?: boolean | undefined
        notifications?: { [x: string]: unknown } | undefined
        maxMembers?: (number | null) | undefined
      }
    | undefined
  organizationPrefs?: OrganizationPrefs | undefined
  ssoActivationFailed?: boolean | undefined
  idAdmins?: TrelloID[] | undefined
  enterpriseDomains?: string[] | undefined
  isRealEnterprise?: boolean | undefined
  pluginWhitelistingEnabled?: TrelloID[] | undefined
  idOrganizations?: TrelloID[] | undefined
  products?: number[] | undefined
  licenses?:
    | {
        maxMembers?: (number | null) | undefined
        totalMembers?: number | undefined
        relatedEnterprises?:
          | {
              name?: string | undefined
              displayName?: string | undefined
              count?: number | undefined
            }[]
          | undefined
      }
    | undefined
  domains?: string[] | undefined
  dateOrganizationPrefsLastUpdated?: string | undefined
  idp?:
    | {
        requestSigned?: boolean | undefined
        certificate?: (string | null) | undefined
        loginUrl?: (string | null) | undefined
      }
    | undefined
}
type EnterpriseAuditLog = {
  idAction?: TrelloID | undefined
  type?: string | undefined
  date?: string | undefined
  memberCreator?:
    | { id?: TrelloID | undefined; username?: string | undefined; fullName?: string | undefined }
    | undefined
  organization?:
    | {
        enterpriseJoinRequest?:
          | ({
              idEnterprise?: TrelloID | undefined
              idMember?: TrelloID | undefined
              date?: string | undefined
            } | null)
          | undefined
        id?: TrelloID | undefined
        name?: string | undefined
      }
    | undefined
  member?:
    | { id?: TrelloID | undefined; username?: string | undefined; fullName?: string | undefined }
    | undefined
}
type EnterpriseAdmin = {
  id?: TrelloID | undefined
  fullName?: string | undefined
  username?: string | undefined
}
type Membership = {
  managed?: boolean | undefined
  licensed?: boolean | undefined
  admin?: boolean | undefined
  deactivated?: boolean | undefined
  collaborator?: boolean | undefined
  member?:
    | {
        id?: string | undefined
        fullname?: string | undefined
        username?: string | undefined
        dateLastImpression?: string | undefined
        email?: string | undefined
        initials?: string | undefined
        avatarURL?: string | undefined
        memberType?: string | undefined
        confirmed?: boolean | undefined
      }
    | undefined
}
type TransferrableOrganization = {
  transferrable?: boolean | undefined
  newBillableMembers?:
    | {
        id?: TrelloID | undefined
        fullName?: string | undefined
        username?: string | undefined
        initials?: string | undefined
        avatarHash?: string | undefined
      }[]
    | undefined
  restrictedMembers?:
    | {
        id?: TrelloID | undefined
        fullName?: string | undefined
        username?: string | undefined
        initials?: string | undefined
        avatarHash?: string | undefined
      }[]
    | undefined
}
type ClaimableOrganizations = {
  organizations?:
    | {
        name?: string | undefined
        displayName?: string | undefined
        activeMembershipCount?: number | undefined
        idActiveAdmins?: TrelloID[] | undefined
        products?: number[] | undefined
        id?: TrelloID | undefined
        logoUrl?: (string | null) | undefined
        dateLastActive?: (string | null) | undefined
      }[]
    | undefined
  claimableCount?: number | undefined
}
type PendingOrganizations = {
  id?: TrelloID | undefined
  idMember?: TrelloID | undefined
  memberRequestor?: { id?: TrelloID | undefined; fullName?: string | undefined } | undefined
  date?: string | undefined
  displayName?: string | undefined
  membershipCount?: number | undefined
  logoUrl?: (string | null) | undefined
  transferability?:
    | {
        transferrable?: boolean | undefined
        newBillableMembers?:
          | {
              id?: TrelloID | undefined
              fullName?: string | undefined
              username?: string | undefined
              initials?: string | undefined
              avatarHash?: string | undefined
            }[]
          | undefined
        restrictedMembers?:
          | {
              id?: TrelloID | undefined
              fullName?: string | undefined
              username?: string | undefined
              initials?: string | undefined
              avatarHash?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type BoardBackground = { id?: TrelloID | undefined }
type CustomEmoji = {
  id?: TrelloID | undefined
  url?: string | undefined
  name?: string | undefined
}
type CustomSticker = {
  id?: TrelloID | undefined
  url?: string | undefined
  scaled?: { id?: TrelloID | undefined }[] | undefined
}
type Notification = {
  id?: string | undefined
  unread?: boolean | undefined
  type?: 'cardDueSoon' | undefined
  date?: string | undefined
  dateRead?: string | undefined
  data?: string | undefined
  card?: Card | undefined
  board?: Board | undefined
  idMemberCreator?: TrelloID | undefined
  idAction?: TrelloID | undefined
  reactions?: unknown[] | undefined
}
type SavedSearch = {
  id?: TrelloID | undefined
  name?: string | undefined
  query?: string | undefined
  pos?: PosStringOrNumber | undefined
}
type TokenPermission = {
  idModel?: TrelloID | '*' | undefined
  modelType?: 'board' | 'member' | 'organization' | 'enterprise' | undefined
  read?: boolean | undefined
  write?: boolean | undefined
}
type Token = {
  id?: TrelloID | undefined
  identifier?: string | undefined
  idMember?: TrelloID | undefined
  dateCreated?: string | undefined
  dateExpires?: (string | null) | undefined
  permissions?: TokenPermission[] | undefined
}
type BlockedKey =
  | 'notification_comment_card'
  | 'notification_added_a_due_date'
  | 'notification_changed_due_date'
  | 'notification_card_due_soon'
  | 'notification_removed_from_card'
  | 'notification_added_attachment_to_card'
  | 'notification_created_card'
  | 'notification_moved_card'
  | 'notification_archived_card'
  | 'notification_unarchived_card'
type Channel = 'email'
type NotificationChannelSettings = {
  id?: string | undefined
  idMember?: TrelloID | undefined
  blockedKeys?: BlockedKey[] | undefined
  channel?: Channel | undefined
}
type NotificationFields =
  | 'id'
  | 'unread'
  | 'type'
  | 'date'
  | 'dateRead'
  | 'data'
  | 'card'
  | 'board'
  | 'idMemberCreator'
  | 'idAction'
  | 'reactions'
type PluginData = {
  id?: TrelloID | undefined
  idPlugin?: TrelloID | undefined
  scope?: 'member' | 'board' | 'organization' | 'card' | undefined
  idModel?: TrelloID | undefined
  value?: string | undefined
  access?: 'private' | 'shared' | undefined
}
type Tag = { id?: TrelloID | undefined; name?: string | undefined }
type PluginListing = {
  id?: TrelloID | undefined
  name?: string | undefined
  locale?: string | undefined
  description?: string | undefined
  overview?: string | undefined
}
type TokenFields = 'identifier' | 'idMember' | 'dateCreated' | 'dateExpires' | 'permissions'
type Webhook = {
  id?: TrelloID | undefined
  description?: string | undefined
  idModel?: TrelloID | undefined
  callbackURL?: string | undefined
  active?: boolean | undefined
  consecutiveFailures?: number | undefined
  firstConsecutiveFailDate?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/actions/:id': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            display?: boolean | undefined
            entities?: boolean | undefined
            fields?: string | undefined
            member?: boolean | undefined
            member_fields?: string | undefined
            memberCreator?: boolean | undefined
            memberCreator_fields?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & { query: { text: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/actions/:id/:field': {
      $get: {
        input: { param: { id: TrelloID; field: ActionFields } }
        output: Action
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id/board': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: BoardFields | undefined } }
        output: Board
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id/card': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: CardFields | undefined } }
        output: Card
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id/list': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: ListFields | undefined } }
        output: TrelloList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id/member': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: MemberFields | undefined } }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id/memberCreator': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: MemberFields | undefined } }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id/organization': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: OrganizationFields | undefined } }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id/text': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/actions/:idAction/reactions': {
      $get: {
        input: { param: { idAction: TrelloID } } & {
          query: { member?: boolean | undefined; emoji?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { idAction: TrelloID } } & {
          json: {
            shortName?: string | undefined
            skinVariation?: string | undefined
            native?: string | undefined
            unified?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/actions/:idAction/reactions/:id': {
      $get: {
        input: { param: { idAction: TrelloID; id: TrelloID } } & {
          query: { member?: boolean | undefined; emoji?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { idAction: TrelloID; id: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/actions/:idAction/reactionsSummary': {
      $get: {
        input: { param: { idAction: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/applications/:key/compliance': {
      $get: { input: { param: { key: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/batch': {
      $get: { input: { query: { urls: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/boards/:id/memberships': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            filter?: 'admins' | 'all' | 'none' | 'normal' | undefined
            activity?: boolean | undefined
            orgMemberType?: boolean | undefined
            member?: boolean | undefined
            member_fields?: MemberFields | undefined
          }
        }
        output: Memberships
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/boards/:id': {
      $get:
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                actions?: string | undefined
                boardStars?: string | undefined
                cards?: string | undefined
                card_pluginData?: boolean | undefined
                checklists?: string | undefined
                customFields?: boolean | undefined
                fields?: string | undefined
                labels?: string | undefined
                lists?: string | undefined
                members?: string | undefined
                memberships?: string | undefined
                pluginData?: boolean | undefined
                organization?: boolean | undefined
                organization_pluginData?: boolean | undefined
                myPrefs?: boolean | undefined
                tags?: boolean | undefined
              }
            }
            output: Board
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                actions?: string | undefined
                boardStars?: string | undefined
                cards?: string | undefined
                card_pluginData?: boolean | undefined
                checklists?: string | undefined
                customFields?: boolean | undefined
                fields?: string | undefined
                labels?: string | undefined
                lists?: string | undefined
                members?: string | undefined
                memberships?: string | undefined
                pluginData?: boolean | undefined
                organization?: boolean | undefined
                organization_pluginData?: boolean | undefined
                myPrefs?: boolean | undefined
                tags?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                actions?: string | undefined
                boardStars?: string | undefined
                cards?: string | undefined
                card_pluginData?: boolean | undefined
                checklists?: string | undefined
                customFields?: boolean | undefined
                fields?: string | undefined
                labels?: string | undefined
                lists?: string | undefined
                members?: string | undefined
                memberships?: string | undefined
                pluginData?: boolean | undefined
                organization?: boolean | undefined
                organization_pluginData?: boolean | undefined
                myPrefs?: boolean | undefined
                tags?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                actions?: string | undefined
                boardStars?: string | undefined
                cards?: string | undefined
                card_pluginData?: boolean | undefined
                checklists?: string | undefined
                customFields?: boolean | undefined
                fields?: string | undefined
                labels?: string | undefined
                lists?: string | undefined
                members?: string | undefined
                memberships?: string | undefined
                pluginData?: boolean | undefined
                organization?: boolean | undefined
                organization_pluginData?: boolean | undefined
                myPrefs?: boolean | undefined
                tags?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: {
            name?: string | undefined
            desc?: string | undefined
            closed?: boolean | undefined
            subscribed?: TrelloID | undefined
            idOrganization?: string | undefined
            'prefs/permissionLevel'?: string | undefined
            'prefs/selfJoin'?: boolean | undefined
            'prefs/cardCovers'?: boolean | undefined
            'prefs/hideVotes'?: boolean | undefined
            'prefs/invitations'?: string | undefined
            'prefs/voting'?: string | undefined
            'prefs/comments'?: string | undefined
            'prefs/background'?: string | undefined
            'prefs/cardAging'?: string | undefined
            'prefs/calendarFeedEnabled'?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/boards/:id/:field': {
      $get: {
        input: { param: { id: string; field: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:boardId/actions': {
      $get: {
        input: { param: { boardId: string } } & {
          query: {
            fields?: Action | undefined
            filter?: string | undefined
            format?: string | undefined
            idModels?: string | undefined
            limit?: number | undefined
            member?: boolean | undefined
            member_fields?: string | undefined
            memberCreator?: boolean | undefined
            memberCreator_fields?: string | undefined
            page?: number | undefined
            reactions?: boolean | undefined
            before?: string | undefined
            since?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:boardId/boardStars': {
      $get: {
        input: { param: { boardId: string } } & { query: { filter?: string | undefined } }
        output: BoardStars[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/boards/:id/checklists': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/boards/:id/cards': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/boards/:id/cards/:filter': {
      $get: {
        input: {
          param: {
            id: string
            filter: 'all' | 'closed' | 'complete' | 'incomplete' | 'none' | 'open' | 'visible'
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/customFields': {
      $get: {
        input: { param: { id: TrelloID } }
        output: CustomField[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/boards/:id/labels': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: { fields?: Label | undefined; limit?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { query: { name: string; color: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/lists': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            cards?: ViewFilter | undefined
            card_fields?: string | undefined
            filter?: ViewFilter | undefined
            fields?: string | undefined
          }
        }
        output: TrelloList[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & { query: { name: string; pos?: string | undefined } }
        output: TrelloList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/boards/:id/lists/:filter': {
      $get: {
        input: { param: { id: TrelloID; filter: ViewFilter } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/members': {
      $get: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: { email: string; type?: 'admin' | 'normal' | 'observer' | undefined }
        } & { json: { fullName?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/members/:idMember': {
      $put: {
        input: { param: { id: TrelloID; idMember: TrelloID } } & {
          query: { type: 'admin' | 'normal' | 'observer'; allowBillableGuest?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idMember: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/memberships/:idMembership': {
      $put: {
        input: { param: { id: TrelloID; idMembership: TrelloID } } & {
          query: {
            type: 'admin' | 'normal' | 'observer'
            member_fields?:
              | 'all'
              | 'avatarHash'
              | 'bio'
              | 'bioData'
              | 'confirmed'
              | 'fullName'
              | 'idPremOrgsAdmin'
              | 'initials'
              | 'memberType'
              | 'products'
              | 'status'
              | 'url'
              | 'username'
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/myPrefs/emailPosition': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: 'bottom' | 'top' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/myPrefs/idEmailList': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/myPrefs/showSidebar': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: boolean } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/myPrefs/showSidebarActivity': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: boolean } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/myPrefs/showSidebarBoardActions': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: boolean } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/myPrefs/showSidebarMembers': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: boolean } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/': {
      $post: {
        input: {
          query: {
            name: string
            defaultLabels?: boolean | undefined
            defaultLists?: boolean | undefined
            desc?: string | undefined
            idOrganization?: TrelloID | undefined
            idBoardSource?: TrelloID | undefined
            keepFromSource?: 'cards' | 'none' | undefined
            powerUps?: 'all' | 'calendar' | 'cardAging' | 'recap' | 'voting' | undefined
            prefs_permissionLevel?: 'org' | 'private' | 'public' | undefined
            prefs_voting?: 'disabled' | 'members' | 'observers' | 'org' | 'public' | undefined
            prefs_comments?: 'disabled' | 'members' | 'observers' | 'org' | 'public' | undefined
            prefs_invitations?: 'members' | 'admins' | undefined
            prefs_selfJoin?: boolean | undefined
            prefs_cardCovers?: boolean | undefined
            prefs_background?:
              | 'blue'
              | 'orange'
              | 'green'
              | 'red'
              | 'purple'
              | 'pink'
              | 'lime'
              | 'sky'
              | 'grey'
              | undefined
            prefs_cardAging?: 'pirate' | 'regular' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/calendarKey/generate': {
      $post: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/boards/:id/emailKey/generate': {
      $post: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/boards/:id/idTags': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { value: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/markAsViewed': {
      $post: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/boards/:id/boardPlugins': {
      $get: {
        input: { param: { id: TrelloID } }
        output: Plugin[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & { query: { idPlugin?: TrelloID | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/boardPlugins/:idPlugin': {
      $delete: {
        input: { param: { id: TrelloID; idPlugin: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/plugins': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: { filter?: 'enabled' | 'available' | undefined }
        }
        output: Plugin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/boards/:id/exports': {
      $post: {
        input: { param: { id: TrelloID } } & {
          query: { attachments?: boolean | undefined; attachment_age?: number | undefined }
        }
        output: Export
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/boards/:id/exports/:idExport': {
      $get: {
        input: { param: { id: TrelloID; idExport: TrelloID } }
        output: Export
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idExport: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/boards/:id/exports/:idExport/download': {
      $get:
        | {
            input: { param: { id: TrelloID; idExport: TrelloID } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { id: TrelloID; idExport: TrelloID } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:id/exports/mostRecent': {
      $get:
        | { input: { param: { id: TrelloID } }; output: Export; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/cards': {
      $post: {
        input: {
          query: {
            name?: string | undefined
            desc?: string | undefined
            pos?: 'top' | 'bottom' | number | undefined
            due?: string | undefined
            start?: (string | null) | undefined
            dueComplete?: boolean | undefined
            idList: TrelloID
            idMembers?: TrelloID[] | undefined
            idLabels?: TrelloID[] | undefined
            urlSource?: string | undefined
            fileSource?: File | undefined
            mimeType?: string | undefined
            idCardSource?: TrelloID | undefined
            keepFromSource?:
              | 'all'
              | 'attachments'
              | 'checklists'
              | 'comments'
              | 'customFields'
              | 'due'
              | 'start'
              | 'labels'
              | 'members'
              | 'start'
              | 'stickers'
              | undefined
            address?: string | undefined
            locationName?: string | undefined
            coordinates?: string | undefined
            cardRole?: 'separator' | 'board' | 'mirror' | 'link' | undefined
          }
        }
        output: Card
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:id': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            fields?: string | undefined
            actions?: string | undefined
            attachments?: 'cover' | boolean | undefined
            attachment_fields?: string | undefined
            members?: boolean | undefined
            member_fields?: string | undefined
            membersVoted?: boolean | undefined
            memberVoted_fields?: string | undefined
            checkItemStates?: boolean | undefined
            checklists?: string | undefined
            checklist_fields?: string | undefined
            board?: boolean | undefined
            board_fields?: string | undefined
            list?: boolean | undefined
            pluginData?: boolean | undefined
            stickers?: boolean | undefined
            sticker_fields?: string | undefined
            customFieldItems?: boolean | undefined
          }
        }
        output: Card
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: {
            name?: string | undefined
            desc?: string | undefined
            closed?: boolean | undefined
            idMembers?: TrelloID | undefined
            idAttachmentCover?: TrelloID | undefined
            idList?: TrelloID | undefined
            idLabels?: TrelloID | undefined
            idBoard?: TrelloID | undefined
            pos?: 'top' | 'bottom' | number | undefined
            due?: (string | null) | undefined
            start?: (string | null) | undefined
            dueComplete?: boolean | undefined
            subscribed?: boolean | undefined
            address?: string | undefined
            locationName?: string | undefined
            coordinates?: string | undefined
            cover?:
              | {
                  value?:
                    | {
                        color?:
                          | 'pink'
                          | 'yellow'
                          | 'lime'
                          | 'blue'
                          | 'black'
                          | 'orange'
                          | 'red'
                          | 'purple'
                          | 'sky'
                          | 'green'
                          | undefined
                        brightness?: 'dark' | 'light' | undefined
                        url?: string | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: Card
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/cards/:id/:field': {
      $get: {
        input: { param: { id: TrelloID; field: CardFields } }
        output: Card
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:id/actions': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: { filter?: string | undefined; page?: number | undefined }
        }
        output: Action[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:id/attachments': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: { fields?: string | undefined; filter?: string | undefined }
        }
        output: Attachment[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & {
          query: {
            name?: string | undefined
            file?: File | undefined
            mimeType?: string | undefined
            url?: string | undefined
            setCover?: boolean | undefined
          }
        }
        output: Attachment[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:id/attachments/:idAttachment': {
      $get: {
        input: { param: { id: TrelloID; idAttachment: TrelloID } } & {
          query: { fields?: AttachmentFields[] | undefined }
        }
        output: Attachment[]
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idAttachment: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/board': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/checkItemStates': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/checklists': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            checkItems?: 'all' | 'none' | undefined
            checkItem_fields?:
              | 'name'
              | 'nameData'
              | 'pos'
              | 'state'
              | 'type'
              | 'due'
              | 'dueReminder'
              | 'idMember'
              | undefined
            filter?: 'all' | 'none' | undefined
            fields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & {
          query: {
            name?: string | undefined
            idChecklistSource?: TrelloID | undefined
            pos?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/checkItem/:idCheckItem': {
      $get: {
        input: { param: { id: TrelloID; idCheckItem: TrelloID } } & {
          query: { fields?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID; idCheckItem: TrelloID } } & {
          query: {
            name?: string | undefined
            state?: 'complete' | 'incomplete' | undefined
            idChecklist?: TrelloID | undefined
            pos?: PosStringOrNumber | undefined
            due?: string | undefined
            dueReminder?: (number | null) | undefined
            idMember?: TrelloID | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idCheckItem: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/list': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/members': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/membersVoted': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & { query: { value: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/pluginData': {
      $get: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/cards/:id/stickers': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & {
          query: {
            image: string
            top: number
            left: number
            zIndex: number
            rotate?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/stickers/:idSticker': {
      $get: {
        input: { param: { id: TrelloID; idSticker: TrelloID } } & {
          query: { fields?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idSticker: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID; idSticker: TrelloID } } & {
          query: { top: number; left: number; zIndex: number; rotate?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/actions/:idAction/comments': {
      $put: {
        input: { param: { id: TrelloID; idAction: TrelloID } } & { query: { text: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idAction: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:idCard/customField/:idCustomField/item': {
      $put: {
        input: { param: { idCard: TrelloID; idCustomField: TrelloID } } & {
          json:
            | {
                value?:
                  | {
                      text?: string | undefined
                      checked?: boolean | undefined
                      date?: string | undefined
                      number?: string | undefined
                    }
                  | undefined
              }
            | { idValue?: TrelloID | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:idCard/customFields': {
      $put: {
        input: {
          json: {
            customFieldItems?:
              | {
                  idCustomField?: { [x: string]: unknown } | undefined
                  value?:
                    | {
                        text?: string | undefined
                        checked?: boolean | undefined
                        date?: string | undefined
                        number?: string | undefined
                      }
                    | undefined
                  idValue?: { [x: string]: unknown } | undefined
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/customFieldItems': {
      $get: {
        input: { param: { id: TrelloID } }
        output: CustomFieldItems[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:id/actions/comments': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { text: string } }
        output: Action
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:id/idLabels': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { value?: TrelloID | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/idMembers': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { value?: TrelloID | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/labels': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { color: string; name?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/markAssociatedNotificationsRead': {
      $post: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/cards/:id/idLabels/:idLabel': {
      $delete: {
        input: { param: { id: TrelloID; idLabel: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/idMembers/:idMember': {
      $delete: {
        input: { param: { id: TrelloID; idMember: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:id/membersVoted/:idMember': {
      $delete: {
        input: { param: { id: TrelloID; idMember: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem': {
      $put: {
        input: { param: { idCard: TrelloID; idCheckItem: TrelloID; idChecklist: TrelloID } } & {
          query: { pos?: PosStringOrNumber | undefined }
        }
        output: CheckItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:id/checklists/:idChecklist': {
      $delete: {
        input: { param: { id: TrelloID; idChecklist: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/checklists': {
      $post: {
        input: {
          query: {
            idCard: TrelloID
            name?: string | undefined
            pos?: PosStringOrNumber | undefined
            idChecklistSource?: TrelloID | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/checklists/:id': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            cards?: 'all' | 'closed' | 'none' | 'open' | 'visible' | undefined
            checkItems?: 'all' | 'none' | undefined
            checkItem_fields?:
              | 'all'
              | 'name'
              | 'nameData'
              | 'pos'
              | 'state'
              | 'type'
              | 'due'
              | 'dueReminder'
              | 'idMember'
              | undefined
            fields?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: { name?: string | undefined; pos?: PosStringOrNumber | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/checklists/:id/:field': {
      $get: {
        input: { param: { id: TrelloID; field: 'name' | 'pos' } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID; field: 'name' | 'pos' } } & {
          query: { value: PosStringOrNumber | TrelloID }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/checklists/:id/board': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: 'all' | 'name' | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/checklists/:id/cards': {
      $get: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/checklists/:id/checkItems': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            filter?: 'all' | 'none' | undefined
            fields?:
              | 'all'
              | 'name'
              | 'nameData'
              | 'pos'
              | 'state'
              | 'type'
              | 'due'
              | 'dueReminder'
              | 'idMember'
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & {
          query: {
            name: string
            pos?: PosStringOrNumber | undefined
            checked?: boolean | undefined
            due?: string | undefined
            dueReminder?: (number | null) | undefined
            idMember?: TrelloID | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/checklists/:id/checkItems/:idCheckItem': {
      $get: {
        input: { param: { id: TrelloID; idCheckItem: TrelloID } } & {
          query: {
            fields?:
              | 'all'
              | 'name'
              | 'nameData'
              | 'pos'
              | 'state'
              | 'type'
              | 'due'
              | 'dueReminder'
              | 'idMember'
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idCheckItem: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/customFields': {
      $post: {
        input: {
          json: {
            idModel: TrelloID
            modelType: 'board'
            name: string
            type: 'checkbox' | 'list' | 'number' | 'text' | 'date'
            options?: string | undefined
            pos: PosStringOrNumber
            display_cardFront?: boolean | undefined
          }
        }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customFields/:id': {
      $get: {
        input: { param: { id: TrelloID } }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          json: {
            name?: string | undefined
            pos?: PosStringOrNumber | undefined
            'display/cardFront'?: boolean | undefined
          }
        }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/customFields/:id/options': {
      $post: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/customFields/:id/options/:idCustomFieldOption': {
      $get: {
        input: { param: { id: TrelloID; idCustomFieldOption: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idCustomFieldOption: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/emoji': {
      $get: {
        input: { query: { locale?: string | undefined; spritesheets?: boolean | undefined } }
        output: Emoji
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enterprises/:id': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            fields?: string | undefined
            members?: string | undefined
            member_fields?: string | undefined
            member_filter?: string | undefined
            member_sort?: string | undefined
            member_sortBy?: string | undefined
            member_sortOrder?: string | undefined
            member_startIndex?: number | undefined
            member_count?: number | undefined
            organizations?: string | undefined
            organization_fields?: string | undefined
            organization_paid_accounts?: boolean | undefined
            organization_memberships?: string | undefined
          }
        }
        output: Enterprise
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enterprises/:id/auditlog': {
      $get: {
        input: { param: { id: TrelloID } }
        output: EnterpriseAuditLog[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enterprises/:id/admins': {
      $get:
        | {
            input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
            output: EnterpriseAdmin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/signupUrl': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            authenticate?: boolean | undefined
            confirmationAccepted?: boolean | undefined
            returnUrl?: (string | null) | undefined
            tosAccepted?: boolean | undefined
          }
        }
        output: { signupUrl?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enterprises/:id/members/query': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            licensed?: boolean | undefined
            deactivated?: boolean | undefined
            collaborator?: boolean | undefined
            managed?: boolean | undefined
            admin?: boolean | undefined
            activeSince?: string | undefined
            inactiveSince?: string | undefined
            search?: string | undefined
            cursor?: string | undefined
          }
        }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enterprises/:id/members': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            fields?: string | undefined
            filter?: (string | null) | undefined
            sort?: string | undefined
            sortBy?: string | undefined
            sortOrder?: 'ascending' | 'descending' | 'asc' | 'desc' | null | undefined
            startIndex?: number | undefined
            count?: string | undefined
            organization_fields?: string | undefined
            board_fields?: string | undefined
          }
        }
        output: Member[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enterprises/:id/members/:idMember': {
      $get:
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & {
              query: {
                fields?: string | undefined
                organization_fields?: string | undefined
                board_fields?: string | undefined
              }
            }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & {
              query: {
                fields?: string | undefined
                organization_fields?: string | undefined
                board_fields?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & {
              query: {
                fields?: string | undefined
                organization_fields?: string | undefined
                board_fields?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & {
              query: {
                fields?: string | undefined
                organization_fields?: string | undefined
                board_fields?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/transferrable/organization/:idOrganization': {
      $get:
        | {
            input: { param: { id: TrelloID; idOrganization: TrelloID } }
            output: TransferrableOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID; idOrganization: TrelloID } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID; idOrganization: TrelloID } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID; idOrganization: TrelloID } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/transferrable/bulk/:idOrganizations': {
      $get:
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: TransferrableOrganization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/$:id/enterpriseJoinRequest/bulk': {
      $put:
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganizations: Organization[] } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/claimableOrganizations': {
      $get:
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                name?: string | undefined
                activeSince?: string | undefined
                inactiveSince?: string | undefined
              }
            }
            output: ClaimableOrganizations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                name?: string | undefined
                activeSince?: string | undefined
                inactiveSince?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                name?: string | undefined
                activeSince?: string | undefined
                inactiveSince?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                name?: string | undefined
                activeSince?: string | undefined
                inactiveSince?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/pendingOrganizations': {
      $get:
        | {
            input: { param: { id: TrelloID } } & {
              query: { activeSince?: string | undefined; inactiveSince?: string | undefined }
            }
            output: PendingOrganizations[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: { activeSince?: string | undefined; inactiveSince?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: { activeSince?: string | undefined; inactiveSince?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: { activeSince?: string | undefined; inactiveSince?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/tokens': {
      $post: {
        input: { param: { id: string } } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/enterprises/:id/organizations': {
      $get:
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                fields?: OrganizationFields | undefined
                filter?: string | undefined
                startIndex?: number | undefined
                count?: number | undefined
              }
            }
            output: Organization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                fields?: OrganizationFields | undefined
                filter?: string | undefined
                startIndex?: number | undefined
                count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                fields?: OrganizationFields | undefined
                filter?: string | undefined
                startIndex?: number | undefined
                count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID } } & {
              query: {
                fields?: OrganizationFields | undefined
                filter?: string | undefined
                startIndex?: number | undefined
                count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganization: string } }
            output: Organization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganization: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganization: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID } } & { query: { idOrganization: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/members/:idMember/licensed': {
      $put:
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & { query: { value: boolean } }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & { query: { value: boolean } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & { query: { value: boolean } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID; idMember: TrelloID } } & { query: { value: boolean } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:id/members/:idMember/deactivated': {
      $put: {
        input: { param: { id: TrelloID; idMember: TrelloID } } & {
          query: {
            value: boolean
            fields?: MemberFields | undefined
            organization_fields?: OrganizationFields | undefined
            board_fields?: BoardFields | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/enterprises/:id/admins/:idMember': {
      $put: {
        input: { param: { id: TrelloID; idMember: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idMember: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/enterprises/:id/organizations/:idOrg': {
      $delete: {
        input: { param: { id: TrelloID; idOrg: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/enterprises/:id/organizations/bulk/:idOrganizations': {
      $get:
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: TrelloID; idOrganizations: Organization[] } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/labels/:id': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: { name?: string | undefined; color?: Color | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/labels/:id/:field': {
      $put: {
        input: { param: { id: string; field: 'color' | 'name' } } & { query: { value: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/labels': {
      $post: {
        input: { query: { name: string; color: Color; idBoard: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id': {
      $get: {
        input: { param: { id: string } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            name?: string | undefined
            closed?: boolean | undefined
            idBoard?: TrelloID | undefined
            pos?: number | 'top' | 'bottom' | undefined
            subscribed?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists': {
      $post: {
        input: {
          query: {
            name: string
            idBoard: TrelloID
            idListSource?: TrelloID | undefined
            pos?: number | 'top' | 'bottom' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/archiveAllCards': {
      $post: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/lists/:id/moveAllCards': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { idBoard: TrelloID; idList: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/closed': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value?: TrelloID | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/idBoard': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/:field': {
      $put: {
        input: { param: { id: TrelloID; field: 'name' | 'pos' | 'subscribed' } } & {
          query: { value?: string | number | 'top' | 'bottom' | boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/actions': {
      $get: {
        input: { param: { id: string } } & { query: { filter?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/board': {
      $get: {
        input: { param: { id: string } } & { query: { fields?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/cards': {
      $get: {
        input: { param: { id: TrelloID } }
        output: Card[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id': {
      $get: {
        input: { param: { id: TrelloID | string } } & {
          query: {
            actions?: string | undefined
            boards?: string | undefined
            boardBackgrounds?: 'all' | 'custom' | 'default' | 'none' | 'premium' | undefined
            boardsInvited?:
              | 'closed'
              | 'members'
              | 'open'
              | 'organization'
              | 'pinned'
              | 'public'
              | 'starred'
              | 'unpinned'
              | undefined
            boardsInvited_fields?: BoardFields | undefined
            boardStars?: boolean | undefined
            cards?: string | undefined
            customBoardBackgrounds?: 'all' | 'none' | undefined
            customEmoji?: 'all' | 'none' | undefined
            customStickers?: 'all' | 'none' | undefined
            fields?: MemberFields | undefined
            notifications?: string | undefined
            organizations?: 'all' | 'members' | 'none' | 'public' | undefined
            organization_fields?: OrganizationFields | undefined
            organization_paid_account?: boolean | undefined
            organizationsInvited?: 'all' | 'members' | 'none' | 'public' | undefined
            organizationsInvited_fields?: OrganizationFields | undefined
            paid_account?: boolean | undefined
            savedSearches?: boolean | undefined
            tokens?: 'all' | 'none' | undefined
          }
        }
        output: Member
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: {
            fullName?: string | undefined
            initials?: string | undefined
            username?: string | undefined
            bio?: string | undefined
            avatarSource?: 'gravatar' | 'none' | 'upload' | undefined
            'prefs/colorBlind'?: boolean | undefined
            'prefs/locale'?: string | undefined
            'prefs/minutesBetweenSummaries'?: number | undefined
          }
        }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/:field': {
      $get: {
        input: { param: { id: TrelloID; field: MemberFields } }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/actions': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { filter?: string | undefined } }
        output: Member[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/boardBackgrounds': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: { filter?: 'all' | 'custom' | 'default' | 'none' | 'premium' | undefined }
        }
        output: BoardBackground[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & { query: { file: File } }
        output: BoardBackground[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/boardBackgrounds/:idBackground': {
      $get: {
        input: { param: { id: TrelloID; idBackground: TrelloID } } & {
          query: { fields?: 'all' | 'brightness' | 'fullSizeUrl' | 'scaled' | 'tile' | undefined }
        }
        output: BoardBackground
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID; idBackground: TrelloID } } & {
          query: {
            brightness?: 'dark' | 'light' | 'unknown' | undefined
            tile?: boolean | undefined
          }
        }
        output: BoardBackground
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idBackground: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/members/:id/boardStars': {
      $get: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: TrelloID | string } } & {
          query: { idBoard: TrelloID; pos: PosStringOrNumber }
        }
        output: BoardStars[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/boardStars/:idStar': {
      $get: {
        input: { param: { id: TrelloID; idStar: TrelloID } }
        output: BoardStars
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID; idStar: TrelloID } } & {
          query: { pos?: PosStringOrNumber | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idStar: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/members/:id/boards': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            filter?:
              | 'all'
              | 'closed'
              | 'members'
              | 'open'
              | 'organization'
              | 'public'
              | 'starred'
              | undefined
            fields?: BoardFields | undefined
            lists?: 'all' | 'closed' | 'none' | 'open' | undefined
            organization?: boolean | undefined
            organization_fields?: OrganizationFields | undefined
          }
        }
        output: Board[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/boardsInvited': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: BoardFields | undefined } }
        output: Board[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/cards': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            filter?:
              | 'all'
              | 'closed'
              | 'complete'
              | 'incomplete'
              | 'none'
              | 'open'
              | 'visible'
              | undefined
          }
        }
        output: Card[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/customBoardBackgrounds': {
      $get: {
        input: { param: { id: TrelloID } }
        output: BoardBackground[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & { query: { file: File } }
        output: BoardBackground
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/customBoardBackgrounds/:idBackground': {
      $get: {
        input: { param: { id: TrelloID | string; idBackground: TrelloID } }
        output: BoardBackground
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID | string; idBackground: TrelloID } } & {
          query: {
            brightness?: 'dark' | 'light' | 'unknown' | undefined
            tile?: boolean | undefined
          }
        }
        output: BoardBackground
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID | string; idBackground: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/members/:id/customEmoji': {
      $get: {
        input: { param: { id: TrelloID } }
        output: CustomEmoji[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & { query: { file: File; name: string } }
        output: CustomEmoji
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/customEmoji/:idEmoji': {
      $get: {
        input: { param: { id: TrelloID; idEmoji: TrelloID } } & {
          query: { fields?: 'name' | 'url' | 'all' | undefined }
        }
        output: CustomEmoji
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/customStickers': {
      $get: {
        input: { param: { id: TrelloID } }
        output: CustomSticker[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & { query: { file: File } }
        output: CustomSticker
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/customStickers/:idSticker': {
      $get: {
        input: { param: { id: TrelloID; idSticker: TrelloID } } & {
          query: { fields?: 'scaled' | 'url' | 'all' | undefined }
        }
        output: CustomSticker
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID; idSticker: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/members/:id/notifications': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            entities?: boolean | undefined
            display?: boolean | undefined
            filter?: string | undefined
            read_filter?: string | undefined
            fields?: string | undefined
            limit?: number | undefined
            page?: number | undefined
            before?: string | undefined
            since?: string | undefined
            memberCreator?: boolean | undefined
            memberCreator_fields?: string | undefined
          }
        }
        output: Notification[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/organizations': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            filter?: 'all' | 'members' | 'none' | 'public' | undefined
            fields?: OrganizationFields | undefined
            paid_account?: boolean | undefined
          }
        }
        output: Organization[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/organizationsInvited': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: OrganizationFields | undefined } }
        output: Organization[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/savedSearches': {
      $get: {
        input: { param: { id: TrelloID } }
        output: SavedSearch[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: TrelloID } } & {
          query: { name: string; query: string; pos: PosStringOrNumber }
        }
        output: SavedSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/savedSearches/:idSearch': {
      $get: {
        input: { param: { id: string; idSearch: string } }
        output: SavedSearch
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; idSearch: string } } & {
          query: { name?: string | undefined; query?: string | undefined; pos?: string | undefined }
        }
        output: SavedSearch
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string; idSearch: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/members/:id/tokens': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { webhooks?: boolean | undefined } }
        output: Token[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/avatar': {
      $post: {
        input: { param: { id: string } } & { query: { file: File } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/members/:id/oneTimeMessagesDismissed': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { value: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/members/:id/notificationChannelSettings': {
      $get: {
        input: { param: { id: TrelloID | string } }
        output: NotificationChannelSettings[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID | string } } & {
          json: { channel: Channel; blockedKeys: BlockedKey | BlockedKey[] }
        }
        output: NotificationChannelSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/notificationChannelSettings/:channel': {
      $get: {
        input: { param: { id: TrelloID | string; channel: Channel } }
        output: NotificationChannelSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID | string; channel: Channel } } & {
          json: { blockedKeys: BlockedKey | BlockedKey[] }
        }
        output: NotificationChannelSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id/notificationChannelSettings/:channel/:blockedKeys': {
      $put: {
        input: { param: { id: TrelloID | string; channel: Channel; blockedKeys: BlockedKey } }
        output: NotificationChannelSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            board?: boolean | undefined
            board_fields?: BoardFields | undefined
            card?: boolean | undefined
            card_fields?: CardFields | undefined
            display?: boolean | undefined
            entities?: boolean | undefined
            fields?: NotificationFields | undefined
            list?: boolean | undefined
            member?: boolean | undefined
            member_fields?: MemberFields | undefined
            memberCreator?: boolean | undefined
            memberCreator_fields?: MemberFields | undefined
            organization?: boolean | undefined
            organization_fields?: OrganizationFields | undefined
          }
        }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & { query: { unread?: boolean | undefined } }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/:field': {
      $get: {
        input: { param: { id: TrelloID; field: NotificationFields } }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/all/read': {
      $post: {
        input: { query: { read?: boolean | undefined; ids?: TrelloID[] | undefined } }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/unread': {
      $put: {
        input: { param: { id: TrelloID } } & { query: { value?: string | undefined } }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/board': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: BoardFields | undefined } }
        output: Board
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/card': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: CardFields | undefined } }
        output: Card
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/list': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: ListFields | undefined } }
        output: TrelloList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/member': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: MemberFields | undefined } }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/memberCreator': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: MemberFields | undefined } }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/:id/organization': {
      $get: {
        input: { param: { id: TrelloID } } & { query: { fields?: OrganizationFields | undefined } }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations': {
      $post: {
        input: {
          query: {
            displayName: string
            desc?: string | undefined
            name?: string | undefined
            website?: string | undefined
          }
        }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id': {
      $get: {
        input: { param: { id: TrelloID } }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: {
            name?: string | undefined
            displayName?: string | undefined
            desc?: string | undefined
            website?: string | undefined
            'prefs/associatedDomain'?: string | undefined
            'prefs/externalMembersDisabled'?: boolean | undefined
            'prefs/googleAppsVersion'?: number | undefined
            'prefs/boardVisibilityRestrict/org'?: string | undefined
            'prefs/boardVisibilityRestrict/private'?: string | undefined
            'prefs/boardVisibilityRestrict/public'?: string | undefined
            'prefs/orgInviteRestrict'?: string | undefined
            'prefs/permissionLevel'?: string | undefined
          }
        }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organizations/:id/:field': {
      $get: {
        input: { param: { id: TrelloID; field: OrganizationFields } }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/actions': {
      $get: {
        input: { param: { id: TrelloID } }
        output: Action[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/boards': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            filter?: 'all' | 'open' | 'closed' | 'members' | 'organization' | 'public' | undefined
            fields?: BoardFields | undefined
          }
        }
        output: Board[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/exports': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { attachments?: boolean | undefined } }
        output: Export
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: TrelloID } }
        output: Export[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/members': {
      $get: {
        input: { param: { id: TrelloID } }
        output: Member[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: { email: string; fullName: string; type?: 'admin' | 'normal' | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organizations/:id/memberships': {
      $get: {
        input: { param: { id: TrelloID } } & {
          query: {
            filter?: 'all' | 'active' | 'admin' | 'deactivated' | 'me' | 'normal' | undefined
            member?: boolean | undefined
          }
        }
        output: Memberships[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/memberships/:idMembership': {
      $get: {
        input: { param: { id: TrelloID; idMembership: TrelloID } } & {
          query: { member?: boolean | undefined }
        }
        output: Memberships
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/pluginData': {
      $get: {
        input: { param: { id: TrelloID } }
        output: PluginData[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/tags': {
      $get: {
        input: { param: { id: string | TrelloID } }
        output: Tag[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string | TrelloID } }
        output: Tag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:id/members/:idMember': {
      $put: {
        input: { param: { id: TrelloID; idMember: string | TrelloID } } & {
          query: { type: 'admin' | 'normal' }
        }
        output: Member
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: TrelloID | string; idMember: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organizations/:id/members/:idMember/deactivated': {
      $put: {
        input: { param: { id: TrelloID; idMember: TrelloID | string } } & {
          query: { value: boolean }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organizations/:id/logo': {
      $post: {
        input: { param: { id: TrelloID } } & { query: { file?: File | undefined } }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organizations/:id/members/:idMember/all': {
      $delete: {
        input: { param: { id: TrelloID; idMember: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organizations/:id/prefs/associatedDomain': {
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organizations/:id/prefs/orgInviteRestrict': {
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/organizations/:id/tags/:idTag': {
      $delete: {
        input: { param: { id: string; idTag: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organizations/:id/newBillableGuests/:idBoard': {
      $get: {
        input: { param: { id: TrelloID; idBoard: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/plugins/:id/': {
      $get: {
        input: { param: { id: TrelloID } }
        output: Plugin
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } }
        output: Plugin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/plugins/:idPlugin/listings': {
      $post: {
        input: { param: { idPlugin: TrelloID } } & {
          json: {
            description?: string | undefined
            locale?: string | undefined
            overview?: string | undefined
            name?: string | undefined
          }
        }
        output: PluginListing
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/plugins/:id/compliance/memberPrivacy': {
      $get: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/plugins/:idPlugin/listings/:idListing': {
      $put: {
        input: { param: { idPlugin: TrelloID; idListing: TrelloID } } & {
          json: {
            description?: string | undefined
            locale?: string | undefined
            overview?: string | undefined
            name?: string | undefined
          }
        }
        output: PluginListing
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search': {
      $get: {
        input: {
          query: {
            query: string
            idBoards?: 'mine' | TrelloID | undefined
            idOrganizations?: string | undefined
            idCards?: string | undefined
            modelTypes?: string | undefined
            board_fields?: string | undefined
            boards_limit?: number | undefined
            board_organization?: boolean | undefined
            card_fields?: string | undefined
            cards_limit?: number | undefined
            cards_page?: number | undefined
            card_board?: boolean | undefined
            card_list?: boolean | undefined
            card_members?: boolean | undefined
            card_stickers?: boolean | undefined
            card_attachments?: string | undefined
            organization_fields?: string | undefined
            organizations_limit?: number | undefined
            member_fields?: string | undefined
            members_limit?: number | undefined
            partial?: boolean | undefined
          }
        }
        output: (Member | Card | Board | Organization)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/members/': {
      $get: {
        input: {
          query: {
            query: string
            limit?: number | undefined
            idBoard?: TrelloID | undefined
            idOrganization?: TrelloID | undefined
            onlyOrgMembers?: boolean | undefined
          }
        }
        output: Member[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tokens/:token': {
      $get: {
        input: { param: { token: string } } & {
          query: { fields?: TokenFields | undefined; webhooks?: boolean | undefined }
        }
        output: Token
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tokens/:token/member': {
      $get: {
        input: { param: { token: string } } & { query: { fields?: MemberFields | undefined } }
        output: Member
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tokens/:token/webhooks': {
      $get: {
        input: { param: { token: string } }
        output: Webhook[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { token: string } } & {
          query: { description?: string | undefined; callbackURL: string; idModel: TrelloID }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tokens/:token/webhooks/:idWebhook': {
      $get: {
        input: { param: { token: string; idWebhook: TrelloID } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { token: string; idWebhook: TrelloID } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { token: string; idWebhook: TrelloID } } & {
          query: {
            description?: string | undefined
            callbackURL?: string | undefined
            idModel?: TrelloID | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tokens/:token/': {
      $delete: {
        input: { param: { token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/webhooks/': {
      $post: {
        input: {
          query: {
            description?: string | undefined
            callbackURL: string
            idModel: TrelloID
            active?: boolean | undefined
          }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:id': {
      $get: {
        input: { param: { id: TrelloID } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: TrelloID } } & {
          query: {
            description?: string | undefined
            callbackURL?: string | undefined
            idModel?: TrelloID | undefined
            active?: boolean | undefined
          }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: TrelloID } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/webhooks/:id/:field': {
      $get: {
        input: {
          param: {
            id: TrelloID
            field:
              | 'active'
              | 'callbackURL'
              | 'description'
              | 'idModel'
              | 'consecutiveFailures'
              | 'firstConsecutiveFailDate'
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
