type AccessTokens = {
  access_token?: string | undefined
  account_id?: number | undefined
  expires_on_date?: number | undefined
  scope?: { [x: string]: unknown }[] | undefined
}[]
type Answers = {
  accepted?: boolean | undefined
  answer_id?: number | undefined
  awarded_bounty_amount?: number | undefined
  awarded_bounty_users?: { [x: string]: unknown }[] | undefined
  body?: string | undefined
  body_markdown?: string | undefined
  can_flag?: boolean | undefined
  comment_count?: number | undefined
  comments?: { [x: string]: unknown }[] | undefined
  community_owned_date?: number | undefined
  creation_date?: number | undefined
  down_vote_count?: number | undefined
  downvoted?: boolean | undefined
  is_accepted?: boolean | undefined
  last_activity_date?: number | undefined
  last_edit_date?: number | undefined
  last_editor?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  link?: string | undefined
  locked_date?: number | undefined
  owner?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  question_id?: number | undefined
  score?: number | undefined
  share_link?: string | undefined
  tags?: { [x: string]: unknown }[] | undefined
  title?: string | undefined
  up_vote_count?: number | undefined
  upvoted?: boolean | undefined
}[]
type Comments = {
  body?: string | undefined
  body_markdown?: string | undefined
  can_flag?: boolean | undefined
  comment_id?: number | undefined
  creation_date?: number | undefined
  edited?: boolean | undefined
  link?: string | undefined
  owner?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  post_id?: number | undefined
  post_type?: string | undefined
  reply_to_user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  score?: number | undefined
  upvoted?: boolean | undefined
}[]
type Badges = {
  award_count?: number | undefined
  badge_id?: number | undefined
  badge_type?: string | undefined
  description?: string | undefined
  link?: string | undefined
  name?: string | undefined
  rank?: string | undefined
  user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
}[]
type CreatedComment = {
  body?: string | undefined
  body_markdown?: string | undefined
  can_flag?: boolean | undefined
  comment_id?: number | undefined
  creation_date?: number | undefined
  edited?: boolean | undefined
  link?: string | undefined
  owner?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  post_id?: number | undefined
  post_type?: string | undefined
  reply_to_user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  score?: number | undefined
  upvoted?: boolean | undefined
}
type Errors = {
  description?: string | undefined
  error_id?: number | undefined
  error_name?: string | undefined
}[]
type Error = {
  error_id?: number | undefined
  error_message?: string | undefined
  error_name?: string | undefined
}
type Events = {
  creation_date?: number | undefined
  event_type?: string | undefined
  excerpt?: string | undefined
  link?: string | undefined
  'the id of the object (answer, comment, question, or user) the event describes'?:
    | number
    | undefined
}[]
type SingleFilter = {
  filter?: string | undefined
  filter_type?: string | undefined
  included_fields?: { [x: string]: unknown }[] | undefined
}
type Filters = {
  filter?: string | undefined
  filter_type?: string | undefined
  included_fields?: { [x: string]: unknown }[] | undefined
}[]
type InboxItems = {
  answer_id?: number | undefined
  body?: string | undefined
  comment_id?: number | undefined
  creation_date?: number | undefined
  is_unread?: boolean | undefined
  item_type?: string | undefined
  link?: string | undefined
  question_id?: number | undefined
  site?:
    | {
        aliases?: { [x: string]: unknown }[] | undefined
        api_site_parameter?: string | undefined
        audience?: string | undefined
        closed_beta_date?: number | undefined
        favicon_url?: string | undefined
        high_resolution_icon_url?: string | undefined
        icon_url?: string | undefined
        launch_date?: number | undefined
        logo_url?: string | undefined
        markdown_extensions?: { [x: string]: unknown }[] | undefined
        name?: string | undefined
        open_beta_date?: number | undefined
        related_sites?: { [x: string]: unknown }[] | undefined
        site_state?: string | undefined
        site_type?: string | undefined
        site_url?: string | undefined
        styling?:
          | {
              link_color?: string | undefined
              tag_background_color?: string | undefined
              tag_foreground_color?: string | undefined
            }
          | undefined
        twitter_account?: string | undefined
      }
    | undefined
  title?: string | undefined
}[]
type InfoObject = {
  answers_per_minute?: number | undefined
  api_revision?: string | undefined
  badges_per_minute?: number | undefined
  new_active_users?: number | undefined
  questions_per_minute?: number | undefined
  site?:
    | {
        aliases?: { [x: string]: unknown }[] | undefined
        api_site_parameter?: string | undefined
        audience?: string | undefined
        closed_beta_date?: number | undefined
        favicon_url?: string | undefined
        high_resolution_icon_url?: string | undefined
        icon_url?: string | undefined
        launch_date?: number | undefined
        logo_url?: string | undefined
        markdown_extensions?: { [x: string]: unknown }[] | undefined
        name?: string | undefined
        open_beta_date?: number | undefined
        related_sites?: { [x: string]: unknown }[] | undefined
        site_state?: string | undefined
        site_type?: string | undefined
        site_url?: string | undefined
        styling?:
          | {
              link_color?: string | undefined
              tag_background_color?: string | undefined
              tag_foreground_color?: string | undefined
            }
          | undefined
        twitter_account?: string | undefined
      }
    | undefined
  total_accepted?: number | undefined
  total_answers?: number | undefined
  total_badges?: number | undefined
  total_comments?: number | undefined
  total_questions?: number | undefined
  total_unanswered?: number | undefined
  total_users?: number | undefined
  total_votes?: number | undefined
}
type User = {
  about_me?: string | undefined
  accept_rate?: number | undefined
  account_id?: number | undefined
  age?: number | undefined
  answer_count?: number | undefined
  badge_counts?:
    | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
    | undefined
  creation_date?: number | undefined
  display_name?: string | undefined
  down_vote_count?: number | undefined
  is_employee?: boolean | undefined
  last_access_date?: number | undefined
  last_modified_date?: number | undefined
  link?: string | undefined
  location?: string | undefined
  profile_image?: string | undefined
  question_count?: number | undefined
  reputation?: number | undefined
  reputation_change_day?: number | undefined
  reputation_change_month?: number | undefined
  reputation_change_quarter?: number | undefined
  reputation_change_week?: number | undefined
  reputation_change_year?: number | undefined
  timed_penalty_date?: number | undefined
  up_vote_count?: number | undefined
  user_id?: number | undefined
  user_type?: string | undefined
  view_count?: number | undefined
  website_url?: string | undefined
}
type NetworkUsers = {
  account_id?: number | undefined
  answer_count?: number | undefined
  badge_counts?:
    | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
    | undefined
  creation_date?: number | undefined
  last_access_date?: number | undefined
  question_count?: number | undefined
  reputation?: number | undefined
  site_name?: string | undefined
  site_url?: string | undefined
  top_answers?: { [x: string]: unknown }[] | undefined
  top_questions?: { [x: string]: unknown }[] | undefined
  user_id?: number | undefined
  user_type?: string | undefined
}[]
type Questions = {
  accepted_answer_id?: number | undefined
  answer_count?: number | undefined
  answers?: { [x: string]: unknown }[] | undefined
  body?: string | undefined
  body_markdown?: string | undefined
  bounty_amount?: number | undefined
  bounty_closes_date?: number | undefined
  bounty_user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  can_close?: boolean | undefined
  can_flag?: boolean | undefined
  close_vote_count?: number | undefined
  closed_date?: number | undefined
  closed_details?:
    | {
        by_users?: { [x: string]: unknown }[] | undefined
        description?: string | undefined
        on_hold?: boolean | undefined
        original_questions?: { [x: string]: unknown }[] | undefined
        reason?: string | undefined
      }
    | undefined
  closed_reason?: string | undefined
  comment_count?: number | undefined
  comments?: { [x: string]: unknown }[] | undefined
  community_owned_date?: number | undefined
  creation_date?: number | undefined
  delete_vote_count?: number | undefined
  down_vote_count?: number | undefined
  downvoted?: boolean | undefined
  favorite_count?: number | undefined
  favorited?: boolean | undefined
  is_answered?: boolean | undefined
  last_activity_date?: number | undefined
  last_edit_date?: number | undefined
  last_editor?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  link?: string | undefined
  locked_date?: number | undefined
  migrated_from?:
    | {
        on_date?: number | undefined
        other_site?:
          | {
              aliases?: { [x: string]: unknown }[] | undefined
              api_site_parameter?: string | undefined
              audience?: string | undefined
              closed_beta_date?: number | undefined
              favicon_url?: string | undefined
              high_resolution_icon_url?: string | undefined
              icon_url?: string | undefined
              launch_date?: number | undefined
              logo_url?: string | undefined
              markdown_extensions?: { [x: string]: unknown }[] | undefined
              name?: string | undefined
              open_beta_date?: number | undefined
              related_sites?: { [x: string]: unknown }[] | undefined
              site_state?: string | undefined
              site_type?: string | undefined
              site_url?: string | undefined
              styling?:
                | {
                    link_color?: string | undefined
                    tag_background_color?: string | undefined
                    tag_foreground_color?: string | undefined
                  }
                | undefined
              twitter_account?: string | undefined
            }
          | undefined
        question_id?: number | undefined
      }
    | undefined
  migrated_to?:
    | {
        on_date?: number | undefined
        other_site?:
          | {
              aliases?: { [x: string]: unknown }[] | undefined
              api_site_parameter?: string | undefined
              audience?: string | undefined
              closed_beta_date?: number | undefined
              favicon_url?: string | undefined
              high_resolution_icon_url?: string | undefined
              icon_url?: string | undefined
              launch_date?: number | undefined
              logo_url?: string | undefined
              markdown_extensions?: { [x: string]: unknown }[] | undefined
              name?: string | undefined
              open_beta_date?: number | undefined
              related_sites?: { [x: string]: unknown }[] | undefined
              site_state?: string | undefined
              site_type?: string | undefined
              site_url?: string | undefined
              styling?:
                | {
                    link_color?: string | undefined
                    tag_background_color?: string | undefined
                    tag_foreground_color?: string | undefined
                  }
                | undefined
              twitter_account?: string | undefined
            }
          | undefined
        question_id?: number | undefined
      }
    | undefined
  notice?:
    | {
        body?: string | undefined
        creation_date?: number | undefined
        owner_user_id?: number | undefined
      }
    | undefined
  owner?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  protected_date?: number | undefined
  question_id?: number | undefined
  reopen_vote_count?: number | undefined
  score?: number | undefined
  share_link?: string | undefined
  tags?: { [x: string]: unknown }[] | undefined
  title?: string | undefined
  up_vote_count?: number | undefined
  upvoted?: boolean | undefined
  view_count?: number | undefined
}[]
type AccountMerge = {
  merge_date?: number | undefined
  new_account_id?: number | undefined
  old_account_id?: number | undefined
}[]
type Notifications = {
  body?: string | undefined
  creation_date?: number | undefined
  is_unread?: boolean | undefined
  notification_type?: string | undefined
  post_id?: number | undefined
  site?:
    | {
        aliases?: { [x: string]: unknown }[] | undefined
        api_site_parameter?: string | undefined
        audience?: string | undefined
        closed_beta_date?: number | undefined
        favicon_url?: string | undefined
        high_resolution_icon_url?: string | undefined
        icon_url?: string | undefined
        launch_date?: number | undefined
        logo_url?: string | undefined
        markdown_extensions?: { [x: string]: unknown }[] | undefined
        name?: string | undefined
        open_beta_date?: number | undefined
        related_sites?: { [x: string]: unknown }[] | undefined
        site_state?: string | undefined
        site_type?: string | undefined
        site_url?: string | undefined
        styling?:
          | {
              link_color?: string | undefined
              tag_background_color?: string | undefined
              tag_foreground_color?: string | undefined
            }
          | undefined
        twitter_account?: string | undefined
      }
    | undefined
}[]
type Privileges = {
  description?: string | undefined
  reputation?: number | undefined
  short_description?: string | undefined
}[]
type ReputationChanges = {
  link?: string | undefined
  on_date?: number | undefined
  post_id?: number | undefined
  post_type?: string | undefined
  reputation_change?: number | undefined
  title?: string | undefined
  user_id?: number | undefined
  vote_type?: string | undefined
}[]
type ReputationHistory = {
  creation_date?: number | undefined
  post_id?: number | undefined
  reputation_change?: number | undefined
  reputation_history_type?: string | undefined
  user_id?: number | undefined
}[]
type SuggestedEdits = {
  approval_date?: number | undefined
  body?: string | undefined
  comment?: string | undefined
  creation_date?: number | undefined
  post_id?: number | undefined
  post_type?: string | undefined
  proposing_user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  rejection_date?: number | undefined
  suggested_edit_id?: number | undefined
  tags?: { [x: string]: unknown }[] | undefined
  title?: string | undefined
}[]
type Tags = {
  count?: number | undefined
  has_synonyms?: boolean | undefined
  is_moderator_only?: boolean | undefined
  is_required?: boolean | undefined
  last_activity_date?: number | undefined
  name?: string | undefined
  synonyms?: { [x: string]: unknown }[] | undefined
  user_id?: number | undefined
}[]
type UserTimelineObjects = {
  badge_id?: number | undefined
  comment_id?: number | undefined
  creation_date?: number | undefined
  detail?: string | undefined
  link?: string | undefined
  post_id?: number | undefined
  post_type?: string | undefined
  suggested_edit_id?: number | undefined
  timeline_type?: string | undefined
  title?: string | undefined
  user_id?: number | undefined
}[]
type TopTagObjects = {
  answer_count?: number | undefined
  answer_score?: number | undefined
  question_count?: number | undefined
  question_score?: number | undefined
  tag_name?: string | undefined
  user_id?: number | undefined
}[]
type WritePermissions = {
  can_add?: boolean | undefined
  can_delete?: boolean | undefined
  can_edit?: boolean | undefined
  max_daily_actions?: number | undefined
  min_seconds_between_actions?: number | undefined
  object_type?: string | undefined
  user_id?: number | undefined
}[]
type Posts = {
  body?: string | undefined
  body_markdown?: string | undefined
  comment_count?: number | undefined
  comments?: { [x: string]: unknown }[] | undefined
  creation_date?: number | undefined
  down_vote_count?: number | undefined
  downvoted?: boolean | undefined
  last_activity_date?: number | undefined
  last_edit_date?: number | undefined
  last_editor?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  link?: string | undefined
  owner?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  post_id?: number | undefined
  post_type?: string | undefined
  score?: number | undefined
  share_link?: string | undefined
  title?: string | undefined
  up_vote_count?: number | undefined
  upvoted?: boolean | undefined
}[]
type Revisions = {
  body?: string | undefined
  comment?: string | undefined
  creation_date?: number | undefined
  is_rollback?: boolean | undefined
  last_body?: string | undefined
  last_tags?: { [x: string]: unknown }[] | undefined
  last_title?: string | undefined
  post_id?: number | undefined
  post_type?: string | undefined
  revision_guid?: string | undefined
  revision_number?: number | undefined
  revision_type?: string | undefined
  set_community_wiki?: boolean | undefined
  tags?: { [x: string]: unknown }[] | undefined
  title?: string | undefined
  user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
}[]
type QuestionTimelineEvents = {
  comment_id?: number | undefined
  creation_date?: number | undefined
  down_vote_count?: number | undefined
  owner?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  post_id?: number | undefined
  question_id?: number | undefined
  revision_guid?: string | undefined
  timeline_type?: string | undefined
  up_vote_count?: number | undefined
  user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
}[]
type Sites = {
  aliases?: { [x: string]: unknown }[] | undefined
  api_site_parameter?: string | undefined
  audience?: string | undefined
  closed_beta_date?: number | undefined
  favicon_url?: string | undefined
  high_resolution_icon_url?: string | undefined
  icon_url?: string | undefined
  launch_date?: number | undefined
  logo_url?: string | undefined
  markdown_extensions?: { [x: string]: unknown }[] | undefined
  name?: string | undefined
  open_beta_date?: number | undefined
  related_sites?: { [x: string]: unknown }[] | undefined
  site_state?: string | undefined
  site_type?: string | undefined
  site_url?: string | undefined
  styling?:
    | {
        link_color?: string | undefined
        tag_background_color?: string | undefined
        tag_foreground_color?: string | undefined
      }
    | undefined
  twitter_account?: string | undefined
}[]
type TagSynonyms = {
  applied_count?: number | undefined
  creation_date?: number | undefined
  from_tag?: string | undefined
  last_applied_date?: number | undefined
  to_tag?: string | undefined
}[]
type TagWikis = {
  body?: string | undefined
  body_last_edit_date?: number | undefined
  excerpt?: string | undefined
  excerpt_last_edit_date?: number | undefined
  last_body_editor?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  last_excerpt_editor?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
  tag_name?: string | undefined
}[]
type TagScoreObjects = {
  post_count?: number | undefined
  score?: number | undefined
  user?:
    | {
        accept_rate?: number | undefined
        badge_counts?:
          | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
          | undefined
        display_name?: string | undefined
        link?: string | undefined
        profile_image?: string | undefined
        reputation?: number | undefined
        user_id?: number | undefined
        user_type?: string | undefined
      }
    | undefined
}[]
type Users = {
  about_me?: string | undefined
  accept_rate?: number | undefined
  account_id?: number | undefined
  age?: number | undefined
  answer_count?: number | undefined
  badge_counts?:
    | { bronze?: number | undefined; gold?: number | undefined; silver?: number | undefined }
    | undefined
  creation_date?: number | undefined
  display_name?: string | undefined
  down_vote_count?: number | undefined
  is_employee?: boolean | undefined
  last_access_date?: number | undefined
  last_modified_date?: number | undefined
  link?: string | undefined
  location?: string | undefined
  profile_image?: string | undefined
  question_count?: number | undefined
  reputation?: number | undefined
  reputation_change_day?: number | undefined
  reputation_change_month?: number | undefined
  reputation_change_quarter?: number | undefined
  reputation_change_week?: number | undefined
  reputation_change_year?: number | undefined
  timed_penalty_date?: number | undefined
  up_vote_count?: number | undefined
  user_id?: number | undefined
  user_type?: string | undefined
  view_count?: number | undefined
  website_url?: string | undefined
}[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/access-tokens/:accessTokens': {
      $get:
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: AccessTokens
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/access-tokens/:accessTokens/invalidate': {
      $get:
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: AccessTokens
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/answers': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Answers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/answers/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Answers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/answers/:ids/comments': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/apps/:accessTokens/de-authenticate': {
      $get:
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: AccessTokens
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { accessTokens: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/badges': {
      $get:
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/badges/name': {
      $get:
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/badges/recipients': {
      $get:
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/badges/tags': {
      $get:
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/badges/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/badges/:ids/recipients': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/comments': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/comments/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/comments/:id/delete': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/comments/:id/edit': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: CreatedComment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/errors': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/errors/:id': {
      $get:
        | { input: { param: { id: number } }; output: Error; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: Events
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/filters/create': {
      $get:
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: SingleFilter
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                base?: string | undefined
                exclude?: string | undefined
                include?: string | undefined
                unsafe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/filters/:filters': {
      $get:
        | {
            input: { param: { filters: string } }
            output: Filters
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { filters: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/inbox': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: InboxItems
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/inbox/unread': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: InboxItems
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/info': {
      $get:
        | {
            input: { query: { site: string } }
            output: InfoObject
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { query: { site: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/me': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/answers': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Answers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/associated': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: NetworkUsers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/badges': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/comments': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/comments/:toId': {
      $get:
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { toId: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/favorites': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/inbox': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: InboxItems
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/inbox/unread': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: InboxItems
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/mentioned': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/merges': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: AccountMerge
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/notifications': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Notifications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/notifications/unread': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Notifications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/privileges': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Privileges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/questions': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/questions/featured': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/questions/no-answers': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/questions/unaccepted': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/questions/unanswered': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/reputation': {
      $get:
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: ReputationChanges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: { filter?: string | undefined; callback?: string | undefined; site: string }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/reputation-history': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: ReputationHistory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/reputation-history/full': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: ReputationHistory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/suggested-edits': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: SuggestedEdits
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/tags': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Tags
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/tags/:tags/top-answers': {
      $get:
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Answers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/tags/:tags/top-questions': {
      $get:
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/timeline': {
      $get:
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: UserTimelineObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/top-answer-tags': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TopTagObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/top-question-tags': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TopTagObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/me/write-permissions': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: WritePermissions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/notifications': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: Notifications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/notifications/unread': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: Notifications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/posts': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Posts
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/posts/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Posts
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/posts/:ids/comments': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/posts/:ids/revisions': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Revisions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/posts/:ids/suggested-edits': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: SuggestedEdits
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/posts/:id/comments/add': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: CreatedComment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                filter?: string | undefined
                callback?: string | undefined
                site: string
                body?: string | undefined
                preview?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/privileges': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Privileges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions': {
      $get:
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?:
                  | 'activity'
                  | 'creation'
                  | 'votes'
                  | 'hot'
                  | 'week'
                  | 'month'
                  | 'relevance'
                  | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/featured': {
      $get:
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/no-answers': {
      $get:
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/unanswered': {
      $get:
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/:ids/answers': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Answers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/:ids/comments': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/:ids/linked': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/:ids/related': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'rank' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/questions/:ids/timeline': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: QuestionTimelineEvents
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/revisions/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Revisions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                intitle?: string | undefined
                nottagged?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/search/advanced': {
      $get:
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                accepted?: true | false | undefined
                answers?: number | undefined
                body?: string | undefined
                closed?: true | false | undefined
                migrated?: true | false | undefined
                notice?: true | false | undefined
                nottagged?: string | undefined
                q?: string | undefined
                title?: string | undefined
                url?: string | undefined
                user?: number | undefined
                views?: number | undefined
                wiki?: true | false | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/similar': {
      $get:
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                tagged?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'relevance' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                nottagged?: string | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/sites': {
      $get:
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: Sites
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/suggested-edits': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: SuggestedEdits
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/suggested-edits/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: SuggestedEdits
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Tags
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/moderator-only': {
      $get:
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Tags
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/required': {
      $get:
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Tags
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/synonyms': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TagSynonyms
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/:tags/faq': {
      $get:
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/:tags/info': {
      $get:
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Tags
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/:tags/related': {
      $get:
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Tags
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/:tags/synonyms': {
      $get:
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TagSynonyms
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'applied' | 'activity' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/:tags/wikis': {
      $get:
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TagWikis
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tags: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/:tag/top-answerers/:period': {
      $get:
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TagScoreObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/tags/:tag/top-askers/:period': {
      $get:
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TagScoreObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tag: string; period: 'all_time' | 'month' } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Users
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                inname?: string | undefined
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/moderators': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Users
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/moderators/elected': {
      $get:
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Users
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Users
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'reputation' | 'creation' | 'name' | 'modified' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/answers': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Answers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/associated': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: NetworkUsers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/badges': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Badges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'rank' | 'name' | 'type' | 'awarded' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/comments': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/comments/:toid': {
      $get:
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string; toid: number } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/favorites': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | 'added' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/mentioned': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Comments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/merges': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: AccountMerge
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/questions': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/questions/featured': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/questions/no-answers': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/questions/unaccepted': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/questions/unanswered': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/reputation': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: ReputationChanges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/reputation-history': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: ReputationHistory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/suggested-edits': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: SuggestedEdits
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'creation' | 'approval' | 'rejection' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/tags': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Tags
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'popular' | 'activity' | 'name' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:ids/timeline': {
      $get:
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: UserTimelineObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { ids: string } } & {
              query: {
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/inbox': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: InboxItems
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/inbox/unread': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: InboxItems
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
                since?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/notifications': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Notifications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/notifications/unread': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Notifications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/privileges': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Privileges
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/reputation-history/full': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: ReputationHistory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/tags/:tags/top-answers': {
      $get:
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Answers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/tags/:tags/top-questions': {
      $get:
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: Questions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number; tags: string } } & {
              query: {
                order?: 'desc' | 'asc' | undefined
                max?: string | undefined
                min?: string | undefined
                sort?: 'activity' | 'creation' | 'votes' | undefined
                fromdate?: number | undefined
                todate?: number | undefined
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/top-answer-tags': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TopTagObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/top-question-tags': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: TopTagObjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id/write-permissions': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: WritePermissions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { id: number } } & {
              query: {
                pagesize?: number | undefined
                page?: number | undefined
                filter?: string | undefined
                callback?: string | undefined
                site: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  },
  '/'
>
export default routes
