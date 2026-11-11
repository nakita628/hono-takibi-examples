import { createRoute, z } from '@hono/zod-openapi'

const AuthorizationErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Authorization Error': {
          value: { success: false, error: 'You must be logged in to do this.' },
        },
      },
    },
  },
}

const ForbiddenErrorResponse = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: z
        .object({
          success: z.boolean().exactOptional(),
          error: z.string().exactOptional(),
          errorType: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
      examples: {
        'Permission Error': {
          value: {
            success: false,
            error: 'User does not have the permissions required for this action',
            errorType: 'error-forbidden',
          },
        },
      },
    },
  },
}

const KeyErrorResponse = {
  description: 'Bad Request',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Missing key': { value: { success: false, error: "Match error: Missing key 'start'" } },
        'Example 2': {
          value: {
            success: false,
            error: 'Match error: Failed Match.Where validation in field start',
          },
        },
      },
    },
  },
}

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
      examples: { 'Example 1': { value: { success: true } } },
    },
  },
}

const StartParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'start',
      in: 'query',
      description: 'The start date.',
      required: true,
      schema: { type: 'string' },
      example: '2023-10-29T14:48:00.000Z',
    },
  })

const EndParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'end',
      in: 'query',
      description: 'The end date.',
      required: true,
      schema: { type: 'string' },
      example: '2023-11-05T14:48:00.000Z',
    },
  })

const AuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The token of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f',
    },
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The user ID of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'rbAXPnMktTFbNpwtJ',
    },
  })

const CountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'count',
      in: 'query',
      required: false,
      schema: { type: 'integer' },
      example: 50,
      description:
        'The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      required: false,
      schema: { type: 'integer' },
      description:
        'Number of items to "skip" in the query, i.e. requests return `count` items, skipping the first `offset` items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const SortParamsSchema = z
  .any()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      required: false,
      schema: {},
      description:
        'List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{"value": -1, "_id": 1}`.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

