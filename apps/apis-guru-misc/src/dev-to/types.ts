type UserInviteParam = { email?: string | undefined; name?: (string | null) | undefined }
type ArticleFlareTag = {
  bg_color_hex?: (string | null) | undefined
  name?: string | undefined
  text_color_hex?: (string | null) | undefined
}
type SharedOrganization = {
  name?: string | undefined
  profile_image?: string | undefined
  profile_image_90?: string | undefined
  slug?: string | undefined
  username?: string | undefined
}
type SharedUser = {
  github_username?: (string | null) | undefined
  name?: string | undefined
  profile_image?: string | undefined
  profile_image_90?: string | undefined
  twitter_username?: (string | null) | undefined
  username?: string | undefined
  website_url?: (string | null) | undefined
}
type ArticleIndex = {
  canonical_url: string
  cover_image: string | null
  created_at: string
  crossposted_at: string | null
  description: string
  edited_at: string | null
  flare_tag?: ArticleFlareTag | undefined
  id: number
  last_comment_at: string
  organization?: SharedOrganization | undefined
  path: string
  positive_reactions_count: number
  public_reactions_count: number
  published_at: string
  published_timestamp: string
  readable_publish_date: string
  reading_time_minutes: number
  slug: string
  social_image: string
  tag_list: string[]
  tags: string
  title: string
  type_of: string
  url: string
  user: SharedUser
}
type Article = {
  article?:
    | {
        body_markdown?: string | undefined
        canonical_url?: (string | null) | undefined
        description?: string | undefined
        main_image?: (string | null) | undefined
        organization_id?: (number | null) | undefined
        published?: boolean | undefined
        series?: (string | null) | undefined
        tags?: string | undefined
        title?: string | undefined
      }
    | undefined
}
type Comment = {
  created_at?: string | undefined
  id_code?: string | undefined
  image_url?: string | undefined
  type_of?: string | undefined
}
type FollowedTag = { id: bigint; name: string; points: number }
type User = {
  github_username?: string | undefined
  id?: bigint | undefined
  joined_at?: string | undefined
  location?: (string | null) | undefined
  name?: string | undefined
  profile_image?: string | undefined
  summary?: (string | null) | undefined
  twitter_username?: string | undefined
  type_of?: string | undefined
  username?: string | undefined
  website_url?: (string | null) | undefined
}
type Page = {
  body_json?: (string | null) | undefined
  body_markdown?: (string | null) | undefined
  description: string
  is_top_level_path?: boolean | undefined
  slug: string
  social_image?: ({ [x: string]: unknown } | null) | undefined
  template: 'contained' | 'full_within_layout' | 'nav_bar_included' | 'json'
  title: string
}
type SharedPodcast = {
  image_url?: string | undefined
  slug?: string | undefined
  title?: string | undefined
}
type PodcastEpisodeIndex = {
  class_name: string
  id: number
  image_url: string
  path: string
  podcast: SharedPodcast
  title: string
  type_of: string
}
type Tag = {
  bg_color_hex?: (string | null) | undefined
  id?: bigint | undefined
  name?: string | undefined
  text_color_hex?: (string | null) | undefined
}
type VideoArticle = {
  cloudinary_video_url?: string | undefined
  id?: bigint | undefined
  path?: string | undefined
  title?: string | undefined
  type_of?: string | undefined
  user?: { name?: string | undefined } | undefined
  user_id?: bigint | undefined
  video_duration_in_minutes?: string | undefined
  video_source_url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/admin/users': {
      $post:
        | { input: { json: UserInviteParam }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: UserInviteParam }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UserInviteParam }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/api/articles': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            tag?: string | undefined
            tags?: string | undefined
            tags_exclude?: string | undefined
            username?: string | undefined
            state?: 'fresh' | 'rising' | 'all' | undefined
            top?: number | undefined
            collection_id?: number | undefined
          }
        }
        output: ArticleIndex[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: Article }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: Article }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Article }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/api/articles/latest': {
      $get: {
        input: { query: { page?: number | undefined; per_page?: number | undefined } }
        output: ArticleIndex[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/articles/me': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ArticleIndex[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/articles/me/all': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ArticleIndex[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/articles/me/published': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ArticleIndex[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/articles/me/unpublished': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ArticleIndex[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/articles/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & { json: Article }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: Article }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: Article }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: Article }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/articles/:id/unpublish': {
      $put:
        | {
            input: { param: { id: number } } & { query: { note?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { note?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { note?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/articles/:username/:slug': {
      $get:
        | {
            input: { param: { username: string; slug: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; slug: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/comments': {
      $get:
        | {
            input: { query: { a_id?: string | undefined; p_id?: string | undefined } }
            output: Comment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { a_id?: string | undefined; p_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/comments/:id': {
      $get:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/display_ads': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: {
              json: {
                approved?: boolean | undefined
                body_markdown: string
                creator_id?: number | undefined
                display_to?: 'all' | 'logged_in' | 'logged_out' | undefined
                name: string
                organization_id?: number | undefined
                placement_area:
                  | 'sidebar_left'
                  | 'sidebar_left_2'
                  | 'sidebar_right'
                  | 'post_sidebar'
                  | 'post_comments'
                published?: boolean | undefined
                tag_list?: string | undefined
                type_of?: 'in_house' | 'community' | 'external' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                approved?: boolean | undefined
                body_markdown: string
                creator_id?: number | undefined
                display_to?: 'all' | 'logged_in' | 'logged_out' | undefined
                name: string
                organization_id?: number | undefined
                placement_area:
                  | 'sidebar_left'
                  | 'sidebar_left_2'
                  | 'sidebar_right'
                  | 'post_sidebar'
                  | 'post_comments'
                published?: boolean | undefined
                tag_list?: string | undefined
                type_of?: 'in_house' | 'community' | 'external' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                approved?: boolean | undefined
                body_markdown: string
                creator_id?: number | undefined
                display_to?: 'all' | 'logged_in' | 'logged_out' | undefined
                name: string
                organization_id?: number | undefined
                placement_area:
                  | 'sidebar_left'
                  | 'sidebar_left_2'
                  | 'sidebar_right'
                  | 'post_sidebar'
                  | 'post_comments'
                published?: boolean | undefined
                tag_list?: string | undefined
                type_of?: 'in_house' | 'community' | 'external' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/display_ads/:id': {
      $get:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                approved?: boolean | undefined
                body_markdown: string
                creator_id?: number | undefined
                display_to?: 'all' | 'logged_in' | 'logged_out' | undefined
                name: string
                organization_id?: number | undefined
                placement_area:
                  | 'sidebar_left'
                  | 'sidebar_left_2'
                  | 'sidebar_right'
                  | 'post_sidebar'
                  | 'post_comments'
                published?: boolean | undefined
                tag_list?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                approved?: boolean | undefined
                body_markdown: string
                creator_id?: number | undefined
                display_to?: 'all' | 'logged_in' | 'logged_out' | undefined
                name: string
                organization_id?: number | undefined
                placement_area:
                  | 'sidebar_left'
                  | 'sidebar_left_2'
                  | 'sidebar_right'
                  | 'post_sidebar'
                  | 'post_comments'
                published?: boolean | undefined
                tag_list?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: {
                approved?: boolean | undefined
                body_markdown: string
                creator_id?: number | undefined
                display_to?: 'all' | 'logged_in' | 'logged_out' | undefined
                name: string
                organization_id?: number | undefined
                placement_area:
                  | 'sidebar_left'
                  | 'sidebar_left_2'
                  | 'sidebar_right'
                  | 'post_sidebar'
                  | 'post_comments'
                published?: boolean | undefined
                tag_list?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/display_ads/:id/unpublish': {
      $put:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/followers/users': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: string | undefined
              }
            }
            output: {
              id?: number | undefined
              name?: string | undefined
              path?: string | undefined
              profile_image?: string | undefined
              type_of?: string | undefined
              user_id?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/follows/tags': {
      $get:
        | { input: {}; output: FollowedTag[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api/organizations/:username': {
      $get:
        | {
            input: { param: { username: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/organizations/:username/articles': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ArticleIndex[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/organizations/:username/users': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/pages': {
      $get: { input: {}; output: Page[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              json: {
                body_json?: string | undefined
                body_markdown?: string | undefined
                description?: string | undefined
                is_top_level_path?: boolean | undefined
                slug?: string | undefined
                template?:
                  | 'contained'
                  | 'full_within_layout'
                  | 'nav_bar_included'
                  | 'json'
                  | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                body_json?: string | undefined
                body_markdown?: string | undefined
                description?: string | undefined
                is_top_level_path?: boolean | undefined
                slug?: string | undefined
                template?:
                  | 'contained'
                  | 'full_within_layout'
                  | 'nav_bar_included'
                  | 'json'
                  | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                body_json?: string | undefined
                body_markdown?: string | undefined
                description?: string | undefined
                is_top_level_path?: boolean | undefined
                slug?: string | undefined
                template?:
                  | 'contained'
                  | 'full_within_layout'
                  | 'nav_bar_included'
                  | 'json'
                  | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/pages/:id': {
      $delete:
        | { input: { param: { id: number } }; output: Page; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 422 }
      $get: { input: { param: { id: number } }; output: Page; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { id: number } } & { json: Page }
            output: Page
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: Page }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: Page }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/podcast_episodes': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                username?: string | undefined
              }
            }
            output: PodcastEpisodeIndex[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/profile_images/:username': {
      $get:
        | {
            input: { param: { username: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/reactions': {
      $post:
        | {
            input: {
              query: {
                category: 'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire'
                reactable_id: number
                reactable_type: 'Comment' | 'Article' | 'User'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                category: 'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire'
                reactable_id: number
                reactable_type: 'Comment' | 'Article' | 'User'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/reactions/toggle': {
      $post:
        | {
            input: {
              query: {
                category: 'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire'
                reactable_id: number
                reactable_type: 'Comment' | 'Article' | 'User'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                category: 'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire'
                reactable_id: number
                reactable_type: 'Comment' | 'Article' | 'User'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/readinglist': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ArticleIndex[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/tags': {
      $get: {
        input: { query: { page?: number | undefined; per_page?: number | undefined } }
        output: Tag[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/me': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api/users/:id': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:id/suspend': {
      $put:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/users/:id/unpublish': {
      $put:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/videos': {
      $get: {
        input: { query: { page?: number | undefined; per_page?: number | undefined } }
        output: VideoArticle[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
