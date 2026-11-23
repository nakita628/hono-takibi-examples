type Actions = { text?: string | undefined }
type ActionsText = { value?: string | undefined }
type Boards = {
  closed?: string | undefined
  desc?: string | undefined
  idBoardSource?: string | undefined
  idOrganization?: string | undefined
  keepFromSource?: string | undefined
  'labelNames/blue'?: string | undefined
  'labelNames/green'?: string | undefined
  'labelNames/orange'?: string | undefined
  'labelNames/purple'?: string | undefined
  'labelNames/red'?: string | undefined
  'labelNames/yellow'?: string | undefined
  name?: string | undefined
  powerUps?: string | undefined
  'prefs/background'?: string | undefined
  'prefs/calendarFeedEnabled'?: string | undefined
  'prefs/cardAging'?: string | undefined
  'prefs/cardCovers'?: string | undefined
  'prefs/comments'?: string | undefined
  'prefs/invitations'?: string | undefined
  'prefs/permissionLevel'?: string | undefined
  'prefs/selfJoin'?: string | undefined
  'prefs/voting'?: string | undefined
  prefs_background?: string | undefined
  prefs_cardAging?: string | undefined
  prefs_cardCovers?: string | undefined
  prefs_comments?: string | undefined
  prefs_invitations?: string | undefined
  prefs_permissionLevel?: string | undefined
  prefs_selfJoin?: string | undefined
  prefs_voting?: string | undefined
  subscribed?: string | undefined
}
type BoardsChecklists = { name?: string | undefined }
type BoardsClosed = { value?: string | undefined }
type BoardsDesc = { value?: string | undefined }
type BoardsIdOrganization = { value?: string | undefined }
type LabelNamesBlue = { value?: string | undefined }
type LabelNamesGreen = { value?: string | undefined }
type LabelNamesOrange = { value?: string | undefined }
type LabelNamesPurple = { value?: string | undefined }
type LabelNamesRed = { value?: string | undefined }
type LabelNamesYellow = { value?: string | undefined }
type BoardsLabels = { color?: string | undefined; name?: string | undefined }
type BoardsLists = { name?: string | undefined; pos?: string | undefined }
type BoardsMembers = {
  email?: string | undefined
  fullName?: string | undefined
  type?: string | undefined
}
type BoardsMemberships = { member_fields?: string | undefined; type?: string | undefined }
type MyPrefsEmailPosition = { value?: string | undefined }
type MyPrefsIdEmailList = { value?: string | undefined }
type MyPrefsShowListGuide = { value?: string | undefined }
type MyPrefsShowSidebar = { value?: string | undefined }
type MyPrefsShowSidebarActivity = { value?: string | undefined }
type MyPrefsShowSidebarBoardActions = { value?: string | undefined }
type MyPrefsShowSidebarMembers = { value?: string | undefined }
type BoardsName = { value?: string | undefined }
type BoardsPowerUps = { value?: string | undefined }
type PrefsBackground = { value?: string | undefined }
type PrefsCalendarFeedEnabled = { value?: string | undefined }
type PrefsCardAging = { value?: string | undefined }
type PrefsCardCovers = { value?: string | undefined }
type PrefsComments = { value?: string | undefined }
type PrefsInvitations = { value?: string | undefined }
type PrefsPermissionLevel = { value?: string | undefined }
type PrefsSelfJoin = { value?: string | undefined }
type PrefsVoting = { value?: string | undefined }
type BoardsSubscribed = { value?: string | undefined }
type Cards = {
  closed?: string | undefined
  desc?: string | undefined
  due?: string | undefined
  fileSource?: string | undefined
  idAttachmentCover?: string | undefined
  idBoard?: string | undefined
  idCardSource?: string | undefined
  idLabels?: string | undefined
  idList?: string | undefined
  idMembers?: string | undefined
  keepFromSource?: string | undefined
  labels?: string | undefined
  name?: string | undefined
  pos?: string | undefined
  subscribed?: string | undefined
  urlSource?: string | undefined
}
type ActionsComments = { text?: string | undefined }
type CardsActionsComments = { text?: string | undefined }
type CardsAttachments = {
  file?: string | undefined
  mimeType?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type CardsChecklistIdChecklistCurrentCheckItem = {
  idChecklist?: string | undefined
  name?: string | undefined
  pos?: string | undefined
  state?: string | undefined
}
type CardsChecklistCheckItem = { name?: string | undefined; pos?: string | undefined }
type CardsChecklistCheckItemName = { value?: string | undefined }
type CardsChecklistCheckItemPos = { value?: string | undefined }
type CardsChecklistCheckItemState = { value?: string | undefined }
type CardsChecklists = {
  idChecklistSource?: string | undefined
  name?: string | undefined
  value?: string | undefined
}
type CardsClosed = { value?: string | undefined }
type CardsDesc = { value?: string | undefined }
type CardsDue = { value?: string | undefined }
type CardsIdAttachmentCover = { value?: string | undefined }
type CardsIdBoard = { idList?: string | undefined; value?: string | undefined }
type CardsIdLabels = { value?: string | undefined }
type CardsIdList = { value?: string | undefined }
type CardsIdMembers = { value?: string | undefined }
type CardsLabels = {
  color?: string | undefined
  name?: string | undefined
  value?: string | undefined
}
type CardsMembersVoted = { value?: string | undefined }
type CardsName = { value?: string | undefined }
type CardsPos = { value?: string | undefined }
type CardsStickers = {
  image?: string | undefined
  left?: string | undefined
  rotate?: string | undefined
  top?: string | undefined
  zIndex?: string | undefined
}
type CardsSubscribed = { value?: string | undefined }
type Checklists = {
  idBoard?: string | undefined
  idCard?: string | undefined
  idChecklistSource?: string | undefined
  name?: string | undefined
  pos?: string | undefined
}
type ChecklistsCheckItems = {
  checked?: string | undefined
  name?: string | undefined
  pos?: string | undefined
}
type ChecklistsIdCard = { value?: string | undefined }
type ChecklistsName = { value?: string | undefined }
type ChecklistsPos = { value?: string | undefined }
type Labels = {
  color?: string | undefined
  idBoard?: string | undefined
  name?: string | undefined
}
type LabelsColor = { value?: string | undefined }
type LabelsName = { value?: string | undefined }
type Lists = {
  closed?: string | undefined
  idBoard?: string | undefined
  idListSource?: string | undefined
  name?: string | undefined
  pos?: string | undefined
  subscribed?: string | undefined
}
type ListsCards = {
  desc?: string | undefined
  due?: string | undefined
  idMembers?: string | undefined
  labels?: string | undefined
  name?: string | undefined
}
type ListsClosed = { value?: string | undefined }
type ListsIdBoard = { pos?: string | undefined; value?: string | undefined }
type ListsMoveAllCards = { idBoard?: string | undefined }
type ListsName = { value?: string | undefined }
type ListsPos = { value?: string | undefined }
type ListsSubscribed = { value?: string | undefined }
type Members = {
  avatarSource?: string | undefined
  bio?: string | undefined
  fullName?: string | undefined
  initials?: string | undefined
  'prefs/colorBlind'?: string | undefined
  'prefs/locale'?: string | undefined
  'prefs/minutesBetweenSummaries'?: string | undefined
  username?: string | undefined
}
type MembersAvatar = { file?: string | undefined }
type MembersAvatarSource = { value?: string | undefined }
type MembersBio = { value?: string | undefined }
type MembersBoardBackgrounds = {
  brightness?: string | undefined
  file?: string | undefined
  tile?: string | undefined
}
type MembersBoardStars = { idBoard?: string | undefined; pos?: string | undefined }
type MembersBoardStarsIdBoard = { value?: string | undefined }
type MembersBoardStarsPos = { value?: string | undefined }
type MembersCustomBoardBackgrounds = {
  brightness?: string | undefined
  file?: string | undefined
  tile?: string | undefined
}
type MembersCustomEmoji = { file?: string | undefined; name?: string | undefined }
type MembersCustomStickers = { file?: string | undefined }
type MembersFullName = { value?: string | undefined }
type MembersInitials = { value?: string | undefined }
type MembersOneTimeMessagesDismissed = { value?: string | undefined }
type PrefsColorBlind = { value?: string | undefined }
type PrefsLocale = { value?: string | undefined }
type PrefsMinutesBetweenSummaries = { value?: string | undefined }
type MembersSavedSearches = {
  name?: string | undefined
  pos?: string | undefined
  query?: string | undefined
}
type MembersSavedSearchesName = { value?: string | undefined }
type MembersSavedSearchesPos = { value?: string | undefined }
type MembersSavedSearchesQuery = { value?: string | undefined }
type MembersUsername = { value?: string | undefined }
type Notifications = { unread?: string | undefined }
type NotificationsUnread = { value?: string | undefined }
type Organizations = {
  desc?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  'prefs/associatedDomain'?: string | undefined
  'prefs/boardVisibilityRestrict/org'?: string | undefined
  'prefs/boardVisibilityRestrict/private'?: string | undefined
  'prefs/boardVisibilityRestrict/public'?: string | undefined
  'prefs/externalMembersDisabled'?: string | undefined
  'prefs/googleAppsVersion'?: string | undefined
  'prefs/orgInviteRestrict'?: string | undefined
  'prefs/permissionLevel'?: string | undefined
  website?: string | undefined
}
type OrganizationsDesc = { value?: string | undefined }
type OrganizationsDisplayName = { value?: string | undefined }
type OrganizationsLogo = { file?: string | undefined }
type OrganizationsMembers = {
  email?: string | undefined
  fullName?: string | undefined
  type?: string | undefined
}
type OrganizationsMembersDeactivated = { value?: string | undefined }
type OrganizationsMemberships = { member_fields?: string | undefined; type?: string | undefined }
type OrganizationsName = { value?: string | undefined }
type PrefsAssociatedDomain = { value?: string | undefined }
type PrefsBoardVisibilityRestrict = { value?: string | undefined }
type PrefsExternalMembersDisabled = { value?: string | undefined }
type PrefsGoogleAppsVersion = { value?: string | undefined }
type PrefsOrgInviteRestrict = { value?: string | undefined }
type OrganizationsWebsite = { value?: string | undefined }
type Sessions = { idBoard?: string | undefined; status?: string | undefined }
type SessionsStatus = { value?: string | undefined }
type TokensWebhooks = {
  callbackURL?: string | undefined
  description?: string | undefined
  idModel?: string | undefined
}
type Webhooks = {
  active?: string | undefined
  callbackURL?: string | undefined
  description?: string | undefined
  idModel?: string | undefined
}
type WebhooksActive = { value?: string | undefined }
type WebhooksCallbackURL = { value?: string | undefined }
type WebhooksDescription = { value?: string | undefined }
type WebhooksIdModel = { value?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/actions/:idAction': {
      $delete:
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idAction: string } } & {
              query: {
                display?: string | undefined
                entities?: string | undefined
                fields?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & {
              query: {
                display?: string | undefined
                entities?: string | undefined
                fields?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } } & {
              json: Actions
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } } & {
              json: Actions
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/board': {
      $get:
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/board/:field': {
      $get:
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/card': {
      $get:
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/card/:field': {
      $get:
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/display': {
      $get:
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/entities': {
      $get:
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/list': {
      $get:
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/list/:field': {
      $get:
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/member': {
      $get:
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/member/:field': {
      $get:
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/memberCreator': {
      $get:
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/memberCreator/:field': {
      $get:
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/organization': {
      $get:
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/organization/:field': {
      $get:
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/text': {
      $put:
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } } & {
              json: ActionsText
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string } } & { query: { key: string; token: string } } & {
              json: ActionsText
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/actions/:idAction/:field': {
      $get:
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idAction: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/batch': {
      $get:
        | {
            input: { query: { urls: string; key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { urls: string; key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Boards }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Boards }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_format?: string | undefined
                actions_since?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_member?: string | undefined
                action_member_fields?: string | undefined
                action_memberCreator?: string | undefined
                action_memberCreator_fields?: string | undefined
                cards?: string | undefined
                card_fields?: string | undefined
                card_attachments?: string | undefined
                card_attachment_fields?: string | undefined
                card_checklists?: string | undefined
                card_stickers?: string | undefined
                boardStars?: string | undefined
                labels?: string | undefined
                label_fields?: string | undefined
                labels_limit?: string | undefined
                lists?: string | undefined
                list_fields?: string | undefined
                memberships?: string | undefined
                memberships_member?: string | undefined
                memberships_member_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                membersInvited?: string | undefined
                membersInvited_fields?: string | undefined
                checklists?: string | undefined
                checklist_fields?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                organization_memberships?: string | undefined
                myPrefs?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_format?: string | undefined
                actions_since?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_member?: string | undefined
                action_member_fields?: string | undefined
                action_memberCreator?: string | undefined
                action_memberCreator_fields?: string | undefined
                cards?: string | undefined
                card_fields?: string | undefined
                card_attachments?: string | undefined
                card_attachment_fields?: string | undefined
                card_checklists?: string | undefined
                card_stickers?: string | undefined
                boardStars?: string | undefined
                labels?: string | undefined
                label_fields?: string | undefined
                labels_limit?: string | undefined
                lists?: string | undefined
                list_fields?: string | undefined
                memberships?: string | undefined
                memberships_member?: string | undefined
                memberships_member_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                membersInvited?: string | undefined
                membersInvited_fields?: string | undefined
                checklists?: string | undefined
                checklist_fields?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                organization_memberships?: string | undefined
                myPrefs?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: Boards
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: Boards
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/actions': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/boardStars': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/calendarKey/generate': {
      $post:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/cards': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/cards/:filter': {
      $get:
        | {
            input: { param: { idBoard: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/cards/:idCard': {
      $get:
        | {
            input: { param: { idBoard: string; idCard: string } } & {
              query: {
                attachments?: string | undefined
                attachment_fields?: string | undefined
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_memberCreator_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checkItemState_fields?: string | undefined
                labels?: string | undefined
                checklists?: string | undefined
                checklist_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; idCard: string } } & {
              query: {
                attachments?: string | undefined
                attachment_fields?: string | undefined
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_memberCreator_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checkItemState_fields?: string | undefined
                labels?: string | undefined
                checklists?: string | undefined
                checklist_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/checklists': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                checkItems?: string | undefined
                checkItem_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                checkItems?: string | undefined
                checkItem_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsChecklists
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsChecklists
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/closed': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsClosed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsClosed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/deltas': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: { tags: string; ixLastUpdate: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: { tags: string; ixLastUpdate: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/desc': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsDesc
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsDesc
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/emailKey/generate': {
      $post:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/idOrganization': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsIdOrganization
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsIdOrganization
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labelNames/blue': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesBlue
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesBlue
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labelNames/green': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesGreen
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesGreen
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labelNames/orange': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesOrange
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesOrange
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labelNames/purple': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesPurple
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesPurple
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labelNames/red': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesRed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesRed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labelNames/yellow': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesYellow
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: LabelNamesYellow
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labels': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                fields?: string | undefined
                limit?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                fields?: string | undefined
                limit?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsLabels
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsLabels
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/labels/:idLabel': {
      $get:
        | {
            input: { param: { idBoard: string; idLabel: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; idLabel: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/lists': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsLists
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsLists
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/lists/:filter': {
      $get:
        | {
            input: { param: { idBoard: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/markAsViewed': {
      $post:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/members': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                activity?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                activity?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsMembers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsMembers
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/members/:filter': {
      $get:
        | {
            input: { param: { idBoard: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/members/:idMember': {
      $delete:
        | {
            input: { param: { idBoard: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idBoard: string; idMember: string } } & {
              query: { key: string; token: string }
            } & { json: BoardsMembers }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; idMember: string } } & {
              query: { key: string; token: string }
            } & { json: BoardsMembers }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/members/:idMember/cards': {
      $get:
        | {
            input: { param: { idBoard: string; idMember: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                list_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; idMember: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                list_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/membersInvited': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/membersInvited/:field': {
      $get:
        | {
            input: { param: { idBoard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/memberships': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: {
                filter?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: {
                filter?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/memberships/:idMembership': {
      $get:
        | {
            input: { param: { idBoard: string; idMembership: string } } & {
              query: {
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; idMembership: string } } & {
              query: {
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idBoard: string; idMembership: string } } & {
              query: { key: string; token: string }
            } & { json: BoardsMemberships }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; idMembership: string } } & {
              query: { key: string; token: string }
            } & { json: BoardsMemberships }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs': {
      $get:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs/emailPosition': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsEmailPosition
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsEmailPosition
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs/idEmailList': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsIdEmailList
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsIdEmailList
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs/showListGuide': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowListGuide
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowListGuide
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs/showSidebar': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebar
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebar
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs/showSidebarActivity': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebarActivity
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebarActivity
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs/showSidebarBoardActions': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebarBoardActions
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebarBoardActions
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/myPrefs/showSidebarMembers': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebarMembers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: MyPrefsShowSidebarMembers
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/name': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsName
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsName
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/organization': {
      $get:
        | {
            input: { param: { idBoard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/organization/:field': {
      $get:
        | {
            input: { param: { idBoard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/powerUps': {
      $post:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsPowerUps
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsPowerUps
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/powerUps/:powerUp': {
      $delete:
        | {
            input: { param: { idBoard: string; powerUp: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; powerUp: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/background': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsBackground
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsBackground
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/calendarFeedEnabled': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsCalendarFeedEnabled
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsCalendarFeedEnabled
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/cardAging': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsCardAging
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsCardAging
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/cardCovers': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsCardCovers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsCardCovers
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/comments': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsComments
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsComments
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/invitations': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsInvitations
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsInvitations
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/permissionLevel': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsPermissionLevel
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsPermissionLevel
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/selfJoin': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsSelfJoin
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsSelfJoin
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/prefs/voting': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsVoting
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: PrefsVoting
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/subscribed': {
      $put:
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsSubscribed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string } } & { query: { key: string; token: string } } & {
              json: BoardsSubscribed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/boards/:idBoard/:field': {
      $get:
        | {
            input: { param: { idBoard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idBoard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Cards }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Cards }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard': {
      $delete:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_memberCreator_fields?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                membersVoted?: string | undefined
                memberVoted_fields?: string | undefined
                checkItemStates?: string | undefined
                checkItemState_fields?: string | undefined
                checklists?: string | undefined
                checklist_fields?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                list_fields?: string | undefined
                stickers?: string | undefined
                sticker_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_memberCreator_fields?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                membersVoted?: string | undefined
                memberVoted_fields?: string | undefined
                checkItemStates?: string | undefined
                checkItemState_fields?: string | undefined
                checklists?: string | undefined
                checklist_fields?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                list_fields?: string | undefined
                stickers?: string | undefined
                sticker_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: Cards
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: Cards
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/actions': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/actions/comments': {
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: ActionsComments
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: ActionsComments
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/actions/:idAction/comments': {
      $delete:
        | {
            input: { param: { idCard: string; idAction: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idAction: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idCard: string; idAction: string } } & {
              query: { key: string; token: string }
            } & { json: CardsActionsComments }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idAction: string } } & {
              query: { key: string; token: string }
            } & { json: CardsActionsComments }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/attachments': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: {
                fields?: string | undefined
                filter?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: {
                fields?: string | undefined
                filter?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsAttachments
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsAttachments
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/attachments/:idAttachment': {
      $delete:
        | {
            input: { param: { idCard: string; idAttachment: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idAttachment: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idCard: string; idAttachment: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idAttachment: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/board': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/board/:field': {
      $get:
        | {
            input: { param: { idCard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checkItemStates': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklistCurrent/checkItem/:idCheckItem': {
      $put:
        | {
            input: {
              param: { idCard: string; idChecklistCurrent: string; idCheckItem: string }
            } & { query: { key: string; token: string } } & {
              json: CardsChecklistIdChecklistCurrentCheckItem
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { idCard: string; idChecklistCurrent: string; idCheckItem: string }
            } & { query: { key: string; token: string } } & {
              json: CardsChecklistIdChecklistCurrentCheckItem
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklist/checkItem': {
      $post:
        | {
            input: { param: { idCard: string; idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItem }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItem }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem': {
      $delete:
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/convertToCard': {
      $post:
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/name': {
      $put:
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItemName }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItemName }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/pos': {
      $put:
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItemPos }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItemPos }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/state': {
      $put:
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItemState }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            } & { json: CardsChecklistCheckItemState }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklists': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                checkItems?: string | undefined
                checkItem_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                checkItems?: string | undefined
                checkItem_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsChecklists
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsChecklists
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/checklists/:idChecklist': {
      $delete:
        | {
            input: { param: { idCard: string; idChecklist: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idChecklist: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/closed': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsClosed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsClosed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/desc': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsDesc
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsDesc
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/due': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsDue
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsDue
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/idAttachmentCover': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdAttachmentCover
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdAttachmentCover
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/idBoard': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdBoard
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdBoard
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/idLabels': {
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdLabels
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdLabels
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/idLabels/:idLabel': {
      $delete:
        | {
            input: { param: { idCard: string; idLabel: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idLabel: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/idList': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdList
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdList
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/idMembers': {
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdMembers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdMembers
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdMembers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsIdMembers
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/idMembers/:idMember': {
      $delete:
        | {
            input: { param: { idCard: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/labels': {
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsLabels
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsLabels
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsLabels
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsLabels
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/labels/:color': {
      $delete:
        | {
            input: { param: { idCard: string; color: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; color: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/list': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/list/:field': {
      $get:
        | {
            input: { param: { idCard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/markAssociatedNotificationsRead': {
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/members': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/membersVoted': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsMembersVoted
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsMembersVoted
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/membersVoted/:idMember': {
      $delete:
        | {
            input: { param: { idCard: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/name': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsName
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsName
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/pos': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsPos
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsPos
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/stickers': {
      $get:
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsStickers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsStickers
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/stickers/:idSticker': {
      $delete:
        | {
            input: { param: { idCard: string; idSticker: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idSticker: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idCard: string; idSticker: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idSticker: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idCard: string; idSticker: string } } & {
              query: { key: string; token: string }
            } & { json: CardsStickers }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; idSticker: string } } & {
              query: { key: string; token: string }
            } & { json: CardsStickers }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/subscribed': {
      $put:
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsSubscribed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string } } & { query: { key: string; token: string } } & {
              json: CardsSubscribed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/cards/:idCard/:field': {
      $get:
        | {
            input: { param: { idCard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idCard: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Checklists }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Checklists }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist': {
      $delete:
        | {
            input: { param: { idChecklist: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idChecklist: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                checkItems?: string | undefined
                checkItem_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                checkItems?: string | undefined
                checkItem_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: Checklists }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: Checklists }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/board': {
      $get:
        | {
            input: { param: { idChecklist: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/board/:field': {
      $get:
        | {
            input: { param: { idChecklist: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/cards': {
      $get:
        | {
            input: { param: { idChecklist: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/cards/:filter': {
      $get:
        | {
            input: { param: { idChecklist: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/checkItems': {
      $get:
        | {
            input: { param: { idChecklist: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsCheckItems }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsCheckItems }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/checkItems/:idCheckItem': {
      $delete:
        | {
            input: { param: { idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string; idCheckItem: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idChecklist: string; idCheckItem: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string; idCheckItem: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/idCard': {
      $put:
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsIdCard }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsIdCard }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/name': {
      $put:
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsName }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsName }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/pos': {
      $put:
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsPos }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string } } & {
              query: { key: string; token: string }
            } & { json: ChecklistsPos }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/checklists/:idChecklist/:field': {
      $get:
        | {
            input: { param: { idChecklist: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idChecklist: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/labels': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Labels }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Labels }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/labels/:idLabel': {
      $delete:
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idLabel: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idLabel: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } } & {
              json: Labels
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } } & {
              json: Labels
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/labels/:idLabel/board': {
      $get:
        | {
            input: { param: { idLabel: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idLabel: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/labels/:idLabel/board/:field': {
      $get:
        | {
            input: { param: { idLabel: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idLabel: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/labels/:idLabel/color': {
      $put:
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } } & {
              json: LabelsColor
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } } & {
              json: LabelsColor
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/labels/:idLabel/name': {
      $put:
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } } & {
              json: LabelsName
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idLabel: string } } & { query: { key: string; token: string } } & {
              json: LabelsName
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Lists }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Lists }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList': {
      $get:
        | {
            input: { param: { idList: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & {
              query: {
                cards?: string | undefined
                card_fields?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: Lists
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: Lists
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/actions': {
      $get:
        | {
            input: { param: { idList: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/archiveAllCards': {
      $post:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/board': {
      $get:
        | {
            input: { param: { idList: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/board/:field': {
      $get:
        | {
            input: { param: { idList: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/cards': {
      $get:
        | {
            input: { param: { idList: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsCards
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsCards
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/cards/:filter': {
      $get:
        | {
            input: { param: { idList: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/closed': {
      $put:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsClosed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsClosed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/idBoard': {
      $put:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsIdBoard
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsIdBoard
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/moveAllCards': {
      $post:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsMoveAllCards
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsMoveAllCards
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/name': {
      $put:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsName
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsName
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/pos': {
      $put:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsPos
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsPos
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/subscribed': {
      $put:
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsSubscribed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string } } & { query: { key: string; token: string } } & {
              json: ListsSubscribed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lists/:idList/:field': {
      $get:
        | {
            input: { param: { idList: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idList: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_since?: string | undefined
                action_before?: string | undefined
                cards?: string | undefined
                card_fields?: string | undefined
                card_members?: string | undefined
                card_member_fields?: string | undefined
                card_attachments?: string | undefined
                card_attachment_fields?: string | undefined
                card_stickers?: string | undefined
                boards?: string | undefined
                board_fields?: string | undefined
                board_actions?: string | undefined
                board_actions_entities?: string | undefined
                board_actions_display?: string | undefined
                board_actions_format?: string | undefined
                board_actions_since?: string | undefined
                board_actions_limit?: string | undefined
                board_action_fields?: string | undefined
                board_lists?: string | undefined
                board_memberships?: string | undefined
                board_organization?: string | undefined
                board_organization_fields?: string | undefined
                boardsInvited?: string | undefined
                boardsInvited_fields?: string | undefined
                boardStars?: string | undefined
                savedSearches?: string | undefined
                organizations?: string | undefined
                organization_fields?: string | undefined
                organization_paid_account?: string | undefined
                organizationsInvited?: string | undefined
                organizationsInvited_fields?: string | undefined
                notifications?: string | undefined
                notifications_entities?: string | undefined
                notifications_display?: string | undefined
                notifications_limit?: string | undefined
                notification_fields?: string | undefined
                notification_memberCreator?: string | undefined
                notification_memberCreator_fields?: string | undefined
                notification_before?: string | undefined
                notification_since?: string | undefined
                tokens?: string | undefined
                paid_account?: string | undefined
                boardBackgrounds?: string | undefined
                customBoardBackgrounds?: string | undefined
                customStickers?: string | undefined
                customEmoji?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                action_since?: string | undefined
                action_before?: string | undefined
                cards?: string | undefined
                card_fields?: string | undefined
                card_members?: string | undefined
                card_member_fields?: string | undefined
                card_attachments?: string | undefined
                card_attachment_fields?: string | undefined
                card_stickers?: string | undefined
                boards?: string | undefined
                board_fields?: string | undefined
                board_actions?: string | undefined
                board_actions_entities?: string | undefined
                board_actions_display?: string | undefined
                board_actions_format?: string | undefined
                board_actions_since?: string | undefined
                board_actions_limit?: string | undefined
                board_action_fields?: string | undefined
                board_lists?: string | undefined
                board_memberships?: string | undefined
                board_organization?: string | undefined
                board_organization_fields?: string | undefined
                boardsInvited?: string | undefined
                boardsInvited_fields?: string | undefined
                boardStars?: string | undefined
                savedSearches?: string | undefined
                organizations?: string | undefined
                organization_fields?: string | undefined
                organization_paid_account?: string | undefined
                organizationsInvited?: string | undefined
                organizationsInvited_fields?: string | undefined
                notifications?: string | undefined
                notifications_entities?: string | undefined
                notifications_display?: string | undefined
                notifications_limit?: string | undefined
                notification_fields?: string | undefined
                notification_memberCreator?: string | undefined
                notification_memberCreator_fields?: string | undefined
                notification_before?: string | undefined
                notification_since?: string | undefined
                tokens?: string | undefined
                paid_account?: string | undefined
                boardBackgrounds?: string | undefined
                customBoardBackgrounds?: string | undefined
                customStickers?: string | undefined
                customEmoji?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: Members
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: Members
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/actions': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/avatar': {
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersAvatar
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersAvatar
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/avatarSource': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersAvatarSource
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersAvatarSource
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/bio': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersBio
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersBio
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardBackgrounds': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersBoardBackgrounds
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersBoardBackgrounds
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardBackgrounds/:idBoardBackground': {
      $delete:
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardBackgrounds }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardBackgrounds }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardStars': {
      $get:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersBoardStars
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersBoardStars
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardStars/:idBoardStar': {
      $delete:
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardStars }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardStars }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardStars/:idBoardStar/idBoard': {
      $put:
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardStarsIdBoard }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardStarsIdBoard }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardStars/:idBoardStar/pos': {
      $put:
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardStarsPos }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardStar: string } } & {
              query: { key: string; token: string }
            } & { json: MembersBoardStarsPos }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boards': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_limit?: string | undefined
                actions_format?: string | undefined
                actions_since?: string | undefined
                action_fields?: string | undefined
                memberships?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                lists?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_limit?: string | undefined
                actions_format?: string | undefined
                actions_since?: string | undefined
                action_fields?: string | undefined
                memberships?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                lists?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boards/:filter': {
      $get:
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardsInvited': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/boardsInvited/:field': {
      $get:
        | {
            input: { param: { idMember: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/cards': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                stickers?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                limit?: string | undefined
                since?: string | undefined
                before?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/cards/:filter': {
      $get:
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/customBoardBackgrounds': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersCustomBoardBackgrounds
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersCustomBoardBackgrounds
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/customBoardBackgrounds/:idBoardBackground': {
      $delete:
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            } & { json: MembersCustomBoardBackgrounds }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idBoardBackground: string } } & {
              query: { key: string; token: string }
            } & { json: MembersCustomBoardBackgrounds }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/customEmoji': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersCustomEmoji
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersCustomEmoji
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/customEmoji/:idCustomEmoji': {
      $get:
        | {
            input: { param: { idMember: string; idCustomEmoji: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idCustomEmoji: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/customStickers': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersCustomStickers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersCustomStickers
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/customStickers/:idCustomSticker': {
      $delete:
        | {
            input: { param: { idMember: string; idCustomSticker: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idCustomSticker: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idMember: string; idCustomSticker: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idCustomSticker: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/deltas': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { tags: string; ixLastUpdate: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { tags: string; ixLastUpdate: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/fullName': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersFullName
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersFullName
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/initials': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersInitials
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersInitials
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/notifications': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                read_filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                page?: string | undefined
                before?: string | undefined
                since?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                read_filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                page?: string | undefined
                before?: string | undefined
                since?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/notifications/:filter': {
      $get:
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/oneTimeMessagesDismissed': {
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersOneTimeMessagesDismissed
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersOneTimeMessagesDismissed
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/organizations': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                paid_account?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                paid_account?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/organizations/:filter': {
      $get:
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/organizationsInvited': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/organizationsInvited/:field': {
      $get:
        | {
            input: { param: { idMember: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/prefs/colorBlind': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: PrefsColorBlind
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: PrefsColorBlind
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/prefs/locale': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: PrefsLocale
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: PrefsLocale
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/prefs/minutesBetweenSummaries': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: PrefsMinutesBetweenSummaries
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: PrefsMinutesBetweenSummaries
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/savedSearches': {
      $get:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersSavedSearches
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersSavedSearches
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/savedSearches/:idSavedSearch': {
      $delete:
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearches }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearches }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/savedSearches/:idSavedSearch/name': {
      $put:
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearchesName }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearchesName }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/savedSearches/:idSavedSearch/pos': {
      $put:
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearchesPos }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearchesPos }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/savedSearches/:idSavedSearch/query': {
      $put:
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearchesQuery }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; idSavedSearch: string } } & {
              query: { key: string; token: string }
            } & { json: MembersSavedSearchesQuery }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/tokens': {
      $get:
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & {
              query: { filter?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/username': {
      $put:
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersUsername
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string } } & { query: { key: string; token: string } } & {
              json: MembersUsername
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/members/:idMember/:field': {
      $get:
        | {
            input: { param: { idMember: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idMember: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/all/read': {
      $post:
        | {
            input: { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification': {
      $get:
        | {
            input: { param: { idNotification: string } } & {
              query: {
                display?: string | undefined
                entities?: string | undefined
                fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                card?: string | undefined
                card_fields?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: {
                display?: string | undefined
                entities?: string | undefined
                fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                card?: string | undefined
                card_fields?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idNotification: string } } & {
              query: { key: string; token: string }
            } & { json: Notifications }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { key: string; token: string }
            } & { json: Notifications }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/board': {
      $get:
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/board/:field': {
      $get:
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/card': {
      $get:
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/card/:field': {
      $get:
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/display': {
      $get:
        | {
            input: { param: { idNotification: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/entities': {
      $get:
        | {
            input: { param: { idNotification: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/list': {
      $get:
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/list/:field': {
      $get:
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/member': {
      $get:
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/member/:field': {
      $get:
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/memberCreator': {
      $get:
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/memberCreator/:field': {
      $get:
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/organization': {
      $get:
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/organization/:field': {
      $get:
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/unread': {
      $put:
        | {
            input: { param: { idNotification: string } } & {
              query: { key: string; token: string }
            } & { json: NotificationsUnread }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string } } & {
              query: { key: string; token: string }
            } & { json: NotificationsUnread }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/notifications/:idNotification/:field': {
      $get:
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idNotification: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Organizations }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Organizations }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg': {
      $delete:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idOrg: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                memberships?: string | undefined
                memberships_member?: string | undefined
                memberships_member_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                member_activity?: string | undefined
                membersInvited?: string | undefined
                membersInvited_fields?: string | undefined
                boards?: string | undefined
                board_fields?: string | undefined
                board_actions?: string | undefined
                board_actions_entities?: string | undefined
                board_actions_display?: string | undefined
                board_actions_format?: string | undefined
                board_actions_since?: string | undefined
                board_actions_limit?: string | undefined
                board_action_fields?: string | undefined
                board_lists?: string | undefined
                paid_account?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: {
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_display?: string | undefined
                actions_limit?: string | undefined
                action_fields?: string | undefined
                memberships?: string | undefined
                memberships_member?: string | undefined
                memberships_member_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                member_activity?: string | undefined
                membersInvited?: string | undefined
                membersInvited_fields?: string | undefined
                boards?: string | undefined
                board_fields?: string | undefined
                board_actions?: string | undefined
                board_actions_entities?: string | undefined
                board_actions_display?: string | undefined
                board_actions_format?: string | undefined
                board_actions_since?: string | undefined
                board_actions_limit?: string | undefined
                board_action_fields?: string | undefined
                board_lists?: string | undefined
                paid_account?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: Organizations
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: Organizations
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/actions': {
      $get:
        | {
            input: { param: { idOrg: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: {
                entities?: string | undefined
                display?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                limit?: string | undefined
                format?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: string | undefined
                idModels?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                memberCreator?: string | undefined
                memberCreator_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/boards': {
      $get:
        | {
            input: { param: { idOrg: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_limit?: string | undefined
                actions_format?: string | undefined
                actions_since?: string | undefined
                action_fields?: string | undefined
                memberships?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                lists?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                actions?: string | undefined
                actions_entities?: string | undefined
                actions_limit?: string | undefined
                actions_format?: string | undefined
                actions_since?: string | undefined
                action_fields?: string | undefined
                memberships?: string | undefined
                organization?: string | undefined
                organization_fields?: string | undefined
                lists?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/boards/:filter': {
      $get:
        | {
            input: { param: { idOrg: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/deltas': {
      $get:
        | {
            input: { param: { idOrg: string } } & {
              query: { tags: string; ixLastUpdate: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: { tags: string; ixLastUpdate: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/desc': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsDesc
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsDesc
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/displayName': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsDisplayName
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsDisplayName
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/logo': {
      $delete:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsLogo
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsLogo
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/members': {
      $get:
        | {
            input: { param: { idOrg: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                activity?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: {
                filter?: string | undefined
                fields?: string | undefined
                activity?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsMembers
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsMembers
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/members/:filter': {
      $get:
        | {
            input: { param: { idOrg: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; filter: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/members/:idMember': {
      $delete:
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            } & { json: OrganizationsMembers }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            } & { json: OrganizationsMembers }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/members/:idMember/all': {
      $delete:
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/members/:idMember/cards': {
      $get:
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                list_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: {
                actions?: string | undefined
                attachments?: string | undefined
                attachment_fields?: string | undefined
                members?: string | undefined
                member_fields?: string | undefined
                checkItemStates?: string | undefined
                checklists?: string | undefined
                board?: string | undefined
                board_fields?: string | undefined
                list?: string | undefined
                list_fields?: string | undefined
                filter?: string | undefined
                fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/members/:idMember/deactivated': {
      $put:
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            } & { json: OrganizationsMembersDeactivated }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; idMember: string } } & {
              query: { key: string; token: string }
            } & { json: OrganizationsMembersDeactivated }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/membersInvited': {
      $get:
        | {
            input: { param: { idOrg: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/membersInvited/:field': {
      $get:
        | {
            input: { param: { idOrg: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/memberships': {
      $get:
        | {
            input: { param: { idOrg: string } } & {
              query: {
                filter?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: {
                filter?: string | undefined
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/memberships/:idMembership': {
      $get:
        | {
            input: { param: { idOrg: string; idMembership: string } } & {
              query: {
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; idMembership: string } } & {
              query: {
                member?: string | undefined
                member_fields?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idOrg: string; idMembership: string } } & {
              query: { key: string; token: string }
            } & { json: OrganizationsMemberships }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; idMembership: string } } & {
              query: { key: string; token: string }
            } & { json: OrganizationsMemberships }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/name': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsName
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsName
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/associatedDomain': {
      $delete:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsAssociatedDomain
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsAssociatedDomain
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/org': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsBoardVisibilityRestrict
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsBoardVisibilityRestrict
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/private': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsBoardVisibilityRestrict
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsBoardVisibilityRestrict
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/public': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsBoardVisibilityRestrict
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsBoardVisibilityRestrict
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/externalMembersDisabled': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsExternalMembersDisabled
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsExternalMembersDisabled
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/googleAppsVersion': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsGoogleAppsVersion
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsGoogleAppsVersion
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/orgInviteRestrict': {
      $delete:
        | {
            input: { param: { idOrg: string } } & {
              query: { value: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & {
              query: { value: string; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsOrgInviteRestrict
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsOrgInviteRestrict
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/prefs/permissionLevel': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsPermissionLevel
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: PrefsPermissionLevel
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/website': {
      $put:
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsWebsite
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string } } & { query: { key: string; token: string } } & {
              json: OrganizationsWebsite
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organizations/:idOrg/:field': {
      $get:
        | {
            input: { param: { idOrg: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrg: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                query: string
                idBoards?: string | undefined
                idOrganizations: string
                idCards?: string | undefined
                modelTypes?: string | undefined
                board_fields?: string | undefined
                boards_limit?: string | undefined
                card_fields?: string | undefined
                cards_limit?: string | undefined
                cards_page?: string | undefined
                card_board?: string | undefined
                card_list?: string | undefined
                card_members?: string | undefined
                card_stickers?: string | undefined
                card_attachments?: string | undefined
                organization_fields?: string | undefined
                organizations_limit?: string | undefined
                member_fields?: string | undefined
                members_limit?: string | undefined
                partial?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                idBoards?: string | undefined
                idOrganizations: string
                idCards?: string | undefined
                modelTypes?: string | undefined
                board_fields?: string | undefined
                boards_limit?: string | undefined
                card_fields?: string | undefined
                cards_limit?: string | undefined
                cards_page?: string | undefined
                card_board?: string | undefined
                card_list?: string | undefined
                card_members?: string | undefined
                card_stickers?: string | undefined
                card_attachments?: string | undefined
                organization_fields?: string | undefined
                organizations_limit?: string | undefined
                member_fields?: string | undefined
                members_limit?: string | undefined
                partial?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/search/members': {
      $get:
        | {
            input: {
              query: {
                query: string
                limit?: string | undefined
                idBoard?: string | undefined
                idOrganization?: string | undefined
                onlyOrgMembers?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                limit?: string | undefined
                idBoard?: string | undefined
                idOrganization?: string | undefined
                onlyOrgMembers?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/sessions': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Sessions }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Sessions }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/sessions/socket': {
      $get:
        | {
            input: { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/sessions/:idSession': {
      $put:
        | {
            input: { param: { idSession: string } } & { query: { key: string; token: string } } & {
              json: Sessions
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idSession: string } } & { query: { key: string; token: string } } & {
              json: Sessions
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/sessions/:idSession/status': {
      $put:
        | {
            input: { param: { idSession: string } } & { query: { key: string; token: string } } & {
              json: SessionsStatus
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idSession: string } } & { query: { key: string; token: string } } & {
              json: SessionsStatus
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/tokens/:token': {
      $delete:
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { token: string } } & {
              query: {
                fields?: string | undefined
                webhooks?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              query: {
                fields?: string | undefined
                webhooks?: string | undefined
                key: string
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/tokens/:token/member': {
      $get:
        | {
            input: { param: { token: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              query: { fields?: string | undefined; key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/tokens/:token/member/:field': {
      $get:
        | {
            input: { param: { token: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/tokens/:token/webhooks': {
      $get:
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } } & {
              json: TokensWebhooks
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } } & {
              json: TokensWebhooks
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } } & {
              json: TokensWebhooks
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & { query: { key: string; token: string } } & {
              json: TokensWebhooks
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/tokens/:token/webhooks/:idWebhook': {
      $delete:
        | {
            input: { param: { token: string; idWebhook: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string; idWebhook: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { token: string; idWebhook: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string; idWebhook: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/tokens/:token/:field': {
      $get:
        | {
            input: { param: { token: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/types/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks': {
      $post:
        | {
            input: { query: { key: string; token: string } } & { json: Webhooks }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Webhooks }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks/': {
      $put:
        | {
            input: { query: { key: string; token: string } } & { json: Webhooks }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { key: string; token: string } } & { json: Webhooks }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks/:idWebhook': {
      $delete:
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: Webhooks
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: Webhooks
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks/:idWebhook/active': {
      $put:
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksActive
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksActive
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks/:idWebhook/callbackURL': {
      $put:
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksCallbackURL
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksCallbackURL
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks/:idWebhook/description': {
      $put:
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksDescription
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksDescription
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks/:idWebhook/idModel': {
      $put:
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksIdModel
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string } } & { query: { key: string; token: string } } & {
              json: WebhooksIdModel
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/webhooks/:idWebhook/:field': {
      $get:
        | {
            input: { param: { idWebhook: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idWebhook: string; field: string } } & {
              query: { key: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes
