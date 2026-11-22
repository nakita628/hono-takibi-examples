declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/admin/backups.json': {
      $get: {
        input: {}
        output: { filename: string; last_modified: string; size: number }[]
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
      $get: {
        input: { param: { filename: string } } & { query: { token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { filename: string } }
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
          admin_badges: {
            badge_grouping_ids: { [x: string]: unknown }[]
            badge_ids: { [x: string]: unknown }[]
            badge_type_ids: { [x: string]: unknown }[]
            protected_system_fields: { [x: string]: unknown }[]
            triggers: {
              none: number
              post_action: number
              post_revision: number
              trust_level_change: number
              user_change: number
            }
          }
          badge_groupings: {
            description: string | null
            id: number
            name: string
            position: number
            system: boolean
          }[]
          badge_types: { id: number; name: string; sort_order: number }[]
          badges: {
            allow_title: boolean
            auto_revoke: boolean
            badge_grouping_id: number
            badge_type_id: number
            description: string
            enabled: boolean
            grant_count: number
            i18n_name?: (string | null) | undefined
            icon: string
            id: number
            image_url: string | null
            listable: boolean
            long_description: string
            manually_grantable: boolean
            multiple_grant: boolean
            name: string
            query: string | null
            show_posts: boolean
            slug: string
            system: boolean
            target_posts: boolean
            trigger: number | null
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { badge_type_id: number; name: string } }
        output: {
          badge: {
            allow_title: boolean
            auto_revoke: boolean
            badge_grouping_id: number
            badge_type_id: number
            description: string
            enabled: boolean
            grant_count: number
            icon: string
            id: number
            image_url: string | null
            listable: boolean
            long_description: string
            manually_grantable: boolean
            multiple_grant: boolean
            name: string
            query: string | null
            show_posts: boolean
            slug: string
            system: boolean
            target_posts: boolean
            trigger: string | null
          }
          badge_types: { id: number; name: string; sort_order: number }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/badges/:id.json': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { id: number } } & { json: { badge_type_id: number; name: string } }
        output: {
          badge: {
            allow_title: boolean
            auto_revoke: boolean
            badge_grouping_id: number
            badge_type_id: number
            description: string
            enabled: boolean
            grant_count: number
            icon: string
            id: number
            image_url: string | null
            listable: boolean
            long_description: string
            manually_grantable: boolean
            multiple_grant: boolean
            name: string
            query: string | null
            show_posts: boolean
            slug: string
            system: boolean
            target_posts: boolean
            trigger: string | null
          }
          badge_types: { id: number; name: string; sort_order: number }[]
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
              automatic_membership_email_domains?: string | undefined
              bio_raw?: string | undefined
              default_notification_level?: number | undefined
              flair_bg_color?: string | undefined
              flair_icon?: string | undefined
              flair_upload_id?: number | undefined
              full_name?: string | undefined
              muted_category_ids?: number[] | undefined
              name: string
              owner_usernames?: string | undefined
              primary_group?: boolean | undefined
              public_admission?: boolean | undefined
              public_exit?: boolean | undefined
              regular_category_ids?: number[] | undefined
              tracking_category_ids?: number[] | undefined
              usernames?: string | undefined
              visibility_level?: number | undefined
              watching_category_ids?: number[] | undefined
              watching_first_post_category_ids?: number[] | undefined
            }
          }
        }
        output: {
          basic_group: {
            allow_membership_requests: boolean
            automatic: boolean
            bio_cooked: string | null
            bio_excerpt: string | null
            bio_raw: string | null
            can_admin_group: boolean
            can_edit_group?: boolean | undefined
            can_see_members: boolean
            default_notification_level: number
            flair_bg_color: string | null
            flair_color: string | null
            flair_url: string | null
            full_name: string | null
            grant_trust_level: string | null
            has_messages: boolean
            id: number
            incoming_email: string | null
            members_visibility_level: number
            membership_request_template: string | null
            mentionable_level: number
            messageable_level: number
            name: string
            primary_group: boolean
            public_admission: boolean
            public_exit: boolean
            publish_read_state: boolean
            title: string | null
            user_count: number
            visibility_level: number
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
          }
        }
        output: {
          active: boolean
          admin: boolean
          avatar_template: string
          created_at: string
          created_at_age: number | null
          days_visited: number
          email?: string | undefined
          flag_level: number
          id: number
          last_emailed_age: number | null
          last_emailed_at: string | null
          last_seen_age: number | null
          last_seen_at: string | null
          manual_locked_trust_level: string | null
          moderator: boolean
          name: string | null
          post_count: number
          posts_read_count: number
          secondary_emails?: { [x: string]: unknown }[] | undefined
          staged: boolean
          time_read: number
          title: string | null
          topics_entered: number
          trust_level: number
          username: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id.json': {
      $delete: {
        input: { param: { id: number } } & {
          json: {
            block_email?: boolean | undefined
            block_ip?: boolean | undefined
            block_urls?: boolean | undefined
            delete_posts?: boolean | undefined
          }
        }
        output: { deleted: boolean }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } }
        output: {
          active: boolean
          admin: boolean
          api_key_count: number
          approved_by: {
            avatar_template: string
            id: number
            name: string
            username: string
          } | null
          associated_accounts?: { [x: string]: unknown }[] | undefined
          avatar_template: string
          badge_count: number
          bounce_score: number | null
          can_activate: boolean
          can_be_anonymized: boolean
          can_be_deleted: boolean
          can_be_merged: boolean
          can_deactivate: boolean
          can_delete_all_posts: boolean
          can_delete_sso_record: boolean
          can_disable_second_factor: boolean
          can_grant_admin: boolean
          can_grant_moderation: boolean
          can_impersonate: boolean
          can_revoke_admin: boolean
          can_revoke_moderation: boolean
          can_send_activation_email: boolean
          can_view_action_logs: boolean
          created_at: string
          created_at_age: number | null
          days_visited: number
          external_ids: { [x: string]: unknown }
          flag_level: number
          flags_given_count: number
          flags_received_count: number
          full_suspend_reason: string | null
          groups: {
            allow_membership_requests: boolean
            automatic: boolean
            bio_cooked: string | null
            bio_excerpt: string | null
            bio_raw: string | null
            can_admin_group: boolean
            can_see_members: boolean
            default_notification_level: number
            display_name: string
            flair_bg_color: string | null
            flair_color: string | null
            flair_url: string | null
            full_name: string | null
            grant_trust_level: string | null
            has_messages: boolean
            id: number
            incoming_email: string | null
            members_visibility_level: number
            membership_request_template: string | null
            mentionable_level: number
            messageable_level: number
            name: string
            primary_group: boolean
            public_admission: boolean
            public_exit: boolean
            publish_read_state: boolean
            title: string | null
            user_count: number
            visibility_level: number
          }[]
          id: number
          ip_address: string
          last_emailed_age: number | null
          last_emailed_at: string | null
          last_seen_age: number | null
          last_seen_at: string | null
          like_count: number
          like_given_count: number
          manual_locked_trust_level: string | null
          moderator: boolean
          name: string | null
          next_penalty?: string | undefined
          penalty_counts?: { silenced: number; suspended: number } | undefined
          post_count: number
          post_edits_count?: (number | null) | undefined
          posts_read_count: number
          primary_group_id: string | null
          private_topics_count: number
          registration_ip_address: string | null
          reset_bounce_score_after: string | null
          silence_reason: string | null
          silenced_by: string | null
          single_sign_on_record: string | null
          staged: boolean
          suspended_by: string | null
          time_read: number
          title: string | null
          tl3_requirements?:
            | {
                days_visited: number
                max_flagged_by_users: number
                max_flagged_posts: number
                min_days_visited: number
                min_likes_given: number
                min_likes_received: number
                min_likes_received_days: number
                min_likes_received_users: number
                min_posts_read: number
                min_posts_read_all_time: number
                min_topics_replied_to: number
                min_topics_viewed: number
                min_topics_viewed_all_time: number
                num_flagged_by_users: number
                num_flagged_posts: number
                num_likes_given: number
                num_likes_received: number
                num_likes_received_days: number
                num_likes_received_users: number
                num_topics_replied_to: number
                on_grace_period: boolean
                penalty_counts: { silenced: number; suspended: number; total: number }
                posts_read: number
                posts_read_all_time: number
                requirements_lost: boolean
                requirements_met: boolean
                time_period: number
                topics_viewed: number
                topics_viewed_all_time: number
                trust_level_locked: boolean
              }
            | undefined
          topic_count: number
          topics_entered: number
          trust_level: number
          username: string
          warnings_received_count: number
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
    '/admin/users/:id/log_out.json': {
      $post: {
        input: { param: { id: number } }
        output: { success: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/silence.json': {
      $put: {
        input: { param: { id: number } } & {
          json: {
            message?: string | undefined
            post_action?: string | undefined
            reason?: string | undefined
            silenced_till?: string | undefined
          }
        }
        output: {
          silence: {
            silence_reason: string
            silenced: boolean
            silenced_at: string
            silenced_by: { avatar_template: string; id: number; name: string; username: string }
            silenced_till: string
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/suspend.json': {
      $put: {
        input: { param: { id: number } } & {
          json: {
            message?: string | undefined
            post_action?: string | undefined
            reason: string
            suspend_until: string
          }
        }
        output: {
          suspension: {
            full_suspend_reason: string
            suspend_reason: string
            suspended_at: string
            suspended_by: { avatar_template: string; id: number; name: string; username: string }
            suspended_till: string
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
            all_topics_wiki: boolean
            allow_badges: boolean
            allow_global_tags?: boolean | undefined
            allow_unlimited_owner_edits_on_first_post: boolean
            allowed_tag_groups?: { [x: string]: unknown }[] | undefined
            allowed_tags?: { [x: string]: unknown }[] | undefined
            auto_close_based_on_last_post: boolean
            auto_close_hours: string | null
            available_groups: { [x: string]: unknown }[]
            can_delete: boolean
            can_edit: boolean
            color: string
            custom_fields: {}
            default_list_filter: string
            default_slow_mode_seconds: string | null
            default_top_period: string
            default_view: string | null
            description: string | null
            description_excerpt: string | null
            description_text: string | null
            email_in: string | null
            email_in_allow_strangers: boolean
            form_template_ids?: { [x: string]: unknown }[] | undefined
            group_permissions: { group_name: string; permission_type: number }[]
            has_children: string | null
            id: number
            mailinglist_mirror: boolean
            minimum_required_tags: number
            name: string
            navigate_to_first_post_after_read: boolean
            notification_level: number
            num_featured_topics: number
            permission: number | null
            position: number
            post_count: number
            read_only_banner: string | null
            read_restricted: boolean
            required_tag_groups: { min_count: number; name: string }[]
            search_priority: number
            show_subcategory_list: boolean
            slug: string
            sort_ascending: string | null
            sort_order: string | null
            subcategory_list_style: string
            text_color: string
            topic_count: number
            topic_featured_link_allowed: boolean
            topic_template: string | null
            topic_url: string | null
            uploaded_background: string | null
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
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
          primary_groups?: { [x: string]: unknown }[] | undefined
          topic_list: {
            can_create_topic: boolean
            per_page: number
            top_tags?: { [x: string]: unknown }[] | undefined
            topics: {
              archetype: string
              archived: boolean
              bookmarked: string | null
              bumped: boolean
              bumped_at: string
              category_id: number
              closed: boolean
              created_at: string
              excerpt: string
              fancy_title: string
              featured_link: string | null
              has_summary: boolean
              highest_post_number: number
              id: number
              image_url: string | null
              last_posted_at: string
              last_poster_username: string
              like_count: number
              liked: string | null
              pinned: boolean
              pinned_globally: boolean
              posters: {
                description: string
                extras: string
                primary_group_id: string | null
                user_id: number
              }[]
              posts_count: number
              reply_count: number
              slug: string
              title: string
              unpinned: string | null
              unseen: boolean
              views: number
              visible: boolean
            }[]
          }
          users?:
            | { avatar_template: string; id: number; name: string; username: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories.json': {
      $get: {
        input: { query: { include_subcategories?: true | undefined } }
        output: {
          category_list: {
            can_create_category: boolean
            can_create_topic: boolean
            categories: {
              can_edit: boolean
              color: string
              default_list_filter: string
              default_top_period: string
              default_view: string | null
              description: string | null
              description_excerpt: string | null
              description_text: string | null
              has_children: boolean
              id: number
              is_uncategorized?: boolean | undefined
              minimum_required_tags: number
              name: string
              navigate_to_first_post_after_read: boolean
              notification_level: number
              num_featured_topics: number
              permission: number
              position: number
              post_count: number
              read_restricted: boolean
              show_subcategory_list: boolean
              slug: string
              sort_ascending: string | null
              sort_order: string | null
              subcategory_ids: { [x: string]: unknown }[]
              subcategory_list?: ({ [x: string]: unknown }[] | null) | undefined
              subcategory_list_style: string
              text_color: string
              topic_count: number
              topic_template: string | null
              topic_url: string | null
              topics_all_time: number
              topics_day: number
              topics_month: number
              topics_week: number
              topics_year: number
              uploaded_background: string | null
              uploaded_logo: string | null
              uploaded_logo_dark: string | null
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            allow_badges?: boolean | undefined
            color?: string | undefined
            form_template_ids?: { [x: string]: unknown }[] | undefined
            name: string
            parent_category_id?: number | undefined
            permissions?: { everyone?: number | undefined; staff?: number | undefined } | undefined
            search_priority?: number | undefined
            slug?: string | undefined
            text_color?: string | undefined
            topic_featured_links_allowed?: boolean | undefined
          }
        }
        output: {
          category: {
            all_topics_wiki: boolean
            allow_badges: boolean
            allow_global_tags?: boolean | undefined
            allow_unlimited_owner_edits_on_first_post: boolean
            allowed_tag_groups?: { [x: string]: unknown }[] | undefined
            allowed_tags?: { [x: string]: unknown }[] | undefined
            auto_close_based_on_last_post: boolean
            auto_close_hours: string | null
            available_groups: { [x: string]: unknown }[]
            can_delete: boolean
            can_edit: boolean
            color: string
            custom_fields: {}
            default_list_filter: string
            default_slow_mode_seconds: string | null
            default_top_period: string
            default_view: string | null
            description: string | null
            description_excerpt: string | null
            description_text: string | null
            email_in: string | null
            email_in_allow_strangers: boolean
            form_template_ids?: { [x: string]: unknown }[] | undefined
            group_permissions: { group_name: string; permission_type: number }[]
            has_children: string | null
            id: number
            mailinglist_mirror: boolean
            minimum_required_tags: number
            name: string
            navigate_to_first_post_after_read: boolean
            notification_level: number
            num_featured_topics: number
            permission: number | null
            position: number
            post_count: number
            read_only_banner: string | null
            read_restricted: boolean
            required_tag_groups: { min_count: number; name: string }[]
            search_priority: number
            show_subcategory_list: boolean
            slug: string
            sort_ascending: string | null
            sort_order: string | null
            subcategory_list_style: string
            text_color: string
            topic_count: number
            topic_featured_link_allowed: boolean
            topic_template: string | null
            topic_url: string | null
            uploaded_background: string | null
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
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
            allow_badges?: boolean | undefined
            color?: string | undefined
            form_template_ids?: { [x: string]: unknown }[] | undefined
            name: string
            parent_category_id?: number | undefined
            permissions?: { everyone?: number | undefined; staff?: number | undefined } | undefined
            search_priority?: number | undefined
            slug?: string | undefined
            text_color?: string | undefined
            topic_featured_links_allowed?: boolean | undefined
          }
        }
        output: {
          category: {
            all_topics_wiki: boolean
            allow_badges: boolean
            allow_global_tags?: boolean | undefined
            allow_unlimited_owner_edits_on_first_post: boolean
            allowed_tag_groups?: { [x: string]: unknown }[] | undefined
            allowed_tags?: { [x: string]: unknown }[] | undefined
            auto_close_based_on_last_post: boolean
            auto_close_hours: string | null
            available_groups: { [x: string]: unknown }[]
            can_delete: boolean
            can_edit: boolean
            color: string
            custom_fields: {}
            default_list_filter: string
            default_slow_mode_seconds: string | null
            default_top_period: string
            default_view: string | null
            description: string | null
            description_excerpt: string | null
            description_text: string | null
            email_in: string | null
            email_in_allow_strangers: boolean
            form_template_ids: { [x: string]: unknown }[]
            group_permissions: { group_name: string; permission_type: number }[]
            has_children: string | null
            id: number
            mailinglist_mirror: boolean
            minimum_required_tags: number
            name: string
            navigate_to_first_post_after_read: boolean
            notification_level: number
            num_featured_topics: number
            permission: string | null
            position: number
            post_count: number
            read_only_banner: string | null
            read_restricted: boolean
            required_tag_groups: { min_count: number; name: string }[]
            search_priority: number
            show_subcategory_list: boolean
            slug: string
            sort_ascending: string | null
            sort_order: string | null
            subcategory_list_style: string
            text_color: string
            topic_count: number
            topic_featured_link_allowed: boolean
            topic_template: string | null
            topic_url: string | null
            uploaded_background: string | null
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
          }
          success: string
        }
        outputFormat: 'json'
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
            days_visited: number
            id: number
            likes_given: number
            likes_received: number
            post_count: number
            posts_read: number
            topic_count: number
            topics_entered: number
            user: {
              avatar_template: string
              id: number
              name: string | null
              title: string | null
              username: string
            }
          }[]
          meta: {
            last_updated_at: string | null
            load_more_directory_items: string
            total_rows_directory_items: number
          }
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
          extras: { type_filters: { [x: string]: unknown }[] }
          groups: {
            allow_membership_requests: boolean
            automatic: boolean
            bio_cooked: string | null
            bio_excerpt: string | null
            bio_raw: string | null
            can_admin_group: boolean
            can_edit_group?: boolean | undefined
            can_see_members: boolean
            default_notification_level: number
            display_name: string
            flair_bg_color: string | null
            flair_color: string | null
            flair_url: string | null
            full_name: string | null
            grant_trust_level: string | null
            has_messages: boolean
            id: number
            incoming_email: string | null
            is_group_owner?: boolean | undefined
            is_group_user?: boolean | undefined
            members_visibility_level: number
            membership_request_template: string | null
            mentionable_level: number
            messageable_level: number
            name: string
            primary_group: boolean
            public_admission: boolean
            public_exit: boolean
            publish_read_state: boolean
            title: string | null
            user_count: number
            visibility_level: number
          }[]
          load_more_groups: string
          total_rows_groups: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:id.json': {
      $get: {
        input: { param: { id: string } }
        output: {
          extras: { visible_group_names: { [x: string]: unknown }[] }
          group: {
            allow_membership_requests: boolean
            allow_unknown_sender_topic_replies: boolean
            associated_group_ids?: { [x: string]: unknown }[] | undefined
            automatic: boolean
            automatic_membership_email_domains: string | null
            bio_cooked: string | null
            bio_excerpt: string | null
            bio_raw: string | null
            can_admin_group: boolean
            can_edit_group?: boolean | undefined
            can_see_members: boolean
            default_notification_level: number
            email_from_alias?: (string | null) | undefined
            email_password: string | null
            email_username: string | null
            flair_bg_color: string | null
            flair_color: string | null
            flair_url: string | null
            full_name: string | null
            grant_trust_level: string | null
            has_messages: boolean
            id: number
            imap_enabled?: boolean | undefined
            imap_last_error: string | null
            imap_mailbox_name: string
            imap_mailboxes: { [x: string]: unknown }[]
            imap_new_emails: string | null
            imap_old_emails: string | null
            imap_port: string | null
            imap_server: string | null
            imap_ssl: string | null
            imap_updated_at?: (string | null) | undefined
            imap_updated_by?: ({ [x: string]: unknown } | null) | undefined
            incoming_email: string | null
            is_group_owner_display: boolean
            is_group_user: boolean
            members_visibility_level: number
            membership_request_template: string | null
            mentionable: boolean
            mentionable_level: number
            message_count: number
            messageable: boolean
            messageable_level: number
            muted_category_ids: { [x: string]: unknown }[]
            muted_tags?: { [x: string]: unknown }[] | undefined
            name: string
            primary_group: boolean
            public_admission: boolean
            public_exit: boolean
            publish_read_state: boolean
            regular_category_ids: { [x: string]: unknown }[]
            regular_tags?: { [x: string]: unknown }[] | undefined
            smtp_enabled?: boolean | undefined
            smtp_port: string | null
            smtp_server: string | null
            smtp_ssl: string | null
            smtp_updated_at?: (string | null) | undefined
            smtp_updated_by?: ({ [x: string]: unknown } | null) | undefined
            title: string | null
            tracking_category_ids: { [x: string]: unknown }[]
            tracking_tags?: { [x: string]: unknown }[] | undefined
            user_count: number
            visibility_level: number
            watching_category_ids: { [x: string]: unknown }[]
            watching_first_post_category_ids: { [x: string]: unknown }[]
            watching_first_post_tags?: { [x: string]: unknown }[] | undefined
            watching_tags?: { [x: string]: unknown }[] | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          json: {
            group: {
              automatic_membership_email_domains?: string | undefined
              bio_raw?: string | undefined
              default_notification_level?: number | undefined
              flair_bg_color?: string | undefined
              flair_icon?: string | undefined
              flair_upload_id?: number | undefined
              full_name?: string | undefined
              muted_category_ids?: number[] | undefined
              name: string
              owner_usernames?: string | undefined
              primary_group?: boolean | undefined
              public_admission?: boolean | undefined
              public_exit?: boolean | undefined
              regular_category_ids?: number[] | undefined
              tracking_category_ids?: number[] | undefined
              usernames?: string | undefined
              visibility_level?: number | undefined
              watching_category_ids?: number[] | undefined
              watching_first_post_category_ids?: number[] | undefined
            }
          }
        }
        output: { success?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:id/members.json': {
      $delete: {
        input: { param: { id: number } } & { json: { usernames?: string | undefined } }
        output: {
          skipped_usernames: { [x: string]: unknown }[]
          success: string
          usernames: { [x: string]: unknown }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: {
          members: {
            added_at: string
            avatar_template: string
            id: number
            last_posted_at: string
            last_seen_at: string
            name: string | null
            timezone: string
            title: string | null
            username: string
          }[]
          meta: { limit: number; offset: number; total: number }
          owners: {
            added_at: string
            avatar_template: string
            id: number
            last_posted_at: string
            last_seen_at: string
            name: string | null
            timezone: string
            title: string | null
            username: string
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: { usernames?: string | undefined } }
        output: {
          emails: { [x: string]: unknown }[]
          success: string
          usernames: { [x: string]: unknown }[]
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
            custom_message?: string | undefined
            email?: string | undefined
            expires_at?: string | undefined
            group_id?: number | undefined
            group_names?: string | undefined
            max_redemptions_allowed?: number | undefined
            skip_email?: boolean | undefined
            topic_id?: number | undefined
          }
        }
        output: {
          created_at?: string | undefined
          custom_message?: (string | null) | undefined
          email?: string | undefined
          emailed?: boolean | undefined
          expired?: boolean | undefined
          expires_at?: string | undefined
          groups?: { [x: string]: unknown }[] | undefined
          id?: number | undefined
          link?: string | undefined
          topics?: { [x: string]: unknown }[] | undefined
          updated_at?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/latest.json': {
      $get: {
        input: { query: { order?: string | undefined; ascending?: string | undefined } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        }
        output: {
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
                      archetype?: string | undefined
                      archived?: boolean | undefined
                      bookmarked?: boolean | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      category_id?: number | undefined
                      closed?: boolean | undefined
                      created_at?: string | undefined
                      fancy_title?: string | undefined
                      featured_link?: (string | null) | undefined
                      has_summary?: boolean | undefined
                      highest_post_number?: number | undefined
                      id?: number | undefined
                      image_url?: string | undefined
                      last_posted_at?: string | undefined
                      last_poster_username?: string | undefined
                      last_read_post_number?: number | undefined
                      like_count?: number | undefined
                      liked?: boolean | undefined
                      notification_level?: number | undefined
                      op_like_count?: number | undefined
                      pinned?: boolean | undefined
                      pinned_globally?: boolean | undefined
                      posters?:
                        | {
                            description?: string | undefined
                            extras?: string | undefined
                            primary_group_id?: (string | null) | undefined
                            user_id?: number | undefined
                          }[]
                        | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      slug?: string | undefined
                      title?: string | undefined
                      unpinned?: (string | null) | undefined
                      unread_posts?: number | undefined
                      unseen?: boolean | undefined
                      views?: number | undefined
                      visible?: boolean | undefined
                    }[]
                  | undefined
              }
            | undefined
          users?:
            | {
                avatar_template?: string | undefined
                id?: number | undefined
                name?: (string | null) | undefined
                username?: string | undefined
              }[]
            | undefined
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
          load_more_notifications?: string | undefined
          notifications?:
            | {
                created_at?: string | undefined
                data?:
                  | {
                      badge_id?: number | undefined
                      badge_name?: string | undefined
                      badge_slug?: string | undefined
                      badge_title?: boolean | undefined
                      username?: string | undefined
                    }
                  | undefined
                id?: number | undefined
                notification_type?: number | undefined
                post_number?: (string | null) | undefined
                read?: boolean | undefined
                slug?: (string | null) | undefined
                topic_id?: (number | null) | undefined
                user_id?: number | undefined
              }[]
            | undefined
          seen_notification_id?: number | undefined
          total_rows_notifications?: number | undefined
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
    '/post_actions.json': {
      $post: {
        input: { header: { 'Api-Key': string; 'Api-Username': string } } & {
          json: { flag_topic?: boolean | undefined; id: number; post_action_type_id: number }
        }
        output: {
          actions_summary?:
            | {
                acted?: boolean | undefined
                can_undo?: boolean | undefined
                count?: number | undefined
                id?: number | undefined
              }[]
            | undefined
          admin?: boolean | undefined
          avatar_template?: string | undefined
          can_delete?: boolean | undefined
          can_edit?: boolean | undefined
          can_recover?: boolean | undefined
          can_view_edit_history?: boolean | undefined
          can_wiki?: boolean | undefined
          cooked?: string | undefined
          created_at?: string | undefined
          deleted_at?: (string | null) | undefined
          display_username?: string | undefined
          edit_reason?: (string | null) | undefined
          flair_bg_color?: (string | null) | undefined
          flair_color?: (string | null) | undefined
          flair_name?: (string | null) | undefined
          flair_url?: (string | null) | undefined
          hidden?: boolean | undefined
          id?: number | undefined
          incoming_link_count?: number | undefined
          moderator?: boolean | undefined
          name?: string | undefined
          notice?: { [x: string]: unknown } | undefined
          post_number?: number | undefined
          post_type?: number | undefined
          primary_group_name?: (string | null) | undefined
          quote_count?: number | undefined
          readers_count?: number | undefined
          reads?: number | undefined
          reply_count?: number | undefined
          reply_to_post_number?: (string | null) | undefined
          reviewable_id?: (string | null) | undefined
          reviewable_score_count?: number | undefined
          reviewable_score_pending_count?: number | undefined
          score?: number | undefined
          staff?: boolean | undefined
          topic_id?: number | undefined
          topic_slug?: string | undefined
          trust_level?: number | undefined
          updated_at?: string | undefined
          user_deleted?: boolean | undefined
          user_id?: number | undefined
          user_title?: (string | null) | undefined
          username?: string | undefined
          version?: number | undefined
          wiki?: boolean | undefined
          yours?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/posts.json': {
      $get: {
        input: { query: { before?: string | undefined } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        }
        output: {
          latest_posts?:
            | {
                actions_summary?:
                  | { can_act?: boolean | undefined; id?: number | undefined }[]
                  | undefined
                admin?: boolean | undefined
                avatar_template?: string | undefined
                can_delete?: boolean | undefined
                can_edit?: boolean | undefined
                can_recover?: boolean | undefined
                can_view_edit_history?: boolean | undefined
                can_wiki?: boolean | undefined
                category_id?: number | undefined
                cooked?: string | undefined
                created_at?: string | undefined
                deleted_at?: (string | null) | undefined
                display_username?: string | undefined
                edit_reason?: (string | null) | undefined
                flair_bg_color?: (string | null) | undefined
                flair_color?: (string | null) | undefined
                flair_name?: (string | null) | undefined
                flair_url?: (string | null) | undefined
                hidden?: boolean | undefined
                id?: number | undefined
                incoming_link_count?: number | undefined
                moderator?: boolean | undefined
                name?: string | undefined
                post_number?: number | undefined
                post_type?: number | undefined
                primary_group_name?: (string | null) | undefined
                quote_count?: number | undefined
                raw?: string | undefined
                readers_count?: number | undefined
                reads?: number | undefined
                reply_count?: number | undefined
                reply_to_post_number?: (string | null) | undefined
                reviewable_id?: (string | null) | undefined
                reviewable_score_count?: number | undefined
                reviewable_score_pending_count?: number | undefined
                score?: number | undefined
                staff?: boolean | undefined
                topic_html_title?: string | undefined
                topic_id?: number | undefined
                topic_slug?: string | undefined
                topic_title?: string | undefined
                trust_level?: number | undefined
                updated_at?: string | undefined
                user_deleted?: boolean | undefined
                user_id?: number | undefined
                user_title?: (string | null) | undefined
                username?: string | undefined
                version?: number | undefined
                wiki?: boolean | undefined
                yours?: boolean | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            archetype?: string | undefined
            category?: number | undefined
            created_at?: string | undefined
            embed_url?: string | undefined
            external_id?: string | undefined
            raw: string
            target_recipients?: string | undefined
            target_usernames?: string | undefined
            title?: string | undefined
            topic_id?: number | undefined
          }
        }
        output: {
          actions_summary: { can_act: boolean; id: number }[]
          admin: boolean
          avatar_template: string
          bookmarked: boolean
          can_delete: boolean
          can_edit: boolean
          can_recover: boolean
          can_view_edit_history: boolean
          can_wiki: boolean
          cooked: string
          created_at: string
          deleted_at: string | null
          display_username: string | null
          draft_sequence: number
          edit_reason: string | null
          flair_bg_color: string | null
          flair_color: string | null
          flair_name: string | null
          flair_url: string | null
          hidden: boolean
          id: number
          incoming_link_count: number
          mentioned_users?: { [x: string]: unknown }[] | undefined
          moderator: boolean
          name: string | null
          post_number: number
          post_type: number
          primary_group_name: string | null
          quote_count: number
          raw?: string | undefined
          readers_count: number
          reads: number
          reply_count: number
          reply_to_post_number: string | null
          reviewable_id: string | null
          reviewable_score_count: number
          reviewable_score_pending_count: number
          score: number
          staff: boolean
          topic_id: number
          topic_slug: string
          trust_level: number
          updated_at: string
          user_deleted: boolean
          user_id: number
          user_title: string | null
          username: string
          version: number
          wiki: boolean
          yours: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/posts/:id.json': {
      $delete: {
        input: { param: { id: number } } & { json: { force_destroy?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { header: { 'Api-Key': string; 'Api-Username': string } }
        output: {
          actions_summary?: { can_act?: boolean | undefined; id?: number | undefined }[] | undefined
          admin?: boolean | undefined
          avatar_template?: string | undefined
          can_delete?: boolean | undefined
          can_edit?: boolean | undefined
          can_recover?: boolean | undefined
          can_view_edit_history?: boolean | undefined
          can_wiki?: boolean | undefined
          cooked?: string | undefined
          created_at?: string | undefined
          deleted_at?: (string | null) | undefined
          display_username?: (string | null) | undefined
          edit_reason?: (string | null) | undefined
          flair_bg_color?: (string | null) | undefined
          flair_color?: (string | null) | undefined
          flair_name?: (string | null) | undefined
          flair_url?: (string | null) | undefined
          hidden?: boolean | undefined
          id?: number | undefined
          incoming_link_count?: number | undefined
          moderator?: boolean | undefined
          name?: (string | null) | undefined
          post_number?: number | undefined
          post_type?: number | undefined
          primary_group_name?: (string | null) | undefined
          quote_count?: number | undefined
          raw?: string | undefined
          readers_count?: number | undefined
          reads?: number | undefined
          reply_count?: number | undefined
          reply_to_post_number?: (string | null) | undefined
          reviewable_id?: (string | null) | undefined
          reviewable_score_count?: number | undefined
          reviewable_score_pending_count?: number | undefined
          score?: number | undefined
          staff?: boolean | undefined
          topic_id?: number | undefined
          topic_slug?: string | undefined
          trust_level?: number | undefined
          updated_at?: string | undefined
          user_deleted?: boolean | undefined
          user_id?: number | undefined
          user_title?: (string | null) | undefined
          username?: string | undefined
          version?: number | undefined
          wiki?: boolean | undefined
          yours?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { post?: { edit_reason?: string | undefined; raw: string } | undefined } }
        output: {
          post?:
            | {
                actions_summary?:
                  | { can_act?: boolean | undefined; id?: number | undefined }[]
                  | undefined
                admin?: boolean | undefined
                avatar_template?: string | undefined
                can_delete?: boolean | undefined
                can_edit?: boolean | undefined
                can_recover?: boolean | undefined
                can_view_edit_history?: boolean | undefined
                can_wiki?: boolean | undefined
                cooked?: string | undefined
                created_at?: string | undefined
                deleted_at?: (string | null) | undefined
                display_username?: (string | null) | undefined
                draft_sequence?: number | undefined
                edit_reason?: (string | null) | undefined
                flair_bg_color?: (string | null) | undefined
                flair_color?: (string | null) | undefined
                flair_url?: (string | null) | undefined
                hidden?: boolean | undefined
                id?: number | undefined
                incoming_link_count?: number | undefined
                moderator?: boolean | undefined
                name?: (string | null) | undefined
                post_number?: number | undefined
                post_type?: number | undefined
                primary_group_name?: (string | null) | undefined
                quote_count?: number | undefined
                readers_count?: number | undefined
                reads?: number | undefined
                reply_count?: number | undefined
                reply_to_post_number?: (string | null) | undefined
                reviewable_id?: (string | null) | undefined
                reviewable_score_count?: number | undefined
                reviewable_score_pending_count?: number | undefined
                score?: number | undefined
                staff?: boolean | undefined
                topic_id?: number | undefined
                topic_slug?: string | undefined
                trust_level?: number | undefined
                updated_at?: string | undefined
                user_deleted?: boolean | undefined
                user_id?: number | undefined
                user_title?: (string | null) | undefined
                username?: string | undefined
                version?: number | undefined
                wiki?: boolean | undefined
                yours?: boolean | undefined
              }
            | undefined
        }
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
        output: { locked?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/posts/:id/replies.json': {
      $get: {
        input: { param: { id: string } }
        output: {
          actions_summary: { can_act: boolean; id: number }[]
          admin: boolean
          avatar_template: string
          bookmarked: boolean
          can_delete: boolean
          can_edit: boolean
          can_recover: boolean
          can_view_edit_history: boolean
          can_wiki: boolean
          cooked: string
          created_at: string
          deleted_at: string | null
          display_username: string | null
          edit_reason: string | null
          flair_bg_color: string | null
          flair_color: string | null
          flair_name: string | null
          flair_url: string | null
          hidden: boolean
          id: number
          incoming_link_count: number
          moderator: boolean
          name: string | null
          post_number: number
          post_type: number
          primary_group_name: string | null
          quote_count: number
          readers_count: number
          reads: number
          reply_count: number
          reply_to_post_number: number
          reply_to_user: { avatar_template: string; name?: string | undefined; username: string }
          reviewable_id: string | null
          reviewable_score_count: number
          reviewable_score_pending_count: number
          score: number
          staff: boolean
          topic_id: number
          topic_slug: string
          trust_level: number
          updated_at: string
          user_deleted: boolean
          user_id: number
          user_title: string | null
          username: string
          version: number
          wiki: boolean
          yours: boolean
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search.json': {
      $get: {
        input: { query: { q?: string | undefined; page?: number | undefined } }
        output: {
          categories: { [x: string]: unknown }[]
          grouped_search_result: {
            can_create_topic: boolean
            category_ids: { [x: string]: unknown }[]
            error: string | null
            group_ids: { [x: string]: unknown }[]
            more_categories: string | null
            more_full_page_results: string | null
            more_posts: string | null
            more_users: string | null
            post_ids: { [x: string]: unknown }[]
            search_log_id: number
            tag_ids: { [x: string]: unknown }[]
            term: string
            user_ids: { [x: string]: unknown }[]
          }
          groups: { [x: string]: unknown }[]
          posts: { [x: string]: unknown }[]
          tags: { [x: string]: unknown }[]
          users: { [x: string]: unknown }[]
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
    '/site.json': {
      $get: {
        input: {}
        output: {
          anonymous_top_menu_items: { [x: string]: unknown }[]
          archetypes: { id: string; name: string; options: { [x: string]: unknown }[] }[]
          auth_providers: { [x: string]: unknown }[]
          can_associate_groups?: boolean | undefined
          can_create_tag: boolean
          can_tag_pms: boolean
          can_tag_topics: boolean
          categories: {
            allow_global_tags: boolean
            allowed_tag_groups: { [x: string]: unknown }[]
            allowed_tags: { [x: string]: unknown }[]
            can_edit: boolean
            color: string
            custom_fields?: ({ [x: string]: unknown } | null) | undefined
            default_list_filter: string
            default_top_period: string
            default_view: string | null
            description?: (string | null) | undefined
            description_excerpt?: (string | null) | undefined
            description_text?: (string | null) | undefined
            form_template_ids?: { [x: string]: unknown }[] | undefined
            has_children: boolean
            id: number
            minimum_required_tags: number
            name: string
            navigate_to_first_post_after_read: boolean
            notification_level: number
            num_featured_topics: number
            parent_category_id?: number | undefined
            permission: number
            position: number
            post_count: number
            read_only_banner: string | null
            read_restricted: boolean
            required_tag_groups: { min_count: number; name: string }[]
            show_subcategory_list: boolean
            slug: string
            sort_ascending: string | null
            sort_order: string | null
            subcategory_list_style: string
            text_color: string
            topic_count: number
            topic_template: string | null
            topic_url: string
            uploaded_background: string | null
            uploaded_logo: string | null
            uploaded_logo_dark: string | null
          }[]
          censored_regexp: { [x: string]: unknown }[]
          custom_emoji_translation: {}
          default_archetype: string
          default_dark_color_scheme: { [x: string]: unknown } | null
          displayed_about_plugin_stat_groups?: unknown[] | undefined
          filters: { [x: string]: unknown }[]
          groups: {
            flair_bg_color: string | null
            flair_color: string | null
            flair_url: string | null
            id: number
            name: string
          }[]
          hashtag_configurations?: { [x: string]: unknown } | undefined
          hashtag_icons?: unknown[] | undefined
          markdown_additional_options?: { [x: string]: unknown } | undefined
          notification_types: {
            assigned?: number | undefined
            bookmark_reminder: number
            chat_group_mention: number
            chat_invitation: number
            chat_mention: number
            chat_message: number
            chat_quoted?: number | undefined
            circles_activity?: number | undefined
            code_review_commit_approved: number
            custom: number
            edited: number
            event_invitation: number
            event_reminder: number
            following?: number | undefined
            following_created_topic?: number | undefined
            following_replied?: number | undefined
            granted_badge: number
            group_mentioned: number
            group_message_summary: number
            invited_to_private_message: number
            invited_to_topic: number
            invitee_accepted: number
            liked: number
            liked_consolidated: number
            linked: number
            membership_request_accepted: number
            membership_request_consolidated: number
            mentioned: number
            moved_post: number
            new_features?: number | undefined
            post_approved: number
            posted: number
            private_message: number
            question_answer_user_commented?: number | undefined
            quoted: number
            reaction: number
            replied: number
            topic_reminder: number
            votes_released: number
            watching_category_or_tag: number
            watching_first_post: number
          }
          periods: { [x: string]: unknown }[]
          post_action_types: {
            description: string
            id: number | null
            is_custom_flag: boolean
            is_flag: boolean
            name: string
            name_key: string | null
            short_description: string
          }[]
          post_types: {
            moderator_action: number
            regular: number
            small_action: number
            whisper: number
          }
          show_welcome_topic_banner?: boolean | undefined
          tags_filter_regexp: string
          top_menu_items: { [x: string]: unknown }[]
          top_tags: { [x: string]: unknown }[]
          topic_featured_link_allowed_category_ids: { [x: string]: unknown }[]
          topic_flag_types: {
            description: string
            id: number | null
            is_custom_flag: boolean
            is_flag: boolean
            name: string
            name_key: string | null
            short_description: string
          }[]
          trust_levels: {
            basic: number
            leader: number
            member: number
            newuser: number
            regular: number
          }
          uncategorized_category_id: number
          user_color_schemes: { id: number; is_dark: boolean; name: string }[]
          user_field_max_length: number
          user_fields: { [x: string]: unknown }[]
          user_themes: {
            color_scheme_id: number | null
            default: boolean
            name: string
            theme_id: number
          }[]
          watched_words_link: string | null
          watched_words_replace: string | null
          whispers_allowed_groups_names?: unknown[] | undefined
          wizard_required?: boolean | undefined
        }
        outputFormat: 'json'
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
            topic?: { category_id?: number | undefined; title?: string | undefined } | undefined
          }
        }
        output: {
          basic_topic?:
            | {
                fancy_title?: string | undefined
                id?: number | undefined
                posts_count?: number | undefined
                slug?: string | undefined
                title?: string | undefined
              }
            | undefined
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
    '/t/:id.json': {
      $delete: {
        input: { param: { id: string } } & { header: { 'Api-Key': string; 'Api-Username': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { header: { 'Api-Key': string; 'Api-Username': string } }
        output: {
          actions_summary: { can_act: boolean; count: number; hidden: boolean; id: number }[]
          archetype: string
          archived: boolean
          bookmarked: boolean
          bookmarks: { [x: string]: unknown }[]
          category_id: number
          chunk_size: number
          closed: boolean
          created_at: string
          current_post_number?: number | undefined
          deleted_at: string | null
          deleted_by: string | null
          details: {
            can_archive_topic: boolean
            can_close_topic: boolean
            can_convert_topic: boolean
            can_create_post: boolean
            can_delete: boolean
            can_edit: boolean
            can_edit_staff_notes: boolean
            can_flag_topic?: boolean | undefined
            can_invite_to?: boolean | undefined
            can_invite_via_email?: boolean | undefined
            can_moderate_category: boolean
            can_move_posts: boolean
            can_pin_unpin_topic: boolean
            can_remove_allowed_users: boolean
            can_remove_self_id: number
            can_reply_as_new_topic: boolean
            can_review_topic: boolean
            can_split_merge_topic: boolean
            can_toggle_topic_visibility: boolean
            created_by: { avatar_template: string; id: number; name: string; username: string }
            last_poster: { avatar_template: string; id: number; name: string; username: string }
            notification_level: number
            participants?:
              | {
                  admin: boolean
                  avatar_template: string
                  flair_bg_color: string | null
                  flair_color: string | null
                  flair_name: string | null
                  flair_url: string | null
                  id: number
                  moderator: boolean
                  name: string
                  post_count: number
                  primary_group_name: string | null
                  trust_level: number
                  username: string
                }[]
              | undefined
          }
          draft: string | null
          draft_key: string
          draft_sequence: number
          fancy_title: string
          featured_link: string | null
          has_deleted: boolean
          has_summary: boolean
          highest_post_number: number | null
          id: number
          image_url: string | null
          last_posted_at: string | null
          like_count: number
          message_bus_last_id: number
          participant_count: number
          pinned: boolean
          pinned_at: string | null
          pinned_globally: boolean
          pinned_until: string | null
          post_stream: {
            posts: {
              actions_summary: { can_act: boolean; id: number }[]
              admin: boolean
              avatar_template: string
              bookmarked: boolean
              can_delete: boolean
              can_edit: boolean
              can_recover: boolean
              can_view_edit_history: boolean
              can_wiki: boolean
              cooked: string
              created_at: string
              deleted_at: string | null
              display_username: string
              edit_reason: string | null
              flair_bg_color: string | null
              flair_color: string | null
              flair_name: string | null
              flair_url: string | null
              hidden: boolean
              id: number
              incoming_link_count: number
              link_counts: {
                clicks: number
                internal: boolean
                reflection: boolean
                title: string
                url: string
              }[]
              moderator: boolean
              name: string
              post_number: number
              post_type: number
              primary_group_name: string | null
              quote_count: number
              read: boolean
              readers_count: number
              reads: number
              reply_count: number
              reply_to_post_number: string | null
              reviewable_id: number
              reviewable_score_count: number
              reviewable_score_pending_count: number
              score: number
              staff: boolean
              topic_id: number
              topic_slug: string
              trust_level: number
              updated_at: string
              user_deleted: boolean
              user_id: number
              user_title: string | null
              username: string
              version: number
              wiki: boolean
              yours: boolean
            }[]
            stream: { [x: string]: unknown }[]
          }
          posts_count: number
          reply_count: number
          show_read_indicator: boolean
          slow_mode_enabled_until: string | null
          slow_mode_seconds: number
          slug: string
          suggested_topics: {
            archetype: string
            archived: boolean
            bookmarked: string | null
            bumped: boolean
            bumped_at: string
            category_id: number
            closed: boolean
            created_at: string
            excerpt: string
            fancy_title: string
            featured_link: string | null
            highest_post_number: number
            id: number
            image_url: string | null
            last_posted_at: string | null
            like_count: number
            liked: string | null
            pinned: boolean
            posters: {
              description: string
              extras: string
              user: { avatar_template: string; id: number; name: string; username: string }
            }[]
            posts_count: number
            reply_count: number
            slug: string
            tags: { [x: string]: unknown }[]
            tags_descriptions: {}
            title: string
            unpinned: string | null
            unseen: boolean
            views: number
            visible: boolean
          }[]
          tags: { [x: string]: unknown }[]
          tags_descriptions: {}
          thumbnails: string | null
          timeline_lookup: { [x: string]: unknown }[]
          title: string
          topic_timer: string | null
          unpinned: string | null
          user_id: number
          views: number
          visible: boolean
          word_count: number | null
        }
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
    '/t/:id/invite.json': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { email?: string | undefined; user?: string | undefined } }
        output: {
          user?:
            | {
                avatar_template?: string | undefined
                id?: number | undefined
                name?: string | undefined
                username?: string | undefined
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
    '/t/:id/posts.json': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & { json: { 'post_ids[]': number } }
        output: {
          id?: number | undefined
          post_stream?:
            | {
                posts?:
                  | {
                      actions_summary?:
                        | { can_act?: boolean | undefined; id?: number | undefined }[]
                        | undefined
                      admin?: boolean | undefined
                      avatar_template?: string | undefined
                      can_delete?: boolean | undefined
                      can_edit?: boolean | undefined
                      can_recover?: boolean | undefined
                      can_view_edit_history?: boolean | undefined
                      can_wiki?: boolean | undefined
                      cooked?: string | undefined
                      created_at?: string | undefined
                      deleted_at?: (string | null) | undefined
                      display_username?: (string | null) | undefined
                      edit_reason?: (string | null) | undefined
                      flair_bg_color?: (string | null) | undefined
                      flair_color?: (string | null) | undefined
                      flair_name?: (string | null) | undefined
                      flair_url?: (string | null) | undefined
                      hidden?: boolean | undefined
                      id?: number | undefined
                      incoming_link_count?: number | undefined
                      moderator?: boolean | undefined
                      name?: (string | null) | undefined
                      post_number?: number | undefined
                      post_type?: number | undefined
                      primary_group_name?: (string | null) | undefined
                      quote_count?: number | undefined
                      read?: boolean | undefined
                      readers_count?: number | undefined
                      reads?: number | undefined
                      reply_count?: number | undefined
                      reply_to_post_number?: (string | null) | undefined
                      reviewable_id?: number | undefined
                      reviewable_score_count?: number | undefined
                      reviewable_score_pending_count?: number | undefined
                      score?: number | undefined
                      staff?: boolean | undefined
                      topic_id?: number | undefined
                      topic_slug?: string | undefined
                      trust_level?: number | undefined
                      updated_at?: string | undefined
                      user_deleted?: boolean | undefined
                      user_id?: number | undefined
                      user_title?: (string | null) | undefined
                      username?: string | undefined
                      version?: number | undefined
                      wiki?: boolean | undefined
                      yours?: boolean | undefined
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
    '/t/:id/status.json': {
      $put: {
        input: { param: { id: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & {
          json: {
            enabled: 'true' | 'false'
            status: 'closed' | 'pinned' | 'pinned_globally' | 'archived' | 'visible'
            until?: string | undefined
          }
        }
        output: { success?: string | undefined; topic_status_update?: (string | null) | undefined }
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
            based_on_last_post?: boolean | undefined
            category_id?: number | undefined
            status_type?: string | undefined
            time?: string | undefined
          }
        }
        output: {
          based_on_last_post?: boolean | undefined
          category_id?: (string | null) | undefined
          closed?: boolean | undefined
          duration?: (string | null) | undefined
          execute_at?: string | undefined
          success?: string | undefined
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
                      staff?: boolean | undefined
                      topic_count?: number | undefined
                    }[]
                  | undefined
                topics?:
                  | {
                      archetype?: string | undefined
                      archived?: boolean | undefined
                      bookmarked?: boolean | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      category_id?: number | undefined
                      closed?: boolean | undefined
                      created_at?: string | undefined
                      fancy_title?: string | undefined
                      featured_link?: (string | null) | undefined
                      has_summary?: boolean | undefined
                      highest_post_number?: number | undefined
                      id?: number | undefined
                      image_url?: (string | null) | undefined
                      last_posted_at?: string | undefined
                      last_poster_username?: string | undefined
                      last_read_post_number?: number | undefined
                      like_count?: number | undefined
                      liked?: boolean | undefined
                      notification_level?: number | undefined
                      pinned?: boolean | undefined
                      pinned_globally?: boolean | undefined
                      posters?:
                        | {
                            description?: string | undefined
                            extras?: string | undefined
                            primary_group_id?: (string | null) | undefined
                            user_id?: number | undefined
                          }[]
                        | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      slug?: string | undefined
                      tags?: { [x: string]: unknown }[] | undefined
                      title?: string | undefined
                      unpinned?: (string | null) | undefined
                      unread_posts?: number | undefined
                      unseen?: boolean | undefined
                      views?: number | undefined
                      visible?: boolean | undefined
                    }[]
                  | undefined
              }
            | undefined
          users?:
            | {
                avatar_template?: string | undefined
                id?: number | undefined
                name?: (string | null) | undefined
                username?: string | undefined
              }[]
            | undefined
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
          tag_groups?:
            | {
                id?: number | undefined
                name?: string | undefined
                one_per_topic?: boolean | undefined
                parent_tag_name?: { [x: string]: unknown }[] | undefined
                permissions?: { staff?: number | undefined } | undefined
                tag_names?: { [x: string]: unknown }[] | undefined
              }[]
            | undefined
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
            one_per_topic: boolean
            parent_tag_name: { [x: string]: unknown }[]
            permissions: { [x: string]: unknown }
            tag_names: { [x: string]: unknown }[]
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
                one_per_topic?: boolean | undefined
                parent_tag_name?: { [x: string]: unknown }[] | undefined
                permissions?: { everyone?: number | undefined } | undefined
                tag_names?: { [x: string]: unknown }[] | undefined
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
                one_per_topic?: boolean | undefined
                parent_tag_name?: { [x: string]: unknown }[] | undefined
                permissions?: { everyone?: number | undefined } | undefined
                tag_names?: { [x: string]: unknown }[] | undefined
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
          extras?: { categories?: { [x: string]: unknown }[] | undefined } | undefined
          tags?:
            | {
                count?: number | undefined
                id?: string | undefined
                pm_count?: number | undefined
                target_tag?: (string | null) | undefined
                text?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/top.json': {
      $get: {
        input: { query: { period?: string | undefined } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        }
        output: {
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
                      archetype?: string | undefined
                      archived?: boolean | undefined
                      bookmarked?: boolean | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      category_id?: number | undefined
                      closed?: boolean | undefined
                      created_at?: string | undefined
                      fancy_title?: string | undefined
                      featured_link?: (string | null) | undefined
                      has_summary?: boolean | undefined
                      highest_post_number?: number | undefined
                      id?: number | undefined
                      image_url?: (string | null) | undefined
                      last_posted_at?: string | undefined
                      last_poster_username?: string | undefined
                      last_read_post_number?: number | undefined
                      like_count?: number | undefined
                      liked?: boolean | undefined
                      notification_level?: number | undefined
                      op_like_count?: number | undefined
                      pinned?: boolean | undefined
                      pinned_globally?: boolean | undefined
                      posters?:
                        | {
                            description?: string | undefined
                            extras?: (string | null) | undefined
                            primary_group_id?: (string | null) | undefined
                            user_id?: number | undefined
                          }[]
                        | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      slug?: string | undefined
                      title?: string | undefined
                      unpinned?: boolean | undefined
                      unread_posts?: number | undefined
                      unseen?: boolean | undefined
                      views?: number | undefined
                      visible?: boolean | undefined
                    }[]
                  | undefined
              }
            | undefined
          users?:
            | {
                avatar_template?: string | undefined
                id?: number | undefined
                name?: string | undefined
                username?: string | undefined
              }[]
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
                      allowed_user_count?: number | undefined
                      archetype?: string | undefined
                      archived?: boolean | undefined
                      bookmarked?: boolean | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      category_id?: (string | null) | undefined
                      closed?: boolean | undefined
                      created_at?: string | undefined
                      fancy_title?: string | undefined
                      featured_link?: (string | null) | undefined
                      has_summary?: boolean | undefined
                      highest_post_number?: number | undefined
                      id?: number | undefined
                      image_url?: (string | null) | undefined
                      last_posted_at?: string | undefined
                      last_poster_username?: string | undefined
                      last_read_post_number?: number | undefined
                      like_count?: number | undefined
                      liked?: boolean | undefined
                      notification_level?: number | undefined
                      participants?: { [x: string]: unknown }[] | undefined
                      pinned?: boolean | undefined
                      pinned_globally?: boolean | undefined
                      posters?:
                        | {
                            description?: string | undefined
                            extras?: string | undefined
                            primary_group_id?: (string | null) | undefined
                            user_id?: number | undefined
                          }[]
                        | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      slug?: string | undefined
                      title?: string | undefined
                      unpinned?: (string | null) | undefined
                      unread_posts?: number | undefined
                      unseen?: boolean | undefined
                      views?: number | undefined
                      visible?: boolean | undefined
                    }[]
                  | undefined
              }
            | undefined
          users?:
            | {
                avatar_template?: string | undefined
                id?: number | undefined
                name?: (string | null) | undefined
                username?: string | undefined
              }[]
            | undefined
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
                      allowed_user_count?: number | undefined
                      archetype?: string | undefined
                      archived?: boolean | undefined
                      bookmarked?: boolean | undefined
                      bumped?: boolean | undefined
                      bumped_at?: string | undefined
                      category_id?: (string | null) | undefined
                      closed?: boolean | undefined
                      created_at?: string | undefined
                      fancy_title?: string | undefined
                      featured_link?: (string | null) | undefined
                      has_summary?: boolean | undefined
                      highest_post_number?: number | undefined
                      id?: number | undefined
                      image_url?: (string | null) | undefined
                      last_posted_at?: string | undefined
                      last_poster_username?: string | undefined
                      last_read_post_number?: number | undefined
                      like_count?: number | undefined
                      liked?: boolean | undefined
                      notification_level?: number | undefined
                      participants?:
                        | {
                            description?: (string | null) | undefined
                            extras?: string | undefined
                            primary_group_id?: (string | null) | undefined
                            user_id?: number | undefined
                          }[]
                        | undefined
                      pinned?: boolean | undefined
                      pinned_globally?: boolean | undefined
                      posters?:
                        | {
                            description?: string | undefined
                            extras?: string | undefined
                            primary_group_id?: (string | null) | undefined
                            user_id?: number | undefined
                          }[]
                        | undefined
                      posts_count?: number | undefined
                      reply_count?: number | undefined
                      slug?: string | undefined
                      title?: string | undefined
                      unpinned?: (string | null) | undefined
                      unread_posts?: number | undefined
                      unseen?: boolean | undefined
                      views?: number | undefined
                      visible?: boolean | undefined
                    }[]
                  | undefined
              }
            | undefined
          users?:
            | {
                avatar_template?: string | undefined
                id?: number | undefined
                name?: string | undefined
                username?: string | undefined
              }[]
            | undefined
        }
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
          user: {
            admin: boolean
            allowed_pm_usernames: { [x: string]: unknown }[]
            avatar_template: string
            badge_count: number
            can_be_deleted: boolean
            can_change_bio: boolean
            can_change_location: boolean
            can_change_tracking_preferences: boolean
            can_change_website: boolean
            can_delete_all_posts: boolean
            can_edit: boolean
            can_edit_email: boolean
            can_edit_name: boolean
            can_edit_username: boolean
            can_ignore_user: boolean
            can_mute_user: boolean
            can_send_private_message_to_user: boolean
            can_send_private_messages: boolean
            can_upload_profile_header: boolean
            can_upload_user_card_background: boolean
            created_at: string
            custom_fields: { first_name?: (string | null) | undefined }
            featured_topic: string | null
            featured_user_badge_ids: { [x: string]: unknown }[]
            flair_bg_color: string | null
            flair_color: string | null
            flair_group_id: string | null
            flair_name: string | null
            flair_url: string | null
            group_users: {
              group_id: number
              notification_level: number
              owner?: boolean | undefined
              user_id: number
            }[]
            groups: {
              allow_membership_requests: boolean
              automatic: boolean
              bio_cooked: string | null
              bio_excerpt: string | null
              bio_raw: string | null
              can_admin_group: boolean
              can_see_members: boolean
              default_notification_level: number
              display_name: string
              flair_bg_color: string | null
              flair_color: string | null
              flair_url: string | null
              full_name: string | null
              grant_trust_level: string | null
              has_messages: boolean
              id: number
              incoming_email: string | null
              members_visibility_level: number
              membership_request_template: string | null
              mentionable_level: number
              messageable_level: number
              name: string
              primary_group: boolean
              public_admission: boolean
              public_exit: boolean
              publish_read_state: boolean
              title: string | null
              user_count: number
              visibility_level: number
            }[]
            has_title_badges: boolean
            id: number
            ignored: boolean
            ignored_usernames: { [x: string]: unknown }[]
            invited_by: string | null
            last_posted_at: string | null
            last_seen_at: string | null
            locale: string | null
            mailing_list_posts_per_day: number
            moderator: boolean
            muted: boolean
            muted_category_ids: { [x: string]: unknown }[]
            muted_tags: { [x: string]: unknown }[]
            muted_usernames: { [x: string]: unknown }[]
            name: string
            pending_count: number
            pending_posts_count?: number | undefined
            post_count: number
            primary_group_id: string | null
            primary_group_name: string | null
            profile_view_count: number
            recent_time_read: number
            regular_category_ids: { [x: string]: unknown }[]
            second_factor_backup_enabled?: boolean | undefined
            second_factor_enabled: boolean
            staged: boolean
            system_avatar_template: string
            system_avatar_upload_id: string | null
            time_read: number
            title: string | null
            tracked_category_ids: { [x: string]: unknown }[]
            tracked_tags: { [x: string]: unknown }[]
            trust_level: number
            uploaded_avatar_id: string | null
            use_logo_small_as_avatar: boolean
            user_api_keys: string | null
            user_auth_tokens: {
              browser: string
              client_ip: string
              created_at: string
              device: string
              icon: string
              id: number
              is_active: boolean
              location: string
              os: string
              seen_at: string
            }[]
            user_fields?: { '1': string | null; '2': string | null } | undefined
            user_notification_schedule: {
              day_0_end_time: number
              day_0_start_time: number
              day_1_end_time: number
              day_1_start_time: number
              day_2_end_time: number
              day_2_start_time: number
              day_3_end_time: number
              day_3_start_time: number
              day_4_end_time: number
              day_4_start_time: number
              day_5_end_time: number
              day_5_start_time: number
              day_6_end_time: number
              day_6_start_time: number
              enabled: boolean
            }
            user_option: {
              allow_private_messages: boolean
              auto_track_topics_after_msecs: number
              automatically_unpin_topics: boolean
              bookmark_auto_delete_preference?: number | undefined
              color_scheme_id: string | null
              dark_scheme_id: string | null
              default_calendar?: string | undefined
              digest_after_minutes: number
              dynamic_favicon: boolean
              email_digests: boolean
              email_in_reply_to: boolean
              email_level: number
              email_messages_level: number
              email_previous_replies: number
              enable_allowed_pm_users: boolean
              enable_defer: boolean
              enable_quoting: boolean
              external_links_in_new_tab: boolean
              hide_profile_and_presence: boolean
              homepage_id: string | null
              include_tl0_in_digests: boolean
              like_notification_frequency: number
              mailing_list_mode: boolean
              mailing_list_mode_frequency: number
              new_topic_duration_minutes: number
              notification_level_when_replying: number
              oldest_search_log_date?: (string | null) | undefined
              seen_popups?: (unknown[] | null) | undefined
              sidebar_list_destination?: string | undefined
              skip_new_user_tips: boolean
              text_size: string
              text_size_seq: number
              theme_ids: { [x: string]: unknown }[]
              theme_key_seq: number
              timezone: string | null
              title_count_mode: string
              user_id: number
            }
            username: string
            watched_category_ids: { [x: string]: unknown }[]
            watched_first_post_category_ids: { [x: string]: unknown }[]
            watched_tags: { [x: string]: unknown }[]
            watching_first_post_tags: { [x: string]: unknown }[]
          }
          user_badges: { [x: string]: unknown }[]
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
          user: {
            admin: boolean
            allowed_pm_usernames: { [x: string]: unknown }[]
            avatar_template: string
            badge_count: number
            can_be_deleted: boolean
            can_change_bio: boolean
            can_change_location: boolean
            can_change_tracking_preferences: boolean
            can_change_website: boolean
            can_delete_all_posts: boolean
            can_edit: boolean
            can_edit_email: boolean
            can_edit_name: boolean
            can_edit_username: boolean
            can_ignore_user: boolean
            can_mute_user: boolean
            can_send_private_message_to_user: boolean
            can_send_private_messages: boolean
            can_upload_profile_header: boolean
            can_upload_user_card_background: boolean
            created_at: string
            custom_fields: { first_name?: (string | null) | undefined }
            featured_topic: string | null
            featured_user_badge_ids: { [x: string]: unknown }[]
            flair_bg_color: string | null
            flair_color: string | null
            flair_group_id: string | null
            flair_name: string | null
            flair_url: string | null
            group_users: {
              group_id: number
              notification_level: number
              owner?: boolean | undefined
              user_id: number
            }[]
            groups: {
              allow_membership_requests: boolean
              automatic: boolean
              bio_cooked: string | null
              bio_excerpt: string | null
              bio_raw: string | null
              can_admin_group: boolean
              can_see_members: boolean
              default_notification_level: number
              display_name: string
              flair_bg_color: string | null
              flair_color: string | null
              flair_url: string | null
              full_name: string | null
              grant_trust_level: string | null
              has_messages: boolean
              id: number
              incoming_email: string | null
              members_visibility_level: number
              membership_request_template: string | null
              mentionable_level: number
              messageable_level: number
              name: string
              primary_group: boolean
              public_admission: boolean
              public_exit: boolean
              publish_read_state: boolean
              title: string | null
              user_count: number
              visibility_level: number
            }[]
            has_title_badges: boolean
            id: number
            ignored: boolean
            ignored_usernames: { [x: string]: unknown }[]
            invited_by: string | null
            last_posted_at: string | null
            last_seen_at: string | null
            locale: string | null
            mailing_list_posts_per_day: number
            moderator: boolean
            muted: boolean
            muted_category_ids: { [x: string]: unknown }[]
            muted_tags: { [x: string]: unknown }[]
            muted_usernames: { [x: string]: unknown }[]
            name: string
            pending_count: number
            pending_posts_count?: number | undefined
            post_count: number
            primary_group_id: string | null
            primary_group_name: string | null
            profile_view_count: number
            recent_time_read: number
            regular_category_ids: { [x: string]: unknown }[]
            second_factor_backup_enabled?: boolean | undefined
            second_factor_enabled: boolean
            staged: boolean
            system_avatar_template: string
            system_avatar_upload_id: string | null
            time_read: number
            title: string | null
            tracked_category_ids: { [x: string]: unknown }[]
            tracked_tags: { [x: string]: unknown }[]
            trust_level: number
            uploaded_avatar_id: string | null
            use_logo_small_as_avatar: boolean
            user_api_keys: string | null
            user_auth_tokens: {
              browser: string
              client_ip: string
              created_at: string
              device: string
              icon: string
              id: number
              is_active: boolean
              location: string
              os: string
              seen_at: string
            }[]
            user_fields?: { '1': string | null; '2': string | null } | undefined
            user_notification_schedule: {
              day_0_end_time: number
              day_0_start_time: number
              day_1_end_time: number
              day_1_start_time: number
              day_2_end_time: number
              day_2_start_time: number
              day_3_end_time: number
              day_3_start_time: number
              day_4_end_time: number
              day_4_start_time: number
              day_5_end_time: number
              day_5_start_time: number
              day_6_end_time: number
              day_6_start_time: number
              enabled: boolean
            }
            user_option: {
              allow_private_messages: boolean
              auto_track_topics_after_msecs: number
              automatically_unpin_topics: boolean
              bookmark_auto_delete_preference?: number | undefined
              color_scheme_id: string | null
              dark_scheme_id: string | null
              default_calendar?: string | undefined
              digest_after_minutes: number
              dynamic_favicon: boolean
              email_digests: boolean
              email_in_reply_to: boolean
              email_level: number
              email_messages_level: number
              email_previous_replies: number
              enable_allowed_pm_users: boolean
              enable_defer: boolean
              enable_quoting: boolean
              external_links_in_new_tab: boolean
              hide_profile_and_presence: boolean
              homepage_id: string | null
              include_tl0_in_digests: boolean
              like_notification_frequency: number
              mailing_list_mode: boolean
              mailing_list_mode_frequency: number
              new_topic_duration_minutes: number
              notification_level_when_replying: number
              oldest_search_log_date?: (string | null) | undefined
              seen_popups?: (unknown[] | null) | undefined
              sidebar_list_destination?: string | undefined
              skip_new_user_tips: boolean
              text_size: string
              text_size_seq: number
              theme_ids: { [x: string]: unknown }[]
              theme_key_seq: number
              timezone: string | null
              title_count_mode: string
              user_id: number
            }
            username: string
            watched_category_ids: { [x: string]: unknown }[]
            watched_first_post_category_ids: { [x: string]: unknown }[]
            watched_tags: { [x: string]: unknown }[]
            watching_first_post_tags: { [x: string]: unknown }[]
          }
          user_badges: { [x: string]: unknown }[]
        }
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
          user: {
            admin: boolean
            allowed_pm_usernames: { [x: string]: unknown }[]
            avatar_template: string
            badge_count: number
            can_be_deleted: boolean
            can_change_bio: boolean
            can_change_location: boolean
            can_change_tracking_preferences: boolean
            can_change_website: boolean
            can_delete_all_posts: boolean
            can_edit: boolean
            can_edit_email: boolean
            can_edit_name: boolean
            can_edit_username: boolean
            can_ignore_user: boolean
            can_mute_user: boolean
            can_send_private_message_to_user: boolean
            can_send_private_messages: boolean
            can_upload_profile_header: boolean
            can_upload_user_card_background: boolean
            created_at: string
            custom_fields: { first_name?: (string | null) | undefined }
            featured_topic: string | null
            featured_user_badge_ids: { [x: string]: unknown }[]
            flair_bg_color: string | null
            flair_color: string | null
            flair_group_id: string | null
            flair_name: string | null
            flair_url: string | null
            group_users: {
              group_id: number
              notification_level: number
              owner?: boolean | undefined
              user_id: number
            }[]
            groups: {
              allow_membership_requests: boolean
              automatic: boolean
              bio_cooked: string | null
              bio_excerpt: string | null
              bio_raw: string | null
              can_admin_group: boolean
              can_see_members: boolean
              default_notification_level: number
              display_name: string
              flair_bg_color: string | null
              flair_color: string | null
              flair_url: string | null
              full_name: string | null
              grant_trust_level: string | null
              has_messages: boolean
              id: number
              incoming_email: string | null
              members_visibility_level: number
              membership_request_template: string | null
              mentionable_level: number
              messageable_level: number
              name: string
              primary_group: boolean
              public_admission: boolean
              public_exit: boolean
              publish_read_state: boolean
              title: string | null
              user_count: number
              visibility_level: number
            }[]
            has_title_badges: boolean
            id: number
            ignored: boolean
            ignored_usernames: { [x: string]: unknown }[]
            invited_by: string | null
            last_posted_at: string | null
            last_seen_at: string | null
            locale: string | null
            mailing_list_posts_per_day: number
            moderator: boolean
            muted: boolean
            muted_category_ids: { [x: string]: unknown }[]
            muted_tags: { [x: string]: unknown }[]
            muted_usernames: { [x: string]: unknown }[]
            name: string
            pending_count: number
            pending_posts_count?: number | undefined
            post_count: number
            primary_group_id: string | null
            primary_group_name: string | null
            profile_view_count: number
            recent_time_read: number
            regular_category_ids: { [x: string]: unknown }[]
            second_factor_backup_enabled?: boolean | undefined
            second_factor_enabled: boolean
            staged: boolean
            system_avatar_template: string
            system_avatar_upload_id: string | null
            time_read: number
            title: string | null
            tracked_category_ids: { [x: string]: unknown }[]
            tracked_tags: { [x: string]: unknown }[]
            trust_level: number
            uploaded_avatar_id: string | null
            use_logo_small_as_avatar: boolean
            user_api_keys: string | null
            user_auth_tokens: {
              browser: string
              client_ip: string
              created_at: string
              device: string
              icon: string
              id: number
              is_active: boolean
              location: string
              os: string
              seen_at: string
            }[]
            user_fields?: { '1': string | null; '2': string | null } | undefined
            user_notification_schedule: {
              day_0_end_time: number
              day_0_start_time: number
              day_1_end_time: number
              day_1_start_time: number
              day_2_end_time: number
              day_2_start_time: number
              day_3_end_time: number
              day_3_start_time: number
              day_4_end_time: number
              day_4_start_time: number
              day_5_end_time: number
              day_5_start_time: number
              day_6_end_time: number
              day_6_start_time: number
              enabled: boolean
            }
            user_option: {
              allow_private_messages: boolean
              auto_track_topics_after_msecs: number
              automatically_unpin_topics: boolean
              bookmark_auto_delete_preference?: number | undefined
              color_scheme_id: string | null
              dark_scheme_id: string | null
              default_calendar?: string | undefined
              digest_after_minutes: number
              dynamic_favicon: boolean
              email_digests: boolean
              email_in_reply_to: boolean
              email_level: number
              email_messages_level: number
              email_previous_replies: number
              enable_allowed_pm_users: boolean
              enable_defer: boolean
              enable_quoting: boolean
              external_links_in_new_tab: boolean
              hide_profile_and_presence: boolean
              homepage_id: string | null
              include_tl0_in_digests: boolean
              like_notification_frequency: number
              mailing_list_mode: boolean
              mailing_list_mode_frequency: number
              new_topic_duration_minutes: number
              notification_level_when_replying: number
              oldest_search_log_date?: (string | null) | undefined
              seen_popups?: (unknown[] | null) | undefined
              sidebar_list_destination?: string | undefined
              skip_new_user_tips: boolean
              text_size: string
              text_size_seq: number
              theme_ids: { [x: string]: unknown }[]
              theme_key_seq: number
              timezone: string | null
              title_count_mode: string
              user_id: number
            }
            username: string
            watched_category_ids: { [x: string]: unknown }[]
            watched_first_post_category_ids: { [x: string]: unknown }[]
            watched_tags: { [x: string]: unknown }[]
            watching_first_post_tags: { [x: string]: unknown }[]
          }
          user_badges: { [x: string]: unknown }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { username: string } } & {
          header: { 'Api-Key': string; 'Api-Username': string }
        } & {
          json: {
            email?: string | undefined
            external_ids?: { [x: string]: unknown } | undefined
            name?: string | undefined
            password?: string | undefined
          }
        }
        output: { success: string; user: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/u/:username/emails.json': {
      $get: {
        input: { param: { username: string } }
        output: {
          associated_accounts: { [x: string]: unknown }[]
          email: string
          secondary_emails: { [x: string]: unknown }[]
          unconfirmed_emails: { [x: string]: unknown }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/u/:username/preferences/avatar/pick.json': {
      $put: {
        input: { param: { username: string } } & {
          json: { type: 'uploaded' | 'custom' | 'gravatar' | 'system'; upload_id: number }
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
    '/uploads.json': {
      $post: {
        input: {
          form: {
            file?: { [x: string]: unknown } | undefined
            synchronous?: boolean | undefined
            type: 'avatar' | 'profile_background' | 'card_background' | 'custom_emoji' | 'composer'
            user_id?: number | undefined
          }
        }
        output: {
          dominant_color?: (string | null) | undefined
          extension: string
          filesize: number
          height: number
          human_filesize: string
          id: number
          original_filename: string
          retain_hours: string | null
          short_path: string
          short_url: string
          thumbnail_height: number
          thumbnail_width: number
          url: string
          width: number
        }
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
    '/uploads/batch-presign-multipart-parts.json': {
      $post: {
        input: { json: { part_numbers: unknown[]; unique_identifier: string } }
        output: { presigned_urls: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/complete-external-upload.json': {
      $post: {
        input: {
          json: {
            for_private_message?: string | undefined
            for_site_setting?: string | undefined
            pasted?: string | undefined
            unique_identifier: string
          }
        }
        output: {
          dominant_color?: (string | null) | undefined
          extension: string
          filesize: number
          height: number
          human_filesize: string
          id: number
          original_filename: string
          retain_hours: string | null
          short_path: string
          short_url: string
          thumbnail_height: number
          thumbnail_width: number
          url: string
          width: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/complete-multipart.json': {
      $post: {
        input: { json: { parts: unknown[]; unique_identifier: string } }
        output: {
          dominant_color?: (string | null) | undefined
          extension: string
          filesize: number
          height: number
          human_filesize: string
          id: number
          original_filename: string
          retain_hours: string | null
          short_path: string
          short_url: string
          thumbnail_height: number
          thumbnail_width: number
          url: string
          width: number
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
            file_name: string
            file_size: number
            metadata?: { 'sha1-checksum'?: string | undefined } | undefined
            upload_type:
              | 'avatar'
              | 'profile_background'
              | 'card_background'
              | 'custom_emoji'
              | 'composer'
          }
        }
        output: { external_upload_identifier: string; key: string; unique_identifier: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads/generate-presigned-put.json': {
      $post: {
        input: {
          json: {
            file_name: string
            file_size: number
            metadata?: { 'sha1-checksum'?: string | undefined } | undefined
            type: 'avatar' | 'profile_background' | 'card_background' | 'custom_emoji' | 'composer'
          }
        }
        output: {
          key?: string | undefined
          unique_identifier?: string | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user-badges/:username.json': {
      $get: {
        input: { param: { username: string } }
        output: {
          badge_types?: { id: number; name: string; sort_order: number }[] | undefined
          badges?:
            | {
                allow_title: boolean
                badge_grouping_id: number
                badge_type_id: number
                description: string
                enabled: boolean
                grant_count: number
                icon: string
                id: number
                image_url: string | null
                listable: boolean
                manually_grantable: boolean
                multiple_grant: boolean
                name: string
                slug: string
                system: boolean
              }[]
            | undefined
          granted_bies?:
            | {
                admin: boolean
                avatar_template: string
                flair_name: string | null
                id: number
                moderator: boolean
                name: string
                trust_level: number
                username: string
              }[]
            | undefined
          user_badges: {
            badge_id: number
            can_favorite: boolean
            granted_at: string
            granted_by_id: number
            grouping_position: number
            id: number
            is_favorite: string | null
          }[]
        }
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
            acting_avatar_template: string
            acting_name: string | null
            acting_user_id: number
            acting_username: string
            action_code: string | null
            action_type: number
            archived: boolean
            avatar_template: string
            category_id: number
            closed: boolean
            created_at: string
            deleted: boolean
            excerpt: string
            hidden: string | null
            name: string | null
            post_id: string | null
            post_number: number
            post_type: string | null
            slug: string
            target_name: string | null
            target_user_id: number
            target_username: string
            title: string
            topic_id: number
            user_id: number
            username: string
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_avatar/:username/refresh_gravatar.json': {
      $post: {
        input: { param: { username: string } }
        output: { gravatar_avatar_template: string | null; gravatar_upload_id: number | null }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users.json': {
      $post: {
        input: { header: { 'Api-Key': string; 'Api-Username': string } } & {
          json: {
            active?: boolean | undefined
            approved?: boolean | undefined
            email: string
            external_ids?: { [x: string]: unknown } | undefined
            name: string
            password: string
            'user_fields[1]'?: boolean | undefined
            username: string
          }
        }
        output: { active: boolean; message: string; success: boolean; user_id?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/password-reset/:token.json': {
      $put: {
        input: { param: { token: string } } & { json: { password: string; username: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
