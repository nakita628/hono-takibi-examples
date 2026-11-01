import { createRoute, z } from '@hono/zod-openapi'

const HealthStatusSchema = z
  .enum(['healthy', 'degraded', 'unhealthy'])
  .openapi({ description: 'Overall health status' })
  .openapi('HealthStatus')

const ErrorResponseSchema = z
  .object({ error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }) })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const HealthCheckResponseSchema = z
  .object({
    status: z
      .enum(['healthy', 'degraded', 'unhealthy'])
      .openapi({ description: 'Overall health status' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ description: 'Current server time' }),
  })
  .openapi({ required: ['status', 'timestamp'] })
  .openapi('HealthCheckResponse')

const StatusResponseSchema = z
  .object({
    version: z.string().openapi({ description: 'Application version' }),
    uptime: z.int().openapi({ description: 'Server uptime in seconds' }),
    timezone: z
      .string()
      .openapi({ description: 'Server timezone (IANA, e.g. "America/New_York")' }),
    databases: z.array(
      z
        .object({
          id: z.int().openapi({ description: 'Database instance ID' }),
          name: z.string().openapi({ description: 'Display name' }),
          enabled: z.boolean().openapi({ description: 'Whether the database is active' }),
          lastSyncedAt: z.iso
            .datetime({ offset: true })
            .nullable()
            .openapi({ description: 'Last successful sync check timestamp' }),
          syncStrategy: z.enum(['manual', 'auto']).openapi({ description: 'Sync strategy' }),
          counts: z
            .object({
              customFormats: z.int().openapi({ description: 'Number of custom formats' }),
              qualityProfiles: z.int().openapi({ description: 'Number of quality profiles' }),
              regularExpressions: z.int().openapi({ description: 'Number of regular expressions' }),
              delayProfiles: z.int().openapi({ description: 'Number of delay profiles' }),
            })
            .openapi({
              required: ['customFormats', 'qualityProfiles', 'regularExpressions', 'delayProfiles'],
            }),
        })
        .openapi({ required: ['id', 'name', 'enabled', 'lastSyncedAt', 'syncStrategy', 'counts'] }),
    ),
    arrs: z.array(
      z
        .object({
          id: z.int().openapi({ description: 'Arr instance ID' }),
          name: z.string().openapi({ description: 'Display name' }),
          type: z.enum(['radarr', 'sonarr']).openapi({ description: 'Arr application type' }),
          enabled: z.boolean().openapi({ description: 'Whether the instance is active' }),
          sync: z
            .object({
              qualityProfiles: z
                .object({
                  count: z.int().openapi({ description: 'Number of synced quality profiles' }),
                  status: z
                    .string()
                    .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
                  lastSyncedAt: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .openapi({ description: 'Last successful sync timestamp' }),
                })
                .openapi({ required: ['count', 'status', 'lastSyncedAt'] }),
              delayProfiles: z
                .object({
                  configured: z
                    .boolean()
                    .openapi({ description: 'Whether this sync section has been configured' }),
                  status: z
                    .string()
                    .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
                  lastSyncedAt: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .openapi({ description: 'Last successful sync timestamp' }),
                })
                .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
              mediaManagement: z
                .object({
                  configured: z
                    .boolean()
                    .openapi({ description: 'Whether this sync section has been configured' }),
                  status: z
                    .string()
                    .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
                  lastSyncedAt: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .openapi({ description: 'Last successful sync timestamp' }),
                })
                .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
            })
            .openapi({ required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'] }),
          drift: z
            .xor([
              z
                .object({
                  lastCheckedAt: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'When drift was last checked' }),
                  drifted: z.boolean().openapi({ description: 'Whether any section has drifted' }),
                  details: z
                    .object({
                      qualityProfiles: z
                        .int()
                        .openapi({ description: 'Number of drifted quality profiles' }),
                      delayProfiles: z
                        .int()
                        .openapi({ description: 'Number of drifted delay profiles' }),
                      mediaManagement: z
                        .int()
                        .openapi({ description: 'Number of drifted media management configs' }),
                    })
                    .openapi({ required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'] }),
                })
                .openapi({ required: ['lastCheckedAt', 'drifted', 'details'] }),
              z.null().nullable(),
            ])
            .openapi({ description: 'Drift detection result (null until implemented)' }),
        })
        .openapi({ required: ['id', 'name', 'type', 'enabled', 'sync', 'drift'] }),
    ),
    jobs: z
      .object({
        active: z.int().openapi({ description: 'Number of currently running jobs' }),
        queued: z.int().openapi({ description: 'Number of queued jobs' }),
        nextRunAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .openapi({ description: 'Earliest scheduled job run time' }),
      })
      .openapi({ required: ['active', 'queued', 'nextRunAt'] }),
    backups: z
      .object({
        enabled: z.boolean().openapi({ description: 'Whether automatic backups are enabled' }),
        lastBackupAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .openapi({ description: 'Timestamp of last backup' }),
      })
      .openapi({ required: ['enabled', 'lastBackupAt'] }),
    announcements: z
      .object({
        unread: z
          .int()
          .openapi({
            description:
              "Number of unread, visible announcements. Visibility honours\n`withdrawn`, `expires_at`, and the running build's version bounds\n(`min_version` / `max_version`).\n",
          }),
      })
      .openapi({ required: ['unread'] }),
  })
  .openapi({
    required: [
      'version',
      'uptime',
      'timezone',
      'databases',
      'arrs',
      'jobs',
      'backups',
      'announcements',
    ],
  })
  .openapi('StatusResponse')

const StatusDatabaseSchema = z
  .object({
    id: z.int().openapi({ description: 'Database instance ID' }),
    name: z.string().openapi({ description: 'Display name' }),
    enabled: z.boolean().openapi({ description: 'Whether the database is active' }),
    lastSyncedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last successful sync check timestamp' }),
    syncStrategy: z.enum(['manual', 'auto']).openapi({ description: 'Sync strategy' }),
    counts: z
      .object({
        customFormats: z.int().openapi({ description: 'Number of custom formats' }),
        qualityProfiles: z.int().openapi({ description: 'Number of quality profiles' }),
        regularExpressions: z.int().openapi({ description: 'Number of regular expressions' }),
        delayProfiles: z.int().openapi({ description: 'Number of delay profiles' }),
      })
      .openapi({
        required: ['customFormats', 'qualityProfiles', 'regularExpressions', 'delayProfiles'],
      }),
  })
  .openapi({ required: ['id', 'name', 'enabled', 'lastSyncedAt', 'syncStrategy', 'counts'] })
  .openapi('StatusDatabase')

const StatusDatabaseCountsSchema = z
  .object({
    customFormats: z.int().openapi({ description: 'Number of custom formats' }),
    qualityProfiles: z.int().openapi({ description: 'Number of quality profiles' }),
    regularExpressions: z.int().openapi({ description: 'Number of regular expressions' }),
    delayProfiles: z.int().openapi({ description: 'Number of delay profiles' }),
  })
  .openapi({
    required: ['customFormats', 'qualityProfiles', 'regularExpressions', 'delayProfiles'],
  })
  .openapi('StatusDatabaseCounts')

const StatusArrSchema = z
  .object({
    id: z.int().openapi({ description: 'Arr instance ID' }),
    name: z.string().openapi({ description: 'Display name' }),
    type: z.enum(['radarr', 'sonarr']).openapi({ description: 'Arr application type' }),
    enabled: z.boolean().openapi({ description: 'Whether the instance is active' }),
    sync: z
      .object({
        qualityProfiles: z
          .object({
            count: z.int().openapi({ description: 'Number of synced quality profiles' }),
            status: z
              .string()
              .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
            lastSyncedAt: z.iso
              .datetime({ offset: true })
              .nullable()
              .openapi({ description: 'Last successful sync timestamp' }),
          })
          .openapi({ required: ['count', 'status', 'lastSyncedAt'] }),
        delayProfiles: z
          .object({
            configured: z
              .boolean()
              .openapi({ description: 'Whether this sync section has been configured' }),
            status: z
              .string()
              .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
            lastSyncedAt: z.iso
              .datetime({ offset: true })
              .nullable()
              .openapi({ description: 'Last successful sync timestamp' }),
          })
          .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
        mediaManagement: z
          .object({
            configured: z
              .boolean()
              .openapi({ description: 'Whether this sync section has been configured' }),
            status: z
              .string()
              .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
            lastSyncedAt: z.iso
              .datetime({ offset: true })
              .nullable()
              .openapi({ description: 'Last successful sync timestamp' }),
          })
          .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
      })
      .openapi({ required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'] }),
    drift: z
      .xor([
        z
          .object({
            lastCheckedAt: z.iso
              .datetime({ offset: true })
              .openapi({ description: 'When drift was last checked' }),
            drifted: z.boolean().openapi({ description: 'Whether any section has drifted' }),
            details: z
              .object({
                qualityProfiles: z
                  .int()
                  .openapi({ description: 'Number of drifted quality profiles' }),
                delayProfiles: z.int().openapi({ description: 'Number of drifted delay profiles' }),
                mediaManagement: z
                  .int()
                  .openapi({ description: 'Number of drifted media management configs' }),
              })
              .openapi({ required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'] }),
          })
          .openapi({ required: ['lastCheckedAt', 'drifted', 'details'] }),
        z.null().nullable(),
      ])
      .openapi({ description: 'Drift detection result (null until implemented)' }),
  })
  .openapi({ required: ['id', 'name', 'type', 'enabled', 'sync', 'drift'] })
  .openapi('StatusArr')

const StatusArrSyncSchema = z
  .object({
    qualityProfiles: z
      .object({
        count: z.int().openapi({ description: 'Number of synced quality profiles' }),
        status: z
          .string()
          .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
        lastSyncedAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .openapi({ description: 'Last successful sync timestamp' }),
      })
      .openapi({ required: ['count', 'status', 'lastSyncedAt'] }),
    delayProfiles: z
      .object({
        configured: z
          .boolean()
          .openapi({ description: 'Whether this sync section has been configured' }),
        status: z
          .string()
          .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
        lastSyncedAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .openapi({ description: 'Last successful sync timestamp' }),
      })
      .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
    mediaManagement: z
      .object({
        configured: z
          .boolean()
          .openapi({ description: 'Whether this sync section has been configured' }),
        status: z
          .string()
          .openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
        lastSyncedAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .openapi({ description: 'Last successful sync timestamp' }),
      })
      .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
  })
  .openapi({ required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'] })
  .openapi('StatusArrSync')

const StatusArrSyncQualityProfilesSchema = z
  .object({
    count: z.int().openapi({ description: 'Number of synced quality profiles' }),
    status: z.string().openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
    lastSyncedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last successful sync timestamp' }),
  })
  .openapi({ required: ['count', 'status', 'lastSyncedAt'] })
  .openapi('StatusArrSyncQualityProfiles')

const StatusArrSyncSectionSchema = z
  .object({
    configured: z
      .boolean()
      .openapi({ description: 'Whether this sync section has been configured' }),
    status: z.string().openapi({ description: 'Sync status (idle, pending, in_progress, failed)' }),
    lastSyncedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last successful sync timestamp' }),
  })
  .openapi({ required: ['configured', 'status', 'lastSyncedAt'] })
  .openapi('StatusArrSyncSection')

const StatusArrDriftSchema = z
  .object({
    lastCheckedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When drift was last checked' }),
    drifted: z.boolean().openapi({ description: 'Whether any section has drifted' }),
    details: z
      .object({
        qualityProfiles: z.int().openapi({ description: 'Number of drifted quality profiles' }),
        delayProfiles: z.int().openapi({ description: 'Number of drifted delay profiles' }),
        mediaManagement: z
          .int()
          .openapi({ description: 'Number of drifted media management configs' }),
      })
      .openapi({ required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'] }),
  })
  .openapi({ required: ['lastCheckedAt', 'drifted', 'details'] })
  .openapi('StatusArrDrift')

const StatusJobsSchema = z
  .object({
    active: z.int().openapi({ description: 'Number of currently running jobs' }),
    queued: z.int().openapi({ description: 'Number of queued jobs' }),
    nextRunAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Earliest scheduled job run time' }),
  })
  .openapi({ required: ['active', 'queued', 'nextRunAt'] })
  .openapi('StatusJobs')

const StatusBackupsSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether automatic backups are enabled' }),
    lastBackupAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Timestamp of last backup' }),
  })
  .openapi({ required: ['enabled', 'lastBackupAt'] })
  .openapi('StatusBackups')

const StatusAnnouncementsSchema = z
  .object({
    unread: z
      .int()
      .openapi({
        description:
          "Number of unread, visible announcements. Visibility honours\n`withdrawn`, `expires_at`, and the running build's version bounds\n(`min_version` / `max_version`).\n",
      }),
  })
  .openapi({ required: ['unread'] })
  .openapi('StatusAnnouncements')

const AnnouncementSeveritySchema = z
  .enum(['info', 'warning', 'critical'])
  .openapi({
    description: 'Severity level. `critical` is reserved for genuine break-glass messages.',
  })
  .openapi('AnnouncementSeverity')

const AnnouncementSummarySchema = z
  .object({
    id: z.string().openapi({ description: 'ULID, immutable once published.' }),
    title: z.string(),
    severity: z
      .enum(['info', 'warning', 'critical'])
      .openapi({
        description: 'Severity level. `critical` is reserved for genuine break-glass messages.',
      }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ISO-8601 UTC. Drives sort order.' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Null = no expiry.' }),
    minVersion: z
      .string()
      .nullable()
      .openapi({ description: 'Minimum running version for this announcement to apply.' }),
    maxVersion: z
      .string()
      .nullable()
      .openapi({ description: 'Maximum running version for this announcement to apply.' }),
    link: z.url().nullable().openapi({ description: 'Optional external "Read more" URL.' }),
    readAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the announcement was opened in the app. Null = unread.' }),
  })
  .openapi({
    description: 'Announcement without body. Returned by the list endpoint.',
    required: [
      'id',
      'title',
      'severity',
      'publishedAt',
      'expiresAt',
      'minVersion',
      'maxVersion',
      'link',
      'readAt',
    ],
  })
  .openapi('AnnouncementSummary')

const AnnouncementDetailSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    severity: z
      .enum(['info', 'warning', 'critical'])
      .openapi({
        description: 'Severity level. `critical` is reserved for genuine break-glass messages.',
      }),
    publishedAt: z.iso.datetime({ offset: true }),
    expiresAt: z.iso.datetime({ offset: true }).nullable(),
    minVersion: z.string().nullable(),
    maxVersion: z.string().nullable(),
    link: z.url().nullable(),
    readAt: z.iso.datetime({ offset: true }).nullable(),
    body: z
      .string()
      .nullable()
      .openapi({
        description:
          'Raw markdown body. Lazy-fetched from the bulletin on first call.\nMay be null briefly if the lazy fetch fails; subsequent calls retry.\n',
      }),
  })
  .openapi({
    description: 'Announcement with the full markdown body. Returned by the detail endpoint.',
    required: [
      'id',
      'title',
      'severity',
      'publishedAt',
      'expiresAt',
      'minVersion',
      'maxVersion',
      'link',
      'readAt',
      'body',
    ],
  })
  .openapi('AnnouncementDetail')

const ArrTypeSchema = z
  .enum(['radarr', 'sonarr'])
  .openapi({ description: 'Type of Arr instance' })
  .openapi('ArrType')

const CustomFormatRefSchema = z
  .object({
    id: z.int().openapi({ description: 'Custom format ID' }),
    name: z.string().openapi({ description: 'Custom format name' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('CustomFormatRef')

const ScoreBreakdownItemSchema = z
  .object({
    name: z.string().openapi({ description: 'Custom format name' }),
    score: z.int().openapi({ description: 'Score assigned by the quality profile' }),
  })
  .openapi({ required: ['name', 'score'] })
  .openapi('ScoreBreakdownItem')

const ArrInstanceSchema = z
  .object({
    id: z.int().openapi({ description: 'Instance ID' }),
    name: z.string().openapi({ description: 'Display name' }),
    type: z.enum(['radarr', 'sonarr']).openapi({ description: 'Type of Arr instance' }),
    url: z
      .string()
      .openapi({ description: "Instance URL used by Profilarr's backend for API calls" }),
    external_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional external/browser-facing URL. When set, the UI uses this for\n"Open in Radarr/Sonarr" browser links while Profilarr\'s backend continues\nto call the instance using `url`. Useful for reverse-proxied deployments\nwhere the internal and external hostnames differ.\n',
        example: 'https://radarr.example.com',
      }),
    tags: z.string().nullable().exactOptional().openapi({ description: 'JSON array of tags' }),
    enabled: z.int().openapi({ description: 'Whether the instance is active (0 or 1)' }),
    library_refresh_interval: z
      .int()
      .openapi({ description: 'Library cache refresh interval in minutes (0 = manual)' }),
    library_last_refreshed_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last library refresh timestamp' }),
    detected_version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'App version the instance reported on the last successful version probe,\ne.g. `5.0.0.2569`. Null until Profilarr has probed it.\n',
        example: '5.0.0.2569',
      }),
    detected_api: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "API generation the instance's unversioned `/api` route reported as\ncurrent on the last probe, e.g. `v3` or `v5`. Null when the instance\nhas no such route or has not been probed.\n",
        example: 'v5',
      }),
    detected_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'When the last successful version probe ran' }),
    created_at: z.string().openapi({ description: 'Creation timestamp' }),
    updated_at: z.string().openapi({ description: 'Last update timestamp' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'type',
      'url',
      'enabled',
      'library_refresh_interval',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('ArrInstance')

const DatabaseInstanceSchema = z
  .object({
    id: z.int().openapi({ description: 'Database instance ID' }),
    uuid: z.uuid().openapi({ description: 'Unique identifier' }),
    name: z.string().openapi({ description: 'Display name' }),
    repository_url: z.string().openapi({ description: 'GitHub repository URL' }),
    sync_strategy: z
      .int()
      .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
    auto_pull: z.int().openapi({ description: 'Whether to automatically pull updates (0 or 1)' }),
    enabled: z.int().openapi({ description: 'Whether the database is active (0 or 1)' }),
    is_private: z.int().openapi({ description: 'Whether the repository is private (0 or 1)' }),
    local_ops_enabled: z
      .int()
      .openapi({ description: 'Whether local ops editing is enabled (0 or 1)' }),
    git_user_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Git user name for commits' }),
    git_user_email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Git user email for commits' }),
    conflict_strategy: z
      .enum(['override', 'align', 'ask'])
      .openapi({
        description: 'How to handle conflicts between local tweaks and upstream updates',
      }),
    last_synced_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last successful sync timestamp' }),
    created_at: z.string().openapi({ description: 'Creation timestamp' }),
    updated_at: z.string().openapi({ description: 'Last update timestamp' }),
    hasPat: z.boolean().openapi({ description: 'Whether a personal access token is configured' }),
  })
  .openapi({
    required: [
      'id',
      'uuid',
      'name',
      'repository_url',
      'sync_strategy',
      'auto_pull',
      'enabled',
      'is_private',
      'local_ops_enabled',
      'conflict_strategy',
      'hasPat',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('DatabaseInstance')

const CreateDatabaseInputSchema = z
  .object({
    name: z.string().openapi({ description: 'Display name (must be unique)' }),
    repository_url: z.string().openapi({ description: 'GitHub repository URL' }),
    branch: z
      .string()
      .exactOptional()
      .openapi({ description: "Git branch to clone (defaults to remote's default branch)" }),
    personal_access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'GitHub PAT for private repos and push access' }),
    git_user_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required when personal_access_token is set' }),
    git_user_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required when personal_access_token is set' }),
    sync_strategy: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
    auto_pull: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether to automatically pull updates' }),
    local_ops_enabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Force writes to local user ops even with a PAT (requires personal_access_token)',
      }),
    conflict_strategy: z
      .enum(['override', 'align', 'ask'])
      .default('override')
      .exactOptional()
      .openapi({
        description:
          'How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)',
      }),
  })
  .openapi({ required: ['name', 'repository_url'] })
  .openapi('CreateDatabaseInput')

const UpdateDatabaseInputSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Display name (must be unique)' }),
    personal_access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'GitHub PAT for private repos and push access' }),
    git_user_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required when personal_access_token is set' }),
    git_user_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required when personal_access_token is set' }),
    sync_strategy: z
      .int()
      .exactOptional()
      .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
    auto_pull: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to automatically pull updates' }),
    local_ops_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Force writes to local user ops even with a PAT (requires personal_access_token)',
      }),
    conflict_strategy: z
      .enum(['override', 'align', 'ask'])
      .exactOptional()
      .openapi({
        description:
          'How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)',
      }),
  })
  .openapi({
    description: 'All fields are optional. Unknown fields are silently ignored.',
    required: [],
  })
  .openapi('UpdateDatabaseInput')