export const getApiV1StatisticsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/statistics.list',
  tags: ['Statistics'],
  summary: 'Get Statistics List',
  description:
    'Get statistics about the Rocket.Chat workspace. \n\nPermission required: `view-statistics` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters, retired OAuth provider statistics, and the `allowUnsafeQueryAndFieldsApiParamsEnabled` field. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |\n|8.7.0             | Added the `fips` field to statistics records. |        \n|0.51.0            | Added       |',
  operationId: 'get-api-v1-statistics.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              statistics: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      wizard: z
                        .object({
                          organizationType: z.string().exactOptional(),
                          industry: z.string().exactOptional(),
                          size: z.string().exactOptional(),
                          country: z.string().exactOptional(),
                          language: z.string().exactOptional(),
                          serverType: z.string().exactOptional(),
                          registerServer: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueId: z.string().exactOptional(),
                      installedAt: z.string().exactOptional(),
                      deploymentFingerprintHash: z.string().exactOptional(),
                      deploymentFingerprintVerified: z.boolean().exactOptional(),
                      version: z.string().exactOptional(),
                      tag: z.string().exactOptional(),
                      branch: z.string().exactOptional(),
                      totalUsers: z.int().exactOptional(),
                      activeUsers: z.int().exactOptional(),
                      activeGuests: z.int().exactOptional(),
                      nonActiveUsers: z.int().exactOptional(),
                      appUsers: z.int().exactOptional(),
                      onlineUsers: z.int().exactOptional(),
                      awayUsers: z.int().exactOptional(),
                      busyUsers: z.int().exactOptional(),
                      totalConnectedUsers: z.int().exactOptional(),
                      offlineUsers: z.int().exactOptional(),
                      userLanguages: z
                        .object({ none: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      totalRooms: z.int().exactOptional(),
                      totalChannels: z.int().exactOptional(),
                      totalPrivateGroups: z.int().exactOptional(),
                      totalDirect: z.int().exactOptional(),
                      totalLivechat: z.int().exactOptional(),
                      totalDiscussions: z.int().exactOptional(),
                      totalThreads: z.int().exactOptional(),
                      totalLivechatVisitors: z.int().exactOptional(),
                      totalLivechatAgents: z.int().exactOptional(),
                      totalLivechatManagers: z.int().exactOptional(),
                      livechatEnabled: z.boolean().exactOptional(),
                      isDepartmentRemovalEnabled: z.boolean().exactOptional(),
                      omnichannelSources: z.array(z.looseObject({})).exactOptional(),
                      totalLivechatRoomsWithDepartment: z.int().exactOptional(),
                      departments: z.int().exactOptional(),
                      totalTriggers: z.int().exactOptional(),
                      archivedDepartments: z.int().exactOptional(),
                      totalCustomFields: z.int().exactOptional(),
                      totalLivechatPublicCustomFields: z.int().exactOptional(),
                      livechatAutomaticForwardingUnansweredChats: z.boolean().exactOptional(),
                      routingAlgorithm: z.string().exactOptional(),
                      onHoldEnabled: z.string().exactOptional(),
                      lastChattedAgentPreferred: z.string().exactOptional(),
                      assignNewConversationsToContactManager: z.string().exactOptional(),
                      visitorAbandonment: z.string().exactOptional(),
                      emailInboxes: z.int().exactOptional(),
                      BusinessHours: z
                        .object({
                          total: z.int().exactOptional(),
                          strategy: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      chatsOnHold: z.int().exactOptional(),
                      uniqueContactsOfLastMonth: z
                        .object({
                          contactsCount: z.int().exactOptional(),
                          conversationsCount: z.int().exactOptional(),
                          sources: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      omnichannelContactsBySource: z
                        .object({
                          contactsCount: z.int().exactOptional(),
                          conversationsCount: z.int().exactOptional(),
                          sources: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      totalChannelMessages: z.int().exactOptional(),
                      uniqueContactsOfYesterday: z
                        .object({
                          contactsCount: z.int().exactOptional(),
                          conversationsCount: z.int().exactOptional(),
                          sources: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueContactsOfLastWeek: z
                        .object({
                          contactsCount: z.int().exactOptional(),
                          conversationsCount: z.int().exactOptional(),
                          sources: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      totalPrivateGroupMessages: z.int().exactOptional(),
                      totalDiscussionsMessages: z.int().exactOptional(),
                      totalDirectMessages: z.int().exactOptional(),
                      totalLivechatMessages: z.int().exactOptional(),
                      totalMessages: z.int().exactOptional(),
                      lastLogin: z.string().exactOptional(),
                      lastMessageSentAt: z.string().exactOptional(),
                      lastSeenSubscription: z.string().exactOptional(),
                      os: z
                        .object({
                          type: z.string().exactOptional(),
                          platform: z.string().exactOptional(),
                          arch: z.string().exactOptional(),
                          release: z.string().exactOptional(),
                          uptime: z.number().exactOptional(),
                          loadavg: z.array(z.number()).exactOptional(),
                          totalmem: z.int().exactOptional(),
                          freemem: z.int().exactOptional(),
                          cpus: z
                            .array(
                              z
                                .object({
                                  model: z.string().exactOptional(),
                                  speed: z.int().exactOptional(),
                                  times: z
                                    .object({
                                      user: z.int().exactOptional(),
                                      nice: z.int().exactOptional(),
                                      sys: z.int().exactOptional(),
                                      idle: z.int().exactOptional(),
                                      irq: z.int().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      process: z
                        .object({
                          nodeVersion: z.string().exactOptional(),
                          pid: z.int().exactOptional(),
                          uptime: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      deploy: z
                        .object({
                          method: z.string().exactOptional(),
                          platform: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      fips: z.boolean().exactOptional(),
                      readReceiptsEnabled: z.boolean().exactOptional(),
                      readReceiptsDetailed: z.boolean().exactOptional(),
                      enterpriseReady: z.boolean().exactOptional(),
                      fileStoreType: z.string().exactOptional(),
                      uploadsTotal: z.int().exactOptional(),
                      uploadsTotalSize: z.int().exactOptional(),
                      migration: z
                        .object({
                          _id: z.string().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                          locked: z.boolean().exactOptional(),
                          version: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      instanceCount: z.int().exactOptional(),
                      msEnabled: z.boolean().exactOptional(),
                      oplogEnabled: z.boolean().exactOptional(),
                      mongoVersion: z.string().exactOptional(),
                      mongoStorageEngine: z.string().exactOptional(),
                      apps: z
                        .object({
                          engineVersion: z.string().exactOptional(),
                          totalInstalled: z.int().exactOptional(),
                          totalActive: z.int().exactOptional(),
                          totalFailed: z.int().exactOptional(),
                          totalPrivateApps: z.int().exactOptional(),
                          totalPrivateAppsEnabled: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueUsersOfYesterday: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueDevicesOfYesterday: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueUsersOfLastMonth: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueUsersOfLastWeek: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueOSOfYesterday: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueDevicesOfLastMonth: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueOSOfLastMonth: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueDevicesOfLastWeek: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniqueOSOfLastWeek: z
                        .object({
                          year: z.int().exactOptional(),
                          month: z.int().exactOptional(),
                          day: z.int().exactOptional(),
                          data: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      services: z
                        .object({
                          ldap: z
                            .object({
                              users: z.int().exactOptional(),
                              enabled: z.boolean().exactOptional(),
                              loginFallback: z.boolean().exactOptional(),
                              encryption: z.string().exactOptional(),
                              mergeUsers: z.boolean().exactOptional(),
                              syncRoles: z.string().exactOptional(),
                              syncRolesAutoRemove: z.string().exactOptional(),
                              syncData: z.string().exactOptional(),
                              syncChannels: z.string().exactOptional(),
                              syncAvatar: z.boolean().exactOptional(),
                              groupFilter: z.boolean().exactOptional(),
                              backgroundSync: z
                                .object({
                                  enabled: z.string().exactOptional(),
                                  interval: z.string().exactOptional(),
                                  newUsers: z.string().exactOptional(),
                                  existingUsers: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              ee: z
                                .object({
                                  syncActiveState: z.string().exactOptional(),
                                  syncTeams: z.string().exactOptional(),
                                  syncRoles: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          saml: z
                            .object({
                              enabled: z.string().exactOptional(),
                              users: z.int().exactOptional(),
                              signatureValidationType: z.string().exactOptional(),
                              generateUsername: z.string().exactOptional(),
                              updateSubscriptionsOnLogin: z.string().exactOptional(),
                              syncRoles: z.string().exactOptional(),
                              userDataCustomFieldMap: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          cas: z
                            .object({
                              enabled: z.boolean().exactOptional(),
                              users: z.int().exactOptional(),
                              allowUserCreation: z.boolean().exactOptional(),
                              alwaysSyncUserData: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          oauth: z
                            .object({
                              apple: z
                                .object({
                                  enabled: z.boolean().exactOptional(),
                                  users: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              github: z
                                .object({
                                  enabled: z.boolean().exactOptional(),
                                  users: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              gitlab: z
                                .object({
                                  enabled: z.boolean().exactOptional(),
                                  users: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              google: z
                                .object({
                                  enabled: z.boolean().exactOptional(),
                                  users: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              nextcloud: z
                                .object({
                                  enabled: z.boolean().exactOptional(),
                                  users: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              custom: z.looseObject({}).exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      importer: z
                        .object({
                          totalCSVImportedUsers: z.int().exactOptional(),
                          totalHipchatEnterpriseImportedUsers: z.int().exactOptional(),
                          totalSlackImportedUsers: z.int().exactOptional(),
                          totalSlackUsersImportedUsers: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      videoConf: z
                        .object({
                          videoConference: z
                            .object({
                              started: z.int().exactOptional(),
                              ended: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          direct: z
                            .object({
                              calling: z.int().exactOptional(),
                              started: z.int().exactOptional(),
                              ended: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          livechat: z
                            .object({
                              started: z.int().exactOptional(),
                              ended: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          settings: z
                            .object({
                              provider: z.string().exactOptional(),
                              dms: z.string().exactOptional(),
                              channels: z.string().exactOptional(),
                              groups: z.string().exactOptional(),
                              teams: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      contactVerification: z
                        .object({
                          totalContacts: z.int().exactOptional(),
                          totalUnknownContacts: z.int().exactOptional(),
                          totalMergedContacts: z.string().exactOptional(),
                          totalConflicts: z.int().exactOptional(),
                          totalResolvedConflicts: z.string().exactOptional(),
                          totalBlockedContacts: z.int().exactOptional(),
                          totalPartiallyBlockedContacts: z.int().exactOptional(),
                          totalFullyBlockedContacts: z.int().exactOptional(),
                          totalVerifiedContacts: z.int().exactOptional(),
                          avgChannelsPerContact: z.int().exactOptional(),
                          totalContactsWithoutChannels: z.int().exactOptional(),
                          totalImportedContacts: z.string().exactOptional(),
                          totalUpsellViews: z.string().exactOptional(),
                          totalUpsellClicks: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      dashboardCount: z.int().exactOptional(),
                      messageAuditApply: z.int().exactOptional(),
                      messageAuditLoad: z.int().exactOptional(),
                      joinJitsiButton: z.int().exactOptional(),
                      slashCommandsJitsi: z.int().exactOptional(),
                      settings: z
                        .object({
                          accounts: z
                            .object({ account2fa: z.boolean().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                          cannedResponses: z
                            .object({ cannedResponsesEnabled: z.boolean().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                          e2ee: z
                            .object({
                              e2e: z.boolean().exactOptional(),
                              e2eDefaultDirectRoom: z.boolean().exactOptional(),
                              e2eDefaultPrivateRoom: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          email: z
                            .object({
                              smtp: z
                                .object({
                                  smtpHost: z.string().exactOptional(),
                                  smtpPort: z.string().exactOptional(),
                                  fromEmail: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          fileUpload: z
                            .object({ fileUploadEnable: z.boolean().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                          general: z
                            .object({
                              apps: z
                                .object({
                                  frameworkDevMode: z.string().exactOptional(),
                                  frameworkEnable: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              nps: z
                                .object({ surveyEnabled: z.boolean().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                              update: z
                                .object({ updateChecker: z.boolean().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          liveStreamAndBroadcasting: z
                            .object({
                              liveStream: z.string().exactOptional(),
                              broadcasting: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          message: z
                            .object({
                              allowEditing: z.boolean().exactOptional(),
                              allowDeleting: z.boolean().exactOptional(),
                              allowUnrecognizedSlashCommand: z.boolean().exactOptional(),
                              allowBadWordsFilter: z.boolean().exactOptional(),
                              readReceiptEnabled: z.boolean().exactOptional(),
                              readReceiptStoreUsers: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          push: z
                            .object({ pushEnable: z.boolean().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                          search: z
                            .object({
                              defaultProvider: z
                                .object({ globalSearchEnabled: z.string().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          threads: z
                            .object({ threadsEnabled: z.boolean().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                          webRTC: z
                            .object({
                              webRTCEnableChannel: z.string().exactOptional(),
                              webRTCEnablePrivate: z.string().exactOptional(),
                              webRTCEnableDirect: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      totalBroadcastRooms: z.int().exactOptional(),
                      totalTriggeredEmails: z.int().exactOptional(),
                      pushQueue: z.int().exactOptional(),
                      integrations: z
                        .object({
                          totalIntegrations: z.int().exactOptional(),
                          totalIncoming: z.int().exactOptional(),
                          totalIncomingActive: z.int().exactOptional(),
                          totalOutgoing: z.int().exactOptional(),
                          totalOutgoingActive: z.int().exactOptional(),
                          totalWithScriptEnabled: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      enterprise: z
                        .object({
                          modules: z.array(z.string()).exactOptional(),
                          tags: z.array(z.string()).exactOptional(),
                          seatRequests: z.int().exactOptional(),
                          livechatTags: z.int().exactOptional(),
                          cannedResponses: z.int().exactOptional(),
                          slas: z.int().exactOptional(),
                          omnichannelRoomsWithPriorities: z.int().exactOptional(),
                          omnichannelRoomsWithSlas: z.int().exactOptional(),
                          businessUnits: z.int().exactOptional(),
                          omnichannelPdfTranscriptSucceeded: z.int().exactOptional(),
                          livechatMonitors: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      teams: z
                        .object({
                          totalTeams: z.int().exactOptional(),
                          totalRoomsInsideTeams: z.int().exactOptional(),
                          totalDefaultRoomsInsideTeams: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      totalRoomsWithStarred: z.int().exactOptional(),
                      totalRoomsWithPinned: z.int().exactOptional(),
                      totalUserTOTP: z.int().exactOptional(),
                      totalUserEmail2fa: z.int().exactOptional(),
                      totalPinned: z.int().exactOptional(),
                      totalStarred: z.int().exactOptional(),
                      totalLinkInvitation: z.int().exactOptional(),
                      totalLinkInvitationUses: z.int().exactOptional(),
                      totalEmailInvitation: z.int().exactOptional(),
                      totalE2ERooms: z.int().exactOptional(),
                      logoChange: z.boolean().exactOptional(),
                      showHomeButton: z.boolean().exactOptional(),
                      totalEncryptedMessages: z.int().exactOptional(),
                      totalManuallyAddedUsers: z.int().exactOptional(),
                      totalSubscriptionRoles: z.int().exactOptional(),
                      totalUserRoles: z.int().exactOptional(),
                      totalCustomRoles: z.int().exactOptional(),
                      totalWebRTCCalls: z.string().exactOptional(),
                      uncaughtExceptionsCount: z.int().exactOptional(),
                      push: z.int().exactOptional(),
                      pushSecured: z.boolean().exactOptional(),
                      homeTitleChanged: z.boolean().exactOptional(),
                      homeBodyChanged: z.boolean().exactOptional(),
                      customCSSChanged: z.boolean().exactOptional(),
                      onLogoutCustomScriptChanged: z.boolean().exactOptional(),
                      loggedOutCustomScriptChanged: z.boolean().exactOptional(),
                      loggedInCustomScriptChanged: z.boolean().exactOptional(),
                      dailyPeakConnections: z.int().exactOptional(),
                      maxMonthlyPeakConnections: z.int().exactOptional(),
                      matrixFederation: z
                        .object({
                          enabled: z.boolean().exactOptional(),
                          maximumSizeOfPublicRoomsUsers: z.boolean().exactOptional(),
                          biggestRoom: z.string().exactOptional(),
                          smallestRoom: z.string().exactOptional(),
                          amountOfExternalUsers: z.int().exactOptional(),
                          amountOfFederatedRooms: z.int().exactOptional(),
                          externalConnectedServers: z
                            .object({
                              quantity: z.int().exactOptional(),
                              servers: z.array(z.looseObject({})).exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      createdAt: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      statsToken: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                statistics: [
                  {
                    _id: '6a708537c8fc3c65b1808baf',
                    wizard: {
                      organizationType: '',
                      industry: '',
                      size: '',
                      country: '',
                      language: '',
                      serverType: '',
                      registerServer: false,
                    },
                    uniqueId: '2d3ad4fb-d515-4f09-8f02-0f186c8cc929',
                    installedAt: '2026-08-03T12:10:10.817Z',
                    deploymentFingerprintHash: '',
                    deploymentFingerprintVerified: true,
                    version: '8.7.0-rc.3',
                    tag: null,
                    branch: null,
                    totalUsers: 0,
                    activeUsers: 0,
                    activeGuests: 0,
                    nonActiveUsers: 0,
                    appUsers: 0,
                    onlineUsers: 0,
                    awayUsers: 0,
                    busyUsers: 0,
                    totalConnectedUsers: 0,
                    offlineUsers: 0,
                    userLanguages: { none: 0 },
                    totalRooms: 0,
                    totalChannels: 0,
                    totalPrivateGroups: 0,
                    totalDirect: 0,
                    totalLivechat: 0,
                    totalDiscussions: 0,
                    totalThreads: 0,
                    totalLivechatVisitors: 0,
                    totalLivechatAgents: 0,
                    totalLivechatManagers: 0,
                    livechatEnabled: true,
                    isDepartmentRemovalEnabled: false,
                    omnichannelSources: [],
                    totalLivechatRoomsWithDepartment: 0,
                    departments: 0,
                    totalTriggers: 0,
                    archivedDepartments: 0,
                    totalCustomFields: 0,
                    totalLivechatPublicCustomFields: 0,
                    livechatAutomaticForwardingUnansweredChats: true,
                    routingAlgorithm: 'Auto_Selection',
                    onHoldEnabled: null,
                    lastChattedAgentPreferred: null,
                    assignNewConversationsToContactManager: null,
                    visitorAbandonment: null,
                    emailInboxes: 0,
                    BusinessHours: { total: 0, strategy: '' },
                    chatsOnHold: 0,
                    uniqueContactsOfLastMonth: {
                      contactsCount: 0,
                      conversationsCount: 0,
                      sources: [],
                    },
                    omnichannelContactsBySource: {
                      contactsCount: 0,
                      conversationsCount: 0,
                      sources: [],
                    },
                    totalChannelMessages: 0,
                    uniqueContactsOfYesterday: {
                      contactsCount: 0,
                      conversationsCount: 0,
                      sources: [],
                    },
                    uniqueContactsOfLastWeek: {
                      contactsCount: 0,
                      conversationsCount: 0,
                      sources: [],
                    },
                    totalPrivateGroupMessages: 0,
                    totalDiscussionsMessages: 0,
                    totalDirectMessages: 0,
                    totalLivechatMessages: 0,
                    totalMessages: 0,
                    lastLogin: '',
                    lastMessageSentAt: null,
                    lastSeenSubscription: '',
                    os: {
                      type: 'Linux',
                      platform: 'linux',
                      arch: 'x64',
                      release: '6.17.0-1017-aws',
                      uptime: 2119.94,
                      loadavg: [6.92, 5.81, 3.52],
                      totalmem: 8220839936,
                      freemem: 3768729600,
                      cpus: [
                        {
                          model: 'AMD EPYC 7571',
                          speed: 0,
                          times: { user: 404110, nice: 0, sys: 206780, idle: 1425940, irq: 0 },
                        },
                        {
                          model: 'AMD EPYC 7571',
                          speed: 0,
                          times: { user: 416850, nice: 0, sys: 203030, idle: 1418740, irq: 0 },
                        },
                      ],
                    },
                    process: { nodeVersion: 'v22.22.3', pid: 1, uptime: 74.175831587 },
                    deploy: { method: 'docker', platform: 'helm-chart' },
                    fips: true,
                    readReceiptsEnabled: false,
                    readReceiptsDetailed: false,
                    enterpriseReady: true,
                    fileStoreType: 'GridFS',
                    uploadsTotal: 0,
                    uploadsTotalSize: 0,
                    migration: {
                      _id: 'control',
                      _updatedAt: '2026-08-03T12:10:13.492Z',
                      locked: false,
                      version: 335,
                    },
                    instanceCount: 0,
                    msEnabled: true,
                    oplogEnabled: false,
                    mongoVersion: '8.0.0',
                    mongoStorageEngine: 'unknown',
                    apps: {
                      engineVersion: '1.65.1-rc.0',
                      totalInstalled: 0,
                      totalActive: 0,
                      totalFailed: 0,
                      totalPrivateApps: 0,
                      totalPrivateAppsEnabled: 0,
                    },
                    uniqueUsersOfYesterday: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueDevicesOfYesterday: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueUsersOfLastMonth: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueUsersOfLastWeek: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueOSOfYesterday: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueDevicesOfLastMonth: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueOSOfLastMonth: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueDevicesOfLastWeek: { year: 2026, month: 8, day: 2, data: [] },
                    uniqueOSOfLastWeek: { year: 2026, month: 8, day: 2, data: [] },
                    services: {
                      ldap: {
                        users: 0,
                        enabled: false,
                        loginFallback: false,
                        encryption: 'plain',
                        mergeUsers: false,
                        syncRoles: null,
                        syncRolesAutoRemove: null,
                        syncData: null,
                        syncChannels: null,
                        syncAvatar: true,
                        groupFilter: false,
                        backgroundSync: {
                          enabled: null,
                          interval: null,
                          newUsers: null,
                          existingUsers: null,
                        },
                        ee: { syncActiveState: null, syncTeams: null, syncRoles: null },
                      },
                      saml: {
                        enabled: null,
                        users: 0,
                        signatureValidationType: null,
                        generateUsername: null,
                        updateSubscriptionsOnLogin: null,
                        syncRoles: null,
                        userDataCustomFieldMap: false,
                      },
                      cas: {
                        enabled: false,
                        users: 0,
                        allowUserCreation: true,
                        alwaysSyncUserData: true,
                      },
                      oauth: {
                        apple: { enabled: false, users: 0 },
                        github: { enabled: false, users: 0 },
                        gitlab: { enabled: false, users: 0 },
                        google: { enabled: false, users: 0 },
                        nextcloud: { enabled: false, users: 0 },
                        custom: {},
                      },
                    },
                    importer: {
                      totalCSVImportedUsers: 0,
                      totalHipchatEnterpriseImportedUsers: 0,
                      totalSlackImportedUsers: 0,
                      totalSlackUsersImportedUsers: 0,
                    },
                    videoConf: {
                      videoConference: { started: 0, ended: 0 },
                      direct: { calling: 0, started: 0, ended: 0 },
                      livechat: { started: 0, ended: 0 },
                      settings: {
                        provider: '',
                        dms: null,
                        channels: null,
                        groups: null,
                        teams: null,
                      },
                    },
                    contactVerification: {
                      totalContacts: 0,
                      totalUnknownContacts: 0,
                      totalMergedContacts: null,
                      totalConflicts: 0,
                      totalResolvedConflicts: null,
                      totalBlockedContacts: 0,
                      totalPartiallyBlockedContacts: 0,
                      totalFullyBlockedContacts: 0,
                      totalVerifiedContacts: 0,
                      avgChannelsPerContact: 0,
                      totalContactsWithoutChannels: 0,
                      totalImportedContacts: null,
                      totalUpsellViews: null,
                      totalUpsellClicks: null,
                    },
                    dashboardCount: 0,
                    messageAuditApply: 0,
                    messageAuditLoad: 0,
                    joinJitsiButton: 0,
                    slashCommandsJitsi: 0,
                    settings: {
                      accounts: { account2fa: true },
                      cannedResponses: { cannedResponsesEnabled: true },
                      e2ee: {
                        e2e: false,
                        e2eDefaultDirectRoom: false,
                        e2eDefaultPrivateRoom: false,
                      },
                      email: { smtp: { smtpHost: '', smtpPort: '', fromEmail: '' } },
                      fileUpload: { fileUploadEnable: true },
                      general: {
                        apps: { frameworkDevMode: null, frameworkEnable: null },
                        nps: { surveyEnabled: true },
                        update: { updateChecker: true },
                      },
                      liveStreamAndBroadcasting: { liveStream: null, broadcasting: null },
                      message: {
                        allowEditing: true,
                        allowDeleting: true,
                        allowUnrecognizedSlashCommand: false,
                        allowBadWordsFilter: false,
                        readReceiptEnabled: false,
                        readReceiptStoreUsers: false,
                      },
                      push: { pushEnable: true },
                      search: { defaultProvider: { globalSearchEnabled: null } },
                      threads: { threadsEnabled: true },
                      webRTC: {
                        webRTCEnableChannel: null,
                        webRTCEnablePrivate: null,
                        webRTCEnableDirect: null,
                      },
                    },
                    totalBroadcastRooms: 0,
                    totalTriggeredEmails: 0,
                    pushQueue: 0,
                    integrations: {
                      totalIntegrations: 0,
                      totalIncoming: 0,
                      totalIncomingActive: 0,
                      totalOutgoing: 0,
                      totalOutgoingActive: 0,
                      totalWithScriptEnabled: 0,
                    },
                    enterprise: {
                      modules: [
                        'auditing',
                        'canned-responses',
                        'ldap-enterprise',
                        'livechat-enterprise',
                        'voip-enterprise',
                        'omnichannel-mobile-enterprise',
                        'engagement-dashboard',
                        'push-privacy',
                        'scalability',
                        'teams-mention',
                        'saml-enterprise',
                        'oauth-enterprise',
                        'device-management',
                        'federation',
                        'videoconference-enterprise',
                        'message-read-receipt',
                        'outlook-calendar',
                        'hide-watermark',
                        'custom-roles',
                        'accessibility-certification',
                        'fips',
                      ],
                      tags: ['Commercial'],
                      seatRequests: 0,
                      livechatTags: 0,
                      cannedResponses: 0,
                      slas: 0,
                      omnichannelRoomsWithPriorities: 0,
                      omnichannelRoomsWithSlas: 0,
                      businessUnits: 0,
                      omnichannelPdfTranscriptSucceeded: 0,
                      livechatMonitors: 0,
                    },
                    teams: {
                      totalTeams: 0,
                      totalRoomsInsideTeams: 0,
                      totalDefaultRoomsInsideTeams: 0,
                    },
                    totalRoomsWithStarred: 0,
                    totalRoomsWithPinned: 0,
                    totalUserTOTP: 0,
                    totalUserEmail2fa: 0,
                    totalPinned: 0,
                    totalStarred: 0,
                    totalLinkInvitation: 0,
                    totalLinkInvitationUses: 0,
                    totalEmailInvitation: 0,
                    totalE2ERooms: 0,
                    logoChange: false,
                    showHomeButton: true,
                    totalEncryptedMessages: 0,
                    totalManuallyAddedUsers: 0,
                    totalSubscriptionRoles: 3,
                    totalUserRoles: 11,
                    totalCustomRoles: 0,
                    totalWebRTCCalls: null,
                    uncaughtExceptionsCount: 0,
                    push: 3,
                    pushSecured: false,
                    homeTitleChanged: false,
                    homeBodyChanged: false,
                    customCSSChanged: false,
                    onLogoutCustomScriptChanged: false,
                    loggedOutCustomScriptChanged: false,
                    loggedInCustomScriptChanged: false,
                    dailyPeakConnections: 0,
                    maxMonthlyPeakConnections: 0,
                    matrixFederation: {
                      enabled: false,
                      maximumSizeOfPublicRoomsUsers: false,
                      biggestRoom: null,
                      smallestRoom: null,
                      amountOfExternalUsers: 0,
                      amountOfFederatedRooms: 0,
                      externalConnectedServers: { quantity: 0, servers: [] },
                    },
                    createdAt: '2026-08-03T12:10:31.265Z',
                    _updatedAt: '2026-08-03T12:10:31.426Z',
                    statsToken:
                      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6IiIsInVuaXF1ZUlkIjoiMmQzYWQ0ZmItZDUxNS00ZjA5LThmMDItMGYxODZjOGNjOTI5IiwicmVjb3JkSWQiOiI2YTcwODUzN2M4ZmMzYzY1YjE4MDhiYWYiLCJ0aW1lc3RhbXAiOiIyMDI2LTA4LTAzVDEyOjEwOjMxLjQwNzk5NzEyOFoiLCJpbmZvIjp7InRvdGFsVXNlcnMiOjAsImFjdGl2ZVVzZXJzIjowLCJ0b3RhbENvbm5lY3RlZFVzZXJzIjowLCJvbW5pQ2hhbm5lbENvbnZlcnNhdGlvbnMiOjAsInRvdGFsUm9vbXMiOjAsInRvdGFsTWVzc2FnZXMiOjAsInVwbG9hZHNUb3RhbFNpemUiOjAsIm1pY3Jvc2VydmljZUVuYWJsZWQiOnRydWUsImZpbGVTdG9yZVR5cGUiOiJHcmlkRlMifX0.JnBb7z--brY2k00kIkC_Rp502P8wdKVcC2kAxEKK0OBFJlAgLM4ezZ5m_xG2w1wX3wCTNKnrjO3D5Mi-bzYNmNNBcJQbujP2uUGWMnr42UUAbyPY9VWKCf4L3H9cgzB9WjJX94KiVlwLjnbqle9TE0wAubP-NR1lzZn06GrnD9bAFSdz2E5lI4s6qozfUW5z8ZmSgXs5MBSbhBQczUbmQkQoj2XjKs5Mkqow0qLeBsCrc0F2m_92YeO1S6StRGvLIVyce-qvm0DLT8hXhpoJyRRgLz_3JyOzOE6hfxcgWI43YUZ4o4n7QruSYDhSFnAjuAlZjHasBCKPfs9ht9vRtQ',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: { success: false, error: 'error-not-allowed', errorType: 'error-forbidden' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1StatisticsRoute = createRoute({
  method: 'get',
  path: '/api/v1/statistics',
  tags: ['Statistics'],
  summary: 'Get Last Statistics',
  description:
    'Statistics about the Rocket.Chat workspace. \n\nPermission required: `view-statistics` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed retired OAuth provider statistics and the `allowUnsafeQueryAndFieldsApiParamsEnabled` field. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |\n|8.7.0             | Added the `fips` field to statistics records. |        \n|0.51.0            | Added       |',
  operationId: 'get-api-v1-statistics',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'refresh',
            in: 'query',
            description: 'Set to true to refresh the statistics.',
            schema: { type: 'boolean', example: true },
            required: false,
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              wizard: z
                .object({
                  organizationType: z.string().exactOptional(),
                  industry: z.string().exactOptional(),
                  size: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  language: z.string().exactOptional(),
                  serverType: z.string().exactOptional(),
                  registerServer: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueId: z.string().exactOptional(),
              installedAt: z.string().exactOptional(),
              deploymentFingerprintHash: z.string().exactOptional(),
              deploymentFingerprintVerified: z.boolean().exactOptional(),
              version: z.string().exactOptional(),
              tag: z.string().exactOptional(),
              branch: z.string().exactOptional(),
              totalUsers: z.int().exactOptional(),
              activeUsers: z.int().exactOptional(),
              activeGuests: z.int().exactOptional(),
              nonActiveUsers: z.int().exactOptional(),
              appUsers: z.int().exactOptional(),
              onlineUsers: z.int().exactOptional(),
              awayUsers: z.int().exactOptional(),
              busyUsers: z.int().exactOptional(),
              totalConnectedUsers: z.int().exactOptional(),
              offlineUsers: z.int().exactOptional(),
              userLanguages: z
                .object({ none: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              totalRooms: z.int().exactOptional(),
              totalChannels: z.int().exactOptional(),
              totalPrivateGroups: z.int().exactOptional(),
              totalDirect: z.int().exactOptional(),
              totalLivechat: z.int().exactOptional(),
              totalDiscussions: z.int().exactOptional(),
              totalThreads: z.int().exactOptional(),
              totalLivechatVisitors: z.int().exactOptional(),
              totalLivechatAgents: z.int().exactOptional(),
              totalLivechatManagers: z.int().exactOptional(),
              livechatEnabled: z.boolean().exactOptional(),
              isDepartmentRemovalEnabled: z.boolean().exactOptional(),
              omnichannelSources: z.array(z.looseObject({})).exactOptional(),
              totalLivechatRoomsWithDepartment: z.int().exactOptional(),
              departments: z.int().exactOptional(),
              totalTriggers: z.int().exactOptional(),
              archivedDepartments: z.int().exactOptional(),
              totalCustomFields: z.int().exactOptional(),
              totalLivechatPublicCustomFields: z.int().exactOptional(),
              livechatAutomaticForwardingUnansweredChats: z.boolean().exactOptional(),
              routingAlgorithm: z.string().exactOptional(),
              onHoldEnabled: z.string().exactOptional(),
              lastChattedAgentPreferred: z.string().exactOptional(),
              assignNewConversationsToContactManager: z.string().exactOptional(),
              visitorAbandonment: z.string().exactOptional(),
              emailInboxes: z.int().exactOptional(),
              BusinessHours: z
                .object({ total: z.int().exactOptional(), strategy: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              chatsOnHold: z.int().exactOptional(),
              uniqueContactsOfLastMonth: z
                .object({
                  contactsCount: z.int().exactOptional(),
                  conversationsCount: z.int().exactOptional(),
                  sources: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              omnichannelContactsBySource: z
                .object({
                  contactsCount: z.int().exactOptional(),
                  conversationsCount: z.int().exactOptional(),
                  sources: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              totalChannelMessages: z.int().exactOptional(),
              uniqueContactsOfYesterday: z
                .object({
                  contactsCount: z.int().exactOptional(),
                  conversationsCount: z.int().exactOptional(),
                  sources: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueContactsOfLastWeek: z
                .object({
                  contactsCount: z.int().exactOptional(),
                  conversationsCount: z.int().exactOptional(),
                  sources: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              totalPrivateGroupMessages: z.int().exactOptional(),
              totalDiscussionsMessages: z.int().exactOptional(),
              totalDirectMessages: z.int().exactOptional(),
              totalLivechatMessages: z.int().exactOptional(),
              totalMessages: z.int().exactOptional(),
              lastLogin: z.string().exactOptional(),
              lastMessageSentAt: z.string().exactOptional(),
              lastSeenSubscription: z.string().exactOptional(),
              os: z
                .object({
                  type: z.string().exactOptional(),
                  platform: z.string().exactOptional(),
                  arch: z.string().exactOptional(),
                  release: z.string().exactOptional(),
                  uptime: z.number().exactOptional(),
                  loadavg: z.array(z.number()).exactOptional(),
                  totalmem: z.int().exactOptional(),
                  freemem: z.int().exactOptional(),
                  cpus: z
                    .array(
                      z
                        .object({
                          model: z.string().exactOptional(),
                          speed: z.int().exactOptional(),
                          times: z
                            .object({
                              user: z.int().exactOptional(),
                              nice: z.int().exactOptional(),
                              sys: z.int().exactOptional(),
                              idle: z.int().exactOptional(),
                              irq: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              process: z
                .object({
                  nodeVersion: z.string().exactOptional(),
                  pid: z.int().exactOptional(),
                  uptime: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              deploy: z
                .object({
                  method: z.string().exactOptional(),
                  platform: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              fips: z.boolean().exactOptional(),
              readReceiptsEnabled: z.boolean().exactOptional(),
              readReceiptsDetailed: z.boolean().exactOptional(),
              enterpriseReady: z.boolean().exactOptional(),
              fileStoreType: z.string().exactOptional(),
              uploadsTotal: z.int().exactOptional(),
              uploadsTotalSize: z.int().exactOptional(),
              migration: z
                .object({
                  _id: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  locked: z.boolean().exactOptional(),
                  version: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              instanceCount: z.int().exactOptional(),
              msEnabled: z.boolean().exactOptional(),
              oplogEnabled: z.boolean().exactOptional(),
              mongoVersion: z.string().exactOptional(),
              mongoStorageEngine: z.string().exactOptional(),
              apps: z
                .object({
                  engineVersion: z.string().exactOptional(),
                  totalInstalled: z.int().exactOptional(),
                  totalActive: z.int().exactOptional(),
                  totalFailed: z.int().exactOptional(),
                  totalPrivateApps: z.int().exactOptional(),
                  totalPrivateAppsEnabled: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueUsersOfYesterday: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueDevicesOfYesterday: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueUsersOfLastMonth: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueUsersOfLastWeek: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueOSOfYesterday: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueDevicesOfLastMonth: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueOSOfLastMonth: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueDevicesOfLastWeek: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              uniqueOSOfLastWeek: z
                .object({
                  year: z.int().exactOptional(),
                  month: z.int().exactOptional(),
                  day: z.int().exactOptional(),
                  data: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              services: z
                .object({
                  ldap: z
                    .object({
                      users: z.int().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      loginFallback: z.boolean().exactOptional(),
                      encryption: z.string().exactOptional(),
                      mergeUsers: z.boolean().exactOptional(),
                      syncRoles: z.string().exactOptional(),
                      syncRolesAutoRemove: z.string().exactOptional(),
                      syncData: z.string().exactOptional(),
                      syncChannels: z.string().exactOptional(),
                      syncAvatar: z.boolean().exactOptional(),
                      groupFilter: z.boolean().exactOptional(),
                      backgroundSync: z
                        .object({
                          enabled: z.string().exactOptional(),
                          interval: z.string().exactOptional(),
                          newUsers: z.string().exactOptional(),
                          existingUsers: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ee: z
                        .object({
                          syncActiveState: z.string().exactOptional(),
                          syncTeams: z.string().exactOptional(),
                          syncRoles: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  saml: z
                    .object({
                      enabled: z.string().exactOptional(),
                      users: z.int().exactOptional(),
                      signatureValidationType: z.string().exactOptional(),
                      generateUsername: z.string().exactOptional(),
                      updateSubscriptionsOnLogin: z.string().exactOptional(),
                      syncRoles: z.string().exactOptional(),
                      userDataCustomFieldMap: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  cas: z
                    .object({
                      enabled: z.boolean().exactOptional(),
                      users: z.int().exactOptional(),
                      allowUserCreation: z.boolean().exactOptional(),
                      alwaysSyncUserData: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  oauth: z
                    .object({
                      apple: z
                        .object({
                          enabled: z.boolean().exactOptional(),
                          users: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      github: z
                        .object({
                          enabled: z.boolean().exactOptional(),
                          users: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      gitlab: z
                        .object({
                          enabled: z.boolean().exactOptional(),
                          users: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      google: z
                        .object({
                          enabled: z.boolean().exactOptional(),
                          users: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      nextcloud: z
                        .object({
                          enabled: z.boolean().exactOptional(),
                          users: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      custom: z.looseObject({}).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              importer: z
                .object({
                  totalCSVImportedUsers: z.int().exactOptional(),
                  totalHipchatEnterpriseImportedUsers: z.int().exactOptional(),
                  totalSlackImportedUsers: z.int().exactOptional(),
                  totalSlackUsersImportedUsers: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              videoConf: z
                .object({
                  videoConference: z
                    .object({ started: z.int().exactOptional(), ended: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  direct: z
                    .object({
                      calling: z.int().exactOptional(),
                      started: z.int().exactOptional(),
                      ended: z.int().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  livechat: z
                    .object({ started: z.int().exactOptional(), ended: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  settings: z
                    .object({
                      provider: z.string().exactOptional(),
                      dms: z.string().exactOptional(),
                      channels: z.string().exactOptional(),
                      groups: z.string().exactOptional(),
                      teams: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              contactVerification: z
                .object({
                  totalContacts: z.int().exactOptional(),
                  totalUnknownContacts: z.int().exactOptional(),
                  totalMergedContacts: z.string().exactOptional(),
                  totalConflicts: z.int().exactOptional(),
                  totalResolvedConflicts: z.string().exactOptional(),
                  totalBlockedContacts: z.int().exactOptional(),
                  totalPartiallyBlockedContacts: z.int().exactOptional(),
                  totalFullyBlockedContacts: z.int().exactOptional(),
                  totalVerifiedContacts: z.int().exactOptional(),
                  avgChannelsPerContact: z.int().exactOptional(),
                  totalContactsWithoutChannels: z.int().exactOptional(),
                  totalImportedContacts: z.string().exactOptional(),
                  totalUpsellViews: z.string().exactOptional(),
                  totalUpsellClicks: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              dashboardCount: z.int().exactOptional(),
              messageAuditApply: z.int().exactOptional(),
              messageAuditLoad: z.int().exactOptional(),
              joinJitsiButton: z.int().exactOptional(),
              slashCommandsJitsi: z.int().exactOptional(),
              settings: z
                .object({
                  accounts: z
                    .object({ account2fa: z.boolean().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  cannedResponses: z
                    .object({ cannedResponsesEnabled: z.boolean().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  e2ee: z
                    .object({
                      e2e: z.boolean().exactOptional(),
                      e2eDefaultDirectRoom: z.boolean().exactOptional(),
                      e2eDefaultPrivateRoom: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  email: z
                    .object({
                      smtp: z
                        .object({
                          smtpHost: z.string().exactOptional(),
                          smtpPort: z.string().exactOptional(),
                          fromEmail: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  fileUpload: z
                    .object({ fileUploadEnable: z.boolean().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  general: z
                    .object({
                      apps: z
                        .object({
                          frameworkDevMode: z.string().exactOptional(),
                          frameworkEnable: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      nps: z
                        .object({ surveyEnabled: z.boolean().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      update: z
                        .object({ updateChecker: z.boolean().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  liveStreamAndBroadcasting: z
                    .object({
                      liveStream: z.string().exactOptional(),
                      broadcasting: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  message: z
                    .object({
                      allowEditing: z.boolean().exactOptional(),
                      allowDeleting: z.boolean().exactOptional(),
                      allowUnrecognizedSlashCommand: z.boolean().exactOptional(),
                      allowBadWordsFilter: z.boolean().exactOptional(),
                      readReceiptEnabled: z.boolean().exactOptional(),
                      readReceiptStoreUsers: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  push: z
                    .object({ pushEnable: z.boolean().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  search: z
                    .object({
                      defaultProvider: z
                        .object({ globalSearchEnabled: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  threads: z
                    .object({ threadsEnabled: z.boolean().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  webRTC: z
                    .object({
                      webRTCEnableChannel: z.string().exactOptional(),
                      webRTCEnablePrivate: z.string().exactOptional(),
                      webRTCEnableDirect: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              totalBroadcastRooms: z.int().exactOptional(),
              totalTriggeredEmails: z.int().exactOptional(),
              pushQueue: z.int().exactOptional(),
              integrations: z
                .object({
                  totalIntegrations: z.int().exactOptional(),
                  totalIncoming: z.int().exactOptional(),
                  totalIncomingActive: z.int().exactOptional(),
                  totalOutgoing: z.int().exactOptional(),
                  totalOutgoingActive: z.int().exactOptional(),
                  totalWithScriptEnabled: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              enterprise: z
                .object({
                  modules: z.array(z.string()).exactOptional(),
                  tags: z.array(z.string()).exactOptional(),
                  seatRequests: z.int().exactOptional(),
                  livechatTags: z.int().exactOptional(),
                  cannedResponses: z.int().exactOptional(),
                  slas: z.int().exactOptional(),
                  omnichannelRoomsWithPriorities: z.int().exactOptional(),
                  omnichannelRoomsWithSlas: z.int().exactOptional(),
                  businessUnits: z.int().exactOptional(),
                  omnichannelPdfTranscriptSucceeded: z.int().exactOptional(),
                  livechatMonitors: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              teams: z
                .object({
                  totalTeams: z.int().exactOptional(),
                  totalRoomsInsideTeams: z.int().exactOptional(),
                  totalDefaultRoomsInsideTeams: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              totalRoomsWithStarred: z.int().exactOptional(),
              totalRoomsWithPinned: z.int().exactOptional(),
              totalUserTOTP: z.int().exactOptional(),
              totalUserEmail2fa: z.int().exactOptional(),
              totalPinned: z.int().exactOptional(),
              totalStarred: z.int().exactOptional(),
              totalLinkInvitation: z.int().exactOptional(),
              totalLinkInvitationUses: z.int().exactOptional(),
              totalEmailInvitation: z.int().exactOptional(),
              totalE2ERooms: z.int().exactOptional(),
              logoChange: z.boolean().exactOptional(),
              showHomeButton: z.boolean().exactOptional(),
              totalEncryptedMessages: z.int().exactOptional(),
              totalManuallyAddedUsers: z.int().exactOptional(),
              totalSubscriptionRoles: z.int().exactOptional(),
              totalUserRoles: z.int().exactOptional(),
              totalCustomRoles: z.int().exactOptional(),
              totalWebRTCCalls: z.string().exactOptional(),
              uncaughtExceptionsCount: z.int().exactOptional(),
              push: z.int().exactOptional(),
              pushSecured: z.boolean().exactOptional(),
              homeTitleChanged: z.boolean().exactOptional(),
              homeBodyChanged: z.boolean().exactOptional(),
              customCSSChanged: z.boolean().exactOptional(),
              onLogoutCustomScriptChanged: z.boolean().exactOptional(),
              loggedOutCustomScriptChanged: z.boolean().exactOptional(),
              loggedInCustomScriptChanged: z.boolean().exactOptional(),
              dailyPeakConnections: z.int().exactOptional(),
              maxMonthlyPeakConnections: z.int().exactOptional(),
              matrixFederation: z
                .object({
                  enabled: z.boolean().exactOptional(),
                  maximumSizeOfPublicRoomsUsers: z.boolean().exactOptional(),
                  biggestRoom: z.string().exactOptional(),
                  smallestRoom: z.string().exactOptional(),
                  amountOfExternalUsers: z.int().exactOptional(),
                  amountOfFederatedRooms: z.int().exactOptional(),
                  externalConnectedServers: z
                    .object({
                      quantity: z.int().exactOptional(),
                      servers: z.array(z.looseObject({})).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              createdAt: z.string().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              statsToken: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                _id: '6a708537c8fc3c65b1808baf',
                wizard: {
                  organizationType: '',
                  industry: '',
                  size: '',
                  country: '',
                  language: '',
                  serverType: '',
                  registerServer: false,
                },
                uniqueId: '2d3ad4fb-d515-4f09-8f02-0f186c8cc929',
                installedAt: '2026-08-03T12:10:10.817Z',
                deploymentFingerprintHash: '',
                deploymentFingerprintVerified: true,
                version: '8.7.0',
                tag: null,
                branch: null,
                totalUsers: 0,
                activeUsers: 0,
                activeGuests: 0,
                nonActiveUsers: 0,
                appUsers: 0,
                onlineUsers: 0,
                awayUsers: 0,
                busyUsers: 0,
                totalConnectedUsers: 0,
                offlineUsers: 0,
                userLanguages: { none: 0 },
                totalRooms: 0,
                totalChannels: 0,
                totalPrivateGroups: 0,
                totalDirect: 0,
                totalLivechat: 0,
                totalDiscussions: 0,
                totalThreads: 0,
                totalLivechatVisitors: 0,
                totalLivechatAgents: 0,
                totalLivechatManagers: 0,
                livechatEnabled: true,
                isDepartmentRemovalEnabled: false,
                omnichannelSources: [],
                totalLivechatRoomsWithDepartment: 0,
                departments: 0,
                totalTriggers: 0,
                archivedDepartments: 0,
                totalCustomFields: 0,
                totalLivechatPublicCustomFields: 0,
                livechatAutomaticForwardingUnansweredChats: true,
                routingAlgorithm: 'Auto_Selection',
                onHoldEnabled: null,
                lastChattedAgentPreferred: null,
                assignNewConversationsToContactManager: null,
                visitorAbandonment: null,
                emailInboxes: 0,
                BusinessHours: { total: 0, strategy: '' },
                chatsOnHold: 0,
                uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
                omnichannelContactsBySource: {
                  contactsCount: 0,
                  conversationsCount: 0,
                  sources: [],
                },
                totalChannelMessages: 0,
                uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
                uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
                totalPrivateGroupMessages: 0,
                totalDiscussionsMessages: 0,
                totalDirectMessages: 0,
                totalLivechatMessages: 0,
                totalMessages: 0,
                lastLogin: '',
                lastMessageSentAt: null,
                lastSeenSubscription: '',
                os: {
                  type: 'Linux',
                  platform: 'linux',
                  arch: 'x64',
                  release: '6.17.0-1017-aws',
                  uptime: 2119.94,
                  loadavg: [6.92, 5.81, 3.52],
                  totalmem: 8220839936,
                  freemem: 3768729600,
                  cpus: [
                    {
                      model: 'AMD EPYC 7571',
                      speed: 0,
                      times: { user: 404110, nice: 0, sys: 206780, idle: 1425940, irq: 0 },
                    },
                    {
                      model: 'AMD EPYC 7571',
                      speed: 0,
                      times: { user: 416850, nice: 0, sys: 203030, idle: 1418740, irq: 0 },
                    },
                  ],
                },
                process: { nodeVersion: 'v22.22.3', pid: 1, uptime: 74.175831587 },
                deploy: { method: 'docker', platform: 'helm-chart' },
                fips: true,
                readReceiptsEnabled: false,
                readReceiptsDetailed: false,
                enterpriseReady: true,
                fileStoreType: 'GridFS',
                uploadsTotal: 0,
                uploadsTotalSize: 0,
                migration: {
                  _id: 'control',
                  _updatedAt: '2026-08-03T12:10:13.492Z',
                  locked: false,
                  version: 335,
                },
                instanceCount: 0,
                msEnabled: true,
                oplogEnabled: false,
                mongoVersion: '8.0.0',
                mongoStorageEngine: 'unknown',
                apps: {
                  engineVersion: '1.65.1-rc.0',
                  totalInstalled: 0,
                  totalActive: 0,
                  totalFailed: 0,
                  totalPrivateApps: 0,
                  totalPrivateAppsEnabled: 0,
                },
                uniqueUsersOfYesterday: { year: 2026, month: 8, day: 2, data: [] },
                uniqueDevicesOfYesterday: { year: 2026, month: 8, day: 2, data: [] },
                uniqueUsersOfLastMonth: { year: 2026, month: 8, day: 2, data: [] },
                uniqueUsersOfLastWeek: { year: 2026, month: 8, day: 2, data: [] },
                uniqueOSOfYesterday: { year: 2026, month: 8, day: 2, data: [] },
                uniqueDevicesOfLastMonth: { year: 2026, month: 8, day: 2, data: [] },
                uniqueOSOfLastMonth: { year: 2026, month: 8, day: 2, data: [] },
                uniqueDevicesOfLastWeek: { year: 2026, month: 8, day: 2, data: [] },
                uniqueOSOfLastWeek: { year: 2026, month: 8, day: 2, data: [] },
                services: {
                  ldap: {
                    users: 0,
                    enabled: false,
                    loginFallback: false,
                    encryption: 'plain',
                    mergeUsers: false,
                    syncRoles: null,
                    syncRolesAutoRemove: null,
                    syncData: null,
                    syncChannels: null,
                    syncAvatar: true,
                    groupFilter: false,
                    backgroundSync: {
                      enabled: null,
                      interval: null,
                      newUsers: null,
                      existingUsers: null,
                    },
                    ee: { syncActiveState: null, syncTeams: null, syncRoles: null },
                  },
                  saml: {
                    enabled: null,
                    users: 0,
                    signatureValidationType: null,
                    generateUsername: null,
                    updateSubscriptionsOnLogin: null,
                    syncRoles: null,
                    userDataCustomFieldMap: false,
                  },
                  cas: {
                    enabled: false,
                    users: 0,
                    allowUserCreation: true,
                    alwaysSyncUserData: true,
                  },
                  oauth: {
                    apple: { enabled: false, users: 0 },
                    github: { enabled: false, users: 0 },
                    gitlab: { enabled: false, users: 0 },
                    google: { enabled: false, users: 0 },
                    nextcloud: { enabled: false, users: 0 },
                    custom: {},
                  },
                },
                importer: {
                  totalCSVImportedUsers: 0,
                  totalHipchatEnterpriseImportedUsers: 0,
                  totalSlackImportedUsers: 0,
                  totalSlackUsersImportedUsers: 0,
                },
                videoConf: {
                  videoConference: { started: 0, ended: 0 },
                  direct: { calling: 0, started: 0, ended: 0 },
                  livechat: { started: 0, ended: 0 },
                  settings: { provider: '', dms: null, channels: null, groups: null, teams: null },
                },
                contactVerification: {
                  totalContacts: 0,
                  totalUnknownContacts: 0,
                  totalMergedContacts: null,
                  totalConflicts: 0,
                  totalResolvedConflicts: null,
                  totalBlockedContacts: 0,
                  totalPartiallyBlockedContacts: 0,
                  totalFullyBlockedContacts: 0,
                  totalVerifiedContacts: 0,
                  avgChannelsPerContact: 0,
                  totalContactsWithoutChannels: 0,
                  totalImportedContacts: null,
                  totalUpsellViews: null,
                  totalUpsellClicks: null,
                },
                dashboardCount: 0,
                messageAuditApply: 0,
                messageAuditLoad: 0,
                joinJitsiButton: 0,
                slashCommandsJitsi: 0,
                settings: {
                  accounts: { account2fa: true },
                  cannedResponses: { cannedResponsesEnabled: true },
                  e2ee: { e2e: false, e2eDefaultDirectRoom: false, e2eDefaultPrivateRoom: false },
                  email: { smtp: { smtpHost: '', smtpPort: '', fromEmail: '' } },
                  fileUpload: { fileUploadEnable: true },
                  general: {
                    apps: { frameworkDevMode: null, frameworkEnable: null },
                    nps: { surveyEnabled: true },
                    update: { updateChecker: true },
                  },
                  liveStreamAndBroadcasting: { liveStream: null, broadcasting: null },
                  message: {
                    allowEditing: true,
                    allowDeleting: true,
                    allowUnrecognizedSlashCommand: false,
                    allowBadWordsFilter: false,
                    readReceiptEnabled: false,
                    readReceiptStoreUsers: false,
                  },
                  push: { pushEnable: true },
                  search: { defaultProvider: { globalSearchEnabled: null } },
                  threads: { threadsEnabled: true },
                  webRTC: {
                    webRTCEnableChannel: null,
                    webRTCEnablePrivate: null,
                    webRTCEnableDirect: null,
                  },
                },
                totalBroadcastRooms: 0,
                totalTriggeredEmails: 0,
                pushQueue: 0,
                integrations: {
                  totalIntegrations: 0,
                  totalIncoming: 0,
                  totalIncomingActive: 0,
                  totalOutgoing: 0,
                  totalOutgoingActive: 0,
                  totalWithScriptEnabled: 0,
                },
                enterprise: {
                  modules: [
                    'auditing',
                    'canned-responses',
                    'ldap-enterprise',
                    'livechat-enterprise',
                    'voip-enterprise',
                    'omnichannel-mobile-enterprise',
                    'engagement-dashboard',
                    'push-privacy',
                    'scalability',
                    'teams-mention',
                    'saml-enterprise',
                    'oauth-enterprise',
                    'device-management',
                    'federation',
                    'videoconference-enterprise',
                    'message-read-receipt',
                    'outlook-calendar',
                    'hide-watermark',
                    'custom-roles',
                    'accessibility-certification',
                    'fips',
                  ],
                  tags: ['Commercial'],
                  seatRequests: 0,
                  livechatTags: 0,
                  cannedResponses: 0,
                  slas: 0,
                  omnichannelRoomsWithPriorities: 0,
                  omnichannelRoomsWithSlas: 0,
                  businessUnits: 0,
                  omnichannelPdfTranscriptSucceeded: 0,
                  livechatMonitors: 0,
                },
                teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
                totalRoomsWithStarred: 0,
                totalRoomsWithPinned: 0,
                totalUserTOTP: 0,
                totalUserEmail2fa: 0,
                totalPinned: 0,
                totalStarred: 0,
                totalLinkInvitation: 0,
                totalLinkInvitationUses: 0,
                totalEmailInvitation: 0,
                totalE2ERooms: 0,
                logoChange: false,
                showHomeButton: true,
                totalEncryptedMessages: 0,
                totalManuallyAddedUsers: 0,
                totalSubscriptionRoles: 3,
                totalUserRoles: 11,
                totalCustomRoles: 0,
                totalWebRTCCalls: null,
                uncaughtExceptionsCount: 0,
                push: 3,
                pushSecured: false,
                homeTitleChanged: false,
                homeBodyChanged: false,
                customCSSChanged: false,
                onLogoutCustomScriptChanged: false,
                loggedOutCustomScriptChanged: false,
                loggedInCustomScriptChanged: false,
                dailyPeakConnections: 0,
                maxMonthlyPeakConnections: 0,
                matrixFederation: {
                  enabled: false,
                  maximumSizeOfPublicRoomsUsers: false,
                  biggestRoom: null,
                  smallestRoom: null,
                  amountOfExternalUsers: 0,
                  amountOfFederatedRooms: 0,
                  externalConnectedServers: { quantity: 0, servers: [] },
                },
                createdAt: '2026-08-03T12:10:31.265Z',
                _updatedAt: '2026-08-03T12:10:31.426Z',
                statsToken:
                  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6IiIsInVuaXF1ZUlkIjoiMmQzYWQ0ZmItZDUxNS00ZjA5LThmMDItMGYxODZjOGNjOTI5IiwicmVjb3JkSWQiOiI2YTcwODUzN2M4ZmMzYzY1YjE4MDhiYWYiLCJ0aW1lc3RhbXAiOiIyMDI2LTA4LTAzVDEyOjEwOjMxLjQwNzk5NzEyOFoiLCJpbmZvIjp7InRvdGFsVXNlcnMiOjAsImFjdGl2ZVVzZXJzIjowLCJ0b3RhbENvbm5lY3RlZFVzZXJzIjowLCJvbW5pQ2hhbm5lbENvbnZlcnNhdGlvbnMiOjAsInRvdGFsUm9vbXMiOjAsInRvdGFsTWVzc2FnZXMiOjAsInVwbG9hZHNUb3RhbFNpemUiOjAsIm1pY3Jvc2VydmljZUVuYWJsZWQiOnRydWUsImZpbGVTdG9yZVR5cGUiOiJHcmlkRlMifX0.JnBb7z--brY2k00kIkC_Rp502P8wdKVcC2kAxEKK0OBFJlAgLM4ezZ5m_xG2w1wX3wCTNKnrjO3D5Mi-bzYNmNNBcJQbujP2uUGWMnr42UUAbyPY9VWKCf4L3H9cgzB9WjJX94KiVlwLjnbqle9TE0wAubP-NR1lzZn06GrnD9bAFSdz2E5lI4s6qozfUW5z8ZmSgXs5MBSbhBQczUbmQkQoj2XjKs5Mkqow0qLeBsCrc0F2m_92YeO1S6StRGvLIVyce-qvm0DLT8hXhpoJyRRgLz_3JyOzOE6hfxcgWI43YUZ4o4n7QruSYDhSFnAjuAlZjHasBCKPfs9ht9vRtQ',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: { success: false, error: 'error-not-allowed', errorType: 'error-forbidden' },
            },
          },
        },
      },
    },
  },
})

export const postApiV1StatisticsTelemetryRoute = createRoute({
  method: 'post',
  path: '/api/v1/statistics.telemetry',
  tags: ['Statistics'],
  summary: 'Send Telemetry Events',
  description:
    'Send one or more telemetry events to the workspace. Each event increases a usage counter that is stored as a workspace setting.\n\nThe workspace processes the events in the order you send them. If an event has an unknown `eventName`, the request fails with `event not found`, but the events before it in the list are still processed.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 4.6.0   | Added       |',
  operationId: 'post-api-v1-statistics.telemetry',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              params: z
                .array(
                  z
                    .object({
                      eventName: z
                        .enum(['slashCommandsStats', 'updateCounter'])
                        .openapi({
                          description:
                            'The event type. Either `slashCommandsStats` or `updateCounter`.',
                          example: 'slashCommandsStats',
                        }),
                      timestamp: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description:
                            'The time the event happened, as a Unix timestamp in milliseconds.',
                          example: 1759920000000,
                        }),
                      command: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The slash command that was run, without the leading `/`. Use with the `slashCommandsStats` event.\nThe `jitsi` command increases the `Jitsi_Start_SlashCommands_Count` setting by 1. Other commands return a success response but don't change any counter.",
                          example: 'jitsi',
                        }),
                      settingsId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the counter setting to increase by 1. Use with the `updateCounter` event.',
                          example: 'Engagement_Dashboard_Load_Count',
                        }),
                    })
                    .openapi({ required: ['eventName'] }),
                )
                .openapi({
                  description: 'The list of telemetry events to send. Each event is an object.',
                  example: [{ eventName: 'slashCommandsStats', command: 'jitsi' }],
                }),
            })
            .openapi({ required: ['params'] }),
          examples: {
            'Slash Command Event': {
              value: {
                params: [
                  { eventName: 'slashCommandsStats', timestamp: 1759920000000, command: 'jitsi' },
                ],
              },
            },
            'Settings Counter Event': {
              value: {
                params: [
                  { eventName: 'updateCounter', settingsId: 'Engagement_Dashboard_Load_Count' },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Params': {
              value: {
                success: false,
                error: "must have required property 'params'",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid Params Type': {
              value: { success: false, error: 'must be array', errorType: 'error-invalid-params' },
            },
            'Missing Event Name': {
              value: {
                success: false,
                error: "must have required property 'eventName'",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid Timestamp Type': {
              value: { success: false, error: 'must be number', errorType: 'error-invalid-params' },
            },
            'Unknown Body Property': {
              value: {
                success: false,
                error: 'must NOT have additional properties',
                errorType: 'error-invalid-params',
              },
            },
            'Unknown Event': { value: { success: false, error: 'event not found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1EngagementDashboardUsersNewUsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/users/new-users',
  tags: ['Users Engagement'],
  summary: 'Get New Users',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve the metrics of newly registered users during a specific period.\n\nPermission required: `view-engagement-dashboard`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-users-new-users',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              days: z
                .array(
                  z
                    .object({ day: z.string().exactOptional(), users: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              period: z
                .object({ count: z.int().exactOptional(), variation: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              yesterday: z
                .object({ count: z.int().exactOptional(), variation: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                days: [
                  { day: '2023-02-09T00:00:00.000Z', users: 1 },
                  { day: '2023-02-06T00:00:00.000Z', users: 6 },
                  { day: '2023-02-01T00:00:00.000Z', users: 1 },
                  { day: '2023-01-24T00:00:00.000Z', users: 1 },
                  { day: '2023-01-17T00:00:00.000Z', users: 1 },
                ],
                period: { count: 27, variation: 27 },
                yesterday: { count: 0, variation: 0 },
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EngagementDashboardUsersActiveUsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/users/active-users',
  tags: ['Users Engagement'],
  summary: 'Get Active Users',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve the metrics of active users in the workspace during a specific period.\n\nPermission required: `view-engagement-dashboard` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-users-active-users',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              month: z
                .array(
                  z
                    .object({
                      usersList: z.array(z.string()).exactOptional(),
                      users: z.int().exactOptional(),
                      day: z.int().exactOptional(),
                      month: z.int().exactOptional(),
                      year: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                month: [
                  { usersList: ['rYhzFRd2QZjNwAAXX'], users: 1, day: 5, month: 5, year: 2023 },
                  { usersList: ['rYhzFRd2QZjNwAAXX'], users: 1, day: 4, month: 5, year: 2023 },
                  { usersList: ['rYhzFRd2QZjNwAAXX'], users: 1, day: 3, month: 5, year: 2023 },
                  { usersList: ['rYhzFRd2QZjNwAAXX'], users: 1, day: 2, month: 5, year: 2023 },
                  {
                    usersList: ['rbAXPnMktTFbNpwtJ', '9iN96PXnDK7XAYESA'],
                    users: 2,
                    day: 17,
                    month: 4,
                    year: 2023,
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: { description: 'Forbidden' },
  },
})

export const getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/users/users-by-time-of-the-day-in-a-week',
  tags: ['Users Engagement'],
  summary: 'Get User By Time of the Day',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve users by hours at a particular time of the day in a week.\n\nPermission required: `view-engagement-dashboard`  \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-users-users-by-time-of-the-day-in-a-week',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              week: z
                .array(
                  z
                    .object({
                      users: z.int().exactOptional(),
                      hour: z.int().exactOptional(),
                      day: z.int().exactOptional(),
                      month: z.int().exactOptional(),
                      year: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                week: [
                  { users: 1, hour: 23, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 22, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 21, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 20, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 19, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 18, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 17, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 16, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 15, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 14, day: 2, month: 5, year: 2023 },
                  { users: 1, hour: 1, day: 1, month: 5, year: 2023 },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EngagementDashboardUsersChatBusierHourlyDataRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/users/chat-busier/hourly-data',
  tags: ['Users Engagement'],
  summary: 'Get Hourly Data When Chat is Busier',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve hourly data when chat is busier.\n\nPermission required: `view-engagement-dashboard` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-users-chat-busier-hourly-data',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              hours: z
                .array(
                  z
                    .object({ users: z.int().exactOptional(), hour: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                hours: [
                  { users: 3, hour: 22 },
                  { users: 3, hour: 20 },
                  { users: 4, hour: 18 },
                  { users: 2, hour: 16 },
                  { users: 4, hour: 14 },
                  { users: 4, hour: 12 },
                  { users: 2, hour: 10 },
                  { users: 1, hour: 8 },
                  { users: 1, hour: 6 },
                  { users: 1, hour: 4 },
                  { users: 0, hour: 2 },
                  { users: 0, hour: 0 },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EngagementDashboardUsersChatBusierWeeklyDataRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/users/chat-busier/weekly-data',
  tags: ['Users Engagement'],
  summary: 'Get Weekly Data When Chat is Busier',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieves weekly data when chat is busier. \n\nPermission required: `view-engagement-dashboard` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-users-chat-busier-weekly-data',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              month: z
                .array(
                  z
                    .object({
                      users: z.int().exactOptional(),
                      day: z.int().exactOptional(),
                      month: z.int().exactOptional(),
                      year: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                days: [
                  { day: '2023-02-01T00:00:00.000Z', users: 1 },
                  { day: '2023-01-24T00:00:00.000Z', users: 1 },
                  { day: '2023-01-17T00:00:00.000Z', users: 1 },
                ],
                period: { count: 27, variation: 27 },
                yesterday: { count: 0, variation: 0 },
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EngagementDashboardMessagesMessagesSentRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/messages/messages-sent',
  tags: ['Messages Engagement'],
  summary: 'Get Number of Sent Messages',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve the number of messages sent daily during a specific period.\n\nPermission required: `view-engagement-dashboard` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-messages-messages-sent',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              days: z
                .array(
                  z
                    .object({ day: z.string().exactOptional(), messages: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              period: z
                .object({ count: z.int().exactOptional(), variation: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              yesterday: z
                .object({ count: z.int().exactOptional(), variation: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                days: [
                  { day: '2023-05-22T00:00:00.000Z', messages: 22 },
                  { day: '2023-05-21T00:00:00.000Z', messages: 5 },
                ],
                period: { count: 760, variation: 716 },
                yesterday: { count: 101, variation: 82 },
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EngagementDashboardMessagesOriginRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/messages/origin',
  tags: ['Messages Engagement'],
  summary: 'Get Origin of Message Sent',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nGet the origin of messages sent during a specific period. It highlights the number of messages sent in private channels, private chats, and public channels.\n\nPermission required: `view-engagement-dashboard` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-messages-origin',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description:
        '`t` denotes the type of room where the messages are sent. The types of rooms can be any of the following:\n  - `d` represents Private Chats\n  - `c` represents Public Channels\n  - `p` represents Private Channels',
      content: {
        'application/json': {
          schema: z
            .object({
              origins: z
                .array(
                  z
                    .object({ messages: z.int().exactOptional(), t: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                origins: [
                  { messages: 7302, t: 'c' },
                  { messages: 1147, t: 'd' },
                  { messages: 122, t: 'p' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EngagementDashboardMessagesTopFivePopularChannelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/messages/top-five-popular-channels',
  tags: ['Messages Engagement'],
  summary: 'Get the Most Popular Channels',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieves the top 5 popular channels in your workspace by the number of messages sent. It highlights the number of messages sent in private channels, private chats, and public channels. \n\nPermission required: `view-engagement-dashboard` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-messages-top-five-popular-channels',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description:
        '`t` denotes the type of room where the messages are sent. The types of rooms can be any of the following:\n  - `d` represents Private Chats\n  - `c` represents Public Channels\n  - `p` represents Private Channels"',
      content: {
        'application/json': {
          schema: z
            .object({
              channels: z
                .array(
                  z
                    .object({
                      messages: z.int().exactOptional(),
                      t: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      usernames: z.array(z.looseObject({})).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                channels: [
                  { messages: 727, t: 'd', usernames: ['google-calendar.bot', 'pavi.kim'] },
                  { messages: 26, t: 'd', usernames: ['fun.baek', 'google-calendar.bot'] },
                  { messages: 2, t: 'd', usernames: ['test.test', 'rocket.cat'] },
                  { messages: 1, t: 'd', usernames: ['ria.mit', 'rocket.cat'] },
                  { messages: 1, t: 'd', usernames: ['janna.coelho', 'rocket.cat'] },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EngagementDashboardChannelsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/engagement-dashboard/channels/list',
  tags: ['Channels Engagement'],
  summary: 'Get Channels Engagement',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve all active channels and the number of messages in each channel within a specific period.\n\nPermission required: `view-engagement-dashboard` \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-engagement-dashboard-channels-list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              channels: z
                .array(
                  z
                    .object({
                      room: z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          t: z.string().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      messages: z.int().exactOptional(),
                      lastWeekMessages: z.int().exactOptional(),
                      diffFromLastWeek: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                channels: [
                  {
                    room: {
                      _id: 'string',
                      name: 'string',
                      ts: 'string',
                      t: 'string',
                      _updatedAt: 'string',
                    },
                    messages: 0,
                    lastWeekMessages: 0,
                    diffFromLastWeek: 0,
                  },
                ],
                total: 0,
                offset: 0,
                count: 0,
                success: true,
              },
            },
          },
        },
      },
    },
    400: KeyErrorResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})
