type DefsOkTrue = true
type DefsOkFalse = false
type DefsChannelId = string
type DefsTeam = string
type DefsUserId = string
type DefsTs = string
type DefsChannelName = string
type DefsTopicPurposeCreator = string
type ObjsChannel = {
  accepted_user?: DefsUserId | undefined
  created: number
  creator: DefsUserId
  id: DefsChannelId
  is_archived?: boolean | undefined
  is_channel: boolean
  is_frozen?: boolean | undefined
  is_general?: boolean | undefined
  is_member?: boolean | undefined
  is_moved?: number | undefined
  is_mpim: boolean
  is_non_threadable?: boolean | undefined
  is_org_shared: boolean
  is_pending_ext_shared?: boolean | undefined
  is_private: boolean
  is_read_only?: boolean | undefined
  is_shared: boolean
  is_thread_only?: boolean | undefined
  last_read?: DefsTs | undefined
  latest?: { [x: string]: unknown } | undefined
  members: DefsUserId[]
  name: string
  name_normalized: string
  num_members?: number | undefined
  pending_shared?: DefsTeam[] | undefined
  previous_names?: DefsChannelName[] | undefined
  priority?: number | undefined
  purpose: { creator: DefsTopicPurposeCreator; last_set: number; value: string }
  topic: { creator: DefsTopicPurposeCreator; last_set: number; value: string }
  unlinked?: number | undefined
  unread_count?: number | undefined
  unread_count_display?: number | undefined
}
type ObjsResources = {
  excluded_ids?: { [x: string]: unknown }[] | undefined
  ids: { [x: string]: unknown }[]
  wildcard?: boolean | undefined
}
type ObjsScopes = string[]
type DefsBotId = string
type DefsAppId = string
type DefsChannel = string
type Blocks = { type: string }[]
type ObjsBotProfile = {
  app_id: DefsAppId
  deleted: boolean
  icons: { image_36: string; image_48: string; image_72: string }
  id: DefsBotId
  name: string
  team_id: DefsTeam
  updated: number
}
type DefsCommentId = string
type DefsPinnedInfo = {}
type ObjsReaction = { count: number; name: string; users: DefsUserId[] }
type ObjsComment = {
  comment: string
  created: number
  id: DefsCommentId
  is_intro: boolean
  is_starred?: boolean | undefined
  num_stars?: number | undefined
  pinned_info?: DefsPinnedInfo | undefined
  pinned_to?: DefsChannel[] | undefined
  reactions?: ObjsReaction[] | undefined
  timestamp: number
  user: DefsUserId
}
type DefsGroupId = string
type DefsFileId = string
type DefsDmId = string
type ObjsFile = {
  channels?: DefsChannelId[] | undefined
  comments_count?: number | undefined
  created?: number | undefined
  date_delete?: number | undefined
  display_as_bot?: boolean | undefined
  editable?: boolean | undefined
  editor?: DefsUserId | undefined
  external_id?: string | undefined
  external_type?: string | undefined
  external_url?: string | undefined
  filetype?: string | undefined
  groups?: DefsGroupId[] | undefined
  has_rich_preview?: boolean | undefined
  id?: DefsFileId | undefined
  image_exif_rotation?: number | undefined
  ims?: DefsDmId[] | undefined
  is_external?: boolean | undefined
  is_public?: boolean | undefined
  is_starred?: boolean | undefined
  is_tombstoned?: boolean | undefined
  last_editor?: DefsUserId | undefined
  mimetype?: string | undefined
  mode?: string | undefined
  name?: string | undefined
  non_owner_editable?: boolean | undefined
  num_stars?: number | undefined
  original_h?: number | undefined
  original_w?: number | undefined
  permalink?: string | undefined
  permalink_public?: string | undefined
  pinned_info?: DefsPinnedInfo | undefined
  pinned_to?: DefsChannel[] | undefined
  pretty_type?: string | undefined
  preview?: string | undefined
  public_url_shared?: boolean | undefined
  reactions?: ObjsReaction[] | undefined
  shares?: { private?: {} | undefined; public?: {} | undefined } | undefined
  size?: number | undefined
  source_team?: DefsTeam | undefined
  state?: string | undefined
  thumb_1024?: string | undefined
  thumb_1024_h?: number | undefined
  thumb_1024_w?: number | undefined
  thumb_160?: string | undefined
  thumb_360?: string | undefined
  thumb_360_h?: number | undefined
  thumb_360_w?: number | undefined
  thumb_480?: string | undefined
  thumb_480_h?: number | undefined
  thumb_480_w?: number | undefined
  thumb_64?: string | undefined
  thumb_720?: string | undefined
  thumb_720_h?: number | undefined
  thumb_720_w?: number | undefined
  thumb_80?: string | undefined
  thumb_800?: string | undefined
  thumb_800_h?: number | undefined
  thumb_800_w?: number | undefined
  thumb_960?: string | undefined
  thumb_960_h?: number | undefined
  thumb_960_w?: number | undefined
  thumb_tiny?: string | undefined
  timestamp?: number | undefined
  title?: string | undefined
  updated?: number | undefined
  url_private?: string | undefined
  url_private_download?: string | undefined
  user?: string | undefined
  user_team?: DefsTeam | undefined
  username?: string | undefined
}
type DefsWorkspaceId = string
type ObjsUserProfileShort = {
  avatar_hash: string
  display_name: string
  display_name_normalized?: string | undefined
  first_name: string | null
  image_72: string
  is_restricted: boolean
  is_ultra_restricted: boolean
  name: string
  real_name: string
  real_name_normalized?: string | undefined
  team: DefsWorkspaceId
}
type ObjsMessage = {
  attachments?:
    | {
        fallback?: string | undefined
        id: number
        image_bytes?: number | undefined
        image_height?: number | undefined
        image_url?: string | undefined
        image_width?: number | undefined
      }[]
    | undefined
  blocks?: Blocks | undefined
  bot_id?: { [x: string]: unknown } | undefined
  bot_profile?: ObjsBotProfile | undefined
  client_msg_id?: string | undefined
  comment?: ObjsComment | undefined
  display_as_bot?: boolean | undefined
  file?: ObjsFile | undefined
  files?: ObjsFile[] | undefined
  icons?: { emoji?: string | undefined; image_64?: string | undefined } | undefined
  inviter?: DefsUserId | undefined
  is_delayed_message?: boolean | undefined
  is_intro?: boolean | undefined
  is_starred?: boolean | undefined
  last_read?: DefsTs | undefined
  latest_reply?: DefsTs | undefined
  name?: string | undefined
  old_name?: string | undefined
  parent_user_id?: DefsUserId | undefined
  permalink?: string | undefined
  pinned_to?: DefsChannel[] | undefined
  purpose?: string | undefined
  reactions?: ObjsReaction[] | undefined
  reply_count?: number | undefined
  reply_users?: DefsUserId[] | undefined
  reply_users_count?: number | undefined
  source_team?: DefsWorkspaceId | undefined
  subscribed?: boolean | undefined
  subtype?: string | undefined
  team?: DefsWorkspaceId | undefined
  text: string
  thread_ts?: DefsTs | undefined
  topic?: string | undefined
  ts: DefsTs
  type: string
  unread_count?: number | undefined
  upload?: boolean | undefined
  user?: DefsUserId | undefined
  user_profile?: ObjsUserProfileShort | undefined
  user_team?: DefsWorkspaceId | undefined
  username?: string | undefined
}
type ObjsConversation = { [x: string]: unknown }
type ObjsComments = { [x: string]: unknown }[]
type ObjsPaging = {
  count?: number | undefined
  page: number
  pages?: number | undefined
  per_page?: number | undefined
  spill?: number | undefined
  total: number
}
type ObjsResponseMetadata = { [x: string]: unknown }
type DefsReminderId = string
type ObjsReminder = {
  complete_ts?: number | undefined
  creator: DefsUserId
  id: DefsReminderId
  recurring: boolean
  text: string
  time?: number | undefined
  user: DefsUserId
}
type DefsEnterpriseId = string
type DefsEnterpriseName = string
type ObjsExternalOrgMigrations = {
  current: { date_started: number; team_id: string }[]
  date_updated: number
}
type ObjsIcon = {
  image_102?: string | undefined
  image_132?: string | undefined
  image_230?: string | undefined
  image_34?: string | undefined
  image_44?: string | undefined
  image_68?: string | undefined
  image_88?: string | undefined
  image_default?: boolean | undefined
}
type ObjsPrimaryOwner = { email: string; id: string }
type ObjsTeam = {
  archived?: boolean | undefined
  avatar_base_url?: string | undefined
  created?: number | undefined
  date_create?: number | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  discoverable?: { [x: string]: unknown } | undefined
  domain: string
  email_domain: string
  enterprise_id?: DefsEnterpriseId | undefined
  enterprise_name?: DefsEnterpriseName | undefined
  external_org_migrations?: ObjsExternalOrgMigrations | undefined
  has_compliance_export?: boolean | undefined
  icon: ObjsIcon
  id: DefsWorkspaceId
  is_assigned?: boolean | undefined
  is_enterprise?: number | undefined
  is_over_storage_limit?: boolean | undefined
  limit_ts?: number | undefined
  locale?: string | undefined
  messages_count?: number | undefined
  msg_edit_window_mins?: number | undefined
  name: string
  over_integrations_limit?: boolean | undefined
  over_storage_limit?: boolean | undefined
  pay_prod_cur?: string | undefined
  plan?: '' | 'std' | 'plus' | 'compliance' | 'enterprise' | undefined
  primary_owner?: ObjsPrimaryOwner | undefined
  sso_provider?:
    | { label?: string | undefined; name?: string | undefined; type?: string | undefined }
    | undefined
}
type ObjsTeamProfileField = {
  field_name?: (string | null) | undefined
  hint: string
  id: string
  is_hidden?: boolean | undefined
  label: string
  options?: { [x: string]: unknown } | undefined
  ordering: number
  possible_values?: (string[] | null) | undefined
  type: 'text' | 'date' | 'link' | 'mailto' | 'options_list' | 'user'
}
type DefsSubteamId = string
type ObjsSubteam = {
  auto_provision: boolean
  auto_type: { [x: string]: unknown }
  channel_count?: number | undefined
  created_by: DefsUserId
  date_create: number
  date_delete: number
  date_update: number
  deleted_by: { [x: string]: unknown }
  description: string
  enterprise_subteam_id: string
  handle: string
  id: DefsSubteamId
  is_external: boolean
  is_subteam: boolean
  is_usergroup: boolean
  name: string
  prefs: { channels: DefsChannelId[]; groups: DefsGroupId[] }
  team_id: DefsTeam
  updated_by: DefsUserId
  user_count?: number | undefined
  users?: DefsUserId[] | undefined
}
type ObjsUser = { [x: string]: unknown }
type DefsOptionalAppId = string
type ObjsUserProfile = {
  always_active?: boolean | undefined
  api_app_id?: DefsOptionalAppId | undefined
  avatar_hash: string
  bot_id?: DefsBotId | undefined
  display_name: string
  display_name_normalized: string
  email?: (string | null) | undefined
  fields: { [x: string]: unknown } | { [x: string]: unknown }[]
  first_name?: (string | null) | undefined
  guest_expiration_ts?: (number | null) | undefined
  guest_invited_by?: (string | null) | undefined
  image_1024?: (string | null) | undefined
  image_192?: (string | null) | undefined
  image_24?: (string | null) | undefined
  image_32?: (string | null) | undefined
  image_48?: (string | null) | undefined
  image_512?: (string | null) | undefined
  image_72?: (string | null) | undefined
  image_original?: (string | null) | undefined
  is_app_user?: boolean | undefined
  is_custom_image?: boolean | undefined
  is_restricted?: (boolean | null) | undefined
  is_ultra_restricted?: (boolean | null) | undefined
  last_avatar_image_hash?: string | undefined
  last_name?: (string | null) | undefined
  memberships_count?: number | undefined
  name?: (string | null) | undefined
  phone: string
  pronouns?: string | undefined
  real_name: string
  real_name_normalized: string
  skype: string
  status_default_emoji?: string | undefined
  status_default_text?: string | undefined
  status_default_text_canonical?: (string | null) | undefined
  status_emoji: string
  status_expiration?: number | undefined
  status_text: string
  status_text_canonical?: (string | null) | undefined
  team?: DefsWorkspaceId | undefined
  title: string
  updated?: number | undefined
  user_id?: string | undefined
  username?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/admin.apps.approve': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.apps.approved.list': {
      $get:
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id?: string | undefined
                enterprise_id?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id?: string | undefined
                enterprise_id?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.apps.requests.list': {
      $get:
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.apps.restrict': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                app_id?: string | undefined
                request_id?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.apps.restricted.list': {
      $get:
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id?: string | undefined
                enterprise_id?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id?: string | undefined
                enterprise_id?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.archive': {
      $post:
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: {
              error:
                | 'feature_not_enabled'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'default_org_wide_channel'
                | 'already_archived'
                | 'cant_archive_general'
                | 'restricted_action'
                | 'could_not_archive_channel'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.convertToPrivate': {
      $post:
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: {
              error:
                | 'feature_not_enabled'
                | 'restricted_action'
                | 'name_taken'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'default_org_wide_channel'
                | 'method_not_supported_for_channel_type'
                | 'could_not_convert_channel'
                | 'external_channel_migrating'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.create': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                description?: string | undefined
                is_private: boolean
                name: string
                org_wide?: boolean | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                description?: string | undefined
                is_private: boolean
                name: string
                org_wide?: boolean | undefined
                team_id?: string | undefined
              }
            }
            output: { channel_id?: DefsChannelId | undefined; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                description?: string | undefined
                is_private: boolean
                name: string
                org_wide?: boolean | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                description?: string | undefined
                is_private: boolean
                name: string
                org_wide?: boolean | undefined
                team_id?: string | undefined
              }
            }
            output: {
              error:
                | 'feature_not_enabled'
                | 'name_taken'
                | 'restricted_action'
                | 'team_not_found'
                | 'invalid_team'
                | 'invalid_name'
                | 'could_not_create_channel'
                | 'team_id_or_org_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.delete': {
      $post:
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: {
              error:
                | 'feature_not_enabled'
                | 'not_an_admin'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'default_org_wide_channel'
                | 'restricted_action'
                | 'could_not_delete_channel'
                | 'missing_scope'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.disconnectShared': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; leaving_team_ids?: string | undefined }
            } & { form: { channel_id: string; leaving_team_ids?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; leaving_team_ids?: string | undefined }
            } & { form: { channel_id: string; leaving_team_ids?: string | undefined } }
            output: {
              error:
                | 'feature_not_enabled'
                | 'not_an_admin'
                | 'not_an_enterprise'
                | 'channel_not_found'
                | 'not_supported'
                | 'team_not_found'
                | 'restricted_action'
                | 'missing_scope'
                | 'leaving_team_not_in_channel'
                | 'no_teams_to_disconnect'
                | 'leaving_team_required'
                | 'cannot_kick_team'
                | 'cannot_kick_home_team'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.ekm.listOriginalConnectedChannelInfo': {
      $get:
        | {
            input: {
              query: {
                token: string
                channel_ids?: string | undefined
                team_ids?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                channel_ids?: string | undefined
                team_ids?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.getConversationPrefs': {
      $get:
        | {
            input: { query: { channel_id: string } } & { header: { token: string } }
            output: {
              ok: DefsOkTrue
              prefs?:
                | {
                    can_thread?:
                      | { type?: string[] | undefined; user?: string[] | undefined }
                      | undefined
                    who_can_post?:
                      | { type?: string[] | undefined; user?: string[] | undefined }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { channel_id: string } } & { header: { token: string } }
            output: {
              error:
                | 'feature_not_enabled'
                | 'not_an_admin'
                | 'not_an_enterprise'
                | 'restricted_action'
                | 'missing_scope'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'could_not_get_conversation_prefs'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.getTeams': {
      $get:
        | {
            input: {
              query: { channel_id: string; cursor?: string | undefined; limit?: number | undefined }
            } & { header: { token: string } }
            output: {
              ok: DefsOkTrue
              response_metadata?: { next_cursor: string } | undefined
              team_ids: DefsTeam[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { channel_id: string; cursor?: string | undefined; limit?: number | undefined }
            } & { header: { token: string } }
            output: {
              error:
                | 'feature_not_enabled'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'unsupported_team_type'
                | 'restricted_action'
                | 'could_not_get_teams'
                | 'invalid_cursor'
                | 'invalid_limit'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.invite': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; user_ids: string }
            } & { form: { channel_id: string; user_ids: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; user_ids: string }
            } & { form: { channel_id: string; user_ids: string } }
            output: {
              error:
                | 'feature_not_enabled'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'default_org_wide_channel'
                | 'restricted_action'
                | 'user_must_be_admin'
                | 'failed_for_some_users'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.rename': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; name: string }
            } & { form: { channel_id: string; name: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; name: string }
            } & { form: { channel_id: string; name: string } }
            output: {
              error:
                | 'feature_not_enabled'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'restricted_action'
                | 'could_not_rename_channel'
                | 'default_org_wide_channel'
                | 'name_taken'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.restrictAccess.addGroup': {
      $post:
        | {
            input: {
              json: {
                channel_id: string
                group_id: string
                team_id?: string | undefined
                token: string
              }
            } & {
              form: {
                channel_id: string
                group_id: string
                team_id?: string | undefined
                token: string
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                channel_id: string
                group_id: string
                team_id?: string | undefined
                token: string
              }
            } & {
              form: {
                channel_id: string
                group_id: string
                team_id?: string | undefined
                token: string
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.restrictAccess.listGroups': {
      $get:
        | {
            input: { query: { token: string; channel_id: string; team_id?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; channel_id: string; team_id?: string | undefined } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.restrictAccess.removeGroup': {
      $post:
        | {
            input: {
              json: { channel_id: string; group_id: string; team_id: string; token: string }
            } & { form: { channel_id: string; group_id: string; team_id: string; token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { channel_id: string; group_id: string; team_id: string; token: string }
            } & { form: { channel_id: string; group_id: string; team_id: string; token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.search': {
      $get:
        | {
            input: {
              query: {
                team_ids?: string | undefined
                query?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
                search_channel_types?: string | undefined
                sort?: string | undefined
                sort_dir?: string | undefined
              }
            } & { header: { token: string } }
            output: { channels: ObjsChannel[]; next_cursor: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                team_ids?: string | undefined
                query?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
                search_channel_types?: string | undefined
                sort?: string | undefined
                sort_dir?: string | undefined
              }
            } & { header: { token: string } }
            output: {
              error:
                | 'feature_not_enabled'
                | 'not_an_admin'
                | 'not_an_enterprise'
                | 'team_not_found'
                | 'not_allowed'
                | 'invalid_auth'
                | 'invalid_cursor'
                | 'invalid_search_channel_type'
                | 'invalid_sort'
                | 'invalid_sort_dir'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.setConversationPrefs': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; prefs: string }
            } & { form: { channel_id: string; prefs: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel_id: string; prefs: string }
            } & { form: { channel_id: string; prefs: string } }
            output: {
              error:
                | 'feature_not_enabled'
                | 'not_an_admin'
                | 'channel_not_found'
                | 'channel_type_not_supported'
                | 'restricted_action'
                | 'missing_scope'
                | 'could_not_set_channel_pref'
                | 'default_org_wide_channel'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.setTeams': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channel_id: string
                org_channel?: boolean | undefined
                target_team_ids?: string | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                channel_id: string
                org_channel?: boolean | undefined
                target_team_ids?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channel_id: string
                org_channel?: boolean | undefined
                target_team_ids?: string | undefined
                team_id?: string | undefined
              }
            } & {
              form: {
                channel_id: string
                org_channel?: boolean | undefined
                target_team_ids?: string | undefined
                team_id?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.conversations.unarchive': {
      $post:
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { channel_id: string } } & {
              form: { channel_id: string }
            }
            output: {
              error:
                | 'feature_not_enabled'
                | 'channel_not_found'
                | 'channel_not_archived'
                | 'channel_type_not_supported'
                | 'restricted_action'
                | 'could_not_unarchive_channel'
                | 'default_org_wide_channel'
                | 'missing_scope'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.emoji.add': {
      $post:
        | {
            input: { json: { name: string; token: string; url: string } } & {
              form: { name: string; token: string; url: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; token: string; url: string } } & {
              form: { name: string; token: string; url: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.emoji.addAlias': {
      $post:
        | {
            input: { json: { alias_for: string; name: string; token: string } } & {
              form: { alias_for: string; name: string; token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { alias_for: string; name: string; token: string } } & {
              form: { alias_for: string; name: string; token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.emoji.list': {
      $get:
        | {
            input: {
              query: { token: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { token: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.emoji.remove': {
      $post:
        | {
            input: { json: { name: string; token: string } } & {
              form: { name: string; token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; token: string } } & {
              form: { name: string; token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.emoji.rename': {
      $post:
        | {
            input: { json: { name: string; new_name: string; token: string } } & {
              form: { name: string; new_name: string; token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; new_name: string; token: string } } & {
              form: { name: string; new_name: string; token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.inviteRequests.approve': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { invite_request_id: string; team_id?: string | undefined }
            } & { form: { invite_request_id: string; team_id?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { invite_request_id: string; team_id?: string | undefined }
            } & { form: { invite_request_id: string; team_id?: string | undefined } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.inviteRequests.approved.list': {
      $get:
        | {
            input: {
              query: {
                team_id?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                team_id?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.inviteRequests.denied.list': {
      $get:
        | {
            input: {
              query: {
                team_id?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                team_id?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.inviteRequests.deny': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { invite_request_id: string; team_id?: string | undefined }
            } & { form: { invite_request_id: string; team_id?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { invite_request_id: string; team_id?: string | undefined }
            } & { form: { invite_request_id: string; team_id?: string | undefined } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.inviteRequests.list': {
      $get:
        | {
            input: {
              query: {
                team_id?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                team_id?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.admins.list': {
      $get:
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id: string
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                limit?: number | undefined
                cursor?: string | undefined
                team_id: string
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.create': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                team_description?: string | undefined
                team_discoverability?: string | undefined
                team_domain: string
                team_name: string
              }
            } & {
              form: {
                team_description?: string | undefined
                team_discoverability?: string | undefined
                team_domain: string
                team_name: string
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                team_description?: string | undefined
                team_discoverability?: string | undefined
                team_domain: string
                team_name: string
              }
            } & {
              form: {
                team_description?: string | undefined
                team_discoverability?: string | undefined
                team_domain: string
                team_name: string
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.list': {
      $get:
        | {
            input: { query: { limit?: number | undefined; cursor?: string | undefined } } & {
              header: { token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: string | undefined } } & {
              header: { token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.owners.list': {
      $get:
        | {
            input: {
              query: {
                token: string
                team_id: string
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                team_id: string
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.settings.info': {
      $get:
        | {
            input: { query: { team_id: string } } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { team_id: string } } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.settings.setDefaultChannels': {
      $post:
        | {
            input: { json: { channel_ids: string; team_id: string; token: string } } & {
              form: { channel_ids: string; team_id: string; token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { channel_ids: string; team_id: string; token: string } } & {
              form: { channel_ids: string; team_id: string; token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.settings.setDescription': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { description: string; team_id: string }
            } & { form: { description: string; team_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { description: string; team_id: string }
            } & { form: { description: string; team_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.settings.setDiscoverability': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { discoverability: string; team_id: string }
            } & { form: { discoverability: string; team_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { discoverability: string; team_id: string }
            } & { form: { discoverability: string; team_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.settings.setIcon': {
      $post:
        | {
            input: { json: { image_url: string; team_id: string; token: string } } & {
              form: { image_url: string; team_id: string; token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { image_url: string; team_id: string; token: string } } & {
              form: { image_url: string; team_id: string; token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.teams.settings.setName': {
      $post:
        | {
            input: { header: { token: string } } & { json: { name: string; team_id: string } } & {
              form: { name: string; team_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { name: string; team_id: string } } & {
              form: { name: string; team_id: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.usergroups.addChannels': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel_ids: string; team_id?: string | undefined; usergroup_id: string }
            } & {
              form: { channel_ids: string; team_id?: string | undefined; usergroup_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel_ids: string; team_id?: string | undefined; usergroup_id: string }
            } & {
              form: { channel_ids: string; team_id?: string | undefined; usergroup_id: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.usergroups.addTeams': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { auto_provision?: boolean | undefined; team_ids: string; usergroup_id: string }
            } & {
              form: { auto_provision?: boolean | undefined; team_ids: string; usergroup_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { auto_provision?: boolean | undefined; team_ids: string; usergroup_id: string }
            } & {
              form: { auto_provision?: boolean | undefined; team_ids: string; usergroup_id: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.usergroups.listChannels': {
      $get:
        | {
            input: {
              query: {
                usergroup_id: string
                team_id?: string | undefined
                include_num_members?: boolean | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                usergroup_id: string
                team_id?: string | undefined
                include_num_members?: boolean | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.usergroups.removeChannels': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel_ids: string; usergroup_id: string }
            } & { form: { channel_ids: string; usergroup_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel_ids: string; usergroup_id: string }
            } & { form: { channel_ids: string; usergroup_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.assign': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channel_ids?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                team_id: string
                user_id: string
              }
            } & {
              form: {
                channel_ids?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                team_id: string
                user_id: string
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channel_ids?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                team_id: string
                user_id: string
              }
            } & {
              form: {
                channel_ids?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                team_id: string
                user_id: string
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.invite': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channel_ids: string
                custom_message?: string | undefined
                email: string
                guest_expiration_ts?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                real_name?: string | undefined
                resend?: boolean | undefined
                team_id: string
              }
            } & {
              form: {
                channel_ids: string
                custom_message?: string | undefined
                email: string
                guest_expiration_ts?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                real_name?: string | undefined
                resend?: boolean | undefined
                team_id: string
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channel_ids: string
                custom_message?: string | undefined
                email: string
                guest_expiration_ts?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                real_name?: string | undefined
                resend?: boolean | undefined
                team_id: string
              }
            } & {
              form: {
                channel_ids: string
                custom_message?: string | undefined
                email: string
                guest_expiration_ts?: string | undefined
                is_restricted?: boolean | undefined
                is_ultra_restricted?: boolean | undefined
                real_name?: string | undefined
                resend?: boolean | undefined
                team_id: string
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.list': {
      $get:
        | {
            input: {
              query: { team_id: string; cursor?: string | undefined; limit?: number | undefined }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { team_id: string; cursor?: string | undefined; limit?: number | undefined }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.remove': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.session.invalidate': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { session_id: number; team_id: string }
            } & { form: { session_id: number; team_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { session_id: number; team_id: string }
            } & { form: { session_id: number; team_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.session.reset': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                mobile_only?: boolean | undefined
                user_id: string
                web_only?: boolean | undefined
              }
            } & {
              form: {
                mobile_only?: boolean | undefined
                user_id: string
                web_only?: boolean | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                mobile_only?: boolean | undefined
                user_id: string
                web_only?: boolean | undefined
              }
            } & {
              form: {
                mobile_only?: boolean | undefined
                user_id: string
                web_only?: boolean | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.setAdmin': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.setExpiration': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { expiration_ts: number; team_id: string; user_id: string }
            } & { form: { expiration_ts: number; team_id: string; user_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { expiration_ts: number; team_id: string; user_id: string }
            } & { form: { expiration_ts: number; team_id: string; user_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.setOwner': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin.users.setRegular': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { team_id: string; user_id: string }
            } & { form: { team_id: string; user_id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api.test': {
      $get:
        | {
            input: { query: { error?: string | undefined; foo?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { error?: string | undefined; foo?: string | undefined } }
            output: { error: string; ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.event.authorizations.list': {
      $get:
        | {
            input: {
              query: {
                event_context: string
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                event_context: string
                cursor?: string | undefined
                limit?: number | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.permissions.info': {
      $get:
        | {
            input: { query: { token?: string | undefined } }
            output: {
              info: {
                app_home: { resources?: ObjsResources | undefined; scopes?: ObjsScopes | undefined }
                channel: { resources?: ObjsResources | undefined; scopes?: ObjsScopes | undefined }
                group: { resources?: ObjsResources | undefined; scopes?: ObjsScopes | undefined }
                im: { resources?: ObjsResources | undefined; scopes?: ObjsScopes | undefined }
                mpim: { resources?: ObjsResources | undefined; scopes?: ObjsScopes | undefined }
                team: { resources: ObjsResources; scopes: ObjsScopes }
              }
              ok: DefsOkTrue
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.permissions.request': {
      $get:
        | {
            input: { query: { token: string; scopes: string; trigger_id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; scopes: string; trigger_id: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'invalid_trigger'
                | 'trigger_exchanged'
                | 'invalid_scope'
                | 'invalid_user'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.permissions.resources.list': {
      $get:
        | {
            input: {
              query: { token: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              ok: DefsOkTrue
              resources: { id?: string | undefined; type?: string | undefined }[]
              response_metadata?: { next_cursor: string } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { token: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'invalid_cursor'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.permissions.scopes.list': {
      $get:
        | {
            input: { query: { token: string } }
            output: {
              ok: DefsOkTrue
              scopes: {
                app_home?: ObjsScopes | undefined
                channel?: ObjsScopes | undefined
                group?: ObjsScopes | undefined
                im?: ObjsScopes | undefined
                mpim?: ObjsScopes | undefined
                team?: ObjsScopes | undefined
                user?: ObjsScopes | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.permissions.users.list': {
      $get:
        | {
            input: {
              query: { token: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { token: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.permissions.users.request': {
      $get:
        | {
            input: { query: { token: string; scopes: string; trigger_id: string; user: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; scopes: string; trigger_id: string; user: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/apps.uninstall': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'invalid_client_id'
                | 'bad_client_secret'
                | 'client_id_token_mismatch'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth.revoke': {
      $get:
        | {
            input: { query: { token: string; test?: boolean | undefined } }
            output: { ok: DefsOkTrue; revoked: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; test?: boolean | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth.test': {
      $get:
        | {
            input: { header: { token: string } }
            output: {
              bot_id?: DefsBotId | undefined
              is_enterprise_install?: boolean | undefined
              ok: DefsOkTrue
              team: string
              team_id: DefsTeam
              url: string
              user: string
              user_id: DefsUserId
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'token_revoked'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bots.info': {
      $get:
        | {
            input: { query: { token: string; bot?: string | undefined } }
            output: {
              bot: {
                app_id: DefsAppId
                deleted: boolean
                icons: { image_36: string; image_48: string; image_72: string }
                id: DefsBotId
                name: string
                updated: number
                user_id?: DefsUserId | undefined
              }
              ok: DefsOkTrue
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; bot?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'bot_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls.add': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                created_by?: string | undefined
                date_start?: number | undefined
                desktop_app_join_url?: string | undefined
                external_display_id?: string | undefined
                external_unique_id: string
                join_url: string
                title?: string | undefined
                users?: string | undefined
              }
            } & {
              form: {
                created_by?: string | undefined
                date_start?: number | undefined
                desktop_app_join_url?: string | undefined
                external_display_id?: string | undefined
                external_unique_id: string
                join_url: string
                title?: string | undefined
                users?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                created_by?: string | undefined
                date_start?: number | undefined
                desktop_app_join_url?: string | undefined
                external_display_id?: string | undefined
                external_unique_id: string
                join_url: string
                title?: string | undefined
                users?: string | undefined
              }
            } & {
              form: {
                created_by?: string | undefined
                date_start?: number | undefined
                desktop_app_join_url?: string | undefined
                external_display_id?: string | undefined
                external_unique_id: string
                join_url: string
                title?: string | undefined
                users?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls.end': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { duration?: number | undefined; id: string }
            } & { form: { duration?: number | undefined; id: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { duration?: number | undefined; id: string }
            } & { form: { duration?: number | undefined; id: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls.info': {
      $get:
        | {
            input: { query: { id: string } } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls.participants.add': {
      $post:
        | {
            input: { header: { token: string } } & { json: { id: string; users: string } } & {
              form: { id: string; users: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { id: string; users: string } } & {
              form: { id: string; users: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls.participants.remove': {
      $post:
        | {
            input: { header: { token: string } } & { json: { id: string; users: string } } & {
              form: { id: string; users: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { id: string; users: string } } & {
              form: { id: string; users: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/calls.update': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                desktop_app_join_url?: string | undefined
                id: string
                join_url?: string | undefined
                title?: string | undefined
              }
            } & {
              form: {
                desktop_app_join_url?: string | undefined
                id: string
                join_url?: string | undefined
                title?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                desktop_app_join_url?: string | undefined
                id: string
                join_url?: string | undefined
                title?: string | undefined
              }
            } & {
              form: {
                desktop_app_join_url?: string | undefined
                id: string
                join_url?: string | undefined
                title?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.delete': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: {
                as_user?: boolean | undefined
                channel?: string | undefined
                ts?: number | undefined
              }
            } & {
              form: {
                as_user?: boolean | undefined
                channel?: string | undefined
                ts?: number | undefined
              }
            }
            output: { channel: DefsChannel; ok: DefsOkTrue; ts: DefsTs }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: {
                as_user?: boolean | undefined
                channel?: string | undefined
                ts?: number | undefined
              }
            } & {
              form: {
                as_user?: boolean | undefined
                channel?: string | undefined
                ts?: number | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'message_not_found'
                | 'channel_not_found'
                | 'cant_delete_message'
                | 'compliance_exports_prevent_deletion'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.deleteScheduledMessage': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { as_user?: boolean | undefined; channel: string; scheduled_message_id: string }
            } & {
              form: { as_user?: boolean | undefined; channel: string; scheduled_message_id: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { as_user?: boolean | undefined; channel: string; scheduled_message_id: string }
            } & {
              form: { as_user?: boolean | undefined; channel: string; scheduled_message_id: string }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'invalid_scheduled_message_id'
                | 'channel_not_found'
                | 'bad_token'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'ekm_access_denied'
                | 'missing_scope'
                | 'invalid_arguments'
                | 'invalid_arg_name'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.getPermalink': {
      $get:
        | {
            input: { query: { token: string; channel: string; message_ts: string } }
            output: { channel: DefsChannel; ok: DefsOkTrue; permalink: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; channel: string; message_ts: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'channel_not_found'
                | 'message_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.meMessage': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; text?: string | undefined }
            } & { form: { channel?: string | undefined; text?: string | undefined } }
            output: { channel?: DefsChannel | undefined; ok: DefsOkTrue; ts?: DefsTs | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; text?: string | undefined }
            } & { form: { channel?: string | undefined; text?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'channel_not_found'
                | 'not_in_channel'
                | 'is_archived'
                | 'msg_too_long'
                | 'no_text'
                | 'rate_limited'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.postEphemeral': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                user: string
                username?: string | undefined
              }
            } & {
              form: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                user: string
                username?: string | undefined
              }
            }
            output: { message_ts: DefsTs; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                user: string
                username?: string | undefined
              }
            } & {
              form: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                user: string
                username?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'channel_not_found'
                | 'is_archived'
                | 'msg_too_long'
                | 'no_text'
                | 'restricted_action'
                | 'too_many_attachments'
                | 'user_not_in_channel'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.postMessage': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                mrkdwn?: boolean | undefined
                parse?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
                username?: string | undefined
              }
            } & {
              form: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                mrkdwn?: boolean | undefined
                parse?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
                username?: string | undefined
              }
            }
            output: { channel: DefsChannel; message: ObjsMessage; ok: DefsOkTrue; ts: DefsTs }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                mrkdwn?: boolean | undefined
                parse?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
                username?: string | undefined
              }
            } & {
              form: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                icon_emoji?: string | undefined
                icon_url?: string | undefined
                link_names?: boolean | undefined
                mrkdwn?: boolean | undefined
                parse?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: string | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
                username?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'channel_not_found'
                | 'not_in_channel'
                | 'is_archived'
                | 'msg_too_long'
                | 'no_text'
                | 'too_many_attachments'
                | 'rate_limited'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.scheduleMessage': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                post_at?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: number | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
              }
            } & {
              form: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                post_at?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: number | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
              }
            }
            output: {
              channel: DefsChannel
              message: {
                bot_id: DefsBotId
                bot_profile?: ObjsBotProfile | undefined
                team: DefsTeam
                text: string
                type: string
                user: DefsUserId
                username?: string | undefined
              }
              ok: DefsOkTrue
              post_at: number
              scheduled_message_id: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                post_at?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: number | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
              }
            } & {
              form: {
                as_user?: boolean | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel?: string | undefined
                link_names?: boolean | undefined
                parse?: string | undefined
                post_at?: string | undefined
                reply_broadcast?: boolean | undefined
                text?: string | undefined
                thread_ts?: number | undefined
                unfurl_links?: boolean | undefined
                unfurl_media?: boolean | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'invalid_time'
                | 'time_in_past'
                | 'time_too_far'
                | 'channel_not_found'
                | 'not_in_channel'
                | 'is_archived'
                | 'msg_too_long'
                | 'no_text'
                | 'restricted_action'
                | 'restricted_action_read_only_channel'
                | 'restricted_action_thread_only_channel'
                | 'restricted_action_non_threadable_channel'
                | 'too_many_attachments'
                | 'rate_limited'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'ekm_access_denied'
                | 'missing_scope'
                | 'invalid_arguments'
                | 'invalid_arg_name'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.scheduledMessages.list': {
      $get:
        | {
            input: {
              query: {
                channel?: string | undefined
                latest?: number | undefined
                oldest?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            } & { header: { token?: string | undefined } }
            output: {
              ok: DefsOkTrue
              response_metadata: { next_cursor: string }
              scheduled_messages: {
                channel_id: DefsChannelId
                date_created: number
                id: string
                post_at: number
                text?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel?: string | undefined
                latest?: number | undefined
                oldest?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            } & { header: { token?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'invalid_channel'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'ekm_access_denied'
                | 'missing_scope'
                | 'invalid_arguments'
                | 'invalid_arg_name'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.unfurl': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channel: string
                ts: string
                unfurls?: string | undefined
                user_auth_message?: string | undefined
                user_auth_required?: boolean | undefined
                user_auth_url?: string | undefined
              }
            } & {
              form: {
                channel: string
                ts: string
                unfurls?: string | undefined
                user_auth_message?: string | undefined
                user_auth_required?: boolean | undefined
                user_auth_url?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channel: string
                ts: string
                unfurls?: string | undefined
                user_auth_message?: string | undefined
                user_auth_required?: boolean | undefined
                user_auth_url?: string | undefined
              }
            } & {
              form: {
                channel: string
                ts: string
                unfurls?: string | undefined
                user_auth_message?: string | undefined
                user_auth_required?: boolean | undefined
                user_auth_url?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'cannot_unfurl_url'
                | 'cannot_find_service'
                | 'missing_unfurls'
                | 'cannot_prompt'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat.update': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                link_names?: string | undefined
                parse?: string | undefined
                text?: string | undefined
                ts: string
              }
            } & {
              form: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                link_names?: string | undefined
                parse?: string | undefined
                text?: string | undefined
                ts: string
              }
            }
            output: {
              channel: string
              message: {
                attachments?: { [x: string]: unknown }[] | undefined
                blocks?: { [x: string]: unknown } | undefined
                text: string
              }
              ok: DefsOkTrue
              text: string
              ts: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                link_names?: string | undefined
                parse?: string | undefined
                text?: string | undefined
                ts: string
              }
            } & {
              form: {
                as_user?: string | undefined
                attachments?: string | undefined
                blocks?: string | undefined
                channel: string
                link_names?: string | undefined
                parse?: string | undefined
                text?: string | undefined
                ts: string
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'message_not_found'
                | 'cant_update_message'
                | 'channel_not_found'
                | 'edit_window_closed'
                | 'msg_too_long'
                | 'too_many_attachments'
                | 'rate_limited'
                | 'no_text'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'request_timeout'
                | 'invalid_json'
                | 'json_not_object'
                | 'upgrade_required'
                | 'fatal_error'
                | 'is_inactive'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.archive': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'not_supported'
                | 'channel_not_found'
                | 'already_archived'
                | 'cant_archive_general'
                | 'restricted_action'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'user_is_ultra_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'team_added_to_org'
                | 'missing_charset'
                | 'superfluous_charset'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.close': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: {
              already_closed?: boolean | undefined
              no_op?: boolean | undefined
              ok: DefsOkTrue
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'channel_not_found'
                | 'user_does_not_own_channel'
                | 'missing_scope'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.create': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { is_private?: boolean | undefined; name?: string | undefined }
            } & { form: { is_private?: boolean | undefined; name?: string | undefined } }
            output: { channel: ObjsConversation; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { is_private?: boolean | undefined; name?: string | undefined }
            } & { form: { is_private?: boolean | undefined; name?: string | undefined } }
            output: {
              callstack?: string | undefined
              detail?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'name_taken'
                | 'restricted_action'
                | 'no_channel'
                | 'invalid_name_required'
                | 'invalid_name_punctuation'
                | 'invalid_name_maxlength'
                | 'invalid_name_specials'
                | 'invalid_name'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.history': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                latest?: number | undefined
                oldest?: number | undefined
                inclusive?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              channel_actions_count: number
              channel_actions_ts: { [x: string]: unknown }
              has_more: boolean
              messages: ObjsMessage[]
              ok: DefsOkTrue
              pin_count: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                latest?: number | undefined
                oldest?: number | undefined
                inclusive?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'missing_scope'
                | 'channel_not_found'
                | 'invalid_ts_latest'
                | 'invalid_ts_oldest'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.info': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                include_locale?: boolean | undefined
                include_num_members?: boolean | undefined
              }
            }
            output: { channel: ObjsConversation; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                include_locale?: boolean | undefined
                include_num_members?: boolean | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'missing_scope'
                | 'channel_not_found'
                | 'team_added_to_org'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.invite': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; users?: string | undefined }
            } & { form: { channel?: string | undefined; users?: string | undefined } }
            output: { channel: ObjsConversation; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; users?: string | undefined }
            } & { form: { channel?: string | undefined; users?: string | undefined } }
            output: {
              callstack?: string | undefined
              error?:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'user_not_found'
                | 'no_user'
                | 'cant_invite_self'
                | 'not_in_channel'
                | 'already_in_channel'
                | 'is_archived'
                | 'cant_invite'
                | 'too_many_users'
                | 'ura_max_channels'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'user_is_ultra_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'team_added_to_org'
                | 'missing_charset'
                | 'superfluous_charset'
                | undefined
              errors?:
                | {
                    error:
                      | 'method_not_supported_for_channel_type'
                      | 'missing_scope'
                      | 'channel_not_found'
                      | 'user_not_found'
                      | 'no_user'
                      | 'cant_invite_self'
                      | 'not_in_channel'
                      | 'already_in_channel'
                      | 'is_archived'
                      | 'cant_invite'
                      | 'too_many_users'
                      | 'ura_max_channels'
                      | 'not_authed'
                      | 'invalid_auth'
                      | 'account_inactive'
                      | 'user_is_bot'
                      | 'user_is_restricted'
                      | 'user_is_ultra_restricted'
                      | 'invalid_arg_name'
                      | 'invalid_array_arg'
                      | 'invalid_charset'
                      | 'invalid_form_data'
                      | 'invalid_post_type'
                      | 'missing_post_type'
                      | 'invalid_json'
                      | 'json_not_object'
                      | 'request_timeout'
                      | 'upgrade_required'
                      | 'team_added_to_org'
                      | 'missing_charset'
                      | 'superfluous_charset'
                    ok: DefsOkFalse
                    user?: DefsUserId | undefined
                  }[]
                | undefined
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.join': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: {
              channel: ObjsConversation
              ok: DefsOkTrue
              response_metadata?: { warnings?: string[] | undefined } | undefined
              warning?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'is_archived'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'user_is_ultra_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'team_added_to_org'
                | 'missing_charset'
                | 'superfluous_charset'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.kick': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; user?: string | undefined }
            } & { form: { channel?: string | undefined; user?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; user?: string | undefined }
            } & { form: { channel?: string | undefined; user?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'user_not_found'
                | 'cant_kick_self'
                | 'not_in_channel'
                | 'cant_kick_from_general'
                | 'restricted_action'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.leave': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: { not_in_channel?: true | undefined; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'last_member'
                | 'missing_scope'
                | 'channel_not_found'
                | 'is_archived'
                | 'cant_leave_general'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'user_is_ultra_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'team_added_to_org'
                | 'missing_charset'
                | 'superfluous_charset'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.list': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                exclude_archived?: boolean | undefined
                types?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              channels: ObjsConversation[]
              ok: DefsOkTrue
              response_metadata?: { next_cursor: string } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                exclude_archived?: boolean | undefined
                types?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'missing_scope'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.mark': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; ts?: number | undefined }
            } & { form: { channel?: string | undefined; ts?: number | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; ts?: number | undefined }
            } & { form: { channel?: string | undefined; ts?: number | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'invalid_timestamp'
                | 'not_in_channel'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'not_allowed_token_type'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.members': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              members: DefsUserId[]
              ok: DefsOkTrue
              response_metadata: { next_cursor: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'channel_not_found'
                | 'invalid_limit'
                | 'invalid_cursor'
                | 'fetch_members_failed'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.open': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: {
                channel?: string | undefined
                return_im?: boolean | undefined
                users?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                return_im?: boolean | undefined
                users?: string | undefined
              }
            }
            output: {
              already_open?: boolean | undefined
              channel: { [x: string]: unknown }
              no_op?: boolean | undefined
              ok: DefsOkTrue
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: {
                channel?: string | undefined
                return_im?: boolean | undefined
                users?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                return_im?: boolean | undefined
                users?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'user_not_found'
                | 'user_not_visible'
                | 'user_disabled'
                | 'users_list_not_supplied'
                | 'not_enough_users'
                | 'too_many_users'
                | 'invalid_user_combination'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'channel_not_found'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.rename': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; name?: string | undefined }
            } & { form: { channel?: string | undefined; name?: string | undefined } }
            output: { channel: ObjsConversation; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; name?: string | undefined }
            } & { form: { channel?: string | undefined; name?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'user_is_restricted'
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'not_in_channel'
                | 'not_authorized'
                | 'invalid_name'
                | 'name_taken'
                | 'invalid_name_required'
                | 'invalid_name_punctuation'
                | 'invalid_name_maxlength'
                | 'invalid_name_specials'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.replies': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                ts?: number | undefined
                latest?: number | undefined
                oldest?: number | undefined
                inclusive?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              has_more?: boolean | undefined
              messages: { [x: string]: unknown }[]
              ok: DefsOkTrue
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                ts?: number | undefined
                latest?: number | undefined
                oldest?: number | undefined
                inclusive?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'missing_scope'
                | 'channel_not_found'
                | 'thread_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.setPurpose': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; purpose?: string | undefined }
            } & { form: { channel?: string | undefined; purpose?: string | undefined } }
            output: { channel: ObjsConversation; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; purpose?: string | undefined }
            } & { form: { channel?: string | undefined; purpose?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'not_in_channel'
                | 'is_archived'
                | 'too_long'
                | 'user_is_restricted'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.setTopic': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; topic?: string | undefined }
            } & { form: { channel?: string | undefined; topic?: string | undefined } }
            output: { channel: ObjsConversation; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined; topic?: string | undefined }
            } & { form: { channel?: string | undefined; topic?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'not_in_channel'
                | 'is_archived'
                | 'too_long'
                | 'user_is_restricted'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conversations.unarchive': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { channel?: string | undefined }
            } & { form: { channel?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'channel_not_found'
                | 'not_archived'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'user_is_ultra_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'team_added_to_org'
                | 'missing_charset'
                | 'superfluous_charset'
              needed?: string | undefined
              ok: DefsOkFalse
              provided?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dialog.open': {
      $get:
        | {
            input: { query: { dialog: string; trigger_id: string } } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dialog: string; trigger_id: string } } & { header: { token: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'validation_errors'
                | 'missing_trigger'
                | 'missing_dialog'
                | 'trigger_exchanged'
                | 'trigger_expired'
                | 'invalid_trigger'
                | 'app_missing_action_url'
                | 'cannot_create_dialog'
                | 'failed_sending_dialog'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dnd.endDnd': {
      $post:
        | {
            input: { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'unknown_error'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dnd.endSnooze': {
      $post:
        | {
            input: { header: { token: string } }
            output: {
              dnd_enabled: boolean
              next_dnd_end_ts: number
              next_dnd_start_ts: number
              ok: DefsOkTrue
              snooze_enabled: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'snooze_not_active'
                | 'snooze_end_failed'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dnd.info': {
      $get:
        | {
            input: { query: { token?: string | undefined; user?: string | undefined } }
            output: {
              dnd_enabled: boolean
              next_dnd_end_ts: number
              next_dnd_start_ts: number
              ok: DefsOkTrue
              snooze_enabled?: boolean | undefined
              snooze_endtime?: number | undefined
              snooze_remaining?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token?: string | undefined; user?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'user_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dnd.setSnooze': {
      $post:
        | {
            input: { json: { num_minutes: string; token: string } } & {
              form: { num_minutes: string; token: string }
            }
            output: {
              ok: DefsOkTrue
              snooze_enabled: boolean
              snooze_endtime: number
              snooze_remaining: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { num_minutes: string; token: string } } & {
              form: { num_minutes: string; token: string }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'missing_duration'
                | 'snooze_failed'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'too_long'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dnd.teamInfo': {
      $get:
        | {
            input: { query: { token?: string | undefined; users?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token?: string | undefined; users?: string | undefined } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/emoji.list': {
      $get:
        | {
            input: { query: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.comments.delete': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined; id?: string | undefined }
            } & { form: { file?: string | undefined; id?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined; id?: string | undefined }
            } & { form: { file?: string | undefined; id?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'cant_delete'
                | 'comment_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.delete': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined }
            } & { form: { file?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined }
            } & { form: { file?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'file_not_found'
                | 'file_deleted'
                | 'cant_delete_file'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.info': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                file?: string | undefined
                count?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              comments: ObjsComments
              content_html?: ({ [x: string]: unknown } | null) | undefined
              editor?: DefsUserId | undefined
              file: ObjsFile
              ok: DefsOkTrue
              paging?: ObjsPaging | undefined
              response_metadata?: ObjsResponseMetadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                file?: string | undefined
                count?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'file_not_found'
                | 'file_deleted'
                | 'timezone_count_failed'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.list': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                user?: string | undefined
                channel?: string | undefined
                ts_from?: number | undefined
                ts_to?: number | undefined
                types?: string | undefined
                count?: string | undefined
                page?: string | undefined
                show_files_hidden_by_limit?: boolean | undefined
              }
            }
            output: { files: ObjsFile[]; ok: DefsOkTrue; paging: ObjsPaging }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                user?: string | undefined
                channel?: string | undefined
                ts_from?: number | undefined
                ts_to?: number | undefined
                types?: string | undefined
                count?: string | undefined
                page?: string | undefined
                show_files_hidden_by_limit?: boolean | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'user_not_found'
                | 'unknown_type'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.remote.add': {
      $post:
        | {
            input: {
              json: {
                external_id?: string | undefined
                external_url?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                external_id?: string | undefined
                external_url?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                external_id?: string | undefined
                external_url?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                external_id?: string | undefined
                external_url?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.remote.info': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                file?: string | undefined
                external_id?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                file?: string | undefined
                external_id?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.remote.list': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                ts_from?: number | undefined
                ts_to?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                channel?: string | undefined
                ts_from?: number | undefined
                ts_to?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.remote.remove': {
      $post:
        | {
            input: {
              json: {
                external_id?: string | undefined
                file?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                external_id?: string | undefined
                file?: string | undefined
                token?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                external_id?: string | undefined
                file?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                external_id?: string | undefined
                file?: string | undefined
                token?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.remote.share': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                file?: string | undefined
                external_id?: string | undefined
                channels?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                file?: string | undefined
                external_id?: string | undefined
                channels?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.remote.update': {
      $post:
        | {
            input: {
              json: {
                external_id?: string | undefined
                external_url?: string | undefined
                file?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                external_id?: string | undefined
                external_url?: string | undefined
                file?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                external_id?: string | undefined
                external_url?: string | undefined
                file?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                external_id?: string | undefined
                external_url?: string | undefined
                file?: string | undefined
                filetype?: string | undefined
                indexable_file_contents?: string | undefined
                preview_image?: string | undefined
                title?: string | undefined
                token?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.revokePublicURL': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined }
            } & { form: { file?: string | undefined } }
            output: { file: ObjsFile; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined }
            } & { form: { file?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'file_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.sharedPublicURL': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined }
            } & { form: { file?: string | undefined } }
            output: { file: ObjsFile; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { file?: string | undefined }
            } & { form: { file?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'file_not_found'
                | 'not_allowed'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files.upload': {
      $post:
        | {
            input: {
              json: {
                channels?: string | undefined
                content?: string | undefined
                file?: string | undefined
                filename?: string | undefined
                filetype?: string | undefined
                initial_comment?: string | undefined
                thread_ts?: number | undefined
                title?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                channels?: string | undefined
                content?: string | undefined
                file?: string | undefined
                filename?: string | undefined
                filetype?: string | undefined
                initial_comment?: string | undefined
                thread_ts?: number | undefined
                title?: string | undefined
                token?: string | undefined
              }
            }
            output: { file: ObjsFile; ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                channels?: string | undefined
                content?: string | undefined
                file?: string | undefined
                filename?: string | undefined
                filetype?: string | undefined
                initial_comment?: string | undefined
                thread_ts?: number | undefined
                title?: string | undefined
                token?: string | undefined
              }
            } & {
              form: {
                channels?: string | undefined
                content?: string | undefined
                file?: string | undefined
                filename?: string | undefined
                filetype?: string | undefined
                initial_comment?: string | undefined
                thread_ts?: number | undefined
                title?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'posting_to_general_channel_denied'
                | 'invalid_channel'
                | 'file_uploads_disabled'
                | 'file_uploads_except_images_disabled'
                | 'storage_limit_reached'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/migration.exchange': {
      $get:
        | {
            input: {
              query: {
                token: string
                users: string
                team_id?: string | undefined
                to_old?: boolean | undefined
              }
            }
            output: {
              enterprise_id: string
              invalid_user_ids?: string[] | undefined
              ok: DefsOkTrue
              team_id: DefsTeam
              user_id_map?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                users: string
                team_id?: string | undefined
                to_old?: boolean | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'not_enterprise_team'
                | 'too_many_users'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth.access': {
      $get:
        | {
            input: {
              query: {
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                single_channel?: boolean | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                single_channel?: boolean | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth.token': {
      $get:
        | {
            input: {
              query: {
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                single_channel?: boolean | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                single_channel?: boolean | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth.v2.access': {
      $get:
        | {
            input: {
              query: {
                client_id?: string | undefined
                client_secret?: string | undefined
                code: string
                redirect_uri?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id?: string | undefined
                client_secret?: string | undefined
                code: string
                redirect_uri?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pins.add': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel: string; timestamp?: string | undefined }
            } & { form: { channel: string; timestamp?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel: string; timestamp?: string | undefined }
            } & { form: { channel: string; timestamp?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'bad_timestamp'
                | 'message_not_found'
                | 'channel_not_found'
                | 'no_item_specified'
                | 'already_pinned'
                | 'permission_denied'
                | 'file_not_shared'
                | 'not_pinnable'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pins.list': {
      $get:
        | {
            input: { query: { token: string; channel: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; channel: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'channel_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pins.remove': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel: string; timestamp?: string | undefined }
            } & { form: { channel: string; timestamp?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel: string; timestamp?: string | undefined }
            } & { form: { channel: string; timestamp?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'bad_timestamp'
                | 'file_not_found'
                | 'file_comment_not_found'
                | 'message_not_found'
                | 'no_item_specified'
                | 'not_pinned'
                | 'permission_denied'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_typ'
                | 'missing_post_typ'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeou'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reactions.add': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { channel: string; name: string; timestamp: string }
            } & { form: { channel: string; name: string; timestamp: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { channel: string; name: string; timestamp: string }
            } & { form: { channel: string; name: string; timestamp: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'bad_timestamp'
                | 'message_not_found'
                | 'no_item_specified'
                | 'invalid_name'
                | 'already_reacted'
                | 'too_many_emoji'
                | 'too_many_reactions'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reactions.get': {
      $get:
        | {
            input: {
              query: {
                token: string
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                full?: boolean | undefined
                timestamp?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                full?: boolean | undefined
                timestamp?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'bad_timestamp'
                | 'file_not_found'
                | 'file_comment_not_found'
                | 'message_not_found'
                | 'no_item_specified'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reactions.list': {
      $get:
        | {
            input: {
              query: {
                token: string
                user?: string | undefined
                full?: boolean | undefined
                count?: number | undefined
                page?: number | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              items: { [x: string]: unknown }[]
              ok: DefsOkTrue
              paging?: ObjsPaging | undefined
              response_metadata?: ObjsResponseMetadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                user?: string | undefined
                full?: boolean | undefined
                count?: number | undefined
                page?: number | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'user_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactiv'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reactions.remove': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                name: string
                timestamp?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                name: string
                timestamp?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                name: string
                timestamp?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                name: string
                timestamp?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'bad_timestamp'
                | 'file_not_found'
                | 'file_comment_not_found'
                | 'message_not_found'
                | 'no_item_specified'
                | 'invalid_name'
                | 'no_reaction'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reminders.add': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { text: string; time: string; user?: string | undefined }
            } & { form: { text: string; time: string; user?: string | undefined } }
            output: { ok: DefsOkTrue; reminder: ObjsReminder }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { text: string; time: string; user?: string | undefined }
            } & { form: { text: string; time: string; user?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'cannot_parse'
                | 'user_not_found'
                | 'cannot_add_bot'
                | 'cannot_add_slackbot'
                | 'cannot_add_others'
                | 'cannot_add_others_recurring'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reminders.complete': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { reminder?: string | undefined }
            } & { form: { reminder?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { reminder?: string | undefined }
            } & { form: { reminder?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_found'
                | 'cannot_complete_recurring'
                | 'cannot_complete_others'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reminders.delete': {
      $post:
        | {
            input: { header: { token?: string | undefined } } & {
              json: { reminder?: string | undefined }
            } & { form: { reminder?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token?: string | undefined } } & {
              json: { reminder?: string | undefined }
            } & { form: { reminder?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reminders.info': {
      $get:
        | {
            input: { query: { token?: string | undefined; reminder?: string | undefined } }
            output: { ok: DefsOkTrue; reminder: ObjsReminder }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token?: string | undefined; reminder?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reminders.list': {
      $get:
        | {
            input: { query: { token?: string | undefined } }
            output: { ok: DefsOkTrue; reminders: ObjsReminder[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/rtm.connect': {
      $get:
        | {
            input: {
              query: {
                token: string
                batch_presence_aware?: boolean | undefined
                presence_sub?: boolean | undefined
              }
            }
            output: {
              ok: DefsOkTrue
              self: { id: DefsUserId; name: string }
              team: { domain: string; id: DefsTeam; name: string }
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                batch_presence_aware?: boolean | undefined
                presence_sub?: boolean | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search.messages': {
      $get:
        | {
            input: {
              query: {
                token: string
                count?: number | undefined
                highlight?: boolean | undefined
                page?: number | undefined
                query: string
                sort?: string | undefined
                sort_dir?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                count?: number | undefined
                highlight?: boolean | undefined
                page?: number | undefined
                query: string
                sort?: string | undefined
                sort_dir?: string | undefined
              }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stars.add': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'bad_timestamp'
                | 'message_not_found'
                | 'file_not_found'
                | 'file_comment_not_found'
                | 'channel_not_found'
                | 'no_item_specified'
                | 'already_starred'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stars.list': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                count?: string | undefined
                page?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              items: { [x: string]: unknown }[]
              ok: DefsOkTrue
              paging?: ObjsPaging | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                count?: string | undefined
                page?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stars.remove': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            } & {
              form: {
                channel?: string | undefined
                file?: string | undefined
                file_comment?: string | undefined
                timestamp?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'bad_timestamp'
                | 'message_not_found'
                | 'file_not_found'
                | 'file_comment_not_found'
                | 'channel_not_found'
                | 'no_item_specified'
                | 'not_starred'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team.accessLogs': {
      $get:
        | {
            input: {
              query: {
                token: string
                before?: string | undefined
                count?: string | undefined
                page?: string | undefined
              }
            }
            output: {
              logins: {
                count: number
                country: string | null
                date_first: number
                date_last: number
                ip: string | null
                isp: string | null
                region: string | null
                user_agent: string
                user_id: DefsUserId
                username: string
              }[]
              ok: DefsOkTrue
              paging: ObjsPaging
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                before?: string | undefined
                count?: string | undefined
                page?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'paid_only'
                | 'over_pagination_limit'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team.billableInfo': {
      $get:
        | {
            input: { query: { token: string; user?: string | undefined } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; user?: string | undefined } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team.info': {
      $get:
        | {
            input: { query: { token: string; team?: string | undefined } }
            output: { ok: DefsOkTrue; team: ObjsTeam }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; team?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team.integrationLogs': {
      $get:
        | {
            input: {
              query: {
                token: string
                app_id?: string | undefined
                change_type?: string | undefined
                count?: string | undefined
                page?: string | undefined
                service_id?: string | undefined
                user?: string | undefined
              }
            }
            output: {
              logs: {
                admin_app_id?: DefsAppId | undefined
                app_id: DefsAppId
                app_type: string
                change_type: string
                channel?: DefsChannel | undefined
                date: string
                scope: string
                service_id?: string | undefined
                service_type?: string | undefined
                user_id: DefsUserId
                user_name: string
              }[]
              ok: DefsOkTrue
              paging: ObjsPaging
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                app_id?: string | undefined
                change_type?: string | undefined
                count?: string | undefined
                page?: string | undefined
                service_id?: string | undefined
                user?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/team.profile.get': {
      $get:
        | {
            input: { query: { token: string; visibility?: string | undefined } }
            output: { ok: DefsOkTrue; profile: { fields: ObjsTeamProfileField[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; visibility?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_typ'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeou'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/usergroups.create': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name: string
              }
            } & {
              form: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name: string
              }
            }
            output: { ok: DefsOkTrue; usergroup: ObjsSubteam }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name: string
              }
            } & {
              form: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name: string
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'permission_denied'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/usergroups.disable': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { include_count?: boolean | undefined; usergroup: string }
            } & { form: { include_count?: boolean | undefined; usergroup: string } }
            output: { ok: DefsOkTrue; usergroup: ObjsSubteam }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { include_count?: boolean | undefined; usergroup: string }
            } & { form: { include_count?: boolean | undefined; usergroup: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'permission_denied'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/usergroups.enable': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { include_count?: boolean | undefined; usergroup: string }
            } & { form: { include_count?: boolean | undefined; usergroup: string } }
            output: { ok: DefsOkTrue; usergroup: ObjsSubteam }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { include_count?: boolean | undefined; usergroup: string }
            } & { form: { include_count?: boolean | undefined; usergroup: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_require'
                | 'fatal_error'
                | 'missing_charset'
                | 'superfluous_charset'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/usergroups.list': {
      $get:
        | {
            input: {
              query: {
                include_users?: boolean | undefined
                token: string
                include_count?: boolean | undefined
                include_disabled?: boolean | undefined
              }
            }
            output: { ok: DefsOkTrue; usergroups: ObjsSubteam[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_users?: boolean | undefined
                token: string
                include_count?: boolean | undefined
                include_disabled?: boolean | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_require'
                | 'fatal_error'
                | 'missing_charset'
                | 'superfluous_charset'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/usergroups.update': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name?: string | undefined
                usergroup: string
              }
            } & {
              form: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name?: string | undefined
                usergroup: string
              }
            }
            output: { ok: DefsOkTrue; usergroup: ObjsSubteam }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name?: string | undefined
                usergroup: string
              }
            } & {
              form: {
                channels?: string | undefined
                description?: string | undefined
                handle?: string | undefined
                include_count?: boolean | undefined
                name?: string | undefined
                usergroup: string
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'permission_denied'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_require'
                | 'fatal_error'
                | 'missing_charset'
                | 'superfluous_charset'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/usergroups.users.list': {
      $get:
        | {
            input: {
              query: { token: string; include_disabled?: boolean | undefined; usergroup: string }
            }
            output: { ok: DefsOkTrue; users: DefsUserId[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { token: string; include_disabled?: boolean | undefined; usergroup: string }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_require'
                | 'fatal_error'
                | 'missing_charset'
                | 'superfluous_charset'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/usergroups.users.update': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: { include_count?: boolean | undefined; usergroup: string; users: string }
            } & { form: { include_count?: boolean | undefined; usergroup: string; users: string } }
            output: { ok: DefsOkTrue; usergroup: ObjsSubteam }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: { include_count?: boolean | undefined; usergroup: string; users: string }
            } & { form: { include_count?: boolean | undefined; usergroup: string; users: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'permission_denied'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'user_is_restricted'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_require'
                | 'fatal_error'
                | 'missing_charset'
                | 'superfluous_charset'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.conversations': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                user?: string | undefined
                types?: string | undefined
                exclude_archived?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              channels: ObjsConversation[]
              ok: DefsOkTrue
              response_metadata?: { next_cursor: string } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                user?: string | undefined
                types?: string | undefined
                exclude_archived?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'method_not_supported_for_channel_type'
                | 'missing_scope'
                | 'invalid_types'
                | 'invalid_cursor'
                | 'invalid_limit'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.deletePhoto': {
      $post:
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.getPresence': {
      $get:
        | {
            input: { query: { token: string; user?: string | undefined } }
            output: {
              auto_away?: boolean | undefined
              connection_count?: number | undefined
              last_activity?: number | undefined
              manual_away?: boolean | undefined
              ok: DefsOkTrue
              online?: boolean | undefined
              presence: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; user?: string | undefined } }
            output: { error: string; ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.identity': {
      $get:
        | {
            input: { query: { token?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token?: string | undefined } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.info': {
      $get:
        | {
            input: {
              query: {
                token: string
                include_locale?: boolean | undefined
                user?: string | undefined
              }
            }
            output: { ok: DefsOkTrue; user: ObjsUser }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                include_locale?: boolean | undefined
                user?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'user_not_found'
                | 'user_not_visible'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.list': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
                include_locale?: boolean | undefined
              }
            }
            output: {
              cache_ts: number
              members: ObjsUser[]
              ok: DefsOkTrue
              response_metadata?: ObjsResponseMetadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
                include_locale?: boolean | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'limit_required'
                | 'invalid_cursor'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.lookupByEmail': {
      $get:
        | {
            input: { query: { token: string; email: string } }
            output: { ok: DefsOkTrue; user: ObjsUser }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string; email: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'users_not_found'
                | 'enterprise_is_restricted'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'no_permission'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.profile.get': {
      $get:
        | {
            input: {
              query: {
                token: string
                include_labels?: boolean | undefined
                user?: string | undefined
              }
            }
            output: { ok: DefsOkTrue; profile: ObjsUserProfile }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                include_labels?: boolean | undefined
                user?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'user_not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.profile.set': {
      $post:
        | {
            input: { header: { token: string } } & {
              json: {
                name?: string | undefined
                profile?: string | undefined
                user?: string | undefined
                value?: string | undefined
              }
            } & {
              form: {
                name?: string | undefined
                profile?: string | undefined
                user?: string | undefined
                value?: string | undefined
              }
            }
            output: {
              email_pending?: string | undefined
              ok: DefsOkTrue
              profile: ObjsUserProfile
              username: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & {
              json: {
                name?: string | undefined
                profile?: string | undefined
                user?: string | undefined
                value?: string | undefined
              }
            } & {
              form: {
                name?: string | undefined
                profile?: string | undefined
                user?: string | undefined
                value?: string | undefined
              }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'reserved_name'
                | 'invalid_profile'
                | 'profile_set_failed'
                | 'not_admin'
                | 'not_app_admin'
                | 'cannot_update_admin_user'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.setActive': {
      $post:
        | {
            input: { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } }
            output: {
              callstack?: string | undefined
              error:
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'ekm_access_denied'
                | 'missing_scope'
                | 'invalid_arguments'
                | 'invalid_arg_name'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'request_timeout'
                | 'fatal_error'
                | 'internal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.setPhoto': {
      $post:
        | {
            input: {
              json: {
                crop_w?: string | undefined
                crop_x?: string | undefined
                crop_y?: string | undefined
                image?: string | undefined
                token: string
              }
            } & {
              form: {
                crop_w?: string | undefined
                crop_x?: string | undefined
                crop_y?: string | undefined
                image?: string | undefined
                token: string
              }
            }
            output: {
              ok: DefsOkTrue
              profile: {
                avatar_hash: string
                image_1024: string
                image_192: string
                image_24: string
                image_32: string
                image_48: string
                image_512: string
                image_72: string
                image_original: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                crop_w?: string | undefined
                crop_x?: string | undefined
                crop_y?: string | undefined
                image?: string | undefined
                token: string
              }
            } & {
              form: {
                crop_w?: string | undefined
                crop_x?: string | undefined
                crop_y?: string | undefined
                image?: string | undefined
                token: string
              }
            }
            output: {
              callstack?: string | undefined
              debug_step?: string | undefined
              dims?: string | undefined
              error:
                | 'bad_image'
                | 'too_large'
                | 'too_many_frames'
                | 'not_found'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'user_is_bot'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
              time_ident?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users.setPresence': {
      $post:
        | {
            input: { header: { token: string } } & { json: { presence: string } } & {
              form: { presence: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { token: string } } & { json: { presence: string } } & {
              form: { presence: string }
            }
            output: {
              callstack?: string | undefined
              error:
                | 'invalid_presence'
                | 'not_authed'
                | 'invalid_auth'
                | 'account_inactive'
                | 'token_revoked'
                | 'no_permission'
                | 'org_login_required'
                | 'invalid_arg_name'
                | 'invalid_array_arg'
                | 'invalid_charset'
                | 'invalid_form_data'
                | 'invalid_post_type'
                | 'missing_post_type'
                | 'team_added_to_org'
                | 'invalid_json'
                | 'json_not_object'
                | 'request_timeout'
                | 'upgrade_required'
                | 'fatal_error'
              ok: DefsOkFalse
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/views.open': {
      $get:
        | {
            input: { query: { trigger_id: string; view: string } } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { trigger_id: string; view: string } } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/views.publish': {
      $get:
        | {
            input: { query: { user_id: string; view: string; hash?: string | undefined } } & {
              header: { token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user_id: string; view: string; hash?: string | undefined } } & {
              header: { token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/views.push': {
      $get:
        | {
            input: { query: { trigger_id: string; view: string } } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { trigger_id: string; view: string } } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/views.update': {
      $get:
        | {
            input: {
              query: {
                view_id?: string | undefined
                external_id?: string | undefined
                view?: string | undefined
                hash?: string | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                view_id?: string | undefined
                external_id?: string | undefined
                view?: string | undefined
                hash?: string | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflows.stepCompleted': {
      $get:
        | {
            input: { query: { workflow_step_execute_id: string; outputs?: string | undefined } } & {
              header: { token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workflow_step_execute_id: string; outputs?: string | undefined } } & {
              header: { token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflows.stepFailed': {
      $get:
        | {
            input: { query: { workflow_step_execute_id: string; error: string } } & {
              header: { token: string }
            }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workflow_step_execute_id: string; error: string } } & {
              header: { token: string }
            }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflows.updateStep': {
      $get:
        | {
            input: {
              query: {
                workflow_step_edit_id: string
                inputs?: string | undefined
                outputs?: string | undefined
                step_name?: string | undefined
                step_image_url?: string | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkTrue }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workflow_step_edit_id: string
                inputs?: string | undefined
                outputs?: string | undefined
                step_name?: string | undefined
                step_image_url?: string | undefined
              }
            } & { header: { token: string } }
            output: { ok: DefsOkFalse }
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