const SyncTriggerResponseSchema = z
  .object({
    jobId: z.int().openapi({ description: 'Job queue ID to poll via GET /api/v1/jobs/{jobId}' }),
  })
  .openapi({ required: ['jobId'] })
  .openapi('SyncTriggerResponse')

const JobStatusSchema = z
  .enum(['queued', 'running', 'success', 'failed', 'cancelled'])
  .openapi({ description: 'Current state of the job in the queue' })
  .openapi('JobStatus')

const JobSourceSchema = z
  .enum(['manual', 'schedule', 'system'])
  .openapi({ description: 'How the job was triggered' })
  .openapi('JobSource')

const JobRunResultSchema = z
  .object({
    status: z
      .enum(['success', 'failure', 'skipped', 'cancelled'])
      .openapi({ description: 'Outcome of the job execution' }),
    output: z
      .string()
      .nullable()
      .openapi({ description: 'Human-readable output from the handler' }),
    error: z.string().nullable().openapi({ description: 'Error message if the job failed' }),
    durationMs: z.int().openapi({ description: 'Execution time in milliseconds' }),
  })
  .openapi({ required: ['status', 'output', 'error', 'durationMs'] })
  .openapi('JobRunResult')

const JobResponseSchema = z
  .object({
    id: z.int().openapi({ description: 'Job queue ID' }),
    jobType: z
      .string()
      .openapi({ description: 'Job type identifier (e.g. backup.create, arr.sync)' }),
    status: z
      .enum(['queued', 'running', 'success', 'failed', 'cancelled'])
      .openapi({ description: 'Current state of the job in the queue' }),
    source: z
      .enum(['manual', 'schedule', 'system'])
      .openapi({ description: 'How the job was triggered' }),
    createdAt: z.string().openapi({ description: 'When the job was enqueued' }),
    startedAt: z
      .string()
      .nullable()
      .openapi({ description: 'When execution started (null if still queued)' }),
    finishedAt: z
      .string()
      .nullable()
      .openapi({ description: 'When execution finished (null if not yet complete)' }),
    result: z
      .xor([
        z
          .object({
            status: z
              .enum(['success', 'failure', 'skipped', 'cancelled'])
              .openapi({ description: 'Outcome of the job execution' }),
            output: z
              .string()
              .nullable()
              .openapi({ description: 'Human-readable output from the handler' }),
            error: z
              .string()
              .nullable()
              .openapi({ description: 'Error message if the job failed' }),
            durationMs: z.int().openapi({ description: 'Execution time in milliseconds' }),
          })
          .openapi({ required: ['status', 'output', 'error', 'durationMs'] }),
        z.null().nullable(),
      ])
      .openapi({ description: 'Latest run result, or null if the job has not executed yet' }),
  })
  .openapi({
    required: [
      'id',
      'jobType',
      'status',
      'source',
      'createdAt',
      'startedAt',
      'finishedAt',
      'result',
    ],
  })
  .openapi('JobResponse')

