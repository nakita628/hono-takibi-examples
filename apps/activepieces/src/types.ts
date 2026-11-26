type FlowRun = {
  id: string
  created: string
  updated: string
  projectId: string
  flowId: string
  parentRunId?: string | undefined
  failParentOnFailure: boolean
  triggeredBy?: string | undefined
  tags?: string[] | undefined
  flowVersionId: string
  flowVersion?: { displayName?: string | undefined } | undefined
  logsFileId?: (string | null) | undefined
  status:
    | 'FAILED'
    | 'QUOTA_EXCEEDED'
    | 'INTERNAL_ERROR'
    | 'PAUSED'
    | 'QUEUED'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'MEMORY_LIMIT_EXCEEDED'
    | 'TIMEOUT'
    | 'CANCELED'
    | 'LOG_SIZE_EXCEEDED'
  startTime?: (string | null) | undefined
  finishTime?: (string | null) | undefined
  environment: 'PRODUCTION' | 'TESTING'
  steps?: ({ [key: string]: any } | null) | undefined
  failedStep?: { name: string; displayName: string } | undefined
  stepNameToTest?: string | undefined
  archivedAt?: (string | null) | undefined
  stepsCount?: number | undefined
}
type User = {
  id: string
  email: string
  firstName: string
  status: 'ACTIVE' | 'INACTIVE'
  externalId?: (string | null) | undefined
  platformId?: (string | null) | undefined
  platformRole: 'ADMIN' | 'MEMBER' | 'OPERATOR'
  lastName: string
  created: string
  updated: string
  lastActiveDate?: (string | null) | undefined
  imageUrl?: (string | null) | undefined
}
type AppConnection = {
  id: string
  created: string
  updated: string
  externalId: string
  displayName: string
  type:
    | 'OAUTH2'
    | 'PLATFORM_OAUTH2'
    | 'CLOUD_OAUTH2'
    | 'SECRET_TEXT'
    | 'BASIC_AUTH'
    | 'CUSTOM_AUTH'
    | 'NO_AUTH'
  pieceName: string
  projectIds: string[]
  platformId?: (string | null) | undefined
  scope: 'PROJECT' | 'PLATFORM'
  status: 'ACTIVE' | 'MISSING' | 'ERROR'
  ownerId?: (string | null) | undefined
  owner?: (User | null) | undefined
  metadata?: ({ [key: string]: any } | null) | undefined
  flowIds?: (string[] | null) | undefined
  pieceVersion: string
  preSelectForNewProjects: boolean
  usingSecretManager: boolean
}
type Variable = {
  id: string
  created: string
  updated: string
  name: string
  projectId: string
  platformId: string
  ownerId?: (string | null) | undefined
  owner?: (User | null) | undefined
  metadata?: ({ [key: string]: any } | null) | undefined
}
type UserInvitation = {
  id: string
  created: string
  updated: string
  email: string
  status: 'PENDING' | 'ACCEPTED'
  type: 'PLATFORM' | 'PROJECT'
  platformId: string
  platformRole?: ('ADMIN' | 'MEMBER' | 'OPERATOR' | null) | undefined
  projectId?: (string | null) | undefined
  projectRoleId?: (string | null) | undefined
  projectRole?:
    | ({
        id: string
        created: string
        updated: string
        name: string
        permissions: string[]
        platformId?: (string | null) | undefined
        type: string
        userCount?: number | undefined
      } | null)
    | undefined
}
type Project = {
  id: string
  created: string
  updated: string
  ownerId: string
  displayName: string
  platformId: string
  maxConcurrentJobs?: (number | null) | undefined
  type: 'TEAM' | 'PERSONAL'
  icon: {
    color:
      | 'RED'
      | 'BLUE'
      | 'YELLOW'
      | 'PURPLE'
      | 'GREEN'
      | 'PINK'
      | 'VIOLET'
      | 'ORANGE'
      | 'DARK_GREEN'
      | 'CYAN'
      | 'LAVENDER'
      | 'DEEP_ORANGE'
  }
  externalId?: (string | null) | undefined
  releasesEnabled: boolean
  metadata?: ({ [key: string]: any } | null) | undefined
  poolId?: (string | null) | undefined
  plan: {
    id: string
    created: string
    updated: string
    projectId: string
    locked: boolean
    name: string
    piecesFilterType: 'NONE' | 'ALLOWED'
    pieces: string[]
  }
  analytics: { totalUsers: number; activeUsers: number; totalFlows: number; activeFlows: number }
}
type GitRepo = {
  id: string
  created: string
  updated: string
  remoteUrl: string
  branch: string
  branchType: 'PRODUCTION' | 'DEVELOPMENT'
  projectId: string
  slug: string
}
type ProjectRelease = {
  id: string
  created: string
  updated: string
  projectId: string
  name: string
  description?: (string | null) | undefined
  importedBy?: (string | null) | undefined
  fileId: string
  type: 'GIT' | 'PROJECT' | 'ROLLBACK'
  importedByUser?: User | undefined
}
type EmbeddingInputInput = { allowedEmbedOrigins: string[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/folders': {
      $post: {
        input: { json: { displayName: string; projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { query: { limit?: unknown; cursor?: string; projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/folders/:id': {
      $post: {
        input: { param: { id: string } } & { json: { displayName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/flows': {
      $post: {
        input: {
          json: {
            displayName: string
            folderId?: string
            folderName?: string
            projectId: string
            templateId?: string
            metadata?: { [key: string]: any }
          }
        }
        output: {
          id: string
          created: string
          updated: string
          projectId: string
          externalId: string
          ownerId?: (string | null) | undefined
          folderId?: (string | null) | undefined
          status: 'ENABLED' | 'DISABLED'
          publishedVersionId?: (string | null) | undefined
          metadata?: ({ [key: string]: any } | null) | undefined
          operationStatus: 'NONE' | 'DELETING' | 'ENABLING' | 'DISABLING'
          timeSavedPerRun?: (number | null) | undefined
          templateId?: (string | null) | undefined
          version: {
            id: string
            created: string
            updated: string
            flowId: string
            displayName: string
            trigger:
              | {
                  name: string
                  valid: boolean
                  displayName: string
                  nextAction?: any | undefined
                  lastUpdatedDate: string
                  type: 'PIECE_TRIGGER'
                  settings: {
                    sampleData?:
                      | {
                          sampleDataFileId?: string | undefined
                          sampleDataInputFileId?: string | undefined
                          lastTestDate?: string | undefined
                        }
                      | undefined
                    propertySettings: {
                      [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any | undefined }
                    }
                    customLogoUrl?: string | undefined
                    pieceName: string
                    pieceVersion: string
                    triggerName?: string | undefined
                    input: { [key: string]: any }
                  }
                }
              | {
                  name: string
                  valid: boolean
                  displayName: string
                  nextAction?: any | undefined
                  lastUpdatedDate: string
                  type: 'EMPTY'
                  settings: any
                }
            updatedBy?: (string | null) | undefined
            valid: boolean
            schemaVersion?: (string | null) | undefined
            agentIds: string[]
            state: 'LOCKED' | 'DRAFT'
            connectionIds: string[]
            backupFiles?: ({ [key: string]: string } | null) | undefined
            notes: {
              id: string
              content: string
              ownerId?: (string | null) | undefined
              color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
              position: { x: number; y: number }
              size: { width: number; height: number }
              createdAt: string
              updatedAt: string
            }[]
          }
          triggerSource?:
            | {
                schedule?:
                  | ({ type: 'CRON_EXPRESSION'; cronExpression: string; timezone: string } | null)
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            folderId?: string
            limit?: unknown
            cursor?: string
            status?: unknown
            projectId: string
            name?: string
            agentExternalIds?: unknown
            versionState?: 'LOCKED' | 'DRAFT'
            connectionExternalIds?: unknown
            externalIds?: unknown
          }
        }
        output: {
          data: {
            id: string
            created: string
            updated: string
            projectId: string
            externalId: string
            ownerId?: (string | null) | undefined
            folderId?: (string | null) | undefined
            status: 'ENABLED' | 'DISABLED'
            publishedVersionId?: (string | null) | undefined
            metadata?: ({ [key: string]: any } | null) | undefined
            operationStatus: 'NONE' | 'DELETING' | 'ENABLING' | 'DISABLING'
            timeSavedPerRun?: (number | null) | undefined
            templateId?: (string | null) | undefined
            version: {
              id: string
              created: string
              updated: string
              flowId: string
              displayName: string
              trigger:
                | {
                    name: string
                    valid: boolean
                    displayName: string
                    nextAction?: any | undefined
                    lastUpdatedDate: string
                    type: 'PIECE_TRIGGER'
                    settings: {
                      sampleData?:
                        | {
                            sampleDataFileId?: string | undefined
                            sampleDataInputFileId?: string | undefined
                            lastTestDate?: string | undefined
                          }
                        | undefined
                      propertySettings: {
                        [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any | undefined }
                      }
                      customLogoUrl?: string | undefined
                      pieceName: string
                      pieceVersion: string
                      triggerName?: string | undefined
                      input: { [key: string]: any }
                    }
                  }
                | {
                    name: string
                    valid: boolean
                    displayName: string
                    nextAction?: any | undefined
                    lastUpdatedDate: string
                    type: 'EMPTY'
                    settings: any
                  }
              updatedBy?: (string | null) | undefined
              valid: boolean
              schemaVersion?: (string | null) | undefined
              agentIds: string[]
              state: 'LOCKED' | 'DRAFT'
              connectionIds: string[]
              backupFiles?: ({ [key: string]: string } | null) | undefined
              notes: {
                id: string
                content: string
                ownerId?: (string | null) | undefined
                color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                position: { x: number; y: number }
                size: { width: number; height: number }
                createdAt: string
                updatedAt: string
              }[]
            }
            triggerSource?:
              | {
                  schedule?:
                    | ({ type: 'CRON_EXPRESSION'; cronExpression: string; timezone: string } | null)
                    | undefined
                }
              | undefined
          }[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/flows/:id': {
      $post: {
        input: { param: { id: string } } & {
          json:
            | {
                type: 'MOVE_ACTION'
                request: {
                  name: string
                  newParentStep: string
                  stepLocationRelativeToNewParent?: 'AFTER' | 'INSIDE_LOOP' | 'INSIDE_BRANCH'
                  branchIndex?: number
                }
              }
            | { type: 'CHANGE_STATUS'; request: { status: 'ENABLED' | 'DISABLED' } }
            | { type: 'LOCK_AND_PUBLISH'; request: { status?: 'ENABLED' | 'DISABLED' } }
            | { type: 'USE_AS_DRAFT'; request: { versionId: string } }
            | { type: 'LOCK_FLOW'; request: { [key: string]: unknown } }
            | {
                type: 'IMPORT_FLOW'
                request: {
                  displayName: string
                  trigger:
                    | {
                        name: string
                        valid: boolean
                        displayName: string
                        nextAction?: any
                        lastUpdatedDate: string
                        type: 'PIECE_TRIGGER'
                        settings: {
                          sampleData?: {
                            sampleDataFileId?: string
                            sampleDataInputFileId?: string
                            lastTestDate?: string
                          }
                          propertySettings: {
                            [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any }
                          }
                          customLogoUrl?: string
                          pieceName: string
                          pieceVersion: string
                          triggerName?: string
                          input: { [key: string]: any }
                        }
                      }
                    | {
                        name: string
                        valid: boolean
                        displayName: string
                        nextAction?: any
                        lastUpdatedDate: string
                        type: 'EMPTY'
                        settings: any
                      }
                  schemaVersion?: string | null
                  notes?:
                    | {
                        id: string
                        content: string
                        ownerId?: string | null
                        color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                        position: { x: number; y: number }
                        size: { width: number; height: number }
                        createdAt: string
                        updatedAt: string
                      }[]
                    | null
                }
              }
            | { type: 'CHANGE_NAME'; request: { displayName: string } }
            | { type: 'DELETE_ACTION'; request: { names: string[] } }
            | {
                type: 'UPDATE_ACTION'
                request:
                  | ({
                      name: string
                      valid: boolean
                      displayName: string
                      skip?: boolean
                      type: 'CODE'
                    } & {
                      settings: {
                        customLogoUrl?: string
                        sourceCode: { packageJson: string; code: string }
                        input: { [key: string]: any }
                        errorHandlingOptions?: {
                          continueOnFailure?: { value?: boolean }
                          retryOnFailure?: { value?: boolean }
                        }
                      }
                    })
                  | ({
                      name: string
                      valid: boolean
                      displayName: string
                      skip?: boolean
                      type: 'LOOP_ON_ITEMS'
                    } & { settings: { customLogoUrl?: string; items: string } })
                  | ({
                      name: string
                      valid: boolean
                      displayName: string
                      skip?: boolean
                      type: 'PIECE'
                    } & {
                      settings: {
                        customLogoUrl?: string
                        propertySettings: {
                          [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any }
                        }
                        pieceName: string
                        pieceVersion: string
                        actionName?: string
                        input: { [key: string]: any }
                        errorHandlingOptions?: {
                          continueOnFailure?: { value?: boolean }
                          retryOnFailure?: { value?: boolean }
                        }
                      }
                    })
                  | ({
                      name: string
                      valid: boolean
                      displayName: string
                      skip?: boolean
                      type: 'ROUTER'
                    } & {
                      settings: {
                        customLogoUrl?: string
                        branches: (
                          | {
                              conditions: (
                                | {
                                    firstValue: string
                                    secondValue: string
                                    caseSensitive?: boolean
                                    operator?:
                                      | 'TEXT_CONTAINS'
                                      | 'TEXT_DOES_NOT_CONTAIN'
                                      | 'TEXT_EXACTLY_MATCHES'
                                      | 'TEXT_DOES_NOT_EXACTLY_MATCH'
                                      | 'TEXT_START_WITH'
                                      | 'TEXT_DOES_NOT_START_WITH'
                                      | 'TEXT_ENDS_WITH'
                                      | 'TEXT_DOES_NOT_END_WITH'
                                      | 'LIST_CONTAINS'
                                      | 'LIST_DOES_NOT_CONTAIN'
                                  }
                                | {
                                    firstValue: string
                                    secondValue: string
                                    operator?:
                                      | 'NUMBER_IS_GREATER_THAN'
                                      | 'NUMBER_IS_LESS_THAN'
                                      | 'NUMBER_IS_EQUAL_TO'
                                  }
                                | {
                                    firstValue: string
                                    secondValue: string
                                    operator?: 'DATE_IS_BEFORE' | 'DATE_IS_EQUAL' | 'DATE_IS_AFTER'
                                  }
                                | {
                                    firstValue: string
                                    operator?:
                                      | 'EXISTS'
                                      | 'DOES_NOT_EXIST'
                                      | 'BOOLEAN_IS_TRUE'
                                      | 'BOOLEAN_IS_FALSE'
                                      | 'LIST_IS_EMPTY'
                                      | 'LIST_IS_NOT_EMPTY'
                                  }
                              )[][]
                              branchType: 'CONDITION'
                              branchName: string
                            }
                          | { branchType: 'FALLBACK'; branchName: string }
                        )[]
                        executionType: 'EXECUTE_ALL_MATCH' | 'EXECUTE_FIRST_MATCH'
                      }
                    })
              }
            | {
                type: 'ADD_ACTION'
                request: {
                  parentStep: string
                  stepLocationRelativeToParent?: 'AFTER' | 'INSIDE_LOOP' | 'INSIDE_BRANCH'
                  branchIndex?: number
                  action:
                    | ({
                        name: string
                        valid: boolean
                        displayName: string
                        skip?: boolean
                        type: 'CODE'
                      } & {
                        settings: {
                          customLogoUrl?: string
                          sourceCode: { packageJson: string; code: string }
                          input: { [key: string]: any }
                          errorHandlingOptions?: {
                            continueOnFailure?: { value?: boolean }
                            retryOnFailure?: { value?: boolean }
                          }
                        }
                      })
                    | ({
                        name: string
                        valid: boolean
                        displayName: string
                        skip?: boolean
                        type: 'LOOP_ON_ITEMS'
                      } & { settings: { customLogoUrl?: string; items: string } })
                    | ({
                        name: string
                        valid: boolean
                        displayName: string
                        skip?: boolean
                        type: 'PIECE'
                      } & {
                        settings: {
                          customLogoUrl?: string
                          propertySettings: {
                            [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any }
                          }
                          pieceName: string
                          pieceVersion: string
                          actionName?: string
                          input: { [key: string]: any }
                          errorHandlingOptions?: {
                            continueOnFailure?: { value?: boolean }
                            retryOnFailure?: { value?: boolean }
                          }
                        }
                      })
                    | ({
                        name: string
                        valid: boolean
                        displayName: string
                        skip?: boolean
                        type: 'ROUTER'
                      } & {
                        settings: {
                          customLogoUrl?: string
                          branches: (
                            | {
                                conditions: (
                                  | {
                                      firstValue: string
                                      secondValue: string
                                      caseSensitive?: boolean
                                      operator?:
                                        | 'TEXT_CONTAINS'
                                        | 'TEXT_DOES_NOT_CONTAIN'
                                        | 'TEXT_EXACTLY_MATCHES'
                                        | 'TEXT_DOES_NOT_EXACTLY_MATCH'
                                        | 'TEXT_START_WITH'
                                        | 'TEXT_DOES_NOT_START_WITH'
                                        | 'TEXT_ENDS_WITH'
                                        | 'TEXT_DOES_NOT_END_WITH'
                                        | 'LIST_CONTAINS'
                                        | 'LIST_DOES_NOT_CONTAIN'
                                    }
                                  | {
                                      firstValue: string
                                      secondValue: string
                                      operator?:
                                        | 'NUMBER_IS_GREATER_THAN'
                                        | 'NUMBER_IS_LESS_THAN'
                                        | 'NUMBER_IS_EQUAL_TO'
                                    }
                                  | {
                                      firstValue: string
                                      secondValue: string
                                      operator?:
                                        | 'DATE_IS_BEFORE'
                                        | 'DATE_IS_EQUAL'
                                        | 'DATE_IS_AFTER'
                                    }
                                  | {
                                      firstValue: string
                                      operator?:
                                        | 'EXISTS'
                                        | 'DOES_NOT_EXIST'
                                        | 'BOOLEAN_IS_TRUE'
                                        | 'BOOLEAN_IS_FALSE'
                                        | 'LIST_IS_EMPTY'
                                        | 'LIST_IS_NOT_EMPTY'
                                    }
                                )[][]
                                branchType: 'CONDITION'
                                branchName: string
                              }
                            | { branchType: 'FALLBACK'; branchName: string }
                          )[]
                          executionType: 'EXECUTE_ALL_MATCH' | 'EXECUTE_FIRST_MATCH'
                        }
                      })
                }
              }
            | {
                type: 'UPDATE_TRIGGER'
                request:
                  | {
                      name: string
                      valid: boolean
                      displayName: string
                      nextAction?: any
                      type: 'EMPTY'
                      settings: any
                    }
                  | ({
                      name: string
                      valid: boolean
                      displayName: string
                      nextAction?: any
                      type: 'PIECE_TRIGGER'
                    } & {
                      settings: {
                        propertySettings: {
                          [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any }
                        }
                        customLogoUrl?: string
                        pieceName: string
                        pieceVersion: string
                        triggerName?: string
                        input: { [key: string]: any }
                      }
                    })
              }
            | { type: 'CHANGE_FOLDER'; request: { folderId?: string | null } }
            | { type: 'DUPLICATE_ACTION'; request: { stepName: string } }
            | { type: 'DELETE_BRANCH'; request: { branchIndex: number; stepName: string } }
            | {
                type: 'ADD_BRANCH'
                request: {
                  branchIndex: number
                  stepName: string
                  conditions?: (
                    | {
                        firstValue: string
                        secondValue: string
                        caseSensitive?: boolean
                        operator?:
                          | 'TEXT_CONTAINS'
                          | 'TEXT_DOES_NOT_CONTAIN'
                          | 'TEXT_EXACTLY_MATCHES'
                          | 'TEXT_DOES_NOT_EXACTLY_MATCH'
                          | 'TEXT_START_WITH'
                          | 'TEXT_DOES_NOT_START_WITH'
                          | 'TEXT_ENDS_WITH'
                          | 'TEXT_DOES_NOT_END_WITH'
                          | 'LIST_CONTAINS'
                          | 'LIST_DOES_NOT_CONTAIN'
                      }
                    | {
                        firstValue: string
                        secondValue: string
                        operator?:
                          | 'NUMBER_IS_GREATER_THAN'
                          | 'NUMBER_IS_LESS_THAN'
                          | 'NUMBER_IS_EQUAL_TO'
                      }
                    | {
                        firstValue: string
                        secondValue: string
                        operator?: 'DATE_IS_BEFORE' | 'DATE_IS_EQUAL' | 'DATE_IS_AFTER'
                      }
                    | {
                        firstValue: string
                        operator?:
                          | 'EXISTS'
                          | 'DOES_NOT_EXIST'
                          | 'BOOLEAN_IS_TRUE'
                          | 'BOOLEAN_IS_FALSE'
                          | 'LIST_IS_EMPTY'
                          | 'LIST_IS_NOT_EMPTY'
                      }
                  )[][]
                  branchName: string
                }
              }
            | { type: 'DUPLICATE_BRANCH'; request: { branchIndex: number; stepName: string } }
            | { type: 'SET_SKIP_ACTION'; request: { names: string[]; skip: boolean } }
            | { type: 'UPDATE_METADATA'; request: { metadata?: { [key: string]: any } | null } }
            | {
                type: 'MOVE_BRANCH'
                request: { sourceBranchIndex: number; targetBranchIndex: number; stepName: string }
              }
            | {
                type: 'SAVE_SAMPLE_DATA'
                request: { stepName: string; payload: any; type: 'INPUT' | 'OUTPUT' }
              }
            | { type: 'UPDATE_MINUTES_SAVED'; request: { timeSavedPerRun?: number | null } }
            | { type: 'UPDATE_OWNER'; request: { ownerId: string } }
            | {
                type: 'UPDATE_NOTE'
                request: {
                  id: string
                  content: string
                  ownerId?: string | null
                  color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                  position: { x: number; y: number }
                  size: { width: number; height: number }
                }
              }
            | { type: 'DELETE_NOTE'; request: { id: string } }
            | {
                type: 'ADD_NOTE'
                request: {
                  id: string
                  content: string
                  color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                  position: { x: number; y: number }
                  size: { width: number; height: number }
                }
              }
            | {
                type: 'UPDATE_SAMPLE_DATA_INFO'
                request: {
                  stepName: string
                  sampleDataSettings?: {
                    sampleDataFileId?: string
                    sampleDataInputFileId?: string
                  } | null
                }
              }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { query: { versionId?: string } }
        output: {
          id: string
          created: string
          updated: string
          projectId: string
          externalId: string
          ownerId?: (string | null) | undefined
          folderId?: (string | null) | undefined
          status: 'ENABLED' | 'DISABLED'
          publishedVersionId?: (string | null) | undefined
          metadata?: ({ [key: string]: any } | null) | undefined
          operationStatus: 'NONE' | 'DELETING' | 'ENABLING' | 'DISABLING'
          timeSavedPerRun?: (number | null) | undefined
          templateId?: (string | null) | undefined
          version: {
            id: string
            created: string
            updated: string
            flowId: string
            displayName: string
            trigger:
              | {
                  name: string
                  valid: boolean
                  displayName: string
                  nextAction?: any | undefined
                  lastUpdatedDate: string
                  type: 'PIECE_TRIGGER'
                  settings: {
                    sampleData?:
                      | {
                          sampleDataFileId?: string | undefined
                          sampleDataInputFileId?: string | undefined
                          lastTestDate?: string | undefined
                        }
                      | undefined
                    propertySettings: {
                      [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any | undefined }
                    }
                    customLogoUrl?: string | undefined
                    pieceName: string
                    pieceVersion: string
                    triggerName?: string | undefined
                    input: { [key: string]: any }
                  }
                }
              | {
                  name: string
                  valid: boolean
                  displayName: string
                  nextAction?: any | undefined
                  lastUpdatedDate: string
                  type: 'EMPTY'
                  settings: any
                }
            updatedBy?: (string | null) | undefined
            valid: boolean
            schemaVersion?: (string | null) | undefined
            agentIds: string[]
            state: 'LOCKED' | 'DRAFT'
            connectionIds: string[]
            backupFiles?: ({ [key: string]: string } | null) | undefined
            notes: {
              id: string
              content: string
              ownerId?: (string | null) | undefined
              color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
              position: { x: number; y: number }
              size: { width: number; height: number }
              createdAt: string
              updatedAt: string
            }[]
          }
          triggerSource?:
            | {
                schedule?:
                  | ({ type: 'CRON_EXPRESSION'; cronExpression: string; timezone: string } | null)
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/v1/flows/:id/template': {
      $get: {
        input: { param: { id: string } } & { query: { versionId?: string } }
        output: {
          name: string
          type: 'OFFICIAL' | 'SHARED' | 'CUSTOM'
          summary: string
          description: string
          tags: { title: string; color: string; icon?: string | undefined }[]
          blogUrl?: (string | null) | undefined
          metadata?: ({ [key: string]: any } | null) | undefined
          author: string
          categories: string[]
          pieces: string[]
          flows?:
            | {
                displayName: string
                trigger:
                  | {
                      name: string
                      valid: boolean
                      displayName: string
                      nextAction?: any | undefined
                      lastUpdatedDate: string
                      type: 'PIECE_TRIGGER'
                      settings: {
                        sampleData?:
                          | {
                              sampleDataFileId?: string | undefined
                              sampleDataInputFileId?: string | undefined
                              lastTestDate?: string | undefined
                            }
                          | undefined
                        propertySettings: {
                          [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any | undefined }
                        }
                        customLogoUrl?: string | undefined
                        pieceName: string
                        pieceVersion: string
                        triggerName?: string | undefined
                        input: { [key: string]: any }
                      }
                    }
                  | {
                      name: string
                      valid: boolean
                      displayName: string
                      nextAction?: any | undefined
                      lastUpdatedDate: string
                      type: 'EMPTY'
                      settings: any
                    }
                valid: boolean
                schemaVersion?: (string | null) | undefined
                description?: string | undefined
                notes?:
                  | {
                      id: string
                      content: string
                      ownerId?: (string | null) | undefined
                      color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                      position: { x: number; y: number }
                      size: { width: number; height: number }
                      createdAt: string
                      updatedAt: string
                    }[]
                  | undefined
              }[]
            | undefined
          tables?:
            | {
                name: string
                externalId: string
                fields: {
                  name: string
                  type: string
                  data?: ({ options: { value: string }[] } | null) | undefined
                  externalId: string
                }[]
                status?: (string | null) | undefined
                trigger?: (string | null) | undefined
                data?:
                  | ({ type: 'CSV'; rows: { fieldId: string; value: string }[][] } | null)
                  | undefined
              }[]
            | undefined
          status: 'PUBLISHED' | 'ARCHIVED'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/sample-data/test-step': {
      $post: {
        input: { json: { projectId: string; flowVersionId: string; stepName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/sample-data': {
      $get: {
        input: {
          query: {
            flowId: string
            flowVersionId: string
            stepName: string
            projectId: string
            type: 'INPUT' | 'OUTPUT'
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/flow-runs': {
      $get: {
        input: {
          query: {
            flowId?: unknown
            tags?: unknown
            status?: unknown
            limit?: unknown
            cursor?: string
            createdAfter?: string
            createdBefore?: string
            projectId: string
            failedStepName?: string
            flowRunIds?: unknown
            includeArchived: string
          }
        }
        output: {
          data: {
            id: string
            created: string
            updated: string
            projectId: string
            flowId: string
            parentRunId?: string | undefined
            failParentOnFailure: boolean
            triggeredBy?: string | undefined
            tags?: string[] | undefined
            flowVersionId: string
            flowVersion?: { displayName?: string | undefined } | undefined
            logsFileId?: (string | null) | undefined
            status:
              | 'FAILED'
              | 'QUOTA_EXCEEDED'
              | 'INTERNAL_ERROR'
              | 'PAUSED'
              | 'QUEUED'
              | 'RUNNING'
              | 'SUCCEEDED'
              | 'MEMORY_LIMIT_EXCEEDED'
              | 'TIMEOUT'
              | 'CANCELED'
              | 'LOG_SIZE_EXCEEDED'
            startTime?: (string | null) | undefined
            finishTime?: (string | null) | undefined
            environment: 'PRODUCTION' | 'TESTING'
            failedStep?: { name: string; displayName: string } | undefined
            stepNameToTest?: string | undefined
            archivedAt?: (string | null) | undefined
            stepsCount?: number | undefined
          }[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/flow-runs/count-by-status': {
      $get: {
        input: { query: { projectId: string; createdAfter?: string; createdBefore?: string } }
        output: {
          data: {
            status:
              | 'FAILED'
              | 'QUOTA_EXCEEDED'
              | 'INTERNAL_ERROR'
              | 'PAUSED'
              | 'QUEUED'
              | 'RUNNING'
              | 'SUCCEEDED'
              | 'MEMORY_LIMIT_EXCEEDED'
              | 'TIMEOUT'
              | 'CANCELED'
              | 'LOG_SIZE_EXCEEDED'
            count: number
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/flow-runs/:id': {
      $get: { input: { param: { id: string } }; output: FlowRun; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/flow-runs/cancel': {
      $post: {
        input: {
          json: {
            projectId: string
            flowRunIds?: string[]
            excludeFlowRunIds?: string[]
            status?: ('PAUSED' | 'QUEUED')[]
            flowId?: string[]
            createdAfter?: string
            createdBefore?: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/app-connections': {
      $post: {
        input: {
          json:
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'SECRET_TEXT'
                value: { type: 'SECRET_TEXT'; secret_text: string }
              }
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'OAUTH2'
                value: {
                  client_id: string
                  code: string
                  code_challenge?: string
                  scope: string
                  authorization_method?: 'HEADER' | 'BODY'
                  client_secret: string
                  grant_type?: 'authorization_code' | 'client_credentials'
                  props?: { [key: string]: any }
                  redirect_url: string
                  type: 'OAUTH2'
                }
              }
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'CLOUD_OAUTH2'
                value: {
                  client_id: string
                  code: string
                  code_challenge?: string
                  scope: string
                  authorization_method?: 'HEADER' | 'BODY'
                  props?: { [key: string]: any }
                  type: 'CLOUD_OAUTH2'
                }
              }
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'PLATFORM_OAUTH2'
                value: {
                  client_id: string
                  code: string
                  code_challenge?: string
                  scope: string
                  authorization_method?: 'HEADER' | 'BODY'
                  props?: { [key: string]: any }
                  type: 'PLATFORM_OAUTH2'
                  redirect_url: string
                }
              }
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'BASIC_AUTH'
                value: { username: string; password: string; type: 'BASIC_AUTH' }
              }
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'CUSTOM_AUTH'
                value: { type: 'CUSTOM_AUTH'; props: { [key: string]: any } }
              }
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'NO_AUTH'
                value: { type: 'NO_AUTH' }
              }
            | {
                externalId: string
                displayName: string
                pieceName: string
                projectId: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'PLACEHOLDER'
              }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            cursor?: string
            projectId: string
            scope?: 'PROJECT' | 'PLATFORM'
            pieceName?: unknown
            displayName?: string
            status?: unknown
            limit?: unknown
          }
        }
        output: {
          data: AppConnection[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/app-connections/:id': {
      $get: {
        input: { param: { id: string } }
        output: AppConnection
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          json: { displayName: string; metadata?: { [key: string]: any } }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/v1/app-connections/owners': {
      $get: {
        input: { query: { projectId: string } }
        output: {
          data: { firstName: string; lastName: string; email: string }[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/app-connections/replace': {
      $post: {
        input: {
          json: { sourceAppConnectionId: string; targetAppConnectionId: string; projectId: string }
        }
        output: any
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/v1/app-connections/oauth2/authorization-url': {
      $post: {
        input: {
          json: {
            pieceName: string
            pieceVersion?: string
            projectId?: string
            clientId: string
            redirectUrl: string
            props?: { [key: string]: any }
          }
        }
        output: { authorizationUrl: string; codeVerifier?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/variables': {
      $post: {
        input: {
          json: {
            projectId: string
            name: string
            value: string
            metadata?: { [key: string]: any }
          }
        }
        output: Variable
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { projectId: string; cursor?: string; limit?: unknown; name?: string } }
        output: {
          data: Variable[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/variables/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: { value?: string; metadata?: { [key: string]: any } }
        }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/v1/platforms/:id': {
      $get: {
        input: { param: { id: string } }
        output: {
          federatedAuthProviders?: ({ saml?: ({} | null) | undefined } | null) | undefined
          plan: {
            plan?: (string | null) | undefined
            includedAiCredits: number
            lastFreeAiCreditsRenewalDate?: (string | null) | undefined
            tablesEnabled: boolean
            eventStreamingEnabled: boolean
            aiCreditsAutoTopUpState: 'enabled' | 'disabled'
            aiCreditsAutoTopUpThreshold?: (number | null) | undefined
            aiCreditsAutoTopUpCreditsToAdd?: (number | null) | undefined
            maxAutoTopUpCreditsMonthly?: (number | null) | undefined
            environmentsEnabled: boolean
            analyticsEnabled: boolean
            showPoweredBy: boolean
            auditLogEnabled: boolean
            embeddingEnabled: boolean
            agentsEnabled: boolean
            aiProvidersEnabled: boolean
            chatEnabled: boolean
            managePiecesEnabled: boolean
            manageTemplatesEnabled: boolean
            customAppearanceEnabled: boolean
            teamProjectsLimit: 'NONE' | 'ONE' | 'UNLIMITED'
            projectRolesEnabled: boolean
            globalConnectionsEnabled: boolean
            customRolesEnabled: boolean
            apiKeysEnabled: boolean
            ssoEnabled: boolean
            secretManagersEnabled: boolean
            scimEnabled: boolean
            licenseKey?: (string | null) | undefined
            licenseExpiresAt?: (string | null) | undefined
            stripeCustomerId?: (string | null) | undefined
            stripeSubscriptionId?: (string | null) | undefined
            stripeSubscriptionStatus?: (string | null) | undefined
            stripeSubscriptionStartDate?: (number | null) | undefined
            stripeSubscriptionEndDate?: (number | null) | undefined
            stripeSubscriptionCancelDate?: (number | null) | undefined
            projectsLimit?: (number | null) | undefined
            activeFlowsLimit?: (number | null) | undefined
            dedicatedWorkers?: ({ trustedEnvironment: boolean } | null) | undefined
            canary: boolean
            customDomainsEnabled: boolean
            workerGroupId?: (string | null) | undefined
          }
          usage?:
            | {
                totalAiCreditsUsed: number
                totalAiCreditsUsedThisMonth: number
                aiCreditsRemaining: number
                aiCreditsLimit: number
                activeFlows: number
              }
            | undefined
          id: string
          created: string
          updated: string
          ownerId: string
          name: string
          primaryColor: string
          logoIconUrl: string
          fullLogoUrl: string
          favIconUrl: string
          filteredPieceNames: string[]
          filteredPieceBehavior: 'ALLOWED' | 'BLOCKED'
          cloudAuthEnabled: boolean
          googleAuthEnabled: boolean
          enforceAllowedAuthDomains: boolean
          allowedAuthDomains: string[]
          allowedEmbedOrigins: string[]
          ssoDomain?: (string | null) | undefined
          ssoDomainVerification?:
            | ({
                status: 'PENDING_VERIFICATION' | 'VERIFIED'
                record: { type: 'TXT'; name: string; value: string }
                createdAt: string
              } | null)
            | undefined
          emailAuthEnabled: boolean
          pinnedPieces: string[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/mcp-server': {
      $get: {
        input: { param: { projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & { json: { disabledTools?: string[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/mcp-server/rotate': {
      $post: {
        input: { param: { projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/mcp-server': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { disabledTools?: string[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/mcp-server/rotate': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/v1/mcp-oauth/approve': {
      $post: {
        input: { json: { authRequestId: string; projectId?: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/agent-tools/mcp/validate': {
      $post: {
        input: { param: { projectId: string } } & {
          json: {
            type: 'MCP'
            toolName: string
            serverUrl: string
            protocol: 'sse' | 'streamable-http' | 'http'
            auth:
              | { type: 'none' }
              | { type: 'access_token'; accessToken: string }
              | { type: 'api_key'; apiKey: string; apiKeyHeader: string }
              | { type: 'headers'; headers: { [key: string]: string } }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/users': {
      $get: {
        input: { query: { cursor?: string; limit?: unknown; externalId?: string } }
        output: {
          data: User[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            status?: 'ACTIVE' | 'INACTIVE'
            platformRole?: 'ADMIN' | 'MEMBER' | 'OPERATOR'
            externalId?: string
          }
        }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: {
          id: string
          email: string
          firstName: string
          status: 'ACTIVE' | 'INACTIVE'
          externalId?: (string | null) | undefined
          platformId?: (string | null) | undefined
          platformRole: 'ADMIN' | 'MEMBER' | 'OPERATOR'
          lastName: string
          created: string
          updated: string
          lastActiveDate?: (string | null) | undefined
          imageUrl?: (string | null) | undefined
          badges: { name: string; created: string }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/user-invitations': {
      $post: {
        input: {
          json:
            | { type: 'PROJECT'; email: string; projectId: string; projectRole: string }
            | { type: 'PLATFORM'; email: string; platformRole: 'ADMIN' | 'MEMBER' | 'OPERATOR' }
        }
        output: {
          id: string
          created: string
          updated: string
          email: string
          status: 'PENDING' | 'ACCEPTED'
          type: 'PLATFORM' | 'PROJECT'
          platformId: string
          platformRole?: ('ADMIN' | 'MEMBER' | 'OPERATOR' | null) | undefined
          projectId?: (string | null) | undefined
          projectRoleId?: (string | null) | undefined
          projectRole?:
            | ({
                id: string
                created: string
                updated: string
                name: string
                permissions: string[]
                platformId?: (string | null) | undefined
                type: string
                userCount?: number | undefined
              } | null)
            | undefined
          link?: string | undefined
        }
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: unknown
            cursor?: string
            type: 'PLATFORM' | 'PROJECT'
            projectId?: unknown
            status?: 'PENDING' | 'ACCEPTED'
          }
        }
        output: {
          data: UserInvitation[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/user-invitations/:id': {
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/v1/worker-machines/queue-metrics': {
      $get: {
        input: {}
        output: { queues: { name: string; waiting: number; active: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tables/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            name?: string
            trigger?: 'ON_NEW_RECORD' | 'ON_UPDATE_RECORD'
            status?: 'ENABLED' | 'DISABLED'
            folderId?: string | null
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: {
          id: string
          created: string
          updated: string
          name: string
          folderId?: (string | null) | undefined
          projectId: string
          externalId: string
          status?: ('ENABLED' | 'DISABLED' | null) | undefined
          trigger?: ('ON_NEW_RECORD' | 'ON_UPDATE_RECORD' | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tables': {
      $get: {
        input: {
          query: {
            projectId: string
            limit?: unknown
            cursor?: string
            name?: string
            externalIds?: unknown
            folderId?: string
          }
        }
        output: {
          data: {
            id: string
            created: string
            updated: string
            name: string
            folderId?: (string | null) | undefined
            projectId: string
            externalId: string
            status?: ('ENABLED' | 'DISABLED' | null) | undefined
            trigger?: ('ON_NEW_RECORD' | 'ON_UPDATE_RECORD' | null) | undefined
          }[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tables/:id/template': {
      $get: {
        input: { param: { id: string } }
        output: {
          name: string
          type: 'OFFICIAL' | 'SHARED' | 'CUSTOM'
          summary: string
          description: string
          tags: { title: string; color: string; icon?: string | undefined }[]
          blogUrl?: (string | null) | undefined
          metadata?: ({ [key: string]: any } | null) | undefined
          author: string
          categories: string[]
          pieces: string[]
          flows?:
            | {
                displayName: string
                trigger:
                  | {
                      name: string
                      valid: boolean
                      displayName: string
                      nextAction?: any | undefined
                      lastUpdatedDate: string
                      type: 'PIECE_TRIGGER'
                      settings: {
                        sampleData?:
                          | {
                              sampleDataFileId?: string | undefined
                              sampleDataInputFileId?: string | undefined
                              lastTestDate?: string | undefined
                            }
                          | undefined
                        propertySettings: {
                          [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any | undefined }
                        }
                        customLogoUrl?: string | undefined
                        pieceName: string
                        pieceVersion: string
                        triggerName?: string | undefined
                        input: { [key: string]: any }
                      }
                    }
                  | {
                      name: string
                      valid: boolean
                      displayName: string
                      nextAction?: any | undefined
                      lastUpdatedDate: string
                      type: 'EMPTY'
                      settings: any
                    }
                valid: boolean
                schemaVersion?: (string | null) | undefined
                description?: string | undefined
                notes?:
                  | {
                      id: string
                      content: string
                      ownerId?: (string | null) | undefined
                      color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                      position: { x: number; y: number }
                      size: { width: number; height: number }
                      createdAt: string
                      updatedAt: string
                    }[]
                  | undefined
              }[]
            | undefined
          tables?:
            | {
                name: string
                externalId: string
                fields: {
                  name: string
                  type: string
                  data?: ({ options: { value: string }[] } | null) | undefined
                  externalId: string
                }[]
                status?: (string | null) | undefined
                trigger?: (string | null) | undefined
                data?:
                  | ({ type: 'CSV'; rows: { fieldId: string; value: string }[][] } | null)
                  | undefined
              }[]
            | undefined
          status: 'PUBLISHED' | 'ARCHIVED'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tables/count': {
      $get: {
        input: { query: { projectId: string; folderId?: string } }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tables/:id/export': {
      $get: {
        input: { param: { id: string } }
        output: {
          fields: { id: string; name: string }[]
          rows: { [key: string]: string }[]
          name: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tables/:id/webhooks': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            events: ('RECORD_CREATED' | 'RECORD_UPDATED' | 'RECORD_DELETED')[]
            webhookUrl: string
            flowId: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/tables/:id/webhooks/:webhookId': {
      $delete: {
        input: { param: { id: string; webhookId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/tables/:id/clear': {
      $post: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/v1/records/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            cells?: { fieldId: string; value: string | null }[]
            tableId: string
            agentUpdate?: boolean
          }
        }
        output: {
          id: string
          created: string
          updated: string
          tableId: string
          projectId: string
          cells: {
            [key: string]: { updated: string; created: string; value: any; fieldName: string }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/records': {
      $delete: {
        input: { json: { tableId: string; ids: string[] } }
        output: {
          id: string
          created: string
          updated: string
          tableId: string
          projectId: string
          cells: {
            [key: string]: { updated: string; created: string; value: any; fieldName: string }
          }
        }[]
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { tableId: string; limit?: unknown; cursor?: string; filters?: unknown } }
        output: {
          data: {
            id: string
            created: string
            updated: string
            tableId: string
            projectId: string
            cells: {
              [key: string]: { updated: string; created: string; value: any; fieldName: string }
            }
          }[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/knowledge-base/files': {
      $post: {
        input: { json: { fileId: string; displayName: string } }
        output: { id: string }
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/knowledge-base/files/upload': {
      $post: {
        input: { query: { projectId: string } } & {
          form: {
            file: { filename: string; data: any; type: 'file'; mimetype?: string }
            displayName: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/knowledge-base/files/:id': {
      $delete: {
        input: { param: { id: string } } & { query: { projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/knowledge-base/files/:id/chunks/count': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/knowledge-base/files/:id/extract-chunks': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/knowledge-base/files/:id/store-chunks': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            chunks: {
              id?: string
              content?: string
              embedding?: number[]
              chunkIndex?: number
              metadata?: { [key: string]: any }
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/knowledge-base/files/:id/chunks': {
      $get: {
        input: { param: { id: string } } & { query: { embedded?: 'true' | 'false' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/knowledge-base/files/search': {
      $post: {
        input: {
          json: {
            knowledgeBaseFileIds: string[]
            queryEmbedding: number[]
            limit?: number
            similarityThreshold?: number
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/templates/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & {
          json: {
            name?: string
            summary?: string
            description?: string
            tags?: { title: string; color: string; icon?: string }[]
            blogUrl?: string
            metadata?: { [key: string]: any } | null
            status?: 'PUBLISHED' | 'ARCHIVED'
            categories?: string[]
            flows?: {
              displayName: string
              trigger:
                | {
                    name: string
                    valid: boolean
                    displayName: string
                    nextAction?: any
                    lastUpdatedDate: string
                    type: 'PIECE_TRIGGER'
                    settings: {
                      sampleData?: {
                        sampleDataFileId?: string
                        sampleDataInputFileId?: string
                        lastTestDate?: string
                      }
                      propertySettings: {
                        [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any }
                      }
                      customLogoUrl?: string
                      pieceName: string
                      pieceVersion: string
                      triggerName?: string
                      input: { [key: string]: any }
                    }
                  }
                | {
                    name: string
                    valid: boolean
                    displayName: string
                    nextAction?: any
                    lastUpdatedDate: string
                    type: 'EMPTY'
                    settings: any
                  }
              valid: boolean
              schemaVersion?: string | null
              description?: string
              notes?: {
                id: string
                content: string
                ownerId?: string | null
                color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                position: { x: number; y: number }
                size: { width: number; height: number }
                createdAt: string
                updatedAt: string
              }[]
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/templates/categories': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/templates': {
      $get: {
        input: {
          query: {
            type?: 'OFFICIAL' | 'SHARED' | 'CUSTOM'
            pieces?: unknown
            tags?: unknown
            search?: string
            category?: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          json: {
            name: string
            summary: string
            description: string
            tags?: { title: string; color: string; icon?: string }[]
            blogUrl?: string
            metadata?: { [key: string]: any } | null
            author: string
            categories: string[]
            type: 'OFFICIAL' | 'SHARED' | 'CUSTOM'
            flows?: {
              displayName: string
              trigger:
                | {
                    name: string
                    valid: boolean
                    displayName: string
                    nextAction?: any
                    lastUpdatedDate: string
                    type: 'PIECE_TRIGGER'
                    settings: {
                      sampleData?: {
                        sampleDataFileId?: string
                        sampleDataInputFileId?: string
                        lastTestDate?: string
                      }
                      propertySettings: {
                        [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any }
                      }
                      customLogoUrl?: string
                      pieceName: string
                      pieceVersion: string
                      triggerName?: string
                      input: { [key: string]: any }
                    }
                  }
                | {
                    name: string
                    valid: boolean
                    displayName: string
                    nextAction?: any
                    lastUpdatedDate: string
                    type: 'EMPTY'
                    settings: any
                  }
              valid: boolean
              schemaVersion?: string | null
              description?: string
              notes?: {
                id: string
                content: string
                ownerId?: string | null
                color: 'orange' | 'red' | 'green' | 'blue' | 'purple' | 'yellow'
                position: { x: number; y: number }
                size: { width: number; height: number }
                createdAt: string
                updatedAt: string
              }[]
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/projects': {
      $post: {
        input: {
          json: {
            displayName: string
            externalId?: string | null
            metadata?: { [key: string]: any } | null
            maxConcurrentJobs?: number | null
            globalConnectionExternalIds?: string[]
            alertReceiverEmail?: string | null
          }
        }
        output: Project
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            externalId?: string
            externalUserId?: string
            limit?: unknown
            cursor?: string
            displayName?: string
            types?: unknown
          }
        }
        output: {
          data: Project[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            releasesEnabled?: boolean
            displayName?: string
            externalId?: string
            metadata?: { [key: string]: any }
            icon?: {
              color:
                | 'RED'
                | 'BLUE'
                | 'YELLOW'
                | 'PURPLE'
                | 'GREEN'
                | 'PINK'
                | 'VIOLET'
                | 'ORANGE'
                | 'DARK_GREEN'
                | 'CYAN'
                | 'LAVENDER'
                | 'DEEP_ORANGE'
            }
            plan?: { pieces?: string[]; piecesFilterType?: 'NONE' | 'ALLOWED' }
            globalConnectionExternalIds?: string[]
            maxConcurrentJobs?: number | null
          }
        }
        output: Project
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/project-members': {
      $get: {
        input: {
          query: { projectId: string; projectRoleId?: string; cursor?: string; limit?: unknown }
        }
        output: {
          data: {
            id: string
            created: string
            updated: string
            platformId: string
            userId: string
            projectId: string
            projectRoleId: string
            user: User
            projectRole: {
              id: string
              created: string
              updated: string
              name: string
              permissions: string[]
              platformId?: (string | null) | undefined
              type: string
              userCount?: number | undefined
            }
            project: { id: string; displayName: string }
          }[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/project-members/:id': {
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/v1/pieces': {
      $post: {
        input: {
          json:
            | {
                packageType: 'ARCHIVE'
                scope: 'PLATFORM'
                pieceName: string
                pieceVersion: string
                pieceArchive: { filename: string; data: any; type: 'file'; mimetype?: string }
              }
            | {
                packageType: 'REGISTRY'
                scope: 'PLATFORM'
                pieceName: string
                pieceVersion: string
              }
        }
        output: {}
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/git-repos': {
      $post: {
        input: {
          json: {
            projectId: string
            remoteUrl: string
            branch: string
            branchType: 'PRODUCTION' | 'DEVELOPMENT'
            sshPrivateKey: string
            slug: string
          }
        }
        output: GitRepo
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/event-destinations': {
      $get: {
        input: { query: { cursor?: string; limit?: unknown } }
        output: {
          data: (
            | {
                id: string
                created: string
                updated: string
                platformId: string
                events: (
                  | 'flow.created'
                  | 'flow.deleted'
                  | 'flow.updated'
                  | 'flow.published'
                  | 'flow.activated'
                  | 'flow.deactivated'
                  | 'flow.run.resumed'
                  | 'flow.run.started'
                  | 'flow.run.finished'
                  | 'flow.run.retried'
                  | 'folder.created'
                  | 'folder.updated'
                  | 'folder.deleted'
                  | 'connection.upserted'
                  | 'connection.deleted'
                  | 'user.signed.up'
                  | 'user.signed.in'
                  | 'user.password.reset'
                  | 'user.email.verified'
                  | 'signing.key.created'
                  | 'project.role.created'
                  | 'project.role.deleted'
                  | 'project.role.updated'
                  | 'project.release.created'
                )[]
                url: string
                scope: 'PLATFORM'
              }
            | {
                id: string
                created: string
                updated: string
                platformId: string
                events: (
                  | 'flow.created'
                  | 'flow.deleted'
                  | 'flow.updated'
                  | 'flow.published'
                  | 'flow.activated'
                  | 'flow.deactivated'
                  | 'flow.run.resumed'
                  | 'flow.run.started'
                  | 'flow.run.finished'
                  | 'flow.run.retried'
                  | 'folder.created'
                  | 'folder.updated'
                  | 'folder.deleted'
                  | 'connection.upserted'
                  | 'connection.deleted'
                  | 'user.signed.up'
                  | 'user.signed.in'
                  | 'user.password.reset'
                  | 'user.email.verified'
                  | 'signing.key.created'
                  | 'project.role.created'
                  | 'project.role.deleted'
                  | 'project.role.updated'
                  | 'project.release.created'
                )[]
                url: string
                scope: 'PROJECT'
                projectId: string
              }
          )[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/project-roles/:id/project-members': {
      $get: {
        input: { param: { id: string } } & { query: { cursor?: string; limit?: unknown } }
        output: {
          data: {
            id: string
            created: string
            updated: string
            platformId: string
            userId: string
            projectId: string
            projectRoleId: string
            user: User
            projectRole: {
              id: string
              created: string
              updated: string
              name: string
              permissions: string[]
              platformId?: (string | null) | undefined
              type: string
              userCount?: number | undefined
            }
            project: { id: string; displayName: string }
          }[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/project-releases': {
      $post: {
        input: {
          json:
            | {
                type: 'ROLLBACK'
                name: string
                description?: string | null
                selectedFlowsIds?: string[] | null
                projectId: string
                projectReleaseId: string
              }
            | {
                type: 'PROJECT'
                name: string
                description?: string | null
                selectedFlowsIds?: string[] | null
                projectId: string
                targetProjectId: string
              }
            | {
                type: 'GIT'
                name: string
                description?: string | null
                selectedFlowsIds?: string[] | null
                projectId: string
              }
        }
        output: ProjectRelease
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/global-connections': {
      $post: {
        input: {
          json:
            | {
                displayName: string
                pieceName: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'SECRET_TEXT'
                value: { type: 'SECRET_TEXT'; secret_text: string }
                scope: 'PLATFORM'
                projectIds: string[]
                externalId?: string
                preSelectForNewProjects?: boolean
              }
            | {
                displayName: string
                pieceName: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'OAUTH2'
                value: {
                  client_id: string
                  code: string
                  code_challenge?: string
                  scope: string
                  authorization_method?: 'HEADER' | 'BODY'
                  client_secret: string
                  grant_type?: 'authorization_code' | 'client_credentials'
                  props?: { [key: string]: any }
                  redirect_url: string
                  type: 'OAUTH2'
                }
                scope: 'PLATFORM'
                projectIds: string[]
                externalId?: string
                preSelectForNewProjects?: boolean
              }
            | {
                displayName: string
                pieceName: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'CLOUD_OAUTH2'
                value: {
                  client_id: string
                  code: string
                  code_challenge?: string
                  scope: string
                  authorization_method?: 'HEADER' | 'BODY'
                  props?: { [key: string]: any }
                  type: 'CLOUD_OAUTH2'
                }
                scope: 'PLATFORM'
                projectIds: string[]
                externalId?: string
                preSelectForNewProjects?: boolean
              }
            | {
                displayName: string
                pieceName: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'PLATFORM_OAUTH2'
                value: {
                  client_id: string
                  code: string
                  code_challenge?: string
                  scope: string
                  authorization_method?: 'HEADER' | 'BODY'
                  props?: { [key: string]: any }
                  type: 'PLATFORM_OAUTH2'
                  redirect_url: string
                }
                scope: 'PLATFORM'
                projectIds: string[]
                externalId?: string
                preSelectForNewProjects?: boolean
              }
            | {
                displayName: string
                pieceName: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'BASIC_AUTH'
                value: { username: string; password: string; type: 'BASIC_AUTH' }
                scope: 'PLATFORM'
                projectIds: string[]
                externalId?: string
                preSelectForNewProjects?: boolean
              }
            | {
                displayName: string
                pieceName: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'CUSTOM_AUTH'
                value: { type: 'CUSTOM_AUTH'; props: { [key: string]: any } }
                scope: 'PLATFORM'
                projectIds: string[]
                externalId?: string
                preSelectForNewProjects?: boolean
              }
            | {
                displayName: string
                pieceName: string
                metadata?: { [key: string]: any }
                pieceVersion?: string
                type: 'NO_AUTH'
                value: { type: 'NO_AUTH' }
                scope: 'PLATFORM'
                projectIds: string[]
                externalId?: string
                preSelectForNewProjects?: boolean
              }
        }
        output: AppConnection
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            cursor?: string
            scope?: 'PROJECT' | 'PLATFORM'
            pieceName?: unknown
            displayName?: string
            status?: unknown
            limit?: unknown
          }
        }
        output: {
          data: AppConnection[]
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/global-connections/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            displayName: string
            projectIds?: string[]
            metadata?: { [key: string]: any }
            preSelectForNewProjects?: boolean
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/v1/embed-subdomain/allowed-embed-origins': {
      $post: {
        input: { json: EmbeddingInputInput }
        output: { allowedEmbedOrigins: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/agents/conversations': {
      $post: {
        input: { json: { title?: string | null; modelName?: string | null } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { query: { cursor?: string; limit?: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/agents/conversations/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & {
          json: { title?: string | null; modelName?: string | null }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/agents/conversations/:id/messages': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & {
          json: {
            content: string
            files?: {
              name: string
              mimeType:
                | 'image/png'
                | 'image/jpeg'
                | 'image/gif'
                | 'image/webp'
                | 'text/plain'
                | 'text/csv'
                | 'text/markdown'
                | 'application/json'
                | 'application/pdf'
              data: string
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/agents/tool-approvals/:gateId': {
      $post: {
        input: { param: { gateId: string } } & { json: { approved: boolean } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/platform-configurations': {
      $post: {
        input: {
          json: {
            isProductTelemetryEnabled?: boolean
            isInfraSetupTelemetryEnabled?: boolean
            maxBarrierSignals?: number
            aiSpecificModelsVisible?: boolean
            defaultChatModel?:
              | (
                  | { type: 'tier'; tierId: string }
                  | {
                      type: 'model'
                      provider:
                        | 'openai'
                        | 'openrouter'
                        | 'anthropic'
                        | 'azure'
                        | 'google'
                        | 'activepieces'
                        | 'cloudflare-gateway'
                        | 'custom'
                        | 'bedrock'
                        | 'vertex'
                        | 'mistral'
                        | 'xai'
                        | 'deepseek'
                        | 'zai'
                        | 'qwen'
                        | 'minimax'
                        | 'moonshot'
                        | 'meta'
                        | 'nvidia'
                      providerConfigId: string
                      modelId: string
                    }
                )
              | null
          }
        }
        output: {
          id: string
          created: string
          updated: string
          platformId: string
          isProductTelemetryEnabled: boolean
          isInfraSetupTelemetryEnabled: boolean
          maxBarrierSignals: number
          aiSpecificModelsVisible: boolean
          defaultChatModel?:
            | (
                | (
                    | { type: 'tier'; tierId: string }
                    | {
                        type: 'model'
                        provider:
                          | 'openai'
                          | 'openrouter'
                          | 'anthropic'
                          | 'azure'
                          | 'google'
                          | 'activepieces'
                          | 'cloudflare-gateway'
                          | 'custom'
                          | 'bedrock'
                          | 'vertex'
                          | 'mistral'
                          | 'xai'
                          | 'deepseek'
                          | 'zai'
                          | 'qwen'
                          | 'minimax'
                          | 'moonshot'
                          | 'meta'
                          | 'nvidia'
                        providerConfigId: string
                        modelId: string
                      }
                  )
                | null
              )
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-providers/configs': {
      $get: {
        input: {}
        output: {
          id: string
          name: string
          provider:
            | 'openai'
            | 'openrouter'
            | 'anthropic'
            | 'azure'
            | 'google'
            | 'activepieces'
            | 'cloudflare-gateway'
            | 'custom'
            | 'bedrock'
            | 'vertex'
            | 'mistral'
            | 'xai'
            | 'deepseek'
            | 'zai'
            | 'qwen'
            | 'minimax'
            | 'moonshot'
            | 'meta'
            | 'nvidia'
          config:
            | {
                apiKeyHeader: string
                baseUrl: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                defaultHeaders?: { [key: string]: string } | undefined
                apiStyle?: 'chat' | 'responses' | undefined
              }
            | {
                accountId: string
                gatewayId: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                vertexProject?: string | undefined
                vertexRegion?: string | undefined
              }
            | { resourceName: string; apiVersion?: string | undefined }
            | {
                project: string
                region: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
              }
            | { region: string }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
          enabledForChat: boolean
          modelScope: 'all' | 'selected'
          modelIds: string[]
          projectScope: 'all' | 'selected' | 'except'
          projectIds: string[]
          status: 'active' | 'out_of_credits' | 'rejected' | 'unreachable'
          statusReason: string | null
          statusUpdated: string | null
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-providers/configs/:id/models': {
      $get: {
        input: { param: { id: string } }
        output: {
          id: string
          name: string
          type: 'image' | 'text'
          metadata?:
            | {
                contextTokens?: number | undefined
                maxOutputTokens?: number | undefined
                releaseDate?: string | undefined
                inputCostPerMillionTokens?: number | undefined
                outputCostPerMillionTokens?: number | undefined
                cacheReadCostPerMillionTokens?: number | undefined
                cacheWriteCostPerMillionTokens?: number | undefined
                supportsToolCalling?: boolean | undefined
                supportsReasoning?: boolean | undefined
                supportsVision?: boolean | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-providers/configs/:id/suggested-models': {
      $get: {
        input: { param: { id: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-providers/model-options/platform': {
      $get: {
        input: { query: { surface: 'flow' | 'agent' | 'chat' } }
        output: {
          tiers: {
            id: string
            name: string
            emoji: string
            description?: (string | null) | undefined
            isDefault: boolean
            isFast: boolean
            main: {
              provider:
                | 'openai'
                | 'openrouter'
                | 'anthropic'
                | 'azure'
                | 'google'
                | 'activepieces'
                | 'cloudflare-gateway'
                | 'custom'
                | 'bedrock'
                | 'vertex'
                | 'mistral'
                | 'xai'
                | 'deepseek'
                | 'zai'
                | 'qwen'
                | 'minimax'
                | 'moonshot'
                | 'meta'
                | 'nvidia'
              modelId: string
              name: string
              keyName: string
              metadata?:
                | {
                    contextTokens?: number | undefined
                    maxOutputTokens?: number | undefined
                    releaseDate?: string | undefined
                    inputCostPerMillionTokens?: number | undefined
                    outputCostPerMillionTokens?: number | undefined
                    cacheReadCostPerMillionTokens?: number | undefined
                    cacheWriteCostPerMillionTokens?: number | undefined
                    supportsToolCalling?: boolean | undefined
                    supportsReasoning?: boolean | undefined
                    supportsVision?: boolean | undefined
                  }
                | undefined
            }
            fallbacks: {
              provider:
                | 'openai'
                | 'openrouter'
                | 'anthropic'
                | 'azure'
                | 'google'
                | 'activepieces'
                | 'cloudflare-gateway'
                | 'custom'
                | 'bedrock'
                | 'vertex'
                | 'mistral'
                | 'xai'
                | 'deepseek'
                | 'zai'
                | 'qwen'
                | 'minimax'
                | 'moonshot'
                | 'meta'
                | 'nvidia'
              modelId: string
              name: string
              keyName: string
              metadata?:
                | {
                    contextTokens?: number | undefined
                    maxOutputTokens?: number | undefined
                    releaseDate?: string | undefined
                    inputCostPerMillionTokens?: number | undefined
                    outputCostPerMillionTokens?: number | undefined
                    cacheReadCostPerMillionTokens?: number | undefined
                    cacheWriteCostPerMillionTokens?: number | undefined
                    supportsToolCalling?: boolean | undefined
                    supportsReasoning?: boolean | undefined
                    supportsVision?: boolean | undefined
                  }
                | undefined
            }[]
          }[]
          credits?:
            | ({
                providerConfigId: string
                defaultTierId: string
                tiers: {
                  id: string
                  label: string
                  model: {
                    provider:
                      | 'openai'
                      | 'openrouter'
                      | 'anthropic'
                      | 'azure'
                      | 'google'
                      | 'activepieces'
                      | 'cloudflare-gateway'
                      | 'custom'
                      | 'bedrock'
                      | 'vertex'
                      | 'mistral'
                      | 'xai'
                      | 'deepseek'
                      | 'zai'
                      | 'qwen'
                      | 'minimax'
                      | 'moonshot'
                      | 'meta'
                      | 'nvidia'
                    modelId: string
                    name: string
                    keyName: string
                    metadata?:
                      | {
                          contextTokens?: number | undefined
                          maxOutputTokens?: number | undefined
                          releaseDate?: string | undefined
                          inputCostPerMillionTokens?: number | undefined
                          outputCostPerMillionTokens?: number | undefined
                          cacheReadCostPerMillionTokens?: number | undefined
                          cacheWriteCostPerMillionTokens?: number | undefined
                          supportsToolCalling?: boolean | undefined
                          supportsReasoning?: boolean | undefined
                          supportsVision?: boolean | undefined
                        }
                      | undefined
                  }
                }[]
              } | null)
            | undefined
          keys: {
            providerConfigId: string
            provider:
              | 'openai'
              | 'openrouter'
              | 'anthropic'
              | 'azure'
              | 'google'
              | 'activepieces'
              | 'cloudflare-gateway'
              | 'custom'
              | 'bedrock'
              | 'vertex'
              | 'mistral'
              | 'xai'
              | 'deepseek'
              | 'zai'
              | 'qwen'
              | 'minimax'
              | 'moonshot'
              | 'meta'
              | 'nvidia'
            name: string
            models: {
              id: string
              name: string
              type: 'image' | 'text'
              metadata?:
                | {
                    contextTokens?: number | undefined
                    maxOutputTokens?: number | undefined
                    releaseDate?: string | undefined
                    inputCostPerMillionTokens?: number | undefined
                    outputCostPerMillionTokens?: number | undefined
                    cacheReadCostPerMillionTokens?: number | undefined
                    cacheWriteCostPerMillionTokens?: number | undefined
                    supportsToolCalling?: boolean | undefined
                    supportsReasoning?: boolean | undefined
                    supportsVision?: boolean | undefined
                  }
                | undefined
            }[]
          }[]
          defaultChoice?:
            | (
                | (
                    | { type: 'tier'; tierId: string }
                    | {
                        type: 'model'
                        provider:
                          | 'openai'
                          | 'openrouter'
                          | 'anthropic'
                          | 'azure'
                          | 'google'
                          | 'activepieces'
                          | 'cloudflare-gateway'
                          | 'custom'
                          | 'bedrock'
                          | 'vertex'
                          | 'mistral'
                          | 'xai'
                          | 'deepseek'
                          | 'zai'
                          | 'qwen'
                          | 'minimax'
                          | 'moonshot'
                          | 'meta'
                          | 'nvidia'
                        providerConfigId: string
                        modelId: string
                      }
                  )
                | null
              )
            | undefined
          movedTiers: { [key: string]: string }
          specificModelsHidden: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-providers': {
      $post: {
        input: {
          json:
            | {
                displayName: string
                provider: 'openai'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'openrouter'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'anthropic'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'azure'
                config: { resourceName: string; apiVersion?: string }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'google'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'cloudflare-gateway'
                config: {
                  accountId: string
                  gatewayId: string
                  models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                  vertexProject?: string
                  vertexRegion?: string
                }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'custom'
                config: {
                  apiKeyHeader: string
                  baseUrl: string
                  models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                  defaultHeaders?: { [key: string]: string }
                  apiStyle?: 'chat' | 'responses'
                }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'activepieces'
                config: { [key: string]: unknown }
                auth: { apiKey: string; apiKeyHash: string }
              }
            | {
                displayName: string
                provider: 'bedrock'
                config: { region: string }
                auth: { accessKeyId: string; secretAccessKey: string; sessionToken?: string }
              }
            | {
                displayName: string
                provider: 'vertex'
                config: {
                  project: string
                  region: string
                  models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                }
                auth: { serviceAccountJson: string }
              }
            | {
                displayName: string
                provider: 'mistral'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'xai'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'deepseek'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'zai'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'qwen'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'minimax'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'moonshot'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'meta'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
            | {
                displayName: string
                provider: 'nvidia'
                config: { [key: string]: unknown }
                auth: { apiKey: string }
              }
        }
        output: {
          id: string
          name: string
          provider:
            | 'openai'
            | 'openrouter'
            | 'anthropic'
            | 'azure'
            | 'google'
            | 'activepieces'
            | 'cloudflare-gateway'
            | 'custom'
            | 'bedrock'
            | 'vertex'
            | 'mistral'
            | 'xai'
            | 'deepseek'
            | 'zai'
            | 'qwen'
            | 'minimax'
            | 'moonshot'
            | 'meta'
            | 'nvidia'
          config:
            | {
                apiKeyHeader: string
                baseUrl: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                defaultHeaders?: { [key: string]: string } | undefined
                apiStyle?: 'chat' | 'responses' | undefined
              }
            | {
                accountId: string
                gatewayId: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                vertexProject?: string | undefined
                vertexRegion?: string | undefined
              }
            | { resourceName: string; apiVersion?: string | undefined }
            | {
                project: string
                region: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
              }
            | { region: string }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
          enabledForChat: boolean
          modelScope: 'all' | 'selected'
          modelIds: string[]
          projectScope: 'all' | 'selected' | 'except'
          projectIds: string[]
          status: 'active' | 'out_of_credits' | 'rejected' | 'unreachable'
          statusReason: string | null
          statusUpdated: string | null
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-providers/:id/recheck': {
      $post: {
        input: { param: { id: string } }
        output: { status: 'active' | 'out_of_credits' | 'rejected' | 'unreachable' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-providers/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            displayName: string
            config?:
              | {
                  apiKeyHeader: string
                  baseUrl: string
                  models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                  defaultHeaders?: { [key: string]: string }
                  apiStyle?: 'chat' | 'responses'
                }
              | {
                  accountId: string
                  gatewayId: string
                  models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                  vertexProject?: string
                  vertexRegion?: string
                }
              | { resourceName: string; apiVersion?: string }
              | {
                  project: string
                  region: string
                  models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                }
              | { region: string }
              | { [key: string]: unknown }
              | { [key: string]: unknown }
              | { [key: string]: unknown }
              | { [key: string]: unknown }
              | { [key: string]: unknown }
              | { [key: string]: unknown }
              | { [key: string]: unknown }
            auth?:
              | { apiKey: string }
              | { apiKey: string }
              | { apiKey: string }
              | { apiKey: string }
              | { apiKey: string }
              | { apiKey: string }
              | { apiKey: string }
              | { apiKey: string; apiKeyHash: string }
              | { accessKeyId: string; secretAccessKey: string; sessionToken?: string }
              | { serviceAccountJson: string }
              | { apiKey: string }
            enabledForChat?: boolean
            modelScope?: 'all' | 'selected'
            modelIds?: string[]
            projectScope?: 'all' | 'selected' | 'except'
            projectIds?: string[]
          }
        }
        output: {
          id: string
          name: string
          provider:
            | 'openai'
            | 'openrouter'
            | 'anthropic'
            | 'azure'
            | 'google'
            | 'activepieces'
            | 'cloudflare-gateway'
            | 'custom'
            | 'bedrock'
            | 'vertex'
            | 'mistral'
            | 'xai'
            | 'deepseek'
            | 'zai'
            | 'qwen'
            | 'minimax'
            | 'moonshot'
            | 'meta'
            | 'nvidia'
          config:
            | {
                apiKeyHeader: string
                baseUrl: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                defaultHeaders?: { [key: string]: string } | undefined
                apiStyle?: 'chat' | 'responses' | undefined
              }
            | {
                accountId: string
                gatewayId: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
                vertexProject?: string | undefined
                vertexRegion?: string | undefined
              }
            | { resourceName: string; apiVersion?: string | undefined }
            | {
                project: string
                region: string
                models: { modelId: string; modelName: string; modelType: 'image' | 'text' }[]
              }
            | { region: string }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
            | { [key: string]: unknown }
          enabledForChat: boolean
          modelScope: 'all' | 'selected'
          modelIds: string[]
          projectScope: 'all' | 'selected' | 'except'
          projectIds: string[]
          status: 'active' | 'out_of_credits' | 'rejected' | 'unreachable'
          statusReason: string | null
          statusUpdated: string | null
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/platform-model-tiers/admin': {
      $get: {
        input: {}
        output: {
          id: string
          created: string
          updated: string
          platformId: string
          name: string
          emoji: string
          description?: (string | null) | undefined
          position: number
          entries: { configId: string; modelId: string }[]
          isDefault: boolean
          isFast: boolean
          thinkingBudget?: (number | null) | undefined
          deleted?: (string | null) | undefined
          replacedBy?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/platform-model-tiers': {
      $post: {
        input: {
          json: {
            name: string
            emoji: string
            description?: string | null
            entries: { configId: string; modelId: string }[]
            thinkingBudget?: number | null
          }
        }
        output: {
          id: string
          created: string
          updated: string
          platformId: string
          name: string
          emoji: string
          description?: (string | null) | undefined
          position: number
          entries: { configId: string; modelId: string }[]
          isDefault: boolean
          isFast: boolean
          thinkingBudget?: (number | null) | undefined
          deleted?: (string | null) | undefined
          replacedBy?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/platform-model-tiers/reorder': {
      $post: {
        input: { json: { tierIds: string[] } }
        output: {
          id: string
          created: string
          updated: string
          platformId: string
          name: string
          emoji: string
          description?: (string | null) | undefined
          position: number
          entries: { configId: string; modelId: string }[]
          isDefault: boolean
          isFast: boolean
          thinkingBudget?: (number | null) | undefined
          deleted?: (string | null) | undefined
          replacedBy?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/platform-model-tiers/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            name?: string
            emoji?: string
            description?: string | null
            entries?: { configId: string; modelId: string }[]
            thinkingBudget?: number | null
            isDefault?: true
            isFast?: true
          }
        }
        output: {
          id: string
          created: string
          updated: string
          platformId: string
          name: string
          emoji: string
          description?: (string | null) | undefined
          position: number
          entries: { configId: string; modelId: string }[]
          isDefault: boolean
          isFast: boolean
          thinkingBudget?: (number | null) | undefined
          deleted?: (string | null) | undefined
          replacedBy?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } } & { query: { replacedBy?: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/ai-tools': {
      $get: {
        input: {}
        output: {
          id: string
          capability: 'WEB_SEARCH' | 'WEB_SCRAPING' | 'IMAGE_GENERATION' | 'EMBEDDINGS'
          provider: 'tavily' | 'firecrawl' | 'apify' | 'fal' | 'ai_provider'
          config: { [key: string]: any } | null
          enabled: boolean
          hasApiKey: boolean
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            capability: 'WEB_SEARCH' | 'WEB_SCRAPING' | 'IMAGE_GENERATION' | 'EMBEDDINGS'
            provider: 'tavily' | 'firecrawl' | 'apify' | 'fal' | 'ai_provider'
            auth?: { apiKey: string }
            config?: { [key: string]: any }
            enabled?: boolean
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/ai-tools/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            provider?: 'tavily' | 'firecrawl' | 'apify' | 'fal' | 'ai_provider'
            auth?: { apiKey: string }
            config?: { [key: string]: any }
            enabled?: boolean
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/ai-usage/overview': {
      $get: {
        input: {
          query: {
            period: '1h' | '6h' | '12h' | '24h' | '7d' | '30d' | '90d' | 'this-month' | 'last-month'
            scope: 'all' | 'production' | 'testing'
          }
        }
        output: {
          history: {
            trackingSince: string | null
            hasAnyUsage: boolean
            coveredDays: number
            periodDays: number
            currentCoverage: number
            comparable: boolean
          }
          ranges: {
            current: { start: string; end: string }
            previous: { start: string; end: string }
          }
          totals: {
            spendUsd: number
            previousSpendUsd: number
            calls: number
            previousCalls: number
            tokens: number
            previousTokens: number
            cacheShare: number
            managedCredits: number
          }
          series: {
            label: string
            spendUsd: number | null
            calls: number | null
            tokens: number | null
            previousSpendUsd: number | null
            previousCalls: number | null
            previousTokens: number | null
          }[]
          bySource: {
            source: 'flow-steps' | 'agent-steps' | 'agents' | 'chat' | 'knowledge-base'
            spendUsd: number
          }[]
          top: {
            [key: string]: {
              dimension: 'project' | 'flow' | 'agent' | 'user' | 'key' | 'model'
              id: string
              name: string | null
              parent?: string | undefined
              provider?:
                | 'openai'
                | 'openrouter'
                | 'anthropic'
                | 'azure'
                | 'google'
                | 'activepieces'
                | 'cloudflare-gateway'
                | 'custom'
                | 'bedrock'
                | 'vertex'
                | 'mistral'
                | 'xai'
                | 'deepseek'
                | 'zai'
                | 'qwen'
                | 'minimax'
                | 'moonshot'
                | 'meta'
                | 'nvidia'
                | undefined
              flowCount?: number | undefined
              agentCount?: number | undefined
              spendUsd: number
              previousSpendUsd: number
              calls: number
              tokens: number
              comparable: boolean
              sharedUsd?: number | undefined
              inputPrice?: number | undefined
              outputPrice?: number | undefined
            }[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-usage/items': {
      $get: {
        input: {
          query: {
            period: '1h' | '6h' | '12h' | '24h' | '7d' | '30d' | '90d' | 'this-month' | 'last-month'
            scope: 'all' | 'production' | 'testing'
            dimension: 'project' | 'flow' | 'agent' | 'user' | 'key' | 'model'
          }
        }
        output: {
          history: {
            trackingSince: string | null
            hasAnyUsage: boolean
            coveredDays: number
            periodDays: number
            currentCoverage: number
            comparable: boolean
          }
          ranges: {
            current: { start: string; end: string }
            previous: { start: string; end: string }
          }
          items: {
            dimension: 'project' | 'flow' | 'agent' | 'user' | 'key' | 'model'
            id: string
            name: string | null
            parent?: string | undefined
            provider?:
              | 'openai'
              | 'openrouter'
              | 'anthropic'
              | 'azure'
              | 'google'
              | 'activepieces'
              | 'cloudflare-gateway'
              | 'custom'
              | 'bedrock'
              | 'vertex'
              | 'mistral'
              | 'xai'
              | 'deepseek'
              | 'zai'
              | 'qwen'
              | 'minimax'
              | 'moonshot'
              | 'meta'
              | 'nvidia'
              | undefined
            flowCount?: number | undefined
            agentCount?: number | undefined
            spendUsd: number
            previousSpendUsd: number
            calls: number
            tokens: number
            comparable: boolean
            sharedUsd?: number | undefined
            inputPrice?: number | undefined
            outputPrice?: number | undefined
          }[]
          count: number
          itemsSpendUsd: number
          totalSpendUsd: number
          truncated: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ai-usage/items/:dimension/:id': {
      $get: {
        input: {
          param: { dimension: 'project' | 'flow' | 'agent' | 'user' | 'key' | 'model'; id: string }
        } & {
          query: {
            period: '1h' | '6h' | '12h' | '24h' | '7d' | '30d' | '90d' | 'this-month' | 'last-month'
            scope: 'all' | 'production' | 'testing'
          }
        }
        output: {
          history: {
            trackingSince: string | null
            hasAnyUsage: boolean
            coveredDays: number
            periodDays: number
            currentCoverage: number
            comparable: boolean
          }
          ranges: {
            current: { start: string; end: string }
            previous: { start: string; end: string }
          }
          item: {
            dimension: 'project' | 'flow' | 'agent' | 'user' | 'key' | 'model'
            id: string
            name: string | null
            parent?: string | undefined
            provider?:
              | 'openai'
              | 'openrouter'
              | 'anthropic'
              | 'azure'
              | 'google'
              | 'activepieces'
              | 'cloudflare-gateway'
              | 'custom'
              | 'bedrock'
              | 'vertex'
              | 'mistral'
              | 'xai'
              | 'deepseek'
              | 'zai'
              | 'qwen'
              | 'minimax'
              | 'moonshot'
              | 'meta'
              | 'nvidia'
              | undefined
            flowCount?: number | undefined
            agentCount?: number | undefined
            spendUsd: number
            previousSpendUsd: number
            calls: number
            tokens: number
            comparable: boolean
            sharedUsd?: number | undefined
            inputPrice?: number | undefined
            outputPrice?: number | undefined
          }
          series: {
            label: string
            spendUsd: number | null
            calls: number | null
            tokens: number | null
            previousSpendUsd: number | null
            previousCalls: number | null
            previousTokens: number | null
          }[]
          related: {
            [key: string]: {
              dimension: 'project' | 'flow' | 'agent' | 'user' | 'key' | 'model'
              id: string
              name: string | null
              parent?: string | undefined
              provider?:
                | 'openai'
                | 'openrouter'
                | 'anthropic'
                | 'azure'
                | 'google'
                | 'activepieces'
                | 'cloudflare-gateway'
                | 'custom'
                | 'bedrock'
                | 'vertex'
                | 'mistral'
                | 'xai'
                | 'deepseek'
                | 'zai'
                | 'qwen'
                | 'minimax'
                | 'moonshot'
                | 'meta'
                | 'nvidia'
                | undefined
              flowCount?: number | undefined
              agentCount?: number | undefined
              spendUsd: number
              previousSpendUsd: number
              calls: number
              tokens: number
              comparable: boolean
              sharedUsd?: number | undefined
              inputPrice?: number | undefined
              outputPrice?: number | undefined
            }[]
          }
          bySource?:
            | {
                source: 'flow-steps' | 'agent-steps' | 'agents' | 'chat' | 'knowledge-base'
                spendUsd: number
              }[]
            | undefined
          runs?: number | undefined
          reportedUsd?: number | undefined
          estimatedUsd?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
