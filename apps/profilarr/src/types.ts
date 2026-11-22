declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/arr': {
      $get:
        | {
            input: {}
            output: {
              id: number
              name: string
              type: 'radarr' | 'sonarr'
              url: string
              external_url?: (string | null) | undefined
              tags?: (string | null) | undefined
              enabled: number
              library_refresh_interval: number
              library_last_refreshed_at?: (string | null) | undefined
              detected_version?: (string | null) | undefined
              detected_api?: (string | null) | undefined
              detected_at?: (string | null) | undefined
              created_at: string
              updated_at: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/databases': {
      $get:
        | {
            input: {}
            output: {
              id: number
              uuid: string
              name: string
              repository_url: string
              sync_strategy: number
              auto_pull: number
              enabled: number
              is_private: number
              local_ops_enabled: number
              git_user_name?: (string | null) | undefined
              git_user_email?: (string | null) | undefined
              conflict_strategy: 'override' | 'align' | 'ask'
              last_synced_at?: (string | null) | undefined
              created_at: string
              updated_at: string
              hasPat: boolean
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: {
              json: {
                name: string
                repository_url: string
                branch?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: {
              id: number
              uuid: string
              name: string
              repository_url: string
              sync_strategy: number
              auto_pull: number
              enabled: number
              is_private: number
              local_ops_enabled: number
              git_user_name?: (string | null) | undefined
              git_user_email?: (string | null) | undefined
              conflict_strategy: 'override' | 'align' | 'ask'
              last_synced_at?: (string | null) | undefined
              created_at: string
              updated_at: string
              hasPat: boolean
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                repository_url: string
                branch?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                repository_url: string
                branch?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                repository_url: string
                branch?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                repository_url: string
                branch?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                name: string
                repository_url: string
                branch?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/databases/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: {
              id: number
              uuid: string
              name: string
              repository_url: string
              sync_strategy: number
              auto_pull: number
              enabled: number
              is_private: number
              local_ops_enabled: number
              git_user_name?: (string | null) | undefined
              git_user_email?: (string | null) | undefined
              conflict_strategy: 'override' | 'align' | 'ask'
              last_synced_at?: (string | null) | undefined
              created_at: string
              updated_at: string
              hasPat: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number } } & {
              json: {
                name?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: {
              id: number
              uuid: string
              name: string
              repository_url: string
              sync_strategy: number
              auto_pull: number
              enabled: number
              is_private: number
              local_ops_enabled: number
              git_user_name?: (string | null) | undefined
              git_user_email?: (string | null) | undefined
              conflict_strategy: 'override' | 'align' | 'ask'
              last_synced_at?: (string | null) | undefined
              created_at: string
              updated_at: string
              hasPat: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                name?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: {
                name?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: {
                name?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                name?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                name?: string | undefined
                personal_access_token?: string | undefined
                git_user_name?: string | undefined
                git_user_email?: string | undefined
                sync_strategy?: number | undefined
                auto_pull?: boolean | undefined
                local_ops_enabled?: boolean | undefined
                conflict_strategy?: 'override' | 'align' | 'ask' | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/databases/:id/sync': {
      $post:
        | {
            input: { param: { id: number } }
            output: { jobId: number }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/health': {
      $get:
        | {
            input: {}
            output: { status: 'healthy' | 'degraded' | 'unhealthy'; timestamp: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { status: 'healthy' | 'degraded' | 'unhealthy'; timestamp: string }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/status': {
      $get:
        | {
            input: {}
            output: {
              version: string
              uptime: number
              timezone: string
              databases: {
                id: number
                name: string
                enabled: boolean
                lastSyncedAt: string | null
                syncStrategy: 'manual' | 'auto'
                counts: {
                  customFormats: number
                  qualityProfiles: number
                  regularExpressions: number
                  delayProfiles: number
                }
              }[]
              arrs: {
                id: number
                name: string
                type: 'radarr' | 'sonarr'
                enabled: boolean
                sync: {
                  qualityProfiles: { count: number; status: string; lastSyncedAt: string | null }
                  delayProfiles: {
                    configured: boolean
                    status: string
                    lastSyncedAt: string | null
                  }
                  mediaManagement: {
                    configured: boolean
                    status: string
                    lastSyncedAt: string | null
                  }
                }
                drift:
                  | {
                      lastCheckedAt: string
                      drifted: boolean
                      details: {
                        qualityProfiles: number
                        delayProfiles: number
                        mediaManagement: number
                      }
                    }
                  | ({ [x: string]: unknown } | null)
              }[]
              jobs: { active: number; queued: number; nextRunAt: string | null }
              backups: { enabled: boolean; lastBackupAt: string | null }
              announcements: { unread: number }
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/openapi.json': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/jobs/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: {
              id: number
              jobType: string
              status: 'queued' | 'running' | 'success' | 'failed' | 'cancelled'
              source: 'manual' | 'schedule' | 'system'
              createdAt: string
              startedAt: string | null
              finishedAt: string | null
              result:
                | {
                    status: 'success' | 'failure' | 'skipped' | 'cancelled'
                    output: string | null
                    error: string | null
                    durationMs: number
                  }
                | ({ [x: string]: unknown } | null)
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/backups': {
      $get:
        | {
            input: {}
            output: { filename: string; created: string; size: number; sizeFormatted: string }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
      $post:
        | { input: {}; output: { jobId: number }; outputFormat: 'json'; status: 202 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/backups/:filename': {
      $get:
        | {
            input: { param: { filename: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { filename: string } }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { filename: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/backups/upload': {
      $post:
        | {
            input: { form: { file: File } }
            output: { filename: string; size: number; sizeFormatted: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { form: { file: File } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file: File } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: { file: File } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/backups/settings': {
      $get:
        | {
            input: {}
            output: {
              schedule: 'hourly' | 'daily' | 'weekly' | 'monthly'
              retentionDays: number
              enabled: boolean
              includeDatabase: boolean
              compressionEnabled: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
      $patch:
        | {
            input: {
              json: {
                schedule?: 'hourly' | 'daily' | 'weekly' | 'monthly' | undefined
                retentionDays?: number | undefined
                enabled?: boolean | undefined
              }
            }
            output: {
              schedule: 'hourly' | 'daily' | 'weekly' | 'monthly'
              retentionDays: number
              enabled: boolean
              includeDatabase: boolean
              compressionEnabled: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                schedule?: 'hourly' | 'daily' | 'weekly' | 'monthly' | undefined
                retentionDays?: number | undefined
                enabled?: boolean | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                schedule?: 'hourly' | 'daily' | 'weekly' | 'monthly' | undefined
                retentionDays?: number | undefined
                enabled?: boolean | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                schedule?: 'hourly' | 'daily' | 'weekly' | 'monthly' | undefined
                retentionDays?: number | undefined
                enabled?: boolean | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/announcements': {
      $get:
        | {
            input: {}
            output: {
              id: string
              title: string
              severity: 'info' | 'warning' | 'critical'
              publishedAt: string
              expiresAt: string | null
              minVersion: string | null
              maxVersion: string | null
              link: string | null
              readAt: string | null
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: string }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/announcements/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              id: string
              title: string
              severity: 'info' | 'warning' | 'critical'
              publishedAt: string
              expiresAt: string | null
              minVersion: string | null
              maxVersion: string | null
              link: string | null
              readAt: string | null
              body: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