const BackupFileSchema = z
  .object({
    filename: z
      .string()
      .openapi({
        description: 'Backup archive filename',
        example: 'backup-2026-03-15-100005.tar.gz',
      }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'File modification time (when the backup was created)' }),
    size: z.int().openapi({ description: 'File size in bytes' }),
    sizeFormatted: z
      .string()
      .openapi({ description: 'Human-readable file size', example: '12.34 MB' }),
  })
  .openapi({ required: ['filename', 'created', 'size', 'sizeFormatted'] })
  .openapi('BackupFile')

const BackupCreateResponseSchema = z
  .object({
    jobId: z
      .int()
      .openapi({ description: 'Job queue ID. Poll GET /api/v1/jobs/{jobId} for status.' }),
  })
  .openapi({ required: ['jobId'] })
  .openapi('BackupCreateResponse')

const BackupUploadResponseSchema = z
  .object({
    filename: z.string().openapi({ description: 'Stored filename (may differ from upload name)' }),
    size: z.int().openapi({ description: 'File size in bytes' }),
    sizeFormatted: z.string().openapi({ description: 'Human-readable file size' }),
  })
  .openapi({ required: ['filename', 'size', 'sizeFormatted'] })
  .openapi('BackupUploadResponse')

const BackupSettingsSchema = z
  .object({
    schedule: z
      .enum(['hourly', 'daily', 'weekly', 'monthly'])
      .openapi({ description: 'How often automatic backups run' }),
    retentionDays: z
      .int()
      .min(1)
      .max(365)
      .openapi({ description: 'Days to keep backups before cleanup deletes them' }),
    enabled: z.boolean().openapi({ description: 'Whether automatic backups are enabled' }),
    includeDatabase: z
      .boolean()
      .openapi({ description: 'Whether to include the database in backups' }),
    compressionEnabled: z
      .boolean()
      .openapi({ description: 'Whether backup compression is enabled' }),
  })
  .openapi({
    required: ['schedule', 'retentionDays', 'enabled', 'includeDatabase', 'compressionEnabled'],
  })
  .openapi('BackupSettings')

