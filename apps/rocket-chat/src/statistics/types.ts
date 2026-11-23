declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/statistics.list': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              statistics?:
                | {
                    _id?: string | undefined
                    wizard?:
                      | {
                          organizationType?: string | undefined
                          industry?: string | undefined
                          size?: string | undefined
                          country?: string | undefined
                          language?: string | undefined
                          serverType?: string | undefined
                          registerServer?: boolean | undefined
                        }
                      | undefined
                    uniqueId?: string | undefined
                    installedAt?: string | undefined
                    deploymentFingerprintHash?: string | undefined
                    deploymentFingerprintVerified?: boolean | undefined
                    version?: string | undefined
                    tag?: string | undefined
                    branch?: string | undefined
                    totalUsers?: number | undefined
                    activeUsers?: number | undefined
                    activeGuests?: number | undefined
                    nonActiveUsers?: number | undefined
                    appUsers?: number | undefined
                    onlineUsers?: number | undefined
                    awayUsers?: number | undefined
                    busyUsers?: number | undefined
                    totalConnectedUsers?: number | undefined
                    offlineUsers?: number | undefined
                    userLanguages?: { none?: number | undefined } | undefined
                    totalRooms?: number | undefined
                    totalChannels?: number | undefined
                    totalPrivateGroups?: number | undefined
                    totalDirect?: number | undefined
                    totalLivechat?: number | undefined
                    totalDiscussions?: number | undefined
                    totalThreads?: number | undefined
                    totalLivechatVisitors?: number | undefined
                    totalLivechatAgents?: number | undefined
                    totalLivechatManagers?: number | undefined
                    livechatEnabled?: boolean | undefined
                    isDepartmentRemovalEnabled?: boolean | undefined
                    omnichannelSources?: { [x: string]: unknown }[] | undefined
                    totalLivechatRoomsWithDepartment?: number | undefined
                    departments?: number | undefined
                    totalTriggers?: number | undefined
                    archivedDepartments?: number | undefined
                    totalCustomFields?: number | undefined
                    totalLivechatPublicCustomFields?: number | undefined
                    livechatAutomaticForwardingUnansweredChats?: boolean | undefined
                    routingAlgorithm?: string | undefined
                    onHoldEnabled?: string | undefined
                    lastChattedAgentPreferred?: string | undefined
                    assignNewConversationsToContactManager?: string | undefined
                    visitorAbandonment?: string | undefined
                    emailInboxes?: number | undefined
                    BusinessHours?:
                      | { total?: number | undefined; strategy?: string | undefined }
                      | undefined
                    chatsOnHold?: number | undefined
                    uniqueContactsOfLastMonth?:
                      | {
                          contactsCount?: number | undefined
                          conversationsCount?: number | undefined
                          sources?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    omnichannelContactsBySource?:
                      | {
                          contactsCount?: number | undefined
                          conversationsCount?: number | undefined
                          sources?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    totalChannelMessages?: number | undefined
                    uniqueContactsOfYesterday?:
                      | {
                          contactsCount?: number | undefined
                          conversationsCount?: number | undefined
                          sources?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueContactsOfLastWeek?:
                      | {
                          contactsCount?: number | undefined
                          conversationsCount?: number | undefined
                          sources?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    totalPrivateGroupMessages?: number | undefined
                    totalDiscussionsMessages?: number | undefined
                    totalDirectMessages?: number | undefined
                    totalLivechatMessages?: number | undefined
                    totalMessages?: number | undefined
                    lastLogin?: string | undefined
                    lastMessageSentAt?: string | undefined
                    lastSeenSubscription?: string | undefined
                    os?:
                      | {
                          type?: string | undefined
                          platform?: string | undefined
                          arch?: string | undefined
                          release?: string | undefined
                          uptime?: number | undefined
                          loadavg?: number[] | undefined
                          totalmem?: number | undefined
                          freemem?: number | undefined
                          cpus?:
                            | {
                                model?: string | undefined
                                speed?: number | undefined
                                times?:
                                  | {
                                      user?: number | undefined
                                      nice?: number | undefined
                                      sys?: number | undefined
                                      idle?: number | undefined
                                      irq?: number | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    process?:
                      | {
                          nodeVersion?: string | undefined
                          pid?: number | undefined
                          uptime?: number | undefined
                        }
                      | undefined
                    deploy?:
                      | { method?: string | undefined; platform?: string | undefined }
                      | undefined
                    fips?: boolean | undefined
                    readReceiptsEnabled?: boolean | undefined
                    readReceiptsDetailed?: boolean | undefined
                    enterpriseReady?: boolean | undefined
                    fileStoreType?: string | undefined
                    uploadsTotal?: number | undefined
                    uploadsTotalSize?: number | undefined
                    migration?:
                      | {
                          _id?: string | undefined
                          _updatedAt?: string | undefined
                          locked?: boolean | undefined
                          version?: number | undefined
                        }
                      | undefined
                    instanceCount?: number | undefined
                    msEnabled?: boolean | undefined
                    oplogEnabled?: boolean | undefined
                    mongoVersion?: string | undefined
                    mongoStorageEngine?: string | undefined
                    apps?:
                      | {
                          engineVersion?: string | undefined
                          totalInstalled?: number | undefined
                          totalActive?: number | undefined
                          totalFailed?: number | undefined
                          totalPrivateApps?: number | undefined
                          totalPrivateAppsEnabled?: number | undefined
                        }
                      | undefined
                    uniqueUsersOfYesterday?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueDevicesOfYesterday?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueUsersOfLastMonth?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueUsersOfLastWeek?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueOSOfYesterday?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueDevicesOfLastMonth?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueOSOfLastMonth?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueDevicesOfLastWeek?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    uniqueOSOfLastWeek?:
                      | {
                          year?: number | undefined
                          month?: number | undefined
                          day?: number | undefined
                          data?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    services?:
                      | {
                          ldap?:
                            | {
                                users?: number | undefined
                                enabled?: boolean | undefined
                                loginFallback?: boolean | undefined
                                encryption?: string | undefined
                                mergeUsers?: boolean | undefined
                                syncRoles?: string | undefined
                                syncRolesAutoRemove?: string | undefined
                                syncData?: string | undefined
                                syncChannels?: string | undefined
                                syncAvatar?: boolean | undefined
                                groupFilter?: boolean | undefined
                                backgroundSync?:
                                  | {
                                      enabled?: string | undefined
                                      interval?: string | undefined
                                      newUsers?: string | undefined
                                      existingUsers?: string | undefined
                                    }
                                  | undefined
                                ee?:
                                  | {
                                      syncActiveState?: string | undefined
                                      syncTeams?: string | undefined
                                      syncRoles?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          saml?:
                            | {
                                enabled?: string | undefined
                                users?: number | undefined
                                signatureValidationType?: string | undefined
                                generateUsername?: string | undefined
                                updateSubscriptionsOnLogin?: string | undefined
                                syncRoles?: string | undefined
                                userDataCustomFieldMap?: boolean | undefined
                              }
                            | undefined
                          cas?:
                            | {
                                enabled?: boolean | undefined
                                users?: number | undefined
                                allowUserCreation?: boolean | undefined
                                alwaysSyncUserData?: boolean | undefined
                              }
                            | undefined
                          oauth?:
                            | {
                                apple?:
                                  | { enabled?: boolean | undefined; users?: number | undefined }
                                  | undefined
                                github?:
                                  | { enabled?: boolean | undefined; users?: number | undefined }
                                  | undefined
                                gitlab?:
                                  | { enabled?: boolean | undefined; users?: number | undefined }
                                  | undefined
                                google?:
                                  | { enabled?: boolean | undefined; users?: number | undefined }
                                  | undefined
                                nextcloud?:
                                  | { enabled?: boolean | undefined; users?: number | undefined }
                                  | undefined
                                custom?: { [x: string]: unknown } | undefined
                              }
                            | undefined
                        }
                      | undefined
                    importer?:
                      | {
                          totalCSVImportedUsers?: number | undefined
                          totalHipchatEnterpriseImportedUsers?: number | undefined
                          totalSlackImportedUsers?: number | undefined
                          totalSlackUsersImportedUsers?: number | undefined
                        }
                      | undefined
                    videoConf?:
                      | {
                          videoConference?:
                            | { started?: number | undefined; ended?: number | undefined }
                            | undefined
                          direct?:
                            | {
                                calling?: number | undefined
                                started?: number | undefined
                                ended?: number | undefined
                              }
                            | undefined
                          livechat?:
                            | { started?: number | undefined; ended?: number | undefined }
                            | undefined
                          settings?:
                            | {
                                provider?: string | undefined
                                dms?: string | undefined
                                channels?: string | undefined
                                groups?: string | undefined
                                teams?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    contactVerification?:
                      | {
                          totalContacts?: number | undefined
                          totalUnknownContacts?: number | undefined
                          totalMergedContacts?: string | undefined
                          totalConflicts?: number | undefined
                          totalResolvedConflicts?: string | undefined
                          totalBlockedContacts?: number | undefined
                          totalPartiallyBlockedContacts?: number | undefined
                          totalFullyBlockedContacts?: number | undefined
                          totalVerifiedContacts?: number | undefined
                          avgChannelsPerContact?: number | undefined
                          totalContactsWithoutChannels?: number | undefined
                          totalImportedContacts?: string | undefined
                          totalUpsellViews?: string | undefined
                          totalUpsellClicks?: string | undefined
                        }
                      | undefined
                    dashboardCount?: number | undefined
                    messageAuditApply?: number | undefined
                    messageAuditLoad?: number | undefined
                    joinJitsiButton?: number | undefined
                    slashCommandsJitsi?: number | undefined
                    settings?:
                      | {
                          accounts?: { account2fa?: boolean | undefined } | undefined
                          cannedResponses?:
                            | { cannedResponsesEnabled?: boolean | undefined }
                            | undefined
                          e2ee?:
                            | {
                                e2e?: boolean | undefined
                                e2eDefaultDirectRoom?: boolean | undefined
                                e2eDefaultPrivateRoom?: boolean | undefined
                              }
                            | undefined
                          email?:
                            | {
                                smtp?:
                                  | {
                                      smtpHost?: string | undefined
                                      smtpPort?: string | undefined
                                      fromEmail?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          fileUpload?: { fileUploadEnable?: boolean | undefined } | undefined
                          general?:
                            | {
                                apps?:
                                  | {
                                      frameworkDevMode?: string | undefined
                                      frameworkEnable?: string | undefined
                                    }
                                  | undefined
                                nps?: { surveyEnabled?: boolean | undefined } | undefined
                                update?: { updateChecker?: boolean | undefined } | undefined
                              }
                            | undefined
                          liveStreamAndBroadcasting?:
                            | { liveStream?: string | undefined; broadcasting?: string | undefined }
                            | undefined
                          message?:
                            | {
                                allowEditing?: boolean | undefined
                                allowDeleting?: boolean | undefined
                                allowUnrecognizedSlashCommand?: boolean | undefined
                                allowBadWordsFilter?: boolean | undefined
                                readReceiptEnabled?: boolean | undefined
                                readReceiptStoreUsers?: boolean | undefined
                              }
                            | undefined
                          push?: { pushEnable?: boolean | undefined } | undefined
                          search?:
                            | {
                                defaultProvider?:
                                  | { globalSearchEnabled?: string | undefined }
                                  | undefined
                              }
                            | undefined
                          threads?: { threadsEnabled?: boolean | undefined } | undefined
                          webRTC?:
                            | {
                                webRTCEnableChannel?: string | undefined
                                webRTCEnablePrivate?: string | undefined
                                webRTCEnableDirect?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    totalBroadcastRooms?: number | undefined
                    totalTriggeredEmails?: number | undefined
                    pushQueue?: number | undefined
                    integrations?:
                      | {
                          totalIntegrations?: number | undefined
                          totalIncoming?: number | undefined
                          totalIncomingActive?: number | undefined
                          totalOutgoing?: number | undefined
                          totalOutgoingActive?: number | undefined
                          totalWithScriptEnabled?: number | undefined
                        }
                      | undefined
                    enterprise?:
                      | {
                          modules?: string[] | undefined
                          tags?: string[] | undefined
                          seatRequests?: number | undefined
                          livechatTags?: number | undefined
                          cannedResponses?: number | undefined
                          slas?: number | undefined
                          omnichannelRoomsWithPriorities?: number | undefined
                          omnichannelRoomsWithSlas?: number | undefined
                          businessUnits?: number | undefined
                          omnichannelPdfTranscriptSucceeded?: number | undefined
                          livechatMonitors?: number | undefined
                        }
                      | undefined
                    teams?:
                      | {
                          totalTeams?: number | undefined
                          totalRoomsInsideTeams?: number | undefined
                          totalDefaultRoomsInsideTeams?: number | undefined
                        }
                      | undefined
                    totalRoomsWithStarred?: number | undefined
                    totalRoomsWithPinned?: number | undefined
                    totalUserTOTP?: number | undefined
                    totalUserEmail2fa?: number | undefined
                    totalPinned?: number | undefined
                    totalStarred?: number | undefined
                    totalLinkInvitation?: number | undefined
                    totalLinkInvitationUses?: number | undefined
                    totalEmailInvitation?: number | undefined
                    totalE2ERooms?: number | undefined
                    logoChange?: boolean | undefined
                    showHomeButton?: boolean | undefined
                    totalEncryptedMessages?: number | undefined
                    totalManuallyAddedUsers?: number | undefined
                    totalSubscriptionRoles?: number | undefined
                    totalUserRoles?: number | undefined
                    totalCustomRoles?: number | undefined
                    totalWebRTCCalls?: string | undefined
                    uncaughtExceptionsCount?: number | undefined
                    push?: number | undefined
                    pushSecured?: boolean | undefined
                    homeTitleChanged?: boolean | undefined
                    homeBodyChanged?: boolean | undefined
                    customCSSChanged?: boolean | undefined
                    onLogoutCustomScriptChanged?: boolean | undefined
                    loggedOutCustomScriptChanged?: boolean | undefined
                    loggedInCustomScriptChanged?: boolean | undefined
                    dailyPeakConnections?: number | undefined
                    maxMonthlyPeakConnections?: number | undefined
                    matrixFederation?:
                      | {
                          enabled?: boolean | undefined
                          maximumSizeOfPublicRoomsUsers?: boolean | undefined
                          biggestRoom?: string | undefined
                          smallestRoom?: string | undefined
                          amountOfExternalUsers?: number | undefined
                          amountOfFederatedRooms?: number | undefined
                          externalConnectedServers?:
                            | {
                                quantity?: number | undefined
                                servers?: { [x: string]: unknown }[] | undefined
                              }
                            | undefined
                        }
                      | undefined
                    createdAt?: string | undefined
                    _updatedAt?: string | undefined
                    statsToken?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              offset?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/statistics': {
      $get:
        | {
            input: { query: { refresh?: boolean | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              wizard?:
                | {
                    organizationType?: string | undefined
                    industry?: string | undefined
                    size?: string | undefined
                    country?: string | undefined
                    language?: string | undefined
                    serverType?: string | undefined
                    registerServer?: boolean | undefined
                  }
                | undefined
              uniqueId?: string | undefined
              installedAt?: string | undefined
              deploymentFingerprintHash?: string | undefined
              deploymentFingerprintVerified?: boolean | undefined
              version?: string | undefined
              tag?: string | undefined
              branch?: string | undefined
              totalUsers?: number | undefined
              activeUsers?: number | undefined
              activeGuests?: number | undefined
              nonActiveUsers?: number | undefined
              appUsers?: number | undefined
              onlineUsers?: number | undefined
              awayUsers?: number | undefined
              busyUsers?: number | undefined
              totalConnectedUsers?: number | undefined
              offlineUsers?: number | undefined
              userLanguages?: { none?: number | undefined } | undefined
              totalRooms?: number | undefined
              totalChannels?: number | undefined
              totalPrivateGroups?: number | undefined
              totalDirect?: number | undefined
              totalLivechat?: number | undefined
              totalDiscussions?: number | undefined
              totalThreads?: number | undefined
              totalLivechatVisitors?: number | undefined
              totalLivechatAgents?: number | undefined
              totalLivechatManagers?: number | undefined
              livechatEnabled?: boolean | undefined
              isDepartmentRemovalEnabled?: boolean | undefined
              omnichannelSources?: { [x: string]: unknown }[] | undefined
              totalLivechatRoomsWithDepartment?: number | undefined
              departments?: number | undefined
              totalTriggers?: number | undefined
              archivedDepartments?: number | undefined
              totalCustomFields?: number | undefined
              totalLivechatPublicCustomFields?: number | undefined
              livechatAutomaticForwardingUnansweredChats?: boolean | undefined
              routingAlgorithm?: string | undefined
              onHoldEnabled?: string | undefined
              lastChattedAgentPreferred?: string | undefined
              assignNewConversationsToContactManager?: string | undefined
              visitorAbandonment?: string | undefined
              emailInboxes?: number | undefined
              BusinessHours?:
                | { total?: number | undefined; strategy?: string | undefined }
                | undefined
              chatsOnHold?: number | undefined
              uniqueContactsOfLastMonth?:
                | {
                    contactsCount?: number | undefined
                    conversationsCount?: number | undefined
                    sources?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              omnichannelContactsBySource?:
                | {
                    contactsCount?: number | undefined
                    conversationsCount?: number | undefined
                    sources?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              totalChannelMessages?: number | undefined
              uniqueContactsOfYesterday?:
                | {
                    contactsCount?: number | undefined
                    conversationsCount?: number | undefined
                    sources?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueContactsOfLastWeek?:
                | {
                    contactsCount?: number | undefined
                    conversationsCount?: number | undefined
                    sources?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              totalPrivateGroupMessages?: number | undefined
              totalDiscussionsMessages?: number | undefined
              totalDirectMessages?: number | undefined
              totalLivechatMessages?: number | undefined
              totalMessages?: number | undefined
              lastLogin?: string | undefined
              lastMessageSentAt?: string | undefined
              lastSeenSubscription?: string | undefined
              os?:
                | {
                    type?: string | undefined
                    platform?: string | undefined
                    arch?: string | undefined
                    release?: string | undefined
                    uptime?: number | undefined
                    loadavg?: number[] | undefined
                    totalmem?: number | undefined
                    freemem?: number | undefined
                    cpus?:
                      | {
                          model?: string | undefined
                          speed?: number | undefined
                          times?:
                            | {
                                user?: number | undefined
                                nice?: number | undefined
                                sys?: number | undefined
                                idle?: number | undefined
                                irq?: number | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                  }
                | undefined
              process?:
                | {
                    nodeVersion?: string | undefined
                    pid?: number | undefined
                    uptime?: number | undefined
                  }
                | undefined
              deploy?: { method?: string | undefined; platform?: string | undefined } | undefined
              fips?: boolean | undefined
              readReceiptsEnabled?: boolean | undefined
              readReceiptsDetailed?: boolean | undefined
              enterpriseReady?: boolean | undefined
              fileStoreType?: string | undefined
              uploadsTotal?: number | undefined
              uploadsTotalSize?: number | undefined
              migration?:
                | {
                    _id?: string | undefined
                    _updatedAt?: string | undefined
                    locked?: boolean | undefined
                    version?: number | undefined
                  }
                | undefined
              instanceCount?: number | undefined
              msEnabled?: boolean | undefined
              oplogEnabled?: boolean | undefined
              mongoVersion?: string | undefined
              mongoStorageEngine?: string | undefined
              apps?:
                | {
                    engineVersion?: string | undefined
                    totalInstalled?: number | undefined
                    totalActive?: number | undefined
                    totalFailed?: number | undefined
                    totalPrivateApps?: number | undefined
                    totalPrivateAppsEnabled?: number | undefined
                  }
                | undefined
              uniqueUsersOfYesterday?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueDevicesOfYesterday?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueUsersOfLastMonth?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueUsersOfLastWeek?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueOSOfYesterday?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueDevicesOfLastMonth?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueOSOfLastMonth?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueDevicesOfLastWeek?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              uniqueOSOfLastWeek?:
                | {
                    year?: number | undefined
                    month?: number | undefined
                    day?: number | undefined
                    data?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              services?:
                | {
                    ldap?:
                      | {
                          users?: number | undefined
                          enabled?: boolean | undefined
                          loginFallback?: boolean | undefined
                          encryption?: string | undefined
                          mergeUsers?: boolean | undefined
                          syncRoles?: string | undefined
                          syncRolesAutoRemove?: string | undefined
                          syncData?: string | undefined
                          syncChannels?: string | undefined
                          syncAvatar?: boolean | undefined
                          groupFilter?: boolean | undefined
                          backgroundSync?:
                            | {
                                enabled?: string | undefined
                                interval?: string | undefined
                                newUsers?: string | undefined
                                existingUsers?: string | undefined
                              }
                            | undefined
                          ee?:
                            | {
                                syncActiveState?: string | undefined
                                syncTeams?: string | undefined
                                syncRoles?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    saml?:
                      | {
                          enabled?: string | undefined
                          users?: number | undefined
                          signatureValidationType?: string | undefined
                          generateUsername?: string | undefined
                          updateSubscriptionsOnLogin?: string | undefined
                          syncRoles?: string | undefined
                          userDataCustomFieldMap?: boolean | undefined
                        }
                      | undefined
                    cas?:
                      | {
                          enabled?: boolean | undefined
                          users?: number | undefined
                          allowUserCreation?: boolean | undefined
                          alwaysSyncUserData?: boolean | undefined
                        }
                      | undefined
                    oauth?:
                      | {
                          apple?:
                            | { enabled?: boolean | undefined; users?: number | undefined }
                            | undefined
                          github?:
                            | { enabled?: boolean | undefined; users?: number | undefined }
                            | undefined
                          gitlab?:
                            | { enabled?: boolean | undefined; users?: number | undefined }
                            | undefined
                          google?:
                            | { enabled?: boolean | undefined; users?: number | undefined }
                            | undefined
                          nextcloud?:
                            | { enabled?: boolean | undefined; users?: number | undefined }
                            | undefined
                          custom?: { [x: string]: unknown } | undefined
                        }
                      | undefined
                  }
                | undefined
              importer?:
                | {
                    totalCSVImportedUsers?: number | undefined
                    totalHipchatEnterpriseImportedUsers?: number | undefined
                    totalSlackImportedUsers?: number | undefined
                    totalSlackUsersImportedUsers?: number | undefined
                  }
                | undefined
              videoConf?:
                | {
                    videoConference?:
                      | { started?: number | undefined; ended?: number | undefined }
                      | undefined
                    direct?:
                      | {
                          calling?: number | undefined
                          started?: number | undefined
                          ended?: number | undefined
                        }
                      | undefined
                    livechat?:
                      | { started?: number | undefined; ended?: number | undefined }
                      | undefined
                    settings?:
                      | {
                          provider?: string | undefined
                          dms?: string | undefined
                          channels?: string | undefined
                          groups?: string | undefined
                          teams?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              contactVerification?:
                | {
                    totalContacts?: number | undefined
                    totalUnknownContacts?: number | undefined
                    totalMergedContacts?: string | undefined
                    totalConflicts?: number | undefined
                    totalResolvedConflicts?: string | undefined
                    totalBlockedContacts?: number | undefined
                    totalPartiallyBlockedContacts?: number | undefined
                    totalFullyBlockedContacts?: number | undefined
                    totalVerifiedContacts?: number | undefined
                    avgChannelsPerContact?: number | undefined
                    totalContactsWithoutChannels?: number | undefined
                    totalImportedContacts?: string | undefined
                    totalUpsellViews?: string | undefined
                    totalUpsellClicks?: string | undefined
                  }
                | undefined
              dashboardCount?: number | undefined
              messageAuditApply?: number | undefined
              messageAuditLoad?: number | undefined
              joinJitsiButton?: number | undefined
              slashCommandsJitsi?: number | undefined
              settings?:
                | {
                    accounts?: { account2fa?: boolean | undefined } | undefined
                    cannedResponses?: { cannedResponsesEnabled?: boolean | undefined } | undefined
                    e2ee?:
                      | {
                          e2e?: boolean | undefined
                          e2eDefaultDirectRoom?: boolean | undefined
                          e2eDefaultPrivateRoom?: boolean | undefined
                        }
                      | undefined
                    email?:
                      | {
                          smtp?:
                            | {
                                smtpHost?: string | undefined
                                smtpPort?: string | undefined
                                fromEmail?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    fileUpload?: { fileUploadEnable?: boolean | undefined } | undefined
                    general?:
                      | {
                          apps?:
                            | {
                                frameworkDevMode?: string | undefined
                                frameworkEnable?: string | undefined
                              }
                            | undefined
                          nps?: { surveyEnabled?: boolean | undefined } | undefined
                          update?: { updateChecker?: boolean | undefined } | undefined
                        }
                      | undefined
                    liveStreamAndBroadcasting?:
                      | { liveStream?: string | undefined; broadcasting?: string | undefined }
                      | undefined
                    message?:
                      | {
                          allowEditing?: boolean | undefined
                          allowDeleting?: boolean | undefined
                          allowUnrecognizedSlashCommand?: boolean | undefined
                          allowBadWordsFilter?: boolean | undefined
                          readReceiptEnabled?: boolean | undefined
                          readReceiptStoreUsers?: boolean | undefined
                        }
                      | undefined
                    push?: { pushEnable?: boolean | undefined } | undefined
                    search?:
                      | {
                          defaultProvider?: { globalSearchEnabled?: string | undefined } | undefined
                        }
                      | undefined
                    threads?: { threadsEnabled?: boolean | undefined } | undefined
                    webRTC?:
                      | {
                          webRTCEnableChannel?: string | undefined
                          webRTCEnablePrivate?: string | undefined
                          webRTCEnableDirect?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              totalBroadcastRooms?: number | undefined
              totalTriggeredEmails?: number | undefined
              pushQueue?: number | undefined
              integrations?:
                | {
                    totalIntegrations?: number | undefined
                    totalIncoming?: number | undefined
                    totalIncomingActive?: number | undefined
                    totalOutgoing?: number | undefined
                    totalOutgoingActive?: number | undefined
                    totalWithScriptEnabled?: number | undefined
                  }
                | undefined
              enterprise?:
                | {
                    modules?: string[] | undefined
                    tags?: string[] | undefined
                    seatRequests?: number | undefined
                    livechatTags?: number | undefined
                    cannedResponses?: number | undefined
                    slas?: number | undefined
                    omnichannelRoomsWithPriorities?: number | undefined
                    omnichannelRoomsWithSlas?: number | undefined
                    businessUnits?: number | undefined
                    omnichannelPdfTranscriptSucceeded?: number | undefined
                    livechatMonitors?: number | undefined
                  }
                | undefined
              teams?:
                | {
                    totalTeams?: number | undefined
                    totalRoomsInsideTeams?: number | undefined
                    totalDefaultRoomsInsideTeams?: number | undefined
                  }
                | undefined
              totalRoomsWithStarred?: number | undefined
              totalRoomsWithPinned?: number | undefined
              totalUserTOTP?: number | undefined
              totalUserEmail2fa?: number | undefined
              totalPinned?: number | undefined
              totalStarred?: number | undefined
              totalLinkInvitation?: number | undefined
              totalLinkInvitationUses?: number | undefined
              totalEmailInvitation?: number | undefined
              totalE2ERooms?: number | undefined
              logoChange?: boolean | undefined
              showHomeButton?: boolean | undefined
              totalEncryptedMessages?: number | undefined
              totalManuallyAddedUsers?: number | undefined
              totalSubscriptionRoles?: number | undefined
              totalUserRoles?: number | undefined
              totalCustomRoles?: number | undefined
              totalWebRTCCalls?: string | undefined
              uncaughtExceptionsCount?: number | undefined
              push?: number | undefined
              pushSecured?: boolean | undefined
              homeTitleChanged?: boolean | undefined
              homeBodyChanged?: boolean | undefined
              customCSSChanged?: boolean | undefined
              onLogoutCustomScriptChanged?: boolean | undefined
              loggedOutCustomScriptChanged?: boolean | undefined
              loggedInCustomScriptChanged?: boolean | undefined
              dailyPeakConnections?: number | undefined
              maxMonthlyPeakConnections?: number | undefined
              matrixFederation?:
                | {
                    enabled?: boolean | undefined
                    maximumSizeOfPublicRoomsUsers?: boolean | undefined
                    biggestRoom?: string | undefined
                    smallestRoom?: string | undefined
                    amountOfExternalUsers?: number | undefined
                    amountOfFederatedRooms?: number | undefined
                    externalConnectedServers?:
                      | {
                          quantity?: number | undefined
                          servers?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                  }
                | undefined
              createdAt?: string | undefined
              _updatedAt?: string | undefined
              statsToken?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { refresh?: boolean | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { refresh?: boolean | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/statistics.telemetry': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                params: {
                  eventName: 'slashCommandsStats' | 'updateCounter'
                  timestamp?: number | undefined
                  command?: string | undefined
                  settingsId?: string | undefined
                }[]
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                params: {
                  eventName: 'slashCommandsStats' | 'updateCounter'
                  timestamp?: number | undefined
                  command?: string | undefined
                  settingsId?: string | undefined
                }[]
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                params: {
                  eventName: 'slashCommandsStats' | 'updateCounter'
                  timestamp?: number | undefined
                  command?: string | undefined
                  settingsId?: string | undefined
                }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/engagement-dashboard/users/new-users': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              days?: { day?: string | undefined; users?: number | undefined }[] | undefined
              period?: { count?: number | undefined; variation?: number | undefined } | undefined
              yesterday?: { count?: number | undefined; variation?: number | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/users/active-users': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              month?:
                | {
                    usersList?: string[] | undefined
                    users?: number | undefined
                    day?: number | undefined
                    month?: number | undefined
                    year?: number | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/users/users-by-time-of-the-day-in-a-week': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              week?:
                | {
                    users?: number | undefined
                    hour?: number | undefined
                    day?: number | undefined
                    month?: number | undefined
                    year?: number | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/users/chat-busier/hourly-data': {
      $get:
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              hours?: { users?: number | undefined; hour?: number | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/users/chat-busier/weekly-data': {
      $get:
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              month?:
                | {
                    users?: number | undefined
                    day?: number | undefined
                    month?: number | undefined
                    year?: number | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/messages/messages-sent': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              days?: { day?: string | undefined; messages?: number | undefined }[] | undefined
              period?: { count?: number | undefined; variation?: number | undefined } | undefined
              yesterday?: { count?: number | undefined; variation?: number | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/messages/origin': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              origins?: { messages?: number | undefined; t?: string | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/messages/top-five-popular-channels': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              channels?:
                | {
                    messages?: number | undefined
                    t?: string | undefined
                    name?: string | undefined
                    usernames?: { [x: string]: unknown }[] | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/engagement-dashboard/channels/list': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              channels?:
                | {
                    room?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          ts?: string | undefined
                          t?: string | undefined
                          _updatedAt?: string | undefined
                        }
                      | undefined
                    messages?: number | undefined
                    lastWeekMessages?: number | undefined
                    diffFromLastWeek?: number | undefined
                  }[]
                | undefined
              total?: number | undefined
              offset?: number | undefined
              count?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
