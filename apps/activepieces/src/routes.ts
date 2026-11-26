import { createRoute, z } from '@hono/zod-openapi'

type FlowUpdatedInputType = {
  id: string
  created: string
  updated: string
  platformId: string
  projectId?: string
  projectDisplayName?: string
  userId?: string
  userEmail?: string
  ip?: string
  action: 'flow.updated'
  data: {
    flow: { id: string; externalId: string; created: string; updated: string }
    flowVersion: {
      id: string
      displayName: string
      flowId: string
      created: string
      updated: string
    }
    request:
      | {
          type: 'MOVE_ACTION'
          request: {
            name: string
            newParentStep: string
            stepLocationRelativeToNewParent?:
              | 'AFTER'
              | 'INSIDE_LOOP'
              | 'INSIDE_BATCH'
              | 'INSIDE_BRANCH'
              | 'INSIDE_ON_SUCCESS_BRANCH'
              | 'INSIDE_ON_FAILURE_BRANCH'
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
                  useDeno?: boolean
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
                type: 'PROCESS_IN_BATCHES'
              } & {
                settings: {
                  customLogoUrl?: string
                  items: string
                  batchSize?: number
                  timeoutSeconds?: number
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
                type: 'PIECE'
              } & {
                settings: {
                  customLogoUrl?: string
                  propertySettings: { [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any } }
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
            | ({
                name: string
                valid: boolean
                displayName: string
                skip?: boolean
                type: 'AI_ROUTER'
              } & {
                settings: {
                  customLogoUrl?: string
                  text: string
                  question: string
                  branches: (
                    | { branchType: 'CONDITION'; branchName: string; description?: string }
                    | { branchType: 'FALLBACK'; branchName: string; description?: string }
                  )[]
                  matchMode?: 'BEST_MATCH' | 'ALL_MATCHES'
                  minConfidence?: number
                  model?: string
                }
              })
        }
      | {
          type: 'ADD_ACTION'
          request: {
            parentStep: string
            stepLocationRelativeToParent?:
              | 'AFTER'
              | 'INSIDE_LOOP'
              | 'INSIDE_BATCH'
              | 'INSIDE_BRANCH'
              | 'INSIDE_ON_SUCCESS_BRANCH'
              | 'INSIDE_ON_FAILURE_BRANCH'
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
                    useDeno?: boolean
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
                  type: 'PROCESS_IN_BATCHES'
                } & {
                  settings: {
                    customLogoUrl?: string
                    items: string
                    batchSize?: number
                    timeoutSeconds?: number
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
              | ({
                  name: string
                  valid: boolean
                  displayName: string
                  skip?: boolean
                  type: 'AI_ROUTER'
                } & {
                  settings: {
                    customLogoUrl?: string
                    text: string
                    question: string
                    branches: (
                      | { branchType: 'CONDITION'; branchName: string; description?: string }
                      | { branchType: 'FALLBACK'; branchName: string; description?: string }
                    )[]
                    matchMode?: 'BEST_MATCH' | 'ALL_MATCHES'
                    minConfidence?: number
                    model?: string
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
                  propertySettings: { [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any } }
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
                  operator?: 'NUMBER_IS_GREATER_THAN' | 'NUMBER_IS_LESS_THAN' | 'NUMBER_IS_EQUAL_TO'
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
            description?: string
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
    reason?: string
    project?: { displayName: string; externalId?: string | null }
  }
}

type TemplateInputType = {
  id: string
  created: string
  updated: string
  name: string
  type: 'OFFICIAL' | 'SHARED' | 'CUSTOM'
  summary: string
  description: string
  tags: { title: string; color: string; icon?: string }[]
  blogUrl?: string | null
  metadata?: { [key: string]: any } | null
  author: string
  categories: string[]
  pieces: string[]
  platformId?: string | null
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
            propertySettings: { [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any } }
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
  tables?: {
    name: string
    externalId: string
    fields: {
      name: string
      type: string
      data?: { options: { value: string }[] } | null
      externalId: string
    }[]
    status?: string | null
    trigger?: string | null
    data?: { type: 'CSV'; rows: { fieldId: string; value: string }[][] } | null
  }[]
  status: 'PUBLISHED' | 'ARCHIVED'
}

type PieceInputType = {
  id?: string
  name: string
  displayName: string
  logoUrl: string
  description: string
  authors: string[]
  platformId?: string
  directoryPath?: string
  auth?:
    | (
        | {
            displayName: string
            description?: string
            username: { displayName: string; description?: string }
            password: { displayName: string; description?: string }
            type: 'BASIC_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'LONG_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'NUMBER'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'CHECKBOX'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            type: 'CUSTOM_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props?: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'SECRET_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            authUrl: string
            tokenUrl: string
            scope: string[]
            prompt?: 'none' | 'consent' | 'login' | 'omit'
            pkce?: boolean
            pkceMethod?: 'plain' | 'S256'
            authorizationMethod?: 'HEADER' | 'BODY'
            grantType?:
              | 'authorization_code'
              | 'client_credentials'
              | 'both_client_credentials_and_authorization_code'
            extra?: { [key: string]: string }
            type: 'OAUTH2'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            type: 'SECRET_TEXT'
            required: boolean
            defaultValue?: any
          }
      )
    | (
        | {
            displayName: string
            description?: string
            username: { displayName: string; description?: string }
            password: { displayName: string; description?: string }
            type: 'BASIC_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'LONG_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'NUMBER'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'CHECKBOX'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            type: 'CUSTOM_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props?: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'SECRET_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            authUrl: string
            tokenUrl: string
            scope: string[]
            prompt?: 'none' | 'consent' | 'login' | 'omit'
            pkce?: boolean
            pkceMethod?: 'plain' | 'S256'
            authorizationMethod?: 'HEADER' | 'BODY'
            grantType?:
              | 'authorization_code'
              | 'client_credentials'
              | 'both_client_credentials_and_authorization_code'
            extra?: { [key: string]: string }
            type: 'OAUTH2'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            type: 'SECRET_TEXT'
            required: boolean
            defaultValue?: any
          }
      )[]
  version: string
  categories?: (
    | 'ARTIFICIAL_INTELLIGENCE'
    | 'COMMUNICATION'
    | 'COMMERCE'
    | 'CORE'
    | 'UNIVERSAL_AI'
    | 'FLOW_CONTROL'
    | 'BUSINESS_INTELLIGENCE'
    | 'ACCOUNTING'
    | 'PRODUCTIVITY'
    | 'CONTENT_AND_FILES'
    | 'DEVELOPER_TOOLS'
    | 'CUSTOMER_SUPPORT'
    | 'FORMS_AND_SURVEYS'
    | 'HUMAN_RESOURCES'
    | 'PAYMENT_PROCESSING'
    | 'MARKETING'
    | 'SALES_AND_CRM'
  )[]
  minimumSupportedRelease?: string
  maximumSupportedRelease?: string
  i18n?: { [key: string]: { [key: string]: string } }
  actions: {
    [key: string]: {
      name: string
      displayName: string
      description: string
      props: {
        [key: string]:
          | (
              | {
                  displayName: string
                  description?: string
                  type: 'SHORT_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'LONG_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MARKDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'CHECKBOX'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  refreshers: string[]
                  displayName: string
                  description?: string
                  type: 'DYNAMIC'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'NUMBER'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  properties: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                          refreshers: string[]
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'FILE'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'DATE_TIME'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'ARRAY'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'OBJECT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'JSON'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DATE_TIME'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'FILE'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'COLOR'
                  required: boolean
                  defaultValue?: any
                }
            )
          | (
              | {
                  displayName: string
                  description?: string
                  username: { displayName: string; description?: string }
                  password: { displayName: string; description?: string }
                  type: 'BASIC_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'CUSTOM_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props?: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'SECRET_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  authUrl: string
                  tokenUrl: string
                  scope: string[]
                  prompt?: 'none' | 'consent' | 'login' | 'omit'
                  pkce?: boolean
                  pkceMethod?: 'plain' | 'S256'
                  authorizationMethod?: 'HEADER' | 'BODY'
                  grantType?:
                    | 'authorization_code'
                    | 'client_credentials'
                    | 'both_client_credentials_and_authorization_code'
                  extra?: { [key: string]: string }
                  type: 'OAUTH2'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'SECRET_TEXT'
                  required: boolean
                  defaultValue?: any
                }
            )
      }
      requireAuth: boolean
      errorHandlingOptions?: {
        retryOnFailure: { defaultValue?: boolean; hide?: boolean }
        continueOnFailure: { defaultValue?: boolean; hide?: boolean }
      }
    }
  }
  triggers: {
    [key: string]: {
      name: string
      displayName: string
      description: string
      props: {
        [key: string]:
          | (
              | {
                  displayName: string
                  description?: string
                  type: 'SHORT_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'LONG_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MARKDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'CHECKBOX'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  refreshers: string[]
                  displayName: string
                  description?: string
                  type: 'DYNAMIC'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'NUMBER'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  properties: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                          refreshers: string[]
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'FILE'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'DATE_TIME'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'ARRAY'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'OBJECT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'JSON'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DATE_TIME'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'FILE'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'COLOR'
                  required: boolean
                  defaultValue?: any
                }
            )
          | (
              | {
                  displayName: string
                  description?: string
                  username: { displayName: string; description?: string }
                  password: { displayName: string; description?: string }
                  type: 'BASIC_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'CUSTOM_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props?: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'SECRET_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  authUrl: string
                  tokenUrl: string
                  scope: string[]
                  prompt?: 'none' | 'consent' | 'login' | 'omit'
                  pkce?: boolean
                  pkceMethod?: 'plain' | 'S256'
                  authorizationMethod?: 'HEADER' | 'BODY'
                  grantType?:
                    | 'authorization_code'
                    | 'client_credentials'
                    | 'both_client_credentials_and_authorization_code'
                  extra?: { [key: string]: string }
                  type: 'OAUTH2'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'SECRET_TEXT'
                  required: boolean
                  defaultValue?: any
                }
            )
      }
      errorHandlingOptions?: {
        retryOnFailure: { defaultValue?: boolean; hide?: boolean }
        continueOnFailure: { defaultValue?: boolean; hide?: boolean }
      }
      type: 'POLLING' | 'WEBHOOK' | 'APP_WEBHOOK' | 'MANUAL'
      sampleData: any
      handshakeConfiguration?: any
      renewConfiguration?: { strategy: 'CRON'; cronExpression: string } | { strategy: 'NONE' }
      testStrategy: 'SIMULATION' | 'TEST_FUNCTION'
    }
  }
}

type FlowUpdatedType = {
  id: string
  created: string
  updated: string
  platformId: string
  projectId?: string
  projectDisplayName?: string
  userId?: string
  userEmail?: string
  ip?: string
  action: 'flow.updated'
  data: {
    flow: { id: string; externalId: string; created: string; updated: string }
    flowVersion: {
      id: string
      displayName: string
      flowId: string
      created: string
      updated: string
    }
    request:
      | {
          type: 'MOVE_ACTION'
          request: {
            name: string
            newParentStep: string
            stepLocationRelativeToNewParent?:
              | 'AFTER'
              | 'INSIDE_LOOP'
              | 'INSIDE_BATCH'
              | 'INSIDE_BRANCH'
              | 'INSIDE_ON_SUCCESS_BRANCH'
              | 'INSIDE_ON_FAILURE_BRANCH'
            branchIndex?: number
          }
        }
      | { type: 'CHANGE_STATUS'; request: { status: 'ENABLED' | 'DISABLED' } }
      | { type: 'LOCK_AND_PUBLISH'; request: { status?: 'ENABLED' | 'DISABLED' } }
      | { type: 'USE_AS_DRAFT'; request: { versionId: string } }
      | { type: 'LOCK_FLOW'; request: {} }
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
                  useDeno?: boolean
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
                type: 'PROCESS_IN_BATCHES'
              } & {
                settings: {
                  customLogoUrl?: string
                  items: string
                  batchSize: number
                  timeoutSeconds?: number
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
                type: 'PIECE'
              } & {
                settings: {
                  customLogoUrl?: string
                  propertySettings: { [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any } }
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
            | ({
                name: string
                valid: boolean
                displayName: string
                skip?: boolean
                type: 'AI_ROUTER'
              } & {
                settings: {
                  customLogoUrl?: string
                  text: string
                  question: string
                  branches: (
                    | { branchType: 'CONDITION'; branchName: string; description?: string }
                    | { branchType: 'FALLBACK'; branchName: string; description?: string }
                  )[]
                  matchMode?: 'BEST_MATCH' | 'ALL_MATCHES'
                  minConfidence?: number
                  model?: string
                }
              })
        }
      | {
          type: 'ADD_ACTION'
          request: {
            parentStep: string
            stepLocationRelativeToParent?:
              | 'AFTER'
              | 'INSIDE_LOOP'
              | 'INSIDE_BATCH'
              | 'INSIDE_BRANCH'
              | 'INSIDE_ON_SUCCESS_BRANCH'
              | 'INSIDE_ON_FAILURE_BRANCH'
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
                    useDeno?: boolean
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
                  type: 'PROCESS_IN_BATCHES'
                } & {
                  settings: {
                    customLogoUrl?: string
                    items: string
                    batchSize: number
                    timeoutSeconds?: number
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
              | ({
                  name: string
                  valid: boolean
                  displayName: string
                  skip?: boolean
                  type: 'AI_ROUTER'
                } & {
                  settings: {
                    customLogoUrl?: string
                    text: string
                    question: string
                    branches: (
                      | { branchType: 'CONDITION'; branchName: string; description?: string }
                      | { branchType: 'FALLBACK'; branchName: string; description?: string }
                    )[]
                    matchMode?: 'BEST_MATCH' | 'ALL_MATCHES'
                    minConfidence?: number
                    model?: string
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
                  propertySettings: { [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any } }
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
                  operator?: 'NUMBER_IS_GREATER_THAN' | 'NUMBER_IS_LESS_THAN' | 'NUMBER_IS_EQUAL_TO'
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
            description?: string
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
    reason?: string
    project?: { displayName: string; externalId?: string | null }
  }
}

type TemplateType = {
  id: string
  created: string
  updated: string
  name: string
  type: 'OFFICIAL' | 'SHARED' | 'CUSTOM'
  summary: string
  description: string
  tags: { title: string; color: string; icon?: string }[]
  blogUrl?: string | null
  metadata?: { [key: string]: any } | null
  author: string
  categories: string[]
  pieces: string[]
  platformId?: string | null
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
            propertySettings: { [key: string]: { type: 'MANUAL' | 'DYNAMIC'; schema?: any } }
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
  tables?: {
    name: string
    externalId: string
    fields: {
      name: string
      type: string
      data?: { options: { value: string }[] } | null
      externalId: string
    }[]
    status?: string | null
    trigger?: string | null
    data?: { type: 'CSV'; rows: { fieldId: string; value: string }[][] } | null
  }[]
  status: 'PUBLISHED' | 'ARCHIVED'
}

type PieceType = {
  id?: string
  name: string
  displayName: string
  logoUrl: string
  description: string
  authors: string[]
  platformId?: string
  directoryPath?: string
  auth?:
    | (
        | {
            displayName: string
            description?: string
            username: { displayName: string; description?: string }
            password: { displayName: string; description?: string }
            type: 'BASIC_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'LONG_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'NUMBER'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'CHECKBOX'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            type: 'CUSTOM_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props?: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'SECRET_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            authUrl: string
            tokenUrl: string
            scope: string[]
            prompt?: 'none' | 'consent' | 'login' | 'omit'
            pkce?: boolean
            pkceMethod?: 'plain' | 'S256'
            authorizationMethod?: 'HEADER' | 'BODY'
            grantType?:
              | 'authorization_code'
              | 'client_credentials'
              | 'both_client_credentials_and_authorization_code'
            extra?: { [key: string]: string }
            type: 'OAUTH2'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            type: 'SECRET_TEXT'
            required: boolean
            defaultValue?: any
          }
      )
    | (
        | {
            displayName: string
            description?: string
            username: { displayName: string; description?: string }
            password: { displayName: string; description?: string }
            type: 'BASIC_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'LONG_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'NUMBER'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'CHECKBOX'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            type: 'CUSTOM_AUTH'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            props?: {
              [key: string]:
                | {
                    displayName: string
                    description?: string
                    type: 'SHORT_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    type: 'SECRET_TEXT'
                    required: boolean
                    defaultValue?: any
                  }
                | {
                    displayName: string
                    description?: string
                    options: {
                      disabled?: boolean
                      placeholder?: string
                      options: { label: string; value: any }[]
                    }
                    type: 'STATIC_DROPDOWN'
                    required: boolean
                    defaultValue?: any
                  }
            }
            authUrl: string
            tokenUrl: string
            scope: string[]
            prompt?: 'none' | 'consent' | 'login' | 'omit'
            pkce?: boolean
            pkceMethod?: 'plain' | 'S256'
            authorizationMethod?: 'HEADER' | 'BODY'
            grantType?:
              | 'authorization_code'
              | 'client_credentials'
              | 'both_client_credentials_and_authorization_code'
            extra?: { [key: string]: string }
            type: 'OAUTH2'
            required: boolean
            defaultValue?: any
          }
        | {
            displayName: string
            description?: string
            type: 'SECRET_TEXT'
            required: boolean
            defaultValue?: any
          }
      )[]
  version: string
  categories?: (
    | 'ARTIFICIAL_INTELLIGENCE'
    | 'COMMUNICATION'
    | 'COMMERCE'
    | 'CORE'
    | 'UNIVERSAL_AI'
    | 'FLOW_CONTROL'
    | 'BUSINESS_INTELLIGENCE'
    | 'ACCOUNTING'
    | 'PRODUCTIVITY'
    | 'CONTENT_AND_FILES'
    | 'DEVELOPER_TOOLS'
    | 'CUSTOMER_SUPPORT'
    | 'FORMS_AND_SURVEYS'
    | 'HUMAN_RESOURCES'
    | 'PAYMENT_PROCESSING'
    | 'MARKETING'
    | 'SALES_AND_CRM'
  )[]
  minimumSupportedRelease?: string
  maximumSupportedRelease?: string
  i18n?: { [key: string]: { [key: string]: string } }
  actions: {
    [key: string]: {
      name: string
      displayName: string
      description: string
      props: {
        [key: string]:
          | (
              | {
                  displayName: string
                  description?: string
                  type: 'SHORT_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'LONG_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MARKDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'CHECKBOX'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  refreshers: string[]
                  displayName: string
                  description?: string
                  type: 'DYNAMIC'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'NUMBER'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  properties: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                          refreshers: string[]
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'FILE'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'DATE_TIME'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'ARRAY'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'OBJECT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'JSON'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DATE_TIME'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'FILE'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'COLOR'
                  required: boolean
                  defaultValue?: any
                }
            )
          | (
              | {
                  displayName: string
                  description?: string
                  username: { displayName: string; description?: string }
                  password: { displayName: string; description?: string }
                  type: 'BASIC_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'CUSTOM_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props?: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'SECRET_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  authUrl: string
                  tokenUrl: string
                  scope: string[]
                  prompt?: 'none' | 'consent' | 'login' | 'omit'
                  pkce?: boolean
                  pkceMethod?: 'plain' | 'S256'
                  authorizationMethod?: 'HEADER' | 'BODY'
                  grantType?:
                    | 'authorization_code'
                    | 'client_credentials'
                    | 'both_client_credentials_and_authorization_code'
                  extra?: { [key: string]: string }
                  type: 'OAUTH2'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'SECRET_TEXT'
                  required: boolean
                  defaultValue?: any
                }
            )
      }
      requireAuth: boolean
      errorHandlingOptions?: {
        retryOnFailure: { defaultValue?: boolean; hide?: boolean }
        continueOnFailure: { defaultValue?: boolean; hide?: boolean }
      }
    }
  }
  triggers: {
    [key: string]: {
      name: string
      displayName: string
      description: string
      props: {
        [key: string]:
          | (
              | {
                  displayName: string
                  description?: string
                  type: 'SHORT_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'LONG_TEXT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MARKDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'CHECKBOX'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  options: {
                    disabled?: boolean
                    placeholder?: string
                    options: { label: string; value: any }[]
                  }
                  type: 'STATIC_MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  displayName: string
                  description?: string
                  type: 'MULTI_SELECT_DROPDOWN'
                  required: boolean
                  defaultValue?: any
                  refreshers: string[]
                }
              | {
                  refreshers: string[]
                  displayName: string
                  description?: string
                  type: 'DYNAMIC'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'NUMBER'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  properties: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                          refreshers: string[]
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_MULTI_SELECT_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'FILE'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'DATE_TIME'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'ARRAY'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'OBJECT'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'JSON'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'DATE_TIME'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'FILE'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'COLOR'
                  required: boolean
                  defaultValue?: any
                }
            )
          | (
              | {
                  displayName: string
                  description?: string
                  username: { displayName: string; description?: string }
                  password: { displayName: string; description?: string }
                  type: 'BASIC_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'LONG_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'NUMBER'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'CHECKBOX'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  type: 'CUSTOM_AUTH'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  props?: {
                    [key: string]:
                      | {
                          displayName: string
                          description?: string
                          type: 'SHORT_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          type: 'SECRET_TEXT'
                          required: boolean
                          defaultValue?: any
                        }
                      | {
                          displayName: string
                          description?: string
                          options: {
                            disabled?: boolean
                            placeholder?: string
                            options: { label: string; value: any }[]
                          }
                          type: 'STATIC_DROPDOWN'
                          required: boolean
                          defaultValue?: any
                        }
                  }
                  authUrl: string
                  tokenUrl: string
                  scope: string[]
                  prompt?: 'none' | 'consent' | 'login' | 'omit'
                  pkce?: boolean
                  pkceMethod?: 'plain' | 'S256'
                  authorizationMethod?: 'HEADER' | 'BODY'
                  grantType?:
                    | 'authorization_code'
                    | 'client_credentials'
                    | 'both_client_credentials_and_authorization_code'
                  extra?: { [key: string]: string }
                  type: 'OAUTH2'
                  required: boolean
                  defaultValue?: any
                }
              | {
                  displayName: string
                  description?: string
                  type: 'SECRET_TEXT'
                  required: boolean
                  defaultValue?: any
                }
            )
      }
      errorHandlingOptions?: {
        retryOnFailure: { defaultValue?: boolean; hide?: boolean }
        continueOnFailure: { defaultValue?: boolean; hide?: boolean }
      }
      type: 'POLLING' | 'WEBHOOK' | 'APP_WEBHOOK' | 'MANUAL'
      sampleData: any
      handshakeConfiguration?: any
      renewConfiguration?: { strategy: 'CRON'; cronExpression: string } | { strategy: 'NONE' }
      testStrategy: 'SIMULATION' | 'TEST_FUNCTION'
    }
  }
}

const UserSchema = z
  .strictObject({
    id: z.string(),
    email: z.string(),
    firstName: z.string(),
    status: z.enum(['ACTIVE', 'INACTIVE']),
    externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    platformRole: z.enum(['ADMIN', 'MEMBER', 'OPERATOR']),
    lastName: z.string(),
    created: z.string(),
    updated: z.string(),
    lastActiveDate: z.union([z.string(), z.null().nullable()]).exactOptional(),
    imageUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'email',
      'firstName',
      'status',
      'platformRole',
      'lastName',
      'created',
      'updated',
    ],
  })
  .openapi('User')

const AppConnectionSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    externalId: z.string(),
    displayName: z.string(),
    type: z.enum([
      'OAUTH2',
      'PLATFORM_OAUTH2',
      'CLOUD_OAUTH2',
      'SECRET_TEXT',
      'BASIC_AUTH',
      'CUSTOM_AUTH',
      'NO_AUTH',
    ]),
    pieceName: z.string(),
    projectIds: z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)),
    platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    scope: z.enum(['PROJECT', 'PLATFORM']),
    status: z.enum(['ACTIVE', 'MISSING', 'ERROR']),
    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    owner: z.union([UserSchema, z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    flowIds: z
      .union([z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)), z.null().nullable()])
      .exactOptional(),
    pieceVersion: z.string(),
    preSelectForNewProjects: z.boolean(),
    usingSecretManager: z.boolean(),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'externalId',
      'displayName',
      'type',
      'pieceName',
      'projectIds',
      'scope',
      'status',
      'pieceVersion',
      'preSelectForNewProjects',
      'usingSecretManager',
    ],
  })
  .openapi('AppConnection')

const GlobalConnectionSchema = AppConnectionSchema.openapi('GlobalConnection')

const FlowCreatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.created'),
    data: z
      .object({
        flow: z
          .object({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        project: z
          .object({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowCreatedInput')

const FlowUpdatedInputSchema: z.ZodType<FlowUpdatedInputType> = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.updated'),
    data: z
      .object({
        flow: z
          .object({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .object({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        request: z.xor([
          z
            .object({
              type: z.literal('MOVE_ACTION'),
              request: z
                .object({
                  name: z.string(),
                  newParentStep: z.string(),
                  stepLocationRelativeToNewParent: z
                    .enum([
                      'AFTER',
                      'INSIDE_LOOP',
                      'INSIDE_BATCH',
                      'INSIDE_BRANCH',
                      'INSIDE_ON_SUCCESS_BRANCH',
                      'INSIDE_ON_FAILURE_BRANCH',
                    ])
                    .exactOptional(),
                  branchIndex: z.number().exactOptional(),
                })
                .openapi({ required: ['name', 'newParentStep'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Move Action' }),
          z
            .object({
              type: z.literal('CHANGE_STATUS'),
              request: z
                .object({ status: z.enum(['ENABLED', 'DISABLED']) })
                .openapi({ required: ['status'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Change Status' }),
          z
            .object({
              type: z.literal('LOCK_AND_PUBLISH'),
              request: z
                .object({ status: z.enum(['ENABLED', 'DISABLED']).exactOptional() })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Lock and Publish' }),
          z
            .object({
              type: z.literal('USE_AS_DRAFT'),
              request: z.object({ versionId: z.string() }).openapi({ required: ['versionId'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Copy as Draft' }),
          z
            .object({ type: z.literal('LOCK_FLOW'), request: z.looseObject({}) })
            .openapi({ required: ['type', 'request'], description: 'Lock Flow' }),
          z
            .object({
              type: z.literal('IMPORT_FLOW'),
              request: z
                .object({
                  displayName: z.string(),
                  trigger: z.union([
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('PIECE_TRIGGER'),
                        settings: z
                          .object({
                            sampleData: z
                              .object({
                                sampleDataFileId: z.string().exactOptional(),
                                sampleDataInputFileId: z.string().exactOptional(),
                                lastTestDate: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            propertySettings: z.record(
                              z.string(),
                              z
                                .object({
                                  type: z.enum(['MANUAL', 'DYNAMIC']),
                                  schema: z.any().exactOptional(),
                                })
                                .openapi({ required: ['type'] }),
                            ),
                            customLogoUrl: z.string().exactOptional(),
                            pieceName: z.string(),
                            pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                            triggerName: z.string().exactOptional(),
                            input: z.record(z.string(), z.any()),
                          })
                          .openapi({
                            required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                          }),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('EMPTY'),
                        settings: z.any(),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                  ]),
                  schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  notes: z
                    .union([
                      z.array(
                        z
                          .object({
                            id: z.string(),
                            content: z.string(),
                            ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                            color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                            position: z
                              .object({ x: z.number(), y: z.number() })
                              .openapi({ required: ['x', 'y'] }),
                            size: z
                              .object({ width: z.number(), height: z.number() })
                              .openapi({ required: ['width', 'height'] }),
                            createdAt: z.string(),
                            updatedAt: z.string(),
                          })
                          .openapi({
                            required: [
                              'id',
                              'content',
                              'color',
                              'position',
                              'size',
                              'createdAt',
                              'updatedAt',
                            ],
                          }),
                      ),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                })
                .openapi({ required: ['displayName', 'trigger'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Import Flow' }),
          z
            .object({
              type: z.literal('CHANGE_NAME'),
              request: z.object({ displayName: z.string() }).openapi({ required: ['displayName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Change Name' }),
          z
            .object({
              type: z.literal('DELETE_ACTION'),
              request: z.object({ names: z.array(z.string()) }).openapi({ required: ['names'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Delete Action' }),
          z
            .object({
              type: z.literal('UPDATE_ACTION'),
              request: z.union([
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    skip: z.boolean().exactOptional(),
                    type: z.literal('CODE'),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                  .and(
                    z
                      .object({
                        settings: z
                          .object({
                            customLogoUrl: z.string().exactOptional(),
                            sourceCode: z
                              .object({ packageJson: z.string(), code: z.string() })
                              .openapi({ required: ['packageJson', 'code'] }),
                            input: z.record(z.string(), z.any()),
                            errorHandlingOptions: z
                              .object({
                                continueOnFailure: z
                                  .object({ value: z.boolean().exactOptional() })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                retryOnFailure: z
                                  .object({ value: z.boolean().exactOptional() })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            useDeno: z.boolean().exactOptional(),
                          })
                          .openapi({ required: ['sourceCode', 'input'] }),
                      })
                      .openapi({ required: ['settings'] }),
                  ),
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    skip: z.boolean().exactOptional(),
                    type: z.literal('LOOP_ON_ITEMS'),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                  .and(
                    z
                      .object({
                        settings: z
                          .object({ customLogoUrl: z.string().exactOptional(), items: z.string() })
                          .openapi({ required: ['items'] }),
                      })
                      .openapi({ required: ['settings'] }),
                  ),
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    skip: z.boolean().exactOptional(),
                    type: z.literal('PROCESS_IN_BATCHES'),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                  .and(
                    z
                      .object({
                        settings: z
                          .object({
                            customLogoUrl: z.string().exactOptional(),
                            items: z.string(),
                            batchSize: z.number().default(10).exactOptional(),
                            timeoutSeconds: z.number().exactOptional(),
                            errorHandlingOptions: z
                              .object({
                                continueOnFailure: z
                                  .object({ value: z.boolean().exactOptional() })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                retryOnFailure: z
                                  .object({ value: z.boolean().exactOptional() })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                          })
                          .openapi({ required: ['items'] }),
                      })
                      .openapi({ required: ['settings'] }),
                  ),
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    skip: z.boolean().exactOptional(),
                    type: z.literal('PIECE'),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                  .and(
                    z
                      .object({
                        settings: z
                          .object({
                            customLogoUrl: z.string().exactOptional(),
                            propertySettings: z.record(
                              z.string(),
                              z
                                .object({
                                  type: z.enum(['MANUAL', 'DYNAMIC']),
                                  schema: z.any().exactOptional(),
                                })
                                .openapi({ required: ['type'] }),
                            ),
                            pieceName: z.string(),
                            pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                            actionName: z.string().exactOptional(),
                            input: z.record(z.string(), z.any()),
                            errorHandlingOptions: z
                              .object({
                                continueOnFailure: z
                                  .object({ value: z.boolean().exactOptional() })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                retryOnFailure: z
                                  .object({ value: z.boolean().exactOptional() })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                          })
                          .openapi({
                            required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                          }),
                      })
                      .openapi({ required: ['settings'] }),
                  ),
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    skip: z.boolean().exactOptional(),
                    type: z.literal('ROUTER'),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                  .and(
                    z
                      .object({
                        settings: z
                          .object({
                            customLogoUrl: z.string().exactOptional(),
                            branches: z.array(
                              z.union([
                                z
                                  .object({
                                    conditions: z.array(
                                      z.array(
                                        z.union([
                                          z
                                            .object({
                                              firstValue: z.string(),
                                              secondValue: z.string(),
                                              caseSensitive: z.boolean().exactOptional(),
                                              operator: z
                                                .union([
                                                  z.literal('TEXT_CONTAINS'),
                                                  z.literal('TEXT_DOES_NOT_CONTAIN'),
                                                  z.literal('TEXT_EXACTLY_MATCHES'),
                                                  z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                                  z.literal('TEXT_START_WITH'),
                                                  z.literal('TEXT_DOES_NOT_START_WITH'),
                                                  z.literal('TEXT_ENDS_WITH'),
                                                  z.literal('TEXT_DOES_NOT_END_WITH'),
                                                  z.literal('LIST_CONTAINS'),
                                                  z.literal('LIST_DOES_NOT_CONTAIN'),
                                                ])
                                                .exactOptional(),
                                            })
                                            .openapi({ required: ['firstValue', 'secondValue'] }),
                                          z
                                            .object({
                                              firstValue: z.string(),
                                              secondValue: z.string(),
                                              operator: z
                                                .union([
                                                  z.literal('NUMBER_IS_GREATER_THAN'),
                                                  z.literal('NUMBER_IS_LESS_THAN'),
                                                  z.literal('NUMBER_IS_EQUAL_TO'),
                                                ])
                                                .exactOptional(),
                                            })
                                            .openapi({ required: ['firstValue', 'secondValue'] }),
                                          z
                                            .object({
                                              firstValue: z.string(),
                                              secondValue: z.string(),
                                              operator: z
                                                .union([
                                                  z.literal('DATE_IS_BEFORE'),
                                                  z.literal('DATE_IS_EQUAL'),
                                                  z.literal('DATE_IS_AFTER'),
                                                ])
                                                .exactOptional(),
                                            })
                                            .openapi({ required: ['firstValue', 'secondValue'] }),
                                          z
                                            .object({
                                              firstValue: z.string(),
                                              operator: z
                                                .union([
                                                  z.literal('EXISTS'),
                                                  z.literal('DOES_NOT_EXIST'),
                                                  z.literal('BOOLEAN_IS_TRUE'),
                                                  z.literal('BOOLEAN_IS_FALSE'),
                                                  z.literal('LIST_IS_EMPTY'),
                                                  z.literal('LIST_IS_NOT_EMPTY'),
                                                ])
                                                .exactOptional(),
                                            })
                                            .openapi({ required: ['firstValue'] }),
                                        ]),
                                      ),
                                    ),
                                    branchType: z.literal('CONDITION'),
                                    branchName: z.string(),
                                  })
                                  .openapi({
                                    required: ['conditions', 'branchType', 'branchName'],
                                  }),
                                z
                                  .object({
                                    branchType: z.literal('FALLBACK'),
                                    branchName: z.string(),
                                  })
                                  .openapi({ required: ['branchType', 'branchName'] }),
                              ]),
                            ),
                            executionType: z.enum(['EXECUTE_ALL_MATCH', 'EXECUTE_FIRST_MATCH']),
                          })
                          .openapi({ required: ['branches', 'executionType'] }),
                      })
                      .openapi({ required: ['settings'] }),
                  ),
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    skip: z.boolean().exactOptional(),
                    type: z.literal('AI_ROUTER'),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                  .and(
                    z
                      .object({
                        settings: z
                          .object({
                            customLogoUrl: z.string().exactOptional(),
                            text: z.string(),
                            question: z.string(),
                            branches: z.array(
                              z.union([
                                z
                                  .object({
                                    branchType: z.literal('CONDITION'),
                                    branchName: z.string(),
                                    description: z.string().exactOptional(),
                                  })
                                  .openapi({ required: ['branchType', 'branchName'] }),
                                z
                                  .object({
                                    branchType: z.literal('FALLBACK'),
                                    branchName: z.string(),
                                    description: z.string().exactOptional(),
                                  })
                                  .openapi({ required: ['branchType', 'branchName'] }),
                              ]),
                            ),
                            matchMode: z.enum(['BEST_MATCH', 'ALL_MATCHES']).exactOptional(),
                            minConfidence: z.number().min(0).max(1).exactOptional(),
                            model: z.string().exactOptional(),
                          })
                          .openapi({ required: ['text', 'question', 'branches'] }),
                      })
                      .openapi({ required: ['settings'] }),
                  ),
              ]),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Action' }),
          z
            .object({
              type: z.literal('ADD_ACTION'),
              request: z
                .object({
                  parentStep: z.string(),
                  stepLocationRelativeToParent: z
                    .enum([
                      'AFTER',
                      'INSIDE_LOOP',
                      'INSIDE_BATCH',
                      'INSIDE_BRANCH',
                      'INSIDE_ON_SUCCESS_BRANCH',
                      'INSIDE_ON_FAILURE_BRANCH',
                    ])
                    .exactOptional(),
                  branchIndex: z.number().exactOptional(),
                  action: z.union([
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        skip: z.boolean().exactOptional(),
                        type: z.literal('CODE'),
                      })
                      .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                      .and(
                        z
                          .object({
                            settings: z
                              .object({
                                customLogoUrl: z.string().exactOptional(),
                                sourceCode: z
                                  .object({ packageJson: z.string(), code: z.string() })
                                  .openapi({ required: ['packageJson', 'code'] }),
                                input: z.record(z.string(), z.any()),
                                errorHandlingOptions: z
                                  .object({
                                    continueOnFailure: z
                                      .object({ value: z.boolean().exactOptional() })
                                      .exactOptional()
                                      .openapi({ required: [] }),
                                    retryOnFailure: z
                                      .object({ value: z.boolean().exactOptional() })
                                      .exactOptional()
                                      .openapi({ required: [] }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                useDeno: z.boolean().exactOptional(),
                              })
                              .openapi({ required: ['sourceCode', 'input'] }),
                          })
                          .openapi({ required: ['settings'] }),
                      ),
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        skip: z.boolean().exactOptional(),
                        type: z.literal('LOOP_ON_ITEMS'),
                      })
                      .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                      .and(
                        z
                          .object({
                            settings: z
                              .object({
                                customLogoUrl: z.string().exactOptional(),
                                items: z.string(),
                              })
                              .openapi({ required: ['items'] }),
                          })
                          .openapi({ required: ['settings'] }),
                      ),
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        skip: z.boolean().exactOptional(),
                        type: z.literal('PROCESS_IN_BATCHES'),
                      })
                      .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                      .and(
                        z
                          .object({
                            settings: z
                              .object({
                                customLogoUrl: z.string().exactOptional(),
                                items: z.string(),
                                batchSize: z.number().default(10).exactOptional(),
                                timeoutSeconds: z.number().exactOptional(),
                                errorHandlingOptions: z
                                  .object({
                                    continueOnFailure: z
                                      .object({ value: z.boolean().exactOptional() })
                                      .exactOptional()
                                      .openapi({ required: [] }),
                                    retryOnFailure: z
                                      .object({ value: z.boolean().exactOptional() })
                                      .exactOptional()
                                      .openapi({ required: [] }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .openapi({ required: ['items'] }),
                          })
                          .openapi({ required: ['settings'] }),
                      ),
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        skip: z.boolean().exactOptional(),
                        type: z.literal('PIECE'),
                      })
                      .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                      .and(
                        z
                          .object({
                            settings: z
                              .object({
                                customLogoUrl: z.string().exactOptional(),
                                propertySettings: z.record(
                                  z.string(),
                                  z
                                    .object({
                                      type: z.enum(['MANUAL', 'DYNAMIC']),
                                      schema: z.any().exactOptional(),
                                    })
                                    .openapi({ required: ['type'] }),
                                ),
                                pieceName: z.string(),
                                pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                actionName: z.string().exactOptional(),
                                input: z.record(z.string(), z.any()),
                                errorHandlingOptions: z
                                  .object({
                                    continueOnFailure: z
                                      .object({ value: z.boolean().exactOptional() })
                                      .exactOptional()
                                      .openapi({ required: [] }),
                                    retryOnFailure: z
                                      .object({ value: z.boolean().exactOptional() })
                                      .exactOptional()
                                      .openapi({ required: [] }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .openapi({
                                required: [
                                  'propertySettings',
                                  'pieceName',
                                  'pieceVersion',
                                  'input',
                                ],
                              }),
                          })
                          .openapi({ required: ['settings'] }),
                      ),
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        skip: z.boolean().exactOptional(),
                        type: z.literal('ROUTER'),
                      })
                      .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                      .and(
                        z
                          .object({
                            settings: z
                              .object({
                                customLogoUrl: z.string().exactOptional(),
                                branches: z.array(
                                  z.union([
                                    z
                                      .object({
                                        conditions: z.array(
                                          z.array(
                                            z.union([
                                              z
                                                .object({
                                                  firstValue: z.string(),
                                                  secondValue: z.string(),
                                                  caseSensitive: z.boolean().exactOptional(),
                                                  operator: z
                                                    .union([
                                                      z.literal('TEXT_CONTAINS'),
                                                      z.literal('TEXT_DOES_NOT_CONTAIN'),
                                                      z.literal('TEXT_EXACTLY_MATCHES'),
                                                      z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                                      z.literal('TEXT_START_WITH'),
                                                      z.literal('TEXT_DOES_NOT_START_WITH'),
                                                      z.literal('TEXT_ENDS_WITH'),
                                                      z.literal('TEXT_DOES_NOT_END_WITH'),
                                                      z.literal('LIST_CONTAINS'),
                                                      z.literal('LIST_DOES_NOT_CONTAIN'),
                                                    ])
                                                    .exactOptional(),
                                                })
                                                .openapi({
                                                  required: ['firstValue', 'secondValue'],
                                                }),
                                              z
                                                .object({
                                                  firstValue: z.string(),
                                                  secondValue: z.string(),
                                                  operator: z
                                                    .union([
                                                      z.literal('NUMBER_IS_GREATER_THAN'),
                                                      z.literal('NUMBER_IS_LESS_THAN'),
                                                      z.literal('NUMBER_IS_EQUAL_TO'),
                                                    ])
                                                    .exactOptional(),
                                                })
                                                .openapi({
                                                  required: ['firstValue', 'secondValue'],
                                                }),
                                              z
                                                .object({
                                                  firstValue: z.string(),
                                                  secondValue: z.string(),
                                                  operator: z
                                                    .union([
                                                      z.literal('DATE_IS_BEFORE'),
                                                      z.literal('DATE_IS_EQUAL'),
                                                      z.literal('DATE_IS_AFTER'),
                                                    ])
                                                    .exactOptional(),
                                                })
                                                .openapi({
                                                  required: ['firstValue', 'secondValue'],
                                                }),
                                              z
                                                .object({
                                                  firstValue: z.string(),
                                                  operator: z
                                                    .union([
                                                      z.literal('EXISTS'),
                                                      z.literal('DOES_NOT_EXIST'),
                                                      z.literal('BOOLEAN_IS_TRUE'),
                                                      z.literal('BOOLEAN_IS_FALSE'),
                                                      z.literal('LIST_IS_EMPTY'),
                                                      z.literal('LIST_IS_NOT_EMPTY'),
                                                    ])
                                                    .exactOptional(),
                                                })
                                                .openapi({ required: ['firstValue'] }),
                                            ]),
                                          ),
                                        ),
                                        branchType: z.literal('CONDITION'),
                                        branchName: z.string(),
                                      })
                                      .openapi({
                                        required: ['conditions', 'branchType', 'branchName'],
                                      }),
                                    z
                                      .object({
                                        branchType: z.literal('FALLBACK'),
                                        branchName: z.string(),
                                      })
                                      .openapi({ required: ['branchType', 'branchName'] }),
                                  ]),
                                ),
                                executionType: z.enum(['EXECUTE_ALL_MATCH', 'EXECUTE_FIRST_MATCH']),
                              })
                              .openapi({ required: ['branches', 'executionType'] }),
                          })
                          .openapi({ required: ['settings'] }),
                      ),
                    z
                      .object({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        skip: z.boolean().exactOptional(),
                        type: z.literal('AI_ROUTER'),
                      })
                      .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                      .and(
                        z
                          .object({
                            settings: z
                              .object({
                                customLogoUrl: z.string().exactOptional(),
                                text: z.string(),
                                question: z.string(),
                                branches: z.array(
                                  z.union([
                                    z
                                      .object({
                                        branchType: z.literal('CONDITION'),
                                        branchName: z.string(),
                                        description: z.string().exactOptional(),
                                      })
                                      .openapi({ required: ['branchType', 'branchName'] }),
                                    z
                                      .object({
                                        branchType: z.literal('FALLBACK'),
                                        branchName: z.string(),
                                        description: z.string().exactOptional(),
                                      })
                                      .openapi({ required: ['branchType', 'branchName'] }),
                                  ]),
                                ),
                                matchMode: z.enum(['BEST_MATCH', 'ALL_MATCHES']).exactOptional(),
                                minConfidence: z.number().min(0).max(1).exactOptional(),
                                model: z.string().exactOptional(),
                              })
                              .openapi({ required: ['text', 'question', 'branches'] }),
                          })
                          .openapi({ required: ['settings'] }),
                      ),
                  ]),
                })
                .openapi({ required: ['parentStep', 'action'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Add Action' }),
          z
            .object({
              type: z.literal('UPDATE_TRIGGER'),
              request: z.union([
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    nextAction: z.any().exactOptional(),
                    type: z.literal('EMPTY'),
                    settings: z.any(),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type', 'settings'] }),
                z
                  .object({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    nextAction: z.any().exactOptional(),
                    type: z.literal('PIECE_TRIGGER'),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                  .and(
                    z
                      .object({
                        settings: z
                          .object({
                            propertySettings: z.record(
                              z.string(),
                              z
                                .object({
                                  type: z.enum(['MANUAL', 'DYNAMIC']),
                                  schema: z.any().exactOptional(),
                                })
                                .openapi({ required: ['type'] }),
                            ),
                            customLogoUrl: z.string().exactOptional(),
                            pieceName: z.string(),
                            pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                            triggerName: z.string().exactOptional(),
                            input: z.record(z.string(), z.any()),
                          })
                          .openapi({
                            required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                          }),
                      })
                      .openapi({ required: ['settings'] }),
                  ),
              ]),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Trigger' }),
          z
            .object({
              type: z.literal('CHANGE_FOLDER'),
              request: z
                .object({ folderId: z.union([z.string(), z.null().nullable()]).exactOptional() })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Change Folder' }),
          z
            .object({
              type: z.literal('DUPLICATE_ACTION'),
              request: z.object({ stepName: z.string() }).openapi({ required: ['stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Duplicate Action' }),
          z
            .object({
              type: z.literal('DELETE_BRANCH'),
              request: z
                .object({ branchIndex: z.number(), stepName: z.string() })
                .openapi({ required: ['branchIndex', 'stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Delete Branch' }),
          z
            .object({
              type: z.literal('ADD_BRANCH'),
              request: z
                .object({
                  branchIndex: z.number(),
                  stepName: z.string(),
                  conditions: z
                    .array(
                      z.array(
                        z.union([
                          z
                            .object({
                              firstValue: z.string(),
                              secondValue: z.string(),
                              caseSensitive: z.boolean().exactOptional(),
                              operator: z
                                .union([
                                  z.literal('TEXT_CONTAINS'),
                                  z.literal('TEXT_DOES_NOT_CONTAIN'),
                                  z.literal('TEXT_EXACTLY_MATCHES'),
                                  z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                  z.literal('TEXT_START_WITH'),
                                  z.literal('TEXT_DOES_NOT_START_WITH'),
                                  z.literal('TEXT_ENDS_WITH'),
                                  z.literal('TEXT_DOES_NOT_END_WITH'),
                                  z.literal('LIST_CONTAINS'),
                                  z.literal('LIST_DOES_NOT_CONTAIN'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue', 'secondValue'] }),
                          z
                            .object({
                              firstValue: z.string(),
                              secondValue: z.string(),
                              operator: z
                                .union([
                                  z.literal('NUMBER_IS_GREATER_THAN'),
                                  z.literal('NUMBER_IS_LESS_THAN'),
                                  z.literal('NUMBER_IS_EQUAL_TO'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue', 'secondValue'] }),
                          z
                            .object({
                              firstValue: z.string(),
                              secondValue: z.string(),
                              operator: z
                                .union([
                                  z.literal('DATE_IS_BEFORE'),
                                  z.literal('DATE_IS_EQUAL'),
                                  z.literal('DATE_IS_AFTER'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue', 'secondValue'] }),
                          z
                            .object({
                              firstValue: z.string(),
                              operator: z
                                .union([
                                  z.literal('EXISTS'),
                                  z.literal('DOES_NOT_EXIST'),
                                  z.literal('BOOLEAN_IS_TRUE'),
                                  z.literal('BOOLEAN_IS_FALSE'),
                                  z.literal('LIST_IS_EMPTY'),
                                  z.literal('LIST_IS_NOT_EMPTY'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue'] }),
                        ]),
                      ),
                    )
                    .exactOptional(),
                  description: z.string().exactOptional(),
                  branchName: z.string(),
                })
                .openapi({ required: ['branchIndex', 'stepName', 'branchName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Add Branch' }),
          z
            .object({
              type: z.literal('DUPLICATE_BRANCH'),
              request: z
                .object({ branchIndex: z.number(), stepName: z.string() })
                .openapi({ required: ['branchIndex', 'stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Duplicate Branch' }),
          z
            .object({
              type: z.literal('SET_SKIP_ACTION'),
              request: z
                .object({ names: z.array(z.string()), skip: z.boolean() })
                .openapi({ required: ['names', 'skip'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Skip Action' }),
          z
            .object({
              type: z.literal('UPDATE_METADATA'),
              request: z
                .object({
                  metadata: z
                    .union([z.record(z.string(), z.any()), z.null().nullable()])
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Metadata' }),
          z
            .object({
              type: z.literal('MOVE_BRANCH'),
              request: z
                .object({
                  sourceBranchIndex: z.number(),
                  targetBranchIndex: z.number(),
                  stepName: z.string(),
                })
                .openapi({ required: ['sourceBranchIndex', 'targetBranchIndex', 'stepName'] }),
            })
            .openapi({ required: ['type', 'request'] }),
          z
            .object({
              type: z.literal('SAVE_SAMPLE_DATA'),
              request: z
                .object({
                  stepName: z.string(),
                  payload: z.any(),
                  type: z.enum(['INPUT', 'OUTPUT']),
                })
                .openapi({ required: ['stepName', 'payload', 'type'] }),
            })
            .openapi({ required: ['type', 'request'] }),
          z
            .object({
              type: z.literal('UPDATE_MINUTES_SAVED'),
              request: z
                .object({
                  timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Minutes Saved' }),
          z
            .object({
              type: z.literal('UPDATE_OWNER'),
              request: z.object({ ownerId: z.string() }).openapi({ required: ['ownerId'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Owner' }),
          z
            .object({
              type: z.literal('UPDATE_NOTE'),
              request: z
                .object({
                  id: z.string(),
                  content: z.string(),
                  ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                  position: z
                    .object({ x: z.number(), y: z.number() })
                    .openapi({ required: ['x', 'y'] }),
                  size: z
                    .object({ width: z.number(), height: z.number() })
                    .openapi({ required: ['width', 'height'] }),
                })
                .openapi({ required: ['id', 'content', 'color', 'position', 'size'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Note' }),
          z
            .object({
              type: z.literal('DELETE_NOTE'),
              request: z.object({ id: z.string() }).openapi({ required: ['id'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Delete Note' }),
          z
            .object({
              type: z.literal('ADD_NOTE'),
              request: z
                .object({
                  id: z.string(),
                  content: z.string(),
                  color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                  position: z
                    .object({ x: z.number(), y: z.number() })
                    .openapi({ required: ['x', 'y'] }),
                  size: z
                    .object({ width: z.number(), height: z.number() })
                    .openapi({ required: ['width', 'height'] }),
                })
                .openapi({ required: ['id', 'content', 'color', 'position', 'size'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Add Note' }),
          z
            .object({
              type: z.literal('UPDATE_SAMPLE_DATA_INFO'),
              request: z
                .object({
                  stepName: z.string(),
                  sampleDataSettings: z
                    .union([
                      z
                        .object({
                          sampleDataFileId: z.string().exactOptional(),
                          sampleDataInputFileId: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                })
                .openapi({ required: ['stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Sample Data Info' }),
        ]),
        reason: z.string().exactOptional(),
        project: z
          .object({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion', 'request'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowUpdatedInput')

const FlowDeletedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.deleted'),
    data: z
      .object({
        flow: z
          .object({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .object({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .object({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowDeletedInput')

const FlowPublishedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.published'),
    data: z
      .object({
        flow: z
          .object({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .object({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .object({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowPublishedInput')

const FlowActivatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.activated'),
    data: z
      .object({
        flow: z
          .object({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .object({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .object({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowActivatedInput')

const FlowDeactivatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.deactivated'),
    data: z
      .object({
        flow: z
          .object({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .object({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .object({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowDeactivatedInput')

const ConnectionUpsertedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('connection.upserted'),
    data: z
      .object({
        connection: z
          .object({
            displayName: z.string(),
            externalId: z.string(),
            pieceName: z.string(),
            status: z.string(),
            type: z.string(),
            id: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({
            required: [
              'displayName',
              'externalId',
              'pieceName',
              'status',
              'type',
              'id',
              'created',
              'updated',
            ],
          }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['connection'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ConnectionUpsertedInput')

const ConnectionDeletedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('connection.deleted'),
    data: z
      .object({
        connection: z
          .object({
            displayName: z.string(),
            externalId: z.string(),
            pieceName: z.string(),
            status: z.string(),
            type: z.string(),
            id: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({
            required: [
              'displayName',
              'externalId',
              'pieceName',
              'status',
              'type',
              'id',
              'created',
              'updated',
            ],
          }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['connection'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ConnectionDeletedInput')

const FolderCreatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('folder.created'),
    data: z
      .object({
        folder: z
          .object({
            id: z.string(),
            displayName: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'created', 'updated'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['folder'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FolderCreatedInput')

const FolderUpdatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('folder.updated'),
    data: z
      .object({
        folder: z
          .object({
            id: z.string(),
            displayName: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'created', 'updated'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['folder'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FolderUpdatedInput')

const FolderDeletedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('folder.deleted'),
    data: z
      .object({
        folder: z
          .object({
            id: z.string(),
            displayName: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'created', 'updated'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['folder'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FolderDeletedInput')

const FlowRunStartedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.started'),
    data: z
      .object({
        flowRun: z
          .object({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunStartedInput')

const FlowRunFinishedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.finished'),
    data: z
      .object({
        flowRun: z
          .object({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunFinishedInput')

const FlowRunRetriedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.retried'),
    data: z
      .object({
        flowRun: z
          .object({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunRetriedInput')

const AgentActionExecutedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.action.executed'),
    data: z
      .object({
        source: z.enum(['CHAT', 'FLOW_STEP', 'AGENT', 'AGENT_BUILDER']),
        conversation: z
          .object({
            id: z.string(),
            source: z.enum(['CHAT', 'FLOW_STEP', 'AGENT', 'AGENT_BUILDER']),
          })
          .exactOptional()
          .openapi({ required: ['id', 'source'] }),
        agent: z
          .object({ id: z.string(), displayName: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: ['id'] }),
        flow: z
          .object({ id: z.string(), runId: z.string() })
          .exactOptional()
          .openapi({ required: ['id', 'runId'] }),
        action: z.xor([
          z
            .object({
              kind: z.literal('PIECE'),
              pieceName: z.string(),
              pieceDisplayName: z.string(),
              actionName: z.string(),
              displayName: z.string(),
            })
            .openapi({
              required: ['kind', 'pieceName', 'pieceDisplayName', 'actionName', 'displayName'],
            }),
          z
            .object({ kind: z.literal('FLOW'), flowId: z.string(), displayName: z.string() })
            .openapi({ required: ['kind', 'flowId', 'displayName'] }),
        ]),
        outcome: z.enum(['SUCCEEDED', 'FAILED']).exactOptional(),
        connection: z
          .object({ externalId: z.string(), label: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: ['externalId'] }),
      })
      .openapi({ required: ['source', 'action'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentActionExecutedInput')

const UserSignedUpInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.signed.up'),
    data: z
      .object({
        source: z
          .union([z.literal('credentials'), z.literal('sso'), z.literal('managed')])
          .exactOptional(),
        method: z.enum(['EMAIL', 'GOOGLE', 'SAML', 'JWT']).exactOptional(),
        user: z
          .object({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserSignedUpInput')

const UserSignedInInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.signed.in'),
    data: z
      .object({
        user: z
          .object({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
        method: z.enum(['EMAIL', 'GOOGLE', 'SAML', 'JWT']).exactOptional(),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserSignedInInput')

const UserPasswordResetInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.password.reset'),
    data: z
      .object({
        user: z
          .object({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserPasswordResetInput')

const UserInvitationSentInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.invitation.sent'),
    data: z
      .object({
        invitation: z
          .object({
            id: z.string(),
            email: z.string(),
            type: z.enum(['PLATFORM', 'PROJECT']),
            platformRole: z
              .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
              .exactOptional(),
            projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'email', 'type'] }),
        projectRole: z
          .union([
            z.object({ id: z.string(), name: z.string() }).openapi({ required: ['id', 'name'] }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .openapi({ required: ['invitation'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserInvitationSentInput')

const UserInvitationAcceptedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.invitation.accepted'),
    data: z
      .object({
        invitation: z
          .object({
            id: z.string(),
            email: z.string(),
            type: z.enum(['PLATFORM', 'PROJECT']),
            platformRole: z
              .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
              .exactOptional(),
            projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'email', 'type'] }),
        projectRole: z
          .union([
            z.object({ id: z.string(), name: z.string() }).openapi({ required: ['id', 'name'] }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .openapi({ required: ['invitation'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserInvitationAcceptedInput')

const UserInvitationDeletedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.invitation.deleted'),
    data: z
      .object({
        invitation: z
          .object({
            id: z.string(),
            email: z.string(),
            type: z.enum(['PLATFORM', 'PROJECT']),
            platformRole: z
              .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
              .exactOptional(),
            projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'email', 'type'] }),
        projectRole: z
          .union([
            z.object({ id: z.string(), name: z.string() }).openapi({ required: ['id', 'name'] }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .openapi({ required: ['invitation'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserInvitationDeletedInput')

const UserEmailVerifiedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.email.verified'),
    data: z
      .object({
        user: z
          .object({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserEmailVerifiedInput')

const SigningKeyCreatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.union([z.literal('signing.key.created')]),
    data: z
      .object({
        signingKey: z
          .object({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            displayName: z.string(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'displayName'] }),
      })
      .openapi({ required: ['signingKey'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SigningKeyCreatedInput')

const ProjectRoleCreatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.union([
      z.literal('project.role.created'),
      z.literal('project.role.updated'),
      z.literal('project.role.deleted'),
    ]),
    data: z
      .object({
        projectRole: z
          .object({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions'] }),
      })
      .openapi({ required: ['projectRole'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectRoleCreatedInput')

const ProjectReleaseCreatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.release.created'),
    data: z
      .object({
        release: z
          .object({
            name: z.string(),
            description: z.union([z.string(), z.null().nullable()]).exactOptional(),
            type: z.string(),
            projectId: z.string(),
            importedByUser: z
              .object({
                id: z.string(),
                email: z.string(),
                firstName: z.string(),
                status: z.string(),
                externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                platformRole: z.string(),
                lastName: z.string(),
                created: z.string(),
                updated: z.string(),
                lastActiveDate: z.union([z.string(), z.null().nullable()]).exactOptional(),
                imageUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: [
                  'id',
                  'email',
                  'firstName',
                  'status',
                  'platformRole',
                  'lastName',
                  'created',
                  'updated',
                ],
              }),
          })
          .openapi({ required: ['name', 'type', 'projectId'] }),
      })
      .openapi({ required: ['release'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectReleaseCreatedInput')

const TemplateInputSchema: z.ZodType<TemplateInputType> = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    name: z.string(),
    type: z.enum(['OFFICIAL', 'SHARED', 'CUSTOM']),
    summary: z.string(),
    description: z.string(),
    tags: z.array(
      z
        .object({
          title: z.string(),
          color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
          icon: z.string().exactOptional(),
        })
        .openapi({ required: ['title', 'color'] }),
    ),
    blogUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    author: z.string(),
    categories: z.array(z.string()),
    pieces: z.array(z.string()),
    platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    flows: z
      .array(
        z
          .object({
            displayName: z.string(),
            trigger: z.union([
              z
                .object({
                  name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                  valid: z.boolean(),
                  displayName: z.string(),
                  nextAction: z.any().exactOptional(),
                  lastUpdatedDate: z.string(),
                  type: z.literal('PIECE_TRIGGER'),
                  settings: z
                    .object({
                      sampleData: z
                        .object({
                          sampleDataFileId: z.string().exactOptional(),
                          sampleDataInputFileId: z.string().exactOptional(),
                          lastTestDate: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      propertySettings: z.record(
                        z.string(),
                        z
                          .object({
                            type: z.enum(['MANUAL', 'DYNAMIC']),
                            schema: z.any().exactOptional(),
                          })
                          .openapi({ required: ['type'] }),
                      ),
                      customLogoUrl: z.string().exactOptional(),
                      pieceName: z.string(),
                      pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                      triggerName: z.string().exactOptional(),
                      input: z.record(z.string(), z.any()),
                    })
                    .openapi({
                      required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                    }),
                })
                .openapi({
                  required: ['name', 'valid', 'displayName', 'lastUpdatedDate', 'type', 'settings'],
                }),
              z
                .object({
                  name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                  valid: z.boolean(),
                  displayName: z.string(),
                  nextAction: z.any().exactOptional(),
                  lastUpdatedDate: z.string(),
                  type: z.literal('EMPTY'),
                  settings: z.any(),
                })
                .openapi({
                  required: ['name', 'valid', 'displayName', 'lastUpdatedDate', 'type', 'settings'],
                }),
            ]),
            valid: z.boolean(),
            schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
            description: z.string().exactOptional(),
            notes: z
              .array(
                z
                  .object({
                    id: z.string(),
                    content: z.string(),
                    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                    position: z
                      .object({ x: z.number(), y: z.number() })
                      .openapi({ required: ['x', 'y'] }),
                    size: z
                      .object({ width: z.number(), height: z.number() })
                      .openapi({ required: ['width', 'height'] }),
                    createdAt: z.string(),
                    updatedAt: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'content',
                      'color',
                      'position',
                      'size',
                      'createdAt',
                      'updatedAt',
                    ],
                  }),
              )
              .exactOptional(),
          })
          .openapi({ required: ['displayName', 'trigger', 'valid'] }),
      )
      .exactOptional(),
    tables: z
      .array(
        z
          .object({
            name: z.string(),
            externalId: z.string(),
            fields: z.array(
              z
                .object({
                  name: z.string(),
                  type: z.string(),
                  data: z
                    .union([
                      z
                        .object({
                          options: z.array(
                            z.object({ value: z.string() }).openapi({ required: ['value'] }),
                          ),
                        })
                        .openapi({ required: ['options'] }),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                  externalId: z.string(),
                })
                .openapi({ required: ['name', 'type', 'externalId'] }),
            ),
            status: z.union([z.string(), z.null().nullable()]).exactOptional(),
            trigger: z.union([z.string(), z.null().nullable()]).exactOptional(),
            data: z
              .union([
                z
                  .object({
                    type: z.literal('CSV'),
                    rows: z.array(
                      z.array(
                        z
                          .object({ fieldId: z.string(), value: z.string() })
                          .openapi({ required: ['fieldId', 'value'] }),
                      ),
                    ),
                  })
                  .openapi({ required: ['type', 'rows'] }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({ required: ['name', 'externalId', 'fields'] }),
      )
      .exactOptional(),
    status: z.enum(['PUBLISHED', 'ARCHIVED']),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'name',
      'type',
      'summary',
      'description',
      'tags',
      'author',
      'categories',
      'pieces',
      'status',
    ],
  })
  .openapi('TemplateInput')

const FolderInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    displayName: z.string(),
    displayOrder: z.number(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'projectId', 'displayName', 'displayOrder'] })
  .openapi('FolderInput')

const UserInputSchema = z
  .object({
    id: z.string(),
    email: z.string(),
    firstName: z.string(),
    status: z.enum(['ACTIVE', 'INACTIVE']),
    externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    platformRole: z.enum(['ADMIN', 'MEMBER', 'OPERATOR']),
    lastName: z.string(),
    created: z.string(),
    updated: z.string(),
    lastActiveDate: z.union([z.string(), z.null().nullable()]).exactOptional(),
    imageUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'email',
      'firstName',
      'status',
      'platformRole',
      'lastName',
      'created',
      'updated',
    ],
  })
  .openapi('UserInput')

const UserInvitationInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    email: z.string(),
    status: z.enum(['PENDING', 'ACCEPTED']),
    type: z.enum(['PLATFORM', 'PROJECT']),
    platformId: z.string(),
    platformRole: z
      .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
      .exactOptional(),
    projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    projectRoleId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    projectRole: z
      .union([
        z
          .object({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
            type: z.string(),
            userCount: z.number().exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions', 'type'] }),
        z.null().nullable(),
      ])
      .exactOptional(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'email', 'status', 'type', 'platformId'] })
  .openapi('UserInvitationInput')

const ProjectMemberInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
    userId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
    projectId: z.string(),
    projectRoleId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
  })
  .openapi({
    required: ['id', 'created', 'updated', 'platformId', 'userId', 'projectId', 'projectRoleId'],
  })
  .openapi('ProjectMemberInput')

const ProjectInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    ownerId: z.string(),
    displayName: z.string(),
    platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
    maxConcurrentJobs: z.union([z.number(), z.null().nullable()]).exactOptional(),
    type: z.enum(['TEAM', 'PERSONAL']),
    icon: z
      .object({
        color: z.enum([
          'RED',
          'BLUE',
          'YELLOW',
          'PURPLE',
          'GREEN',
          'PINK',
          'VIOLET',
          'ORANGE',
          'DARK_GREEN',
          'CYAN',
          'LAVENDER',
          'DEEP_ORANGE',
        ]),
      })
      .openapi({ required: ['color'] }),
    externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    releasesEnabled: z.boolean(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    poolId: z.union([z.string().regex(/^[0-9a-zA-Z]{21}$/), z.null().nullable()]).exactOptional(),
    plan: z
      .object({
        id: z.string(),
        created: z.string(),
        updated: z.string(),
        projectId: z.string(),
        locked: z.boolean().default(false).exactOptional(),
        name: z.string(),
        piecesFilterType: z.enum(['NONE', 'ALLOWED']),
        pieces: z.array(z.string()),
      })
      .openapi({
        required: ['id', 'created', 'updated', 'projectId', 'name', 'piecesFilterType', 'pieces'],
      }),
    analytics: z
      .object({
        totalUsers: z.number(),
        activeUsers: z.number(),
        totalFlows: z.number(),
        activeFlows: z.number(),
      })
      .openapi({ required: ['totalUsers', 'activeUsers', 'totalFlows', 'activeFlows'] }),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'ownerId',
      'displayName',
      'platformId',
      'type',
      'icon',
      'releasesEnabled',
      'plan',
      'analytics',
    ],
  })
  .openapi('ProjectInput')

const FlowInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    externalId: z.string(),
    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    status: z.enum(['ENABLED', 'DISABLED']),
    publishedVersionId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    operationStatus: z.enum(['NONE', 'DELETING', 'ENABLING', 'DISABLING']),
    timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
    templateId: z.union([z.string(), z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: ['id', 'created', 'updated', 'projectId', 'externalId', 'status', 'operationStatus'],
  })
  .openapi('FlowInput')

const FlowRunInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    flowId: z.string(),
    parentRunId: z.string().exactOptional(),
    failParentOnFailure: z.boolean(),
    triggeredBy: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    flowVersionId: z.string(),
    flowVersion: z
      .object({ displayName: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    logsFileId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    status: z.enum([
      'FAILED',
      'QUOTA_EXCEEDED',
      'INTERNAL_ERROR',
      'PAUSED',
      'QUEUED',
      'RUNNING',
      'SUCCEEDED',
      'MEMORY_LIMIT_EXCEEDED',
      'TIMEOUT',
      'CANCELED',
      'LOG_SIZE_EXCEEDED',
    ]),
    startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
    finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
    environment: z.enum(['PRODUCTION', 'TESTING']),
    steps: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    failedStep: z
      .object({ name: z.string(), displayName: z.string() })
      .exactOptional()
      .openapi({ required: ['name', 'displayName'] }),
    stepNameToTest: z.string().exactOptional(),
    archivedAt: z.union([z.string(), z.null().nullable()]).exactOptional(),
    stepsCount: z.number().exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'projectId',
      'flowId',
      'failParentOnFailure',
      'flowVersionId',
      'status',
      'environment',
    ],
  })
  .openapi('FlowRunInput')

const AppConnectionInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    externalId: z.string(),
    displayName: z.string(),
    type: z.enum([
      'OAUTH2',
      'PLATFORM_OAUTH2',
      'CLOUD_OAUTH2',
      'SECRET_TEXT',
      'BASIC_AUTH',
      'CUSTOM_AUTH',
      'NO_AUTH',
    ]),
    pieceName: z.string(),
    projectIds: z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)),
    platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    scope: z.enum(['PROJECT', 'PLATFORM']),
    status: z.enum(['ACTIVE', 'MISSING', 'ERROR']),
    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    owner: z.union([UserInputSchema, z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    flowIds: z
      .union([z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)), z.null().nullable()])
      .exactOptional(),
    pieceVersion: z.string(),
    preSelectForNewProjects: z.boolean(),
    usingSecretManager: z.boolean(),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'externalId',
      'displayName',
      'type',
      'pieceName',
      'projectIds',
      'scope',
      'status',
      'pieceVersion',
      'preSelectForNewProjects',
      'usingSecretManager',
    ],
  })
  .openapi('AppConnectionInput')

const PieceInputSchema: z.ZodType<PieceInputType> = z
  .object({
    id: z.string().exactOptional(),
    name: z.string(),
    displayName: z.string(),
    logoUrl: z.string(),
    description: z.string(),
    authors: z.array(z.string()),
    platformId: z.string().exactOptional(),
    directoryPath: z.string().exactOptional(),
    auth: z
      .union([
        z.union([
          z
            .object({
              displayName: z.string(),
              description: z.string().exactOptional(),
              username: z
                .object({ displayName: z.string(), description: z.string().exactOptional() })
                .openapi({ required: ['displayName'] }),
              password: z
                .object({ displayName: z.string(), description: z.string().exactOptional() })
                .openapi({ required: ['displayName'] }),
              type: z.literal('BASIC_AUTH'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({ required: ['displayName', 'username', 'password', 'type', 'required'] }),
          z
            .object({
              displayName: z.string(),
              description: z.string().exactOptional(),
              props: z.record(
                z.string(),
                z.union([
                  z
                    .object({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('SHORT_TEXT'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .object({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('LONG_TEXT'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .object({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('NUMBER'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .object({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('CHECKBOX'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .object({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      options: z
                        .object({
                          disabled: z.boolean().exactOptional(),
                          placeholder: z.string().exactOptional(),
                          options: z.array(
                            z
                              .object({ label: z.string(), value: z.any() })
                              .openapi({ required: ['label', 'value'] }),
                          ),
                        })
                        .openapi({ required: ['options'] }),
                      type: z.literal('STATIC_DROPDOWN'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                ]),
              ),
              type: z.literal('CUSTOM_AUTH'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
          z
            .object({
              displayName: z.string(),
              description: z.string().exactOptional(),
              props: z
                .record(
                  z.string(),
                  z.union([
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('SHORT_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('SECRET_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        options: z
                          .object({
                            disabled: z.boolean().exactOptional(),
                            placeholder: z.string().exactOptional(),
                            options: z.array(
                              z
                                .object({ label: z.string(), value: z.any() })
                                .openapi({ required: ['label', 'value'] }),
                            ),
                          })
                          .openapi({ required: ['options'] }),
                        type: z.literal('STATIC_DROPDOWN'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                  ]),
                )
                .exactOptional(),
              authUrl: z.string(),
              tokenUrl: z.string(),
              scope: z.array(z.string()),
              prompt: z
                .union([
                  z.literal('none'),
                  z.literal('consent'),
                  z.literal('login'),
                  z.literal('omit'),
                ])
                .exactOptional(),
              pkce: z.boolean().exactOptional(),
              pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
              authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
              grantType: z
                .union([
                  z.enum(['authorization_code', 'client_credentials']),
                  z.literal('both_client_credentials_and_authorization_code'),
                ])
                .exactOptional(),
              extra: z.record(z.string(), z.string()).exactOptional(),
              type: z.literal('OAUTH2'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({
              required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
            }),
          z
            .object({
              displayName: z.string(),
              description: z.string().exactOptional(),
              type: z.literal('SECRET_TEXT'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({ required: ['displayName', 'type', 'required'] }),
        ]),
        z.array(
          z.union([
            z
              .object({
                displayName: z.string(),
                description: z.string().exactOptional(),
                username: z
                  .object({ displayName: z.string(), description: z.string().exactOptional() })
                  .openapi({ required: ['displayName'] }),
                password: z
                  .object({ displayName: z.string(), description: z.string().exactOptional() })
                  .openapi({ required: ['displayName'] }),
                type: z.literal('BASIC_AUTH'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({ required: ['displayName', 'username', 'password', 'type', 'required'] }),
            z
              .object({
                displayName: z.string(),
                description: z.string().exactOptional(),
                props: z.record(
                  z.string(),
                  z.union([
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('SHORT_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('LONG_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('NUMBER'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('CHECKBOX'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .object({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        options: z
                          .object({
                            disabled: z.boolean().exactOptional(),
                            placeholder: z.string().exactOptional(),
                            options: z.array(
                              z
                                .object({ label: z.string(), value: z.any() })
                                .openapi({ required: ['label', 'value'] }),
                            ),
                          })
                          .openapi({ required: ['options'] }),
                        type: z.literal('STATIC_DROPDOWN'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                  ]),
                ),
                type: z.literal('CUSTOM_AUTH'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
            z
              .object({
                displayName: z.string(),
                description: z.string().exactOptional(),
                props: z
                  .record(
                    z.string(),
                    z.union([
                      z
                        .object({
                          displayName: z.string(),
                          description: z.string().exactOptional(),
                          type: z.literal('SHORT_TEXT'),
                          required: z.boolean(),
                          defaultValue: z.any().exactOptional(),
                        })
                        .openapi({ required: ['displayName', 'type', 'required'] }),
                      z
                        .object({
                          displayName: z.string(),
                          description: z.string().exactOptional(),
                          type: z.literal('SECRET_TEXT'),
                          required: z.boolean(),
                          defaultValue: z.any().exactOptional(),
                        })
                        .openapi({ required: ['displayName', 'type', 'required'] }),
                      z
                        .object({
                          displayName: z.string(),
                          description: z.string().exactOptional(),
                          options: z
                            .object({
                              disabled: z.boolean().exactOptional(),
                              placeholder: z.string().exactOptional(),
                              options: z.array(
                                z
                                  .object({ label: z.string(), value: z.any() })
                                  .openapi({ required: ['label', 'value'] }),
                              ),
                            })
                            .openapi({ required: ['options'] }),
                          type: z.literal('STATIC_DROPDOWN'),
                          required: z.boolean(),
                          defaultValue: z.any().exactOptional(),
                        })
                        .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                    ]),
                  )
                  .exactOptional(),
                authUrl: z.string(),
                tokenUrl: z.string(),
                scope: z.array(z.string()),
                prompt: z
                  .union([
                    z.literal('none'),
                    z.literal('consent'),
                    z.literal('login'),
                    z.literal('omit'),
                  ])
                  .exactOptional(),
                pkce: z.boolean().exactOptional(),
                pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
                authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
                grantType: z
                  .union([
                    z.enum(['authorization_code', 'client_credentials']),
                    z.literal('both_client_credentials_and_authorization_code'),
                  ])
                  .exactOptional(),
                extra: z.record(z.string(), z.string()).exactOptional(),
                type: z.literal('OAUTH2'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
              }),
            z
              .object({
                displayName: z.string(),
                description: z.string().exactOptional(),
                type: z.literal('SECRET_TEXT'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({ required: ['displayName', 'type', 'required'] }),
          ]),
        ),
      ])
      .exactOptional(),
    version: z.string(),
    categories: z
      .array(
        z.enum([
          'ARTIFICIAL_INTELLIGENCE',
          'COMMUNICATION',
          'COMMERCE',
          'CORE',
          'UNIVERSAL_AI',
          'FLOW_CONTROL',
          'BUSINESS_INTELLIGENCE',
          'ACCOUNTING',
          'PRODUCTIVITY',
          'CONTENT_AND_FILES',
          'DEVELOPER_TOOLS',
          'CUSTOMER_SUPPORT',
          'FORMS_AND_SURVEYS',
          'HUMAN_RESOURCES',
          'PAYMENT_PROCESSING',
          'MARKETING',
          'SALES_AND_CRM',
        ]),
      )
      .exactOptional(),
    minimumSupportedRelease: z.string().exactOptional(),
    maximumSupportedRelease: z.string().exactOptional(),
    i18n: z.record(z.string(), z.record(z.string(), z.string())).exactOptional(),
    actions: z.record(
      z.string(),
      z
        .object({
          name: z.string(),
          displayName: z.string(),
          description: z.string(),
          props: z.record(
            z.string(),
            z.union([
              z.union([
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SHORT_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('LONG_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MARKDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('CHECKBOX'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .object({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .object({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .object({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .object({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .object({
                    refreshers: z.array(z.string()),
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DYNAMIC'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['refreshers', 'displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('NUMBER'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    properties: z.record(
                      z.string(),
                      z.union([
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .object({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .object({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                            refreshers: z.array(z.string()),
                          })
                          .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .object({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .object({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('FILE'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('DATE_TIME'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('ARRAY'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'properties', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('OBJECT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('JSON'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DATE_TIME'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('FILE'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('COLOR'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
              z.union([
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    username: z
                      .object({ displayName: z.string(), description: z.string().exactOptional() })
                      .openapi({ required: ['displayName'] }),
                    password: z
                      .object({ displayName: z.string(), description: z.string().exactOptional() })
                      .openapi({ required: ['displayName'] }),
                    type: z.literal('BASIC_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'username', 'password', 'type', 'required'],
                  }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z.record(
                      z.string(),
                      z.union([
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .object({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .object({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('CUSTOM_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z
                      .record(
                        z.string(),
                        z.union([
                          z
                            .object({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SHORT_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .object({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SECRET_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .object({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              options: z
                                .object({
                                  disabled: z.boolean().exactOptional(),
                                  placeholder: z.string().exactOptional(),
                                  options: z.array(
                                    z
                                      .object({ label: z.string(), value: z.any() })
                                      .openapi({ required: ['label', 'value'] }),
                                  ),
                                })
                                .openapi({ required: ['options'] }),
                              type: z.literal('STATIC_DROPDOWN'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        ]),
                      )
                      .exactOptional(),
                    authUrl: z.string(),
                    tokenUrl: z.string(),
                    scope: z.array(z.string()),
                    prompt: z
                      .union([
                        z.literal('none'),
                        z.literal('consent'),
                        z.literal('login'),
                        z.literal('omit'),
                      ])
                      .exactOptional(),
                    pkce: z.boolean().exactOptional(),
                    pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
                    authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
                    grantType: z
                      .union([
                        z.enum(['authorization_code', 'client_credentials']),
                        z.literal('both_client_credentials_and_authorization_code'),
                      ])
                      .exactOptional(),
                    extra: z.record(z.string(), z.string()).exactOptional(),
                    type: z.literal('OAUTH2'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
                  }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SECRET_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
            ]),
          ),
          requireAuth: z.boolean(),
          errorHandlingOptions: z
            .object({
              retryOnFailure: z
                .object({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
              continueOnFailure: z
                .object({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({ required: ['retryOnFailure', 'continueOnFailure'] }),
        })
        .openapi({ required: ['name', 'displayName', 'description', 'props', 'requireAuth'] }),
    ),
    triggers: z.record(
      z.string(),
      z
        .object({
          name: z.string(),
          displayName: z.string(),
          description: z.string(),
          props: z.record(
            z.string(),
            z.union([
              z.union([
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SHORT_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('LONG_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MARKDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('CHECKBOX'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .object({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .object({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .object({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .object({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .object({
                    refreshers: z.array(z.string()),
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DYNAMIC'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['refreshers', 'displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('NUMBER'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    properties: z.record(
                      z.string(),
                      z.union([
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .object({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .object({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                            refreshers: z.array(z.string()),
                          })
                          .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .object({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .object({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('FILE'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('DATE_TIME'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('ARRAY'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'properties', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('OBJECT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('JSON'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DATE_TIME'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('FILE'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('COLOR'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
              z.union([
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    username: z
                      .object({ displayName: z.string(), description: z.string().exactOptional() })
                      .openapi({ required: ['displayName'] }),
                    password: z
                      .object({ displayName: z.string(), description: z.string().exactOptional() })
                      .openapi({ required: ['displayName'] }),
                    type: z.literal('BASIC_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'username', 'password', 'type', 'required'],
                  }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z.record(
                      z.string(),
                      z.union([
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .object({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .object({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .object({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('CUSTOM_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z
                      .record(
                        z.string(),
                        z.union([
                          z
                            .object({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SHORT_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .object({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SECRET_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .object({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              options: z
                                .object({
                                  disabled: z.boolean().exactOptional(),
                                  placeholder: z.string().exactOptional(),
                                  options: z.array(
                                    z
                                      .object({ label: z.string(), value: z.any() })
                                      .openapi({ required: ['label', 'value'] }),
                                  ),
                                })
                                .openapi({ required: ['options'] }),
                              type: z.literal('STATIC_DROPDOWN'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        ]),
                      )
                      .exactOptional(),
                    authUrl: z.string(),
                    tokenUrl: z.string(),
                    scope: z.array(z.string()),
                    prompt: z
                      .union([
                        z.literal('none'),
                        z.literal('consent'),
                        z.literal('login'),
                        z.literal('omit'),
                      ])
                      .exactOptional(),
                    pkce: z.boolean().exactOptional(),
                    pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
                    authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
                    grantType: z
                      .union([
                        z.enum(['authorization_code', 'client_credentials']),
                        z.literal('both_client_credentials_and_authorization_code'),
                      ])
                      .exactOptional(),
                    extra: z.record(z.string(), z.string()).exactOptional(),
                    type: z.literal('OAUTH2'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
                  }),
                z
                  .object({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SECRET_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
            ]),
          ),
          errorHandlingOptions: z
            .object({
              retryOnFailure: z
                .object({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
              continueOnFailure: z
                .object({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({ required: ['retryOnFailure', 'continueOnFailure'] }),
          type: z.enum(['POLLING', 'WEBHOOK', 'APP_WEBHOOK', 'MANUAL']),
          sampleData: z.any(),
          handshakeConfiguration: z.any().exactOptional(),
          renewConfiguration: z
            .union([
              z
                .object({ strategy: z.literal('CRON'), cronExpression: z.string() })
                .openapi({ required: ['strategy', 'cronExpression'] }),
              z.object({ strategy: z.literal('NONE') }).openapi({ required: ['strategy'] }),
            ])
            .exactOptional(),
          testStrategy: z.enum(['SIMULATION', 'TEST_FUNCTION']),
        })
        .openapi({
          required: [
            'name',
            'displayName',
            'description',
            'props',
            'type',
            'sampleData',
            'testStrategy',
          ],
        }),
    ),
  })
  .openapi({
    required: [
      'name',
      'displayName',
      'logoUrl',
      'description',
      'authors',
      'version',
      'actions',
      'triggers',
    ],
  })
  .openapi('PieceInput')

const GitRepoInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    remoteUrl: z.string(),
    branch: z.string(),
    branchType: z.enum(['PRODUCTION', 'DEVELOPMENT']),
    projectId: z.string(),
    slug: z.string(),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'remoteUrl',
      'branch',
      'branchType',
      'projectId',
      'slug',
    ],
  })
  .openapi('GitRepoInput')

const ProjectReleaseInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    name: z.string(),
    description: z.union([z.string(), z.null().nullable()]).exactOptional(),
    importedBy: z.union([z.string(), z.null().nullable()]).exactOptional(),
    fileId: z.string(),
    type: z.enum(['GIT', 'PROJECT', 'ROLLBACK']),
    importedByUser: UserInputSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'projectId', 'name', 'fileId', 'type'] })
  .openapi('ProjectReleaseInput')

const EmbeddingInputSchema = z
  .object({ allowedEmbedOrigins: z.array(z.url().max(300)).min(1).max(50) })
  .openapi({ required: ['allowedEmbedOrigins'] })
  .openapi('EmbeddingInput')

const FlowCreatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.created'),
    data: z
      .strictObject({
        flow: z
          .strictObject({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        project: z
          .strictObject({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowCreated')

const FlowUpdatedSchema: z.ZodType<FlowUpdatedType> = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.updated'),
    data: z
      .strictObject({
        flow: z
          .strictObject({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        request: z.xor([
          z
            .strictObject({
              type: z.literal('MOVE_ACTION'),
              request: z
                .strictObject({
                  name: z.string(),
                  newParentStep: z.string(),
                  stepLocationRelativeToNewParent: z
                    .enum([
                      'AFTER',
                      'INSIDE_LOOP',
                      'INSIDE_BATCH',
                      'INSIDE_BRANCH',
                      'INSIDE_ON_SUCCESS_BRANCH',
                      'INSIDE_ON_FAILURE_BRANCH',
                    ])
                    .exactOptional(),
                  branchIndex: z.number().exactOptional(),
                })
                .openapi({ required: ['name', 'newParentStep'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Move Action' }),
          z
            .strictObject({
              type: z.literal('CHANGE_STATUS'),
              request: z
                .strictObject({ status: z.enum(['ENABLED', 'DISABLED']) })
                .openapi({ required: ['status'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Change Status' }),
          z
            .strictObject({
              type: z.literal('LOCK_AND_PUBLISH'),
              request: z
                .strictObject({ status: z.enum(['ENABLED', 'DISABLED']).exactOptional() })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Lock and Publish' }),
          z
            .strictObject({
              type: z.literal('USE_AS_DRAFT'),
              request: z
                .strictObject({ versionId: z.string() })
                .openapi({ required: ['versionId'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Copy as Draft' }),
          z
            .strictObject({ type: z.literal('LOCK_FLOW'), request: z.strictObject({}) })
            .openapi({ required: ['type', 'request'], description: 'Lock Flow' }),
          z
            .strictObject({
              type: z.literal('IMPORT_FLOW'),
              request: z
                .strictObject({
                  displayName: z.string(),
                  trigger: z.union([
                    z
                      .strictObject({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('PIECE_TRIGGER'),
                        settings: z
                          .strictObject({
                            sampleData: z
                              .strictObject({
                                sampleDataFileId: z.string().exactOptional(),
                                sampleDataInputFileId: z.string().exactOptional(),
                                lastTestDate: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            propertySettings: z.record(
                              z.string(),
                              z
                                .strictObject({
                                  type: z.enum(['MANUAL', 'DYNAMIC']),
                                  schema: z.any().exactOptional(),
                                })
                                .openapi({ required: ['type'] }),
                            ),
                            customLogoUrl: z.string().exactOptional(),
                            pieceName: z.string(),
                            pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                            triggerName: z.string().exactOptional(),
                            input: z.record(z.string(), z.any()),
                          })
                          .openapi({
                            required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                          }),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                    z
                      .strictObject({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('EMPTY'),
                        settings: z.any(),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                  ]),
                  schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  notes: z
                    .union([
                      z.array(
                        z
                          .strictObject({
                            id: z.string(),
                            content: z.string(),
                            ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                            color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                            position: z
                              .strictObject({ x: z.number(), y: z.number() })
                              .openapi({ required: ['x', 'y'] }),
                            size: z
                              .strictObject({ width: z.number(), height: z.number() })
                              .openapi({ required: ['width', 'height'] }),
                            createdAt: z.string(),
                            updatedAt: z.string(),
                          })
                          .openapi({
                            required: [
                              'id',
                              'content',
                              'color',
                              'position',
                              'size',
                              'createdAt',
                              'updatedAt',
                            ],
                          }),
                      ),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                })
                .openapi({ required: ['displayName', 'trigger'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Import Flow' }),
          z
            .strictObject({
              type: z.literal('CHANGE_NAME'),
              request: z
                .strictObject({ displayName: z.string() })
                .openapi({ required: ['displayName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Change Name' }),
          z
            .strictObject({
              type: z.literal('DELETE_ACTION'),
              request: z
                .strictObject({ names: z.array(z.string()) })
                .openapi({ required: ['names'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Delete Action' }),
          z
            .strictObject({
              type: z.literal('UPDATE_ACTION'),
              request: z.union([
                (() => {
                  const Schema = z
                    .strictObject({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('CODE'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .strictObject({
                          settings: z
                            .strictObject({
                              customLogoUrl: z.string().exactOptional(),
                              sourceCode: z
                                .strictObject({ packageJson: z.string(), code: z.string() })
                                .openapi({ required: ['packageJson', 'code'] }),
                              input: z.record(z.string(), z.any()),
                              errorHandlingOptions: z
                                .strictObject({
                                  continueOnFailure: z
                                    .strictObject({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  retryOnFailure: z
                                    .strictObject({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              useDeno: z.boolean().exactOptional(),
                            })
                            .openapi({ required: ['sourceCode', 'input'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    )
                  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                    ;((ctx) => {
                      const o = ctx.value
                      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                      for (const k of Object.keys(o)) {
                        if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                      for (const k of Object.keys(o)) {
                        if (!['settings'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                    })(ctx)
                    return val
                  }, Schema)
                })(),
                (() => {
                  const Schema = z
                    .strictObject({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('LOOP_ON_ITEMS'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .strictObject({
                          settings: z
                            .strictObject({
                              customLogoUrl: z.string().exactOptional(),
                              items: z.string(),
                            })
                            .openapi({ required: ['items'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    )
                  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                    ;((ctx) => {
                      const o = ctx.value
                      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                      for (const k of Object.keys(o)) {
                        if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                      for (const k of Object.keys(o)) {
                        if (!['settings'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                    })(ctx)
                    return val
                  }, Schema)
                })(),
                (() => {
                  const Schema = z
                    .strictObject({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('PROCESS_IN_BATCHES'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .strictObject({
                          settings: z
                            .strictObject({
                              customLogoUrl: z.string().exactOptional(),
                              items: z.string(),
                              batchSize: z.number().default(10),
                              timeoutSeconds: z.number().exactOptional(),
                              errorHandlingOptions: z
                                .strictObject({
                                  continueOnFailure: z
                                    .strictObject({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  retryOnFailure: z
                                    .strictObject({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({ required: ['items', 'batchSize'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    )
                  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                    ;((ctx) => {
                      const o = ctx.value
                      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                      for (const k of Object.keys(o)) {
                        if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                      for (const k of Object.keys(o)) {
                        if (!['settings'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                    })(ctx)
                    return val
                  }, Schema)
                })(),
                (() => {
                  const Schema = z
                    .strictObject({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('PIECE'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .strictObject({
                          settings: z
                            .strictObject({
                              customLogoUrl: z.string().exactOptional(),
                              propertySettings: z.record(
                                z.string(),
                                z
                                  .strictObject({
                                    type: z.enum(['MANUAL', 'DYNAMIC']),
                                    schema: z.any().exactOptional(),
                                  })
                                  .openapi({ required: ['type'] }),
                              ),
                              pieceName: z.string(),
                              pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                              actionName: z.string().exactOptional(),
                              input: z.record(z.string(), z.any()),
                              errorHandlingOptions: z
                                .strictObject({
                                  continueOnFailure: z
                                    .strictObject({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  retryOnFailure: z
                                    .strictObject({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({
                              required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                            }),
                        })
                        .openapi({ required: ['settings'] }),
                    )
                  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                    ;((ctx) => {
                      const o = ctx.value
                      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                      for (const k of Object.keys(o)) {
                        if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                      for (const k of Object.keys(o)) {
                        if (!['settings'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                    })(ctx)
                    return val
                  }, Schema)
                })(),
                (() => {
                  const Schema = z
                    .strictObject({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('ROUTER'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .strictObject({
                          settings: z
                            .strictObject({
                              customLogoUrl: z.string().exactOptional(),
                              branches: z.array(
                                z.union([
                                  z
                                    .strictObject({
                                      conditions: z.array(
                                        z.array(
                                          z.union([
                                            z
                                              .strictObject({
                                                firstValue: z.string(),
                                                secondValue: z.string(),
                                                caseSensitive: z.boolean().exactOptional(),
                                                operator: z
                                                  .union([
                                                    z.literal('TEXT_CONTAINS'),
                                                    z.literal('TEXT_DOES_NOT_CONTAIN'),
                                                    z.literal('TEXT_EXACTLY_MATCHES'),
                                                    z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                                    z.literal('TEXT_START_WITH'),
                                                    z.literal('TEXT_DOES_NOT_START_WITH'),
                                                    z.literal('TEXT_ENDS_WITH'),
                                                    z.literal('TEXT_DOES_NOT_END_WITH'),
                                                    z.literal('LIST_CONTAINS'),
                                                    z.literal('LIST_DOES_NOT_CONTAIN'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue', 'secondValue'] }),
                                            z
                                              .strictObject({
                                                firstValue: z.string(),
                                                secondValue: z.string(),
                                                operator: z
                                                  .union([
                                                    z.literal('NUMBER_IS_GREATER_THAN'),
                                                    z.literal('NUMBER_IS_LESS_THAN'),
                                                    z.literal('NUMBER_IS_EQUAL_TO'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue', 'secondValue'] }),
                                            z
                                              .strictObject({
                                                firstValue: z.string(),
                                                secondValue: z.string(),
                                                operator: z
                                                  .union([
                                                    z.literal('DATE_IS_BEFORE'),
                                                    z.literal('DATE_IS_EQUAL'),
                                                    z.literal('DATE_IS_AFTER'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue', 'secondValue'] }),
                                            z
                                              .strictObject({
                                                firstValue: z.string(),
                                                operator: z
                                                  .union([
                                                    z.literal('EXISTS'),
                                                    z.literal('DOES_NOT_EXIST'),
                                                    z.literal('BOOLEAN_IS_TRUE'),
                                                    z.literal('BOOLEAN_IS_FALSE'),
                                                    z.literal('LIST_IS_EMPTY'),
                                                    z.literal('LIST_IS_NOT_EMPTY'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue'] }),
                                          ]),
                                        ),
                                      ),
                                      branchType: z.literal('CONDITION'),
                                      branchName: z.string(),
                                    })
                                    .openapi({
                                      required: ['conditions', 'branchType', 'branchName'],
                                    }),
                                  z
                                    .strictObject({
                                      branchType: z.literal('FALLBACK'),
                                      branchName: z.string(),
                                    })
                                    .openapi({ required: ['branchType', 'branchName'] }),
                                ]),
                              ),
                              executionType: z.enum(['EXECUTE_ALL_MATCH', 'EXECUTE_FIRST_MATCH']),
                            })
                            .openapi({ required: ['branches', 'executionType'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    )
                  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                    ;((ctx) => {
                      const o = ctx.value
                      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                      for (const k of Object.keys(o)) {
                        if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                      for (const k of Object.keys(o)) {
                        if (!['settings'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                    })(ctx)
                    return val
                  }, Schema)
                })(),
                (() => {
                  const Schema = z
                    .strictObject({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('AI_ROUTER'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .strictObject({
                          settings: z
                            .strictObject({
                              customLogoUrl: z.string().exactOptional(),
                              text: z.string(),
                              question: z.string(),
                              branches: z.array(
                                z.union([
                                  z
                                    .strictObject({
                                      branchType: z.literal('CONDITION'),
                                      branchName: z.string(),
                                      description: z.string().exactOptional(),
                                    })
                                    .openapi({ required: ['branchType', 'branchName'] }),
                                  z
                                    .strictObject({
                                      branchType: z.literal('FALLBACK'),
                                      branchName: z.string(),
                                      description: z.string().exactOptional(),
                                    })
                                    .openapi({ required: ['branchType', 'branchName'] }),
                                ]),
                              ),
                              matchMode: z.enum(['BEST_MATCH', 'ALL_MATCHES']).exactOptional(),
                              minConfidence: z.number().min(0).max(1).exactOptional(),
                              model: z.string().exactOptional(),
                            })
                            .openapi({ required: ['text', 'question', 'branches'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    )
                  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                    ;((ctx) => {
                      const o = ctx.value
                      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                      for (const k of Object.keys(o)) {
                        if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                      for (const k of Object.keys(o)) {
                        if (!['settings'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                    })(ctx)
                    return val
                  }, Schema)
                })(),
              ]),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Action' }),
          z
            .strictObject({
              type: z.literal('ADD_ACTION'),
              request: z
                .strictObject({
                  parentStep: z.string(),
                  stepLocationRelativeToParent: z
                    .enum([
                      'AFTER',
                      'INSIDE_LOOP',
                      'INSIDE_BATCH',
                      'INSIDE_BRANCH',
                      'INSIDE_ON_SUCCESS_BRANCH',
                      'INSIDE_ON_FAILURE_BRANCH',
                    ])
                    .exactOptional(),
                  branchIndex: z.number().exactOptional(),
                  action: z.union([
                    (() => {
                      const Schema = z
                        .strictObject({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('CODE'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .strictObject({
                              settings: z
                                .strictObject({
                                  customLogoUrl: z.string().exactOptional(),
                                  sourceCode: z
                                    .strictObject({ packageJson: z.string(), code: z.string() })
                                    .openapi({ required: ['packageJson', 'code'] }),
                                  input: z.record(z.string(), z.any()),
                                  errorHandlingOptions: z
                                    .strictObject({
                                      continueOnFailure: z
                                        .strictObject({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      retryOnFailure: z
                                        .strictObject({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  useDeno: z.boolean().exactOptional(),
                                })
                                .openapi({ required: ['sourceCode', 'input'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        )
                      return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                        ;((ctx) => {
                          const o = ctx.value
                          if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                          for (const k of Object.keys(o)) {
                            if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                          for (const k of Object.keys(o)) {
                            if (!['settings'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                        })(ctx)
                        return val
                      }, Schema)
                    })(),
                    (() => {
                      const Schema = z
                        .strictObject({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('LOOP_ON_ITEMS'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .strictObject({
                              settings: z
                                .strictObject({
                                  customLogoUrl: z.string().exactOptional(),
                                  items: z.string(),
                                })
                                .openapi({ required: ['items'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        )
                      return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                        ;((ctx) => {
                          const o = ctx.value
                          if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                          for (const k of Object.keys(o)) {
                            if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                          for (const k of Object.keys(o)) {
                            if (!['settings'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                        })(ctx)
                        return val
                      }, Schema)
                    })(),
                    (() => {
                      const Schema = z
                        .strictObject({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('PROCESS_IN_BATCHES'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .strictObject({
                              settings: z
                                .strictObject({
                                  customLogoUrl: z.string().exactOptional(),
                                  items: z.string(),
                                  batchSize: z.number().default(10),
                                  timeoutSeconds: z.number().exactOptional(),
                                  errorHandlingOptions: z
                                    .strictObject({
                                      continueOnFailure: z
                                        .strictObject({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      retryOnFailure: z
                                        .strictObject({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({ required: ['items', 'batchSize'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        )
                      return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                        ;((ctx) => {
                          const o = ctx.value
                          if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                          for (const k of Object.keys(o)) {
                            if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                          for (const k of Object.keys(o)) {
                            if (!['settings'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                        })(ctx)
                        return val
                      }, Schema)
                    })(),
                    (() => {
                      const Schema = z
                        .strictObject({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('PIECE'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .strictObject({
                              settings: z
                                .strictObject({
                                  customLogoUrl: z.string().exactOptional(),
                                  propertySettings: z.record(
                                    z.string(),
                                    z
                                      .strictObject({
                                        type: z.enum(['MANUAL', 'DYNAMIC']),
                                        schema: z.any().exactOptional(),
                                      })
                                      .openapi({ required: ['type'] }),
                                  ),
                                  pieceName: z.string(),
                                  pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                  actionName: z.string().exactOptional(),
                                  input: z.record(z.string(), z.any()),
                                  errorHandlingOptions: z
                                    .strictObject({
                                      continueOnFailure: z
                                        .strictObject({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      retryOnFailure: z
                                        .strictObject({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({
                                  required: [
                                    'propertySettings',
                                    'pieceName',
                                    'pieceVersion',
                                    'input',
                                  ],
                                }),
                            })
                            .openapi({ required: ['settings'] }),
                        )
                      return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                        ;((ctx) => {
                          const o = ctx.value
                          if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                          for (const k of Object.keys(o)) {
                            if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                          for (const k of Object.keys(o)) {
                            if (!['settings'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                        })(ctx)
                        return val
                      }, Schema)
                    })(),
                    (() => {
                      const Schema = z
                        .strictObject({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('ROUTER'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .strictObject({
                              settings: z
                                .strictObject({
                                  customLogoUrl: z.string().exactOptional(),
                                  branches: z.array(
                                    z.union([
                                      z
                                        .strictObject({
                                          conditions: z.array(
                                            z.array(
                                              z.union([
                                                z
                                                  .strictObject({
                                                    firstValue: z.string(),
                                                    secondValue: z.string(),
                                                    caseSensitive: z.boolean().exactOptional(),
                                                    operator: z
                                                      .union([
                                                        z.literal('TEXT_CONTAINS'),
                                                        z.literal('TEXT_DOES_NOT_CONTAIN'),
                                                        z.literal('TEXT_EXACTLY_MATCHES'),
                                                        z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                                        z.literal('TEXT_START_WITH'),
                                                        z.literal('TEXT_DOES_NOT_START_WITH'),
                                                        z.literal('TEXT_ENDS_WITH'),
                                                        z.literal('TEXT_DOES_NOT_END_WITH'),
                                                        z.literal('LIST_CONTAINS'),
                                                        z.literal('LIST_DOES_NOT_CONTAIN'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({
                                                    required: ['firstValue', 'secondValue'],
                                                  }),
                                                z
                                                  .strictObject({
                                                    firstValue: z.string(),
                                                    secondValue: z.string(),
                                                    operator: z
                                                      .union([
                                                        z.literal('NUMBER_IS_GREATER_THAN'),
                                                        z.literal('NUMBER_IS_LESS_THAN'),
                                                        z.literal('NUMBER_IS_EQUAL_TO'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({
                                                    required: ['firstValue', 'secondValue'],
                                                  }),
                                                z
                                                  .strictObject({
                                                    firstValue: z.string(),
                                                    secondValue: z.string(),
                                                    operator: z
                                                      .union([
                                                        z.literal('DATE_IS_BEFORE'),
                                                        z.literal('DATE_IS_EQUAL'),
                                                        z.literal('DATE_IS_AFTER'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({
                                                    required: ['firstValue', 'secondValue'],
                                                  }),
                                                z
                                                  .strictObject({
                                                    firstValue: z.string(),
                                                    operator: z
                                                      .union([
                                                        z.literal('EXISTS'),
                                                        z.literal('DOES_NOT_EXIST'),
                                                        z.literal('BOOLEAN_IS_TRUE'),
                                                        z.literal('BOOLEAN_IS_FALSE'),
                                                        z.literal('LIST_IS_EMPTY'),
                                                        z.literal('LIST_IS_NOT_EMPTY'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({ required: ['firstValue'] }),
                                              ]),
                                            ),
                                          ),
                                          branchType: z.literal('CONDITION'),
                                          branchName: z.string(),
                                        })
                                        .openapi({
                                          required: ['conditions', 'branchType', 'branchName'],
                                        }),
                                      z
                                        .strictObject({
                                          branchType: z.literal('FALLBACK'),
                                          branchName: z.string(),
                                        })
                                        .openapi({ required: ['branchType', 'branchName'] }),
                                    ]),
                                  ),
                                  executionType: z.enum([
                                    'EXECUTE_ALL_MATCH',
                                    'EXECUTE_FIRST_MATCH',
                                  ]),
                                })
                                .openapi({ required: ['branches', 'executionType'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        )
                      return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                        ;((ctx) => {
                          const o = ctx.value
                          if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                          for (const k of Object.keys(o)) {
                            if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                          for (const k of Object.keys(o)) {
                            if (!['settings'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                        })(ctx)
                        return val
                      }, Schema)
                    })(),
                    (() => {
                      const Schema = z
                        .strictObject({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('AI_ROUTER'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .strictObject({
                              settings: z
                                .strictObject({
                                  customLogoUrl: z.string().exactOptional(),
                                  text: z.string(),
                                  question: z.string(),
                                  branches: z.array(
                                    z.union([
                                      z
                                        .strictObject({
                                          branchType: z.literal('CONDITION'),
                                          branchName: z.string(),
                                          description: z.string().exactOptional(),
                                        })
                                        .openapi({ required: ['branchType', 'branchName'] }),
                                      z
                                        .strictObject({
                                          branchType: z.literal('FALLBACK'),
                                          branchName: z.string(),
                                          description: z.string().exactOptional(),
                                        })
                                        .openapi({ required: ['branchType', 'branchName'] }),
                                    ]),
                                  ),
                                  matchMode: z.enum(['BEST_MATCH', 'ALL_MATCHES']).exactOptional(),
                                  minConfidence: z.number().min(0).max(1).exactOptional(),
                                  model: z.string().exactOptional(),
                                })
                                .openapi({ required: ['text', 'question', 'branches'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        )
                      return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                        ;((ctx) => {
                          const o = ctx.value
                          if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                          for (const k of Object.keys(o)) {
                            if (!['name', 'valid', 'displayName', 'skip', 'type'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                          for (const k of Object.keys(o)) {
                            if (!['settings'].includes(k)) {
                              ctx.issues.push({ code: 'custom', path: [k], input: o })
                            }
                          }
                        })(ctx)
                        return val
                      }, Schema)
                    })(),
                  ]),
                })
                .openapi({ required: ['parentStep', 'action'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Add Action' }),
          z
            .strictObject({
              type: z.literal('UPDATE_TRIGGER'),
              request: z.union([
                z
                  .strictObject({
                    name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                    valid: z.boolean(),
                    displayName: z.string(),
                    nextAction: z.any().exactOptional(),
                    type: z.literal('EMPTY'),
                    settings: z.any(),
                  })
                  .openapi({ required: ['name', 'valid', 'displayName', 'type', 'settings'] }),
                (() => {
                  const Schema = z
                    .strictObject({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      nextAction: z.any().exactOptional(),
                      type: z.literal('PIECE_TRIGGER'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .strictObject({
                          settings: z
                            .strictObject({
                              propertySettings: z.record(
                                z.string(),
                                z
                                  .strictObject({
                                    type: z.enum(['MANUAL', 'DYNAMIC']),
                                    schema: z.any().exactOptional(),
                                  })
                                  .openapi({ required: ['type'] }),
                              ),
                              customLogoUrl: z.string().exactOptional(),
                              pieceName: z.string(),
                              pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                              triggerName: z.string().exactOptional(),
                              input: z.record(z.string(), z.any()),
                            })
                            .openapi({
                              required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                            }),
                        })
                        .openapi({ required: ['settings'] }),
                    )
                  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
                    ;((ctx) => {
                      const o = ctx.value
                      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
                      for (const k of Object.keys(o)) {
                        if (!['name', 'valid', 'displayName', 'nextAction', 'type'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                      for (const k of Object.keys(o)) {
                        if (!['settings'].includes(k)) {
                          ctx.issues.push({ code: 'custom', path: [k], input: o })
                        }
                      }
                    })(ctx)
                    return val
                  }, Schema)
                })(),
              ]),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Trigger' }),
          z
            .strictObject({
              type: z.literal('CHANGE_FOLDER'),
              request: z
                .strictObject({
                  folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Change Folder' }),
          z
            .strictObject({
              type: z.literal('DUPLICATE_ACTION'),
              request: z.strictObject({ stepName: z.string() }).openapi({ required: ['stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Duplicate Action' }),
          z
            .strictObject({
              type: z.literal('DELETE_BRANCH'),
              request: z
                .strictObject({ branchIndex: z.number(), stepName: z.string() })
                .openapi({ required: ['branchIndex', 'stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Delete Branch' }),
          z
            .strictObject({
              type: z.literal('ADD_BRANCH'),
              request: z
                .strictObject({
                  branchIndex: z.number(),
                  stepName: z.string(),
                  conditions: z
                    .array(
                      z.array(
                        z.union([
                          z
                            .strictObject({
                              firstValue: z.string(),
                              secondValue: z.string(),
                              caseSensitive: z.boolean().exactOptional(),
                              operator: z
                                .union([
                                  z.literal('TEXT_CONTAINS'),
                                  z.literal('TEXT_DOES_NOT_CONTAIN'),
                                  z.literal('TEXT_EXACTLY_MATCHES'),
                                  z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                  z.literal('TEXT_START_WITH'),
                                  z.literal('TEXT_DOES_NOT_START_WITH'),
                                  z.literal('TEXT_ENDS_WITH'),
                                  z.literal('TEXT_DOES_NOT_END_WITH'),
                                  z.literal('LIST_CONTAINS'),
                                  z.literal('LIST_DOES_NOT_CONTAIN'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue', 'secondValue'] }),
                          z
                            .strictObject({
                              firstValue: z.string(),
                              secondValue: z.string(),
                              operator: z
                                .union([
                                  z.literal('NUMBER_IS_GREATER_THAN'),
                                  z.literal('NUMBER_IS_LESS_THAN'),
                                  z.literal('NUMBER_IS_EQUAL_TO'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue', 'secondValue'] }),
                          z
                            .strictObject({
                              firstValue: z.string(),
                              secondValue: z.string(),
                              operator: z
                                .union([
                                  z.literal('DATE_IS_BEFORE'),
                                  z.literal('DATE_IS_EQUAL'),
                                  z.literal('DATE_IS_AFTER'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue', 'secondValue'] }),
                          z
                            .strictObject({
                              firstValue: z.string(),
                              operator: z
                                .union([
                                  z.literal('EXISTS'),
                                  z.literal('DOES_NOT_EXIST'),
                                  z.literal('BOOLEAN_IS_TRUE'),
                                  z.literal('BOOLEAN_IS_FALSE'),
                                  z.literal('LIST_IS_EMPTY'),
                                  z.literal('LIST_IS_NOT_EMPTY'),
                                ])
                                .exactOptional(),
                            })
                            .openapi({ required: ['firstValue'] }),
                        ]),
                      ),
                    )
                    .exactOptional(),
                  description: z.string().exactOptional(),
                  branchName: z.string(),
                })
                .openapi({ required: ['branchIndex', 'stepName', 'branchName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Add Branch' }),
          z
            .strictObject({
              type: z.literal('DUPLICATE_BRANCH'),
              request: z
                .strictObject({ branchIndex: z.number(), stepName: z.string() })
                .openapi({ required: ['branchIndex', 'stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Duplicate Branch' }),
          z
            .strictObject({
              type: z.literal('SET_SKIP_ACTION'),
              request: z
                .strictObject({ names: z.array(z.string()), skip: z.boolean() })
                .openapi({ required: ['names', 'skip'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Skip Action' }),
          z
            .strictObject({
              type: z.literal('UPDATE_METADATA'),
              request: z
                .strictObject({
                  metadata: z
                    .union([z.record(z.string(), z.any()), z.null().nullable()])
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Metadata' }),
          z
            .strictObject({
              type: z.literal('MOVE_BRANCH'),
              request: z
                .strictObject({
                  sourceBranchIndex: z.number(),
                  targetBranchIndex: z.number(),
                  stepName: z.string(),
                })
                .openapi({ required: ['sourceBranchIndex', 'targetBranchIndex', 'stepName'] }),
            })
            .openapi({ required: ['type', 'request'] }),
          z
            .strictObject({
              type: z.literal('SAVE_SAMPLE_DATA'),
              request: z
                .strictObject({
                  stepName: z.string(),
                  payload: z.any(),
                  type: z.enum(['INPUT', 'OUTPUT']),
                })
                .openapi({ required: ['stepName', 'payload', 'type'] }),
            })
            .openapi({ required: ['type', 'request'] }),
          z
            .strictObject({
              type: z.literal('UPDATE_MINUTES_SAVED'),
              request: z
                .strictObject({
                  timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Minutes Saved' }),
          z
            .strictObject({
              type: z.literal('UPDATE_OWNER'),
              request: z.strictObject({ ownerId: z.string() }).openapi({ required: ['ownerId'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Owner' }),
          z
            .strictObject({
              type: z.literal('UPDATE_NOTE'),
              request: z
                .strictObject({
                  id: z.string(),
                  content: z.string(),
                  ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                  position: z
                    .strictObject({ x: z.number(), y: z.number() })
                    .openapi({ required: ['x', 'y'] }),
                  size: z
                    .strictObject({ width: z.number(), height: z.number() })
                    .openapi({ required: ['width', 'height'] }),
                })
                .openapi({ required: ['id', 'content', 'color', 'position', 'size'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Note' }),
          z
            .strictObject({
              type: z.literal('DELETE_NOTE'),
              request: z.strictObject({ id: z.string() }).openapi({ required: ['id'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Delete Note' }),
          z
            .strictObject({
              type: z.literal('ADD_NOTE'),
              request: z
                .strictObject({
                  id: z.string(),
                  content: z.string(),
                  color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                  position: z
                    .strictObject({ x: z.number(), y: z.number() })
                    .openapi({ required: ['x', 'y'] }),
                  size: z
                    .strictObject({ width: z.number(), height: z.number() })
                    .openapi({ required: ['width', 'height'] }),
                })
                .openapi({ required: ['id', 'content', 'color', 'position', 'size'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Add Note' }),
          z
            .strictObject({
              type: z.literal('UPDATE_SAMPLE_DATA_INFO'),
              request: z
                .strictObject({
                  stepName: z.string(),
                  sampleDataSettings: z
                    .union([
                      z
                        .strictObject({
                          sampleDataFileId: z.string().exactOptional(),
                          sampleDataInputFileId: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                })
                .openapi({ required: ['stepName'] }),
            })
            .openapi({ required: ['type', 'request'], description: 'Update Sample Data Info' }),
        ]),
        reason: z.string().exactOptional(),
        project: z
          .strictObject({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion', 'request'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowUpdated')

const FlowDeletedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.deleted'),
    data: z
      .strictObject({
        flow: z
          .strictObject({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .strictObject({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowDeleted')

const FlowPublishedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.published'),
    data: z
      .strictObject({
        flow: z
          .strictObject({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .strictObject({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowPublished')

const FlowActivatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.activated'),
    data: z
      .strictObject({
        flow: z
          .strictObject({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .strictObject({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowActivated')

const FlowDeactivatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.deactivated'),
    data: z
      .strictObject({
        flow: z
          .strictObject({
            id: z.string(),
            externalId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'externalId', 'created', 'updated'] }),
        flowVersion: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            flowId: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'flowId', 'created', 'updated'] }),
        project: z
          .strictObject({
            displayName: z.string(),
            externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flow', 'flowVersion'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowDeactivated')

const ConnectionUpsertedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('connection.upserted'),
    data: z
      .strictObject({
        connection: z
          .strictObject({
            displayName: z.string(),
            externalId: z.string(),
            pieceName: z.string(),
            status: z.string(),
            type: z.string(),
            id: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({
            required: [
              'displayName',
              'externalId',
              'pieceName',
              'status',
              'type',
              'id',
              'created',
              'updated',
            ],
          }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['connection'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ConnectionUpserted')

const ConnectionDeletedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('connection.deleted'),
    data: z
      .strictObject({
        connection: z
          .strictObject({
            displayName: z.string(),
            externalId: z.string(),
            pieceName: z.string(),
            status: z.string(),
            type: z.string(),
            id: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({
            required: [
              'displayName',
              'externalId',
              'pieceName',
              'status',
              'type',
              'id',
              'created',
              'updated',
            ],
          }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['connection'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ConnectionDeleted')

const FolderCreatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('folder.created'),
    data: z
      .strictObject({
        folder: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'created', 'updated'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['folder'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FolderCreated')

const FolderUpdatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('folder.updated'),
    data: z
      .strictObject({
        folder: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'created', 'updated'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['folder'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FolderUpdated')

const FolderDeletedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('folder.deleted'),
    data: z
      .strictObject({
        folder: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'displayName', 'created', 'updated'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['folder'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FolderDeleted')

const FlowRunStartedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.started'),
    data: z
      .strictObject({
        flowRun: z
          .strictObject({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunStarted')

const FlowRunFinishedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.finished'),
    data: z
      .strictObject({
        flowRun: z
          .strictObject({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunFinished')

const FlowRunRetriedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.retried'),
    data: z
      .strictObject({
        flowRun: z
          .strictObject({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunRetried')

const UserSignedUpSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.signed.up'),
    data: z
      .strictObject({
        source: z
          .union([z.literal('credentials'), z.literal('sso'), z.literal('managed')])
          .exactOptional(),
        method: z.enum(['EMAIL', 'GOOGLE', 'SAML', 'JWT']).exactOptional(),
        user: z
          .strictObject({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserSignedUp')

const UserSignedInSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.signed.in'),
    data: z
      .strictObject({
        user: z
          .strictObject({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
        method: z.enum(['EMAIL', 'GOOGLE', 'SAML', 'JWT']).exactOptional(),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserSignedIn')

const UserPasswordResetSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.password.reset'),
    data: z
      .strictObject({
        user: z
          .strictObject({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserPasswordReset')

const UserInvitationSentSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.invitation.sent'),
    data: z
      .strictObject({
        invitation: z
          .strictObject({
            id: z.string(),
            email: z.string(),
            type: z.enum(['PLATFORM', 'PROJECT']),
            platformRole: z
              .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
              .exactOptional(),
            projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'email', 'type'] }),
        projectRole: z
          .union([
            z
              .strictObject({ id: z.string(), name: z.string() })
              .openapi({ required: ['id', 'name'] }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .openapi({ required: ['invitation'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserInvitationSent')

const UserInvitationAcceptedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.invitation.accepted'),
    data: z
      .strictObject({
        invitation: z
          .strictObject({
            id: z.string(),
            email: z.string(),
            type: z.enum(['PLATFORM', 'PROJECT']),
            platformRole: z
              .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
              .exactOptional(),
            projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'email', 'type'] }),
        projectRole: z
          .union([
            z
              .strictObject({ id: z.string(), name: z.string() })
              .openapi({ required: ['id', 'name'] }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .openapi({ required: ['invitation'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserInvitationAccepted')

const UserInvitationDeletedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.invitation.deleted'),
    data: z
      .strictObject({
        invitation: z
          .strictObject({
            id: z.string(),
            email: z.string(),
            type: z.enum(['PLATFORM', 'PROJECT']),
            platformRole: z
              .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
              .exactOptional(),
            projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'email', 'type'] }),
        projectRole: z
          .union([
            z
              .strictObject({ id: z.string(), name: z.string() })
              .openapi({ required: ['id', 'name'] }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .openapi({ required: ['invitation'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserInvitationDeleted')

const UserEmailVerifiedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('user.email.verified'),
    data: z
      .strictObject({
        user: z
          .strictObject({
            email: z.string(),
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
          })
          .exactOptional()
          .openapi({ required: ['email', 'id', 'firstName', 'lastName'] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('UserEmailVerified')

const SigningKeyCreatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.union([z.literal('signing.key.created')]),
    data: z
      .strictObject({
        signingKey: z
          .strictObject({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            displayName: z.string(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'displayName'] }),
      })
      .openapi({ required: ['signingKey'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SigningKeyCreated')

const ProjectRoleCreatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.union([
      z.literal('project.role.created'),
      z.literal('project.role.updated'),
      z.literal('project.role.deleted'),
    ]),
    data: z
      .strictObject({
        projectRole: z
          .strictObject({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions'] }),
      })
      .openapi({ required: ['projectRole'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectRoleCreated')

const ProjectReleaseCreatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.release.created'),
    data: z
      .strictObject({
        release: z
          .strictObject({
            name: z.string(),
            description: z.union([z.string(), z.null().nullable()]).exactOptional(),
            type: z.string(),
            projectId: z.string(),
            importedByUser: z
              .strictObject({
                id: z.string(),
                email: z.string(),
                firstName: z.string(),
                status: z.string(),
                externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                platformRole: z.string(),
                lastName: z.string(),
                created: z.string(),
                updated: z.string(),
                lastActiveDate: z.union([z.string(), z.null().nullable()]).exactOptional(),
                imageUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: [
                  'id',
                  'email',
                  'firstName',
                  'status',
                  'platformRole',
                  'lastName',
                  'created',
                  'updated',
                ],
              }),
          })
          .openapi({ required: ['name', 'type', 'projectId'] }),
      })
      .openapi({ required: ['release'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectReleaseCreated')

const TemplateSchema: z.ZodType<TemplateType> = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    name: z.string(),
    type: z.enum(['OFFICIAL', 'SHARED', 'CUSTOM']),
    summary: z.string(),
    description: z.string(),
    tags: z.array(
      z
        .strictObject({
          title: z.string(),
          color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
          icon: z.string().exactOptional(),
        })
        .openapi({ required: ['title', 'color'] }),
    ),
    blogUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    author: z.string(),
    categories: z.array(z.string()),
    pieces: z.array(z.string()),
    platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    flows: z
      .array(
        z
          .strictObject({
            displayName: z.string(),
            trigger: z.union([
              z
                .strictObject({
                  name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                  valid: z.boolean(),
                  displayName: z.string(),
                  nextAction: z.any().exactOptional(),
                  lastUpdatedDate: z.string(),
                  type: z.literal('PIECE_TRIGGER'),
                  settings: z
                    .strictObject({
                      sampleData: z
                        .strictObject({
                          sampleDataFileId: z.string().exactOptional(),
                          sampleDataInputFileId: z.string().exactOptional(),
                          lastTestDate: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      propertySettings: z.record(
                        z.string(),
                        z
                          .strictObject({
                            type: z.enum(['MANUAL', 'DYNAMIC']),
                            schema: z.any().exactOptional(),
                          })
                          .openapi({ required: ['type'] }),
                      ),
                      customLogoUrl: z.string().exactOptional(),
                      pieceName: z.string(),
                      pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                      triggerName: z.string().exactOptional(),
                      input: z.record(z.string(), z.any()),
                    })
                    .openapi({
                      required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                    }),
                })
                .openapi({
                  required: ['name', 'valid', 'displayName', 'lastUpdatedDate', 'type', 'settings'],
                }),
              z
                .strictObject({
                  name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                  valid: z.boolean(),
                  displayName: z.string(),
                  nextAction: z.any().exactOptional(),
                  lastUpdatedDate: z.string(),
                  type: z.literal('EMPTY'),
                  settings: z.any(),
                })
                .openapi({
                  required: ['name', 'valid', 'displayName', 'lastUpdatedDate', 'type', 'settings'],
                }),
            ]),
            valid: z.boolean(),
            schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
            description: z.string().exactOptional(),
            notes: z
              .array(
                z
                  .strictObject({
                    id: z.string(),
                    content: z.string(),
                    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                    position: z
                      .strictObject({ x: z.number(), y: z.number() })
                      .openapi({ required: ['x', 'y'] }),
                    size: z
                      .strictObject({ width: z.number(), height: z.number() })
                      .openapi({ required: ['width', 'height'] }),
                    createdAt: z.string(),
                    updatedAt: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'content',
                      'color',
                      'position',
                      'size',
                      'createdAt',
                      'updatedAt',
                    ],
                  }),
              )
              .exactOptional(),
          })
          .openapi({ required: ['displayName', 'trigger', 'valid'] }),
      )
      .exactOptional(),
    tables: z
      .array(
        z
          .strictObject({
            name: z.string(),
            externalId: z.string(),
            fields: z.array(
              z
                .strictObject({
                  name: z.string(),
                  type: z.string(),
                  data: z
                    .union([
                      z
                        .strictObject({
                          options: z.array(
                            z.strictObject({ value: z.string() }).openapi({ required: ['value'] }),
                          ),
                        })
                        .openapi({ required: ['options'] }),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                  externalId: z.string(),
                })
                .openapi({ required: ['name', 'type', 'externalId'] }),
            ),
            status: z.union([z.string(), z.null().nullable()]).exactOptional(),
            trigger: z.union([z.string(), z.null().nullable()]).exactOptional(),
            data: z
              .union([
                z
                  .strictObject({
                    type: z.literal('CSV'),
                    rows: z.array(
                      z.array(
                        z
                          .strictObject({ fieldId: z.string(), value: z.string() })
                          .openapi({ required: ['fieldId', 'value'] }),
                      ),
                    ),
                  })
                  .openapi({ required: ['type', 'rows'] }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({ required: ['name', 'externalId', 'fields'] }),
      )
      .exactOptional(),
    status: z.enum(['PUBLISHED', 'ARCHIVED']),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'name',
      'type',
      'summary',
      'description',
      'tags',
      'author',
      'categories',
      'pieces',
      'status',
    ],
  })
  .openapi('Template')

const FolderSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    displayName: z.string(),
    displayOrder: z.number(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'projectId', 'displayName', 'displayOrder'] })
  .openapi('Folder')

const UserInvitationSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    email: z.string(),
    status: z.enum(['PENDING', 'ACCEPTED']),
    type: z.enum(['PLATFORM', 'PROJECT']),
    platformId: z.string(),
    platformRole: z
      .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
      .exactOptional(),
    projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    projectRoleId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    projectRole: z
      .union([
        z
          .strictObject({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
            type: z.string(),
            userCount: z.number().exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions', 'type'] }),
        z.null().nullable(),
      ])
      .exactOptional(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'email', 'status', 'type', 'platformId'] })
  .openapi('UserInvitation')

const ProjectMemberSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
    userId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
    projectId: z.string(),
    projectRoleId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
  })
  .openapi({
    required: ['id', 'created', 'updated', 'platformId', 'userId', 'projectId', 'projectRoleId'],
  })
  .openapi('ProjectMember')

const ProjectSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    ownerId: z.string(),
    displayName: z.string(),
    platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
    maxConcurrentJobs: z.union([z.number(), z.null().nullable()]).exactOptional(),
    type: z.enum(['TEAM', 'PERSONAL']),
    icon: z
      .strictObject({
        color: z.enum([
          'RED',
          'BLUE',
          'YELLOW',
          'PURPLE',
          'GREEN',
          'PINK',
          'VIOLET',
          'ORANGE',
          'DARK_GREEN',
          'CYAN',
          'LAVENDER',
          'DEEP_ORANGE',
        ]),
      })
      .openapi({ required: ['color'] }),
    externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    releasesEnabled: z.boolean(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    poolId: z.union([z.string().regex(/^[0-9a-zA-Z]{21}$/), z.null().nullable()]).exactOptional(),
    plan: z
      .strictObject({
        id: z.string(),
        created: z.string(),
        updated: z.string(),
        projectId: z.string(),
        locked: z.boolean().default(false),
        name: z.string(),
        piecesFilterType: z.enum(['NONE', 'ALLOWED']),
        pieces: z.array(z.string()),
      })
      .openapi({
        required: [
          'id',
          'created',
          'updated',
          'projectId',
          'locked',
          'name',
          'piecesFilterType',
          'pieces',
        ],
      }),
    analytics: z
      .strictObject({
        totalUsers: z.number(),
        activeUsers: z.number(),
        totalFlows: z.number(),
        activeFlows: z.number(),
      })
      .openapi({ required: ['totalUsers', 'activeUsers', 'totalFlows', 'activeFlows'] }),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'ownerId',
      'displayName',
      'platformId',
      'type',
      'icon',
      'releasesEnabled',
      'plan',
      'analytics',
    ],
  })
  .openapi('Project')

const FlowSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    externalId: z.string(),
    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    status: z.enum(['ENABLED', 'DISABLED']),
    publishedVersionId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    operationStatus: z.enum(['NONE', 'DELETING', 'ENABLING', 'DISABLING']),
    timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
    templateId: z.union([z.string(), z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: ['id', 'created', 'updated', 'projectId', 'externalId', 'status', 'operationStatus'],
  })
  .openapi('Flow')

const FlowRunSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    flowId: z.string(),
    parentRunId: z.string().exactOptional(),
    failParentOnFailure: z.boolean(),
    triggeredBy: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    flowVersionId: z.string(),
    flowVersion: z
      .strictObject({ displayName: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    logsFileId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    status: z.enum([
      'FAILED',
      'QUOTA_EXCEEDED',
      'INTERNAL_ERROR',
      'PAUSED',
      'QUEUED',
      'RUNNING',
      'SUCCEEDED',
      'MEMORY_LIMIT_EXCEEDED',
      'TIMEOUT',
      'CANCELED',
      'LOG_SIZE_EXCEEDED',
    ]),
    startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
    finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
    environment: z.enum(['PRODUCTION', 'TESTING']),
    steps: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
    failedStep: z
      .strictObject({ name: z.string(), displayName: z.string() })
      .exactOptional()
      .openapi({ required: ['name', 'displayName'] }),
    stepNameToTest: z.string().exactOptional(),
    archivedAt: z.union([z.string(), z.null().nullable()]).exactOptional(),
    stepsCount: z.number().exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'projectId',
      'flowId',
      'failParentOnFailure',
      'flowVersionId',
      'status',
      'environment',
    ],
  })
  .openapi('FlowRun')

const PieceSchema: z.ZodType<PieceType> = z
  .strictObject({
    id: z.string().exactOptional(),
    name: z.string(),
    displayName: z.string(),
    logoUrl: z.string(),
    description: z.string(),
    authors: z.array(z.string()),
    platformId: z.string().exactOptional(),
    directoryPath: z.string().exactOptional(),
    auth: z
      .union([
        z.union([
          z
            .strictObject({
              displayName: z.string(),
              description: z.string().exactOptional(),
              username: z
                .strictObject({ displayName: z.string(), description: z.string().exactOptional() })
                .openapi({ required: ['displayName'] }),
              password: z
                .strictObject({ displayName: z.string(), description: z.string().exactOptional() })
                .openapi({ required: ['displayName'] }),
              type: z.literal('BASIC_AUTH'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({ required: ['displayName', 'username', 'password', 'type', 'required'] }),
          z
            .strictObject({
              displayName: z.string(),
              description: z.string().exactOptional(),
              props: z.record(
                z.string(),
                z.union([
                  z
                    .strictObject({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('SHORT_TEXT'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .strictObject({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('LONG_TEXT'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .strictObject({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('NUMBER'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .strictObject({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      type: z.literal('CHECKBOX'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'type', 'required'] }),
                  z
                    .strictObject({
                      displayName: z.string(),
                      description: z.string().exactOptional(),
                      options: z
                        .strictObject({
                          disabled: z.boolean().exactOptional(),
                          placeholder: z.string().exactOptional(),
                          options: z.array(
                            z
                              .strictObject({ label: z.string(), value: z.any() })
                              .openapi({ required: ['label', 'value'] }),
                          ),
                        })
                        .openapi({ required: ['options'] }),
                      type: z.literal('STATIC_DROPDOWN'),
                      required: z.boolean(),
                      defaultValue: z.any().exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                ]),
              ),
              type: z.literal('CUSTOM_AUTH'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
          z
            .strictObject({
              displayName: z.string(),
              description: z.string().exactOptional(),
              props: z
                .record(
                  z.string(),
                  z.union([
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('SHORT_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('SECRET_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        options: z
                          .strictObject({
                            disabled: z.boolean().exactOptional(),
                            placeholder: z.string().exactOptional(),
                            options: z.array(
                              z
                                .strictObject({ label: z.string(), value: z.any() })
                                .openapi({ required: ['label', 'value'] }),
                            ),
                          })
                          .openapi({ required: ['options'] }),
                        type: z.literal('STATIC_DROPDOWN'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                  ]),
                )
                .exactOptional(),
              authUrl: z.string(),
              tokenUrl: z.string(),
              scope: z.array(z.string()),
              prompt: z
                .union([
                  z.literal('none'),
                  z.literal('consent'),
                  z.literal('login'),
                  z.literal('omit'),
                ])
                .exactOptional(),
              pkce: z.boolean().exactOptional(),
              pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
              authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
              grantType: z
                .union([
                  z.enum(['authorization_code', 'client_credentials']),
                  z.literal('both_client_credentials_and_authorization_code'),
                ])
                .exactOptional(),
              extra: z.record(z.string(), z.string()).exactOptional(),
              type: z.literal('OAUTH2'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({
              required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
            }),
          z
            .strictObject({
              displayName: z.string(),
              description: z.string().exactOptional(),
              type: z.literal('SECRET_TEXT'),
              required: z.boolean(),
              defaultValue: z.any().exactOptional(),
            })
            .openapi({ required: ['displayName', 'type', 'required'] }),
        ]),
        z.array(
          z.union([
            z
              .strictObject({
                displayName: z.string(),
                description: z.string().exactOptional(),
                username: z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                  })
                  .openapi({ required: ['displayName'] }),
                password: z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                  })
                  .openapi({ required: ['displayName'] }),
                type: z.literal('BASIC_AUTH'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({ required: ['displayName', 'username', 'password', 'type', 'required'] }),
            z
              .strictObject({
                displayName: z.string(),
                description: z.string().exactOptional(),
                props: z.record(
                  z.string(),
                  z.union([
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('SHORT_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('LONG_TEXT'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('NUMBER'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        type: z.literal('CHECKBOX'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'type', 'required'] }),
                    z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                        options: z
                          .strictObject({
                            disabled: z.boolean().exactOptional(),
                            placeholder: z.string().exactOptional(),
                            options: z.array(
                              z
                                .strictObject({ label: z.string(), value: z.any() })
                                .openapi({ required: ['label', 'value'] }),
                            ),
                          })
                          .openapi({ required: ['options'] }),
                        type: z.literal('STATIC_DROPDOWN'),
                        required: z.boolean(),
                        defaultValue: z.any().exactOptional(),
                      })
                      .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                  ]),
                ),
                type: z.literal('CUSTOM_AUTH'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
            z
              .strictObject({
                displayName: z.string(),
                description: z.string().exactOptional(),
                props: z
                  .record(
                    z.string(),
                    z.union([
                      z
                        .strictObject({
                          displayName: z.string(),
                          description: z.string().exactOptional(),
                          type: z.literal('SHORT_TEXT'),
                          required: z.boolean(),
                          defaultValue: z.any().exactOptional(),
                        })
                        .openapi({ required: ['displayName', 'type', 'required'] }),
                      z
                        .strictObject({
                          displayName: z.string(),
                          description: z.string().exactOptional(),
                          type: z.literal('SECRET_TEXT'),
                          required: z.boolean(),
                          defaultValue: z.any().exactOptional(),
                        })
                        .openapi({ required: ['displayName', 'type', 'required'] }),
                      z
                        .strictObject({
                          displayName: z.string(),
                          description: z.string().exactOptional(),
                          options: z
                            .strictObject({
                              disabled: z.boolean().exactOptional(),
                              placeholder: z.string().exactOptional(),
                              options: z.array(
                                z
                                  .strictObject({ label: z.string(), value: z.any() })
                                  .openapi({ required: ['label', 'value'] }),
                              ),
                            })
                            .openapi({ required: ['options'] }),
                          type: z.literal('STATIC_DROPDOWN'),
                          required: z.boolean(),
                          defaultValue: z.any().exactOptional(),
                        })
                        .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                    ]),
                  )
                  .exactOptional(),
                authUrl: z.string(),
                tokenUrl: z.string(),
                scope: z.array(z.string()),
                prompt: z
                  .union([
                    z.literal('none'),
                    z.literal('consent'),
                    z.literal('login'),
                    z.literal('omit'),
                  ])
                  .exactOptional(),
                pkce: z.boolean().exactOptional(),
                pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
                authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
                grantType: z
                  .union([
                    z.enum(['authorization_code', 'client_credentials']),
                    z.literal('both_client_credentials_and_authorization_code'),
                  ])
                  .exactOptional(),
                extra: z.record(z.string(), z.string()).exactOptional(),
                type: z.literal('OAUTH2'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
              }),
            z
              .strictObject({
                displayName: z.string(),
                description: z.string().exactOptional(),
                type: z.literal('SECRET_TEXT'),
                required: z.boolean(),
                defaultValue: z.any().exactOptional(),
              })
              .openapi({ required: ['displayName', 'type', 'required'] }),
          ]),
        ),
      ])
      .exactOptional(),
    version: z.string(),
    categories: z
      .array(
        z.enum([
          'ARTIFICIAL_INTELLIGENCE',
          'COMMUNICATION',
          'COMMERCE',
          'CORE',
          'UNIVERSAL_AI',
          'FLOW_CONTROL',
          'BUSINESS_INTELLIGENCE',
          'ACCOUNTING',
          'PRODUCTIVITY',
          'CONTENT_AND_FILES',
          'DEVELOPER_TOOLS',
          'CUSTOMER_SUPPORT',
          'FORMS_AND_SURVEYS',
          'HUMAN_RESOURCES',
          'PAYMENT_PROCESSING',
          'MARKETING',
          'SALES_AND_CRM',
        ]),
      )
      .exactOptional(),
    minimumSupportedRelease: z.string().exactOptional(),
    maximumSupportedRelease: z.string().exactOptional(),
    i18n: z.record(z.string(), z.record(z.string(), z.string())).exactOptional(),
    actions: z.record(
      z.string(),
      z
        .strictObject({
          name: z.string(),
          displayName: z.string(),
          description: z.string(),
          props: z.record(
            z.string(),
            z.union([
              z.union([
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SHORT_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('LONG_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MARKDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('CHECKBOX'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .strictObject({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .strictObject({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .strictObject({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .strictObject({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .strictObject({
                    refreshers: z.array(z.string()),
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DYNAMIC'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['refreshers', 'displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('NUMBER'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    properties: z.record(
                      z.string(),
                      z.union([
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .strictObject({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .strictObject({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                            refreshers: z.array(z.string()),
                          })
                          .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .strictObject({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .strictObject({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('FILE'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('DATE_TIME'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('ARRAY'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'properties', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('OBJECT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('JSON'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DATE_TIME'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('FILE'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('COLOR'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
              z.union([
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    username: z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                      })
                      .openapi({ required: ['displayName'] }),
                    password: z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                      })
                      .openapi({ required: ['displayName'] }),
                    type: z.literal('BASIC_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'username', 'password', 'type', 'required'],
                  }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z.record(
                      z.string(),
                      z.union([
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .strictObject({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .strictObject({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('CUSTOM_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z
                      .record(
                        z.string(),
                        z.union([
                          z
                            .strictObject({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SHORT_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .strictObject({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SECRET_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .strictObject({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              options: z
                                .strictObject({
                                  disabled: z.boolean().exactOptional(),
                                  placeholder: z.string().exactOptional(),
                                  options: z.array(
                                    z
                                      .strictObject({ label: z.string(), value: z.any() })
                                      .openapi({ required: ['label', 'value'] }),
                                  ),
                                })
                                .openapi({ required: ['options'] }),
                              type: z.literal('STATIC_DROPDOWN'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        ]),
                      )
                      .exactOptional(),
                    authUrl: z.string(),
                    tokenUrl: z.string(),
                    scope: z.array(z.string()),
                    prompt: z
                      .union([
                        z.literal('none'),
                        z.literal('consent'),
                        z.literal('login'),
                        z.literal('omit'),
                      ])
                      .exactOptional(),
                    pkce: z.boolean().exactOptional(),
                    pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
                    authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
                    grantType: z
                      .union([
                        z.enum(['authorization_code', 'client_credentials']),
                        z.literal('both_client_credentials_and_authorization_code'),
                      ])
                      .exactOptional(),
                    extra: z.record(z.string(), z.string()).exactOptional(),
                    type: z.literal('OAUTH2'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
                  }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SECRET_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
            ]),
          ),
          requireAuth: z.boolean(),
          errorHandlingOptions: z
            .strictObject({
              retryOnFailure: z
                .strictObject({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
              continueOnFailure: z
                .strictObject({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({ required: ['retryOnFailure', 'continueOnFailure'] }),
        })
        .openapi({ required: ['name', 'displayName', 'description', 'props', 'requireAuth'] }),
    ),
    triggers: z.record(
      z.string(),
      z
        .strictObject({
          name: z.string(),
          displayName: z.string(),
          description: z.string(),
          props: z.record(
            z.string(),
            z.union([
              z.union([
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SHORT_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('LONG_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MARKDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('CHECKBOX'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .strictObject({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .strictObject({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    options: z
                      .strictObject({
                        disabled: z.boolean().exactOptional(),
                        placeholder: z.string().exactOptional(),
                        options: z.array(
                          z
                            .strictObject({ label: z.string(), value: z.any() })
                            .openapi({ required: ['label', 'value'] }),
                        ),
                      })
                      .openapi({ required: ['options'] }),
                    type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('MULTI_SELECT_DROPDOWN'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                    refreshers: z.array(z.string()),
                  })
                  .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                z
                  .strictObject({
                    refreshers: z.array(z.string()),
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DYNAMIC'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['refreshers', 'displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('NUMBER'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    properties: z.record(
                      z.string(),
                      z.union([
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .strictObject({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .strictObject({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                            refreshers: z.array(z.string()),
                          })
                          .openapi({ required: ['displayName', 'type', 'required', 'refreshers'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .strictObject({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .strictObject({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_MULTI_SELECT_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('FILE'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('DATE_TIME'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('ARRAY'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'properties', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('OBJECT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('JSON'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('DATE_TIME'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('FILE'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('COLOR'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
              z.union([
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    username: z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                      })
                      .openapi({ required: ['displayName'] }),
                    password: z
                      .strictObject({
                        displayName: z.string(),
                        description: z.string().exactOptional(),
                      })
                      .openapi({ required: ['displayName'] }),
                    type: z.literal('BASIC_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'username', 'password', 'type', 'required'],
                  }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z.record(
                      z.string(),
                      z.union([
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('SHORT_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('LONG_TEXT'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('NUMBER'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            type: z.literal('CHECKBOX'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'type', 'required'] }),
                        z
                          .strictObject({
                            displayName: z.string(),
                            description: z.string().exactOptional(),
                            options: z
                              .strictObject({
                                disabled: z.boolean().exactOptional(),
                                placeholder: z.string().exactOptional(),
                                options: z.array(
                                  z
                                    .strictObject({ label: z.string(), value: z.any() })
                                    .openapi({ required: ['label', 'value'] }),
                                ),
                              })
                              .openapi({ required: ['options'] }),
                            type: z.literal('STATIC_DROPDOWN'),
                            required: z.boolean(),
                            defaultValue: z.any().exactOptional(),
                          })
                          .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                      ]),
                    ),
                    type: z.literal('CUSTOM_AUTH'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'props', 'type', 'required'] }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    props: z
                      .record(
                        z.string(),
                        z.union([
                          z
                            .strictObject({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SHORT_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .strictObject({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              type: z.literal('SECRET_TEXT'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'type', 'required'] }),
                          z
                            .strictObject({
                              displayName: z.string(),
                              description: z.string().exactOptional(),
                              options: z
                                .strictObject({
                                  disabled: z.boolean().exactOptional(),
                                  placeholder: z.string().exactOptional(),
                                  options: z.array(
                                    z
                                      .strictObject({ label: z.string(), value: z.any() })
                                      .openapi({ required: ['label', 'value'] }),
                                  ),
                                })
                                .openapi({ required: ['options'] }),
                              type: z.literal('STATIC_DROPDOWN'),
                              required: z.boolean(),
                              defaultValue: z.any().exactOptional(),
                            })
                            .openapi({ required: ['displayName', 'options', 'type', 'required'] }),
                        ]),
                      )
                      .exactOptional(),
                    authUrl: z.string(),
                    tokenUrl: z.string(),
                    scope: z.array(z.string()),
                    prompt: z
                      .union([
                        z.literal('none'),
                        z.literal('consent'),
                        z.literal('login'),
                        z.literal('omit'),
                      ])
                      .exactOptional(),
                    pkce: z.boolean().exactOptional(),
                    pkceMethod: z.union([z.literal('plain'), z.literal('S256')]).exactOptional(),
                    authorizationMethod: z.enum(['HEADER', 'BODY']).exactOptional(),
                    grantType: z
                      .union([
                        z.enum(['authorization_code', 'client_credentials']),
                        z.literal('both_client_credentials_and_authorization_code'),
                      ])
                      .exactOptional(),
                    extra: z.record(z.string(), z.string()).exactOptional(),
                    type: z.literal('OAUTH2'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({
                    required: ['displayName', 'authUrl', 'tokenUrl', 'scope', 'type', 'required'],
                  }),
                z
                  .strictObject({
                    displayName: z.string(),
                    description: z.string().exactOptional(),
                    type: z.literal('SECRET_TEXT'),
                    required: z.boolean(),
                    defaultValue: z.any().exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'type', 'required'] }),
              ]),
            ]),
          ),
          errorHandlingOptions: z
            .strictObject({
              retryOnFailure: z
                .strictObject({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
              continueOnFailure: z
                .strictObject({
                  defaultValue: z.boolean().exactOptional(),
                  hide: z.boolean().exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({ required: ['retryOnFailure', 'continueOnFailure'] }),
          type: z.enum(['POLLING', 'WEBHOOK', 'APP_WEBHOOK', 'MANUAL']),
          sampleData: z.any(),
          handshakeConfiguration: z.any().exactOptional(),
          renewConfiguration: z
            .union([
              z
                .strictObject({ strategy: z.literal('CRON'), cronExpression: z.string() })
                .openapi({ required: ['strategy', 'cronExpression'] }),
              z.strictObject({ strategy: z.literal('NONE') }).openapi({ required: ['strategy'] }),
            ])
            .exactOptional(),
          testStrategy: z.enum(['SIMULATION', 'TEST_FUNCTION']),
        })
        .openapi({
          required: [
            'name',
            'displayName',
            'description',
            'props',
            'type',
            'sampleData',
            'testStrategy',
          ],
        }),
    ),
  })
  .openapi({
    required: [
      'name',
      'displayName',
      'logoUrl',
      'description',
      'authors',
      'version',
      'actions',
      'triggers',
    ],
  })
  .openapi('Piece')

const GitRepoSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    remoteUrl: z.string(),
    branch: z.string(),
    branchType: z.enum(['PRODUCTION', 'DEVELOPMENT']),
    projectId: z.string(),
    slug: z.string(),
  })
  .openapi({
    required: [
      'id',
      'created',
      'updated',
      'remoteUrl',
      'branch',
      'branchType',
      'projectId',
      'slug',
    ],
  })
  .openapi('GitRepo')

const ProjectReleaseSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    projectId: z.string(),
    name: z.string(),
    description: z.union([z.string(), z.null().nullable()]).exactOptional(),
    importedBy: z.union([z.string(), z.null().nullable()]).exactOptional(),
    fileId: z.string(),
    type: z.enum(['GIT', 'PROJECT', 'ROLLBACK']),
    importedByUser: UserSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'projectId', 'name', 'fileId', 'type'] })
  .openapi('ProjectRelease')

const EmbeddingSchema = z
  .strictObject({ allowedEmbedOrigins: z.array(z.url().max(300)).min(1).max(50) })
  .openapi({ required: ['allowedEmbedOrigins'] })
  .openapi('Embedding')

const VariableInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    name: z.string(),
    projectId: z.string(),
    platformId: z.string(),
    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    owner: z.union([UserInputSchema, z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'name', 'projectId', 'platformId'] })
  .openapi('VariableInput')

const VariableSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    name: z.string(),
    projectId: z.string(),
    platformId: z.string(),
    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
    owner: z.union([UserSchema, z.null().nullable()]).exactOptional(),
    metadata: z.union([z.record(z.string(), z.any()), z.null().nullable()]).exactOptional(),
  })
  .openapi({ required: ['id', 'created', 'updated', 'name', 'projectId', 'platformId'] })
  .openapi('Variable')

const AuditLogRetentionUpdatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('audit.log.retention.updated'),
    data: z
      .object({
        previousRetentionDays: z.union([z.number(), z.null().nullable()]),
        retentionDays: z.union([z.number(), z.null().nullable()]),
        instanceLimitDays: z.union([z.number(), z.null().nullable()]),
      })
      .openapi({ required: ['previousRetentionDays', 'retentionDays', 'instanceLimitDays'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuditLogRetentionUpdatedInput')

const AuditLogRetentionUpdatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('audit.log.retention.updated'),
    data: z
      .strictObject({
        previousRetentionDays: z.union([z.number(), z.null().nullable()]),
        retentionDays: z.union([z.number(), z.null().nullable()]),
        instanceLimitDays: z.union([z.number(), z.null().nullable()]),
      })
      .openapi({ required: ['previousRetentionDays', 'retentionDays', 'instanceLimitDays'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuditLogRetentionUpdated')

const AuthenticationEmailEnabledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.email.enabled'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationEmailEnabledInput')

const AuthenticationEmailEnabledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.email.enabled'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationEmailEnabled')

const AuthenticationEmailDisabledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.email.disabled'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationEmailDisabledInput')

const AuthenticationEmailDisabledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.email.disabled'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationEmailDisabled')

const AuthenticationGoogleEnabledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.google.enabled'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationGoogleEnabledInput')

const AuthenticationGoogleEnabledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.google.enabled'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationGoogleEnabled')

const AuthenticationGoogleDisabledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.google.disabled'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationGoogleDisabledInput')

const AuthenticationGoogleDisabledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.google.disabled'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationGoogleDisabled')

const AuthenticationAllowedDomainAddedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.added'),
    data: z.object({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainAddedInput')

const AuthenticationAllowedDomainAddedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.added'),
    data: z.strictObject({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainAdded')

const AuthenticationAllowedDomainRemovedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.removed'),
    data: z.object({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainRemovedInput')

const AuthenticationAllowedDomainRemovedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.removed'),
    data: z.strictObject({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainRemoved')

const AuthenticationAllowedDomainEnforcementEnabledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.enforcement.enabled'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainEnforcementEnabledInput')

const AuthenticationAllowedDomainEnforcementEnabledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.enforcement.enabled'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainEnforcementEnabled')

const AuthenticationAllowedDomainEnforcementDisabledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.enforcement.disabled'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainEnforcementDisabledInput')

const AuthenticationAllowedDomainEnforcementDisabledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('authentication.allowed.domain.enforcement.disabled'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AuthenticationAllowedDomainEnforcementDisabled')

const SsoDomainAddedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.added'),
    data: z.object({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainAddedInput')

const SsoDomainAddedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.added'),
    data: z.strictObject({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainAdded')

const SsoDomainVerifiedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.verified'),
    data: z.object({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainVerifiedInput')

const SsoDomainVerifiedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.verified'),
    data: z.strictObject({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainVerified')

const SsoDomainVerificationCancelledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.verification.cancelled'),
    data: z.object({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainVerificationCancelledInput')

const SsoDomainVerificationCancelledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.verification.cancelled'),
    data: z.strictObject({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainVerificationCancelled')

const SsoDomainRemovedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.removed'),
    data: z.object({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainRemovedInput')

const SsoDomainRemovedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.removed'),
    data: z.strictObject({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainRemoved')

const SsoDomainExpiredInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.expired'),
    data: z.object({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainExpiredInput')

const SsoDomainExpiredSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.domain.expired'),
    data: z.strictObject({ domain: z.string() }).openapi({ required: ['domain'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoDomainExpired')

const SsoSamlConnectedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.saml.connected'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoSamlConnectedInput')

const SsoSamlConnectedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.saml.connected'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoSamlConnected')

const SsoSamlReplacedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.saml.replaced'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoSamlReplacedInput')

const SsoSamlReplacedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.saml.replaced'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoSamlReplaced')

const SsoSamlDisabledInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.saml.disabled'),
    data: z.looseObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoSamlDisabledInput')

const SsoSamlDisabledSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('sso.saml.disabled'),
    data: z.strictObject({}),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('SsoSamlDisabled')

const AgentActionExecutedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.action.executed'),
    data: z
      .strictObject({
        source: z.enum(['CHAT', 'FLOW_STEP', 'AGENT', 'AGENT_BUILDER']),
        conversation: z
          .strictObject({
            id: z.string(),
            source: z.enum(['CHAT', 'FLOW_STEP', 'AGENT', 'AGENT_BUILDER']),
          })
          .exactOptional()
          .openapi({ required: ['id', 'source'] }),
        agent: z
          .strictObject({ id: z.string(), displayName: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: ['id'] }),
        flow: z
          .strictObject({ id: z.string(), runId: z.string() })
          .exactOptional()
          .openapi({ required: ['id', 'runId'] }),
        action: z.xor([
          z
            .strictObject({
              kind: z.literal('PIECE'),
              pieceName: z.string(),
              pieceDisplayName: z.string(),
              actionName: z.string(),
              displayName: z.string(),
            })
            .openapi({
              required: ['kind', 'pieceName', 'pieceDisplayName', 'actionName', 'displayName'],
            }),
          z
            .strictObject({ kind: z.literal('FLOW'), flowId: z.string(), displayName: z.string() })
            .openapi({ required: ['kind', 'flowId', 'displayName'] }),
        ]),
        outcome: z.enum(['SUCCEEDED', 'FAILED']).exactOptional(),
        connection: z
          .strictObject({ externalId: z.string(), label: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: ['externalId'] }),
      })
      .openapi({ required: ['source', 'action'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentActionExecuted')

const FlowApprovalRequestedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.requested'),
    data: z
      .object({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalRequestedInput')

const FlowApprovalRequestedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.requested'),
    data: z
      .strictObject({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalRequested')

const FlowApprovalGrantedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.granted'),
    data: z
      .object({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalGrantedInput')

const FlowApprovalGrantedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.granted'),
    data: z
      .strictObject({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalGranted')

const FlowApprovalRejectedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.rejected'),
    data: z
      .object({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalRejectedInput')

const FlowApprovalRejectedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.rejected'),
    data: z
      .strictObject({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalRejected')

const FlowApprovalWithdrawnInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.withdrawn'),
    data: z
      .object({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalWithdrawnInput')

const FlowApprovalWithdrawnSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.approval.withdrawn'),
    data: z
      .strictObject({
        approvalRequestId: z.string(),
        flowId: z.string(),
        flowVersionId: z.string(),
        flowDisplayName: z.string().exactOptional(),
        rejectionReason: z.union([z.string(), z.null().nullable()]).exactOptional(),
      })
      .openapi({ required: ['approvalRequestId', 'flowId', 'flowVersionId'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowApprovalWithdrawn')

const FlowPiecesUpgradedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.pieces.upgraded'),
    data: z
      .object({
        flowId: z.string(),
        flowVersionId: z.string(),
        steps: z.array(
          z
            .object({
              stepName: z.string(),
              actionOrTriggerName: z.string(),
              decision: z.enum(['UPGRADED', 'KEPT']),
              prevVersion: z.string(),
              newVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['stepName', 'actionOrTriggerName', 'decision', 'prevVersion'] }),
        ),
      })
      .openapi({ required: ['flowId', 'flowVersionId', 'steps'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowPiecesUpgradedInput')

const FlowPiecesUpgradedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.pieces.upgraded'),
    data: z
      .strictObject({
        flowId: z.string(),
        flowVersionId: z.string(),
        steps: z.array(
          z
            .strictObject({
              stepName: z.string(),
              actionOrTriggerName: z.string(),
              decision: z.enum(['UPGRADED', 'KEPT']),
              prevVersion: z.string(),
              newVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['stepName', 'actionOrTriggerName', 'decision', 'prevVersion'] }),
        ),
      })
      .openapi({ required: ['flowId', 'flowVersionId', 'steps'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowPiecesUpgraded')

const FlowPiecesRevertedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.pieces.reverted'),
    data: z
      .object({
        flowId: z.string(),
        flowVersionId: z.string(),
        steps: z.array(
          z
            .object({
              stepName: z.string(),
              actionOrTriggerName: z.string(),
              prevVersion: z.string(),
              newVersion: z.string(),
            })
            .openapi({
              required: ['stepName', 'actionOrTriggerName', 'prevVersion', 'newVersion'],
            }),
        ),
      })
      .openapi({ required: ['flowId', 'flowVersionId', 'steps'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowPiecesRevertedInput')

const FlowPiecesRevertedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.pieces.reverted'),
    data: z
      .strictObject({
        flowId: z.string(),
        flowVersionId: z.string(),
        steps: z.array(
          z
            .strictObject({
              stepName: z.string(),
              actionOrTriggerName: z.string(),
              prevVersion: z.string(),
              newVersion: z.string(),
            })
            .openapi({
              required: ['stepName', 'actionOrTriggerName', 'prevVersion', 'newVersion'],
            }),
        ),
      })
      .openapi({ required: ['flowId', 'flowVersionId', 'steps'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowPiecesReverted')

const FlowRunResumedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.resumed'),
    data: z
      .object({
        flowRun: z
          .object({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunResumedInput')

const FlowRunResumedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('flow.run.resumed'),
    data: z
      .strictObject({
        flowRun: z
          .strictObject({
            id: z.string(),
            startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
            duration: z.number().exactOptional(),
            triggeredBy: z.string().exactOptional(),
            environment: z.string(),
            flowId: z.string(),
            flowVersionId: z.string(),
            stepNameToTest: z.union([z.string(), z.null().nullable()]).exactOptional(),
            flowDisplayName: z.string().exactOptional(),
            status: z.string(),
          })
          .openapi({ required: ['id', 'environment', 'flowId', 'flowVersionId', 'status'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['flowRun'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('FlowRunResumed')

const AgentCreatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.created'),
    data: z
      .object({
        agent: z
          .object({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentCreatedInput')

const AgentCreatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.created'),
    data: z
      .strictObject({
        agent: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentCreated')

const AgentUpdatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.updated'),
    data: z
      .object({
        agent: z
          .object({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentUpdatedInput')

const AgentUpdatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.updated'),
    data: z
      .strictObject({
        agent: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentUpdated')

const AgentDeletedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.deleted'),
    data: z
      .object({
        agent: z
          .object({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentDeletedInput')

const AgentDeletedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.deleted'),
    data: z
      .strictObject({
        agent: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentDeleted')

const AgentPublishedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.published'),
    data: z
      .object({
        agent: z
          .object({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentPublishedInput')

const AgentPublishedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.published'),
    data: z
      .strictObject({
        agent: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentPublished')

const AgentUnpublishedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.unpublished'),
    data: z
      .object({
        agent: z
          .object({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentUnpublishedInput')

const AgentUnpublishedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('agent.unpublished'),
    data: z
      .strictObject({
        agent: z
          .strictObject({
            id: z.string(),
            displayName: z.string(),
            publishedDigest: z.string().exactOptional(),
            publishedToolNames: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: ['id', 'displayName'] }),
      })
      .openapi({ required: ['agent'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('AgentUnpublished')

const VariableUpsertedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('variable.upserted'),
    data: z
      .object({
        variable: z
          .object({ id: z.string(), name: z.string(), created: z.string(), updated: z.string() })
          .openapi({ required: ['id', 'name', 'created', 'updated'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['variable'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('VariableUpsertedInput')

const VariableUpsertedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('variable.upserted'),
    data: z
      .strictObject({
        variable: z
          .strictObject({
            id: z.string(),
            name: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'name', 'created', 'updated'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['variable'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('VariableUpserted')

const VariableDeletedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('variable.deleted'),
    data: z
      .object({
        variable: z
          .object({ id: z.string(), name: z.string(), created: z.string(), updated: z.string() })
          .openapi({ required: ['id', 'name', 'created', 'updated'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['variable'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('VariableDeletedInput')

const VariableDeletedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('variable.deleted'),
    data: z
      .strictObject({
        variable: z
          .strictObject({
            id: z.string(),
            name: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'name', 'created', 'updated'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['variable'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('VariableDeleted')

const VariableValueRevealedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('variable.value.revealed'),
    data: z
      .object({
        variable: z
          .object({ id: z.string(), name: z.string(), created: z.string(), updated: z.string() })
          .openapi({ required: ['id', 'name', 'created', 'updated'] }),
        project: z
          .object({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['variable'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('VariableValueRevealedInput')

const VariableValueRevealedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('variable.value.revealed'),
    data: z
      .strictObject({
        variable: z
          .strictObject({
            id: z.string(),
            name: z.string(),
            created: z.string(),
            updated: z.string(),
          })
          .openapi({ required: ['id', 'name', 'created', 'updated'] }),
        project: z
          .strictObject({ displayName: z.string() })
          .exactOptional()
          .openapi({ required: ['displayName'] }),
      })
      .openapi({ required: ['variable'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('VariableValueRevealed')

const ProjectRoleUpdatedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.role.updated'),
    data: z
      .object({
        projectRole: z
          .object({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions'] }),
      })
      .openapi({ required: ['projectRole'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectRoleUpdatedInput')

const ProjectRoleUpdatedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.role.updated'),
    data: z
      .strictObject({
        projectRole: z
          .strictObject({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions'] }),
      })
      .openapi({ required: ['projectRole'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectRoleUpdated')

const ProjectRoleDeletedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.role.deleted'),
    data: z
      .object({
        projectRole: z
          .object({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions'] }),
      })
      .openapi({ required: ['projectRole'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectRoleDeletedInput')

const ProjectRoleDeletedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.role.deleted'),
    data: z
      .strictObject({
        projectRole: z
          .strictObject({
            id: z.string(),
            created: z.string(),
            updated: z.string(),
            name: z.string(),
            permissions: z.array(z.string()),
            platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
          })
          .openapi({ required: ['id', 'created', 'updated', 'name', 'permissions'] }),
      })
      .openapi({ required: ['projectRole'] }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectRoleDeleted')

const ProjectReplacedInputSchema = z
  .object({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.replaced'),
    data: z
      .object({
        sourceActivepiecesVersion: z.string(),
        applied: z
          .object({
            flowsCreated: z.number(),
            flowsUpdated: z.number(),
            flowsDeleted: z.number(),
            flowsUnchanged: z.number(),
            tablesCreated: z.number(),
            tablesUpdated: z.number(),
            tablesDeleted: z.number(),
            tablesUnchanged: z.number(),
            foldersCreated: z.number(),
            foldersUpdated: z.number(),
            foldersDeleted: z.number(),
            foldersUnchanged: z.number(),
            connectionsCreated: z.number(),
            connectionsUpdated: z.number(),
            connectionsUnchanged: z.number(),
          })
          .openapi({
            required: [
              'flowsCreated',
              'flowsUpdated',
              'flowsDeleted',
              'flowsUnchanged',
              'tablesCreated',
              'tablesUpdated',
              'tablesDeleted',
              'tablesUnchanged',
              'foldersCreated',
              'foldersUpdated',
              'foldersDeleted',
              'foldersUnchanged',
              'connectionsCreated',
              'connectionsUpdated',
              'connectionsUnchanged',
            ],
          }),
        failedCount: z.number(),
        outcome: z.enum(['SUCCESS', 'PARTIAL_FAILURE']),
        durationMs: z.number(),
      })
      .openapi({
        required: ['sourceActivepiecesVersion', 'applied', 'failedCount', 'outcome', 'durationMs'],
      }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectReplacedInput')

const ProjectReplacedSchema = z
  .strictObject({
    id: z.string(),
    created: z.string(),
    updated: z.string(),
    platformId: z.string(),
    projectId: z.string().exactOptional(),
    projectDisplayName: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    action: z.literal('project.replaced'),
    data: z
      .strictObject({
        sourceActivepiecesVersion: z.string(),
        applied: z
          .strictObject({
            flowsCreated: z.number(),
            flowsUpdated: z.number(),
            flowsDeleted: z.number(),
            flowsUnchanged: z.number(),
            tablesCreated: z.number(),
            tablesUpdated: z.number(),
            tablesDeleted: z.number(),
            tablesUnchanged: z.number(),
            foldersCreated: z.number(),
            foldersUpdated: z.number(),
            foldersDeleted: z.number(),
            foldersUnchanged: z.number(),
            connectionsCreated: z.number(),
            connectionsUpdated: z.number(),
            connectionsUnchanged: z.number(),
          })
          .openapi({
            required: [
              'flowsCreated',
              'flowsUpdated',
              'flowsDeleted',
              'flowsUnchanged',
              'tablesCreated',
              'tablesUpdated',
              'tablesDeleted',
              'tablesUnchanged',
              'foldersCreated',
              'foldersUpdated',
              'foldersDeleted',
              'foldersUnchanged',
              'connectionsCreated',
              'connectionsUpdated',
              'connectionsUnchanged',
            ],
          }),
        failedCount: z.number(),
        outcome: z.enum(['SUCCESS', 'PARTIAL_FAILURE']),
        durationMs: z.number(),
      })
      .openapi({
        required: ['sourceActivepiecesVersion', 'applied', 'failedCount', 'outcome', 'durationMs'],
      }),
  })
  .openapi({ required: ['id', 'created', 'updated', 'platformId', 'action', 'data'] })
  .openapi('ProjectReplaced')

const ApiKeySecurityScheme = {
  type: 'http',
  description: 'Use your api key generated from the admin console',
  scheme: 'bearer',
}

export const getV1FoldersRoute = createRoute({
  method: 'get',
  path: '/v1/folders',
  tags: ['folders'],
  description: 'List folders',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1FoldersRoute = createRoute({
  method: 'post',
  path: '/v1/folders',
  tags: ['folders'],
  description: 'Create a new folder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ displayName: z.string(), projectId: z.string() })
            .openapi({ required: ['displayName', 'projectId'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1FoldersIdRoute = createRoute({
  method: 'get',
  path: '/v1/folders/{id}',
  tags: ['folders'],
  description: 'Get a folder by id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1FoldersIdRoute = createRoute({
  method: 'post',
  path: '/v1/folders/{id}',
  tags: ['folders'],
  description: 'Update an existing folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ displayName: z.string() }).openapi({ required: ['displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1FoldersIdRoute = createRoute({
  method: 'delete',
  path: '/v1/folders/{id}',
  tags: ['folders'],
  description: 'Delete a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1FlowsRoute = createRoute({
  method: 'get',
  path: '/v1/flows',
  tags: ['flows'],
  description: 'List flows',
  request: {
    query: z.object({
      folderId: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'folderId', required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ENABLED', 'DISABLED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string', enum: ['ENABLED', 'DISABLED'] } },
            in: 'query',
            name: 'status',
            required: false,
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'name', required: false },
        }),
      agentExternalIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'agentExternalIds',
            required: false,
          },
        }),
      versionState: z
        .enum(['LOCKED', 'DRAFT'])
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['LOCKED', 'DRAFT'] },
            in: 'query',
            name: 'versionState',
            required: false,
          },
        }),
      connectionExternalIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'connectionExternalIds',
            required: false,
          },
        }),
      externalIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'externalIds',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    id: z.string(),
                    created: z.string(),
                    updated: z.string(),
                    projectId: z.string(),
                    externalId: z.string(),
                    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    status: z.enum(['ENABLED', 'DISABLED']),
                    publishedVersionId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    metadata: z
                      .union([z.record(z.string(), z.any()), z.null().nullable()])
                      .exactOptional(),
                    operationStatus: z.enum(['NONE', 'DELETING', 'ENABLING', 'DISABLING']),
                    timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
                    templateId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    version: z
                      .strictObject({
                        id: z.string(),
                        created: z.string(),
                        updated: z.string(),
                        flowId: z.string(),
                        displayName: z.string(),
                        trigger: z.union([
                          z
                            .strictObject({
                              name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                              valid: z.boolean(),
                              displayName: z.string(),
                              nextAction: z.any().exactOptional(),
                              lastUpdatedDate: z.string(),
                              type: z.literal('PIECE_TRIGGER'),
                              settings: z
                                .strictObject({
                                  sampleData: z
                                    .strictObject({
                                      sampleDataFileId: z.string().exactOptional(),
                                      sampleDataInputFileId: z.string().exactOptional(),
                                      lastTestDate: z.string().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  propertySettings: z.record(
                                    z.string(),
                                    z
                                      .strictObject({
                                        type: z.enum(['MANUAL', 'DYNAMIC']),
                                        schema: z.any().exactOptional(),
                                      })
                                      .openapi({ required: ['type'] }),
                                  ),
                                  customLogoUrl: z.string().exactOptional(),
                                  pieceName: z.string(),
                                  pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                  triggerName: z.string().exactOptional(),
                                  input: z.record(z.string(), z.any()),
                                })
                                .openapi({
                                  required: [
                                    'propertySettings',
                                    'pieceName',
                                    'pieceVersion',
                                    'input',
                                  ],
                                }),
                            })
                            .openapi({
                              required: [
                                'name',
                                'valid',
                                'displayName',
                                'lastUpdatedDate',
                                'type',
                                'settings',
                              ],
                            }),
                          z
                            .strictObject({
                              name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                              valid: z.boolean(),
                              displayName: z.string(),
                              nextAction: z.any().exactOptional(),
                              lastUpdatedDate: z.string(),
                              type: z.literal('EMPTY'),
                              settings: z.any(),
                            })
                            .openapi({
                              required: [
                                'name',
                                'valid',
                                'displayName',
                                'lastUpdatedDate',
                                'type',
                                'settings',
                              ],
                            }),
                        ]),
                        updatedBy: z.union([z.string(), z.null().nullable()]).exactOptional(),
                        valid: z.boolean(),
                        schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                        agentIds: z.array(z.string()),
                        state: z.enum(['LOCKED', 'DRAFT']),
                        connectionIds: z.array(z.string()),
                        backupFiles: z
                          .union([z.record(z.string(), z.string()), z.null().nullable()])
                          .exactOptional(),
                        notes: z.array(
                          z
                            .strictObject({
                              id: z.string(),
                              content: z.string(),
                              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                              color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                              position: z
                                .strictObject({ x: z.number(), y: z.number() })
                                .openapi({ required: ['x', 'y'] }),
                              size: z
                                .strictObject({ width: z.number(), height: z.number() })
                                .openapi({ required: ['width', 'height'] }),
                              createdAt: z.string(),
                              updatedAt: z.string(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'content',
                                'color',
                                'position',
                                'size',
                                'createdAt',
                                'updatedAt',
                              ],
                            }),
                        ),
                      })
                      .openapi({
                        required: [
                          'id',
                          'created',
                          'updated',
                          'flowId',
                          'displayName',
                          'trigger',
                          'valid',
                          'agentIds',
                          'state',
                          'connectionIds',
                          'notes',
                        ],
                      }),
                    triggerSource: z
                      .strictObject({
                        schedule: z
                          .union([
                            z
                              .strictObject({
                                type: z.literal('CRON_EXPRESSION'),
                                cronExpression: z.string(),
                                timezone: z.string(),
                              })
                              .openapi({ required: ['type', 'cronExpression', 'timezone'] }),
                            z.null().nullable(),
                          ])
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'created',
                      'updated',
                      'projectId',
                      'externalId',
                      'status',
                      'operationStatus',
                      'version',
                    ],
                  }),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1FlowsRoute = createRoute({
  method: 'post',
  path: '/v1/flows',
  tags: ['flows'],
  description: 'Create a flow',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              displayName: z.string(),
              folderId: z.string().exactOptional(),
              folderName: z.string().exactOptional(),
              projectId: z.string(),
              templateId: z.string().exactOptional(),
              metadata: z.record(z.string(), z.any()).exactOptional(),
            })
            .openapi({ required: ['displayName', 'projectId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              projectId: z.string(),
              externalId: z.string(),
              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              status: z.enum(['ENABLED', 'DISABLED']),
              publishedVersionId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              metadata: z
                .union([z.record(z.string(), z.any()), z.null().nullable()])
                .exactOptional(),
              operationStatus: z.enum(['NONE', 'DELETING', 'ENABLING', 'DISABLING']),
              timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
              templateId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              version: z
                .strictObject({
                  id: z.string(),
                  created: z.string(),
                  updated: z.string(),
                  flowId: z.string(),
                  displayName: z.string(),
                  trigger: z.union([
                    z
                      .strictObject({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('PIECE_TRIGGER'),
                        settings: z
                          .strictObject({
                            sampleData: z
                              .strictObject({
                                sampleDataFileId: z.string().exactOptional(),
                                sampleDataInputFileId: z.string().exactOptional(),
                                lastTestDate: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            propertySettings: z.record(
                              z.string(),
                              z
                                .strictObject({
                                  type: z.enum(['MANUAL', 'DYNAMIC']),
                                  schema: z.any().exactOptional(),
                                })
                                .openapi({ required: ['type'] }),
                            ),
                            customLogoUrl: z.string().exactOptional(),
                            pieceName: z.string(),
                            pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                            triggerName: z.string().exactOptional(),
                            input: z.record(z.string(), z.any()),
                          })
                          .openapi({
                            required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                          }),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                    z
                      .strictObject({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('EMPTY'),
                        settings: z.any(),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                  ]),
                  updatedBy: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  valid: z.boolean(),
                  schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  agentIds: z.array(z.string()),
                  state: z.enum(['LOCKED', 'DRAFT']),
                  connectionIds: z.array(z.string()),
                  backupFiles: z
                    .union([z.record(z.string(), z.string()), z.null().nullable()])
                    .exactOptional(),
                  notes: z.array(
                    z
                      .strictObject({
                        id: z.string(),
                        content: z.string(),
                        ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                        color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                        position: z
                          .strictObject({ x: z.number(), y: z.number() })
                          .openapi({ required: ['x', 'y'] }),
                        size: z
                          .strictObject({ width: z.number(), height: z.number() })
                          .openapi({ required: ['width', 'height'] }),
                        createdAt: z.string(),
                        updatedAt: z.string(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'content',
                          'color',
                          'position',
                          'size',
                          'createdAt',
                          'updatedAt',
                        ],
                      }),
                  ),
                })
                .openapi({
                  required: [
                    'id',
                    'created',
                    'updated',
                    'flowId',
                    'displayName',
                    'trigger',
                    'valid',
                    'agentIds',
                    'state',
                    'connectionIds',
                    'notes',
                  ],
                }),
              triggerSource: z
                .strictObject({
                  schedule: z
                    .union([
                      z
                        .strictObject({
                          type: z.literal('CRON_EXPRESSION'),
                          cronExpression: z.string(),
                          timezone: z.string(),
                        })
                        .openapi({ required: ['type', 'cronExpression', 'timezone'] }),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              required: [
                'id',
                'created',
                'updated',
                'projectId',
                'externalId',
                'status',
                'operationStatus',
                'version',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1FlowsIdRoute = createRoute({
  method: 'get',
  path: '/v1/flows/{id}',
  tags: ['flows'],
  description: 'Get a flow by id',
  request: {
    query: z.object({
      versionId: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'versionId', required: false },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              projectId: z.string(),
              externalId: z.string(),
              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              status: z.enum(['ENABLED', 'DISABLED']),
              publishedVersionId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              metadata: z
                .union([z.record(z.string(), z.any()), z.null().nullable()])
                .exactOptional(),
              operationStatus: z.enum(['NONE', 'DELETING', 'ENABLING', 'DISABLING']),
              timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
              templateId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              version: z
                .strictObject({
                  id: z.string(),
                  created: z.string(),
                  updated: z.string(),
                  flowId: z.string(),
                  displayName: z.string(),
                  trigger: z.union([
                    z
                      .strictObject({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('PIECE_TRIGGER'),
                        settings: z
                          .strictObject({
                            sampleData: z
                              .strictObject({
                                sampleDataFileId: z.string().exactOptional(),
                                sampleDataInputFileId: z.string().exactOptional(),
                                lastTestDate: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            propertySettings: z.record(
                              z.string(),
                              z
                                .strictObject({
                                  type: z.enum(['MANUAL', 'DYNAMIC']),
                                  schema: z.any().exactOptional(),
                                })
                                .openapi({ required: ['type'] }),
                            ),
                            customLogoUrl: z.string().exactOptional(),
                            pieceName: z.string(),
                            pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                            triggerName: z.string().exactOptional(),
                            input: z.record(z.string(), z.any()),
                          })
                          .openapi({
                            required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                          }),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                    z
                      .strictObject({
                        name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                        valid: z.boolean(),
                        displayName: z.string(),
                        nextAction: z.any().exactOptional(),
                        lastUpdatedDate: z.string(),
                        type: z.literal('EMPTY'),
                        settings: z.any(),
                      })
                      .openapi({
                        required: [
                          'name',
                          'valid',
                          'displayName',
                          'lastUpdatedDate',
                          'type',
                          'settings',
                        ],
                      }),
                  ]),
                  updatedBy: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  valid: z.boolean(),
                  schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  agentIds: z.array(z.string()),
                  state: z.enum(['LOCKED', 'DRAFT']),
                  connectionIds: z.array(z.string()),
                  backupFiles: z
                    .union([z.record(z.string(), z.string()), z.null().nullable()])
                    .exactOptional(),
                  notes: z.array(
                    z
                      .strictObject({
                        id: z.string(),
                        content: z.string(),
                        ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                        color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                        position: z
                          .strictObject({ x: z.number(), y: z.number() })
                          .openapi({ required: ['x', 'y'] }),
                        size: z
                          .strictObject({ width: z.number(), height: z.number() })
                          .openapi({ required: ['width', 'height'] }),
                        createdAt: z.string(),
                        updatedAt: z.string(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'content',
                          'color',
                          'position',
                          'size',
                          'createdAt',
                          'updatedAt',
                        ],
                      }),
                  ),
                })
                .openapi({
                  required: [
                    'id',
                    'created',
                    'updated',
                    'flowId',
                    'displayName',
                    'trigger',
                    'valid',
                    'agentIds',
                    'state',
                    'connectionIds',
                    'notes',
                  ],
                }),
              triggerSource: z
                .strictObject({
                  schedule: z
                    .union([
                      z
                        .strictObject({
                          type: z.literal('CRON_EXPRESSION'),
                          cronExpression: z.string(),
                          timezone: z.string(),
                        })
                        .openapi({ required: ['type', 'cronExpression', 'timezone'] }),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              required: [
                'id',
                'created',
                'updated',
                'projectId',
                'externalId',
                'status',
                'operationStatus',
                'version',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1FlowsIdRoute = createRoute({
  method: 'post',
  path: '/v1/flows/{id}',
  tags: ['flows'],
  description: 'Apply an operation to a flow',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                type: z.literal('MOVE_ACTION'),
                request: z
                  .object({
                    name: z.string(),
                    newParentStep: z.string(),
                    stepLocationRelativeToNewParent: z
                      .enum(['AFTER', 'INSIDE_LOOP', 'INSIDE_BRANCH'])
                      .exactOptional(),
                    branchIndex: z.number().exactOptional(),
                  })
                  .openapi({ required: ['name', 'newParentStep'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Move Action' }),
            z
              .object({
                type: z.literal('CHANGE_STATUS'),
                request: z
                  .object({ status: z.enum(['ENABLED', 'DISABLED']) })
                  .openapi({ required: ['status'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Change Status' }),
            z
              .object({
                type: z.literal('LOCK_AND_PUBLISH'),
                request: z
                  .object({ status: z.enum(['ENABLED', 'DISABLED']).exactOptional() })
                  .openapi({ required: [] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Lock and Publish' }),
            z
              .object({
                type: z.literal('USE_AS_DRAFT'),
                request: z.object({ versionId: z.string() }).openapi({ required: ['versionId'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Copy as Draft' }),
            z
              .object({ type: z.literal('LOCK_FLOW'), request: z.looseObject({}) })
              .openapi({ required: ['type', 'request'], description: 'Lock Flow' }),
            z
              .object({
                type: z.literal('IMPORT_FLOW'),
                request: z
                  .object({
                    displayName: z.string(),
                    trigger: z.union([
                      z
                        .object({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          nextAction: z.any().exactOptional(),
                          lastUpdatedDate: z.string(),
                          type: z.literal('PIECE_TRIGGER'),
                          settings: z
                            .object({
                              sampleData: z
                                .object({
                                  sampleDataFileId: z.string().exactOptional(),
                                  sampleDataInputFileId: z.string().exactOptional(),
                                  lastTestDate: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              propertySettings: z.record(
                                z.string(),
                                z
                                  .object({
                                    type: z.enum(['MANUAL', 'DYNAMIC']),
                                    schema: z.any().exactOptional(),
                                  })
                                  .openapi({ required: ['type'] }),
                              ),
                              customLogoUrl: z.string().exactOptional(),
                              pieceName: z.string(),
                              pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                              triggerName: z.string().exactOptional(),
                              input: z.record(z.string(), z.any()),
                            })
                            .openapi({
                              required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                            }),
                        })
                        .openapi({
                          required: [
                            'name',
                            'valid',
                            'displayName',
                            'lastUpdatedDate',
                            'type',
                            'settings',
                          ],
                        }),
                      z
                        .object({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          nextAction: z.any().exactOptional(),
                          lastUpdatedDate: z.string(),
                          type: z.literal('EMPTY'),
                          settings: z.any(),
                        })
                        .openapi({
                          required: [
                            'name',
                            'valid',
                            'displayName',
                            'lastUpdatedDate',
                            'type',
                            'settings',
                          ],
                        }),
                    ]),
                    schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    notes: z
                      .union([
                        z.array(
                          z
                            .object({
                              id: z.string(),
                              content: z.string(),
                              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                              color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                              position: z
                                .object({ x: z.number(), y: z.number() })
                                .openapi({ required: ['x', 'y'] }),
                              size: z
                                .object({ width: z.number(), height: z.number() })
                                .openapi({ required: ['width', 'height'] }),
                              createdAt: z.string(),
                              updatedAt: z.string(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'content',
                                'color',
                                'position',
                                'size',
                                'createdAt',
                                'updatedAt',
                              ],
                            }),
                        ),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                  })
                  .openapi({ required: ['displayName', 'trigger'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Import Flow' }),
            z
              .object({
                type: z.literal('CHANGE_NAME'),
                request: z
                  .object({ displayName: z.string() })
                  .openapi({ required: ['displayName'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Change Name' }),
            z
              .object({
                type: z.literal('DELETE_ACTION'),
                request: z.object({ names: z.array(z.string()) }).openapi({ required: ['names'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Delete Action' }),
            z
              .object({
                type: z.literal('UPDATE_ACTION'),
                request: z.union([
                  z
                    .object({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('CODE'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .object({
                          settings: z
                            .object({
                              customLogoUrl: z.string().exactOptional(),
                              sourceCode: z
                                .object({ packageJson: z.string(), code: z.string() })
                                .openapi({ required: ['packageJson', 'code'] }),
                              input: z.record(z.string(), z.any()),
                              errorHandlingOptions: z
                                .object({
                                  continueOnFailure: z
                                    .object({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  retryOnFailure: z
                                    .object({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({ required: ['sourceCode', 'input'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    ),
                  z
                    .object({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('LOOP_ON_ITEMS'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .object({
                          settings: z
                            .object({
                              customLogoUrl: z.string().exactOptional(),
                              items: z.string(),
                            })
                            .openapi({ required: ['items'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    ),
                  z
                    .object({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('PIECE'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .object({
                          settings: z
                            .object({
                              customLogoUrl: z.string().exactOptional(),
                              propertySettings: z.record(
                                z.string(),
                                z
                                  .object({
                                    type: z.enum(['MANUAL', 'DYNAMIC']),
                                    schema: z.any().exactOptional(),
                                  })
                                  .openapi({ required: ['type'] }),
                              ),
                              pieceName: z.string(),
                              pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                              actionName: z.string().exactOptional(),
                              input: z.record(z.string(), z.any()),
                              errorHandlingOptions: z
                                .object({
                                  continueOnFailure: z
                                    .object({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  retryOnFailure: z
                                    .object({ value: z.boolean().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({
                              required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                            }),
                        })
                        .openapi({ required: ['settings'] }),
                    ),
                  z
                    .object({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      skip: z.boolean().exactOptional(),
                      type: z.literal('ROUTER'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .object({
                          settings: z
                            .object({
                              customLogoUrl: z.string().exactOptional(),
                              branches: z.array(
                                z.union([
                                  z
                                    .object({
                                      conditions: z.array(
                                        z.array(
                                          z.union([
                                            z
                                              .object({
                                                firstValue: z.string(),
                                                secondValue: z.string(),
                                                caseSensitive: z.boolean().exactOptional(),
                                                operator: z
                                                  .union([
                                                    z.literal('TEXT_CONTAINS'),
                                                    z.literal('TEXT_DOES_NOT_CONTAIN'),
                                                    z.literal('TEXT_EXACTLY_MATCHES'),
                                                    z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                                    z.literal('TEXT_START_WITH'),
                                                    z.literal('TEXT_DOES_NOT_START_WITH'),
                                                    z.literal('TEXT_ENDS_WITH'),
                                                    z.literal('TEXT_DOES_NOT_END_WITH'),
                                                    z.literal('LIST_CONTAINS'),
                                                    z.literal('LIST_DOES_NOT_CONTAIN'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue', 'secondValue'] }),
                                            z
                                              .object({
                                                firstValue: z.string(),
                                                secondValue: z.string(),
                                                operator: z
                                                  .union([
                                                    z.literal('NUMBER_IS_GREATER_THAN'),
                                                    z.literal('NUMBER_IS_LESS_THAN'),
                                                    z.literal('NUMBER_IS_EQUAL_TO'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue', 'secondValue'] }),
                                            z
                                              .object({
                                                firstValue: z.string(),
                                                secondValue: z.string(),
                                                operator: z
                                                  .union([
                                                    z.literal('DATE_IS_BEFORE'),
                                                    z.literal('DATE_IS_EQUAL'),
                                                    z.literal('DATE_IS_AFTER'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue', 'secondValue'] }),
                                            z
                                              .object({
                                                firstValue: z.string(),
                                                operator: z
                                                  .union([
                                                    z.literal('EXISTS'),
                                                    z.literal('DOES_NOT_EXIST'),
                                                    z.literal('BOOLEAN_IS_TRUE'),
                                                    z.literal('BOOLEAN_IS_FALSE'),
                                                    z.literal('LIST_IS_EMPTY'),
                                                    z.literal('LIST_IS_NOT_EMPTY'),
                                                  ])
                                                  .exactOptional(),
                                              })
                                              .openapi({ required: ['firstValue'] }),
                                          ]),
                                        ),
                                      ),
                                      branchType: z.literal('CONDITION'),
                                      branchName: z.string(),
                                    })
                                    .openapi({
                                      required: ['conditions', 'branchType', 'branchName'],
                                    }),
                                  z
                                    .object({
                                      branchType: z.literal('FALLBACK'),
                                      branchName: z.string(),
                                    })
                                    .openapi({ required: ['branchType', 'branchName'] }),
                                ]),
                              ),
                              executionType: z.enum(['EXECUTE_ALL_MATCH', 'EXECUTE_FIRST_MATCH']),
                            })
                            .openapi({ required: ['branches', 'executionType'] }),
                        })
                        .openapi({ required: ['settings'] }),
                    ),
                ]),
              })
              .openapi({ required: ['type', 'request'], description: 'Update Action' }),
            z
              .object({
                type: z.literal('ADD_ACTION'),
                request: z
                  .object({
                    parentStep: z.string(),
                    stepLocationRelativeToParent: z
                      .enum(['AFTER', 'INSIDE_LOOP', 'INSIDE_BRANCH'])
                      .exactOptional(),
                    branchIndex: z.number().exactOptional(),
                    action: z.union([
                      z
                        .object({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('CODE'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .object({
                              settings: z
                                .object({
                                  customLogoUrl: z.string().exactOptional(),
                                  sourceCode: z
                                    .object({ packageJson: z.string(), code: z.string() })
                                    .openapi({ required: ['packageJson', 'code'] }),
                                  input: z.record(z.string(), z.any()),
                                  errorHandlingOptions: z
                                    .object({
                                      continueOnFailure: z
                                        .object({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      retryOnFailure: z
                                        .object({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({ required: ['sourceCode', 'input'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        ),
                      z
                        .object({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('LOOP_ON_ITEMS'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .object({
                              settings: z
                                .object({
                                  customLogoUrl: z.string().exactOptional(),
                                  items: z.string(),
                                })
                                .openapi({ required: ['items'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        ),
                      z
                        .object({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('PIECE'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .object({
                              settings: z
                                .object({
                                  customLogoUrl: z.string().exactOptional(),
                                  propertySettings: z.record(
                                    z.string(),
                                    z
                                      .object({
                                        type: z.enum(['MANUAL', 'DYNAMIC']),
                                        schema: z.any().exactOptional(),
                                      })
                                      .openapi({ required: ['type'] }),
                                  ),
                                  pieceName: z.string(),
                                  pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                  actionName: z.string().exactOptional(),
                                  input: z.record(z.string(), z.any()),
                                  errorHandlingOptions: z
                                    .object({
                                      continueOnFailure: z
                                        .object({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      retryOnFailure: z
                                        .object({ value: z.boolean().exactOptional() })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({
                                  required: [
                                    'propertySettings',
                                    'pieceName',
                                    'pieceVersion',
                                    'input',
                                  ],
                                }),
                            })
                            .openapi({ required: ['settings'] }),
                        ),
                      z
                        .object({
                          name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                          valid: z.boolean(),
                          displayName: z.string(),
                          skip: z.boolean().exactOptional(),
                          type: z.literal('ROUTER'),
                        })
                        .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                        .and(
                          z
                            .object({
                              settings: z
                                .object({
                                  customLogoUrl: z.string().exactOptional(),
                                  branches: z.array(
                                    z.union([
                                      z
                                        .object({
                                          conditions: z.array(
                                            z.array(
                                              z.union([
                                                z
                                                  .object({
                                                    firstValue: z.string(),
                                                    secondValue: z.string(),
                                                    caseSensitive: z.boolean().exactOptional(),
                                                    operator: z
                                                      .union([
                                                        z.literal('TEXT_CONTAINS'),
                                                        z.literal('TEXT_DOES_NOT_CONTAIN'),
                                                        z.literal('TEXT_EXACTLY_MATCHES'),
                                                        z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                                        z.literal('TEXT_START_WITH'),
                                                        z.literal('TEXT_DOES_NOT_START_WITH'),
                                                        z.literal('TEXT_ENDS_WITH'),
                                                        z.literal('TEXT_DOES_NOT_END_WITH'),
                                                        z.literal('LIST_CONTAINS'),
                                                        z.literal('LIST_DOES_NOT_CONTAIN'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({
                                                    required: ['firstValue', 'secondValue'],
                                                  }),
                                                z
                                                  .object({
                                                    firstValue: z.string(),
                                                    secondValue: z.string(),
                                                    operator: z
                                                      .union([
                                                        z.literal('NUMBER_IS_GREATER_THAN'),
                                                        z.literal('NUMBER_IS_LESS_THAN'),
                                                        z.literal('NUMBER_IS_EQUAL_TO'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({
                                                    required: ['firstValue', 'secondValue'],
                                                  }),
                                                z
                                                  .object({
                                                    firstValue: z.string(),
                                                    secondValue: z.string(),
                                                    operator: z
                                                      .union([
                                                        z.literal('DATE_IS_BEFORE'),
                                                        z.literal('DATE_IS_EQUAL'),
                                                        z.literal('DATE_IS_AFTER'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({
                                                    required: ['firstValue', 'secondValue'],
                                                  }),
                                                z
                                                  .object({
                                                    firstValue: z.string(),
                                                    operator: z
                                                      .union([
                                                        z.literal('EXISTS'),
                                                        z.literal('DOES_NOT_EXIST'),
                                                        z.literal('BOOLEAN_IS_TRUE'),
                                                        z.literal('BOOLEAN_IS_FALSE'),
                                                        z.literal('LIST_IS_EMPTY'),
                                                        z.literal('LIST_IS_NOT_EMPTY'),
                                                      ])
                                                      .exactOptional(),
                                                  })
                                                  .openapi({ required: ['firstValue'] }),
                                              ]),
                                            ),
                                          ),
                                          branchType: z.literal('CONDITION'),
                                          branchName: z.string(),
                                        })
                                        .openapi({
                                          required: ['conditions', 'branchType', 'branchName'],
                                        }),
                                      z
                                        .object({
                                          branchType: z.literal('FALLBACK'),
                                          branchName: z.string(),
                                        })
                                        .openapi({ required: ['branchType', 'branchName'] }),
                                    ]),
                                  ),
                                  executionType: z.enum([
                                    'EXECUTE_ALL_MATCH',
                                    'EXECUTE_FIRST_MATCH',
                                  ]),
                                })
                                .openapi({ required: ['branches', 'executionType'] }),
                            })
                            .openapi({ required: ['settings'] }),
                        ),
                    ]),
                  })
                  .openapi({ required: ['parentStep', 'action'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Add Action' }),
            z
              .object({
                type: z.literal('UPDATE_TRIGGER'),
                request: z.union([
                  z
                    .object({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      nextAction: z.any().exactOptional(),
                      type: z.literal('EMPTY'),
                      settings: z.any(),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type', 'settings'] }),
                  z
                    .object({
                      name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                      valid: z.boolean(),
                      displayName: z.string(),
                      nextAction: z.any().exactOptional(),
                      type: z.literal('PIECE_TRIGGER'),
                    })
                    .openapi({ required: ['name', 'valid', 'displayName', 'type'] })
                    .and(
                      z
                        .object({
                          settings: z
                            .object({
                              propertySettings: z.record(
                                z.string(),
                                z
                                  .object({
                                    type: z.enum(['MANUAL', 'DYNAMIC']),
                                    schema: z.any().exactOptional(),
                                  })
                                  .openapi({ required: ['type'] }),
                              ),
                              customLogoUrl: z.string().exactOptional(),
                              pieceName: z.string(),
                              pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                              triggerName: z.string().exactOptional(),
                              input: z.record(z.string(), z.any()),
                            })
                            .openapi({
                              required: ['propertySettings', 'pieceName', 'pieceVersion', 'input'],
                            }),
                        })
                        .openapi({ required: ['settings'] }),
                    ),
                ]),
              })
              .openapi({ required: ['type', 'request'], description: 'Update Trigger' }),
            z
              .object({
                type: z.literal('CHANGE_FOLDER'),
                request: z
                  .object({ folderId: z.union([z.string(), z.null().nullable()]).exactOptional() })
                  .openapi({ required: [] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Change Folder' }),
            z
              .object({
                type: z.literal('DUPLICATE_ACTION'),
                request: z.object({ stepName: z.string() }).openapi({ required: ['stepName'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Duplicate Action' }),
            z
              .object({
                type: z.literal('DELETE_BRANCH'),
                request: z
                  .object({ branchIndex: z.number(), stepName: z.string() })
                  .openapi({ required: ['branchIndex', 'stepName'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Delete Branch' }),
            z
              .object({
                type: z.literal('ADD_BRANCH'),
                request: z
                  .object({
                    branchIndex: z.number(),
                    stepName: z.string(),
                    conditions: z
                      .array(
                        z.array(
                          z.union([
                            z
                              .object({
                                firstValue: z.string(),
                                secondValue: z.string(),
                                caseSensitive: z.boolean().exactOptional(),
                                operator: z
                                  .union([
                                    z.literal('TEXT_CONTAINS'),
                                    z.literal('TEXT_DOES_NOT_CONTAIN'),
                                    z.literal('TEXT_EXACTLY_MATCHES'),
                                    z.literal('TEXT_DOES_NOT_EXACTLY_MATCH'),
                                    z.literal('TEXT_START_WITH'),
                                    z.literal('TEXT_DOES_NOT_START_WITH'),
                                    z.literal('TEXT_ENDS_WITH'),
                                    z.literal('TEXT_DOES_NOT_END_WITH'),
                                    z.literal('LIST_CONTAINS'),
                                    z.literal('LIST_DOES_NOT_CONTAIN'),
                                  ])
                                  .exactOptional(),
                              })
                              .openapi({ required: ['firstValue', 'secondValue'] }),
                            z
                              .object({
                                firstValue: z.string(),
                                secondValue: z.string(),
                                operator: z
                                  .union([
                                    z.literal('NUMBER_IS_GREATER_THAN'),
                                    z.literal('NUMBER_IS_LESS_THAN'),
                                    z.literal('NUMBER_IS_EQUAL_TO'),
                                  ])
                                  .exactOptional(),
                              })
                              .openapi({ required: ['firstValue', 'secondValue'] }),
                            z
                              .object({
                                firstValue: z.string(),
                                secondValue: z.string(),
                                operator: z
                                  .union([
                                    z.literal('DATE_IS_BEFORE'),
                                    z.literal('DATE_IS_EQUAL'),
                                    z.literal('DATE_IS_AFTER'),
                                  ])
                                  .exactOptional(),
                              })
                              .openapi({ required: ['firstValue', 'secondValue'] }),
                            z
                              .object({
                                firstValue: z.string(),
                                operator: z
                                  .union([
                                    z.literal('EXISTS'),
                                    z.literal('DOES_NOT_EXIST'),
                                    z.literal('BOOLEAN_IS_TRUE'),
                                    z.literal('BOOLEAN_IS_FALSE'),
                                    z.literal('LIST_IS_EMPTY'),
                                    z.literal('LIST_IS_NOT_EMPTY'),
                                  ])
                                  .exactOptional(),
                              })
                              .openapi({ required: ['firstValue'] }),
                          ]),
                        ),
                      )
                      .exactOptional(),
                    branchName: z.string(),
                  })
                  .openapi({ required: ['branchIndex', 'stepName', 'branchName'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Add Branch' }),
            z
              .object({
                type: z.literal('DUPLICATE_BRANCH'),
                request: z
                  .object({ branchIndex: z.number(), stepName: z.string() })
                  .openapi({ required: ['branchIndex', 'stepName'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Duplicate Branch' }),
            z
              .object({
                type: z.literal('SET_SKIP_ACTION'),
                request: z
                  .object({ names: z.array(z.string()), skip: z.boolean() })
                  .openapi({ required: ['names', 'skip'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Skip Action' }),
            z
              .object({
                type: z.literal('UPDATE_METADATA'),
                request: z
                  .object({
                    metadata: z
                      .union([z.record(z.string(), z.any()), z.null().nullable()])
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Update Metadata' }),
            z
              .object({
                type: z.literal('MOVE_BRANCH'),
                request: z
                  .object({
                    sourceBranchIndex: z.number(),
                    targetBranchIndex: z.number(),
                    stepName: z.string(),
                  })
                  .openapi({ required: ['sourceBranchIndex', 'targetBranchIndex', 'stepName'] }),
              })
              .openapi({ required: ['type', 'request'] }),
            z
              .object({
                type: z.literal('SAVE_SAMPLE_DATA'),
                request: z
                  .object({
                    stepName: z.string(),
                    payload: z.any(),
                    type: z.enum(['INPUT', 'OUTPUT']),
                  })
                  .openapi({ required: ['stepName', 'payload', 'type'] }),
              })
              .openapi({ required: ['type', 'request'] }),
            z
              .object({
                type: z.literal('UPDATE_MINUTES_SAVED'),
                request: z
                  .object({
                    timeSavedPerRun: z.union([z.number(), z.null().nullable()]).exactOptional(),
                  })
                  .openapi({ required: [] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Update Minutes Saved' }),
            z
              .object({
                type: z.literal('UPDATE_OWNER'),
                request: z.object({ ownerId: z.string() }).openapi({ required: ['ownerId'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Update Owner' }),
            z
              .object({
                type: z.literal('UPDATE_NOTE'),
                request: z
                  .object({
                    id: z.string(),
                    content: z.string(),
                    ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                    position: z
                      .object({ x: z.number(), y: z.number() })
                      .openapi({ required: ['x', 'y'] }),
                    size: z
                      .object({ width: z.number(), height: z.number() })
                      .openapi({ required: ['width', 'height'] }),
                  })
                  .openapi({ required: ['id', 'content', 'color', 'position', 'size'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Update Note' }),
            z
              .object({
                type: z.literal('DELETE_NOTE'),
                request: z.object({ id: z.string() }).openapi({ required: ['id'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Delete Note' }),
            z
              .object({
                type: z.literal('ADD_NOTE'),
                request: z
                  .object({
                    id: z.string(),
                    content: z.string(),
                    color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                    position: z
                      .object({ x: z.number(), y: z.number() })
                      .openapi({ required: ['x', 'y'] }),
                    size: z
                      .object({ width: z.number(), height: z.number() })
                      .openapi({ required: ['width', 'height'] }),
                  })
                  .openapi({ required: ['id', 'content', 'color', 'position', 'size'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Add Note' }),
            z
              .object({
                type: z.literal('UPDATE_SAMPLE_DATA_INFO'),
                request: z
                  .object({
                    stepName: z.string(),
                    sampleDataSettings: z
                      .union([
                        z
                          .object({
                            sampleDataFileId: z.string().exactOptional(),
                            sampleDataInputFileId: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                  })
                  .openapi({ required: ['stepName'] }),
              })
              .openapi({ required: ['type', 'request'], description: 'Update Sample Data Info' }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1FlowsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/flows/{id}',
  tags: ['flows'],
  description: 'Delete a flow',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1FlowsIdTemplateRoute = createRoute({
  method: 'get',
  path: '/v1/flows/{id}/template',
  tags: ['flows'],
  description: 'Export flow as template',
  request: {
    query: z.object({
      versionId: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'versionId', required: false },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string(),
              type: z.enum(['OFFICIAL', 'SHARED', 'CUSTOM']),
              summary: z.string(),
              description: z.string(),
              tags: z.array(
                z
                  .strictObject({
                    title: z.string(),
                    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
                    icon: z.string().exactOptional(),
                  })
                  .openapi({ required: ['title', 'color'] }),
              ),
              blogUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
              metadata: z
                .union([z.record(z.string(), z.any()), z.null().nullable()])
                .exactOptional(),
              author: z.string(),
              categories: z.array(z.string()),
              pieces: z.array(z.string()),
              flows: z
                .array(
                  z
                    .strictObject({
                      displayName: z.string(),
                      trigger: z.union([
                        z
                          .strictObject({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('PIECE_TRIGGER'),
                            settings: z
                              .strictObject({
                                sampleData: z
                                  .strictObject({
                                    sampleDataFileId: z.string().exactOptional(),
                                    sampleDataInputFileId: z.string().exactOptional(),
                                    lastTestDate: z.string().exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                propertySettings: z.record(
                                  z.string(),
                                  z
                                    .strictObject({
                                      type: z.enum(['MANUAL', 'DYNAMIC']),
                                      schema: z.any().exactOptional(),
                                    })
                                    .openapi({ required: ['type'] }),
                                ),
                                customLogoUrl: z.string().exactOptional(),
                                pieceName: z.string(),
                                pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                triggerName: z.string().exactOptional(),
                                input: z.record(z.string(), z.any()),
                              })
                              .openapi({
                                required: [
                                  'propertySettings',
                                  'pieceName',
                                  'pieceVersion',
                                  'input',
                                ],
                              }),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                        z
                          .strictObject({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('EMPTY'),
                            settings: z.any(),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                      ]),
                      valid: z.boolean(),
                      schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      description: z.string().exactOptional(),
                      notes: z
                        .array(
                          z
                            .strictObject({
                              id: z.string(),
                              content: z.string(),
                              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                              color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                              position: z
                                .strictObject({ x: z.number(), y: z.number() })
                                .openapi({ required: ['x', 'y'] }),
                              size: z
                                .strictObject({ width: z.number(), height: z.number() })
                                .openapi({ required: ['width', 'height'] }),
                              createdAt: z.string(),
                              updatedAt: z.string(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'content',
                                'color',
                                'position',
                                'size',
                                'createdAt',
                                'updatedAt',
                              ],
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'trigger', 'valid'] }),
                )
                .exactOptional(),
              tables: z
                .array(
                  z
                    .strictObject({
                      name: z.string(),
                      externalId: z.string(),
                      fields: z.array(
                        z
                          .strictObject({
                            name: z.string(),
                            type: z.string(),
                            data: z
                              .union([
                                z
                                  .strictObject({
                                    options: z.array(
                                      z
                                        .strictObject({ value: z.string() })
                                        .openapi({ required: ['value'] }),
                                    ),
                                  })
                                  .openapi({ required: ['options'] }),
                                z.null().nullable(),
                              ])
                              .exactOptional(),
                            externalId: z.string(),
                          })
                          .openapi({ required: ['name', 'type', 'externalId'] }),
                      ),
                      status: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      trigger: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      data: z
                        .union([
                          z
                            .strictObject({
                              type: z.literal('CSV'),
                              rows: z.array(
                                z.array(
                                  z
                                    .strictObject({ fieldId: z.string(), value: z.string() })
                                    .openapi({ required: ['fieldId', 'value'] }),
                                ),
                              ),
                            })
                            .openapi({ required: ['type', 'rows'] }),
                          z.null().nullable(),
                        ])
                        .exactOptional(),
                    })
                    .openapi({ required: ['name', 'externalId', 'fields'] }),
                )
                .exactOptional(),
              status: z.enum(['PUBLISHED', 'ARCHIVED']),
            })
            .openapi({
              required: [
                'name',
                'type',
                'summary',
                'description',
                'tags',
                'author',
                'categories',
                'pieces',
                'status',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1SampleDataTestStepRoute = createRoute({
  method: 'post',
  path: '/v1/sample-data/test-step',
  tags: ['sample-data'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ projectId: z.string(), flowVersionId: z.string(), stepName: z.string() })
            .openapi({ required: ['projectId', 'flowVersionId', 'stepName'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1SampleDataRoute = createRoute({
  method: 'get',
  path: '/v1/sample-data',
  tags: ['sample-data'],
  request: {
    query: z.object({
      flowId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'flowId', required: true },
        }),
      flowVersionId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'flowVersionId', required: true },
        }),
      stepName: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'stepName', required: true },
        }),
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
      type: z
        .enum(['INPUT', 'OUTPUT'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['INPUT', 'OUTPUT'] },
            in: 'query',
            name: 'type',
            required: true,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1FlowRunsRoute = createRoute({
  method: 'get',
  path: '/v1/flow-runs',
  tags: ['flow-runs'],
  description: 'List Flow Runs',
  request: {
    query: z.object({
      flowId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' } },
            in: 'query',
            name: 'flowId',
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'tags',
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'FAILED',
              'QUOTA_EXCEEDED',
              'INTERNAL_ERROR',
              'PAUSED',
              'QUEUED',
              'RUNNING',
              'SUCCEEDED',
              'MEMORY_LIMIT_EXCEEDED',
              'TIMEOUT',
              'CANCELED',
              'LOG_SIZE_EXCEEDED',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'FAILED',
                  'QUOTA_EXCEEDED',
                  'INTERNAL_ERROR',
                  'PAUSED',
                  'QUEUED',
                  'RUNNING',
                  'SUCCEEDED',
                  'MEMORY_LIMIT_EXCEEDED',
                  'TIMEOUT',
                  'CANCELED',
                  'LOG_SIZE_EXCEEDED',
                ],
              },
            },
            in: 'query',
            name: 'status',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'createdAfter', required: false },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'createdBefore',
            required: false,
          },
        }),
      projectId: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'query',
            name: 'projectId',
            required: true,
          },
        }),
      failedStepName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'failedStepName',
            required: false,
          },
        }),
      flowRunIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' } },
            in: 'query',
            name: 'flowRunIds',
            required: false,
          },
        }),
      includeArchived: z
        .stringbool()
        .openapi({
          param: {
            schema: { type: 'boolean' },
            in: 'query',
            name: 'includeArchived',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    id: z.string(),
                    created: z.string(),
                    updated: z.string(),
                    projectId: z.string(),
                    flowId: z.string(),
                    parentRunId: z.string().exactOptional(),
                    failParentOnFailure: z.boolean(),
                    triggeredBy: z.string().exactOptional(),
                    tags: z.array(z.string()).exactOptional(),
                    flowVersionId: z.string(),
                    flowVersion: z
                      .strictObject({ displayName: z.string().exactOptional() })
                      .exactOptional()
                      .openapi({ required: [] }),
                    logsFileId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    status: z.enum([
                      'FAILED',
                      'QUOTA_EXCEEDED',
                      'INTERNAL_ERROR',
                      'PAUSED',
                      'QUEUED',
                      'RUNNING',
                      'SUCCEEDED',
                      'MEMORY_LIMIT_EXCEEDED',
                      'TIMEOUT',
                      'CANCELED',
                      'LOG_SIZE_EXCEEDED',
                    ]),
                    startTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    finishTime: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    environment: z.enum(['PRODUCTION', 'TESTING']),
                    failedStep: z
                      .strictObject({ name: z.string(), displayName: z.string() })
                      .exactOptional()
                      .openapi({ required: ['name', 'displayName'] }),
                    stepNameToTest: z.string().exactOptional(),
                    archivedAt: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    stepsCount: z.number().exactOptional(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'created',
                      'updated',
                      'projectId',
                      'flowId',
                      'failParentOnFailure',
                      'flowVersionId',
                      'status',
                      'environment',
                    ],
                  }),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1FlowRunsCountByStatusRoute = createRoute({
  method: 'get',
  path: '/v1/flow-runs/count-by-status',
  tags: ['flow-runs'],
  description: 'Count Flow Runs by Status',
  request: {
    query: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'query',
            name: 'projectId',
            required: true,
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'createdAfter', required: false },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'createdBefore',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    status: z.enum([
                      'FAILED',
                      'QUOTA_EXCEEDED',
                      'INTERNAL_ERROR',
                      'PAUSED',
                      'QUEUED',
                      'RUNNING',
                      'SUCCEEDED',
                      'MEMORY_LIMIT_EXCEEDED',
                      'TIMEOUT',
                      'CANCELED',
                      'LOG_SIZE_EXCEEDED',
                    ]),
                    count: z.number(),
                  })
                  .openapi({ required: ['status', 'count'] }),
              ),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1FlowRunsIdRoute = createRoute({
  method: 'get',
  path: '/v1/flow-runs/{id}',
  tags: ['flow-runs'],
  description: 'Get Flow Run',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: { 'application/json': { schema: FlowRunSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1FlowRunsCancelRoute = createRoute({
  method: 'post',
  path: '/v1/flow-runs/cancel',
  tags: ['flow-runs'],
  description: 'Cancel multiple paused/queued flow runs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              projectId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
              flowRunIds: z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)).exactOptional(),
              excludeFlowRunIds: z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)).exactOptional(),
              status: z.array(z.union([z.literal('PAUSED'), z.literal('QUEUED')])).exactOptional(),
              flowId: z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)).exactOptional(),
              createdAfter: z.string().exactOptional(),
              createdBefore: z.string().exactOptional(),
            })
            .openapi({ required: ['projectId'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1AppConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/app-connections',
  tags: ['app-connections'],
  description: 'List app connections',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
      scope: z
        .enum(['PROJECT', 'PLATFORM'])
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['PROJECT', 'PLATFORM'] },
            in: 'query',
            name: 'scope',
            required: false,
          },
        }),
      pieceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'pieceName',
            required: false,
          },
        }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'displayName', required: false },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ACTIVE', 'MISSING', 'ERROR'])),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['ACTIVE', 'MISSING', 'ERROR'] },
            },
            in: 'query',
            name: 'status',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(AppConnectionSchema),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AppConnectionsRoute = createRoute({
  method: 'post',
  path: '/v1/app-connections',
  tags: ['app-connections'],
  description: 'Upsert an app connection based on the app name',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('SECRET_TEXT'),
                value: z
                  .object({ type: z.literal('SECRET_TEXT'), secret_text: z.string().min(1) })
                  .openapi({ required: ['type', 'secret_text'] }),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type', 'value'],
                description: 'Secret Text',
              }),
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('OAUTH2'),
                value: z
                  .object({
                    client_id: z.string().min(1),
                    code: z.string().min(1),
                    code_challenge: z.string().exactOptional(),
                    scope: z.string(),
                    authorization_method: z.enum(['HEADER', 'BODY']).exactOptional(),
                    client_secret: z.string().min(1),
                    grant_type: z
                      .enum(['authorization_code', 'client_credentials'])
                      .exactOptional(),
                    props: z.record(z.string(), z.any()).exactOptional(),
                    redirect_url: z.string().min(1),
                    type: z.literal('OAUTH2'),
                  })
                  .openapi({
                    required: [
                      'client_id',
                      'code',
                      'scope',
                      'client_secret',
                      'redirect_url',
                      'type',
                    ],
                  }),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type', 'value'],
                description: 'OAuth2',
              }),
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('CLOUD_OAUTH2'),
                value: z
                  .object({
                    client_id: z.string().min(1),
                    code: z.string().min(1),
                    code_challenge: z.string().exactOptional(),
                    scope: z.string(),
                    authorization_method: z.enum(['HEADER', 'BODY']).exactOptional(),
                    props: z.record(z.string(), z.any()).exactOptional(),
                    type: z.literal('CLOUD_OAUTH2'),
                  })
                  .openapi({ required: ['client_id', 'code', 'scope', 'type'] }),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type', 'value'],
                description: 'Cloud OAuth2',
              }),
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('PLATFORM_OAUTH2'),
                value: z
                  .object({
                    client_id: z.string().min(1),
                    code: z.string().min(1),
                    code_challenge: z.string().exactOptional(),
                    scope: z.string(),
                    authorization_method: z.enum(['HEADER', 'BODY']).exactOptional(),
                    props: z.record(z.string(), z.any()).exactOptional(),
                    type: z.literal('PLATFORM_OAUTH2'),
                    redirect_url: z.string().min(1),
                  })
                  .openapi({ required: ['client_id', 'code', 'scope', 'type', 'redirect_url'] }),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type', 'value'],
                description: 'Platform OAuth2',
              }),
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('BASIC_AUTH'),
                value: z
                  .object({
                    username: z.string().min(1),
                    password: z.string().min(1),
                    type: z.literal('BASIC_AUTH'),
                  })
                  .openapi({ required: ['username', 'password', 'type'] }),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type', 'value'],
                description: 'Basic Auth',
              }),
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('CUSTOM_AUTH'),
                value: z
                  .object({ type: z.literal('CUSTOM_AUTH'), props: z.record(z.string(), z.any()) })
                  .openapi({ required: ['type', 'props'] }),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type', 'value'],
                description: 'Custom Auth',
              }),
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('NO_AUTH'),
                value: z.object({ type: z.literal('NO_AUTH') }).openapi({ required: ['type'] }),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type', 'value'],
                description: 'No Auth',
              }),
            z
              .object({
                externalId: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('PLACEHOLDER'),
              })
              .openapi({
                required: ['externalId', 'displayName', 'pieceName', 'projectId', 'type'],
                description: 'Placeholder',
              }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1AppConnectionsIdRoute = createRoute({
  method: 'get',
  path: '/v1/app-connections/{id}',
  tags: ['app-connections'],
  description: 'Get an app connection by id',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: { 'application/json': { schema: AppConnectionSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AppConnectionsIdRoute = createRoute({
  method: 'post',
  path: '/v1/app-connections/{id}',
  tags: ['app-connections'],
  description: 'Update an app connection value',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              displayName: z.string().min(1),
              metadata: z.record(z.string(), z.any()).exactOptional(),
            })
            .openapi({ required: ['displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1AppConnectionsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/app-connections/{id}',
  tags: ['app-connections'],
  description: 'Delete an app connection',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AppConnectionsOwnersRoute = createRoute({
  method: 'get',
  path: '/v1/app-connections/owners',
  tags: ['app-connections'],
  description: 'List app connection owners',
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({ firstName: z.string(), lastName: z.string(), email: z.string() })
                  .openapi({ required: ['firstName', 'lastName', 'email'] }),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AppConnectionsReplaceRoute = createRoute({
  method: 'post',
  path: '/v1/app-connections/replace',
  tags: ['app-connections'],
  description: 'Replace app connections',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sourceAppConnectionId: z.string(),
              targetAppConnectionId: z.string(),
              projectId: z.string(),
            })
            .openapi({ required: ['sourceAppConnectionId', 'targetAppConnectionId', 'projectId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AppConnectionsOauth2AuthorizationUrlRoute = createRoute({
  method: 'post',
  path: '/v1/app-connections/oauth2/authorization-url',
  tags: ['app-connections'],
  description: 'Get OAuth2 authorization URL',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              pieceName: z.string(),
              pieceVersion: z.string().exactOptional(),
              projectId: z.string().exactOptional(),
              clientId: z.string(),
              redirectUrl: z.string(),
              props: z.record(z.string(), z.any()).exactOptional(),
            })
            .openapi({ required: ['pieceName', 'clientId', 'redirectUrl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              authorizationUrl: z.string(),
              codeVerifier: z.string().exactOptional(),
            })
            .openapi({ required: ['authorizationUrl'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1VariablesRoute = createRoute({
  method: 'get',
  path: '/v1/variables',
  tags: ['variables'],
  description: 'List project variables',
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'name', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(VariableSchema),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1VariablesRoute = createRoute({
  method: 'post',
  path: '/v1/variables',
  tags: ['variables'],
  description: 'Create a project variable. Fails if a variable with the same name already exists.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              projectId: z.string(),
              name: z
                .string()
                .regex(/^[a-zA-Z0-9_]+$/)
                .min(1),
              value: z.string().min(1),
              metadata: z.record(z.string(), z.any()).exactOptional(),
            })
            .openapi({ required: ['projectId', 'name', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: { 'application/json': { schema: VariableSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1VariablesIdRoute = createRoute({
  method: 'post',
  path: '/v1/variables/{id}',
  tags: ['variables'],
  description: 'Update a project variable value or metadata. Name cannot be changed.',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              value: z.string().min(1).exactOptional(),
              metadata: z.record(z.string(), z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: { 'application/json': { schema: VariableSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1VariablesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/variables/{id}',
  tags: ['variables'],
  description: 'Delete a project variable',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1PlatformsIdRoute = createRoute({
  method: 'get',
  path: '/v1/platforms/{id}',
  tags: ['platforms'],
  description: 'Get a platform by id',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              federatedAuthProviders: z
                .union([
                  z
                    .strictObject({
                      saml: z.union([z.strictObject({}), z.null().nullable()]).exactOptional(),
                    })
                    .openapi({ required: [] }),
                  z.null().nullable(),
                ])
                .exactOptional(),
              plan: z
                .strictObject({
                  plan: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  includedAiCredits: z.number(),
                  lastFreeAiCreditsRenewalDate: z
                    .union([z.string(), z.null().nullable()])
                    .exactOptional(),
                  tablesEnabled: z.boolean(),
                  eventStreamingEnabled: z.boolean(),
                  aiCreditsAutoTopUpState: z.enum(['enabled', 'disabled']),
                  aiCreditsAutoTopUpThreshold: z
                    .union([z.number(), z.null().nullable()])
                    .exactOptional(),
                  aiCreditsAutoTopUpCreditsToAdd: z
                    .union([z.number(), z.null().nullable()])
                    .exactOptional(),
                  maxAutoTopUpCreditsMonthly: z
                    .union([z.number(), z.null().nullable()])
                    .exactOptional(),
                  environmentsEnabled: z.boolean(),
                  analyticsEnabled: z.boolean(),
                  showPoweredBy: z.boolean(),
                  auditLogEnabled: z.boolean(),
                  embeddingEnabled: z.boolean(),
                  agentsEnabled: z.boolean(),
                  aiProvidersEnabled: z.boolean(),
                  chatEnabled: z.boolean(),
                  managePiecesEnabled: z.boolean(),
                  manageTemplatesEnabled: z.boolean(),
                  customAppearanceEnabled: z.boolean(),
                  teamProjectsLimit: z.enum(['NONE', 'ONE', 'UNLIMITED']),
                  projectRolesEnabled: z.boolean(),
                  globalConnectionsEnabled: z.boolean(),
                  customRolesEnabled: z.boolean(),
                  apiKeysEnabled: z.boolean(),
                  ssoEnabled: z.boolean(),
                  secretManagersEnabled: z.boolean(),
                  scimEnabled: z.boolean(),
                  licenseKey: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  licenseExpiresAt: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  stripeCustomerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  stripeSubscriptionId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                  stripeSubscriptionStatus: z
                    .union([z.string(), z.null().nullable()])
                    .exactOptional(),
                  stripeSubscriptionStartDate: z
                    .union([z.number(), z.null().nullable()])
                    .exactOptional(),
                  stripeSubscriptionEndDate: z
                    .union([z.number(), z.null().nullable()])
                    .exactOptional(),
                  stripeSubscriptionCancelDate: z
                    .union([z.number(), z.null().nullable()])
                    .exactOptional(),
                  projectsLimit: z.union([z.number(), z.null().nullable()]).exactOptional(),
                  activeFlowsLimit: z.union([z.number(), z.null().nullable()]).exactOptional(),
                  dedicatedWorkers: z
                    .union([
                      z
                        .strictObject({ trustedEnvironment: z.boolean() })
                        .openapi({ required: ['trustedEnvironment'] }),
                      z.null().nullable(),
                    ])
                    .exactOptional(),
                  canary: z.boolean(),
                  customDomainsEnabled: z.boolean(),
                  workerGroupId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                })
                .openapi({
                  required: [
                    'includedAiCredits',
                    'tablesEnabled',
                    'eventStreamingEnabled',
                    'aiCreditsAutoTopUpState',
                    'environmentsEnabled',
                    'analyticsEnabled',
                    'showPoweredBy',
                    'auditLogEnabled',
                    'embeddingEnabled',
                    'agentsEnabled',
                    'aiProvidersEnabled',
                    'chatEnabled',
                    'managePiecesEnabled',
                    'manageTemplatesEnabled',
                    'customAppearanceEnabled',
                    'teamProjectsLimit',
                    'projectRolesEnabled',
                    'globalConnectionsEnabled',
                    'customRolesEnabled',
                    'apiKeysEnabled',
                    'ssoEnabled',
                    'secretManagersEnabled',
                    'scimEnabled',
                    'canary',
                    'customDomainsEnabled',
                  ],
                }),
              usage: z
                .strictObject({
                  totalAiCreditsUsed: z.number(),
                  totalAiCreditsUsedThisMonth: z.number(),
                  aiCreditsRemaining: z.number(),
                  aiCreditsLimit: z.number(),
                  activeFlows: z.number(),
                })
                .exactOptional()
                .openapi({
                  required: [
                    'totalAiCreditsUsed',
                    'totalAiCreditsUsedThisMonth',
                    'aiCreditsRemaining',
                    'aiCreditsLimit',
                    'activeFlows',
                  ],
                }),
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              ownerId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
              name: z.string(),
              primaryColor: z.string(),
              logoIconUrl: z.string(),
              fullLogoUrl: z.string(),
              favIconUrl: z.string(),
              filteredPieceNames: z.array(z.string()),
              filteredPieceBehavior: z.enum(['ALLOWED', 'BLOCKED']),
              cloudAuthEnabled: z.boolean(),
              googleAuthEnabled: z.boolean(),
              enforceAllowedAuthDomains: z.boolean(),
              allowedAuthDomains: z.array(z.string()),
              allowedEmbedOrigins: z.array(z.string()),
              ssoDomain: z.union([z.string(), z.null().nullable()]).exactOptional(),
              ssoDomainVerification: z
                .union([
                  z
                    .strictObject({
                      status: z.enum(['PENDING_VERIFICATION', 'VERIFIED']),
                      record: z
                        .strictObject({
                          type: z.literal('TXT'),
                          name: z.string(),
                          value: z.string(),
                        })
                        .openapi({ required: ['type', 'name', 'value'] }),
                      createdAt: z.string(),
                    })
                    .openapi({ required: ['status', 'record', 'createdAt'] }),
                  z.null().nullable(),
                ])
                .exactOptional(),
              emailAuthEnabled: z.boolean(),
              pinnedPieces: z.array(z.string()),
            })
            .openapi({
              required: [
                'plan',
                'id',
                'created',
                'updated',
                'ownerId',
                'name',
                'primaryColor',
                'logoIconUrl',
                'fullLogoUrl',
                'favIconUrl',
                'filteredPieceNames',
                'filteredPieceBehavior',
                'cloudAuthEnabled',
                'googleAuthEnabled',
                'enforceAllowedAuthDomains',
                'allowedAuthDomains',
                'allowedEmbedOrigins',
                'emailAuthEnabled',
                'pinnedPieces',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1ProjectsProjectIdMcpServerRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{projectId}/mcp-server',
  tags: ['mcp'],
  description: 'Get an MCP server by ID',
  request: {
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'projectId',
            required: true,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1ProjectsProjectIdMcpServerRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/mcp-server',
  tags: ['mcp'],
  description: 'Update the project MCP server configuration',
  request: {
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'projectId',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ disabledTools: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1ProjectsProjectIdMcpServerRotateRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/mcp-server/rotate',
  tags: ['mcp'],
  description: 'Rotate the MCP server token',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'path', name: 'projectId', required: true },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
})

export const getV1McpServerRoute = createRoute({
  method: 'get',
  path: '/v1/mcp-server',
  tags: ['mcp'],
  description: 'Get the platform MCP server configuration',
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1McpServerRoute = createRoute({
  method: 'post',
  path: '/v1/mcp-server',
  tags: ['mcp'],
  description: 'Update the platform MCP server configuration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ disabledTools: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1McpServerRotateRoute = createRoute({
  method: 'post',
  path: '/v1/mcp-server/rotate',
  tags: ['mcp'],
  description: 'Rotate the platform MCP server token',
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1McpOauthApproveRoute = createRoute({
  method: 'post',
  path: '/v1/mcp-oauth/approve',
  tags: ['mcp-oauth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ authRequestId: z.string(), projectId: z.string().exactOptional() })
            .openapi({ required: ['authRequestId'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
})

export const postV1ProjectsProjectIdAgentToolsMcpValidateRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/agent-tools/mcp/validate',
  tags: ['agent'],
  description:
    'Probe an external MCP server configured as an agent tool and return its tool names. The outbound call is routed through the SSRF-filtered safeHttp axios; all failure modes collapse to a single generic error so the response cannot be used for port or network reconnaissance.',
  request: {
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'projectId',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z.literal('MCP'),
              toolName: z.string().min(1),
              serverUrl: z.url(),
              protocol: z.enum(['sse', 'streamable-http', 'http']),
              auth: z.xor([
                z.object({ type: z.literal('none') }).openapi({ required: ['type'] }),
                z
                  .object({ type: z.literal('access_token'), accessToken: z.string() })
                  .openapi({ required: ['type', 'accessToken'] }),
                z
                  .object({
                    type: z.literal('api_key'),
                    apiKey: z.string(),
                    apiKeyHeader: z.string(),
                  })
                  .openapi({ required: ['type', 'apiKey', 'apiKeyHeader'] }),
                z
                  .object({ type: z.literal('headers'), headers: z.record(z.string(), z.string()) })
                  .openapi({ required: ['type', 'headers'] }),
              ]),
            })
            .openapi({ required: ['type', 'toolName', 'serverUrl', 'protocol', 'auth'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
})

export const getV1UsersRoute = createRoute({
  method: 'get',
  path: '/v1/users',
  tags: ['users'],
  description: 'List users',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      externalId: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'externalId', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(UserSchema),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1UsersIdRoute = createRoute({
  method: 'get',
  path: '/v1/users/{id}',
  tags: ['users'],
  description: 'Get a user by id',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              email: z.string(),
              firstName: z.string(),
              status: z.enum(['ACTIVE', 'INACTIVE']),
              externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              platformRole: z.enum(['ADMIN', 'MEMBER', 'OPERATOR']),
              lastName: z.string(),
              created: z.string(),
              updated: z.string(),
              lastActiveDate: z.union([z.string(), z.null().nullable()]).exactOptional(),
              imageUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
              badges: z.array(
                z
                  .strictObject({ name: z.string(), created: z.string() })
                  .openapi({ required: ['name', 'created'] }),
              ),
            })
            .openapi({
              required: [
                'id',
                'email',
                'firstName',
                'status',
                'platformRole',
                'lastName',
                'created',
                'updated',
                'badges',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1UsersIdRoute = createRoute({
  method: 'post',
  path: '/v1/users/{id}',
  tags: ['users'],
  description: 'Update user',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.enum(['ACTIVE', 'INACTIVE']).exactOptional(),
              platformRole: z.enum(['ADMIN', 'MEMBER', 'OPERATOR']).exactOptional(),
              externalId: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1UsersIdRoute = createRoute({
  method: 'delete',
  path: '/v1/users/{id}',
  tags: ['users'],
  description: 'Delete user',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1UserInvitationsRoute = createRoute({
  method: 'get',
  path: '/v1/user-invitations',
  tags: ['user-invitations'],
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      type: z
        .enum(['PLATFORM', 'PROJECT'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['PLATFORM', 'PROJECT'] },
            in: 'query',
            name: 'type',
            required: true,
          },
        }),
      projectId: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }] },
            in: 'query',
            name: 'projectId',
            required: false,
          },
        }),
      status: z
        .enum(['PENDING', 'ACCEPTED'])
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['PENDING', 'ACCEPTED'] },
            in: 'query',
            name: 'status',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(UserInvitationSchema),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1UserInvitationsRoute = createRoute({
  method: 'post',
  path: '/v1/user-invitations',
  tags: ['user-invitations'],
  description:
    'Send a user invitation to a user. If the user already has an invitation, the invitation will be updated.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                type: z.literal('PROJECT'),
                email: z.string(),
                projectId: z.string(),
                projectRole: z.string(),
              })
              .openapi({ required: ['type', 'email', 'projectId', 'projectRole'] }),
            z
              .object({
                type: z.literal('PLATFORM'),
                email: z.string(),
                platformRole: z.enum(['ADMIN', 'MEMBER', 'OPERATOR']),
              })
              .openapi({ required: ['type', 'email', 'platformRole'] }),
          ]),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              email: z.string(),
              status: z.enum(['PENDING', 'ACCEPTED']),
              type: z.enum(['PLATFORM', 'PROJECT']),
              platformId: z.string(),
              platformRole: z
                .union([z.enum(['ADMIN', 'MEMBER', 'OPERATOR']), z.null().nullable()])
                .exactOptional(),
              projectId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              projectRoleId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              projectRole: z
                .union([
                  z
                    .strictObject({
                      id: z.string(),
                      created: z.string(),
                      updated: z.string(),
                      name: z.string(),
                      permissions: z.array(z.string()),
                      platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      type: z.string(),
                      userCount: z.number().exactOptional(),
                    })
                    .openapi({
                      required: ['id', 'created', 'updated', 'name', 'permissions', 'type'],
                    }),
                  z.null().nullable(),
                ])
                .exactOptional(),
              link: z.string().exactOptional(),
            })
            .openapi({
              required: ['id', 'created', 'updated', 'email', 'status', 'type', 'platformId'],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1UserInvitationsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/user-invitations/{id}',
  tags: ['user-invitations'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1WorkerMachinesQueueMetricsRoute = createRoute({
  method: 'get',
  path: '/v1/worker-machines/queue-metrics',
  tags: ['worker-machines'],
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              queues: z.array(
                z
                  .strictObject({ name: z.string(), waiting: z.number(), active: z.number() })
                  .openapi({ required: ['name', 'waiting', 'active'] }),
              ),
            })
            .openapi({ required: ['queues'] }),
        },
      },
    },
  },
})

export const getV1TablesIdRoute = createRoute({
  method: 'get',
  path: '/v1/tables/{id}',
  tags: ['tables'],
  description: 'Get a table by id',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              name: z.string(),
              folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              projectId: z.string(),
              externalId: z.string(),
              status: z
                .union([z.enum(['ENABLED', 'DISABLED']), z.null().nullable()])
                .exactOptional(),
              trigger: z
                .union([z.enum(['ON_NEW_RECORD', 'ON_UPDATE_RECORD']), z.null().nullable()])
                .exactOptional(),
            })
            .openapi({ required: ['id', 'created', 'updated', 'name', 'projectId', 'externalId'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1TablesIdRoute = createRoute({
  method: 'post',
  path: '/v1/tables/{id}',
  tags: ['tables'],
  description: 'Update a table',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              trigger: z.enum(['ON_NEW_RECORD', 'ON_UPDATE_RECORD']).exactOptional(),
              status: z.enum(['ENABLED', 'DISABLED']).exactOptional(),
              folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1TablesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/tables/{id}',
  tags: ['tables'],
  description: 'Delete a table',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1TablesRoute = createRoute({
  method: 'get',
  path: '/v1/tables',
  tags: ['tables'],
  description: 'List tables',
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'name', required: false },
        }),
      externalIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'externalIds',
            required: false,
          },
        }),
      folderId: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'folderId', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    id: z.string(),
                    created: z.string(),
                    updated: z.string(),
                    name: z.string(),
                    folderId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    projectId: z.string(),
                    externalId: z.string(),
                    status: z
                      .union([z.enum(['ENABLED', 'DISABLED']), z.null().nullable()])
                      .exactOptional(),
                    trigger: z
                      .union([z.enum(['ON_NEW_RECORD', 'ON_UPDATE_RECORD']), z.null().nullable()])
                      .exactOptional(),
                  })
                  .openapi({
                    required: ['id', 'created', 'updated', 'name', 'projectId', 'externalId'],
                  }),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1TablesIdTemplateRoute = createRoute({
  method: 'get',
  path: '/v1/tables/{id}/template',
  tags: ['tables'],
  description: 'Export table as template',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string(),
              type: z.enum(['OFFICIAL', 'SHARED', 'CUSTOM']),
              summary: z.string(),
              description: z.string(),
              tags: z.array(
                z
                  .strictObject({
                    title: z.string(),
                    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
                    icon: z.string().exactOptional(),
                  })
                  .openapi({ required: ['title', 'color'] }),
              ),
              blogUrl: z.union([z.string(), z.null().nullable()]).exactOptional(),
              metadata: z
                .union([z.record(z.string(), z.any()), z.null().nullable()])
                .exactOptional(),
              author: z.string(),
              categories: z.array(z.string()),
              pieces: z.array(z.string()),
              flows: z
                .array(
                  z
                    .strictObject({
                      displayName: z.string(),
                      trigger: z.union([
                        z
                          .strictObject({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('PIECE_TRIGGER'),
                            settings: z
                              .strictObject({
                                sampleData: z
                                  .strictObject({
                                    sampleDataFileId: z.string().exactOptional(),
                                    sampleDataInputFileId: z.string().exactOptional(),
                                    lastTestDate: z.string().exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                propertySettings: z.record(
                                  z.string(),
                                  z
                                    .strictObject({
                                      type: z.enum(['MANUAL', 'DYNAMIC']),
                                      schema: z.any().exactOptional(),
                                    })
                                    .openapi({ required: ['type'] }),
                                ),
                                customLogoUrl: z.string().exactOptional(),
                                pieceName: z.string(),
                                pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                triggerName: z.string().exactOptional(),
                                input: z.record(z.string(), z.any()),
                              })
                              .openapi({
                                required: [
                                  'propertySettings',
                                  'pieceName',
                                  'pieceVersion',
                                  'input',
                                ],
                              }),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                        z
                          .strictObject({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('EMPTY'),
                            settings: z.any(),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                      ]),
                      valid: z.boolean(),
                      schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      description: z.string().exactOptional(),
                      notes: z
                        .array(
                          z
                            .strictObject({
                              id: z.string(),
                              content: z.string(),
                              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                              color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                              position: z
                                .strictObject({ x: z.number(), y: z.number() })
                                .openapi({ required: ['x', 'y'] }),
                              size: z
                                .strictObject({ width: z.number(), height: z.number() })
                                .openapi({ required: ['width', 'height'] }),
                              createdAt: z.string(),
                              updatedAt: z.string(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'content',
                                'color',
                                'position',
                                'size',
                                'createdAt',
                                'updatedAt',
                              ],
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'trigger', 'valid'] }),
                )
                .exactOptional(),
              tables: z
                .array(
                  z
                    .strictObject({
                      name: z.string(),
                      externalId: z.string(),
                      fields: z.array(
                        z
                          .strictObject({
                            name: z.string(),
                            type: z.string(),
                            data: z
                              .union([
                                z
                                  .strictObject({
                                    options: z.array(
                                      z
                                        .strictObject({ value: z.string() })
                                        .openapi({ required: ['value'] }),
                                    ),
                                  })
                                  .openapi({ required: ['options'] }),
                                z.null().nullable(),
                              ])
                              .exactOptional(),
                            externalId: z.string(),
                          })
                          .openapi({ required: ['name', 'type', 'externalId'] }),
                      ),
                      status: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      trigger: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      data: z
                        .union([
                          z
                            .strictObject({
                              type: z.literal('CSV'),
                              rows: z.array(
                                z.array(
                                  z
                                    .strictObject({ fieldId: z.string(), value: z.string() })
                                    .openapi({ required: ['fieldId', 'value'] }),
                                ),
                              ),
                            })
                            .openapi({ required: ['type', 'rows'] }),
                          z.null().nullable(),
                        ])
                        .exactOptional(),
                    })
                    .openapi({ required: ['name', 'externalId', 'fields'] }),
                )
                .exactOptional(),
              status: z.enum(['PUBLISHED', 'ARCHIVED']),
            })
            .openapi({
              required: [
                'name',
                'type',
                'summary',
                'description',
                'tags',
                'author',
                'categories',
                'pieces',
                'status',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1TablesCountRoute = createRoute({
  method: 'get',
  path: '/v1/tables/count',
  tags: ['tables'],
  description: 'Count tables',
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
      folderId: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'folderId', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.number() } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1TablesIdExportRoute = createRoute({
  method: 'get',
  path: '/v1/tables/{id}/export',
  tags: ['tables'],
  description: 'Export a table',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              fields: z.array(
                z
                  .strictObject({ id: z.string(), name: z.string() })
                  .openapi({ required: ['id', 'name'] }),
              ),
              rows: z.array(z.record(z.string(), z.string())),
              name: z.string(),
            })
            .openapi({ required: ['fields', 'rows', 'name'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1TablesIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/tables/{id}/webhooks',
  tags: ['tables'],
  description: 'Create a table webhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              events: z.array(z.enum(['RECORD_CREATED', 'RECORD_UPDATED', 'RECORD_DELETED'])),
              webhookUrl: z.string(),
              flowId: z.string(),
            })
            .openapi({ required: ['events', 'webhookUrl', 'flowId'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1TablesIdWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/v1/tables/{id}/webhooks/{webhookId}',
  tags: ['tables'],
  description: 'Delete a table webhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
      webhookId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'path', name: 'webhookId', required: true },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1TablesIdClearRoute = createRoute({
  method: 'post',
  path: '/v1/tables/{id}/clear',
  tags: ['tables'],
  description: 'Clear all records from a table',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1RecordsIdRoute = createRoute({
  method: 'post',
  path: '/v1/records/{id}',
  tags: ['records'],
  description: 'Update a record',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cells: z
                .array(
                  z
                    .object({
                      fieldId: z.string(),
                      value: z.union([z.string(), z.null().nullable()]),
                    })
                    .openapi({ required: ['fieldId', 'value'] }),
                )
                .exactOptional(),
              tableId: z.string(),
              agentUpdate: z.boolean().exactOptional(),
            })
            .openapi({ required: ['tableId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              tableId: z.string(),
              projectId: z.string(),
              cells: z.record(
                z.string(),
                z
                  .strictObject({
                    updated: z.string(),
                    created: z.string(),
                    value: z.any(),
                    fieldName: z.string(),
                  })
                  .openapi({ required: ['updated', 'created', 'value', 'fieldName'] }),
              ),
            })
            .openapi({ required: ['id', 'created', 'updated', 'tableId', 'projectId', 'cells'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1RecordsRoute = createRoute({
  method: 'get',
  path: '/v1/records',
  tags: ['records'],
  description: 'List records',
  request: {
    query: z.object({
      tableId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'tableId', required: true },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.xor([
              z
                .object({ fieldId: z.string(), operator: z.literal('eq'), value: z.string() })
                .openapi({ required: ['fieldId', 'operator', 'value'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('neq'), value: z.string() })
                .openapi({ required: ['fieldId', 'operator', 'value'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('gt'), value: z.string() })
                .openapi({ required: ['fieldId', 'operator', 'value'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('gte'), value: z.string() })
                .openapi({ required: ['fieldId', 'operator', 'value'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('lt'), value: z.string() })
                .openapi({ required: ['fieldId', 'operator', 'value'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('lte'), value: z.string() })
                .openapi({ required: ['fieldId', 'operator', 'value'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('co'), value: z.string() })
                .openapi({ required: ['fieldId', 'operator', 'value'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('exists') })
                .openapi({ required: ['fieldId', 'operator'] }),
              z
                .object({ fieldId: z.string(), operator: z.literal('not_exists') })
                .openapi({ required: ['fieldId', 'operator'] }),
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'array',
              items: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['eq'] },
                      value: { type: 'string' },
                    },
                    required: ['fieldId', 'operator', 'value'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['neq'] },
                      value: { type: 'string' },
                    },
                    required: ['fieldId', 'operator', 'value'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['gt'] },
                      value: { type: 'string' },
                    },
                    required: ['fieldId', 'operator', 'value'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['gte'] },
                      value: { type: 'string' },
                    },
                    required: ['fieldId', 'operator', 'value'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['lt'] },
                      value: { type: 'string' },
                    },
                    required: ['fieldId', 'operator', 'value'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['lte'] },
                      value: { type: 'string' },
                    },
                    required: ['fieldId', 'operator', 'value'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['co'] },
                      value: { type: 'string' },
                    },
                    required: ['fieldId', 'operator', 'value'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['exists'] },
                    },
                    required: ['fieldId', 'operator'],
                  },
                  {
                    type: 'object',
                    properties: {
                      fieldId: { type: 'string' },
                      operator: { type: 'string', enum: ['not_exists'] },
                    },
                    required: ['fieldId', 'operator'],
                  },
                ],
              },
            },
            in: 'query',
            name: 'filters',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    id: z.string(),
                    created: z.string(),
                    updated: z.string(),
                    tableId: z.string(),
                    projectId: z.string(),
                    cells: z.record(
                      z.string(),
                      z
                        .strictObject({
                          updated: z.string(),
                          created: z.string(),
                          value: z.any(),
                          fieldName: z.string(),
                        })
                        .openapi({ required: ['updated', 'created', 'value', 'fieldName'] }),
                    ),
                  })
                  .openapi({
                    required: ['id', 'created', 'updated', 'tableId', 'projectId', 'cells'],
                  }),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1RecordsRoute = createRoute({
  method: 'delete',
  path: '/v1/records',
  tags: ['records'],
  description: 'Delete records',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ tableId: z.string(), ids: z.array(z.string()) })
            .openapi({ required: ['tableId', 'ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                id: z.string(),
                created: z.string(),
                updated: z.string(),
                tableId: z.string(),
                projectId: z.string(),
                cells: z.record(
                  z.string(),
                  z
                    .strictObject({
                      updated: z.string(),
                      created: z.string(),
                      value: z.any(),
                      fieldName: z.string(),
                    })
                    .openapi({ required: ['updated', 'created', 'value', 'fieldName'] }),
                ),
              })
              .openapi({ required: ['id', 'created', 'updated', 'tableId', 'projectId', 'cells'] }),
          ),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1KnowledgeBaseFilesRoute = createRoute({
  method: 'get',
  path: '/v1/knowledge-base/files',
  tags: ['knowledge-base'],
  description: 'List knowledge base files for the project',
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1KnowledgeBaseFilesRoute = createRoute({
  method: 'post',
  path: '/v1/knowledge-base/files',
  tags: ['knowledge-base'],
  description: 'Register a file for knowledge base ingestion',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ fileId: z.string(), displayName: z.string() })
            .openapi({ required: ['fileId', 'displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z.strictObject({ id: z.string() }).openapi({ required: ['id'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1KnowledgeBaseFilesUploadRoute = createRoute({
  method: 'post',
  path: '/v1/knowledge-base/files/upload',
  tags: ['knowledge-base'],
  description: 'Upload a file and create a knowledge base file record',
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .object({
                  filename: z.string(),
                  data: z.any(),
                  type: z.literal('file'),
                  mimetype: z.string().exactOptional(),
                })
                .openapi({ required: ['filename', 'data', 'type'] }),
              displayName: z.string(),
            })
            .openapi({ required: ['file', 'displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1KnowledgeBaseFilesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/knowledge-base/files/{id}',
  tags: ['knowledge-base'],
  description: 'Delete a knowledge base file and all its chunks',
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1KnowledgeBaseFilesIdChunksCountRoute = createRoute({
  method: 'get',
  path: '/v1/knowledge-base/files/{id}/chunks/count',
  tags: ['knowledge-base'],
  description: 'Get the number of chunks for a knowledge base file',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1KnowledgeBaseFilesIdExtractChunksRoute = createRoute({
  method: 'post',
  path: '/v1/knowledge-base/files/{id}/extract-chunks',
  tags: ['knowledge-base'],
  description: 'Extract text chunks from a knowledge base file',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1KnowledgeBaseFilesIdStoreChunksRoute = createRoute({
  method: 'post',
  path: '/v1/knowledge-base/files/{id}/store-chunks',
  tags: ['knowledge-base'],
  description:
    'Store or update chunks for a knowledge base file. Provide id to update existing chunks, or content to create new ones.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              chunks: z.array(
                z
                  .object({
                    id: z.string().exactOptional(),
                    content: z.string().exactOptional(),
                    embedding: z.array(z.number()).length(768).exactOptional(),
                    chunkIndex: z.number().exactOptional(),
                    metadata: z.record(z.string(), z.any()).exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['chunks'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1KnowledgeBaseFilesIdChunksRoute = createRoute({
  method: 'get',
  path: '/v1/knowledge-base/files/{id}/chunks',
  tags: ['knowledge-base'],
  description: 'List chunks for a knowledge base file, optionally filtered by embedding status',
  request: {
    query: z.object({
      embedded: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['true', 'false'] },
            in: 'query',
            name: 'embedded',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1KnowledgeBaseFilesSearchRoute = createRoute({
  method: 'post',
  path: '/v1/knowledge-base/files/search',
  tags: ['knowledge-base'],
  description: 'Search knowledge base using vector similarity',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              knowledgeBaseFileIds: z.array(z.string()),
              queryEmbedding: z.array(z.number()).length(768),
              limit: z.int().min(1).max(100).default(5).exactOptional(),
              similarityThreshold: z.number().min(0).max(1).exactOptional(),
            })
            .openapi({ required: ['knowledgeBaseFileIds', 'queryEmbedding'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1TemplatesIdRoute = createRoute({
  method: 'get',
  path: '/v1/templates/{id}',
  tags: ['templates'],
  description: 'Get a template.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1TemplatesIdRoute = createRoute({
  method: 'post',
  path: '/v1/templates/{id}',
  tags: ['templates'],
  description: 'Update a template.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              summary: z.string().exactOptional(),
              description: z.string().exactOptional(),
              tags: z
                .array(
                  z
                    .object({
                      title: z.string(),
                      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
                      icon: z.string().exactOptional(),
                    })
                    .openapi({ required: ['title', 'color'] }),
                )
                .exactOptional(),
              blogUrl: z.string().exactOptional(),
              metadata: z
                .union([z.record(z.string(), z.any()), z.null().nullable()])
                .exactOptional(),
              status: z.enum(['PUBLISHED', 'ARCHIVED']).exactOptional(),
              categories: z.array(z.string()).exactOptional(),
              flows: z
                .array(
                  z
                    .object({
                      displayName: z.string(),
                      trigger: z.union([
                        z
                          .object({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('PIECE_TRIGGER'),
                            settings: z
                              .object({
                                sampleData: z
                                  .object({
                                    sampleDataFileId: z.string().exactOptional(),
                                    sampleDataInputFileId: z.string().exactOptional(),
                                    lastTestDate: z.string().exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                propertySettings: z.record(
                                  z.string(),
                                  z
                                    .object({
                                      type: z.enum(['MANUAL', 'DYNAMIC']),
                                      schema: z.any().exactOptional(),
                                    })
                                    .openapi({ required: ['type'] }),
                                ),
                                customLogoUrl: z.string().exactOptional(),
                                pieceName: z.string(),
                                pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                triggerName: z.string().exactOptional(),
                                input: z.record(z.string(), z.any()),
                              })
                              .openapi({
                                required: [
                                  'propertySettings',
                                  'pieceName',
                                  'pieceVersion',
                                  'input',
                                ],
                              }),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                        z
                          .object({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('EMPTY'),
                            settings: z.any(),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                      ]),
                      valid: z.boolean(),
                      schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      description: z.string().exactOptional(),
                      notes: z
                        .array(
                          z
                            .object({
                              id: z.string(),
                              content: z.string(),
                              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                              color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                              position: z
                                .object({ x: z.number(), y: z.number() })
                                .openapi({ required: ['x', 'y'] }),
                              size: z
                                .object({ width: z.number(), height: z.number() })
                                .openapi({ required: ['width', 'height'] }),
                              createdAt: z.string(),
                              updatedAt: z.string(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'content',
                                'color',
                                'position',
                                'size',
                                'createdAt',
                                'updatedAt',
                              ],
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'trigger', 'valid'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1TemplatesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/templates/{id}',
  tags: ['templates'],
  description: 'Delete a template.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1TemplatesCategoriesRoute = createRoute({
  method: 'get',
  path: '/v1/templates/categories',
  tags: ['templates'],
  description: 'Get categories of templates.',
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1TemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/templates',
  tags: ['templates'],
  description: 'List templates.',
  request: {
    query: z.object({
      type: z
        .enum(['OFFICIAL', 'SHARED', 'CUSTOM'])
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['OFFICIAL', 'SHARED', 'CUSTOM'] },
            in: 'query',
            name: 'type',
            required: false,
          },
        }),
      pieces: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'pieces',
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'tags',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'search', required: false },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'category', required: false },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1TemplatesRoute = createRoute({
  method: 'post',
  path: '/v1/templates',
  tags: ['templates'],
  description: 'Create a template.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string(),
              summary: z.string(),
              description: z.string(),
              tags: z
                .array(
                  z
                    .object({
                      title: z.string(),
                      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
                      icon: z.string().exactOptional(),
                    })
                    .openapi({ required: ['title', 'color'] }),
                )
                .exactOptional(),
              blogUrl: z.string().exactOptional(),
              metadata: z
                .union([z.record(z.string(), z.any()), z.null().nullable()])
                .exactOptional(),
              author: z.string(),
              categories: z.array(z.string()),
              type: z.enum(['OFFICIAL', 'SHARED', 'CUSTOM']),
              flows: z
                .array(
                  z
                    .object({
                      displayName: z.string(),
                      trigger: z.union([
                        z
                          .object({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('PIECE_TRIGGER'),
                            settings: z
                              .object({
                                sampleData: z
                                  .object({
                                    sampleDataFileId: z.string().exactOptional(),
                                    sampleDataInputFileId: z.string().exactOptional(),
                                    lastTestDate: z.string().exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                propertySettings: z.record(
                                  z.string(),
                                  z
                                    .object({
                                      type: z.enum(['MANUAL', 'DYNAMIC']),
                                      schema: z.any().exactOptional(),
                                    })
                                    .openapi({ required: ['type'] }),
                                ),
                                customLogoUrl: z.string().exactOptional(),
                                pieceName: z.string(),
                                pieceVersion: z.string().regex(/^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/),
                                triggerName: z.string().exactOptional(),
                                input: z.record(z.string(), z.any()),
                              })
                              .openapi({
                                required: [
                                  'propertySettings',
                                  'pieceName',
                                  'pieceVersion',
                                  'input',
                                ],
                              }),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                        z
                          .object({
                            name: z.string().regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/),
                            valid: z.boolean(),
                            displayName: z.string(),
                            nextAction: z.any().exactOptional(),
                            lastUpdatedDate: z.string(),
                            type: z.literal('EMPTY'),
                            settings: z.any(),
                          })
                          .openapi({
                            required: [
                              'name',
                              'valid',
                              'displayName',
                              'lastUpdatedDate',
                              'type',
                              'settings',
                            ],
                          }),
                      ]),
                      valid: z.boolean(),
                      schemaVersion: z.union([z.string(), z.null().nullable()]).exactOptional(),
                      description: z.string().exactOptional(),
                      notes: z
                        .array(
                          z
                            .object({
                              id: z.string(),
                              content: z.string(),
                              ownerId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                              color: z.enum(['orange', 'red', 'green', 'blue', 'purple', 'yellow']),
                              position: z
                                .object({ x: z.number(), y: z.number() })
                                .openapi({ required: ['x', 'y'] }),
                              size: z
                                .object({ width: z.number(), height: z.number() })
                                .openapi({ required: ['width', 'height'] }),
                              createdAt: z.string(),
                              updatedAt: z.string(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'content',
                                'color',
                                'position',
                                'size',
                                'createdAt',
                                'updatedAt',
                              ],
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: ['displayName', 'trigger', 'valid'] }),
                )
                .exactOptional(),
            })
            .openapi({
              required: ['name', 'summary', 'description', 'author', 'categories', 'type'],
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1ProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/projects',
  tags: ['projects'],
  request: {
    query: z.object({
      externalId: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'externalId', required: false },
        }),
      externalUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'externalUserId',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'displayName', required: false },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['TEAM', 'PERSONAL'])),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string', enum: ['TEAM', 'PERSONAL'] } },
            in: 'query',
            name: 'types',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(ProjectSchema),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1ProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/projects',
  tags: ['projects'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              displayName: z.string().regex(/^[^.\/]+$/),
              externalId: z.union([z.string(), z.null().nullable()]).exactOptional(),
              metadata: z
                .union([z.record(z.string(), z.any()), z.null().nullable()])
                .exactOptional(),
              maxConcurrentJobs: z.union([z.number(), z.null().nullable()]).exactOptional(),
              globalConnectionExternalIds: z.array(z.string()).exactOptional(),
              alertReceiverEmail: z
                .union([
                  z
                    .email()
                    .regex(
                      /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
                    ),
                  z.null().nullable(),
                ])
                .exactOptional(),
            })
            .openapi({ required: ['displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: { 'application/json': { schema: ProjectSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1ProjectsIdRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{id}',
  tags: ['projects'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              releasesEnabled: z.boolean().exactOptional(),
              displayName: z
                .string()
                .regex(/^[^.\/]+$/)
                .exactOptional(),
              externalId: z.string().exactOptional(),
              metadata: z.record(z.string(), z.any()).exactOptional(),
              icon: z
                .object({
                  color: z.enum([
                    'RED',
                    'BLUE',
                    'YELLOW',
                    'PURPLE',
                    'GREEN',
                    'PINK',
                    'VIOLET',
                    'ORANGE',
                    'DARK_GREEN',
                    'CYAN',
                    'LAVENDER',
                    'DEEP_ORANGE',
                  ]),
                })
                .exactOptional()
                .openapi({ required: ['color'] }),
              plan: z
                .object({
                  pieces: z.array(z.string()).exactOptional(),
                  piecesFilterType: z.enum(['NONE', 'ALLOWED']).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              globalConnectionExternalIds: z.array(z.string()).exactOptional(),
              maxConcurrentJobs: z
                .union([z.int().gt(0).max(9007199254740991), z.null().nullable()])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: { 'application/json': { schema: ProjectSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1ProjectsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{id}',
  tags: ['projects'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1ProjectMembersRoute = createRoute({
  method: 'get',
  path: '/v1/project-members',
  tags: ['project-members'],
  request: {
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'projectId', required: true },
        }),
      projectRoleId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'projectRoleId',
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    id: z.string(),
                    created: z.string(),
                    updated: z.string(),
                    platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    userId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    projectId: z.string(),
                    projectRoleId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    user: UserSchema,
                    projectRole: z
                      .strictObject({
                        id: z.string(),
                        created: z.string(),
                        updated: z.string(),
                        name: z.string(),
                        permissions: z.array(z.string()),
                        platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                        type: z.string(),
                        userCount: z.number().exactOptional(),
                      })
                      .openapi({
                        required: ['id', 'created', 'updated', 'name', 'permissions', 'type'],
                      }),
                    project: z
                      .strictObject({ id: z.string(), displayName: z.string() })
                      .openapi({ required: ['id', 'displayName'] }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'created',
                      'updated',
                      'platformId',
                      'userId',
                      'projectId',
                      'projectRoleId',
                      'user',
                      'projectRole',
                      'project',
                    ],
                  }),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1ProjectMembersIdRoute = createRoute({
  method: 'delete',
  path: '/v1/project-members/{id}',
  tags: ['project-members'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1PiecesRoute = createRoute({
  method: 'post',
  path: '/v1/pieces',
  tags: ['pieces'],
  summary: 'Add a piece to a platform',
  description: 'Add a piece to a platform',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                packageType: z.literal('ARCHIVE'),
                scope: z.literal('PLATFORM'),
                pieceName: z.string().min(1),
                pieceVersion: z.string().regex(/^[0-9]+\.[0-9]+\.[0-9]+$/),
                pieceArchive: z
                  .object({
                    filename: z.string(),
                    data: z.any(),
                    type: z.literal('file'),
                    mimetype: z.string().exactOptional(),
                  })
                  .openapi({ required: ['filename', 'data', 'type'] }),
              })
              .openapi({
                required: ['packageType', 'scope', 'pieceName', 'pieceVersion', 'pieceArchive'],
                description: 'Private Piece',
              }),
            z
              .object({
                packageType: z.literal('REGISTRY'),
                scope: z.literal('PLATFORM'),
                pieceName: z.string().min(1),
                pieceVersion: z.string().regex(/^[0-9]+\.[0-9]+\.[0-9]+$/),
              })
              .openapi({
                required: ['packageType', 'scope', 'pieceName', 'pieceVersion'],
                description: 'NPM Piece',
              }),
          ]),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.strictObject({}) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1GitReposRoute = createRoute({
  method: 'post',
  path: '/v1/git-repos',
  tags: ['git-repos'],
  description: 'Upsert a git repository information for a project.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              projectId: z.string().min(1),
              remoteUrl: z.string().regex(/^git@[A-Za-z0-9.-]+:[A-Za-z0-9._\/-]+(\.git)?$/),
              branch: z.string().regex(/^(?!-)[A-Za-z0-9._\/-]{1,255}$/),
              branchType: z.enum(['PRODUCTION', 'DEVELOPMENT']),
              sshPrivateKey: z.string().min(1),
              slug: z.string().regex(/^(?!\.{1,2}$)[A-Za-z0-9._-]{1,128}$/),
            })
            .openapi({
              required: ['projectId', 'remoteUrl', 'branch', 'branchType', 'sshPrivateKey', 'slug'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: { 'application/json': { schema: GitRepoSchema } },
    },
  },
})

export const getV1EventDestinationsRoute = createRoute({
  method: 'get',
  path: '/v1/event-destinations',
  tags: ['event-destinations'],
  description: 'List event destinations',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z.xor([
                  z
                    .strictObject({
                      id: z.string(),
                      created: z.string(),
                      updated: z.string(),
                      platformId: z.string(),
                      events: z.array(
                        z.enum([
                          'flow.created',
                          'flow.deleted',
                          'flow.updated',
                          'flow.published',
                          'flow.activated',
                          'flow.deactivated',
                          'flow.run.resumed',
                          'flow.run.started',
                          'flow.run.finished',
                          'flow.run.retried',
                          'folder.created',
                          'folder.updated',
                          'folder.deleted',
                          'connection.upserted',
                          'connection.deleted',
                          'user.signed.up',
                          'user.signed.in',
                          'user.password.reset',
                          'user.email.verified',
                          'signing.key.created',
                          'project.role.created',
                          'project.role.deleted',
                          'project.role.updated',
                          'project.release.created',
                        ]),
                      ),
                      url: z.url(),
                      scope: z.literal('PLATFORM'),
                    })
                    .openapi({
                      required: [
                        'id',
                        'created',
                        'updated',
                        'platformId',
                        'events',
                        'url',
                        'scope',
                      ],
                    }),
                  z
                    .strictObject({
                      id: z.string(),
                      created: z.string(),
                      updated: z.string(),
                      platformId: z.string(),
                      events: z.array(
                        z.enum([
                          'flow.created',
                          'flow.deleted',
                          'flow.updated',
                          'flow.published',
                          'flow.activated',
                          'flow.deactivated',
                          'flow.run.resumed',
                          'flow.run.started',
                          'flow.run.finished',
                          'flow.run.retried',
                          'folder.created',
                          'folder.updated',
                          'folder.deleted',
                          'connection.upserted',
                          'connection.deleted',
                          'user.signed.up',
                          'user.signed.in',
                          'user.password.reset',
                          'user.email.verified',
                          'signing.key.created',
                          'project.role.created',
                          'project.role.deleted',
                          'project.role.updated',
                          'project.release.created',
                        ]),
                      ),
                      url: z.url(),
                      scope: z.literal('PROJECT'),
                      projectId: z.string(),
                    })
                    .openapi({
                      required: [
                        'id',
                        'created',
                        'updated',
                        'platformId',
                        'events',
                        'url',
                        'scope',
                        'projectId',
                      ],
                    }),
                ]),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
})

export const getV1ProjectRolesIdProjectMembersRoute = createRoute({
  method: 'get',
  path: '/v1/project-roles/{id}/project-members',
  tags: ['project-members'],
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(
                z
                  .strictObject({
                    id: z.string(),
                    created: z.string(),
                    updated: z.string(),
                    platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    userId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    projectId: z.string(),
                    projectRoleId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    user: UserSchema,
                    projectRole: z
                      .strictObject({
                        id: z.string(),
                        created: z.string(),
                        updated: z.string(),
                        name: z.string(),
                        permissions: z.array(z.string()),
                        platformId: z.union([z.string(), z.null().nullable()]).exactOptional(),
                        type: z.string(),
                        userCount: z.number().exactOptional(),
                      })
                      .openapi({
                        required: ['id', 'created', 'updated', 'name', 'permissions', 'type'],
                      }),
                    project: z
                      .strictObject({ id: z.string(), displayName: z.string() })
                      .openapi({ required: ['id', 'displayName'] }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'created',
                      'updated',
                      'platformId',
                      'userId',
                      'projectId',
                      'projectRoleId',
                      'user',
                      'projectRole',
                      'project',
                    ],
                  }),
              ),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1ProjectReleasesRoute = createRoute({
  method: 'post',
  path: '/v1/project-releases',
  tags: ['project-releases'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                type: z.literal('ROLLBACK'),
                name: z.string(),
                description: z.union([z.string(), z.null().nullable()]).exactOptional(),
                selectedFlowsIds: z
                  .union([z.array(z.string()), z.null().nullable()])
                  .exactOptional(),
                projectId: z.string(),
                projectReleaseId: z.string(),
              })
              .openapi({ required: ['type', 'name', 'projectId', 'projectReleaseId'] }),
            z
              .object({
                type: z.literal('PROJECT'),
                name: z.string(),
                description: z.union([z.string(), z.null().nullable()]).exactOptional(),
                selectedFlowsIds: z
                  .union([z.array(z.string()), z.null().nullable()])
                  .exactOptional(),
                projectId: z.string(),
                targetProjectId: z.string(),
              })
              .openapi({ required: ['type', 'name', 'projectId', 'targetProjectId'] }),
            z
              .object({
                type: z.literal('GIT'),
                name: z.string(),
                description: z.union([z.string(), z.null().nullable()]).exactOptional(),
                selectedFlowsIds: z
                  .union([z.array(z.string()), z.null().nullable()])
                  .exactOptional(),
                projectId: z.string(),
              })
              .openapi({ required: ['type', 'name', 'projectId'] }),
          ]),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: { 'application/json': { schema: ProjectReleaseSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1GlobalConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/global-connections',
  tags: ['global-connections'],
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      scope: z
        .enum(['PROJECT', 'PLATFORM'])
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['PROJECT', 'PLATFORM'] },
            in: 'query',
            name: 'scope',
            required: false,
          },
        }),
      pieceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            in: 'query',
            name: 'pieceName',
            required: false,
          },
        }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'displayName', required: false },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ACTIVE', 'MISSING', 'ERROR'])),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['ACTIVE', 'MISSING', 'ERROR'] },
            },
            in: 'query',
            name: 'status',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: { schema: { type: 'number' }, in: 'query', name: 'limit', required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              data: z.array(AppConnectionSchema),
              next: z.union([z.string(), z.null().nullable()]).exactOptional(),
              previous: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1GlobalConnectionsRoute = createRoute({
  method: 'post',
  path: '/v1/global-connections',
  tags: ['global-connections'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                displayName: z.string(),
                pieceName: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('SECRET_TEXT'),
                value: z
                  .object({ type: z.literal('SECRET_TEXT'), secret_text: z.string().min(1) })
                  .openapi({ required: ['type', 'secret_text'] }),
                scope: z.literal('PLATFORM'),
                projectIds: z.array(z.string()),
                externalId: z.string().exactOptional(),
                preSelectForNewProjects: z.boolean().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'pieceName', 'type', 'value', 'scope', 'projectIds'],
              }),
            z
              .object({
                displayName: z.string(),
                pieceName: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('OAUTH2'),
                value: z
                  .object({
                    client_id: z.string().min(1),
                    code: z.string().min(1),
                    code_challenge: z.string().exactOptional(),
                    scope: z.string(),
                    authorization_method: z.enum(['HEADER', 'BODY']).exactOptional(),
                    client_secret: z.string().min(1),
                    grant_type: z
                      .enum(['authorization_code', 'client_credentials'])
                      .exactOptional(),
                    props: z.record(z.string(), z.any()).exactOptional(),
                    redirect_url: z.string().min(1),
                    type: z.literal('OAUTH2'),
                  })
                  .openapi({
                    required: [
                      'client_id',
                      'code',
                      'scope',
                      'client_secret',
                      'redirect_url',
                      'type',
                    ],
                  }),
                scope: z.literal('PLATFORM'),
                projectIds: z.array(z.string()),
                externalId: z.string().exactOptional(),
                preSelectForNewProjects: z.boolean().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'pieceName', 'type', 'value', 'scope', 'projectIds'],
              }),
            z
              .object({
                displayName: z.string(),
                pieceName: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('CLOUD_OAUTH2'),
                value: z
                  .object({
                    client_id: z.string().min(1),
                    code: z.string().min(1),
                    code_challenge: z.string().exactOptional(),
                    scope: z.string(),
                    authorization_method: z.enum(['HEADER', 'BODY']).exactOptional(),
                    props: z.record(z.string(), z.any()).exactOptional(),
                    type: z.literal('CLOUD_OAUTH2'),
                  })
                  .openapi({ required: ['client_id', 'code', 'scope', 'type'] }),
                scope: z.literal('PLATFORM'),
                projectIds: z.array(z.string()),
                externalId: z.string().exactOptional(),
                preSelectForNewProjects: z.boolean().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'pieceName', 'type', 'value', 'scope', 'projectIds'],
              }),
            z
              .object({
                displayName: z.string(),
                pieceName: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('PLATFORM_OAUTH2'),
                value: z
                  .object({
                    client_id: z.string().min(1),
                    code: z.string().min(1),
                    code_challenge: z.string().exactOptional(),
                    scope: z.string(),
                    authorization_method: z.enum(['HEADER', 'BODY']).exactOptional(),
                    props: z.record(z.string(), z.any()).exactOptional(),
                    type: z.literal('PLATFORM_OAUTH2'),
                    redirect_url: z.string().min(1),
                  })
                  .openapi({ required: ['client_id', 'code', 'scope', 'type', 'redirect_url'] }),
                scope: z.literal('PLATFORM'),
                projectIds: z.array(z.string()),
                externalId: z.string().exactOptional(),
                preSelectForNewProjects: z.boolean().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'pieceName', 'type', 'value', 'scope', 'projectIds'],
              }),
            z
              .object({
                displayName: z.string(),
                pieceName: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('BASIC_AUTH'),
                value: z
                  .object({
                    username: z.string().min(1),
                    password: z.string().min(1),
                    type: z.literal('BASIC_AUTH'),
                  })
                  .openapi({ required: ['username', 'password', 'type'] }),
                scope: z.literal('PLATFORM'),
                projectIds: z.array(z.string()),
                externalId: z.string().exactOptional(),
                preSelectForNewProjects: z.boolean().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'pieceName', 'type', 'value', 'scope', 'projectIds'],
              }),
            z
              .object({
                displayName: z.string(),
                pieceName: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('CUSTOM_AUTH'),
                value: z
                  .object({ type: z.literal('CUSTOM_AUTH'), props: z.record(z.string(), z.any()) })
                  .openapi({ required: ['type', 'props'] }),
                scope: z.literal('PLATFORM'),
                projectIds: z.array(z.string()),
                externalId: z.string().exactOptional(),
                preSelectForNewProjects: z.boolean().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'pieceName', 'type', 'value', 'scope', 'projectIds'],
              }),
            z
              .object({
                displayName: z.string(),
                pieceName: z.string(),
                metadata: z.record(z.string(), z.any()).exactOptional(),
                pieceVersion: z.string().exactOptional(),
                type: z.literal('NO_AUTH'),
                value: z.object({ type: z.literal('NO_AUTH') }).openapi({ required: ['type'] }),
                scope: z.literal('PLATFORM'),
                projectIds: z.array(z.string()),
                externalId: z.string().exactOptional(),
                preSelectForNewProjects: z.boolean().exactOptional(),
              })
              .openapi({
                required: ['displayName', 'pieceName', 'type', 'value', 'scope', 'projectIds'],
              }),
          ]),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Default Response',
      content: { 'application/json': { schema: AppConnectionSchema } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1GlobalConnectionsIdRoute = createRoute({
  method: 'post',
  path: '/v1/global-connections/{id}',
  tags: ['global-connections'],
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              displayName: z.string().min(1),
              projectIds: z.array(z.string()).exactOptional(),
              metadata: z.record(z.string(), z.any()).exactOptional(),
              preSelectForNewProjects: z.boolean().exactOptional(),
            })
            .openapi({ required: ['displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1GlobalConnectionsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/global-connections/{id}',
  tags: ['global-connections'],
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.never().openapi({ not: {} }) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1EmbedSubdomainAllowedEmbedOriginsRoute = createRoute({
  method: 'post',
  path: '/v1/embed-subdomain/allowed-embed-origins',
  tags: ['embedding'],
  description:
    'Add origins to the list allowed to embed this platform in an iframe. Existing origins are preserved; duplicates are ignored.',
  request: { body: { content: { 'application/json': { schema: EmbeddingInputSchema } } } },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ allowedEmbedOrigins: z.array(z.string()) })
            .openapi({ required: ['allowedEmbedOrigins'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AgentsConversationsRoute = createRoute({
  method: 'get',
  path: '/v1/agents/conversations',
  tags: ['agent'],
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, in: 'query', name: 'cursor', required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            schema: { default: 20, type: 'integer', minimum: 1, maximum: 100 },
            in: 'query',
            name: 'limit',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1AgentsConversationsRoute = createRoute({
  method: 'post',
  path: '/v1/agents/conversations',
  tags: ['agent'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              title: z.union([z.string(), z.null().nullable()]).exactOptional(),
              modelName: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1AgentsConversationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/agents/conversations/{id}',
  tags: ['agent'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1AgentsConversationsIdRoute = createRoute({
  method: 'post',
  path: '/v1/agents/conversations/{id}',
  tags: ['agent'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              title: z.union([z.string(), z.null().nullable()]).exactOptional(),
              modelName: z.union([z.string(), z.null().nullable()]).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1AgentsConversationsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/agents/conversations/{id}',
  tags: ['agent'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1AgentsConversationsIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1/agents/conversations/{id}/messages',
  tags: ['agent'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1AgentsConversationsIdMessagesRoute = createRoute({
  method: 'post',
  path: '/v1/agents/conversations/{id}/messages',
  tags: ['agent'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              content: z.string().max(51200),
              files: z
                .array(
                  z
                    .object({
                      name: z.string().min(1).max(255),
                      mimeType: z.enum([
                        'image/png',
                        'image/jpeg',
                        'image/gif',
                        'image/webp',
                        'text/plain',
                        'text/csv',
                        'text/markdown',
                        'application/json',
                        'application/pdf',
                      ]),
                      data: z.string().max(13981014),
                    })
                    .openapi({ required: ['name', 'mimeType', 'data'] }),
                )
                .max(10)
                .exactOptional(),
            })
            .openapi({ required: ['content'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1AgentsToolApprovalsGateIdRoute = createRoute({
  method: 'post',
  path: '/v1/agents/tool-approvals/{gateId}',
  tags: ['agent'],
  request: {
    params: z.object({
      gateId: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, in: 'path', name: 'gateId', required: true },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ approved: z.boolean() }).openapi({ required: ['approved'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1PlatformConfigurationsRoute = createRoute({
  method: 'post',
  path: '/v1/platform-configurations',
  tags: ['platform-configuration'],
  description:
    'Update platform settings, including the default chat model and whether specific AI models are visible to builders.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              isProductTelemetryEnabled: z.boolean().exactOptional(),
              isInfraSetupTelemetryEnabled: z.boolean().exactOptional(),
              maxBarrierSignals: z.int().min(1).max(10000).exactOptional(),
              aiSpecificModelsVisible: z.boolean().exactOptional(),
              defaultChatModel: z
                .union([
                  z.xor([
                    z
                      .object({ type: z.literal('tier'), tierId: z.string() })
                      .openapi({ required: ['type', 'tierId'] }),
                    z
                      .object({
                        type: z.literal('model'),
                        provider: z.enum([
                          'openai',
                          'openrouter',
                          'anthropic',
                          'azure',
                          'google',
                          'activepieces',
                          'cloudflare-gateway',
                          'custom',
                          'bedrock',
                          'vertex',
                          'mistral',
                          'xai',
                          'deepseek',
                          'zai',
                          'qwen',
                          'minimax',
                          'moonshot',
                          'meta',
                          'nvidia',
                        ]),
                        providerConfigId: z.string(),
                        modelId: z.string(),
                      })
                      .openapi({ required: ['type', 'provider', 'providerConfigId', 'modelId'] }),
                  ]),
                  z.null().nullable(),
                ])
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              platformId: z.string(),
              isProductTelemetryEnabled: z.boolean(),
              isInfraSetupTelemetryEnabled: z.boolean(),
              maxBarrierSignals: z.int().min(1).max(10000),
              aiSpecificModelsVisible: z.boolean(),
              defaultChatModel: z
                .union([
                  z.xor([
                    z
                      .strictObject({ type: z.literal('tier'), tierId: z.string() })
                      .openapi({ required: ['type', 'tierId'] }),
                    z
                      .strictObject({
                        type: z.literal('model'),
                        provider: z.enum([
                          'openai',
                          'openrouter',
                          'anthropic',
                          'azure',
                          'google',
                          'activepieces',
                          'cloudflare-gateway',
                          'custom',
                          'bedrock',
                          'vertex',
                          'mistral',
                          'xai',
                          'deepseek',
                          'zai',
                          'qwen',
                          'minimax',
                          'moonshot',
                          'meta',
                          'nvidia',
                        ]),
                        providerConfigId: z.string(),
                        modelId: z.string(),
                      })
                      .openapi({ required: ['type', 'provider', 'providerConfigId', 'modelId'] }),
                  ]),
                  z.null().nullable(),
                ])
                .exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'created',
                'updated',
                'platformId',
                'isProductTelemetryEnabled',
                'isInfraSetupTelemetryEnabled',
                'maxBarrierSignals',
                'aiSpecificModelsVisible',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AiProvidersConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/ai-providers/configs',
  tags: ['ai-providers'],
  description: 'List the AI provider keys connected to the platform. Secrets are never returned.',
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.string(),
                name: z.string(),
                provider: z.enum([
                  'openai',
                  'openrouter',
                  'anthropic',
                  'azure',
                  'google',
                  'activepieces',
                  'cloudflare-gateway',
                  'custom',
                  'bedrock',
                  'vertex',
                  'mistral',
                  'xai',
                  'deepseek',
                  'zai',
                  'qwen',
                  'minimax',
                  'moonshot',
                  'meta',
                  'nvidia',
                ]),
                config: z.union([
                  z
                    .object({
                      apiKeyHeader: z.string(),
                      baseUrl: z.string(),
                      models: z.array(
                        z
                          .object({
                            modelId: z.string(),
                            modelName: z.string(),
                            modelType: z.enum(['image', 'text']),
                          })
                          .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                      ),
                      defaultHeaders: z.record(z.string(), z.string()).exactOptional(),
                      apiStyle: z.enum(['chat', 'responses']).exactOptional(),
                    })
                    .openapi({ required: ['apiKeyHeader', 'baseUrl', 'models'] }),
                  z
                    .object({
                      accountId: z.string(),
                      gatewayId: z.string(),
                      models: z.array(
                        z
                          .object({
                            modelId: z.string(),
                            modelName: z.string(),
                            modelType: z.enum(['image', 'text']),
                          })
                          .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                      ),
                      vertexProject: z.string().exactOptional(),
                      vertexRegion: z.string().exactOptional(),
                    })
                    .openapi({ required: ['accountId', 'gatewayId', 'models'] }),
                  z
                    .object({ resourceName: z.string(), apiVersion: z.string().exactOptional() })
                    .openapi({ required: ['resourceName'] }),
                  z
                    .object({
                      project: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                      region: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                      models: z.array(
                        z
                          .object({
                            modelId: z.string(),
                            modelName: z.string(),
                            modelType: z.enum(['image', 'text']),
                          })
                          .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                      ),
                    })
                    .openapi({ required: ['project', 'region', 'models'] }),
                  z.object({ region: z.string().min(1) }).openapi({ required: ['region'] }),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                ]),
                enabledForChat: z.boolean(),
                modelScope: z.enum(['all', 'selected']),
                modelIds: z.array(z.string()),
                projectScope: z.enum(['all', 'selected', 'except']),
                projectIds: z.array(z.string()),
                status: z.enum(['active', 'out_of_credits', 'rejected', 'unreachable']),
                statusReason: z.union([z.string(), z.null().nullable()]),
                statusUpdated: z.union([z.string(), z.null().nullable()]),
              })
              .openapi({
                required: [
                  'id',
                  'name',
                  'provider',
                  'config',
                  'enabledForChat',
                  'modelScope',
                  'modelIds',
                  'projectScope',
                  'projectIds',
                  'status',
                  'statusReason',
                  'statusUpdated',
                ],
              }),
          ),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AiProvidersConfigsIdModelsRoute = createRoute({
  method: 'get',
  path: '/v1/ai-providers/configs/{id}/models',
  tags: ['ai-providers'],
  description: 'List the models an AI provider key can run.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                id: z.string(),
                name: z.string(),
                type: z.enum(['image', 'text']),
                metadata: z
                  .strictObject({
                    contextTokens: z.number().exactOptional(),
                    maxOutputTokens: z.number().exactOptional(),
                    releaseDate: z.string().exactOptional(),
                    inputCostPerMillionTokens: z.number().exactOptional(),
                    outputCostPerMillionTokens: z.number().exactOptional(),
                    cacheReadCostPerMillionTokens: z.number().exactOptional(),
                    cacheWriteCostPerMillionTokens: z.number().exactOptional(),
                    supportsToolCalling: z.boolean().exactOptional(),
                    supportsReasoning: z.boolean().exactOptional(),
                    supportsVision: z.boolean().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: ['id', 'name', 'type'] }),
          ),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AiProvidersConfigsIdSuggestedModelsRoute = createRoute({
  method: 'get',
  path: '/v1/ai-providers/configs/{id}/suggested-models',
  tags: ['ai-providers'],
  description:
    'Suggest model ids for a key whose provider has no model list (Other, OpenAI compatible).',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AiProvidersModelOptionsPlatformRoute = createRoute({
  method: 'get',
  path: '/v1/ai-providers/model-options/platform',
  tags: ['ai-providers'],
  description:
    'List every model the platform can offer for a surface (chat or flows), grouped by key.',
  request: {
    query: z.object({
      surface: z
        .enum(['flow', 'agent', 'chat'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['flow', 'agent', 'chat'] },
            in: 'query',
            name: 'surface',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              tiers: z.array(
                z
                  .strictObject({
                    id: z.string(),
                    name: z.string(),
                    emoji: z.string(),
                    description: z.union([z.string(), z.null().nullable()]).exactOptional(),
                    isDefault: z.boolean(),
                    isFast: z.boolean(),
                    main: z
                      .strictObject({
                        provider: z.enum([
                          'openai',
                          'openrouter',
                          'anthropic',
                          'azure',
                          'google',
                          'activepieces',
                          'cloudflare-gateway',
                          'custom',
                          'bedrock',
                          'vertex',
                          'mistral',
                          'xai',
                          'deepseek',
                          'zai',
                          'qwen',
                          'minimax',
                          'moonshot',
                          'meta',
                          'nvidia',
                        ]),
                        modelId: z.string(),
                        name: z.string(),
                        keyName: z.string(),
                        metadata: z
                          .strictObject({
                            contextTokens: z.number().exactOptional(),
                            maxOutputTokens: z.number().exactOptional(),
                            releaseDate: z.string().exactOptional(),
                            inputCostPerMillionTokens: z.number().exactOptional(),
                            outputCostPerMillionTokens: z.number().exactOptional(),
                            cacheReadCostPerMillionTokens: z.number().exactOptional(),
                            cacheWriteCostPerMillionTokens: z.number().exactOptional(),
                            supportsToolCalling: z.boolean().exactOptional(),
                            supportsReasoning: z.boolean().exactOptional(),
                            supportsVision: z.boolean().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .openapi({ required: ['provider', 'modelId', 'name', 'keyName'] }),
                    fallbacks: z.array(
                      z
                        .strictObject({
                          provider: z.enum([
                            'openai',
                            'openrouter',
                            'anthropic',
                            'azure',
                            'google',
                            'activepieces',
                            'cloudflare-gateway',
                            'custom',
                            'bedrock',
                            'vertex',
                            'mistral',
                            'xai',
                            'deepseek',
                            'zai',
                            'qwen',
                            'minimax',
                            'moonshot',
                            'meta',
                            'nvidia',
                          ]),
                          modelId: z.string(),
                          name: z.string(),
                          keyName: z.string(),
                          metadata: z
                            .strictObject({
                              contextTokens: z.number().exactOptional(),
                              maxOutputTokens: z.number().exactOptional(),
                              releaseDate: z.string().exactOptional(),
                              inputCostPerMillionTokens: z.number().exactOptional(),
                              outputCostPerMillionTokens: z.number().exactOptional(),
                              cacheReadCostPerMillionTokens: z.number().exactOptional(),
                              cacheWriteCostPerMillionTokens: z.number().exactOptional(),
                              supportsToolCalling: z.boolean().exactOptional(),
                              supportsReasoning: z.boolean().exactOptional(),
                              supportsVision: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: ['provider', 'modelId', 'name', 'keyName'] }),
                    ),
                  })
                  .openapi({
                    required: ['id', 'name', 'emoji', 'isDefault', 'isFast', 'main', 'fallbacks'],
                  }),
              ),
              credits: z
                .union([
                  z
                    .strictObject({
                      providerConfigId: z.string(),
                      defaultTierId: z.string(),
                      tiers: z.array(
                        z
                          .strictObject({
                            id: z.string(),
                            label: z.string(),
                            model: z
                              .strictObject({
                                provider: z.enum([
                                  'openai',
                                  'openrouter',
                                  'anthropic',
                                  'azure',
                                  'google',
                                  'activepieces',
                                  'cloudflare-gateway',
                                  'custom',
                                  'bedrock',
                                  'vertex',
                                  'mistral',
                                  'xai',
                                  'deepseek',
                                  'zai',
                                  'qwen',
                                  'minimax',
                                  'moonshot',
                                  'meta',
                                  'nvidia',
                                ]),
                                modelId: z.string(),
                                name: z.string(),
                                keyName: z.string(),
                                metadata: z
                                  .strictObject({
                                    contextTokens: z.number().exactOptional(),
                                    maxOutputTokens: z.number().exactOptional(),
                                    releaseDate: z.string().exactOptional(),
                                    inputCostPerMillionTokens: z.number().exactOptional(),
                                    outputCostPerMillionTokens: z.number().exactOptional(),
                                    cacheReadCostPerMillionTokens: z.number().exactOptional(),
                                    cacheWriteCostPerMillionTokens: z.number().exactOptional(),
                                    supportsToolCalling: z.boolean().exactOptional(),
                                    supportsReasoning: z.boolean().exactOptional(),
                                    supportsVision: z.boolean().exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .openapi({ required: ['provider', 'modelId', 'name', 'keyName'] }),
                          })
                          .openapi({ required: ['id', 'label', 'model'] }),
                      ),
                    })
                    .openapi({ required: ['providerConfigId', 'defaultTierId', 'tiers'] }),
                  z.null().nullable(),
                ])
                .exactOptional(),
              keys: z.array(
                z
                  .strictObject({
                    providerConfigId: z.string(),
                    provider: z.enum([
                      'openai',
                      'openrouter',
                      'anthropic',
                      'azure',
                      'google',
                      'activepieces',
                      'cloudflare-gateway',
                      'custom',
                      'bedrock',
                      'vertex',
                      'mistral',
                      'xai',
                      'deepseek',
                      'zai',
                      'qwen',
                      'minimax',
                      'moonshot',
                      'meta',
                      'nvidia',
                    ]),
                    name: z.string(),
                    models: z.array(
                      z
                        .strictObject({
                          id: z.string(),
                          name: z.string(),
                          type: z.enum(['image', 'text']),
                          metadata: z
                            .strictObject({
                              contextTokens: z.number().exactOptional(),
                              maxOutputTokens: z.number().exactOptional(),
                              releaseDate: z.string().exactOptional(),
                              inputCostPerMillionTokens: z.number().exactOptional(),
                              outputCostPerMillionTokens: z.number().exactOptional(),
                              cacheReadCostPerMillionTokens: z.number().exactOptional(),
                              cacheWriteCostPerMillionTokens: z.number().exactOptional(),
                              supportsToolCalling: z.boolean().exactOptional(),
                              supportsReasoning: z.boolean().exactOptional(),
                              supportsVision: z.boolean().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: ['id', 'name', 'type'] }),
                    ),
                  })
                  .openapi({ required: ['providerConfigId', 'provider', 'name', 'models'] }),
              ),
              defaultChoice: z
                .union([
                  z.xor([
                    z
                      .strictObject({ type: z.literal('tier'), tierId: z.string() })
                      .openapi({ required: ['type', 'tierId'] }),
                    z
                      .strictObject({
                        type: z.literal('model'),
                        provider: z.enum([
                          'openai',
                          'openrouter',
                          'anthropic',
                          'azure',
                          'google',
                          'activepieces',
                          'cloudflare-gateway',
                          'custom',
                          'bedrock',
                          'vertex',
                          'mistral',
                          'xai',
                          'deepseek',
                          'zai',
                          'qwen',
                          'minimax',
                          'moonshot',
                          'meta',
                          'nvidia',
                        ]),
                        providerConfigId: z.string(),
                        modelId: z.string(),
                      })
                      .openapi({ required: ['type', 'provider', 'providerConfigId', 'modelId'] }),
                  ]),
                  z.null().nullable(),
                ])
                .exactOptional(),
              movedTiers: z.record(z.string(), z.string()),
              specificModelsHidden: z.boolean(),
            })
            .openapi({ required: ['tiers', 'keys', 'movedTiers', 'specificModelsHidden'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AiProvidersRoute = createRoute({
  method: 'post',
  path: '/v1/ai-providers',
  tags: ['ai-providers'],
  description:
    'Connect a new AI provider key. The credentials are checked with the provider before saving.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('openai'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('openrouter'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('anthropic'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('azure'),
                config: z
                  .object({ resourceName: z.string(), apiVersion: z.string().exactOptional() })
                  .openapi({ required: ['resourceName'] }),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('google'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('cloudflare-gateway'),
                config: z
                  .object({
                    accountId: z.string(),
                    gatewayId: z.string(),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                    vertexProject: z.string().exactOptional(),
                    vertexRegion: z.string().exactOptional(),
                  })
                  .openapi({ required: ['accountId', 'gatewayId', 'models'] }),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('custom'),
                config: z
                  .object({
                    apiKeyHeader: z.string(),
                    baseUrl: z.string(),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                    defaultHeaders: z.record(z.string(), z.string()).exactOptional(),
                    apiStyle: z.enum(['chat', 'responses']).exactOptional(),
                  })
                  .openapi({ required: ['apiKeyHeader', 'baseUrl', 'models'] }),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('activepieces'),
                config: z.looseObject({}),
                auth: z
                  .strictObject({ apiKey: z.string(), apiKeyHash: z.string() })
                  .openapi({ required: ['apiKey', 'apiKeyHash'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('bedrock'),
                config: z.object({ region: z.string().min(1) }).openapi({ required: ['region'] }),
                auth: z
                  .strictObject({
                    accessKeyId: z.string().min(1),
                    secretAccessKey: z.string().min(1),
                    sessionToken: z.string().exactOptional(),
                  })
                  .openapi({ required: ['accessKeyId', 'secretAccessKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('vertex'),
                config: z
                  .object({
                    project: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                    region: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                  })
                  .openapi({ required: ['project', 'region', 'models'] }),
                auth: z
                  .strictObject({ serviceAccountJson: z.string().min(1) })
                  .openapi({ required: ['serviceAccountJson'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('mistral'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('xai'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('deepseek'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('zai'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('qwen'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('minimax'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('moonshot'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('meta'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
            z
              .object({
                displayName: z.string().min(1),
                provider: z.literal('nvidia'),
                config: z.looseObject({}),
                auth: z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
              })
              .openapi({ required: ['displayName', 'provider', 'config', 'auth'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              provider: z.enum([
                'openai',
                'openrouter',
                'anthropic',
                'azure',
                'google',
                'activepieces',
                'cloudflare-gateway',
                'custom',
                'bedrock',
                'vertex',
                'mistral',
                'xai',
                'deepseek',
                'zai',
                'qwen',
                'minimax',
                'moonshot',
                'meta',
                'nvidia',
              ]),
              config: z.union([
                z
                  .object({
                    apiKeyHeader: z.string(),
                    baseUrl: z.string(),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                    defaultHeaders: z.record(z.string(), z.string()).exactOptional(),
                    apiStyle: z.enum(['chat', 'responses']).exactOptional(),
                  })
                  .openapi({ required: ['apiKeyHeader', 'baseUrl', 'models'] }),
                z
                  .object({
                    accountId: z.string(),
                    gatewayId: z.string(),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                    vertexProject: z.string().exactOptional(),
                    vertexRegion: z.string().exactOptional(),
                  })
                  .openapi({ required: ['accountId', 'gatewayId', 'models'] }),
                z
                  .object({ resourceName: z.string(), apiVersion: z.string().exactOptional() })
                  .openapi({ required: ['resourceName'] }),
                z
                  .object({
                    project: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                    region: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                  })
                  .openapi({ required: ['project', 'region', 'models'] }),
                z.object({ region: z.string().min(1) }).openapi({ required: ['region'] }),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
              ]),
              enabledForChat: z.boolean(),
              modelScope: z.enum(['all', 'selected']),
              modelIds: z.array(z.string()),
              projectScope: z.enum(['all', 'selected', 'except']),
              projectIds: z.array(z.string()),
              status: z.enum(['active', 'out_of_credits', 'rejected', 'unreachable']),
              statusReason: z.union([z.string(), z.null().nullable()]),
              statusUpdated: z.union([z.string(), z.null().nullable()]),
            })
            .openapi({
              required: [
                'id',
                'name',
                'provider',
                'config',
                'enabledForChat',
                'modelScope',
                'modelIds',
                'projectScope',
                'projectIds',
                'status',
                'statusReason',
                'statusUpdated',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AiProvidersIdRecheckRoute = createRoute({
  method: 'post',
  path: '/v1/ai-providers/{id}/recheck',
  tags: ['ai-providers'],
  description: 'Check an AI provider key against its provider again and return its status.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              status: z.enum(['active', 'out_of_credits', 'rejected', 'unreachable']),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AiProvidersIdRoute = createRoute({
  method: 'post',
  path: '/v1/ai-providers/{id}',
  tags: ['ai-providers'],
  description: 'Update an AI provider key: its name, credentials, model scope or project access.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              displayName: z.string().min(1),
              config: z
                .union([
                  z
                    .object({
                      apiKeyHeader: z.string(),
                      baseUrl: z.string(),
                      models: z.array(
                        z
                          .object({
                            modelId: z.string(),
                            modelName: z.string(),
                            modelType: z.enum(['image', 'text']),
                          })
                          .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                      ),
                      defaultHeaders: z.record(z.string(), z.string()).exactOptional(),
                      apiStyle: z.enum(['chat', 'responses']).exactOptional(),
                    })
                    .openapi({ required: ['apiKeyHeader', 'baseUrl', 'models'] }),
                  z
                    .object({
                      accountId: z.string(),
                      gatewayId: z.string(),
                      models: z.array(
                        z
                          .object({
                            modelId: z.string(),
                            modelName: z.string(),
                            modelType: z.enum(['image', 'text']),
                          })
                          .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                      ),
                      vertexProject: z.string().exactOptional(),
                      vertexRegion: z.string().exactOptional(),
                    })
                    .openapi({ required: ['accountId', 'gatewayId', 'models'] }),
                  z
                    .object({ resourceName: z.string(), apiVersion: z.string().exactOptional() })
                    .openapi({ required: ['resourceName'] }),
                  z
                    .object({
                      project: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                      region: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                      models: z.array(
                        z
                          .object({
                            modelId: z.string(),
                            modelName: z.string(),
                            modelType: z.enum(['image', 'text']),
                          })
                          .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                      ),
                    })
                    .openapi({ required: ['project', 'region', 'models'] }),
                  z.object({ region: z.string().min(1) }).openapi({ required: ['region'] }),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                  z.looseObject({}),
                ])
                .exactOptional(),
              auth: z
                .union([
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                  z
                    .strictObject({ apiKey: z.string(), apiKeyHash: z.string() })
                    .openapi({ required: ['apiKey', 'apiKeyHash'] }),
                  z
                    .strictObject({
                      accessKeyId: z.string().min(1),
                      secretAccessKey: z.string().min(1),
                      sessionToken: z.string().exactOptional(),
                    })
                    .openapi({ required: ['accessKeyId', 'secretAccessKey'] }),
                  z
                    .strictObject({ serviceAccountJson: z.string().min(1) })
                    .openapi({ required: ['serviceAccountJson'] }),
                  z.strictObject({ apiKey: z.string() }).openapi({ required: ['apiKey'] }),
                ])
                .exactOptional(),
              enabledForChat: z.boolean().exactOptional(),
              modelScope: z.enum(['all', 'selected']).exactOptional(),
              modelIds: z.array(z.string()).exactOptional(),
              projectScope: z.enum(['all', 'selected', 'except']).exactOptional(),
              projectIds: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: ['displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string(),
              provider: z.enum([
                'openai',
                'openrouter',
                'anthropic',
                'azure',
                'google',
                'activepieces',
                'cloudflare-gateway',
                'custom',
                'bedrock',
                'vertex',
                'mistral',
                'xai',
                'deepseek',
                'zai',
                'qwen',
                'minimax',
                'moonshot',
                'meta',
                'nvidia',
              ]),
              config: z.union([
                z
                  .object({
                    apiKeyHeader: z.string(),
                    baseUrl: z.string(),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                    defaultHeaders: z.record(z.string(), z.string()).exactOptional(),
                    apiStyle: z.enum(['chat', 'responses']).exactOptional(),
                  })
                  .openapi({ required: ['apiKeyHeader', 'baseUrl', 'models'] }),
                z
                  .object({
                    accountId: z.string(),
                    gatewayId: z.string(),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                    vertexProject: z.string().exactOptional(),
                    vertexRegion: z.string().exactOptional(),
                  })
                  .openapi({ required: ['accountId', 'gatewayId', 'models'] }),
                z
                  .object({ resourceName: z.string(), apiVersion: z.string().exactOptional() })
                  .openapi({ required: ['resourceName'] }),
                z
                  .object({
                    project: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                    region: z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/),
                    models: z.array(
                      z
                        .object({
                          modelId: z.string(),
                          modelName: z.string(),
                          modelType: z.enum(['image', 'text']),
                        })
                        .openapi({ required: ['modelId', 'modelName', 'modelType'] }),
                    ),
                  })
                  .openapi({ required: ['project', 'region', 'models'] }),
                z.object({ region: z.string().min(1) }).openapi({ required: ['region'] }),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
                z.looseObject({}),
              ]),
              enabledForChat: z.boolean(),
              modelScope: z.enum(['all', 'selected']),
              modelIds: z.array(z.string()),
              projectScope: z.enum(['all', 'selected', 'except']),
              projectIds: z.array(z.string()),
              status: z.enum(['active', 'out_of_credits', 'rejected', 'unreachable']),
              statusReason: z.union([z.string(), z.null().nullable()]),
              statusUpdated: z.union([z.string(), z.null().nullable()]),
            })
            .openapi({
              required: [
                'id',
                'name',
                'provider',
                'config',
                'enabledForChat',
                'modelScope',
                'modelIds',
                'projectScope',
                'projectIds',
                'status',
                'statusReason',
                'statusUpdated',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1AiProvidersIdRoute = createRoute({
  method: 'delete',
  path: '/v1/ai-providers/{id}',
  tags: ['ai-providers'],
  description: 'Delete an AI provider key. Fails while a tier still uses it.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 204: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1PlatformModelTiersAdminRoute = createRoute({
  method: 'get',
  path: '/v1/platform-model-tiers/admin',
  tags: ['ai-model-tiers'],
  description: 'List the platform model tiers with their main model and fallbacks.',
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                id: z.string(),
                created: z.string(),
                updated: z.string(),
                platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                name: z.string(),
                emoji: z.string(),
                description: z.union([z.string(), z.null().nullable()]).exactOptional(),
                position: z.int().min(-9007199254740991).max(9007199254740991),
                entries: z.array(
                  z
                    .strictObject({
                      configId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                      modelId: z.string().min(1).max(256),
                    })
                    .openapi({ required: ['configId', 'modelId'] }),
                ),
                isDefault: z.boolean(),
                isFast: z.boolean(),
                thinkingBudget: z
                  .union([
                    z.int().min(-9007199254740991).max(9007199254740991),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                deleted: z.union([z.string(), z.null().nullable()]).exactOptional(),
                replacedBy: z
                  .union([z.string().regex(/^[0-9a-zA-Z]{21}$/), z.null().nullable()])
                  .exactOptional(),
              })
              .openapi({
                required: [
                  'id',
                  'created',
                  'updated',
                  'platformId',
                  'name',
                  'emoji',
                  'position',
                  'entries',
                  'isDefault',
                  'isFast',
                ],
              }),
          ),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1PlatformModelTiersRoute = createRoute({
  method: 'post',
  path: '/v1/platform-model-tiers',
  tags: ['ai-model-tiers'],
  description: 'Create a model tier: a named main model with fallbacks that builders pick.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(40),
              emoji: z
                .string()
                .regex(/^(\p{Extended_Pictographic}|\p{Regional_Indicator})/u)
                .min(1)
                .max(16),
              description: z.union([z.string().max(120), z.null().nullable()]).exactOptional(),
              entries: z
                .array(
                  z
                    .object({
                      configId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                      modelId: z.string().min(1).max(256),
                    })
                    .openapi({ required: ['configId', 'modelId'] }),
                )
                .min(1)
                .max(5),
              thinkingBudget: z
                .union([z.int().min(-9007199254740991).max(64000), z.null().nullable()])
                .exactOptional(),
            })
            .openapi({ required: ['name', 'emoji', 'entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
              name: z.string(),
              emoji: z.string(),
              description: z.union([z.string(), z.null().nullable()]).exactOptional(),
              position: z.int().min(-9007199254740991).max(9007199254740991),
              entries: z.array(
                z
                  .strictObject({
                    configId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    modelId: z.string().min(1).max(256),
                  })
                  .openapi({ required: ['configId', 'modelId'] }),
              ),
              isDefault: z.boolean(),
              isFast: z.boolean(),
              thinkingBudget: z
                .union([z.int().min(-9007199254740991).max(9007199254740991), z.null().nullable()])
                .exactOptional(),
              deleted: z.union([z.string(), z.null().nullable()]).exactOptional(),
              replacedBy: z
                .union([z.string().regex(/^[0-9a-zA-Z]{21}$/), z.null().nullable()])
                .exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'created',
                'updated',
                'platformId',
                'name',
                'emoji',
                'position',
                'entries',
                'isDefault',
                'isFast',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1PlatformModelTiersReorderRoute = createRoute({
  method: 'post',
  path: '/v1/platform-model-tiers/reorder',
  tags: ['ai-model-tiers'],
  description: 'Set the order tiers appear in for builders.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ tierIds: z.array(z.string().regex(/^[0-9a-zA-Z]{21}$/)).min(1) })
            .openapi({ required: ['tierIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                id: z.string(),
                created: z.string(),
                updated: z.string(),
                platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                name: z.string(),
                emoji: z.string(),
                description: z.union([z.string(), z.null().nullable()]).exactOptional(),
                position: z.int().min(-9007199254740991).max(9007199254740991),
                entries: z.array(
                  z
                    .strictObject({
                      configId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                      modelId: z.string().min(1).max(256),
                    })
                    .openapi({ required: ['configId', 'modelId'] }),
                ),
                isDefault: z.boolean(),
                isFast: z.boolean(),
                thinkingBudget: z
                  .union([
                    z.int().min(-9007199254740991).max(9007199254740991),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                deleted: z.union([z.string(), z.null().nullable()]).exactOptional(),
                replacedBy: z
                  .union([z.string().regex(/^[0-9a-zA-Z]{21}$/), z.null().nullable()])
                  .exactOptional(),
              })
              .openapi({
                required: [
                  'id',
                  'created',
                  'updated',
                  'platformId',
                  'name',
                  'emoji',
                  'position',
                  'entries',
                  'isDefault',
                  'isFast',
                ],
              }),
          ),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1PlatformModelTiersIdRoute = createRoute({
  method: 'post',
  path: '/v1/platform-model-tiers/{id}',
  tags: ['ai-model-tiers'],
  description: 'Update a model tier: its name, models, fallbacks or default flags.',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(40).exactOptional(),
              emoji: z
                .string()
                .regex(/^(\p{Extended_Pictographic}|\p{Regional_Indicator})/u)
                .min(1)
                .max(16)
                .exactOptional(),
              description: z.union([z.string().max(120), z.null().nullable()]).exactOptional(),
              entries: z
                .array(
                  z
                    .object({
                      configId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                      modelId: z.string().min(1).max(256),
                    })
                    .openapi({ required: ['configId', 'modelId'] }),
                )
                .min(1)
                .max(5)
                .exactOptional(),
              thinkingBudget: z
                .union([z.int().min(-9007199254740991).max(64000), z.null().nullable()])
                .exactOptional(),
              isDefault: z.literal(true).exactOptional(),
              isFast: z.literal(true).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.string(),
              created: z.string(),
              updated: z.string(),
              platformId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
              name: z.string(),
              emoji: z.string(),
              description: z.union([z.string(), z.null().nullable()]).exactOptional(),
              position: z.int().min(-9007199254740991).max(9007199254740991),
              entries: z.array(
                z
                  .strictObject({
                    configId: z.string().regex(/^[0-9a-zA-Z]{21}$/),
                    modelId: z.string().min(1).max(256),
                  })
                  .openapi({ required: ['configId', 'modelId'] }),
              ),
              isDefault: z.boolean(),
              isFast: z.boolean(),
              thinkingBudget: z
                .union([z.int().min(-9007199254740991).max(9007199254740991), z.null().nullable()])
                .exactOptional(),
              deleted: z.union([z.string(), z.null().nullable()]).exactOptional(),
              replacedBy: z
                .union([z.string().regex(/^[0-9a-zA-Z]{21}$/), z.null().nullable()])
                .exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'created',
                'updated',
                'platformId',
                'name',
                'emoji',
                'position',
                'entries',
                'isDefault',
                'isFast',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const deleteV1PlatformModelTiersIdRoute = createRoute({
  method: 'delete',
  path: '/v1/platform-model-tiers/{id}',
  tags: ['ai-model-tiers'],
  description: 'Delete a model tier.',
  request: {
    query: z.object({
      replacedBy: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'query',
            name: 'replacedBy',
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/^[0-9a-zA-Z]{21}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]{21}$' },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: { 204: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1AiToolsRoute = createRoute({
  method: 'get',
  path: '/v1/ai-tools',
  tags: ['ai-capabilities'],
  description:
    'List the configured AI capabilities (web search, web scraping, image generation, embeddings). Secrets are never returned.',
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                id: z.string(),
                capability: z.enum([
                  'WEB_SEARCH',
                  'WEB_SCRAPING',
                  'IMAGE_GENERATION',
                  'EMBEDDINGS',
                ]),
                provider: z.enum(['tavily', 'firecrawl', 'apify', 'fal', 'ai_provider']),
                config: z.union([z.record(z.string(), z.any()), z.null().nullable()]),
                enabled: z.boolean(),
                hasApiKey: z.boolean(),
              })
              .openapi({
                required: ['id', 'capability', 'provider', 'config', 'enabled', 'hasApiKey'],
              }),
          ),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const postV1AiToolsRoute = createRoute({
  method: 'post',
  path: '/v1/ai-tools',
  tags: ['ai-capabilities'],
  description: 'Set up an AI capability with a service API key or one of your AI provider keys.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              capability: z.enum(['WEB_SEARCH', 'WEB_SCRAPING', 'IMAGE_GENERATION', 'EMBEDDINGS']),
              provider: z.enum(['tavily', 'firecrawl', 'apify', 'fal', 'ai_provider']),
              auth: z
                .object({ apiKey: z.string().min(1) })
                .exactOptional()
                .openapi({ required: ['apiKey'] }),
              config: z.record(z.string(), z.any()).exactOptional(),
              enabled: z.boolean().exactOptional(),
            })
            .openapi({ required: ['capability', 'provider'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const postV1AiToolsIdRoute = createRoute({
  method: 'post',
  path: '/v1/ai-tools/{id}',
  tags: ['ai-capabilities'],
  description: 'Update an AI capability, for example to turn it back on with its saved key.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider: z
                .enum(['tavily', 'firecrawl', 'apify', 'fal', 'ai_provider'])
                .exactOptional(),
              auth: z
                .object({ apiKey: z.string().min(1) })
                .exactOptional()
                .openapi({ required: ['apiKey'] }),
              config: z.record(z.string(), z.any()).exactOptional(),
              enabled: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const deleteV1AiToolsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/ai-tools/{id}',
  tags: ['ai-capabilities'],
  description: 'Reset an AI capability so it falls back to the default AI provider.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, in: 'path', name: 'id', required: true } }),
    }),
  },
  responses: { 204: { description: 'Default Response' } },
  security: [{ apiKey: [] }],
})

export const getV1AiUsageOverviewRoute = createRoute({
  method: 'get',
  path: '/v1/ai-usage/overview',
  tags: ['ai-usage'],
  description: 'AI spend and calls for a period, with totals, trend and top items.',
  request: {
    query: z.object({
      period: z
        .enum(['1h', '6h', '12h', '24h', '7d', '30d', '90d', 'this-month', 'last-month'])
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['1h', '6h', '12h', '24h', '7d', '30d', '90d', 'this-month', 'last-month'],
            },
            in: 'query',
            name: 'period',
            required: true,
          },
        }),
      scope: z
        .enum(['all', 'production', 'testing'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['all', 'production', 'testing'] },
            in: 'query',
            name: 'scope',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              history: z
                .strictObject({
                  trackingSince: z.union([z.string(), z.null().nullable()]),
                  hasAnyUsage: z.boolean(),
                  coveredDays: z.number(),
                  periodDays: z.number(),
                  currentCoverage: z.number(),
                  comparable: z.boolean(),
                })
                .openapi({
                  required: [
                    'trackingSince',
                    'hasAnyUsage',
                    'coveredDays',
                    'periodDays',
                    'currentCoverage',
                    'comparable',
                  ],
                }),
              ranges: z
                .strictObject({
                  current: z
                    .strictObject({ start: z.string(), end: z.string() })
                    .openapi({ required: ['start', 'end'] }),
                  previous: z
                    .strictObject({ start: z.string(), end: z.string() })
                    .openapi({ required: ['start', 'end'] }),
                })
                .openapi({ required: ['current', 'previous'] }),
              totals: z
                .strictObject({
                  spendUsd: z.number(),
                  previousSpendUsd: z.number(),
                  calls: z.number(),
                  previousCalls: z.number(),
                  tokens: z.number(),
                  previousTokens: z.number(),
                  cacheShare: z.number(),
                  managedCredits: z.number(),
                })
                .openapi({
                  required: [
                    'spendUsd',
                    'previousSpendUsd',
                    'calls',
                    'previousCalls',
                    'tokens',
                    'previousTokens',
                    'cacheShare',
                    'managedCredits',
                  ],
                }),
              series: z.array(
                z
                  .strictObject({
                    label: z.string(),
                    spendUsd: z.union([z.number(), z.null().nullable()]),
                    calls: z.union([z.number(), z.null().nullable()]),
                    tokens: z.union([z.number(), z.null().nullable()]),
                    previousSpendUsd: z.union([z.number(), z.null().nullable()]),
                    previousCalls: z.union([z.number(), z.null().nullable()]),
                    previousTokens: z.union([z.number(), z.null().nullable()]),
                  })
                  .openapi({
                    required: [
                      'label',
                      'spendUsd',
                      'calls',
                      'tokens',
                      'previousSpendUsd',
                      'previousCalls',
                      'previousTokens',
                    ],
                  }),
              ),
              bySource: z.array(
                z
                  .strictObject({
                    source: z.enum([
                      'flow-steps',
                      'agent-steps',
                      'agents',
                      'chat',
                      'knowledge-base',
                    ]),
                    spendUsd: z.number(),
                  })
                  .openapi({ required: ['source', 'spendUsd'] }),
              ),
              top: z
                .record(
                  z.string(),
                  z.array(
                    z
                      .strictObject({
                        dimension: z.enum(['project', 'flow', 'agent', 'user', 'key', 'model']),
                        id: z.string(),
                        name: z.union([z.string(), z.null().nullable()]),
                        parent: z.string().exactOptional(),
                        provider: z
                          .enum([
                            'openai',
                            'openrouter',
                            'anthropic',
                            'azure',
                            'google',
                            'activepieces',
                            'cloudflare-gateway',
                            'custom',
                            'bedrock',
                            'vertex',
                            'mistral',
                            'xai',
                            'deepseek',
                            'zai',
                            'qwen',
                            'minimax',
                            'moonshot',
                            'meta',
                            'nvidia',
                          ])
                          .exactOptional(),
                        flowCount: z.number().exactOptional(),
                        agentCount: z.number().exactOptional(),
                        spendUsd: z.number(),
                        previousSpendUsd: z.number(),
                        calls: z.number(),
                        tokens: z.number(),
                        comparable: z.boolean(),
                        sharedUsd: z.number().exactOptional(),
                        inputPrice: z.number().exactOptional(),
                        outputPrice: z.number().exactOptional(),
                      })
                      .openapi({
                        required: [
                          'dimension',
                          'id',
                          'name',
                          'spendUsd',
                          'previousSpendUsd',
                          'calls',
                          'tokens',
                          'comparable',
                        ],
                      }),
                  ),
                )
                .superRefine((o, ctx) => {
                  const allowed = ['project', 'flow', 'agent', 'user', 'key', 'model']
                  for (const k of Object.keys(o)) {
                    if (!allowed.includes(k)) {
                      ctx.addIssue({ code: 'custom', path: [k] })
                    }
                  }
                })
                .openapi({ required: ['project', 'flow', 'agent', 'user', 'key', 'model'] }),
            })
            .openapi({ required: ['history', 'ranges', 'totals', 'series', 'bySource', 'top'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AiUsageItemsRoute = createRoute({
  method: 'get',
  path: '/v1/ai-usage/items',
  tags: ['ai-usage'],
  description: 'AI spend broken down by project, flow, agent, user, key or model.',
  request: {
    query: z.object({
      period: z
        .enum(['1h', '6h', '12h', '24h', '7d', '30d', '90d', 'this-month', 'last-month'])
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['1h', '6h', '12h', '24h', '7d', '30d', '90d', 'this-month', 'last-month'],
            },
            in: 'query',
            name: 'period',
            required: true,
          },
        }),
      scope: z
        .enum(['all', 'production', 'testing'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['all', 'production', 'testing'] },
            in: 'query',
            name: 'scope',
            required: true,
          },
        }),
      dimension: z
        .enum(['project', 'flow', 'agent', 'user', 'key', 'model'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['project', 'flow', 'agent', 'user', 'key', 'model'] },
            in: 'query',
            name: 'dimension',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              history: z
                .strictObject({
                  trackingSince: z.union([z.string(), z.null().nullable()]),
                  hasAnyUsage: z.boolean(),
                  coveredDays: z.number(),
                  periodDays: z.number(),
                  currentCoverage: z.number(),
                  comparable: z.boolean(),
                })
                .openapi({
                  required: [
                    'trackingSince',
                    'hasAnyUsage',
                    'coveredDays',
                    'periodDays',
                    'currentCoverage',
                    'comparable',
                  ],
                }),
              ranges: z
                .strictObject({
                  current: z
                    .strictObject({ start: z.string(), end: z.string() })
                    .openapi({ required: ['start', 'end'] }),
                  previous: z
                    .strictObject({ start: z.string(), end: z.string() })
                    .openapi({ required: ['start', 'end'] }),
                })
                .openapi({ required: ['current', 'previous'] }),
              items: z.array(
                z
                  .strictObject({
                    dimension: z.enum(['project', 'flow', 'agent', 'user', 'key', 'model']),
                    id: z.string(),
                    name: z.union([z.string(), z.null().nullable()]),
                    parent: z.string().exactOptional(),
                    provider: z
                      .enum([
                        'openai',
                        'openrouter',
                        'anthropic',
                        'azure',
                        'google',
                        'activepieces',
                        'cloudflare-gateway',
                        'custom',
                        'bedrock',
                        'vertex',
                        'mistral',
                        'xai',
                        'deepseek',
                        'zai',
                        'qwen',
                        'minimax',
                        'moonshot',
                        'meta',
                        'nvidia',
                      ])
                      .exactOptional(),
                    flowCount: z.number().exactOptional(),
                    agentCount: z.number().exactOptional(),
                    spendUsd: z.number(),
                    previousSpendUsd: z.number(),
                    calls: z.number(),
                    tokens: z.number(),
                    comparable: z.boolean(),
                    sharedUsd: z.number().exactOptional(),
                    inputPrice: z.number().exactOptional(),
                    outputPrice: z.number().exactOptional(),
                  })
                  .openapi({
                    required: [
                      'dimension',
                      'id',
                      'name',
                      'spendUsd',
                      'previousSpendUsd',
                      'calls',
                      'tokens',
                      'comparable',
                    ],
                  }),
              ),
              count: z.number(),
              itemsSpendUsd: z.number(),
              totalSpendUsd: z.number(),
              truncated: z.boolean(),
            })
            .openapi({
              required: [
                'history',
                'ranges',
                'items',
                'count',
                'itemsSpendUsd',
                'totalSpendUsd',
                'truncated',
              ],
            }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})

export const getV1AiUsageItemsDimensionIdRoute = createRoute({
  method: 'get',
  path: '/v1/ai-usage/items/{dimension}/{id}',
  tags: ['ai-usage'],
  description: 'AI spend for one project, flow, agent, user, key or model.',
  request: {
    query: z.object({
      period: z
        .enum(['1h', '6h', '12h', '24h', '7d', '30d', '90d', 'this-month', 'last-month'])
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['1h', '6h', '12h', '24h', '7d', '30d', '90d', 'this-month', 'last-month'],
            },
            in: 'query',
            name: 'period',
            required: true,
          },
        }),
      scope: z
        .enum(['all', 'production', 'testing'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['all', 'production', 'testing'] },
            in: 'query',
            name: 'scope',
            required: true,
          },
        }),
    }),
    params: z.object({
      dimension: z
        .enum(['project', 'flow', 'agent', 'user', 'key', 'model'])
        .openapi({
          param: {
            schema: { type: 'string', enum: ['project', 'flow', 'agent', 'user', 'key', 'model'] },
            in: 'path',
            name: 'dimension',
            required: true,
          },
        }),
      id: z
        .string()
        .min(1)
        .max(512)
        .openapi({
          param: {
            schema: { type: 'string', minLength: 1, maxLength: 512 },
            in: 'path',
            name: 'id',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              history: z
                .strictObject({
                  trackingSince: z.union([z.string(), z.null().nullable()]),
                  hasAnyUsage: z.boolean(),
                  coveredDays: z.number(),
                  periodDays: z.number(),
                  currentCoverage: z.number(),
                  comparable: z.boolean(),
                })
                .openapi({
                  required: [
                    'trackingSince',
                    'hasAnyUsage',
                    'coveredDays',
                    'periodDays',
                    'currentCoverage',
                    'comparable',
                  ],
                }),
              ranges: z
                .strictObject({
                  current: z
                    .strictObject({ start: z.string(), end: z.string() })
                    .openapi({ required: ['start', 'end'] }),
                  previous: z
                    .strictObject({ start: z.string(), end: z.string() })
                    .openapi({ required: ['start', 'end'] }),
                })
                .openapi({ required: ['current', 'previous'] }),
              item: z
                .strictObject({
                  dimension: z.enum(['project', 'flow', 'agent', 'user', 'key', 'model']),
                  id: z.string(),
                  name: z.union([z.string(), z.null().nullable()]),
                  parent: z.string().exactOptional(),
                  provider: z
                    .enum([
                      'openai',
                      'openrouter',
                      'anthropic',
                      'azure',
                      'google',
                      'activepieces',
                      'cloudflare-gateway',
                      'custom',
                      'bedrock',
                      'vertex',
                      'mistral',
                      'xai',
                      'deepseek',
                      'zai',
                      'qwen',
                      'minimax',
                      'moonshot',
                      'meta',
                      'nvidia',
                    ])
                    .exactOptional(),
                  flowCount: z.number().exactOptional(),
                  agentCount: z.number().exactOptional(),
                  spendUsd: z.number(),
                  previousSpendUsd: z.number(),
                  calls: z.number(),
                  tokens: z.number(),
                  comparable: z.boolean(),
                  sharedUsd: z.number().exactOptional(),
                  inputPrice: z.number().exactOptional(),
                  outputPrice: z.number().exactOptional(),
                })
                .openapi({
                  required: [
                    'dimension',
                    'id',
                    'name',
                    'spendUsd',
                    'previousSpendUsd',
                    'calls',
                    'tokens',
                    'comparable',
                  ],
                }),
              series: z.array(
                z
                  .strictObject({
                    label: z.string(),
                    spendUsd: z.union([z.number(), z.null().nullable()]),
                    calls: z.union([z.number(), z.null().nullable()]),
                    tokens: z.union([z.number(), z.null().nullable()]),
                    previousSpendUsd: z.union([z.number(), z.null().nullable()]),
                    previousCalls: z.union([z.number(), z.null().nullable()]),
                    previousTokens: z.union([z.number(), z.null().nullable()]),
                  })
                  .openapi({
                    required: [
                      'label',
                      'spendUsd',
                      'calls',
                      'tokens',
                      'previousSpendUsd',
                      'previousCalls',
                      'previousTokens',
                    ],
                  }),
              ),
              related: z
                .record(
                  z.string(),
                  z.array(
                    z
                      .strictObject({
                        dimension: z.enum(['project', 'flow', 'agent', 'user', 'key', 'model']),
                        id: z.string(),
                        name: z.union([z.string(), z.null().nullable()]),
                        parent: z.string().exactOptional(),
                        provider: z
                          .enum([
                            'openai',
                            'openrouter',
                            'anthropic',
                            'azure',
                            'google',
                            'activepieces',
                            'cloudflare-gateway',
                            'custom',
                            'bedrock',
                            'vertex',
                            'mistral',
                            'xai',
                            'deepseek',
                            'zai',
                            'qwen',
                            'minimax',
                            'moonshot',
                            'meta',
                            'nvidia',
                          ])
                          .exactOptional(),
                        flowCount: z.number().exactOptional(),
                        agentCount: z.number().exactOptional(),
                        spendUsd: z.number(),
                        previousSpendUsd: z.number(),
                        calls: z.number(),
                        tokens: z.number(),
                        comparable: z.boolean(),
                        sharedUsd: z.number().exactOptional(),
                        inputPrice: z.number().exactOptional(),
                        outputPrice: z.number().exactOptional(),
                      })
                      .openapi({
                        required: [
                          'dimension',
                          'id',
                          'name',
                          'spendUsd',
                          'previousSpendUsd',
                          'calls',
                          'tokens',
                          'comparable',
                        ],
                      }),
                  ),
                )
                .superRefine((o, ctx) => {
                  const allowed = ['project', 'flow', 'agent', 'user', 'key', 'model']
                  for (const k of Object.keys(o)) {
                    if (!allowed.includes(k)) {
                      ctx.addIssue({ code: 'custom', path: [k] })
                    }
                  }
                }),
              bySource: z
                .array(
                  z
                    .strictObject({
                      source: z.enum([
                        'flow-steps',
                        'agent-steps',
                        'agents',
                        'chat',
                        'knowledge-base',
                      ]),
                      spendUsd: z.number(),
                    })
                    .openapi({ required: ['source', 'spendUsd'] }),
                )
                .exactOptional(),
              runs: z.number().exactOptional(),
              reportedUsd: z.number().exactOptional(),
              estimatedUsd: z.number().exactOptional(),
            })
            .openapi({ required: ['history', 'ranges', 'item', 'series', 'related'] }),
        },
      },
    },
  },
  security: [{ apiKey: [] }],
})