const BackupSettingsUpdateSchema = z
  .object({
    schedule: z.enum(['hourly', 'daily', 'weekly', 'monthly']).exactOptional(),
    retentionDays: z.int().min(1).max(365).exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'All fields are optional. Only provided fields are updated.',
    required: [],
  })
  .openapi('BackupSettingsUpdate')

const ApiKeySecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'X-Api-Key',
  description:
    "API key for programmatic access. Create keys in Settings > Security.\n\nEach key has either full access or per-area access. Areas match the\ntags in this spec, and each operation's `x-permission` says whether it\nneeds `read` or `write` access to its area. Write access includes\nread. A key without the required access gets 403, and an expired key\ngets 401.\n",
}

const SessionSecurityScheme = {
  type: 'apiKey',
  in: 'cookie',
  name: 'session',
  description: 'Session cookie set after browser login.',
}

export const getArrRoute = createRoute({
  method: 'get',
  path: '/arr',
  tags: ['Arr'],
  summary: 'List Arr Instances',
  description:
    'Returns all Arr instances (Radarr/Sonarr) with secrets stripped.\n\n**Use cases:**\n- Dashboard widgets showing connected instances\n- Automation scripts checking instance state\n- Prerequisite checks (e.g. onboarding)\n\n**Behavior:**\n- Returns an empty array if no instances are connected\n- The `api_key`, `basic_auth_username`, and `basic_auth_password` fields are never included\n',
  operationId: 'listArrInstances',
  responses: {
    200: {
      description: 'List of Arr instances',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.int().openapi({ description: 'Instance ID' }),
                name: z.string().openapi({ description: 'Display name' }),
                type: z.enum(['radarr', 'sonarr']).openapi({ description: 'Type of Arr instance' }),
                url: z
                  .string()
                  .openapi({
                    description: "Instance URL used by Profilarr's backend for API calls",
                  }),
                external_url: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional external/browser-facing URL. When set, the UI uses this for\n"Open in Radarr/Sonarr" browser links while Profilarr\'s backend continues\nto call the instance using `url`. Useful for reverse-proxied deployments\nwhere the internal and external hostnames differ.\n',
                    example: 'https://radarr.example.com',
                  }),
                tags: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'JSON array of tags' }),
                enabled: z
                  .int()
                  .openapi({ description: 'Whether the instance is active (0 or 1)' }),
                library_refresh_interval: z
                  .int()
                  .openapi({
                    description: 'Library cache refresh interval in minutes (0 = manual)',
                  }),
                library_last_refreshed_at: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Last library refresh timestamp' }),
                detected_version: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'App version the instance reported on the last successful version probe,\ne.g. `5.0.0.2569`. Null until Profilarr has probed it.\n',
                    example: '5.0.0.2569',
                  }),
                detected_api: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "API generation the instance's unversioned `/api` route reported as\ncurrent on the last probe, e.g. `v3` or `v5`. Null when the instance\nhas no such route or has not been probed.\n",
                    example: 'v5',
                  }),
                detected_at: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'When the last successful version probe ran' }),
                created_at: z.string().openapi({ description: 'Creation timestamp' }),
                updated_at: z.string().openapi({ description: 'Last update timestamp' }),
              })
              .openapi({
                required: [
                  'id',
                  'name',
                  'type',
                  'url',
                  'enabled',
                  'library_refresh_interval',
                  'created_at',
                  'updated_at',
                ],
              }),
          ),
        },
      },
    },
    401: { description: 'Not authenticated' },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Arr' },
        },
      },
    },
  },
})

export const getDatabasesRoute = createRoute({
  method: 'get',
  path: '/databases',
  tags: ['Databases'],
  summary: 'List Databases',
  description:
    'Secrets are stripped: `personal_access_token` is replaced by `hasPat` (boolean)\nand `local_path` is excluded.\n',
  operationId: 'listDatabases',
  responses: {
    200: {
      description: 'List of linked databases',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.int().openapi({ description: 'Database instance ID' }),
                uuid: z.uuid().openapi({ description: 'Unique identifier' }),
                name: z.string().openapi({ description: 'Display name' }),
                repository_url: z.string().openapi({ description: 'GitHub repository URL' }),
                sync_strategy: z
                  .int()
                  .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
                auto_pull: z
                  .int()
                  .openapi({ description: 'Whether to automatically pull updates (0 or 1)' }),
                enabled: z
                  .int()
                  .openapi({ description: 'Whether the database is active (0 or 1)' }),
                is_private: z
                  .int()
                  .openapi({ description: 'Whether the repository is private (0 or 1)' }),
                local_ops_enabled: z
                  .int()
                  .openapi({ description: 'Whether local ops editing is enabled (0 or 1)' }),
                git_user_name: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Git user name for commits' }),
                git_user_email: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Git user email for commits' }),
                conflict_strategy: z
                  .enum(['override', 'align', 'ask'])
                  .openapi({
                    description:
                      'How to handle conflicts between local tweaks and upstream updates',
                  }),
                last_synced_at: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Last successful sync timestamp' }),
                created_at: z.string().openapi({ description: 'Creation timestamp' }),
                updated_at: z.string().openapi({ description: 'Last update timestamp' }),
                hasPat: z
                  .boolean()
                  .openapi({ description: 'Whether a personal access token is configured' }),
              })
              .openapi({
                required: [
                  'id',
                  'uuid',
                  'name',
                  'repository_url',
                  'sync_strategy',
                  'auto_pull',
                  'enabled',
                  'is_private',
                  'local_ops_enabled',
                  'conflict_strategy',
                  'hasPat',
                  'created_at',
                  'updated_at',
                ],
              }),
          ),
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Databases' },
        },
      },
    },
  },
})

