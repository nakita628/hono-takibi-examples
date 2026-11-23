type Subject = {
  title?: string | undefined
  url?: string | undefined
  type?: string | undefined
  state?: string | undefined
}
type Repo = {
  id?: number | undefined
  name?: string | undefined
  owner?: string | undefined
  repo_url?: string | undefined
}
type Notification = {
  id?: number | undefined
  github_id?: number | undefined
  reason?: string | undefined
  unread?: boolean | undefined
  archived?: boolean | undefined
  starred?: boolean | undefined
  url?: string | undefined
  web_url?: string | undefined
  last_read_at?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  subject?: Subject | undefined
  repo?: Repo | undefined
}
type Notifications = {
  pagination?:
    | {
        total_notifications?: number | undefined
        page?: number | undefined
        total_pages?: number | undefined
        per_page?: number | undefined
      }
    | undefined
  types?: { PullRequest?: number | undefined } | undefined
  reasons?: { mention?: number | undefined } | undefined
  unread_repositories?: { 'octobox/octobox'?: number | undefined } | undefined
  notifications?: Notification[] | undefined
}
type SubjectUrlResponse = {
  id?: number | undefined
  github_id?: number | undefined
  reason?: string | undefined
  unread?: boolean | undefined
  archived?: boolean | undefined
  starred?: boolean | undefined
  url?: string | undefined
  web_url?: string | undefined
  last_read_at?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  subject?: Subject | undefined
  repo?: Repo | undefined
}
type WritePinnedSearch = { query?: string | undefined; name?: string | undefined }
type PinnedSearch = {
  id?: number | undefined
  user_id?: number | undefined
  query?: string | undefined
  name?: string | undefined
  count?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type User = {
  id?: number | undefined
  github_id?: number | undefined
  github_login?: string | undefined
  last_synced_at?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type RefreshSetting = { refresh_interval?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/notifications/archive_selected.json': {
      $post: {
        input: { query: { id?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/notifications/delete_selected.json': {
      $delete: {
        input: { query: { id?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/notifications.json': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            starred?: boolean | undefined
            archive?: boolean | undefined
            q?: string | undefined
          }
        }
        output: Notifications
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/notifications/lookup.json': {
      $get: {
        input: { query: { url?: string | undefined } }
        output: SubjectUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/notifications/mark_read_selected.json': {
      $get: {
        input: { query: { id?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/notifications/mute_selected.json': {
      $post: {
        input: { query: { id?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/notifications/:id/star.json': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/notifications/sync.json': {
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/notifications/syncing.json': {
      $get:
        | {
            input: {}
            output: { error?: (string | null) | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 423 }
    }
  } & {
    '/api/notifications/unread_count.json': {
      $get: { input: {}; output: { count?: number | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/pinned_searches.json': {
      $post: {
        input: { json: WritePinnedSearch }
        output: PinnedSearch
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: PinnedSearch[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/pinned_searches/:id.json': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: number } }
        output: PinnedSearch
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritePinnedSearch }
        output: PinnedSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/profile.json': {
      $get: { input: {}; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/users/:id.json': {
      $patch: {
        input: { param: { id: number } } & {
          query: {
            personal_access_token?: string | undefined
            refresh_interval?: number | undefined
          }
        }
        output: RefreshSetting
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: User; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
