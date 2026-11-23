declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/discourse-post-event/events.json': {
      $get: {
        input: {
          query: {
            include_details?: 'true' | 'false' | undefined
            include_card?: 'true' | 'false' | undefined
            category_id?: number | undefined
            include_subcategories?: 'true' | 'false' | undefined
            post_id?: number | undefined
            attending_user?: string | undefined
            before?: string | undefined
            after?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            tags?: string[] | undefined
            search?: string | undefined
            status?: 'public' | 'private' | 'standalone' | undefined
          }
        }
        output: {
          events: {
            id: number
            category_id: number | null
            name?: (string | null) | undefined
            recurrence?: (string | null) | undefined
            recurrence_until?: (string | null) | undefined
            starts_at: string | null
            ends_at: string | null
            rrule?: string | undefined
            show_local_time: boolean
            timezone: string | null
            duration?: string | undefined
            all_day?: boolean | undefined
            custom_fields?: ({ [x: string]: unknown } | null) | undefined
            post: {
              id: number
              post_number: number
              url: string
              category_slug: string
              topic: {
                id: number
                title: string
                tags: string[]
                tags_descriptions: { [x: string]: unknown }
                slug: string
              }
            }
            occurrences: { starts_at: string | null; ends_at: string | null }[]
            can_act_on_discourse_post_event: boolean | null
            can_update_attendance: boolean | null
            creator?:
              | {
                  id: number
                  username: string
                  name?: (string | null) | undefined
                  avatar_template: string
                }
              | undefined
            hosts?:
              | {
                  id: number
                  username: string
                  name?: (string | null) | undefined
                  avatar_template: string
                  title?: (string | null) | undefined
                }[]
              | undefined
            is_closed: boolean
            is_expired: boolean
            is_ongoing: boolean
            is_private: boolean
            is_public: boolean
            is_standalone: boolean
            minimal?: (boolean | null) | undefined
            raw_invitees?: (string[] | null) | undefined
            reminders?:
              | { value: number; unit: string; period: 'before' | 'after'; type: string }[]
              | undefined
            sample_invitees?: { [x: string]: unknown }[] | undefined
            should_display_invitees: boolean
            stats?: { [x: string]: unknown } | undefined
            status: 'public' | 'private' | 'standalone'
            url?: string | undefined
            description?: (string | null) | undefined
            description_html?: (string | null) | undefined
            location?: (string | null) | undefined
            url_restates_location?: boolean | undefined
            watching_invitee?: ({ [x: string]: unknown } | null) | undefined
            chat_enabled?: (boolean | null) | undefined
            channel?: { [x: string]: unknown } | undefined
            livestream?: boolean | undefined
            allow_anonymous_livestream: boolean
            livestream_onebox?: (string | null) | undefined
            is_zoom_livestream?: boolean | undefined
            recording_url?: string | undefined
            recording_onebox?: (string | null) | undefined
            max_attendees?: (number | null) | undefined
            at_capacity: boolean
            image_upload?: ({ [x: string]: unknown } | null) | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discourse-post-event/events.ics': {
      $get: {
        input: {
          query: {
            category_id?: number | undefined
            include_subcategories?: 'true' | 'false' | undefined
            attending_user?: string | undefined
            before?: string | undefined
            after?: string | undefined
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/admin/backups.json': {
      $get: {
        input: {}
        output: { filename: string; size: number; last_modified: string }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { with_uploads: boolean } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/backups/:filename': {
      $put: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { filename: string } } & { query: { token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/badges.json': {
      $get: {
        input: {}
        output: {
          badges: {
            id: number
            name: string
            description: string
            grant_count: number
            allow_title: boolean
            multiple_grant: boolean
            icon: string
            image_url: string | null
            listable: boolean
            enabled: boolean
            badge_grouping_id: number
            system: boolean
            long_description: string
            slug: string
            manually_grantable: boolean
            query: string | null
            trigger: number | null
            target_posts: boolean
            auto_revoke: boolean
            show_posts: boolean
            i18n_name?: (string | null) | undefined
            image_upload_id: number | null
            badge_type_id: number
            show_in_post_header: boolean
          }[]
          badge_types: { id: number; name: string; sort_order: number }[]
          badge_groupings: {
            id: number
            name: string
            description: string | null
            position: number
            system: boolean
          }[]
          admin_badges: {
            protected_system_fields: { [x: string]: unknown }[]
            triggers: {
              user_change: number
              none: number
              post_revision: number
              trust_level_change: number
              post_action: number
            }
            badge_ids: { [x: string]: unknown }[]
            badge_grouping_ids: { [x: string]: unknown }[]
            badge_type_ids: { [x: string]: unknown }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { name: string; badge_type_id: number } }
        output: {
          badge_types: { id: number; name: string; sort_order: number }[]
          badge: {
            id: number
            name: string
            description: string
            grant_count: number
            allow_title: boolean
            multiple_grant: boolean
            icon: string
            image_url: string | null
            image_upload_id: number | null
            listable: boolean
            enabled: boolean
            badge_grouping_id: number
            system: boolean
            long_description: string
            slug: string
            manually_grantable: boolean
            query: string | null
            trigger: string | null
            target_posts: boolean
            auto_revoke: boolean
            show_posts: boolean
            badge_type_id: number
            show_in_post_header: boolean
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/badges/:id.json': {
      $put: {
        input: { param: { id: number } } & { json: { name: string; badge_type_id: number } }
        output: {
          badge_types: { id: number; name: string; sort_order: number }[]
          badge: {
            id: number
            name: string
            description: string
            grant_count: number
            allow_title: boolean
            multiple_grant: boolean
            icon: string
            image_url: string | null
            image_upload_id: number | null
            listable: boolean
            enabled: boolean
            badge_grouping_id: number
            system: boolean
            long_description: string
            slug: string
            manually_grantable: boolean
            query: string | null
            trigger: string | null
            target_posts: boolean
            auto_revoke: boolean
            show_posts: boolean
            badge_type_id: number
            show_in_post_header: boolean
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/categories.json': {
      $post: {
        input: {
          json: {
            name: string
            color?: string | undefined
            text_color?: string | undefined
            style_type?: string | undefined
            emoji?: string | undefined
            icon?: string | undefined
            parent_category_id?: number | undefined
            allow_badges?: boolean | undefined
            slug?: string | undefined
            topic_featured_links_allowed?: boolean | undefined
            permissions?: { everyone?: number | undefined; staff?: number | undefined } | undefined
            search_priority?: number | undefined
            form_template_ids?: { [x: string]: unknown }[] | undefined
            category_localizations?:
              | {
                  id?: number | undefined
                  locale: string
                  name: string
                  description?: string | undefined
                }[]
              | undefined
          }
        }
        output: {
          category: {
            id: number
            name: string
            color: string
            text_color: string
            style_type: string
            emoji: string | null
            icon: string | null
            slug: string
            locale?: (string | null) | undefined
            topic_count: number
            post_count: number
            position: number
            description: string | null
            description_text: string | null
            description_excerpt: string | null
            topic_url: string | null
            read_restricted: boolean
            permission: number | null
            notification_level: number
            can_edit: boolean
            topic_template: string | null
            topic_title_placeholder: string | null
            form_template_ids?: { [x: string]: unknown }[] | undefined
            has_children: boolean | null
            subcategory_count: number | null
            sort_order: string | null
            sort_ascending: string | null
            show_subcategory_list: boolean
            num_featured_topics: number
            default_view: string | null
            subcategory_list_style: string
            default_top_period: string
            default_list_filter: string
            minimum_required_tags: number
            navigate_to_first_post_after_read: boolean
            custom_fields: {}
            allowed_tags?: { [x: string]: unknown }[] | undefined
            allowed_tag_groups?: { [x: string]: unknown }[] | undefined
            allow_global_tags?: boolean | undefined
            required_tag_groups: { name: string; min_count: number }[]
            category_setting?:
              | {
                  auto_bump_cooldown_days?: number | undefined
                  num_auto_bump_daily?: (number | null) | undefined
                  require_reply_approval?: (boolean | null) | undefined
                  require_topic_approval?: (boolean | null) | undefined
                  nested_replies_default?: (boolean | null) | undefined
                  topic_posting_review_mode?: string | undefined
                  reply_posting_review_mode?: string | undefined
                }
              | undefined
            category_localizations?: { [x: string]: unknown }[] | undefined
            read_only_banner: string | null
            permission_groups?: { id: number; name: string }[] | undefined
            available_groups: { [x: string]: unknown }[]
            auto_close_hours: string | null
            auto_close_based_on_last_post: boolean
            allow_unlimited_owner_edits_on_first_post: boolean
            default_slow_mode_seconds: string | null
            group_permissions: { permission_type: number; group_name: string; group_id: number }[]
            email_in: string | null
            email_in_allow_strangers: boolean
            mailinglist_mirror: boolean
            all_topics_wiki: boolean
            can_delete: boolean
            allow_badges: boolean
            topic_featured_link_allowed: boolean
            search_priority: number
            topic_posting_review_group_ids: number[]
            reply_posting_review_group_ids: number[]
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
            uploaded_background: string | null
            uploaded_background_dark: string | null
            category_types?: { [x: string]: unknown } | undefined
            category_type_settings?: { [x: string]: unknown } | undefined
            available_category_types?:
              | {
                  id: string
                  name: string
                  title: string
                  description: string
                  icon: string
                  svg_icon: string | null
                  available: boolean
                  visible: boolean
                  configuration_schema: { [x: string]: unknown }
                }[]
              | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { include_subcategories?: true | undefined } }
        output: {
          category_list: {
            can_create_category: boolean
            can_create_topic: boolean
            categories: {
              id: number
              name: string
              color: string
              text_color: string
              style_type: string
              emoji: string | null
              icon: string | null
              slug: string
              topic_count: number
              post_count: number
              position: number
              description: string | null
              description_text: string | null
              description_excerpt: string | null
              topic_url: string | null
              read_restricted: boolean
              permission: number
              notification_level: number
              can_edit: boolean
              topic_template: string | null
              topic_title_placeholder: string | null
              has_children: boolean
              subcategory_count: number | null
              sort_order: string | null
              sort_ascending: string | null
              show_subcategory_list: boolean
              num_featured_topics: number
              default_view: string | null
              subcategory_list_style: string
              default_top_period: string
              default_list_filter: string
              minimum_required_tags: number
              navigate_to_first_post_after_read: boolean
              topics_day: number
              topics_week: number
              topics_month: number
              topics_year: number
              topics_all_time: number
              is_uncategorized?: boolean | undefined
              subcategory_ids: { [x: string]: unknown }[]
              subcategory_list?: ({ [x: string]: unknown }[] | null) | undefined
              uploaded_logo: string | null
              uploaded_logo_dark: string | null
              uploaded_background: string | null
              uploaded_background_dark: string | null
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/:id.json': {
      $put: {
        input: { param: { id: number } } & {
          json: {
            name: string
            color?: string | undefined
            text_color?: string | undefined
            style_type?: string | undefined
            emoji?: string | undefined
            icon?: string | undefined
            parent_category_id?: number | undefined
            allow_badges?: boolean | undefined
            slug?: string | undefined
            topic_featured_links_allowed?: boolean | undefined
            permissions?: { everyone?: number | undefined; staff?: number | undefined } | undefined
            search_priority?: number | undefined
            form_template_ids?: { [x: string]: unknown }[] | undefined
            category_localizations?:
              | {
                  id?: number | undefined
                  locale: string
                  name: string
                  description?: string | undefined
                }[]
              | undefined
          }
        }
        output: {
          success: string
          category: {
            id: number
            name: string
            color: string
            text_color: string
            style_type?: string | undefined
            emoji?: (string | null) | undefined
            icon?: (string | null) | undefined
            slug: string
            locale?: (string | null) | undefined
            topic_count: number
            post_count: number
            position: number
            description: string | null
            description_text: string | null
            description_excerpt: string | null
            topic_url: string | null
            read_restricted: boolean
            permission: number | null
            notification_level: number
            can_edit: boolean
            topic_template: string | null
            topic_title_placeholder: string | null
            form_template_ids: { [x: string]: unknown }[]
            has_children: boolean | null
            subcategory_count: number | null
            sort_order: string | null
            sort_ascending: string | null
            show_subcategory_list: boolean
            num_featured_topics: number
            default_view: string | null
            subcategory_list_style: string
            default_top_period: string
            default_list_filter: string
            minimum_required_tags: number
            navigate_to_first_post_after_read: boolean
            custom_fields: {}
            allowed_tags?: { [x: string]: unknown }[] | undefined
            allowed_tag_groups?: { [x: string]: unknown }[] | undefined
            allow_global_tags?: boolean | undefined
            required_tag_groups: { name: string; min_count: number }[]
            category_setting?:
              | {
                  auto_bump_cooldown_days?: number | undefined
                  num_auto_bump_daily?: (number | null) | undefined
                  require_reply_approval?: (boolean | null) | undefined
                  require_topic_approval?: (boolean | null) | undefined
                  nested_replies_default?: (boolean | null) | undefined
                  topic_posting_review_mode?: string | undefined
                  reply_posting_review_mode?: string | undefined
                }
              | undefined
            category_localizations?: { [x: string]: unknown }[] | undefined
            read_only_banner: string | null
            permission_groups?: { id: number; name: string }[] | undefined
            available_groups: { [x: string]: unknown }[]
            auto_close_hours: string | null
            auto_close_based_on_last_post: boolean
            allow_unlimited_owner_edits_on_first_post: boolean
            default_slow_mode_seconds: string | null
            group_permissions: { permission_type: number; group_name: string; group_id: number }[]
            email_in: string | null
            email_in_allow_strangers: boolean
            mailinglist_mirror: boolean
            all_topics_wiki: boolean
            can_delete: boolean
            allow_badges: boolean
            topic_featured_link_allowed: boolean
            search_priority: number
            topic_posting_review_group_ids: number[]
            reply_posting_review_group_ids: number[]
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
            uploaded_background: string | null
            uploaded_background_dark: string | null
            category_types?: { [x: string]: unknown } | undefined
            category_type_settings?: { [x: string]: unknown } | undefined
            available_category_types?:
              | {
                  id: string
                  name: string
                  title: string
                  description: string
                  icon: string
                  svg_icon: string | null
                  available: boolean
                  visible: boolean
                  configuration_schema: { [x: string]: unknown }
                }[]
              | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/c/:slug/:id.json': {
      $get: {
        input: { param: { slug: string; id: number } }
        output: {
          users?:
            | { id: number; username: string; name: string; avatar_template: string }[]
            | undefined
          primary_groups?: { [x: string]: unknown }[] | undefined
          topic_list: {
            filter?: string | undefined
            can_create_topic: boolean
            per_page: number
            top_tags?: { id: number; name: string; slug: string }[] | undefined
            topics: {
              id: number
              title: string
              fancy_title: string
              slug: string
              posts_count: number
              reply_count: number
              highest_post_number: number
              image_url: string | null
              created_at: string
              last_posted_at: string
              bumped: boolean
              bumped_at: string
              archetype: string
              unseen: boolean
              pinned: boolean
              unpinned: string | null
              excerpt: string
              visible: boolean
              closed: boolean
              archived: boolean
              bookmarked: string | null
              liked: string | null
              views: number
              like_count: number
              has_summary: boolean
              last_poster_username: string
              category_id: number
              pinned_globally: boolean
              featured_link: string | null
              posters: {
                extras: string
                description: string
                user_id: number
                primary_group_id: number | null
              }[]
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/c/:id/show.json': {
      $get: {
        input: { param: { id: number } }
        output: {
          category: {
            id: number
            name: string
            color: string
            text_color: string
            style_type: string
            emoji: string | null
            icon: string | null
            slug: string
            locale?: (string | null) | undefined
            topic_count: number
            post_count: number
            position: number
            description: string | null
            description_text: string | null
            description_excerpt: string | null
            topic_url: string | null
            read_restricted: boolean
            permission: number | null
            notification_level: number
            can_edit: boolean
            topic_template: string | null
            topic_title_placeholder: string | null
            form_template_ids?: { [x: string]: unknown }[] | undefined
            has_children: boolean | null
            subcategory_count: number | null
            sort_order: string | null
            sort_ascending: string | null
            show_subcategory_list: boolean
            num_featured_topics: number
            default_view: string | null
            subcategory_list_style: string
            default_top_period: string
            default_list_filter: string
            minimum_required_tags: number
            navigate_to_first_post_after_read: boolean
            custom_fields: {}
            allowed_tags?: { [x: string]: unknown }[] | undefined
            allowed_tag_groups?: { [x: string]: unknown }[] | undefined
            allow_global_tags?: boolean | undefined
            required_tag_groups: { name: string; min_count: number }[]
            category_setting?:
              | {
                  auto_bump_cooldown_days?: number | undefined
                  num_auto_bump_daily?: (number | null) | undefined
                  require_reply_approval?: (boolean | null) | undefined
                  require_topic_approval?: (boolean | null) | undefined
                  nested_replies_default?: (boolean | null) | undefined
                  topic_posting_review_mode?: string | undefined
                  reply_posting_review_mode?: string | undefined
                }
              | undefined
            category_localizations?: { [x: string]: unknown }[] | undefined
            read_only_banner: string | null
            permission_groups?: { id: number; name: string }[] | undefined
            available_groups: { [x: string]: unknown }[]
            auto_close_hours: string | null
            auto_close_based_on_last_post: boolean
            allow_unlimited_owner_edits_on_first_post: boolean
            default_slow_mode_seconds: string | null
            group_permissions: { permission_type: number; group_name: string; group_id: number }[]
            email_in: string | null
            email_in_allow_strangers: boolean
            mailinglist_mirror: boolean
            all_topics_wiki: boolean
            can_delete: boolean
            allow_badges: boolean
            topic_featured_link_allowed: boolean
            search_priority: number
            topic_posting_review_group_ids: number[]
            reply_posting_review_group_ids: number[]
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
            uploaded_background: string | null
            uploaded_background_dark: string | null
            category_types?: { [x: string]: unknown } | undefined
            category_type_settings?: { [x: string]: unknown } | undefined
            available_category_types?:
              | {
                  id: string
                  name: string
                  title: string
                  description: string
                  icon: string
                  svg_icon: string | null
                  available: boolean
                  visible: boolean
                  configuration_schema: { [x: string]: unknown }
                }[]
              | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/groups.json': {
      $post: {
        input: {
          json: {
            group: {
              name: string
              full_name?: string | undefined
              bio_raw?: string | undefined
              usernames?: string | undefined
              owner_usernames?: string | undefined
              automatic_membership_email_domains?: string | undefined
              visibility_level?: number | undefined
              primary_group?: boolean | undefined
              flair_icon?: string | undefined
              flair_upload_id?: number | undefined
              flair_bg_color?: string | undefined
              public_admission?: boolean | undefined
              public_exit?: boolean | undefined
              default_notification_level?: number | undefined
              muted_category_ids?: number[] | undefined
              regular_category_ids?: number[] | undefined
              watching_category_ids?: number[] | undefined
              tracking_category_ids?: number[] | undefined
              watching_first_post_category_ids?: number[] | undefined
            }
          }
        }
        output: {
          basic_group: {
            id: number
            automatic: boolean
            name: string
            user_count: number
            mentionable_level: number
            messageable_level: number
            visibility_level: number
            primary_group: boolean
            title: string | null
            grant_trust_level: string | null
            incoming_email: string | null
            has_messages: boolean
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            bio_raw: string | null
            bio_cooked: string | null
            bio_excerpt: string | null
            public_admission: boolean
            public_exit: boolean
            allow_membership_requests: boolean
            full_name: string | null
            default_notification_level: number
            membership_request_template: string | null
            members_visibility_level: number
            can_see_members: boolean
            can_admin_group: boolean
            can_edit_group?: boolean | undefined
            publish_read_state: boolean
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/groups/:id.json': {
      $delete: {
        input: { param: { id: number } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:name.json': {
      $get: {
        input: { param: { name: string } }
        output: {
          group: {
            id: number
            automatic: boolean
            name: string
            user_count?: number | undefined
            mentionable_level: number
            messageable_level: number
            visibility_level: number
            primary_group: boolean
            title: string | null
            grant_trust_level: string | null
            incoming_email: string | null
            has_messages: boolean
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            bio_raw: string | null
            bio_cooked: string | null
            bio_excerpt: string | null
            public_admission: boolean
            public_exit: boolean
            allow_membership_requests: boolean
            full_name: string | null
            default_notification_level: number
            membership_request_template: string | null
            is_group_user: boolean
            members_visibility_level: number
            can_see_members: boolean
            can_admin_group: boolean
            can_edit_group?: boolean | undefined
            publish_read_state: boolean
            is_group_owner_display: boolean
            mentionable: boolean
            messageable: boolean
            automatic_membership_email_domains: string | null
            smtp_updated_at?: (string | null) | undefined
            smtp_updated_by?: ({ [x: string]: unknown } | null) | undefined
            smtp_enabled?: boolean | undefined
            smtp_server: string | null
            smtp_port: string | null
            smtp_ssl_mode: number | null
            email_username: string | null
            email_from_alias?: (string | null) | undefined
            email_password: string | null
            message_count: number
            allow_unknown_sender_topic_replies: boolean
            associated_group_ids?: { [x: string]: unknown }[] | undefined
            watching_category_ids: { [x: string]: unknown }[]
            tracking_category_ids: { [x: string]: unknown }[]
            watching_first_post_category_ids: { [x: string]: unknown }[]
            regular_category_ids: { [x: string]: unknown }[]
            muted_category_ids: { [x: string]: unknown }[]
            watching_tags?: { [x: string]: unknown }[] | undefined
            watching_first_post_tags?: { [x: string]: unknown }[] | undefined
            tracking_tags?: { [x: string]: unknown }[] | undefined
            regular_tags?: { [x: string]: unknown }[] | undefined
            muted_tags?: { [x: string]: unknown }[] | undefined
          }
          extras: { visible_group_names: { [x: string]: unknown }[] }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:id.json': {
      $put: {
        input: { param: { id: number } } & {
          json: {
            group: {
              name: string
              full_name?: string | undefined
              bio_raw?: string | undefined
              usernames?: string | undefined
              owner_usernames?: string | undefined
              automatic_membership_email_domains?: string | undefined
              visibility_level?: number | undefined
              primary_group?: boolean | undefined
              flair_icon?: string | undefined
              flair_upload_id?: number | undefined
              flair_bg_color?: string | undefined
              public_admission?: boolean | undefined
              public_exit?: boolean | undefined
              default_notification_level?: number | undefined
              muted_category_ids?: number[] | undefined
              regular_category_ids?: number[] | undefined
              watching_category_ids?: number[] | undefined
              tracking_category_ids?: number[] | undefined
              watching_first_post_category_ids?: number[] | undefined
            }
          }
        }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/by-id/:id.json': {
      $get: {
        input: { param: { id: string } }
        output: {
          group: {
            id: number
            automatic: boolean
            name: string
            user_count?: number | undefined
            mentionable_level: number
            messageable_level: number
            visibility_level: number
            primary_group: boolean
            title: string | null
            grant_trust_level: string | null
            incoming_email: string | null
            has_messages: boolean
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            bio_raw: string | null
            bio_cooked: string | null
            bio_excerpt: string | null
            public_admission: boolean
            public_exit: boolean
            allow_membership_requests: boolean
            full_name: string | null
            default_notification_level: number
            membership_request_template: string | null
            is_group_user: boolean
            members_visibility_level: number
            can_see_members: boolean
            can_admin_group: boolean
            can_edit_group?: boolean | undefined
            publish_read_state: boolean
            is_group_owner_display: boolean
            mentionable: boolean
            messageable: boolean
            automatic_membership_email_domains: string | null
            smtp_updated_at?: (string | null) | undefined
            smtp_updated_by?: ({ [x: string]: unknown } | null) | undefined
            smtp_enabled?: boolean | undefined
            smtp_server: string | null
            smtp_port: string | null
            smtp_ssl_mode: number | null
            email_username: string | null
            email_from_alias?: (string | null) | undefined
            email_password: string | null
            message_count: number
            allow_unknown_sender_topic_replies: boolean
            associated_group_ids?: { [x: string]: unknown }[] | undefined
            watching_category_ids: { [x: string]: unknown }[]
            tracking_category_ids: { [x: string]: unknown }[]
            watching_first_post_category_ids: { [x: string]: unknown }[]
            regular_category_ids: { [x: string]: unknown }[]
            muted_category_ids: { [x: string]: unknown }[]
            watching_tags?: { [x: string]: unknown }[] | undefined
            watching_first_post_tags?: { [x: string]: unknown }[] | undefined
            tracking_tags?: { [x: string]: unknown }[] | undefined
            regular_tags?: { [x: string]: unknown }[] | undefined
            muted_tags?: { [x: string]: unknown }[] | undefined
          }
          extras: { visible_group_names: { [x: string]: unknown }[] }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:name/members.json': {
      $get: {
        input: { param: { name: string } }
        output: {
          members: {
            id: number
            username: string
            name: string | null
            avatar_template: string
            title: string | null
            last_posted_at: string
            last_seen_at: string
            added_at: string
            timezone: string
          }[]
          owners: {
            id: number
            username: string
            name: string | null
            avatar_template: string
            title: string | null
            last_posted_at: string
            last_seen_at: string
            added_at: string
            timezone: string
          }[]
          meta: { total: number; limit: number; offset: number }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:id/members.json': {
      $put: {
        input: { param: { id: number } } & { json: { usernames?: string | undefined } }
        output: {
          success: string
          usernames: { [x: string]: unknown }[]
          emails: { [x: string]: unknown }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } } & { json: { usernames?: string | undefined } }
        output: {
          success: string
          usernames: { [x: string]: unknown }[]
          skipped_usernames: { [x: string]: unknown }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups.json': {
      $get: {
        input: {}
        output: {
          groups: {
            id: number
            automatic: boolean
            name: string
            display_name: string
            user_count?: number | undefined
            mentionable_level: number
            messageable_level: number
            visibility_level: number
            primary_group: boolean
            title: string | null
            grant_trust_level: string | null
            incoming_email: string | null
            has_messages: boolean
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            bio_raw: string | null
            bio_cooked: string | null
            bio_excerpt: string | null
            public_admission: boolean
            public_exit: boolean
            allow_membership_requests: boolean
            full_name: string | null
            default_notification_level: number
            membership_request_template: string | null
            is_group_user?: boolean | undefined
            is_group_owner?: boolean | undefined
            members_visibility_level: number
            can_see_members: boolean
            can_admin_group: boolean
            can_edit_group?: boolean | undefined
            publish_read_state: boolean
          }[]
          extras: { type_filters: { [x: string]: unknown }[] }
          total_rows_groups: number
          load_more_groups: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invites.json': {
      $post: {
        input: { header: { 'Api-Key': string; 'Api-Username': string } } & {
          json: {
            email?: string | undefined
            skip_email?: boolean | undefined
            custom_message?: string | undefined
            max_redemptions_allowed?: number | undefined
            topic_id?: number | undefined
            group_ids?: string | undefined
            group_names?: string | undefined
            expires_at?: string | undefined
          }
        }
        output: {
          id: number
          invite_key: string
          link: string
          description: string | null
          email: string
          domain: string | null
          emailed: boolean
          can_delete_invite: boolean
          custom_message: string | null
          created_at: string
          updated_at: string
          expires_at: string
          expired: boolean
          grants_admin: boolean
          grants_moderator: boolean
          topics: { [x: string]: unknown }[]
          groups: { [x: string]: unknown }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invites/create-multiple.json': {
      $post: {
        input: { header: { 'Api-Key': string; 'Api-Username': string } } & {
          json: {
            email?: string | undefined
            skip_email?: boolean | undefined
            custom_message?: string | undefined
            max_redemptions_allowed?: number | undefined
            topic_id?: number | undefined
            group_ids?: string | undefined
            group_names?: string | undefined
            expires_at?: string | undefined
          }
        }
        output: {
          num_successfully_created_invitations?: number | undefined
          num_failed_invitations?: number | undefined
          failed_invitations?: { [x: string]: unknown }[] | undefined
          successful_invitations?: unknown[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications.json': {
      $get: {
        input: {}
        output: {
          notifications?:
            | {
                id?: number | undefined
                user_id?: number | undefined
                notification_type?: number | undefined
                read?: boolean | undefined
                created_at?: string | undefined
                post_number?: (number | null) | undefined
                topic_id?: (number | null) | undefined
                slug?: (string | null) | undefined
                data?:
                  | {
                      badge_id?: number | undefined
                      badge_name?: string | undefined
                      badge_slug?: string | undefined
                      badge_title?: boolean | undefined
                      username?: string | undefined
                    }
                  | undefined
              }[]
            | undefined
          total_rows_notifications?: number | undefined
          seen_notification_id?: number | undefined
          load_more_notifications?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/mark-read.json': {
      $put: {
        input: { json: { id?: number | undefined } }
        output: { success?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/posts.json': {
      $get: {
        input: { query: { before?: number | undefined } }
        output: {
          latest_posts: {
            id: number
            name: string | null
            username: string
            avatar_template: string
            created_at: string
            cooked: string
            post_number: number
            post_type: number
            posts_count: number
            updated_at: string
            reply_count: number
            reply_to_post_number: string | null
            quote_count: number
            incoming_link_count: number
            reads: number
            readers_count: number
            score: number
            yours: boolean
            topic_id: number
            topic_slug: string
            topic_title: string
            topic_html_title: string
            category_id: number
            display_username: string | null
            primary_group_name: string | null
            flair_name: string | null
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            flair_group_id: string | null
            badges_granted: { [x: string]: unknown }[]
            version: number
            can_edit: boolean
            can_delete: boolean
            can_recover: boolean
            can_see_hidden_post: boolean
            can_wiki: boolean
            user_title: string | null
            bookmarked: boolean
            raw: string
            actions_summary: { id: number; can_act: boolean }[]
            moderator: boolean
            admin: boolean
            staff: boolean
            user_id: number
            hidden: boolean
            trust_level: number
            deleted_at: string | null
            user_deleted: boolean
            edit_reason: string | null
            can_view_edit_history: boolean
            wiki: boolean
            excerpt: string
            truncated: boolean
            reviewable_id: string | null
            reviewable_score_count: number
            reviewable_score_pending_count: number
            post_url: string
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            title?: string | undefined
            raw: string
            topic_id?: number | undefined
            category?: number | undefined
            target_recipients?: string | undefined
            target_usernames?: string | undefined
            archetype?: string | undefined
            created_at?: string | undefined
            reply_to_post_number?: number | undefined
            embed_url?: string | undefined
            external_id?: string | undefined
            auto_track?: boolean | undefined
          }
        }
        output: {
          id: number
          name: string | null
          username: string
          avatar_template: string
          created_at: string
          raw?: string | undefined
          cooked: string
          post_number: number
          post_type: number
          posts_count: number
          updated_at: string
          reply_count: number
          reply_to_post_number: string | null
          quote_count: number
          incoming_link_count: number
          reads: number
          readers_count: number
          score: number
          yours: boolean
          topic_id: number
          topic_slug: string
          display_username: string | null
          primary_group_name: string | null
          flair_name: string | null
          flair_url: string | null
          flair_bg_color: string | null
          flair_color: string | null
          flair_group_id?: (number | null) | undefined
          badges_granted?: { [x: string]: unknown }[] | undefined
          version: number
          can_edit: boolean
          can_delete: boolean
          can_recover: boolean
          can_see_hidden_post?: boolean | undefined
          can_wiki: boolean
          user_title: string | null
          bookmarked: boolean
          actions_summary: { id: number; can_act: boolean }[]
          moderator: boolean
          admin: boolean
          staff: boolean
          user_id: number
          draft_sequence: number
          hidden: boolean
          trust_level: number
          deleted_at: string | null
          user_deleted: boolean
          edit_reason: string | null
          can_view_edit_history: boolean
          wiki: boolean
          reviewable_id: number | null
          reviewable_score_count: number
          reviewable_score_pending_count: number
          post_url: string
          post_localizations?: { [x: string]: unknown }[] | undefined
          mentioned_users?: { [x: string]: unknown }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/posts/:id.json': {
      $get: {
        input: { param: { id: string } }
        output: {
          id: number
          username: string
          avatar_template: string
          created_at: string
          cooked: string
          post_number: number
          post_type: number
          posts_count: number
          updated_at: string
          reply_count: number
          reply_to_post_number: string | null
          quote_count: number
          incoming_link_count: number
          reads: number
          readers_count: number
          score: number
          yours: boolean
          topic_id: number
          topic_slug: string
          primary_group_name: string | null
          flair_name: string | null
          flair_url: string | null
          flair_bg_color: string | null
          flair_color: string | null
          flair_group_id?: (number | null) | undefined
          version: number
          can_edit: boolean
          can_delete: boolean
          can_recover: boolean
          can_see_hidden_post?: boolean | undefined
          can_wiki: boolean
          user_title: string | null
          bookmarked: boolean
          raw: string
          actions_summary: {
            id: number
            count?: number | undefined
            acted?: boolean | undefined
            can_undo?: boolean | undefined
            can_act?: boolean | undefined
          }[]
          moderator: boolean
          admin: boolean
          staff: boolean
          user_id: number
          hidden: boolean
          trust_level: number
          deleted_at: string | null
          user_deleted: boolean
          edit_reason: string | null
          can_view_edit_history: boolean
          wiki: boolean
          reviewable_id: number | null
          reviewable_score_count: number
          reviewable_score_pending_count: number
          post_url: string
          mentioned_users?: { [x: string]: unknown }[] | undefined
          name?: (string | null) | undefined
          display_username?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: {
            post?: { raw: string; edit_reason?: string | undefined } | undefined
            bypass_bump?: boolean | undefined
          }
        }
        output: {
          post: {
            id: number
            username: string
            avatar_template: string
            created_at: string
            cooked: string
            post_number: number
            post_type: number
            posts_count: number
            updated_at: string
            reply_count: number
            reply_to_post_number: string | null
            quote_count: number
            incoming_link_count: number
            reads: number
            readers_count: number
            score: number
            yours: boolean
            topic_id: number
            topic_slug: string
            primary_group_name: string | null
            flair_name: string | null
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            flair_group_id?: (number | null) | undefined
            badges_granted?: { [x: string]: unknown }[] | undefined
            version: number
            can_edit: boolean
            can_delete: boolean
            can_recover: boolean
            can_see_hidden_post?: boolean | undefined
            can_wiki: boolean
            user_title: string | null
            bookmarked: boolean
            raw: string
            actions_summary: { id: number; can_act: boolean }[]
            moderator: boolean
            admin: boolean
            staff: boolean
            user_id: number
            draft_sequence: number
            hidden: boolean
            trust_level: number
            deleted_at: string | null
            user_deleted: boolean
            edit_reason: string | null
            can_view_edit_history: boolean
            wiki: boolean
            reviewable_id: number | null
            reviewable_score_count: number
            reviewable_score_pending_count: number
            post_url: string
            post_localizations?: { [x: string]: unknown }[] | undefined
            mentioned_users?: { [x: string]: unknown }[] | undefined
            name?: (string | null) | undefined
            display_username?: (string | null) | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } } & { json: { force_destroy?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/posts/:id/replies.json': {
      $get: {
        input: { param: { id: string } }
        output: {
          id: number
          name: string | null
          username: string
          avatar_template: string
          created_at: string
          cooked: string
          post_number: number
          post_type: number
          posts_count: number
          updated_at: string
          reply_count: number
          reply_to_post_number: number
          quote_count: number
          incoming_link_count: number
          reads: number
          readers_count: number
          score: number
          yours: boolean
          topic_id: number
          topic_slug: string
          display_username: string | null
          primary_group_name: string | null
          flair_name: string | null
          flair_url: string | null
          flair_bg_color: string | null
          flair_color: string | null
          flair_group_id?: (number | null) | undefined
          version: number
          can_edit: boolean
          can_delete: boolean
          can_recover: boolean
          can_see_hidden_post: boolean
          can_wiki: boolean
          user_title: string | null
          reply_to_user: {
            id?: number | undefined
            username: string
            name?: string | undefined
            avatar_template: string
          }
          bookmarked: boolean
          actions_summary: { id: number; can_act: boolean }[]
          moderator: boolean
          admin: boolean
          staff: boolean
          user_id: number
          hidden: boolean
          trust_level: number
          deleted_at: string | null
          user_deleted: boolean
          edit_reason: string | null
          can_view_edit_history: boolean
          wiki: boolean
          reviewable_id: number | null
          reviewable_score_count: number
          reviewable_score_pending_count: number
          post_url: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/posts/:id/locked.json': {
      $put: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { locked: string } }
        output: { locked: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/post_actions.json': {
      $post: {
        input: { header: { 'Api-Key': string; 'Api-Username': string } } & {
          json: { id: number; post_action_type_id: number; flag_topic?: boolean | undefined }
        }
        output: {
          id: number
          name: string
          username: string
          avatar_template: string
          created_at: string
          cooked: string
          post_number: number
          post_type: number
          posts_count: number
          updated_at: string
          reply_count: number
          reply_to_post_number: string | null
          quote_count: number
          incoming_link_count: number
          reads: number
          readers_count: number
          score: number
          yours: boolean
          topic_id: number
          topic_slug: string
          display_username: string
          primary_group_name: string | null
          flair_name: string | null
          flair_url: string | null
          flair_bg_color: string | null
          flair_color: string | null
          flair_group_id: number | null
          badges_granted: unknown[]
          version: number
          can_edit: boolean
          can_delete: boolean
          can_recover: boolean
          can_see_hidden_post: boolean
          can_wiki: boolean
          user_title: string | null
          bookmarked: boolean
          actions_summary: {
            id?: number | undefined
            count?: number | undefined
            acted?: boolean | undefined
            can_undo?: boolean | undefined
            can_act?: boolean | undefined
          }[]
          moderator: boolean
          admin: boolean
          staff: boolean
          user_id: number
          hidden: boolean
          trust_level: number
          deleted_at: string | null
          user_deleted: boolean
          edit_reason: string | null
          can_view_edit_history: boolean
          wiki: boolean
          reviewable_id: number | null
          reviewable_score_count: number
          reviewable_score_pending_count: number
          post_url: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/topics/private-messages/:username.json': {
      $get: {
        input: { param: { username: string } }
        output: {
          users?:
            | {
                id?: number | undefined
                username?: string | undefined
                name?: string | undefined
                avatar_template?: string | undefined
              }[]
            | undefined
          primary_groups?: { [x: string]: unknown }[] | undefined
          topic_list?:
            | {
                can_create_topic?: boolean | undefined
                draft?: (string | null) | undefined
                draft_key?: string | undefined
                draft_sequence?: number | undefined
                per_page?: number | undefined
                topics?:
                  | {
                      id?: number | undefined
                      title?: string | undefined
                      fancy_title?: string | undefined
                      slug?: string | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      highest_post_number?: number | undefined
                      image_url?: (string | null) | undefined
                      created_at?: string | undefined
                      last_posted_at?: string | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      archetype?: string | undefined
                      unseen?: boolean | undefined
                      last_read_post_number?: number | undefined
                      unread_posts?: number | undefined
                      pinned?: boolean | undefined
                      unpinned?: (string | null) | undefined
                      visible?: boolean | undefined
                      closed?: boolean | undefined
                      archived?: boolean | undefined
                      notification_level?: number | undefined
                      bookmarked?: boolean | undefined
                      liked?: boolean | undefined
                      views?: number | undefined
                      like_count?: number | undefined
                      has_summary?: boolean | undefined
                      last_poster_username?: string | undefined
                      category_id?: (string | null) | undefined
                      pinned_globally?: boolean | undefined
                      featured_link?: (string | null) | undefined
                      allowed_user_count?: number | undefined
                      posters?:
                        | {
                            extras?: string | undefined
                            description?: string | undefined
                            user_id?: number | undefined
                            primary_group_id?: (number | null) | undefined
                          }[]
                        | undefined
                      participants?:
                        | {
                            extras?: string | undefined
                            description?: (string | null) | undefined
                            user_id?: number | undefined
                            primary_group_id?: (number | null) | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/topics/private-messages-sent/:username.json': {
      $get: {
        input: { param: { username: string } }
        output: {
          users?:
            | {
                id?: number | undefined
                username?: string | undefined
                name?: (string | null) | undefined
                avatar_template?: string | undefined
              }[]
            | undefined
          primary_groups?: { [x: string]: unknown }[] | undefined
          topic_list?:
            | {
                can_create_topic?: boolean | undefined
                draft?: (string | null) | undefined
                draft_key?: string | undefined
                draft_sequence?: number | undefined
                per_page?: number | undefined
                topics?:
                  | {
                      id?: number | undefined
                      title?: string | undefined
                      fancy_title?: string | undefined
                      slug?: string | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      highest_post_number?: number | undefined
                      image_url?: (string | null) | undefined
                      created_at?: string | undefined
                      last_posted_at?: string | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      archetype?: string | undefined
                      unseen?: boolean | undefined
                      last_read_post_number?: number | undefined
                      unread_posts?: number | undefined
                      pinned?: boolean | undefined
                      unpinned?: (string | null) | undefined
                      visible?: boolean | undefined
                      closed?: boolean | undefined
                      archived?: boolean | undefined
                      notification_level?: number | undefined
                      bookmarked?: boolean | undefined
                      liked?: boolean | undefined
                      views?: number | undefined
                      like_count?: number | undefined
                      has_summary?: boolean | undefined
                      last_poster_username?: string | undefined
                      category_id?: (string | null) | undefined
                      pinned_globally?: boolean | undefined
                      featured_link?: (string | null) | undefined
                      allowed_user_count?: number | undefined
                      posters?:
                        | {
                            extras?: string | undefined
                            description?: string | undefined
                            user_id?: number | undefined
                            primary_group_id?: (number | null) | undefined
                          }[]
                        | undefined
                      participants?: { [x: string]: unknown }[] | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search.json': {
      $get: {
        input: { query: { q?: string | undefined; page?: number | undefined } }
        output: {
          posts: { [x: string]: unknown }[]
          users: { [x: string]: unknown }[]
          categories: { [x: string]: unknown }[]
          tags: { id: number; name: string; slug: string }[]
          groups: { [x: string]: unknown }[]
          grouped_search_result: {
            more_posts: string | null
            more_users: string | null
            more_categories: string | null
            term: string
            search_log_id: number
            more_full_page_results: string | null
            can_create_topic: boolean
            error: string | null
            extra?: { categories?: (unknown[] | null) | undefined } | undefined
            post_ids: { [x: string]: unknown }[]
            user_ids: { [x: string]: unknown }[]
            category_ids: { [x: string]: unknown }[]
            tag_ids: { [x: string]: unknown }[]
            group_ids: { [x: string]: unknown }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/site.json': {
      $get: {
        input: {}
        output: {
          default_archetype: string
          notification_types: {
            mentioned: number
            replied: number
            quoted: number
            edited: number
            liked: number
            private_message: number
            invited_to_private_message: number
            invitee_accepted: number
            posted: number
            watching_category_or_tag: number
            new_features?: number | undefined
            admin_problems?: number | undefined
            moved_post: number
            linked: number
            granted_badge: number
            invited_to_topic: number
            custom: number
            group_mentioned: number
            group_message_summary: number
            watching_first_post: number
            topic_reminder: number
            liked_consolidated: number
            linked_consolidated: number
            post_approved: number
            code_review_commit_approved: number
            membership_request_accepted: number
            membership_request_consolidated: number
            bookmark_reminder: number
            reaction: number
            votes_released: number
            event_reminder: number
            event_invitation: number
            chat_mention: number
            chat_message: number
            chat_invitation: number
            chat_group_mention: number
            chat_quoted?: number | undefined
            chat_watched_thread?: number | undefined
            upcoming_change_available?: number | undefined
            upcoming_change_automatically_promoted?: number | undefined
            assigned?: number | undefined
            question_answer_user_commented?: number | undefined
            following?: number | undefined
            following_created_topic?: number | undefined
            following_replied?: number | undefined
            circles_activity?: number | undefined
            boost?: number | undefined
            suggested_edit_created?: number | undefined
            suggested_edit_accepted?: number | undefined
            live_invitation?: number | undefined
          }
          post_types: {
            regular: number
            moderator_action: number
            small_action: number
            whisper: number
          }
          trust_levels: {
            newuser: number
            basic: number
            member: number
            regular: number
            leader: number
          }
          user_tips?:
            | {
                first_notification: number
                topic_timeline: number
                post_menu: number
                topic_notification_levels: number
                suggested_topics: number
              }
            | undefined
          groups: {
            id: number
            name: string
            full_name?: string | undefined
            display_name?: string | undefined
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            automatic: boolean
          }[]
          filters: { [x: string]: unknown }[]
          anonymous_list_filters: { [x: string]: unknown }[]
          homepage_choices: { [x: string]: unknown }[]
          homepage_options: { id: string; path: string; server_side: boolean }[]
          periods: { [x: string]: unknown }[]
          top_menu_items: { [x: string]: unknown }[]
          anonymous_top_menu_items: { [x: string]: unknown }[]
          uncategorized_category_id: number
          user_field_max_length: number
          post_action_types: {
            id: number | null
            name_key: string | null
            name: string
            description: string
            short_description: string
            is_flag: boolean
            require_message: boolean
            enabled: boolean
            applies_to: unknown[]
            is_used: boolean
            position?: number | undefined
            auto_action_type: boolean
            system?: boolean | undefined
          }[]
          topic_flag_types: {
            id: number | null
            name_key: string | null
            name: string
            description: string
            short_description: string
            is_flag: boolean
            require_message: boolean
            enabled: boolean
            applies_to: unknown[]
            is_used: boolean
            position?: number | undefined
            auto_action_type: boolean
            system?: boolean | undefined
          }[]
          can_create_tag: boolean
          can_search: boolean
          can_tag_topics: boolean
          can_tag_pms: boolean
          tags_filter_regexp: string
          top_tags: { id: number; name: string; slug: string }[]
          wizard_required?: boolean | undefined
          can_associate_groups?: boolean | undefined
          email_configured: boolean
          upcoming_changes_with_css?: string[] | undefined
          topic_featured_link_allowed_category_ids: { [x: string]: unknown }[]
          user_themes: {
            theme_id: number
            name: string
            default: boolean
            color_scheme_id: number | null
            dark_color_scheme_id?: (number | null) | undefined
            only_theme_color_schemes?: boolean | undefined
          }[]
          user_color_schemes: {
            id: number
            name: string
            is_dark: boolean
            theme_id?: (number | null) | undefined
            colors: unknown[]
          }[]
          default_light_color_scheme: { [x: string]: unknown } | null
          default_dark_color_scheme: { [x: string]: unknown } | null
          censored_regexp: { [x: string]: unknown }[]
          custom_emoji_translation: {}
          watched_words_replace: string | null
          watched_words_link: string | null
          markdown_additional_options?: { [x: string]: unknown } | undefined
          hashtag_configurations?: { [x: string]: unknown } | undefined
          hashtag_icons?: { [x: string]: unknown } | undefined
          displayed_about_plugin_stat_groups?: unknown[] | undefined
          categories: {
            id: number
            name: string
            color: string
            text_color: string
            style_type?: string | undefined
            emoji?: (string | null) | undefined
            icon?: (string | null) | undefined
            slug: string
            topic_count: number
            post_count: number
            position: number
            description?: (string | null) | undefined
            description_text?: (string | null) | undefined
            description_excerpt?: (string | null) | undefined
            topic_url: string
            read_restricted: boolean
            permission: number
            notification_level: number
            topic_template: string | null
            topic_title_placeholder: string | null
            has_children: boolean
            subcategory_count: number | null
            sort_order: string | null
            sort_ascending: string | null
            show_subcategory_list: boolean
            num_featured_topics: number
            default_view: string | null
            subcategory_list_style: string
            default_top_period: string
            default_list_filter: string
            minimum_required_tags: number
            navigate_to_first_post_after_read: boolean
            allow_global_tags: boolean
            required_tag_groups: { min_count: number }[]
            read_only_banner: string | null
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
            uploaded_background: string | null
            uploaded_background_dark: string | null
            can_edit: boolean
            custom_fields?: ({ [x: string]: unknown } | null) | undefined
            parent_category_id?: number | undefined
            form_template_ids?: { [x: string]: unknown }[] | undefined
            category_types?: { [x: string]: unknown } | undefined
          }[]
          archetypes: { id: string; name: string; options: { [x: string]: unknown }[] }[]
          user_fields: { [x: string]: unknown }[]
          auth_providers: { [x: string]: unknown }[]
          whispers_allowed_groups_names?: unknown[] | undefined
          denied_emojis?: unknown[] | undefined
          valid_flag_applies_to_types?: unknown[] | undefined
          navigation_menu_site_top_tags?: unknown[] | undefined
          full_name_required_for_signup: boolean
          full_name_visible_in_signup: boolean
          admin_config_login_routes?: unknown[] | undefined
          access_control?:
            | { mandatory_acl: { [x: string]: unknown }; banned_acl: { [x: string]: unknown } }
            | undefined
          permanent_upcoming_change_names?: string[] | undefined
          category_types?:
            | {
                id: string
                name: string
                title: string
                description: string
                icon: string
                svg_icon: string | null
                available: boolean
                visible: boolean
                configuration_schema: { [x: string]: unknown }
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/site/basic-info.json': {
      $get: {
        input: {}
        output: {
          logo_url: string
          logo_small_url: string
          apple_touch_icon_url: string
          favicon_url: string
          title: string
          description: string
          header_primary_color: string
          header_background_color: string
          login_required: boolean
          locale: string
          include_in_discourse_discover: boolean
          mobile_logo_url: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tag_groups.json': {
      $get: {
        input: {}
        output: {
          tag_groups: {
            id: number
            name: string
            tags: { id: number; name: string; slug: string }[]
            parent_tag: { id: number; name: string; slug: string }[]
            one_per_topic: boolean
            permissions: { [x: string]: number }
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { name: string } }
        output: {
          tag_group: {
            id: number
            name: string
            tags: { id: number; name: string; slug: string }[]
            parent_tag: { id: number; name: string; slug: string }[]
            one_per_topic: boolean
            permissions: { [x: string]: unknown }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tag_groups/:id.json': {
      $get: {
        input: { param: { id: string } }
        output: {
          tag_group?:
            | {
                id?: number | undefined
                name?: string | undefined
                tag_names?: { [x: string]: unknown }[] | undefined
                parent_tag_name?: { [x: string]: unknown }[] | undefined
                one_per_topic?: boolean | undefined
                permissions?: { everyone?: number | undefined } | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: { name?: string | undefined } }
        output: {
          success?: string | undefined
          tag_group?:
            | {
                id?: number | undefined
                name?: string | undefined
                tag_names?: { [x: string]: unknown }[] | undefined
                parent_tag_name?: { [x: string]: unknown }[] | undefined
                one_per_topic?: boolean | undefined
                permissions?: { everyone?: number | undefined } | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags.json': {
      $get: {
        input: {}
        output: {
          tags?:
            | {
                id?: number | undefined
                text?: string | undefined
                name?: string | undefined
                count?: number | undefined
                pm_count?: number | undefined
                target_tag?: (string | null) | undefined
              }[]
            | undefined
          extras?: { categories?: { [x: string]: unknown }[] | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tag/:name.json': {
      $get: {
        input: { param: { name: string } }
        output: {
          users?:
            | {
                id?: number | undefined
                username?: string | undefined
                name?: (string | null) | undefined
                avatar_template?: string | undefined
              }[]
            | undefined
          primary_groups?: { [x: string]: unknown }[] | undefined
          topic_list?:
            | {
                can_create_topic?: boolean | undefined
                draft?: (string | null) | undefined
                draft_key?: string | undefined
                draft_sequence?: number | undefined
                per_page?: number | undefined
                tags?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      topic_count?: number | undefined
                      staff?: boolean | undefined
                    }[]
                  | undefined
                topics?:
                  | {
                      id?: number | undefined
                      title?: string | undefined
                      fancy_title?: string | undefined
                      slug?: string | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      highest_post_number?: number | undefined
                      image_url?: (string | null) | undefined
                      created_at?: string | undefined
                      last_posted_at?: string | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      archetype?: string | undefined
                      unseen?: boolean | undefined
                      last_read_post_number?: number | undefined
                      unread_posts?: number | undefined
                      pinned?: boolean | undefined
                      unpinned?: (string | null) | undefined
                      visible?: boolean | undefined
                      closed?: boolean | undefined
                      archived?: boolean | undefined
                      notification_level?: number | undefined
                      bookmarked?: boolean | undefined
                      liked?: boolean | undefined
                      tags?: { [x: string]: unknown }[] | undefined
                      views?: number | undefined
                      like_count?: number | undefined
                      has_summary?: boolean | undefined
                      last_poster_username?: string | undefined
                      category_id?: number | undefined
                      pinned_globally?: boolean | undefined
                      featured_link?: (string | null) | undefined
                      posters?:
                        | {
                            extras?: string | undefined
                            description?: string | undefined
                            user_id?: number | undefined
                            primary_group_id?: (number | null) | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id/posts.json': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { 'post_ids[]': number } }
        output: {
          post_stream?:
            | {
                posts?:
                  | {
                      id?: number | undefined
                      name?: (string | null) | undefined
                      username?: string | undefined
                      avatar_template?: string | undefined
                      created_at?: string | undefined
                      cooked?: string | undefined
                      post_number?: number | undefined
                      post_type?: number | undefined
                      updated_at?: string | undefined
                      reply_count?: number | undefined
                      reply_to_post_number?: (string | null) | undefined
                      quote_count?: number | undefined
                      incoming_link_count?: number | undefined
                      reads?: number | undefined
                      readers_count?: number | undefined
                      score?: number | undefined
                      yours?: boolean | undefined
                      topic_id?: number | undefined
                      topic_slug?: string | undefined
                      display_username?: (string | null) | undefined
                      primary_group_name?: (string | null) | undefined
                      flair_name?: (string | null) | undefined
                      flair_url?: (string | null) | undefined
                      flair_bg_color?: (string | null) | undefined
                      flair_color?: (string | null) | undefined
                      version?: number | undefined
                      can_edit?: boolean | undefined
                      can_delete?: boolean | undefined
                      can_recover?: boolean | undefined
                      can_wiki?: boolean | undefined
                      read?: boolean | undefined
                      user_title?: (string | null) | undefined
                      actions_summary?:
                        | { id?: number | undefined; can_act?: boolean | undefined }[]
                        | undefined
                      moderator?: boolean | undefined
                      admin?: boolean | undefined
                      staff?: boolean | undefined
                      user_id?: number | undefined
                      hidden?: boolean | undefined
                      trust_level?: number | undefined
                      deleted_at?: (string | null) | undefined
                      user_deleted?: boolean | undefined
                      edit_reason?: (string | null) | undefined
                      can_view_edit_history?: boolean | undefined
                      wiki?: boolean | undefined
                      reviewable_id?: number | undefined
                      reviewable_score_count?: number | undefined
                      reviewable_score_pending_count?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id.json': {
      $get: {
        input: { param: { id: string } } & { header: { 'Api-Key': string; 'Api-Username': string } }
        output: {
          post_stream: {
            posts: {
              id: number
              name: string
              username: string
              avatar_template: string
              created_at: string
              cooked: string
              post_number: number
              post_type: number
              updated_at: string
              reply_count: number
              reply_to_post_number: string | null
              quote_count: number
              incoming_link_count: number
              reads: number
              readers_count: number
              score: number
              yours: boolean
              topic_id: number
              topic_slug: string
              display_username: string
              primary_group_name: string | null
              flair_name: string | null
              flair_url: string | null
              flair_bg_color: string | null
              flair_color: string | null
              version: number
              can_edit: boolean
              can_delete: boolean
              can_recover: boolean
              can_see_hidden_post?: boolean | undefined
              can_wiki: boolean
              link_counts: {
                url: string
                internal: boolean
                reflection: boolean
                title: string
                clicks: number
              }[]
              read: boolean
              user_title: string | null
              bookmarked: boolean
              actions_summary: { id: number; can_act: boolean }[]
              moderator: boolean
              admin: boolean
              staff: boolean
              user_id: number
              hidden: boolean
              trust_level: number
              deleted_at: string | null
              user_deleted: boolean
              edit_reason: string | null
              can_view_edit_history: boolean
              wiki: boolean
              reviewable_id: number
              reviewable_score_count: number
              reviewable_score_pending_count: number
            }[]
            stream: { [x: string]: unknown }[]
          }
          timeline_lookup: { [x: string]: unknown }[]
          suggested_topics: {
            id: number
            title: string
            fancy_title: string
            slug: string
            posts_count: number
            reply_count: number
            highest_post_number: number
            image_url: string | null
            created_at: string
            last_posted_at: string | null
            bumped: boolean
            bumped_at: string
            archetype: string
            unseen: boolean
            pinned: boolean
            unpinned: string | null
            excerpt: string
            visible: boolean
            closed: boolean
            archived: boolean
            bookmarked: string | null
            liked: string | null
            tags: { id: number; name: string; slug: string }[]
            tags_descriptions: {}
            like_count: number
            views: number
            category_id: number
            featured_link: string | null
            posters: {
              extras: string
              description: string
              user: { id: number; username: string; name: string; avatar_template: string }
            }[]
          }[]
          tags: { id: number; name: string; slug: string }[]
          tags_descriptions: {}
          id: number
          title: string
          fancy_title: string
          posts_count: number
          created_at: string
          views: number
          reply_count: number
          like_count: number
          last_posted_at: string | null
          visible: boolean
          closed: boolean
          archived: boolean
          has_summary: boolean
          archetype: string
          slug: string
          category_id: number
          word_count: number | null
          deleted_at: string | null
          user_id: number
          featured_link: string | null
          pinned_globally: boolean
          pinned_at: string | null
          pinned_until: string | null
          image_url: string | null
          slow_mode_seconds: number
          draft: string | null
          draft_key: string
          draft_sequence: number
          unpinned: string | null
          pinned: boolean
          current_post_number?: number | undefined
          highest_post_number: number | null
          deleted_by: string | null
          has_deleted: boolean
          actions_summary: { id: number; count: number; hidden: boolean; can_act: boolean }[]
          chunk_size: number
          bookmarked: boolean
          bookmarks: { [x: string]: unknown }[]
          topic_timer: string | null
          message_bus_last_id: number
          participant_count: number
          show_read_indicator: boolean
          thumbnails: string | null
          slow_mode_enabled_until: string | null
          details: {
            can_edit: boolean
            notification_level: number
            can_move_posts: boolean
            can_delete: boolean
            can_remove_allowed_users: boolean
            can_create_post: boolean
            can_reply_as_new_topic: boolean
            can_invite_to?: boolean | undefined
            can_invite_via_email?: boolean | undefined
            can_flag_topic?: boolean | undefined
            can_convert_topic: boolean
            can_review_topic: boolean
            can_close_topic: boolean
            can_archive_topic: boolean
            can_split_merge_topic: boolean
            can_edit_staff_notes: boolean
            can_toggle_topic_visibility: boolean
            can_pin_unpin_topic: boolean
            can_banner_topic?: boolean | undefined
            can_moderate_category: boolean
            can_remove_self_id: number
            participants?:
              | {
                  id: number
                  username: string
                  name: string
                  avatar_template: string
                  post_count: number
                  primary_group_name: string | null
                  flair_name: string | null
                  flair_url: string | null
                  flair_color: string | null
                  flair_bg_color: string | null
                  flair_group_id?: (number | null) | undefined
                  admin: boolean
                  moderator: boolean
                  trust_level: number
                }[]
              | undefined
            created_by: { id: number; username: string; name: string; avatar_template: string }
            last_poster: { id: number; username: string; name: string; avatar_template: string }
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } } & { header: { 'Api-Key': string; 'Api-Username': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/t/-/:id.json': {
      $put: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & {
          json: {
            topic?: { title?: string | undefined; category_id?: number | undefined } | undefined
          }
        }
        output: {
          basic_topic?:
            | {
                id?: number | undefined
                title?: string | undefined
                fancy_title?: string | undefined
                slug?: string | undefined
                posts_count?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id/invite.json': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { user?: string | undefined; email?: string | undefined } }
        output: {
          user?:
            | {
                id?: number | undefined
                username?: string | undefined
                name?: string | undefined
                avatar_template?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id/invite-group.json': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { group?: string | undefined; should_notify?: boolean | undefined } }
        output: { group?: { id?: number | undefined; name?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id/bookmark.json': {
      $put: {
        input: { param: { id: string } } & { header: { 'Api-Key': string; 'Api-Username': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/t/:id/status.json': {
      $put: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & {
          json: {
            status: 'closed' | 'pinned' | 'pinned_globally' | 'archived' | 'visible'
            enabled: 'true' | 'false'
            until?: string | undefined
          }
        }
        output: { success?: string | undefined; topic_status_update?: (string | null) | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/latest.json': {
      $get: {
        input: {
          query: {
            order?: string | undefined
            ascending?: string | undefined
            per_page?: number | undefined
          }
        } & { header: { 'Api-Key': string; 'Api-Username': string } }
        output: {
          users?:
            | {
                id?: number | undefined
                username?: string | undefined
                name?: (string | null) | undefined
                avatar_template?: string | undefined
              }[]
            | undefined
          primary_groups?: { [x: string]: unknown }[] | undefined
          topic_list?:
            | {
                can_create_topic?: boolean | undefined
                draft?: (string | null) | undefined
                draft_key?: string | undefined
                draft_sequence?: number | undefined
                per_page?: number | undefined
                topics?:
                  | {
                      id?: number | undefined
                      title?: string | undefined
                      fancy_title?: string | undefined
                      slug?: string | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      highest_post_number?: number | undefined
                      image_url?: string | undefined
                      created_at?: string | undefined
                      last_posted_at?: string | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      archetype?: string | undefined
                      unseen?: boolean | undefined
                      last_read_post_number?: number | undefined
                      unread_posts?: number | undefined
                      pinned?: boolean | undefined
                      unpinned?: (string | null) | undefined
                      visible?: boolean | undefined
                      closed?: boolean | undefined
                      archived?: boolean | undefined
                      notification_level?: number | undefined
                      bookmarked?: boolean | undefined
                      liked?: boolean | undefined
                      views?: number | undefined
                      like_count?: number | undefined
                      has_summary?: boolean | undefined
                      last_poster_username?: string | undefined
                      category_id?: number | undefined
                      op_like_count?: number | undefined
                      pinned_globally?: boolean | undefined
                      featured_link?: (string | null) | undefined
                      posters?:
                        | {
                            extras?: string | undefined
                            description?: string | undefined
                            user_id?: number | undefined
                            primary_group_id?: (number | null) | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/top.json': {
      $get: {
        input: { query: { period?: string | undefined; per_page?: number | undefined } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        }
        output: {
          users?:
            | {
                id?: number | undefined
                username?: string | undefined
                name?: string | undefined
                avatar_template?: string | undefined
              }[]
            | undefined
          primary_groups?: { [x: string]: unknown }[] | undefined
          topic_list?:
            | {
                can_create_topic?: boolean | undefined
                draft?: (string | null) | undefined
                draft_key?: string | undefined
                draft_sequence?: number | undefined
                for_period?: string | undefined
                per_page?: number | undefined
                topics?:
                  | {
                      id?: number | undefined
                      title?: string | undefined
                      fancy_title?: string | undefined
                      slug?: string | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      highest_post_number?: number | undefined
                      image_url?: (string | null) | undefined
                      created_at?: string | undefined
                      last_posted_at?: string | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      archetype?: string | undefined
                      unseen?: boolean | undefined
                      last_read_post_number?: number | undefined
                      unread_posts?: number | undefined
                      pinned?: boolean | undefined
                      unpinned?: boolean | undefined
                      visible?: boolean | undefined
                      closed?: boolean | undefined
                      archived?: boolean | undefined
                      notification_level?: number | undefined
                      bookmarked?: boolean | undefined
                      liked?: boolean | undefined
                      views?: number | undefined
                      like_count?: number | undefined
                      has_summary?: boolean | undefined
                      last_poster_username?: string | undefined
                      category_id?: number | undefined
                      op_like_count?: number | undefined
                      pinned_globally?: boolean | undefined
                      featured_link?: (string | null) | undefined
                      posters?:
                        | {
                            extras?: (string | null) | undefined
                            description?: string | undefined
                            user_id?: number | undefined
                            primary_group_id?: (number | null) | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id/notifications.json': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { notification_level: '0' | '1' | '2' | '3' } }
        output: { success?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id/change-timestamp.json': {
      $put: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { timestamp: string } }
        output: { success?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/:id/timer.json': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & {
          json: {
            time?: string | undefined
            status_type?: string | undefined
            based_on_last_post?: boolean | undefined
            category_id?: number | undefined
          }
        }
        output: {
          success?: string | undefined
          execute_at?: string | undefined
          duration?: (string | null) | undefined
          based_on_last_post?: boolean | undefined
          closed?: boolean | undefined
          category_id?: (number | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/t/external_id/:external_id.json': {
      $get: {
        input: { param: { external_id: string } }
        output: {}
        outputFormat: string
        status: 301
      }
    }
  } & {
    '/uploads.json': {
      $post: {
        input: {
          form: {
            upload_type:
              | 'avatar'
              | 'profile_background'
              | 'card_background'
              | 'custom_emoji'
              | 'composer'
            user_id?: number | undefined
            synchronous?: boolean | undefined
            file?: File | undefined
          }
        }
        output: {
          id: number
          url: string
          original_filename: string
          filesize: number
          width: number
          height: number
          thumbnail_width: number
          thumbnail_height: number
          extension: string
          short_url: string
          short_path: string
          retain_hours: string | null
          human_filesize: string
          dominant_color?: (string | null) | undefined
          thumbnail?:
            | ({
                id?: number | undefined
                upload_id?: number | undefined
                url?: string | undefined
                extension?: string | undefined
                width?: number | undefined
                height?: number | undefined
                filesize?: number | undefined
              } | null)
            | undefined
          optimized_video?:
            | ({
                id?: number | undefined
                upload_id?: number | undefined
                url?: string | undefined
                extension?: string | undefined
                filesize?: number | undefined
                sha1?: string | undefined
                original_filename?: string | undefined
              } | null)
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/generate-presigned-put.json': {
      $post: {
        input: {
          json: {
            type: 'avatar' | 'profile_background' | 'card_background' | 'custom_emoji' | 'composer'
            file_name: string
            file_size: number
            metadata?: { 'sha1-checksum'?: string | undefined } | undefined
          }
        }
        output: {
          key?: string | undefined
          url?: string | undefined
          signed_headers?: { [x: string]: unknown } | undefined
          unique_identifier?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/complete-external-upload.json': {
      $post: {
        input: {
          json: {
            unique_identifier: string
            for_private_message?: string | undefined
            for_site_setting?: string | undefined
            pasted?: string | undefined
          }
        }
        output: {
          id: number
          url: string
          original_filename: string
          filesize: number
          width: number
          height: number
          thumbnail_width: number
          thumbnail_height: number
          extension: string
          short_url: string
          short_path: string
          retain_hours: string | null
          human_filesize: string
          dominant_color?: (string | null) | undefined
          thumbnail?:
            | ({
                id?: number | undefined
                upload_id?: number | undefined
                url?: string | undefined
                extension?: string | undefined
                width?: number | undefined
                height?: number | undefined
                filesize?: number | undefined
              } | null)
            | undefined
          optimized_video?:
            | ({
                id?: number | undefined
                upload_id?: number | undefined
                url?: string | undefined
                extension?: string | undefined
                filesize?: number | undefined
                sha1?: string | undefined
                original_filename?: string | undefined
              } | null)
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/create-multipart.json': {
      $post: {
        input: {
          json: {
            upload_type:
              | 'avatar'
              | 'profile_background'
              | 'card_background'
              | 'custom_emoji'
              | 'composer'
            file_name: string
            file_size: number
            metadata?: { 'sha1-checksum'?: string | undefined } | undefined
          }
        }
        output: { key: string; external_upload_identifier: string; unique_identifier: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/batch-presign-multipart-parts.json': {
      $post: {
        input: { json: { part_numbers: unknown[]; unique_identifier: string } }
        output: { presigned_urls: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/abort-multipart.json': {
      $post: {
        input: { json: { external_upload_identifier: string } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/complete-multipart.json': {
      $post: {
        input: { json: { unique_identifier: string; parts: unknown[] } }
        output: {
          id: number
          url: string
          original_filename: string
          filesize: number
          width: number
          height: number
          thumbnail_width: number
          thumbnail_height: number
          extension: string
          short_url: string
          short_path: string
          retain_hours: string | null
          human_filesize: string
          dominant_color?: (string | null) | undefined
          thumbnail?:
            | ({
                id?: number | undefined
                upload_id?: number | undefined
                url?: string | undefined
                extension?: string | undefined
                width?: number | undefined
                height?: number | undefined
                filesize?: number | undefined
              } | null)
            | undefined
          optimized_video?:
            | ({
                id?: number | undefined
                upload_id?: number | undefined
                url?: string | undefined
                extension?: string | undefined
                filesize?: number | undefined
                sha1?: string | undefined
                original_filename?: string | undefined
              } | null)
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_badges.json': {
      $post: {
        input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/user-badges/:username.json': {
      $get: {
        input: { param: { username: string } }
        output: {
          badges?:
            | {
                id: number
                name: string
                description: string
                grant_count: number
                allow_title: boolean
                multiple_grant: boolean
                icon: string
                image_url: string | null
                listable: boolean
                enabled: boolean
                badge_grouping_id: number
                system: boolean
                slug: string
                manually_grantable: boolean
                badge_type_id: number
              }[]
            | undefined
          badge_types?: { id: number; name: string; sort_order: number }[] | undefined
          granted_bies?:
            | {
                id: number
                username: string
                name: string
                avatar_template: string
                flair_name: string | null
                admin: boolean
                moderator: boolean
                trust_level: number
              }[]
            | undefined
          user_badges: {
            id: number
            granted_at: string
            grouping_position: number
            is_favorite: string | null
            can_favorite: boolean
            badge_id: number
            granted_by_id: number
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users.json': {
      $post: {
        input: { header: { 'Api-Key': string; 'Api-Username': string } } & {
          json: {
            name: string
            email: string
            password: string
            username: string
            active?: boolean | undefined
            approved?: boolean | undefined
            user_fields?: { '1'?: boolean | undefined } | undefined
            external_ids?: { [x: string]: unknown } | undefined
          }
        }
        output: { success: boolean; active: boolean; message: string; user_id?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/u/:username.json': {
      $get: {
        input: { param: { username: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        }
        output: {
          user_badges: { [x: string]: unknown }[]
          user: {
            id: number
            username: string
            name: string
            avatar_template: string
            last_posted_at: string | null
            last_seen_at: string | null
            created_at: string
            ignored: boolean
            muted: boolean
            can_ignore_user: boolean
            can_ignore_users?: boolean | undefined
            can_mute_user: boolean
            can_mute_users?: boolean | undefined
            can_send_private_messages: boolean
            can_send_private_message_to_user: boolean
            trust_level: number
            moderator: boolean
            admin: boolean
            title: string | null
            badge_count: number
            second_factor_backup_enabled?: boolean | undefined
            user_fields?: { '1': string | null; '2': string | null } | undefined
            custom_fields: { first_name?: (string | null) | undefined }
            time_read: number
            recent_time_read: number
            primary_group_id: number | null
            primary_group_name: string | null
            flair_group_id: number | null
            flair_name: string | null
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            featured_topic: {
              id: number
              title: string
              fancy_title: string
              slug: string
              posts_count: number
            }
            staged: boolean
            can_edit: boolean
            can_edit_avatar: boolean
            can_upload_avatar: boolean
            can_edit_username: boolean
            can_edit_email: boolean
            can_edit_name: boolean
            uploaded_avatar_id: number | null
            has_title_badges: boolean
            pending_count: number
            pending_posts_count?: number | undefined
            profile_view_count: number
            second_factor_enabled: boolean
            can_upload_profile_header: boolean
            can_upload_user_card_background: boolean
            post_count: number
            topic_count: number
            can_be_deleted: boolean
            can_delete_all_posts: boolean
            locale: string | null
            muted_category_ids: { [x: string]: unknown }[]
            regular_category_ids: { [x: string]: unknown }[]
            watched_tags: { [x: string]: unknown }[]
            watching_first_post_tags: { [x: string]: unknown }[]
            tracked_tags: { [x: string]: unknown }[]
            muted_tags: { [x: string]: unknown }[]
            tracked_category_ids: { [x: string]: unknown }[]
            watched_category_ids: { [x: string]: unknown }[]
            watched_first_post_category_ids: { [x: string]: unknown }[]
            system_avatar_upload_id: string | null
            system_avatar_template: string
            associated_account_avatars: {
              id: number
              name: string
              upload_id: number
              avatar_template: string
            }[]
            selected_user_associated_account_id: number | null
            muted_usernames: { [x: string]: unknown }[]
            ignored_usernames: { [x: string]: unknown }[]
            allowed_pm_usernames: { [x: string]: unknown }[]
            mailing_list_posts_per_day: number
            can_change_bio: boolean
            can_change_location: boolean
            can_change_website: boolean
            can_change_tracking_preferences: boolean
            user_api_keys: string | null
            user_passkeys?: unknown[] | undefined
            sidebar_tags?: unknown[] | undefined
            sidebar_category_ids?: unknown[] | undefined
            display_sidebar_tags?: boolean | undefined
            can_pick_theme_with_custom_homepage?: boolean | undefined
            user_auth_tokens: {
              id: number
              client_ip: string
              location: string
              browser: string
              device: string
              os: string
              icon: string
              created_at: string
              seen_at: string
              is_active: boolean
            }[]
            user_notification_schedule: {
              enabled: boolean
              day_0_start_time: number
              day_0_end_time: number
              day_1_start_time: number
              day_1_end_time: number
              day_2_start_time: number
              day_2_end_time: number
              day_3_start_time: number
              day_3_end_time: number
              day_4_start_time: number
              day_4_end_time: number
              day_5_start_time: number
              day_5_end_time: number
              day_6_start_time: number
              day_6_end_time: number
            }
            use_logo_small_as_avatar: boolean
            featured_user_badge_ids: { [x: string]: unknown }[]
            invited_by: string | null
            groups: {
              id: number
              automatic: boolean
              name: string
              display_name: string
              user_count: number
              mentionable_level: number
              messageable_level: number
              visibility_level: number
              primary_group: boolean
              title: string | null
              grant_trust_level: string | null
              incoming_email: string | null
              has_messages: boolean
              flair_url: string | null
              flair_bg_color: string | null
              flair_color: string | null
              bio_raw: string | null
              bio_cooked: string | null
              bio_excerpt: string | null
              public_admission: boolean
              public_exit: boolean
              allow_membership_requests: boolean
              full_name: string | null
              default_notification_level: number
              membership_request_template: string | null
              members_visibility_level: number
              can_see_members: boolean
              can_admin_group: boolean
              publish_read_state: boolean
            }[]
            group_users: {
              group_id: number
              user_id: number
              notification_level: number
              owner?: boolean | undefined
            }[]
            user_option: {
              user_id: number
              mailing_list_mode: boolean
              mailing_list_mode_frequency: number
              email_digests: boolean
              email_level: number
              email_messages_level: number
              external_links_in_new_tab: boolean
              bookmark_auto_delete_preference?: number | undefined
              color_scheme_id: string | null
              dark_scheme_id: string | null
              dynamic_favicon: boolean
              enable_quoting: boolean
              enable_smart_lists: boolean
              enable_markdown_monospace_font: boolean
              digest_after_minutes: number
              automatically_unpin_topics: boolean
              auto_track_topics_after_msecs: number
              notification_level_when_replying: number
              new_topic_duration_minutes: number
              email_previous_replies: number
              email_in_reply_to: boolean
              like_notification_frequency: number
              notify_on_linked_posts: boolean
              push_notification_level: string
              enable_upcoming_change_available_notifications: boolean
              include_tl0_in_digests: boolean
              theme_ids: { [x: string]: unknown }[]
              theme_key_seq: number
              allow_private_messages: boolean
              enable_allowed_pm_users: boolean
              homepage_id: string | null
              hide_profile_and_presence: boolean
              hide_profile: boolean
              hide_presence: boolean
              text_size: string
              text_size_seq: number
              title_count_mode: string
              timezone: string | null
              skip_new_user_tips: boolean
              default_calendar?: string | undefined
              oldest_search_log_date?: (string | null) | undefined
              sidebar_link_to_filtered_list?: boolean | undefined
              sidebar_show_count_of_new_items?: boolean | undefined
              watched_precedence_over_muted?: boolean | undefined
              seen_popups?: (unknown[] | null) | undefined
              composition_mode?: number | undefined
              interface_color_mode: number
              automatically_translate: boolean
              understood_languages: string[]
              hidden_composer_toolbar_buttons: string[]
              show_original_content: boolean
              send_shortcut: string
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { username: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & {
          json: { name?: string | undefined; external_ids?: { [x: string]: unknown } | undefined }
        }
        output: { success: string; user: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/u/by-external/:external_id.json': {
      $get: {
        input: { param: { external_id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        }
        output: {
          user_badges: { [x: string]: unknown }[]
          user: {
            id: number
            username: string
            name: string
            avatar_template: string
            last_posted_at: string | null
            last_seen_at: string | null
            created_at: string
            ignored: boolean
            muted: boolean
            can_ignore_user: boolean
            can_ignore_users?: boolean | undefined
            can_mute_user: boolean
            can_mute_users?: boolean | undefined
            can_send_private_messages: boolean
            can_send_private_message_to_user: boolean
            trust_level: number
            moderator: boolean
            admin: boolean
            title: string | null
            badge_count: number
            second_factor_backup_enabled?: boolean | undefined
            user_fields?: { '1': string | null; '2': string | null } | undefined
            custom_fields: { first_name?: (string | null) | undefined }
            time_read: number
            recent_time_read: number
            primary_group_id: number | null
            primary_group_name: string | null
            flair_group_id: number | null
            flair_name: string | null
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            featured_topic: {
              id: number
              title: string
              fancy_title: string
              slug: string
              posts_count: number
            }
            staged: boolean
            can_edit: boolean
            can_edit_avatar: boolean
            can_upload_avatar: boolean
            can_edit_username: boolean
            can_edit_email: boolean
            can_edit_name: boolean
            uploaded_avatar_id: number | null
            has_title_badges: boolean
            pending_count: number
            pending_posts_count?: number | undefined
            profile_view_count: number
            second_factor_enabled: boolean
            can_upload_profile_header: boolean
            can_upload_user_card_background: boolean
            post_count: number
            topic_count: number
            can_be_deleted: boolean
            can_delete_all_posts: boolean
            locale: string | null
            muted_category_ids: { [x: string]: unknown }[]
            regular_category_ids: { [x: string]: unknown }[]
            watched_tags: { [x: string]: unknown }[]
            watching_first_post_tags: { [x: string]: unknown }[]
            tracked_tags: { [x: string]: unknown }[]
            muted_tags: { [x: string]: unknown }[]
            tracked_category_ids: { [x: string]: unknown }[]
            watched_category_ids: { [x: string]: unknown }[]
            watched_first_post_category_ids: { [x: string]: unknown }[]
            system_avatar_upload_id: string | null
            system_avatar_template: string
            associated_account_avatars: {
              id: number
              name: string
              upload_id: number
              avatar_template: string
            }[]
            selected_user_associated_account_id: number | null
            muted_usernames: { [x: string]: unknown }[]
            ignored_usernames: { [x: string]: unknown }[]
            allowed_pm_usernames: { [x: string]: unknown }[]
            mailing_list_posts_per_day: number
            can_change_bio: boolean
            can_change_location: boolean
            can_change_website: boolean
            can_change_tracking_preferences: boolean
            user_api_keys: string | null
            user_passkeys?: unknown[] | undefined
            sidebar_tags?: unknown[] | undefined
            sidebar_category_ids?: unknown[] | undefined
            display_sidebar_tags?: boolean | undefined
            can_pick_theme_with_custom_homepage?: boolean | undefined
            user_auth_tokens: {
              id: number
              client_ip: string
              location: string
              browser: string
              device: string
              os: string
              icon: string
              created_at: string
              seen_at: string
              is_active: boolean
            }[]
            user_notification_schedule: {
              enabled: boolean
              day_0_start_time: number
              day_0_end_time: number
              day_1_start_time: number
              day_1_end_time: number
              day_2_start_time: number
              day_2_end_time: number
              day_3_start_time: number
              day_3_end_time: number
              day_4_start_time: number
              day_4_end_time: number
              day_5_start_time: number
              day_5_end_time: number
              day_6_start_time: number
              day_6_end_time: number
            }
            use_logo_small_as_avatar: boolean
            featured_user_badge_ids: { [x: string]: unknown }[]
            invited_by: string | null
            groups: {
              id: number
              automatic: boolean
              name: string
              display_name: string
              user_count: number
              mentionable_level: number
              messageable_level: number
              visibility_level: number
              primary_group: boolean
              title: string | null
              grant_trust_level: string | null
              incoming_email: string | null
              has_messages: boolean
              flair_url: string | null
              flair_bg_color: string | null
              flair_color: string | null
              bio_raw: string | null
              bio_cooked: string | null
              bio_excerpt: string | null
              public_admission: boolean
              public_exit: boolean
              allow_membership_requests: boolean
              full_name: string | null
              default_notification_level: number
              membership_request_template: string | null
              members_visibility_level: number
              can_see_members: boolean
              can_admin_group: boolean
              publish_read_state: boolean
            }[]
            group_users: {
              group_id: number
              user_id: number
              notification_level: number
              owner?: boolean | undefined
            }[]
            user_option: {
              user_id: number
              mailing_list_mode: boolean
              mailing_list_mode_frequency: number
              email_digests: boolean
              email_level: number
              email_messages_level: number
              external_links_in_new_tab: boolean
              bookmark_auto_delete_preference?: number | undefined
              color_scheme_id: string | null
              dark_scheme_id: string | null
              dynamic_favicon: boolean
              enable_quoting: boolean
              enable_smart_lists: boolean
              enable_markdown_monospace_font: boolean
              digest_after_minutes: number
              automatically_unpin_topics: boolean
              auto_track_topics_after_msecs: number
              notification_level_when_replying: number
              new_topic_duration_minutes: number
              email_previous_replies: number
              email_in_reply_to: boolean
              like_notification_frequency: number
              notify_on_linked_posts: boolean
              push_notification_level: string
              enable_upcoming_change_available_notifications: boolean
              include_tl0_in_digests: boolean
              theme_ids: { [x: string]: unknown }[]
              theme_key_seq: number
              allow_private_messages: boolean
              enable_allowed_pm_users: boolean
              homepage_id: string | null
              hide_profile_and_presence: boolean
              hide_profile: boolean
              hide_presence: boolean
              text_size: string
              text_size_seq: number
              title_count_mode: string
              timezone: string | null
              skip_new_user_tips: boolean
              default_calendar?: string | undefined
              oldest_search_log_date?: (string | null) | undefined
              sidebar_link_to_filtered_list?: boolean | undefined
              sidebar_show_count_of_new_items?: boolean | undefined
              watched_precedence_over_muted?: boolean | undefined
              seen_popups?: (unknown[] | null) | undefined
              composition_mode?: number | undefined
              interface_color_mode: number
              automatically_translate: boolean
              understood_languages: string[]
              hidden_composer_toolbar_buttons: string[]
              show_original_content: boolean
              send_shortcut: string
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/u/by-external/:provider/:external_id.json': {
      $get: {
        input: { param: { provider: string; external_id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        }
        output: {
          user_badges: { [x: string]: unknown }[]
          user: {
            id: number
            username: string
            name: string
            avatar_template: string
            last_posted_at: string | null
            last_seen_at: string | null
            created_at: string
            ignored: boolean
            muted: boolean
            can_ignore_user: boolean
            can_ignore_users?: boolean | undefined
            can_mute_user: boolean
            can_mute_users?: boolean | undefined
            can_send_private_messages: boolean
            can_send_private_message_to_user: boolean
            trust_level: number
            moderator: boolean
            admin: boolean
            title: string | null
            badge_count: number
            second_factor_backup_enabled?: boolean | undefined
            user_fields?: { '1': string | null; '2': string | null } | undefined
            custom_fields: { first_name?: (string | null) | undefined }
            time_read: number
            recent_time_read: number
            primary_group_id: number | null
            primary_group_name: string | null
            flair_group_id: number | null
            flair_name: string | null
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            featured_topic: {
              id: number
              title: string
              fancy_title: string
              slug: string
              posts_count: number
            }
            staged: boolean
            can_edit: boolean
            can_edit_avatar: boolean
            can_upload_avatar: boolean
            can_edit_username: boolean
            can_edit_email: boolean
            can_edit_name: boolean
            uploaded_avatar_id: number | null
            has_title_badges: boolean
            pending_count: number
            pending_posts_count?: number | undefined
            profile_view_count: number
            second_factor_enabled: boolean
            can_upload_profile_header: boolean
            can_upload_user_card_background: boolean
            post_count: number
            topic_count: number
            can_be_deleted: boolean
            can_delete_all_posts: boolean
            locale: string | null
            muted_category_ids: { [x: string]: unknown }[]
            regular_category_ids: { [x: string]: unknown }[]
            watched_tags: { [x: string]: unknown }[]
            watching_first_post_tags: { [x: string]: unknown }[]
            tracked_tags: { [x: string]: unknown }[]
            muted_tags: { [x: string]: unknown }[]
            tracked_category_ids: { [x: string]: unknown }[]
            watched_category_ids: { [x: string]: unknown }[]
            watched_first_post_category_ids: { [x: string]: unknown }[]
            system_avatar_upload_id: string | null
            system_avatar_template: string
            associated_account_avatars: {
              id: number
              name: string
              upload_id: number
              avatar_template: string
            }[]
            selected_user_associated_account_id: number | null
            muted_usernames: { [x: string]: unknown }[]
            ignored_usernames: { [x: string]: unknown }[]
            allowed_pm_usernames: { [x: string]: unknown }[]
            mailing_list_posts_per_day: number
            can_change_bio: boolean
            can_change_location: boolean
            can_change_website: boolean
            can_change_tracking_preferences: boolean
            user_api_keys: string | null
            user_passkeys?: unknown[] | undefined
            sidebar_tags?: unknown[] | undefined
            sidebar_category_ids?: unknown[] | undefined
            display_sidebar_tags?: boolean | undefined
            can_pick_theme_with_custom_homepage?: boolean | undefined
            user_auth_tokens: {
              id: number
              client_ip: string
              location: string
              browser: string
              device: string
              os: string
              icon: string
              created_at: string
              seen_at: string
              is_active: boolean
            }[]
            user_notification_schedule: {
              enabled: boolean
              day_0_start_time: number
              day_0_end_time: number
              day_1_start_time: number
              day_1_end_time: number
              day_2_start_time: number
              day_2_end_time: number
              day_3_start_time: number
              day_3_end_time: number
              day_4_start_time: number
              day_4_end_time: number
              day_5_start_time: number
              day_5_end_time: number
              day_6_start_time: number
              day_6_end_time: number
            }
            use_logo_small_as_avatar: boolean
            featured_user_badge_ids: { [x: string]: unknown }[]
            invited_by: string | null
            groups: {
              id: number
              automatic: boolean
              name: string
              display_name: string
              user_count: number
              mentionable_level: number
              messageable_level: number
              visibility_level: number
              primary_group: boolean
              title: string | null
              grant_trust_level: string | null
              incoming_email: string | null
              has_messages: boolean
              flair_url: string | null
              flair_bg_color: string | null
              flair_color: string | null
              bio_raw: string | null
              bio_cooked: string | null
              bio_excerpt: string | null
              public_admission: boolean
              public_exit: boolean
              allow_membership_requests: boolean
              full_name: string | null
              default_notification_level: number
              membership_request_template: string | null
              members_visibility_level: number
              can_see_members: boolean
              can_admin_group: boolean
              publish_read_state: boolean
            }[]
            group_users: {
              group_id: number
              user_id: number
              notification_level: number
              owner?: boolean | undefined
            }[]
            user_option: {
              user_id: number
              mailing_list_mode: boolean
              mailing_list_mode_frequency: number
              email_digests: boolean
              email_level: number
              email_messages_level: number
              external_links_in_new_tab: boolean
              bookmark_auto_delete_preference?: number | undefined
              color_scheme_id: string | null
              dark_scheme_id: string | null
              dynamic_favicon: boolean
              enable_quoting: boolean
              enable_smart_lists: boolean
              enable_markdown_monospace_font: boolean
              digest_after_minutes: number
              automatically_unpin_topics: boolean
              auto_track_topics_after_msecs: number
              notification_level_when_replying: number
              new_topic_duration_minutes: number
              email_previous_replies: number
              email_in_reply_to: boolean
              like_notification_frequency: number
              notify_on_linked_posts: boolean
              push_notification_level: string
              enable_upcoming_change_available_notifications: boolean
              include_tl0_in_digests: boolean
              theme_ids: { [x: string]: unknown }[]
              theme_key_seq: number
              allow_private_messages: boolean
              enable_allowed_pm_users: boolean
              homepage_id: string | null
              hide_profile_and_presence: boolean
              hide_profile: boolean
              hide_presence: boolean
              text_size: string
              text_size_seq: number
              title_count_mode: string
              timezone: string | null
              skip_new_user_tips: boolean
              default_calendar?: string | undefined
              oldest_search_log_date?: (string | null) | undefined
              sidebar_link_to_filtered_list?: boolean | undefined
              sidebar_show_count_of_new_items?: boolean | undefined
              watched_precedence_over_muted?: boolean | undefined
              seen_popups?: (unknown[] | null) | undefined
              composition_mode?: number | undefined
              interface_color_mode: number
              automatically_translate: boolean
              understood_languages: string[]
              hidden_composer_toolbar_buttons: string[]
              show_original_content: boolean
              send_shortcut: string
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/u/:username/preferences/avatar/pick.json': {
      $put: {
        input: { param: { username: string } } & {
          json:
            | { type?: 'uploaded' | 'custom' | 'gravatar' | 'current' | undefined }
            | { type?: 'associated_account' | undefined }
            | { type?: 'system' | undefined }
        }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/u/:username/preferences/email.json': {
      $put: {
        input: { param: { username: string } } & { json: { email: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/u/:username/preferences/username.json': {
      $put: {
        input: { param: { username: string } } & { json: { new_username: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/directory_items.json': {
      $get: {
        input: {
          query: {
            period: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'all'
            order:
              | 'likes_received'
              | 'likes_given'
              | 'topic_count'
              | 'post_count'
              | 'topics_entered'
              | 'posts_read'
              | 'days_visited'
            asc?: 'true' | undefined
            page?: number | undefined
          }
        }
        output: {
          directory_items: {
            id: number
            likes_received: number
            likes_given: number
            topics_entered: number
            topic_count: number
            post_count: number
            posts_read: number
            days_visited: number
            user: {
              id: number
              username: string
              name: string | null
              avatar_template: string
              title: string | null
            }
          }[]
          meta: {
            last_updated_at: string | null
            total_rows_directory_items: number
            load_more_directory_items: string
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id.json': {
      $get: {
        input: { param: { id: number } }
        output: {
          id: number
          username: string
          name: string | null
          avatar_template: string
          active: boolean
          admin: boolean
          moderator: boolean
          last_seen_at: string | null
          last_emailed_at: string | null
          created_at: string
          last_seen_age: number | null
          last_emailed_age: number | null
          created_at_age: number | null
          trust_level: number
          manual_locked_trust_level: string | null
          title: string | null
          time_read: number
          staged: boolean
          days_visited: number
          posts_read_count: number
          topics_entered: number
          post_count: number
          associated_accounts?: { [x: string]: unknown }[] | undefined
          can_send_activation_email: boolean
          can_activate: boolean
          can_deactivate: boolean
          can_change_trust_level?: boolean | undefined
          ip_address: string
          registration_ip_address: string | null
          can_grant_admin: boolean
          can_revoke_admin: boolean
          can_grant_moderation: boolean
          can_revoke_moderation: boolean
          can_impersonate: boolean
          like_count: number
          like_given_count: number
          topic_count: number
          flags_given_count: number
          flags_received_count: number
          private_topics_count: number
          can_delete_all_posts: boolean
          can_be_deleted?: boolean | undefined
          can_be_anonymized: boolean
          can_be_merged: boolean
          full_suspend_reason: string | null
          latest_export?: ({ [x: string]: unknown } | null) | undefined
          full_silence_reason?: (string | null) | undefined
          silence_reason?: (string | null) | undefined
          post_edits_count?: (number | null) | undefined
          primary_group_id: number | null
          badge_count: number
          warnings_received_count: number
          bounce_score: number | null
          reset_bounce_score_after: string | null
          can_view_action_logs: boolean
          can_disable_second_factor: boolean
          can_delete_sso_record: boolean
          api_key_count: number
          similar_users_count?: number | undefined
          single_sign_on_record: string | null
          approved_by: {
            id: number
            username: string
            name: string
            avatar_template: string
          } | null
          suspended_by: string | null
          silenced_by: string | null
          penalty_counts?: { silenced: number; suspended: number } | undefined
          next_penalty?: string | undefined
          tl3_requirements?:
            | {
                time_period: number
                requirements_met: boolean
                requirements_lost: boolean
                trust_level_locked: boolean
                on_grace_period: boolean
                days_visited: number
                min_days_visited: number
                num_topics_replied_to: number
                min_topics_replied_to: number
                topics_viewed: number
                min_topics_viewed: number
                posts_read: number
                min_posts_read: number
                topics_viewed_all_time: number
                min_topics_viewed_all_time: number
                posts_read_all_time: number
                min_posts_read_all_time: number
                num_flagged_posts: number
                max_flagged_posts: number
                num_flagged_by_users: number
                max_flagged_by_users: number
                num_likes_given: number
                min_likes_given: number
                num_likes_received: number
                min_likes_received: number
                num_likes_received_days: number
                min_likes_received_days: number
                num_likes_received_users: number
                min_likes_received_users: number
                penalty_counts: { silenced: number; suspended: number; total: number }
              }
            | undefined
          groups: {
            id: number
            automatic: boolean
            name: string
            display_name: string
            user_count: number
            mentionable_level: number
            messageable_level: number
            visibility_level: number
            primary_group: boolean
            title: string | null
            grant_trust_level: string | null
            incoming_email: string | null
            has_messages: boolean
            flair_url: string | null
            flair_bg_color: string | null
            flair_color: string | null
            flair_group_id?: (number | null) | undefined
            bio_raw: string | null
            bio_cooked: string | null
            bio_excerpt: string | null
            public_admission: boolean
            public_exit: boolean
            allow_membership_requests: boolean
            full_name: string | null
            default_notification_level: number
            membership_request_template: string | null
            members_visibility_level: number
            can_see_members: boolean
            can_admin_group: boolean
            publish_read_state: boolean
          }[]
          external_ids: { [x: string]: unknown }
          include_ip: boolean
          upcoming_changes_stats?:
            | {
                name: string
                humanized_name: string
                description: string
                enabled: boolean
                specific_groups: string[]
                reason:
                  | 'enabled_for_everyone'
                  | 'enabled_for_no_one'
                  | 'in_specific_groups'
                  | 'not_in_specific_groups'
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } } & {
          json: {
            delete_posts?: boolean | undefined
            block_email?: boolean | undefined
            block_urls?: boolean | undefined
            block_ip?: boolean | undefined
          }
        }
        output: { deleted: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/activate.json': {
      $put: {
        input: { param: { id: number } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/deactivate.json': {
      $put: {
        input: { param: { id: number } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/suspend.json': {
      $put: {
        input: { param: { id: number } } & {
          json: {
            suspend_until: string
            reason: string
            message?: string | undefined
            post_action?: string | undefined
          }
        }
        output: {
          suspension: {
            suspend_reason: string
            full_suspend_reason: string
            suspended_till: string
            suspended_at: string
            suspended_by: { id: number; username: string; name: string; avatar_template: string }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/silence.json': {
      $put: {
        input: { param: { id: number } } & {
          json: {
            silenced_till: string
            reason: string
            message?: string | undefined
            post_action?: string | undefined
          }
        }
        output: {
          silence: {
            silenced: boolean
            silence_reason: string
            full_silence_reason: string
            silenced_till: string
            silenced_at: string
            silenced_by: { id: number; username: string; name: string; avatar_template: string }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/anonymize.json': {
      $put: {
        input: { param: { id: number } }
        output: { success: string; username: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/merge.json': {
      $post: {
        input: { param: { id: number } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { target_username: string } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/log_out.json': {
      $post: {
        input: { param: { id: number } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_avatar/:username/refresh_gravatar.json': {
      $post: {
        input: { param: { username: string } }
        output: { gravatar_upload_id: number | null; gravatar_avatar_template: string | null }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users.json': {
      $get: {
        input: {
          query: {
            order?:
              | 'created'
              | 'last_emailed'
              | 'seen'
              | 'username'
              | 'email'
              | 'trust_level'
              | 'days_visited'
              | 'posts_read'
              | 'topics_viewed'
              | 'posts'
              | 'read_time'
              | undefined
            asc?: 'true' | undefined
            page?: number | undefined
            show_emails?: boolean | undefined
            stats?: boolean | undefined
            email?: string | undefined
            ip?: string | undefined
          }
        }
        output: {
          id: number
          username: string
          name: string | null
          avatar_template: string
          email?: string | undefined
          secondary_emails?: { [x: string]: unknown }[] | undefined
          active: boolean
          admin: boolean
          moderator: boolean
          last_seen_at: string | null
          last_emailed_at: string | null
          created_at: string
          last_seen_age: number | null
          last_emailed_age: number | null
          created_at_age: number | null
          trust_level: number
          manual_locked_trust_level: string | null
          title: string | null
          time_read: number
          staged: boolean
          days_visited: number
          posts_read_count: number
          topics_entered: number
          post_count: number
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/list/:flag.json': {
      $get: {
        input: {
          param: { flag: 'active' | 'new' | 'staff' | 'suspended' | 'blocked' | 'suspect' }
        } & {
          query: {
            order?:
              | 'created'
              | 'last_emailed'
              | 'seen'
              | 'username'
              | 'email'
              | 'trust_level'
              | 'days_visited'
              | 'posts_read'
              | 'topics_viewed'
              | 'posts'
              | 'read_time'
              | undefined
            asc?: 'true' | undefined
            page?: number | undefined
            show_emails?: boolean | undefined
            stats?: boolean | undefined
            email?: string | undefined
            ip?: string | undefined
          }
        }
        output: {
          id: number
          username: string
          name: string | null
          avatar_template: string
          email?: string | undefined
          secondary_emails?: { [x: string]: unknown }[] | undefined
          active: boolean
          admin: boolean
          moderator: boolean
          last_seen_at: string | null
          last_emailed_at: string | null
          created_at: string
          last_seen_age: number | null
          last_emailed_age: number | null
          created_at_age: number | null
          trust_level: number
          manual_locked_trust_level: string | null
          title: string | null
          time_read: number
          staged: boolean
          days_visited: number
          posts_read_count: number
          topics_entered: number
          post_count: number
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_actions.json': {
      $get: {
        input: { query: { offset: number; username: string; filter: string } }
        output: {
          user_actions: {
            excerpt: string
            action_type: number
            created_at: string
            avatar_template: string
            acting_avatar_template: string
            slug: string
            topic_id: number
            target_user_id: number
            target_name: string | null
            target_username: string
            post_number: number
            post_id: string | null
            username: string
            name: string | null
            user_id: number
            acting_username: string
            acting_name: string | null
            acting_user_id: number
            title: string
            deleted: boolean
            hidden: string | null
            post_type: string | null
            action_code: string | null
            category_id: number
            closed: boolean
            archived: boolean
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/session/forgot_password.json': {
      $post: {
        input: { json: { login: string } }
        output: { success: string; user_found: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/password-reset/:token.json': {
      $put: {
        input: { param: { token: string } } & { json: { username: string; password: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/u/:username/emails.json': {
      $get: {
        input: { param: { username: string } }
        output: {
          email: string
          secondary_emails: { [x: string]: unknown }[]
          unconfirmed_emails: { [x: string]: unknown }[]
          associated_accounts: { [x: string]: unknown }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