export const postDatabasesRoute = createRoute({
  method: 'post',
  path: '/databases',
  tags: ['Databases'],
  summary: 'Link Database',
  description:
    'Clones the repository, validates its PCD manifest, and processes dependencies.\nThis is synchronous and may take several seconds for large repositories.\n\nField dependencies:\n- `personal_access_token` requires `git_user_name` and `git_user_email`\n- `local_ops_enabled` requires `personal_access_token`\n- `conflict_strategy` is only accepted without a PAT, or with PAT + `local_ops_enabled`\n',
  operationId: 'createDatabase',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Display name (must be unique)' }),
              repository_url: z.string().openapi({ description: 'GitHub repository URL' }),
              branch: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Git branch to clone (defaults to remote's default branch)",
                }),
              personal_access_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'GitHub PAT for private repos and push access' }),
              git_user_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required when personal_access_token is set' }),
              git_user_email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required when personal_access_token is set' }),
              sync_strategy: z
                .int()
                .default(0)
                .exactOptional()
                .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
              auto_pull: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Whether to automatically pull updates' }),
              local_ops_enabled: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Force writes to local user ops even with a PAT (requires personal_access_token)',
                }),
              conflict_strategy: z
                .enum(['override', 'align', 'ask'])
                .default('override')
                .exactOptional()
                .openapi({
                  description:
                    'How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)',
                }),
            })
            .openapi({ required: ['name', 'repository_url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Database linked',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.int().openapi({ description: 'Database instance ID' }),
              uuid: z.uuid().openapi({ description: 'Unique identifier' }),
              name: z.string().openapi({ description: 'Display name' }),
              repository_url: z.string().openapi({ description: 'GitHub repository URL' }),
              sync_strategy: z
                .int()
                .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
              auto_pull: z
                .int()
                .openapi({ description: 'Whether to automatically pull updates (0 or 1)' }),
              enabled: z.int().openapi({ description: 'Whether the database is active (0 or 1)' }),
              is_private: z
                .int()
                .openapi({ description: 'Whether the repository is private (0 or 1)' }),
              local_ops_enabled: z
                .int()
                .openapi({ description: 'Whether local ops editing is enabled (0 or 1)' }),
              git_user_name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Git user name for commits' }),
              git_user_email: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Git user email for commits' }),
              conflict_strategy: z
                .enum(['override', 'align', 'ask'])
                .openapi({
                  description: 'How to handle conflicts between local tweaks and upstream updates',
                }),
              last_synced_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Last successful sync timestamp' }),
              created_at: z.string().openapi({ description: 'Creation timestamp' }),
              updated_at: z.string().openapi({ description: 'Last update timestamp' }),
              hasPat: z
                .boolean()
                .openapi({ description: 'Whether a personal access token is configured' }),
            })
            .openapi({
              required: [
                'id',
                'uuid',
                'name',
                'repository_url',
                'sync_strategy',
                'auto_pull',
                'enabled',
                'is_private',
                'local_ops_enabled',
                'conflict_strategy',
                'hasPat',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: 'Validation error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Name and repository URL are required' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Databases' },
        },
      },
    },
    409: {
      description: 'A database with this name already exists',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'A database with this name already exists' },
        },
      },
    },
    422: {
      description: 'Link failed (invalid URL, clone failure, bad manifest)',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Repository not found or inaccessible' },
        },
      },
    },
  },
})

export const getDatabasesIdRoute = createRoute({
  method: 'get',
  path: '/databases/{id}',
  tags: ['Databases'],
  summary: 'Get Database',
  description:
    'Secrets are stripped: `personal_access_token` is replaced by `hasPat` (boolean)\nand `local_path` is excluded.\n',
  operationId: 'getDatabase',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Database instance ID',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Database detail',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.int().openapi({ description: 'Database instance ID' }),
              uuid: z.uuid().openapi({ description: 'Unique identifier' }),
              name: z.string().openapi({ description: 'Display name' }),
              repository_url: z.string().openapi({ description: 'GitHub repository URL' }),
              sync_strategy: z
                .int()
                .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
              auto_pull: z
                .int()
                .openapi({ description: 'Whether to automatically pull updates (0 or 1)' }),
              enabled: z.int().openapi({ description: 'Whether the database is active (0 or 1)' }),
              is_private: z
                .int()
                .openapi({ description: 'Whether the repository is private (0 or 1)' }),
              local_ops_enabled: z
                .int()
                .openapi({ description: 'Whether local ops editing is enabled (0 or 1)' }),
              git_user_name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Git user name for commits' }),
              git_user_email: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Git user email for commits' }),
              conflict_strategy: z
                .enum(['override', 'align', 'ask'])
                .openapi({
                  description: 'How to handle conflicts between local tweaks and upstream updates',
                }),
              last_synced_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Last successful sync timestamp' }),
              created_at: z.string().openapi({ description: 'Creation timestamp' }),
              updated_at: z.string().openapi({ description: 'Last update timestamp' }),
              hasPat: z
                .boolean()
                .openapi({ description: 'Whether a personal access token is configured' }),
            })
            .openapi({
              required: [
                'id',
                'uuid',
                'name',
                'repository_url',
                'sync_strategy',
                'auto_pull',
                'enabled',
                'is_private',
                'local_ops_enabled',
                'conflict_strategy',
                'hasPat',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Databases' },
        },
      },
    },
    404: {
      description: 'Database not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Database not found' },
        },
      },
    },
  },
})

export const deleteDatabasesIdRoute = createRoute({
  method: 'delete',
  path: '/databases/{id}',
  tags: ['Databases'],
  summary: 'Unlink Database',
  description:
    'Removes the database row, deletes the cloned repository from disk,\nand cancels any scheduled sync jobs.\n',
  operationId: 'deleteDatabase',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Database instance ID',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Database unlinked' },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Databases' },
        },
      },
    },
    404: {
      description: 'Database not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Database not found' },
        },
      },
    },
  },
})

export const patchDatabasesIdRoute = createRoute({
  method: 'patch',
  path: '/databases/{id}',
  tags: ['Databases'],
  summary: 'Update Database',
  description:
    'Partial update. Only the provided fields are changed. Unknown fields\nare silently ignored.\n\nField dependencies:\n- `personal_access_token` requires `git_user_name` and `git_user_email`\n- `local_ops_enabled` requires `personal_access_token`\n- `conflict_strategy` is only accepted without a PAT, or with PAT + `local_ops_enabled`\n',
  operationId: 'updateDatabase',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Database instance ID',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Display name (must be unique)' }),
              personal_access_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'GitHub PAT for private repos and push access' }),
              git_user_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required when personal_access_token is set' }),
              git_user_email: z
                .string()
                .exactOptional()
                .openapi({ description: 'Required when personal_access_token is set' }),
              sync_strategy: z
                .int()
                .exactOptional()
                .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
              auto_pull: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether to automatically pull updates' }),
              local_ops_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Force writes to local user ops even with a PAT (requires personal_access_token)',
                }),
              conflict_strategy: z
                .enum(['override', 'align', 'ask'])
                .exactOptional()
                .openapi({
                  description:
                    'How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)',
                }),
            })
            .openapi({
              description: 'All fields are optional. Unknown fields are silently ignored.',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database updated',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.int().openapi({ description: 'Database instance ID' }),
              uuid: z.uuid().openapi({ description: 'Unique identifier' }),
              name: z.string().openapi({ description: 'Display name' }),
              repository_url: z.string().openapi({ description: 'GitHub repository URL' }),
              sync_strategy: z
                .int()
                .openapi({ description: 'Auto-sync interval in minutes (0 = manual only)' }),
              auto_pull: z
                .int()
                .openapi({ description: 'Whether to automatically pull updates (0 or 1)' }),
              enabled: z.int().openapi({ description: 'Whether the database is active (0 or 1)' }),
              is_private: z
                .int()
                .openapi({ description: 'Whether the repository is private (0 or 1)' }),
              local_ops_enabled: z
                .int()
                .openapi({ description: 'Whether local ops editing is enabled (0 or 1)' }),
              git_user_name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Git user name for commits' }),
              git_user_email: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Git user email for commits' }),
              conflict_strategy: z
                .enum(['override', 'align', 'ask'])
                .openapi({
                  description: 'How to handle conflicts between local tweaks and upstream updates',
                }),
              last_synced_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Last successful sync timestamp' }),
              created_at: z.string().openapi({ description: 'Creation timestamp' }),
              updated_at: z.string().openapi({ description: 'Last update timestamp' }),
              hasPat: z
                .boolean()
                .openapi({ description: 'Whether a personal access token is configured' }),
            })
            .openapi({
              required: [
                'id',
                'uuid',
                'name',
                'repository_url',
                'sync_strategy',
                'auto_pull',
                'enabled',
                'is_private',
                'local_ops_enabled',
                'conflict_strategy',
                'hasPat',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: 'Validation error or empty body',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'No updatable fields provided' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Databases' },
        },
      },
    },
    404: {
      description: 'Database not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Database not found' },
        },
      },
    },
    409: {
      description: 'A database with this name already exists',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'A database with this name already exists' },
        },
      },
    },
  },
})

export const postDatabasesIdSyncRoute = createRoute({
  method: 'post',
  path: '/databases/{id}/sync',
  tags: ['Databases'],
  summary: 'Trigger Sync',
  description:
    'Async. Enqueues a `pcd.sync` job and returns 202 with the job ID.\nPoll `GET /api/v1/jobs/{jobId}` for completion.\n',
  operationId: 'syncDatabase',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Database instance ID',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Sync job enqueued',
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: z
                .int()
                .openapi({ description: 'Job queue ID to poll via GET /api/v1/jobs/{jobId}' }),
            })
            .openapi({ required: ['jobId'] }),
          example: { jobId: 42 },
        },
      },
    },
    400: {
      description: 'Database is disabled',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Database is disabled' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Databases' },
        },
      },
    },
    404: {
      description: 'Database not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Database not found' },
        },
      },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['System'],
  summary: 'Health Check',
  description:
    'Public endpoint, no authentication required. Use this for uptime monitors\nand load balancers. Returns 200 for healthy or degraded, 503 for unhealthy.\n',
  operationId: 'getHealth',
  responses: {
    200: {
      description: 'System is healthy or degraded (status field indicates which)',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['healthy', 'degraded', 'unhealthy'])
                .openapi({ description: 'Overall health status' }),
              timestamp: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'Current server time' }),
            })
            .openapi({ required: ['status', 'timestamp'] }),
          example: { status: 'healthy', timestamp: '2026-03-09T12:00:00.000Z' },
        },
      },
    },
    503: {
      description: 'System is unhealthy (status field will be "unhealthy")',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['healthy', 'degraded', 'unhealthy'])
                .openapi({ description: 'Overall health status' }),
              timestamp: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'Current server time' }),
            })
            .openapi({ required: ['status', 'timestamp'] }),
          example: { status: 'unhealthy', timestamp: '2026-03-09T12:00:00.000Z' },
        },
      },
    },
  },
  security: [],
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['System'],
  summary: 'System Status',
  description:
    'Single-call overview designed for dashboard integrations (e.g. Homepage).\nThe `drift` field on each arr is reserved for future use and always null.\n',
  operationId: 'getStatus',
  responses: {
    200: {
      description: 'System status',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.string().openapi({ description: 'Application version' }),
              uptime: z.int().openapi({ description: 'Server uptime in seconds' }),
              timezone: z
                .string()
                .openapi({ description: 'Server timezone (IANA, e.g. "America/New_York")' }),
              databases: z.array(
                z
                  .object({
                    id: z.int().openapi({ description: 'Database instance ID' }),
                    name: z.string().openapi({ description: 'Display name' }),
                    enabled: z.boolean().openapi({ description: 'Whether the database is active' }),
                    lastSyncedAt: z.iso
                      .datetime({ offset: true })
                      .nullable()
                      .openapi({ description: 'Last successful sync check timestamp' }),
                    syncStrategy: z
                      .enum(['manual', 'auto'])
                      .openapi({ description: 'Sync strategy' }),
                    counts: z
                      .object({
                        customFormats: z.int().openapi({ description: 'Number of custom formats' }),
                        qualityProfiles: z
                          .int()
                          .openapi({ description: 'Number of quality profiles' }),
                        regularExpressions: z
                          .int()
                          .openapi({ description: 'Number of regular expressions' }),
                        delayProfiles: z.int().openapi({ description: 'Number of delay profiles' }),
                      })
                      .openapi({
                        required: [
                          'customFormats',
                          'qualityProfiles',
                          'regularExpressions',
                          'delayProfiles',
                        ],
                      }),
                  })
                  .openapi({
                    required: ['id', 'name', 'enabled', 'lastSyncedAt', 'syncStrategy', 'counts'],
                  }),
              ),
              arrs: z.array(
                z
                  .object({
                    id: z.int().openapi({ description: 'Arr instance ID' }),
                    name: z.string().openapi({ description: 'Display name' }),
                    type: z
                      .enum(['radarr', 'sonarr'])
                      .openapi({ description: 'Arr application type' }),
                    enabled: z.boolean().openapi({ description: 'Whether the instance is active' }),
                    sync: z
                      .object({
                        qualityProfiles: z
                          .object({
                            count: z
                              .int()
                              .openapi({ description: 'Number of synced quality profiles' }),
                            status: z
                              .string()
                              .openapi({
                                description: 'Sync status (idle, pending, in_progress, failed)',
                              }),
                            lastSyncedAt: z.iso
                              .datetime({ offset: true })
                              .nullable()
                              .openapi({ description: 'Last successful sync timestamp' }),
                          })
                          .openapi({ required: ['count', 'status', 'lastSyncedAt'] }),
                        delayProfiles: z
                          .object({
                            configured: z
                              .boolean()
                              .openapi({
                                description: 'Whether this sync section has been configured',
                              }),
                            status: z
                              .string()
                              .openapi({
                                description: 'Sync status (idle, pending, in_progress, failed)',
                              }),
                            lastSyncedAt: z.iso
                              .datetime({ offset: true })
                              .nullable()
                              .openapi({ description: 'Last successful sync timestamp' }),
                          })
                          .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
                        mediaManagement: z
                          .object({
                            configured: z
                              .boolean()
                              .openapi({
                                description: 'Whether this sync section has been configured',
                              }),
                            status: z
                              .string()
                              .openapi({
                                description: 'Sync status (idle, pending, in_progress, failed)',
                              }),
                            lastSyncedAt: z.iso
                              .datetime({ offset: true })
                              .nullable()
                              .openapi({ description: 'Last successful sync timestamp' }),
                          })
                          .openapi({ required: ['configured', 'status', 'lastSyncedAt'] }),
                      })
                      .openapi({
                        required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'],
                      }),
                    drift: z
                      .xor([
                        z
                          .object({
                            lastCheckedAt: z.iso
                              .datetime({ offset: true })
                              .openapi({ description: 'When drift was last checked' }),
                            drifted: z
                              .boolean()
                              .openapi({ description: 'Whether any section has drifted' }),
                            details: z
                              .object({
                                qualityProfiles: z
                                  .int()
                                  .openapi({ description: 'Number of drifted quality profiles' }),
                                delayProfiles: z
                                  .int()
                                  .openapi({ description: 'Number of drifted delay profiles' }),
                                mediaManagement: z
                                  .int()
                                  .openapi({
                                    description: 'Number of drifted media management configs',
                                  }),
                              })
                              .openapi({
                                required: ['qualityProfiles', 'delayProfiles', 'mediaManagement'],
                              }),
                          })
                          .openapi({ required: ['lastCheckedAt', 'drifted', 'details'] }),
                        z.null().nullable(),
                      ])
                      .openapi({ description: 'Drift detection result (null until implemented)' }),
                  })
                  .openapi({ required: ['id', 'name', 'type', 'enabled', 'sync', 'drift'] }),
              ),
              jobs: z
                .object({
                  active: z.int().openapi({ description: 'Number of currently running jobs' }),
                  queued: z.int().openapi({ description: 'Number of queued jobs' }),
                  nextRunAt: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .openapi({ description: 'Earliest scheduled job run time' }),
                })
                .openapi({ required: ['active', 'queued', 'nextRunAt'] }),
              backups: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether automatic backups are enabled' }),
                  lastBackupAt: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .openapi({ description: 'Timestamp of last backup' }),
                })
                .openapi({ required: ['enabled', 'lastBackupAt'] }),
              announcements: z
                .object({
                  unread: z
                    .int()
                    .openapi({
                      description:
                        "Number of unread, visible announcements. Visibility honours\n`withdrawn`, `expires_at`, and the running build's version bounds\n(`min_version` / `max_version`).\n",
                    }),
                })
                .openapi({ required: ['unread'] }),
            })
            .openapi({
              required: [
                'version',
                'uptime',
                'timezone',
                'databases',
                'arrs',
                'jobs',
                'backups',
                'announcements',
              ],
            }),
          example: {
            version: '2.0.0',
            uptime: 86400,
            timezone: 'America/New_York',
            databases: [
              {
                id: 1,
                name: 'Dictionarry',
                enabled: true,
                lastSyncedAt: '2026-04-09T12:00:00Z',
                syncStrategy: 'auto',
                counts: {
                  customFormats: 52,
                  qualityProfiles: 3,
                  regularExpressions: 120,
                  delayProfiles: 1,
                },
              },
            ],
            arrs: [
              {
                id: 1,
                name: 'Radarr',
                type: 'radarr',
                enabled: true,
                sync: {
                  qualityProfiles: {
                    count: 2,
                    status: 'idle',
                    lastSyncedAt: '2026-04-09T12:00:00Z',
                  },
                  delayProfiles: {
                    configured: true,
                    status: 'idle',
                    lastSyncedAt: '2026-04-09T12:00:00Z',
                  },
                  mediaManagement: {
                    configured: true,
                    status: 'idle',
                    lastSyncedAt: '2026-04-09T12:00:00Z',
                  },
                },
                drift: null,
              },
            ],
            jobs: { active: 0, queued: 2, nextRunAt: '2026-04-09T13:00:00Z' },
            backups: { enabled: true, lastBackupAt: '2026-04-09T00:00:00Z' },
            announcements: { unread: 2 },
          },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to System' },
        },
      },
    },
  },
})

export const getOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/openapi.json',
  tags: ['System'],
  summary: 'OpenAPI Specification',
  description:
    'Returns the resolved OpenAPI 3.1 spec as a single JSON document.\nUseful for generating client SDKs or feeding to documentation tools.\n',
  operationId: 'getOpenApiSpec',
  responses: {
    200: {
      description: 'OpenAPI specification',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to System' },
        },
      },
    },
  },
})

export const getJobsIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{id}',
  tags: ['Jobs'],
  summary: 'Get Job Status',
  description:
    'Returns the current status of a job queue entry.\n\n**Use cases:**\n- Polling for completion after creating a backup\n- Checking if a scheduled job has run\n- Inspecting job errors after failure\n\n**Behavior:**\n- Returns the job queue record with its current status\n- If the job has executed, `result` includes the latest run history\n- If the job is still queued or running, `result` is null\n',
  operationId: 'getJob',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Job queue ID (returned by endpoints that create jobs)',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Job found',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.int().openapi({ description: 'Job queue ID' }),
              jobType: z
                .string()
                .openapi({ description: 'Job type identifier (e.g. backup.create, arr.sync)' }),
              status: z
                .enum(['queued', 'running', 'success', 'failed', 'cancelled'])
                .openapi({ description: 'Current state of the job in the queue' }),
              source: z
                .enum(['manual', 'schedule', 'system'])
                .openapi({ description: 'How the job was triggered' }),
              createdAt: z.string().openapi({ description: 'When the job was enqueued' }),
              startedAt: z
                .string()
                .nullable()
                .openapi({ description: 'When execution started (null if still queued)' }),
              finishedAt: z
                .string()
                .nullable()
                .openapi({ description: 'When execution finished (null if not yet complete)' }),
              result: z
                .xor([
                  z
                    .object({
                      status: z
                        .enum(['success', 'failure', 'skipped', 'cancelled'])
                        .openapi({ description: 'Outcome of the job execution' }),
                      output: z
                        .string()
                        .nullable()
                        .openapi({ description: 'Human-readable output from the handler' }),
                      error: z
                        .string()
                        .nullable()
                        .openapi({ description: 'Error message if the job failed' }),
                      durationMs: z
                        .int()
                        .openapi({ description: 'Execution time in milliseconds' }),
                    })
                    .openapi({ required: ['status', 'output', 'error', 'durationMs'] }),
                  z.null().nullable(),
                ])
                .openapi({
                  description: 'Latest run result, or null if the job has not executed yet',
                }),
            })
            .openapi({
              required: [
                'id',
                'jobType',
                'status',
                'source',
                'createdAt',
                'startedAt',
                'finishedAt',
                'result',
              ],
            }),
          example: {
            id: 42,
            jobType: 'backup.create',
            status: 'success',
            source: 'manual',
            createdAt: '2026-03-15T10:00:00.000Z',
            startedAt: '2026-03-15T10:00:01.000Z',
            finishedAt: '2026-03-15T10:00:05.000Z',
            result: {
              status: 'success',
              output: 'Backup created: backup-2026-03-15-100005.tar.gz (12.34 MB)',
              error: null,
              durationMs: 4000,
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid job ID (non-numeric or less than 1)',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Invalid job ID' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Jobs' },
        },
      },
    },
    404: {
      description: 'Job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Job not found' },
        },
      },
    },
  },
})

export const getBackupsRoute = createRoute({
  method: 'get',
  path: '/backups',
  tags: ['Backups'],
  summary: 'List Backups',
  operationId: 'listBackups',
  responses: {
    200: {
      description: 'List of backup files, sorted newest first',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                filename: z
                  .string()
                  .openapi({
                    description: 'Backup archive filename',
                    example: 'backup-2026-03-15-100005.tar.gz',
                  }),
                created: z.iso
                  .datetime({ offset: true })
                  .openapi({ description: 'File modification time (when the backup was created)' }),
                size: z.int().openapi({ description: 'File size in bytes' }),
                sizeFormatted: z
                  .string()
                  .openapi({ description: 'Human-readable file size', example: '12.34 MB' }),
              })
              .openapi({ required: ['filename', 'created', 'size', 'sizeFormatted'] }),
          ),
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Backups' },
        },
      },
    },
  },
})

export const postBackupsRoute = createRoute({
  method: 'post',
  path: '/backups',
  tags: ['Backups'],
  summary: 'Create Backup',
  description:
    'Async. Enqueues a `backup.create` job and returns 202 with the job ID.\nPoll `GET /api/v1/jobs/{jobId}` for completion. The backup includes a\nsanitized database copy with all secrets stripped.\n',
  operationId: 'createBackup',
  responses: {
    202: {
      description: 'Backup job enqueued',
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: z
                .int()
                .openapi({
                  description: 'Job queue ID. Poll GET /api/v1/jobs/{jobId} for status.',
                }),
            })
            .openapi({ required: ['jobId'] }),
          example: { jobId: 42 },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Backups' },
        },
      },
    },
  },
})

export const getBackupsFilenameRoute = createRoute({
  method: 'get',
  path: '/backups/{filename}',
  tags: ['Backups'],
  summary: 'Download Backup',
  description:
    'Download a backup archive. The local file on disk is full-fidelity, but\nthe downloaded copy is sanitized on the fly so it is safer to share.\nThe following are removed from the downloaded archive:\n\n- Arr instances (URLs, API keys, sync configs, drift state, rename and\n  cleanup history)\n- Notification services (webhook URLs, tokens, history)\n- User accounts and active sessions\n- Personal access tokens for linked databases\n- AI and TMDB API keys\n\nThe local archive on the server is not modified. Restoring the\ndownloaded file on a different host will require re-adding the removed\nitems.\n',
  operationId: 'downloadBackup',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            name: 'filename',
            in: 'path',
            required: true,
            description: 'Backup filename (must match `backup-*.tar.gz`)',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sanitized backup file download',
      content: {
        'application/gzip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
      headers: z.object({
        'Content-Disposition': z
          .string()
          .exactOptional()
          .openapi({
            example: 'attachment; filename="backup-2026-03-15-100005.tar.gz"',
            param: { required: false },
          }),
      }),
    },
    400: {
      description: 'Invalid filename or path traversal attempt',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Invalid filename' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Backups' },
        },
      },
    },
    404: {
      description: 'Backup file not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Backup file not found' },
        },
      },
    },
  },
})

export const deleteBackupsFilenameRoute = createRoute({
  method: 'delete',
  path: '/backups/{filename}',
  tags: ['Backups'],
  summary: 'Delete Backup',
  operationId: 'deleteBackup',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            name: 'filename',
            in: 'path',
            required: true,
            description: 'Backup filename',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Backup deleted',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().openapi({ example: true }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Invalid filename or path traversal attempt',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Invalid filename' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Backups' },
        },
      },
    },
    404: {
      description: 'Backup file not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Backup file not found' },
        },
      },
    },
  },
})

export const postBackupsUploadRoute = createRoute({
  method: 'post',
  path: '/backups/upload',
  tags: ['Backups'],
  summary: 'Upload Backup',
  description:
    'Only `.tar.gz` files, max 1GB. Archive contents are scanned for path\ntraversal entries (zip slip protection). Files without a `backup-` prefix\nare renamed to `backup-uploaded-{timestamp}.tar.gz`. Duplicates rejected.\n',
  operationId: 'uploadBackup',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The `.tar.gz` backup archive to upload',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Backup uploaded',
      content: {
        'application/json': {
          schema: z
            .object({
              filename: z
                .string()
                .openapi({ description: 'Stored filename (may differ from upload name)' }),
              size: z.int().openapi({ description: 'File size in bytes' }),
              sizeFormatted: z.string().openapi({ description: 'Human-readable file size' }),
            })
            .openapi({ required: ['filename', 'size', 'sizeFormatted'] }),
          example: {
            filename: 'backup-uploaded-1710504000000.tar.gz',
            size: 12345678,
            sizeFormatted: '11.77 MB',
          },
        },
      },
    },
    400: {
      description: 'Invalid file (wrong type, too large, zip slip, or duplicate)',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Invalid file type. Only .tar.gz files are allowed.' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Backups' },
        },
      },
    },
  },
})

export const getBackupsSettingsRoute = createRoute({
  method: 'get',
  path: '/backups/settings',
  tags: ['Backups'],
  summary: 'Get Backup Settings',
  operationId: 'getBackupSettings',
  responses: {
    200: {
      description: 'Current backup settings',
      content: {
        'application/json': {
          schema: z
            .object({
              schedule: z
                .enum(['hourly', 'daily', 'weekly', 'monthly'])
                .openapi({ description: 'How often automatic backups run' }),
              retentionDays: z
                .int()
                .min(1)
                .max(365)
                .openapi({ description: 'Days to keep backups before cleanup deletes them' }),
              enabled: z
                .boolean()
                .openapi({ description: 'Whether automatic backups are enabled' }),
              includeDatabase: z
                .boolean()
                .openapi({ description: 'Whether to include the database in backups' }),
              compressionEnabled: z
                .boolean()
                .openapi({ description: 'Whether backup compression is enabled' }),
            })
            .openapi({
              required: [
                'schedule',
                'retentionDays',
                'enabled',
                'includeDatabase',
                'compressionEnabled',
              ],
            }),
          example: {
            schedule: 'daily',
            retentionDays: 30,
            enabled: true,
            includeDatabase: true,
            compressionEnabled: true,
          },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Backups' },
        },
      },
    },
  },
})

export const patchBackupsSettingsRoute = createRoute({
  method: 'patch',
  path: '/backups/settings',
  tags: ['Backups'],
  summary: 'Update Backup Settings',
  description:
    'Partial update. After saving, backup jobs are rescheduled to match the\nnew settings.\n',
  operationId: 'updateBackupSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              schedule: z.enum(['hourly', 'daily', 'weekly', 'monthly']).exactOptional(),
              retentionDays: z.int().min(1).max(365).exactOptional(),
              enabled: z.boolean().exactOptional(),
            })
            .openapi({
              description: 'All fields are optional. Only provided fields are updated.',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated backup settings',
      content: {
        'application/json': {
          schema: z
            .object({
              schedule: z
                .enum(['hourly', 'daily', 'weekly', 'monthly'])
                .openapi({ description: 'How often automatic backups run' }),
              retentionDays: z
                .int()
                .min(1)
                .max(365)
                .openapi({ description: 'Days to keep backups before cleanup deletes them' }),
              enabled: z
                .boolean()
                .openapi({ description: 'Whether automatic backups are enabled' }),
              includeDatabase: z
                .boolean()
                .openapi({ description: 'Whether to include the database in backups' }),
              compressionEnabled: z
                .boolean()
                .openapi({ description: 'Whether backup compression is enabled' }),
            })
            .openapi({
              required: [
                'schedule',
                'retentionDays',
                'enabled',
                'includeDatabase',
                'compressionEnabled',
              ],
            }),
        },
      },
    },
    400: {
      description: 'Invalid input (bad schedule, retention out of range, empty body)',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'retentionDays must be between 1 and 365' },
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have write access to Backups' },
        },
      },
    },
  },
})

export const getAnnouncementsRoute = createRoute({
  method: 'get',
  path: '/announcements',
  tags: ['Announcements'],
  summary: 'List Announcements',
  description:
    'Visible announcements only: withdrawn, expired, and version-incompatible\nentries are filtered out server-side. Bodies are not included; use the\ndetail endpoint to fetch one.\n',
  operationId: 'listAnnouncements',
  responses: {
    200: {
      description: 'Visible announcements, newest first.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.string().openapi({ description: 'ULID, immutable once published.' }),
                title: z.string(),
                severity: z
                  .enum(['info', 'warning', 'critical'])
                  .openapi({
                    description:
                      'Severity level. `critical` is reserved for genuine break-glass messages.',
                  }),
                publishedAt: z.iso
                  .datetime({ offset: true })
                  .openapi({ description: 'ISO-8601 UTC. Drives sort order.' }),
                expiresAt: z.iso
                  .datetime({ offset: true })
                  .nullable()
                  .openapi({ description: 'Null = no expiry.' }),
                minVersion: z
                  .string()
                  .nullable()
                  .openapi({
                    description: 'Minimum running version for this announcement to apply.',
                  }),
                maxVersion: z
                  .string()
                  .nullable()
                  .openapi({
                    description: 'Maximum running version for this announcement to apply.',
                  }),
                link: z
                  .url()
                  .nullable()
                  .openapi({ description: 'Optional external "Read more" URL.' }),
                readAt: z.iso
                  .datetime({ offset: true })
                  .nullable()
                  .openapi({
                    description: 'When the announcement was opened in the app. Null = unread.',
                  }),
              })
              .openapi({
                description: 'Announcement without body. Returned by the list endpoint.',
                required: [
                  'id',
                  'title',
                  'severity',
                  'publishedAt',
                  'expiresAt',
                  'minVersion',
                  'maxVersion',
                  'link',
                  'readAt',
                ],
              }),
          ),
          example: [
            {
              id: '01HXYZ0000000000000000000A',
              title: 'API v1 migration landing in 2.4',
              severity: 'warning',
              publishedAt: '2026-04-10T10:00:00Z',
              expiresAt: null,
              minVersion: '2.0.0',
              maxVersion: null,
              link: 'https://github.com/Dictionarry-Hub/profilarr/discussions/999',
              readAt: null,
            },
          ],
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Announcements' },
        },
      },
    },
  },
})

export const getAnnouncementsIdRoute = createRoute({
  method: 'get',
  path: '/announcements/{id}',
  tags: ['Announcements'],
  summary: 'Get Announcement',
  description:
    'Returns the full announcement including its markdown body. The body\nis lazy-fetched from the bulletin repo on first call and cached\nlocally; subsequent calls read from cache.\n\n404 is returned for unknown ids and for ids that have not yet been\ningested by the fetch job (e.g. calling the API between a new\nbulletin PR merging and the next scheduled reconcile).\n',
  operationId: 'getAnnouncement',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ULID of the announcement.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Announcement detail with body.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              title: z.string(),
              severity: z
                .enum(['info', 'warning', 'critical'])
                .openapi({
                  description:
                    'Severity level. `critical` is reserved for genuine break-glass messages.',
                }),
              publishedAt: z.iso.datetime({ offset: true }),
              expiresAt: z.iso.datetime({ offset: true }).nullable(),
              minVersion: z.string().nullable(),
              maxVersion: z.string().nullable(),
              link: z.url().nullable(),
              readAt: z.iso.datetime({ offset: true }).nullable(),
              body: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'Raw markdown body. Lazy-fetched from the bulletin on first call.\nMay be null briefly if the lazy fetch fails; subsequent calls retry.\n',
                }),
            })
            .openapi({
              description:
                'Announcement with the full markdown body. Returned by the detail endpoint.',
              required: [
                'id',
                'title',
                'severity',
                'publishedAt',
                'expiresAt',
                'minVersion',
                'maxVersion',
                'link',
                'readAt',
                'body',
              ],
            }),
        },
      },
    },
    401: {
      description: 'Not authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Unauthorized' },
        },
      },
    },
    403: {
      description: 'API key does not have the required permission',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'API key does not have read access to Announcements' },
        },
      },
    },
    404: {
      description: 'Announcement not found.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ description: 'Error message', example: 'Unauthorized' }),
            })
            .openapi({ required: ['error'] }),
          example: { error: 'Announcement not found' },
        },
      },
    },
  },
})
