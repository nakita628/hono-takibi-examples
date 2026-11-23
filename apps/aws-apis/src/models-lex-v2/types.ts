type NewCustomVocabularyItem = { phrase: {}; weight?: {} | undefined; displayAs?: {} | undefined }
type BatchCreateCustomVocabularyItemResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  errors?: {} | undefined
  resources?: {} | undefined
}
type CustomVocabularyEntryId = { itemId: {} }
type BatchDeleteCustomVocabularyItemResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  errors?: {} | undefined
  resources?: {} | undefined
}
type CustomVocabularyItem = {
  itemId: {}
  phrase: {}
  weight?: {} | undefined
  displayAs?: {} | undefined
}
type BatchUpdateCustomVocabularyItemResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  errors?: {} | undefined
  resources?: {} | undefined
}
type BuildBotLocaleResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botLocaleStatus?: {} | undefined
  lastBuildSubmittedDateTime?: {} | undefined
}
type DeleteBotLocaleResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botLocaleStatus?: {} | undefined
}
type DescribeBotLocaleResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  localeName?: {} | undefined
  description?: {} | undefined
  nluIntentConfidenceThreshold?: {} | undefined
  voiceSettings?: { voiceId: {}; engine?: {} | undefined } | undefined
  intentsCount?: {} | undefined
  slotTypesCount?: {} | undefined
  botLocaleStatus?: {} | undefined
  failureReasons?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  lastBuildSubmittedDateTime?: {} | undefined
  botLocaleHistoryEvents?: {} | undefined
  recommendedActions?: {} | undefined
}
type UpdateBotLocaleResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  localeName?: {} | undefined
  description?: {} | undefined
  nluIntentConfidenceThreshold?: {} | undefined
  voiceSettings?: { voiceId: {}; engine?: {} | undefined } | undefined
  botLocaleStatus?: {} | undefined
  failureReasons?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  recommendedActions?: {} | undefined
}
type TagValue = string
type BotMember = {
  botMemberId: {}
  botMemberName: {}
  botMemberAliasId: {}
  botMemberAliasName: {}
  botMemberVersion: {}
}
type CreateBotResponse = {
  botId?: {} | undefined
  botName?: {} | undefined
  description?: {} | undefined
  roleArn?: {} | undefined
  dataPrivacy?: { childDirected: {} } | undefined
  idleSessionTTLInSeconds?: {} | undefined
  botStatus?: {} | undefined
  creationDateTime?: {} | undefined
  botTags?: {} | undefined
  testBotAliasTags?: {} | undefined
  botType?: {} | undefined
  botMembers?: {} | undefined
}
type BotFilter = { name: {}; values: {}; operator: {} }
type ListBotsResponse = { botSummaries?: {} | undefined; nextToken?: {} | undefined }
type LambdaCodeHook = { lambdaARN: {}; codeHookInterfaceVersion: {} }
type BotAliasLocaleSettings = {
  enabled: {}
  codeHookSpecification?: { lambdaCodeHook: LambdaCodeHook } | undefined
}
type SentimentAnalysisSettings = { detectSentiment: {} }
type CreateBotAliasResponse = {
  botAliasId?: {} | undefined
  botAliasName?: {} | undefined
  description?: {} | undefined
  botVersion?: {} | undefined
  botAliasLocaleSettings?: {} | undefined
  conversationLogSettings?:
    | { textLogSettings?: {} | undefined; audioLogSettings?: {} | undefined }
    | undefined
  sentimentAnalysisSettings?: SentimentAnalysisSettings | undefined
  botAliasStatus?: {} | undefined
  botId?: {} | undefined
  creationDateTime?: {} | undefined
  tags?: {} | undefined
}
type ListBotAliasesResponse = {
  botAliasSummaries?: {} | undefined
  nextToken?: {} | undefined
  botId?: {} | undefined
}
type CreateBotLocaleResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeName?: {} | undefined
  localeId?: {} | undefined
  description?: {} | undefined
  nluIntentConfidenceThreshold?: {} | undefined
  voiceSettings?: { voiceId: {}; engine?: {} | undefined } | undefined
  botLocaleStatus?: {} | undefined
  creationDateTime?: {} | undefined
}
type BotLocaleFilter = { name: {}; values: {}; operator: {} }
type ListBotLocalesResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  nextToken?: {} | undefined
  botLocaleSummaries?: {} | undefined
}
type BotVersionLocaleDetails = { sourceBotVersion: {} }
type CreateBotVersionResponse = {
  botId?: {} | undefined
  description?: {} | undefined
  botVersion?: {} | undefined
  botVersionLocaleSpecification?: {} | undefined
  botStatus?: {} | undefined
  creationDateTime?: {} | undefined
}
type ListBotVersionsResponse = {
  botId?: {} | undefined
  botVersionSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type CreateExportResponse = {
  exportId?: {} | undefined
  resourceSpecification?:
    | {
        botExportSpecification?: { botId: {}; botVersion: {} } | undefined
        botLocaleExportSpecification?: { botId: {}; botVersion: {}; localeId: {} } | undefined
        customVocabularyExportSpecification?:
          | { botId: {}; botVersion: {}; localeId: {} }
          | undefined
      }
    | undefined
  fileFormat?: {} | undefined
  exportStatus?: {} | undefined
  creationDateTime?: {} | undefined
}
type ExportFilter = { name: {}; values: {}; operator: {} }
type ListExportsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  exportSummaries?: {} | undefined
  nextToken?: {} | undefined
  localeId?: {} | undefined
}
type SampleUtterance = { utterance: {} }
type ResponseSpecification = { messageGroups: {}; allowInterrupt?: {} | undefined }
type DialogAction = {
  type: {}
  slotToElicit?: {} | undefined
  suppressNextMessage?: {} | undefined
}
type IntentOverride = { name?: {} | undefined; slots?: {} | undefined }
type ConditionalSpecification = {
  active: {}
  conditionalBranches: {}
  defaultBranch: {
    nextStep?:
      | {
          dialogAction?: DialogAction | undefined
          intent?: IntentOverride | undefined
          sessionAttributes?: {} | undefined
        }
      | undefined
    response?: ResponseSpecification | undefined
  }
}
type InputContext = { name: {} }
type OutputContext = { name: {}; timeToLiveInSeconds: {}; turnsToLive: {} }
type DialogCodeHookInvocationSetting = {
  enableCodeHookInvocation: {}
  active: {}
  invocationLabel?: {} | undefined
  postCodeHookSpecification: {
    successResponse?: ResponseSpecification | undefined
    successNextStep?:
      | {
          dialogAction?: DialogAction | undefined
          intent?: IntentOverride | undefined
          sessionAttributes?: {} | undefined
        }
      | undefined
    successConditional?:
      | {
          active: {}
          conditionalBranches: {}
          defaultBranch: {
            nextStep?:
              | {
                  dialogAction?: DialogAction | undefined
                  intent?: IntentOverride | undefined
                  sessionAttributes?: {} | undefined
                }
              | undefined
            response?: ResponseSpecification | undefined
          }
        }
      | undefined
    failureResponse?: ResponseSpecification | undefined
    failureNextStep?:
      | {
          dialogAction?: DialogAction | undefined
          intent?: IntentOverride | undefined
          sessionAttributes?: {} | undefined
        }
      | undefined
    failureConditional?:
      | {
          active: {}
          conditionalBranches: {}
          defaultBranch: {
            nextStep?:
              | {
                  dialogAction?: DialogAction | undefined
                  intent?: IntentOverride | undefined
                  sessionAttributes?: {} | undefined
                }
              | undefined
            response?: ResponseSpecification | undefined
          }
        }
      | undefined
    timeoutResponse?: ResponseSpecification | undefined
    timeoutNextStep?:
      | {
          dialogAction?: DialogAction | undefined
          intent?: IntentOverride | undefined
          sessionAttributes?: {} | undefined
        }
      | undefined
    timeoutConditional?:
      | {
          active: {}
          conditionalBranches: {}
          defaultBranch: {
            nextStep?:
              | {
                  dialogAction?: DialogAction | undefined
                  intent?: IntentOverride | undefined
                  sessionAttributes?: {} | undefined
                }
              | undefined
            response?: ResponseSpecification | undefined
          }
        }
      | undefined
  }
}
type CreateIntentResponse = {
  intentId?: {} | undefined
  intentName?: {} | undefined
  description?: {} | undefined
  parentIntentSignature?: {} | undefined
  sampleUtterances?: {} | undefined
  dialogCodeHook?: { enabled: {} } | undefined
  fulfillmentCodeHook?:
    | {
        enabled: {}
        postFulfillmentStatusSpecification?:
          | {
              successResponse?: ResponseSpecification | undefined
              failureResponse?: ResponseSpecification | undefined
              timeoutResponse?: ResponseSpecification | undefined
              successNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              successConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              failureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              failureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              timeoutNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              timeoutConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
            }
          | undefined
        fulfillmentUpdatesSpecification?:
          | {
              active: {}
              startResponse?:
                | { delayInSeconds: {}; messageGroups: {}; allowInterrupt?: {} | undefined }
                | undefined
              updateResponse?:
                | { frequencyInSeconds: {}; messageGroups: {}; allowInterrupt?: {} | undefined }
                | undefined
              timeoutInSeconds?: {} | undefined
            }
          | undefined
        active?: {} | undefined
      }
    | undefined
  intentConfirmationSetting?:
    | {
        promptSpecification: {
          messageGroups: {}
          maxRetries: {}
          allowInterrupt?: {} | undefined
          messageSelectionStrategy?: {} | undefined
          promptAttemptsSpecification?: {} | undefined
        }
        declinationResponse?: { messageGroups: {}; allowInterrupt?: {} | undefined } | undefined
        active?: {} | undefined
        confirmationResponse?: ResponseSpecification | undefined
        confirmationNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        confirmationConditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
        declinationNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        declinationConditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
        failureResponse?: ResponseSpecification | undefined
        failureNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        failureConditional?: ConditionalSpecification | undefined
        codeHook?:
          | {
              enableCodeHookInvocation: {}
              active: {}
              invocationLabel?: {} | undefined
              postCodeHookSpecification: {
                successResponse?: ResponseSpecification | undefined
                successNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                successConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
                failureResponse?: ResponseSpecification | undefined
                failureNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                failureConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
                timeoutResponse?: ResponseSpecification | undefined
                timeoutNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                timeoutConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
              }
            }
          | undefined
        elicitationCodeHook?:
          | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
          | undefined
      }
    | undefined
  intentClosingSetting?:
    | {
        closingResponse?: { messageGroups: {}; allowInterrupt?: {} | undefined } | undefined
        active?: {} | undefined
        nextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        conditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
      }
    | undefined
  inputContexts?: {} | undefined
  outputContexts?: {} | undefined
  kendraConfiguration?:
    | {
        kendraIndex: {}
        queryFilterStringEnabled?: {} | undefined
        queryFilterString?: {} | undefined
      }
    | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  creationDateTime?: {} | undefined
  initialResponseSetting?:
    | {
        initialResponse?: ResponseSpecification | undefined
        nextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        conditional?: ConditionalSpecification | undefined
        codeHook?: DialogCodeHookInvocationSetting | undefined
      }
    | undefined
}
type IntentFilter = { name: {}; values: {}; operator: {} }
type ListIntentsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  intentSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type CreateResourcePolicyResponse = { resourceArn?: {} | undefined; revisionId?: {} | undefined }
type DeleteResourcePolicyResponse = { resourceArn?: {} | undefined; revisionId?: {} | undefined }
type DescribeResourcePolicyResponse = {
  resourceArn?: {} | undefined
  policy?: {} | undefined
  revisionId?: {} | undefined
}
type UpdateResourcePolicyResponse = { resourceArn?: {} | undefined; revisionId?: {} | undefined }
type Principal = { service?: {} | undefined; arn?: {} | undefined }
type Operation = string
type ConditionValue = string
type ConditionKeyValueMap = { [x: string]: ConditionValue }
type CreateResourcePolicyStatementResponse = {
  resourceArn?: {} | undefined
  revisionId?: {} | undefined
}
type WaitAndContinueSpecification = {
  waitingResponse: { messageGroups: {}; allowInterrupt?: {} | undefined }
  continueResponse: { messageGroups: {}; allowInterrupt?: {} | undefined }
  stillWaitingResponse?:
    | {
        messageGroups: {}
        frequencyInSeconds: {}
        timeoutInSeconds: {}
        allowInterrupt?: {} | undefined
      }
    | undefined
  active?: {} | undefined
}
type CreateSlotResponse = {
  slotId?: {} | undefined
  slotName?: {} | undefined
  description?: {} | undefined
  slotTypeId?: {} | undefined
  valueElicitationSetting?:
    | {
        defaultValueSpecification?: { defaultValueList: {} } | undefined
        slotConstraint: {}
        promptSpecification?:
          | {
              messageGroups: {}
              maxRetries: {}
              allowInterrupt?: {} | undefined
              messageSelectionStrategy?: {} | undefined
              promptAttemptsSpecification?: {} | undefined
            }
          | undefined
        sampleUtterances?: {} | undefined
        waitAndContinueSpecification?: WaitAndContinueSpecification | undefined
        slotCaptureSetting?:
          | {
              captureResponse?: ResponseSpecification | undefined
              captureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              captureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              failureResponse?: ResponseSpecification | undefined
              failureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              failureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              codeHook?:
                | {
                    enableCodeHookInvocation: {}
                    active: {}
                    invocationLabel?: {} | undefined
                    postCodeHookSpecification: {
                      successResponse?: ResponseSpecification | undefined
                      successNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      successConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                      failureResponse?: ResponseSpecification | undefined
                      failureNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      failureConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                      timeoutResponse?: ResponseSpecification | undefined
                      timeoutNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      timeoutConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                    }
                  }
                | undefined
              elicitationCodeHook?:
                | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
  obfuscationSetting?: { obfuscationSettingType: {} } | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  intentId?: {} | undefined
  creationDateTime?: {} | undefined
  multipleValuesSetting?: { allowMultipleValues?: {} | undefined } | undefined
  subSlotSetting?: { expression?: {} | undefined; slotSpecifications?: {} | undefined } | undefined
}
type SlotFilter = { name: {}; values: {}; operator: {} }
type ListSlotsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  intentId?: {} | undefined
  slotSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type SlotTypeValue = { sampleValue?: { value: {} } | undefined; synonyms?: {} | undefined }
type CreateSlotTypeResponse = {
  slotTypeId?: {} | undefined
  slotTypeName?: {} | undefined
  description?: {} | undefined
  slotTypeValues?: {} | undefined
  valueSelectionSetting?:
    | {
        resolutionStrategy: {}
        regexFilter?: { pattern: {} } | undefined
        advancedRecognitionSetting?: { audioRecognitionStrategy?: {} | undefined } | undefined
      }
    | undefined
  parentSlotTypeSignature?: {} | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  creationDateTime?: {} | undefined
  externalSourceSetting?:
    | {
        grammarSlotTypeSetting?:
          | {
              source?: { s3BucketName: {}; s3ObjectKey: {}; kmsKeyArn?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
  compositeSlotTypeSetting?: { subSlots?: {} | undefined } | undefined
}
type SlotTypeFilter = { name: {}; values: {}; operator: {} }
type ListSlotTypesResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  slotTypeSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type CreateUploadUrlResponse = { importId?: {} | undefined; uploadUrl?: {} | undefined }
type DeleteBotResponse = { botId?: {} | undefined; botStatus?: {} | undefined }
type DescribeBotResponse = {
  botId?: {} | undefined
  botName?: {} | undefined
  description?: {} | undefined
  roleArn?: {} | undefined
  dataPrivacy?: { childDirected: {} } | undefined
  idleSessionTTLInSeconds?: {} | undefined
  botStatus?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  botType?: {} | undefined
  botMembers?: {} | undefined
  failureReasons?: {} | undefined
}
type UpdateBotResponse = {
  botId?: {} | undefined
  botName?: {} | undefined
  description?: {} | undefined
  roleArn?: {} | undefined
  dataPrivacy?: { childDirected: {} } | undefined
  idleSessionTTLInSeconds?: {} | undefined
  botStatus?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  botType?: {} | undefined
  botMembers?: {} | undefined
}
type DeleteBotAliasResponse = {
  botAliasId?: {} | undefined
  botId?: {} | undefined
  botAliasStatus?: {} | undefined
}
type DescribeBotAliasResponse = {
  botAliasId?: {} | undefined
  botAliasName?: {} | undefined
  description?: {} | undefined
  botVersion?: {} | undefined
  botAliasLocaleSettings?: {} | undefined
  conversationLogSettings?:
    | { textLogSettings?: {} | undefined; audioLogSettings?: {} | undefined }
    | undefined
  sentimentAnalysisSettings?: SentimentAnalysisSettings | undefined
  botAliasHistoryEvents?: {} | undefined
  botAliasStatus?: {} | undefined
  botId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  parentBotNetworks?: {} | undefined
}
type UpdateBotAliasResponse = {
  botAliasId?: {} | undefined
  botAliasName?: {} | undefined
  description?: {} | undefined
  botVersion?: {} | undefined
  botAliasLocaleSettings?: {} | undefined
  conversationLogSettings?:
    | { textLogSettings?: {} | undefined; audioLogSettings?: {} | undefined }
    | undefined
  sentimentAnalysisSettings?: SentimentAnalysisSettings | undefined
  botAliasStatus?: {} | undefined
  botId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
}
type DeleteBotVersionResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  botStatus?: {} | undefined
}
type DescribeBotVersionResponse = {
  botId?: {} | undefined
  botName?: {} | undefined
  botVersion?: {} | undefined
  description?: {} | undefined
  roleArn?: {} | undefined
  dataPrivacy?: { childDirected: {} } | undefined
  idleSessionTTLInSeconds?: {} | undefined
  botStatus?: {} | undefined
  failureReasons?: {} | undefined
  creationDateTime?: {} | undefined
  parentBotNetworks?: {} | undefined
  botType?: {} | undefined
  botMembers?: {} | undefined
}
type DeleteCustomVocabularyResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  customVocabularyStatus?: {} | undefined
}
type DeleteExportResponse = { exportId?: {} | undefined; exportStatus?: {} | undefined }
type DescribeExportResponse = {
  exportId?: {} | undefined
  resourceSpecification?:
    | {
        botExportSpecification?: { botId: {}; botVersion: {} } | undefined
        botLocaleExportSpecification?: { botId: {}; botVersion: {}; localeId: {} } | undefined
        customVocabularyExportSpecification?:
          | { botId: {}; botVersion: {}; localeId: {} }
          | undefined
      }
    | undefined
  fileFormat?: {} | undefined
  exportStatus?: {} | undefined
  failureReasons?: {} | undefined
  downloadUrl?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
}
type UpdateExportResponse = {
  exportId?: {} | undefined
  resourceSpecification?:
    | {
        botExportSpecification?: { botId: {}; botVersion: {} } | undefined
        botLocaleExportSpecification?: { botId: {}; botVersion: {}; localeId: {} } | undefined
        customVocabularyExportSpecification?:
          | { botId: {}; botVersion: {}; localeId: {} }
          | undefined
      }
    | undefined
  fileFormat?: {} | undefined
  exportStatus?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
}
type DeleteImportResponse = { importId?: {} | undefined; importStatus?: {} | undefined }
type DataPrivacy = { childDirected: {} }
type VoiceSettings = { voiceId: {}; engine?: {} | undefined }
type CustomVocabularyImportSpecification = { botId: {}; botVersion: {}; localeId: {} }
type DescribeImportResponse = {
  importId?: {} | undefined
  resourceSpecification?:
    | {
        botImportSpecification?:
          | {
              botName: {}
              roleArn: {}
              dataPrivacy: DataPrivacy
              idleSessionTTLInSeconds?: {} | undefined
              botTags?: {} | undefined
              testBotAliasTags?: {} | undefined
            }
          | undefined
        botLocaleImportSpecification?:
          | {
              botId: {}
              botVersion: {}
              localeId: {}
              nluIntentConfidenceThreshold?: {} | undefined
              voiceSettings?: VoiceSettings | undefined
            }
          | undefined
        customVocabularyImportSpecification?: CustomVocabularyImportSpecification | undefined
      }
    | undefined
  importedResourceId?: {} | undefined
  importedResourceName?: {} | undefined
  mergeStrategy?: {} | undefined
  importStatus?: {} | undefined
  failureReasons?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
}
type DescribeIntentResponse = {
  intentId?: {} | undefined
  intentName?: {} | undefined
  description?: {} | undefined
  parentIntentSignature?: {} | undefined
  sampleUtterances?: {} | undefined
  dialogCodeHook?: { enabled: {} } | undefined
  fulfillmentCodeHook?:
    | {
        enabled: {}
        postFulfillmentStatusSpecification?:
          | {
              successResponse?: ResponseSpecification | undefined
              failureResponse?: ResponseSpecification | undefined
              timeoutResponse?: ResponseSpecification | undefined
              successNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              successConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              failureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              failureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              timeoutNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              timeoutConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
            }
          | undefined
        fulfillmentUpdatesSpecification?:
          | {
              active: {}
              startResponse?:
                | { delayInSeconds: {}; messageGroups: {}; allowInterrupt?: {} | undefined }
                | undefined
              updateResponse?:
                | { frequencyInSeconds: {}; messageGroups: {}; allowInterrupt?: {} | undefined }
                | undefined
              timeoutInSeconds?: {} | undefined
            }
          | undefined
        active?: {} | undefined
      }
    | undefined
  slotPriorities?: {} | undefined
  intentConfirmationSetting?:
    | {
        promptSpecification: {
          messageGroups: {}
          maxRetries: {}
          allowInterrupt?: {} | undefined
          messageSelectionStrategy?: {} | undefined
          promptAttemptsSpecification?: {} | undefined
        }
        declinationResponse?: { messageGroups: {}; allowInterrupt?: {} | undefined } | undefined
        active?: {} | undefined
        confirmationResponse?: ResponseSpecification | undefined
        confirmationNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        confirmationConditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
        declinationNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        declinationConditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
        failureResponse?: ResponseSpecification | undefined
        failureNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        failureConditional?: ConditionalSpecification | undefined
        codeHook?:
          | {
              enableCodeHookInvocation: {}
              active: {}
              invocationLabel?: {} | undefined
              postCodeHookSpecification: {
                successResponse?: ResponseSpecification | undefined
                successNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                successConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
                failureResponse?: ResponseSpecification | undefined
                failureNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                failureConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
                timeoutResponse?: ResponseSpecification | undefined
                timeoutNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                timeoutConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
              }
            }
          | undefined
        elicitationCodeHook?:
          | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
          | undefined
      }
    | undefined
  intentClosingSetting?:
    | {
        closingResponse?: { messageGroups: {}; allowInterrupt?: {} | undefined } | undefined
        active?: {} | undefined
        nextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        conditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
      }
    | undefined
  inputContexts?: {} | undefined
  outputContexts?: {} | undefined
  kendraConfiguration?:
    | {
        kendraIndex: {}
        queryFilterStringEnabled?: {} | undefined
        queryFilterString?: {} | undefined
      }
    | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  initialResponseSetting?:
    | {
        initialResponse?: ResponseSpecification | undefined
        nextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        conditional?: ConditionalSpecification | undefined
        codeHook?: DialogCodeHookInvocationSetting | undefined
      }
    | undefined
}
type SlotPriority = { priority: {}; slotId: {} }
type UpdateIntentResponse = {
  intentId?: {} | undefined
  intentName?: {} | undefined
  description?: {} | undefined
  parentIntentSignature?: {} | undefined
  sampleUtterances?: {} | undefined
  dialogCodeHook?: { enabled: {} } | undefined
  fulfillmentCodeHook?:
    | {
        enabled: {}
        postFulfillmentStatusSpecification?:
          | {
              successResponse?: ResponseSpecification | undefined
              failureResponse?: ResponseSpecification | undefined
              timeoutResponse?: ResponseSpecification | undefined
              successNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              successConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              failureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              failureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              timeoutNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              timeoutConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
            }
          | undefined
        fulfillmentUpdatesSpecification?:
          | {
              active: {}
              startResponse?:
                | { delayInSeconds: {}; messageGroups: {}; allowInterrupt?: {} | undefined }
                | undefined
              updateResponse?:
                | { frequencyInSeconds: {}; messageGroups: {}; allowInterrupt?: {} | undefined }
                | undefined
              timeoutInSeconds?: {} | undefined
            }
          | undefined
        active?: {} | undefined
      }
    | undefined
  slotPriorities?: {} | undefined
  intentConfirmationSetting?:
    | {
        promptSpecification: {
          messageGroups: {}
          maxRetries: {}
          allowInterrupt?: {} | undefined
          messageSelectionStrategy?: {} | undefined
          promptAttemptsSpecification?: {} | undefined
        }
        declinationResponse?: { messageGroups: {}; allowInterrupt?: {} | undefined } | undefined
        active?: {} | undefined
        confirmationResponse?: ResponseSpecification | undefined
        confirmationNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        confirmationConditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
        declinationNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        declinationConditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
        failureResponse?: ResponseSpecification | undefined
        failureNextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        failureConditional?: ConditionalSpecification | undefined
        codeHook?:
          | {
              enableCodeHookInvocation: {}
              active: {}
              invocationLabel?: {} | undefined
              postCodeHookSpecification: {
                successResponse?: ResponseSpecification | undefined
                successNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                successConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
                failureResponse?: ResponseSpecification | undefined
                failureNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                failureConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
                timeoutResponse?: ResponseSpecification | undefined
                timeoutNextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                timeoutConditional?:
                  | {
                      active: {}
                      conditionalBranches: {}
                      defaultBranch: {
                        nextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        response?: ResponseSpecification | undefined
                      }
                    }
                  | undefined
              }
            }
          | undefined
        elicitationCodeHook?:
          | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
          | undefined
      }
    | undefined
  intentClosingSetting?:
    | {
        closingResponse?: { messageGroups: {}; allowInterrupt?: {} | undefined } | undefined
        active?: {} | undefined
        nextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        conditional?:
          | {
              active: {}
              conditionalBranches: {}
              defaultBranch: {
                nextStep?:
                  | {
                      dialogAction?: DialogAction | undefined
                      intent?: IntentOverride | undefined
                      sessionAttributes?: {} | undefined
                    }
                  | undefined
                response?: ResponseSpecification | undefined
              }
            }
          | undefined
      }
    | undefined
  inputContexts?: {} | undefined
  outputContexts?: {} | undefined
  kendraConfiguration?:
    | {
        kendraIndex: {}
        queryFilterStringEnabled?: {} | undefined
        queryFilterString?: {} | undefined
      }
    | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  initialResponseSetting?:
    | {
        initialResponse?: ResponseSpecification | undefined
        nextStep?:
          | {
              dialogAction?: DialogAction | undefined
              intent?: IntentOverride | undefined
              sessionAttributes?: {} | undefined
            }
          | undefined
        conditional?: ConditionalSpecification | undefined
        codeHook?: DialogCodeHookInvocationSetting | undefined
      }
    | undefined
}
type DeleteResourcePolicyStatementResponse = {
  resourceArn?: {} | undefined
  revisionId?: {} | undefined
}
type DescribeSlotResponse = {
  slotId?: {} | undefined
  slotName?: {} | undefined
  description?: {} | undefined
  slotTypeId?: {} | undefined
  valueElicitationSetting?:
    | {
        defaultValueSpecification?: { defaultValueList: {} } | undefined
        slotConstraint: {}
        promptSpecification?:
          | {
              messageGroups: {}
              maxRetries: {}
              allowInterrupt?: {} | undefined
              messageSelectionStrategy?: {} | undefined
              promptAttemptsSpecification?: {} | undefined
            }
          | undefined
        sampleUtterances?: {} | undefined
        waitAndContinueSpecification?: WaitAndContinueSpecification | undefined
        slotCaptureSetting?:
          | {
              captureResponse?: ResponseSpecification | undefined
              captureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              captureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              failureResponse?: ResponseSpecification | undefined
              failureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              failureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              codeHook?:
                | {
                    enableCodeHookInvocation: {}
                    active: {}
                    invocationLabel?: {} | undefined
                    postCodeHookSpecification: {
                      successResponse?: ResponseSpecification | undefined
                      successNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      successConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                      failureResponse?: ResponseSpecification | undefined
                      failureNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      failureConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                      timeoutResponse?: ResponseSpecification | undefined
                      timeoutNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      timeoutConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                    }
                  }
                | undefined
              elicitationCodeHook?:
                | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
  obfuscationSetting?: { obfuscationSettingType: {} } | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  intentId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  multipleValuesSetting?: { allowMultipleValues?: {} | undefined } | undefined
  subSlotSetting?: { expression?: {} | undefined; slotSpecifications?: {} | undefined } | undefined
}
type UpdateSlotResponse = {
  slotId?: {} | undefined
  slotName?: {} | undefined
  description?: {} | undefined
  slotTypeId?: {} | undefined
  valueElicitationSetting?:
    | {
        defaultValueSpecification?: { defaultValueList: {} } | undefined
        slotConstraint: {}
        promptSpecification?:
          | {
              messageGroups: {}
              maxRetries: {}
              allowInterrupt?: {} | undefined
              messageSelectionStrategy?: {} | undefined
              promptAttemptsSpecification?: {} | undefined
            }
          | undefined
        sampleUtterances?: {} | undefined
        waitAndContinueSpecification?: WaitAndContinueSpecification | undefined
        slotCaptureSetting?:
          | {
              captureResponse?: ResponseSpecification | undefined
              captureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              captureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              failureResponse?: ResponseSpecification | undefined
              failureNextStep?:
                | {
                    dialogAction?: DialogAction | undefined
                    intent?: IntentOverride | undefined
                    sessionAttributes?: {} | undefined
                  }
                | undefined
              failureConditional?:
                | {
                    active: {}
                    conditionalBranches: {}
                    defaultBranch: {
                      nextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      response?: ResponseSpecification | undefined
                    }
                  }
                | undefined
              codeHook?:
                | {
                    enableCodeHookInvocation: {}
                    active: {}
                    invocationLabel?: {} | undefined
                    postCodeHookSpecification: {
                      successResponse?: ResponseSpecification | undefined
                      successNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      successConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                      failureResponse?: ResponseSpecification | undefined
                      failureNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      failureConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                      timeoutResponse?: ResponseSpecification | undefined
                      timeoutNextStep?:
                        | {
                            dialogAction?: DialogAction | undefined
                            intent?: IntentOverride | undefined
                            sessionAttributes?: {} | undefined
                          }
                        | undefined
                      timeoutConditional?:
                        | {
                            active: {}
                            conditionalBranches: {}
                            defaultBranch: {
                              nextStep?:
                                | {
                                    dialogAction?: DialogAction | undefined
                                    intent?: IntentOverride | undefined
                                    sessionAttributes?: {} | undefined
                                  }
                                | undefined
                              response?: ResponseSpecification | undefined
                            }
                          }
                        | undefined
                    }
                  }
                | undefined
              elicitationCodeHook?:
                | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
  obfuscationSetting?: { obfuscationSettingType: {} } | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  intentId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  multipleValuesSetting?: { allowMultipleValues?: {} | undefined } | undefined
  subSlotSetting?: { expression?: {} | undefined; slotSpecifications?: {} | undefined } | undefined
}
type ExternalSourceSetting = {
  grammarSlotTypeSetting?:
    | { source?: { s3BucketName: {}; s3ObjectKey: {}; kmsKeyArn?: {} | undefined } | undefined }
    | undefined
}
type DescribeSlotTypeResponse = {
  slotTypeId?: {} | undefined
  slotTypeName?: {} | undefined
  description?: {} | undefined
  slotTypeValues?: {} | undefined
  valueSelectionSetting?:
    | {
        resolutionStrategy: {}
        regexFilter?: { pattern: {} } | undefined
        advancedRecognitionSetting?: { audioRecognitionStrategy?: {} | undefined } | undefined
      }
    | undefined
  parentSlotTypeSignature?: {} | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  externalSourceSetting?: ExternalSourceSetting | undefined
  compositeSlotTypeSetting?: { subSlots?: {} | undefined } | undefined
}
type UpdateSlotTypeResponse = {
  slotTypeId?: {} | undefined
  slotTypeName?: {} | undefined
  description?: {} | undefined
  slotTypeValues?: {} | undefined
  valueSelectionSetting?:
    | {
        resolutionStrategy: {}
        regexFilter?: { pattern: {} } | undefined
        advancedRecognitionSetting?: { audioRecognitionStrategy?: {} | undefined } | undefined
      }
    | undefined
  parentSlotTypeSignature?: {} | undefined
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  externalSourceSetting?: ExternalSourceSetting | undefined
  compositeSlotTypeSetting?: { subSlots?: {} | undefined } | undefined
}
type DeleteUtterancesResponse = { [x: string]: unknown }
type DescribeBotRecommendationResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botRecommendationStatus?: {} | undefined
  botRecommendationId?: {} | undefined
  failureReasons?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  transcriptSourceSetting?:
    | {
        s3BucketTranscriptSource?:
          | {
              s3BucketName: {}
              pathFormat?: { objectPrefixes?: {} | undefined } | undefined
              transcriptFormat: {}
              transcriptFilter?:
                | {
                    lexTranscriptFilter?:
                      | { dateRangeFilter?: { startDateTime: {}; endDateTime: {} } | undefined }
                      | undefined
                  }
                | undefined
              kmsKeyArn?: {} | undefined
            }
          | undefined
      }
    | undefined
  encryptionSetting?:
    | {
        kmsKeyArn?: {} | undefined
        botLocaleExportPassword?: {} | undefined
        associatedTranscriptsPassword?: {} | undefined
      }
    | undefined
  botRecommendationResults?:
    | {
        botLocaleExportUrl?: {} | undefined
        associatedTranscriptsUrl?: {} | undefined
        statistics?:
          | {
              intents?: { discoveredIntentCount?: {} | undefined } | undefined
              slotTypes?: { discoveredSlotTypeCount?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateBotRecommendationResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botRecommendationStatus?: {} | undefined
  botRecommendationId?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
  transcriptSourceSetting?:
    | {
        s3BucketTranscriptSource?:
          | {
              s3BucketName: {}
              pathFormat?: { objectPrefixes?: {} | undefined } | undefined
              transcriptFormat: {}
              transcriptFilter?:
                | {
                    lexTranscriptFilter?:
                      | { dateRangeFilter?: { startDateTime: {}; endDateTime: {} } | undefined }
                      | undefined
                  }
                | undefined
              kmsKeyArn?: {} | undefined
            }
          | undefined
      }
    | undefined
  encryptionSetting?:
    | {
        kmsKeyArn?: {} | undefined
        botLocaleExportPassword?: {} | undefined
        associatedTranscriptsPassword?: {} | undefined
      }
    | undefined
}
type DescribeCustomVocabularyMetadataResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  customVocabularyStatus?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
}
type AggregatedUtterancesFilter = { name: {}; values: {}; operator: {} }
type ListAggregatedUtterancesResponse = {
  botId?: {} | undefined
  botAliasId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  aggregationDuration?:
    | { relativeAggregationDuration: { timeDimension: {}; timeValue: {} } }
    | undefined
  aggregationWindowStartTime?: {} | undefined
  aggregationWindowEndTime?: {} | undefined
  aggregationLastRefreshedDateTime?: {} | undefined
  aggregatedUtterancesSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListBotRecommendationsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botRecommendationSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type StartBotRecommendationResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botRecommendationStatus?: {} | undefined
  botRecommendationId?: {} | undefined
  creationDateTime?: {} | undefined
  transcriptSourceSetting?:
    | {
        s3BucketTranscriptSource?:
          | {
              s3BucketName: {}
              pathFormat?: { objectPrefixes?: {} | undefined } | undefined
              transcriptFormat: {}
              transcriptFilter?:
                | {
                    lexTranscriptFilter?:
                      | { dateRangeFilter?: { startDateTime: {}; endDateTime: {} } | undefined }
                      | undefined
                  }
                | undefined
              kmsKeyArn?: {} | undefined
            }
          | undefined
      }
    | undefined
  encryptionSetting?:
    | {
        kmsKeyArn?: {} | undefined
        botLocaleExportPassword?: {} | undefined
        associatedTranscriptsPassword?: {} | undefined
      }
    | undefined
}
type ListBuiltInIntentsResponse = {
  builtInIntentSummaries?: {} | undefined
  nextToken?: {} | undefined
  localeId?: {} | undefined
}
type ListBuiltInSlotTypesResponse = {
  builtInSlotTypeSummaries?: {} | undefined
  nextToken?: {} | undefined
  localeId?: {} | undefined
}
type ListCustomVocabularyItemsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  customVocabularyItems?: {} | undefined
  nextToken?: {} | undefined
}
type ImportFilter = { name: {}; values: {}; operator: {} }
type ListImportsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  importSummaries?: {} | undefined
  nextToken?: {} | undefined
  localeId?: {} | undefined
}
type StartImportResponse = {
  importId?: {} | undefined
  resourceSpecification?:
    | {
        botImportSpecification?:
          | {
              botName: {}
              roleArn: {}
              dataPrivacy: DataPrivacy
              idleSessionTTLInSeconds?: {} | undefined
              botTags?: {} | undefined
              testBotAliasTags?: {} | undefined
            }
          | undefined
        botLocaleImportSpecification?:
          | {
              botId: {}
              botVersion: {}
              localeId: {}
              nluIntentConfidenceThreshold?: {} | undefined
              voiceSettings?: VoiceSettings | undefined
            }
          | undefined
        customVocabularyImportSpecification?: CustomVocabularyImportSpecification | undefined
      }
    | undefined
  mergeStrategy?: {} | undefined
  importStatus?: {} | undefined
  creationDateTime?: {} | undefined
}
type ListRecommendedIntentsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botRecommendationId?: {} | undefined
  summaryList?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type AssociatedTranscriptFilter = { name: {}; values: {} }
type SearchAssociatedTranscriptsResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botRecommendationId?: {} | undefined
  nextIndex?: {} | undefined
  associatedTranscripts?: {} | undefined
  totalResults?: {} | undefined
}
type StopBotRecommendationResponse = {
  botId?: {} | undefined
  botVersion?: {} | undefined
  localeId?: {} | undefined
  botRecommendationStatus?: {} | undefined
  botRecommendationId?: {} | undefined
}
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchcreate': {
      $put: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { customVocabularyItemList: NewCustomVocabularyItem[] } }
        output: BatchCreateCustomVocabularyItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchdelete': {
      $post: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { customVocabularyItemList: CustomVocabularyEntryId[] } }
        output: BatchDeleteCustomVocabularyItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchupdate': {
      $put: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { customVocabularyItemList: CustomVocabularyItem[] } }
        output: BatchUpdateCustomVocabularyItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/': {
      $post: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: BuildBotLocaleResponse
        outputFormat: 'json'
        status: 202
      }
      $delete: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteBotLocaleResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeBotLocaleResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            description?: string | undefined
            nluIntentConfidenceThreshold: number
            voiceSettings?: { voiceId?: {} | undefined; engine?: {} | undefined } | undefined
          }
        }
        output: UpdateBotLocaleResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/bots/': {
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            botName: string
            description?: string | undefined
            roleArn: string
            dataPrivacy: { childDirected?: {} | undefined }
            idleSessionTTLInSeconds: number
            botTags?: { [x: string]: TagValue } | undefined
            testBotAliasTags?: { [x: string]: TagValue } | undefined
            botType?: 'Bot' | 'BotNetwork' | undefined
            botMembers?: BotMember[] | undefined
          }
        }
        output: CreateBotResponse
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: BotFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListBotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botaliases/': {
      $put: {
        input: { param: { botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            botAliasName: string
            description?: string | undefined
            botVersion?: string | undefined
            botAliasLocaleSettings?: { [x: string]: BotAliasLocaleSettings } | undefined
            conversationLogSettings?:
              | { textLogSettings?: {} | undefined; audioLogSettings?: {} | undefined }
              | undefined
            sentimentAnalysisSettings?: { detectSentiment?: {} | undefined } | undefined
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateBotAliasResponse
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { param: { botId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListBotAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/': {
      $put: {
        input: { param: { botId: string; botVersion: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            localeId: string
            description?: string | undefined
            nluIntentConfidenceThreshold: number
            voiceSettings?: { voiceId?: {} | undefined; engine?: {} | undefined } | undefined
          }
        }
        output: CreateBotLocaleResponse
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { param: { botId: string; botVersion: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: BotLocaleFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListBotLocalesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/': {
      $put: {
        input: { param: { botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            description?: string | undefined
            botVersionLocaleSpecification: { [x: string]: BotVersionLocaleDetails }
          }
        }
        output: CreateBotVersionResponse
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { param: { botId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListBotVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/exports/': {
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceSpecification: {
              botExportSpecification?: { botId: {}; botVersion: {} } | undefined
              botLocaleExportSpecification?: { botId: {}; botVersion: {}; localeId: {} } | undefined
              customVocabularyExportSpecification?:
                | { botId: {}; botVersion: {}; localeId: {} }
                | undefined
            }
            fileFormat: 'LexJson' | 'TSV'
            filePassword?: string | undefined
          }
        }
        output: CreateExportResponse
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            botId?: string | undefined
            botVersion?: string | undefined
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: ExportFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            localeId?: string | undefined
          }
        }
        output: ListExportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/': {
      $put: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            intentName: string
            description?: string | undefined
            parentIntentSignature?: string | undefined
            sampleUtterances?: SampleUtterance[] | undefined
            dialogCodeHook?: { enabled?: {} | undefined } | undefined
            fulfillmentCodeHook?:
              | {
                  enabled?: {} | undefined
                  postFulfillmentStatusSpecification?:
                    | {
                        successResponse?: ResponseSpecification | undefined
                        failureResponse?: ResponseSpecification | undefined
                        timeoutResponse?: ResponseSpecification | undefined
                        successNextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        successConditional?:
                          | {
                              active: {}
                              conditionalBranches: {}
                              defaultBranch: {
                                nextStep?:
                                  | {
                                      dialogAction?: DialogAction | undefined
                                      intent?: IntentOverride | undefined
                                      sessionAttributes?: {} | undefined
                                    }
                                  | undefined
                                response?: ResponseSpecification | undefined
                              }
                            }
                          | undefined
                        failureNextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        failureConditional?:
                          | {
                              active: {}
                              conditionalBranches: {}
                              defaultBranch: {
                                nextStep?:
                                  | {
                                      dialogAction?: DialogAction | undefined
                                      intent?: IntentOverride | undefined
                                      sessionAttributes?: {} | undefined
                                    }
                                  | undefined
                                response?: ResponseSpecification | undefined
                              }
                            }
                          | undefined
                        timeoutNextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        timeoutConditional?:
                          | {
                              active: {}
                              conditionalBranches: {}
                              defaultBranch: {
                                nextStep?:
                                  | {
                                      dialogAction?: DialogAction | undefined
                                      intent?: IntentOverride | undefined
                                      sessionAttributes?: {} | undefined
                                    }
                                  | undefined
                                response?: ResponseSpecification | undefined
                              }
                            }
                          | undefined
                      }
                    | undefined
                  fulfillmentUpdatesSpecification?:
                    | {
                        active: {}
                        startResponse?:
                          | {
                              delayInSeconds: {}
                              messageGroups: {}
                              allowInterrupt?: {} | undefined
                            }
                          | undefined
                        updateResponse?:
                          | {
                              frequencyInSeconds: {}
                              messageGroups: {}
                              allowInterrupt?: {} | undefined
                            }
                          | undefined
                        timeoutInSeconds?: {} | undefined
                      }
                    | undefined
                  active?: {} | undefined
                }
              | undefined
            intentConfirmationSetting?:
              | {
                  promptSpecification?:
                    | {
                        messageGroups: {}
                        maxRetries: {}
                        allowInterrupt?: {} | undefined
                        messageSelectionStrategy?: {} | undefined
                        promptAttemptsSpecification?: {} | undefined
                      }
                    | undefined
                  declinationResponse?:
                    | { messageGroups: {}; allowInterrupt?: {} | undefined }
                    | undefined
                  active?: {} | undefined
                  confirmationResponse?: ResponseSpecification | undefined
                  confirmationNextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  confirmationConditional?:
                    | {
                        active: {}
                        conditionalBranches: {}
                        defaultBranch: {
                          nextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          response?: ResponseSpecification | undefined
                        }
                      }
                    | undefined
                  declinationNextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  declinationConditional?:
                    | {
                        active: {}
                        conditionalBranches: {}
                        defaultBranch: {
                          nextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          response?: ResponseSpecification | undefined
                        }
                      }
                    | undefined
                  failureResponse?: ResponseSpecification | undefined
                  failureNextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  failureConditional?: ConditionalSpecification | undefined
                  codeHook?:
                    | {
                        enableCodeHookInvocation: {}
                        active: {}
                        invocationLabel?: {} | undefined
                        postCodeHookSpecification: {
                          successResponse?: ResponseSpecification | undefined
                          successNextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          successConditional?:
                            | {
                                active: {}
                                conditionalBranches: {}
                                defaultBranch: {
                                  nextStep?:
                                    | {
                                        dialogAction?: DialogAction | undefined
                                        intent?: IntentOverride | undefined
                                        sessionAttributes?: {} | undefined
                                      }
                                    | undefined
                                  response?: ResponseSpecification | undefined
                                }
                              }
                            | undefined
                          failureResponse?: ResponseSpecification | undefined
                          failureNextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          failureConditional?:
                            | {
                                active: {}
                                conditionalBranches: {}
                                defaultBranch: {
                                  nextStep?:
                                    | {
                                        dialogAction?: DialogAction | undefined
                                        intent?: IntentOverride | undefined
                                        sessionAttributes?: {} | undefined
                                      }
                                    | undefined
                                  response?: ResponseSpecification | undefined
                                }
                              }
                            | undefined
                          timeoutResponse?: ResponseSpecification | undefined
                          timeoutNextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          timeoutConditional?:
                            | {
                                active: {}
                                conditionalBranches: {}
                                defaultBranch: {
                                  nextStep?:
                                    | {
                                        dialogAction?: DialogAction | undefined
                                        intent?: IntentOverride | undefined
                                        sessionAttributes?: {} | undefined
                                      }
                                    | undefined
                                  response?: ResponseSpecification | undefined
                                }
                              }
                            | undefined
                        }
                      }
                    | undefined
                  elicitationCodeHook?:
                    | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
                    | undefined
                }
              | undefined
            intentClosingSetting?:
              | {
                  closingResponse?:
                    | { messageGroups: {}; allowInterrupt?: {} | undefined }
                    | undefined
                  active?: {} | undefined
                  nextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  conditional?:
                    | {
                        active: {}
                        conditionalBranches: {}
                        defaultBranch: {
                          nextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          response?: ResponseSpecification | undefined
                        }
                      }
                    | undefined
                }
              | undefined
            inputContexts?: InputContext[] | undefined
            outputContexts?: OutputContext[] | undefined
            kendraConfiguration?:
              | {
                  kendraIndex?: {} | undefined
                  queryFilterStringEnabled?: {} | undefined
                  queryFilterString?: {} | undefined
                }
              | undefined
            initialResponseSetting?:
              | {
                  initialResponse?: ResponseSpecification | undefined
                  nextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  conditional?: ConditionalSpecification | undefined
                  codeHook?: DialogCodeHookInvocationSetting | undefined
                }
              | undefined
          }
        }
        output: CreateIntentResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: IntentFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListIntentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policy/:resourceArn/': {
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { policy: string } }
        output: CreateResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { resourceArn: string } } & {
          query: { expectedRevisionId?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteResourcePolicyResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceArn: string } } & {
          query: { expectedRevisionId?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { policy: string } }
        output: UpdateResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policy/:resourceArn/statements/': {
      $post: {
        input: { param: { resourceArn: string } } & {
          query: { expectedRevisionId?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            statementId: string
            effect: 'Allow' | 'Deny'
            principal: Principal[]
            action: Operation[]
            condition?: { [x: string]: ConditionKeyValueMap } | undefined
          }
        }
        output: CreateResourcePolicyStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/': {
      $put: {
        input: {
          param: { botId: string; botVersion: string; localeId: string; intentId: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            slotName: string
            description?: string | undefined
            slotTypeId?: string | undefined
            valueElicitationSetting: {
              defaultValueSpecification?: { defaultValueList: {} } | undefined
              slotConstraint?: {} | undefined
              promptSpecification?:
                | {
                    messageGroups: {}
                    maxRetries: {}
                    allowInterrupt?: {} | undefined
                    messageSelectionStrategy?: {} | undefined
                    promptAttemptsSpecification?: {} | undefined
                  }
                | undefined
              sampleUtterances?: {} | undefined
              waitAndContinueSpecification?: WaitAndContinueSpecification | undefined
              slotCaptureSetting?:
                | {
                    captureResponse?: ResponseSpecification | undefined
                    captureNextStep?:
                      | {
                          dialogAction?: DialogAction | undefined
                          intent?: IntentOverride | undefined
                          sessionAttributes?: {} | undefined
                        }
                      | undefined
                    captureConditional?:
                      | {
                          active: {}
                          conditionalBranches: {}
                          defaultBranch: {
                            nextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            response?: ResponseSpecification | undefined
                          }
                        }
                      | undefined
                    failureResponse?: ResponseSpecification | undefined
                    failureNextStep?:
                      | {
                          dialogAction?: DialogAction | undefined
                          intent?: IntentOverride | undefined
                          sessionAttributes?: {} | undefined
                        }
                      | undefined
                    failureConditional?:
                      | {
                          active: {}
                          conditionalBranches: {}
                          defaultBranch: {
                            nextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            response?: ResponseSpecification | undefined
                          }
                        }
                      | undefined
                    codeHook?:
                      | {
                          enableCodeHookInvocation: {}
                          active: {}
                          invocationLabel?: {} | undefined
                          postCodeHookSpecification: {
                            successResponse?: ResponseSpecification | undefined
                            successNextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            successConditional?:
                              | {
                                  active: {}
                                  conditionalBranches: {}
                                  defaultBranch: {
                                    nextStep?:
                                      | {
                                          dialogAction?: DialogAction | undefined
                                          intent?: IntentOverride | undefined
                                          sessionAttributes?: {} | undefined
                                        }
                                      | undefined
                                    response?: ResponseSpecification | undefined
                                  }
                                }
                              | undefined
                            failureResponse?: ResponseSpecification | undefined
                            failureNextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            failureConditional?:
                              | {
                                  active: {}
                                  conditionalBranches: {}
                                  defaultBranch: {
                                    nextStep?:
                                      | {
                                          dialogAction?: DialogAction | undefined
                                          intent?: IntentOverride | undefined
                                          sessionAttributes?: {} | undefined
                                        }
                                      | undefined
                                    response?: ResponseSpecification | undefined
                                  }
                                }
                              | undefined
                            timeoutResponse?: ResponseSpecification | undefined
                            timeoutNextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            timeoutConditional?:
                              | {
                                  active: {}
                                  conditionalBranches: {}
                                  defaultBranch: {
                                    nextStep?:
                                      | {
                                          dialogAction?: DialogAction | undefined
                                          intent?: IntentOverride | undefined
                                          sessionAttributes?: {} | undefined
                                        }
                                      | undefined
                                    response?: ResponseSpecification | undefined
                                  }
                                }
                              | undefined
                          }
                        }
                      | undefined
                    elicitationCodeHook?:
                      | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
                      | undefined
                  }
                | undefined
            }
            obfuscationSetting?: { obfuscationSettingType?: {} | undefined } | undefined
            multipleValuesSetting?: { allowMultipleValues?: {} | undefined } | undefined
            subSlotSetting?:
              | { expression?: {} | undefined; slotSpecifications?: {} | undefined }
              | undefined
          }
        }
        output: CreateSlotResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: { botId: string; botVersion: string; localeId: string; intentId: string }
        } & { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: SlotFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListSlotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/': {
      $put: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            slotTypeName: string
            description?: string | undefined
            slotTypeValues?: SlotTypeValue[] | undefined
            valueSelectionSetting?:
              | {
                  resolutionStrategy?: {} | undefined
                  regexFilter?: { pattern: {} } | undefined
                  advancedRecognitionSetting?:
                    | { audioRecognitionStrategy?: {} | undefined }
                    | undefined
                }
              | undefined
            parentSlotTypeSignature?: string | undefined
            externalSourceSetting?:
              | {
                  grammarSlotTypeSetting?:
                    | {
                        source?:
                          | { s3BucketName: {}; s3ObjectKey: {}; kmsKeyArn?: {} | undefined }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            compositeSlotTypeSetting?: { subSlots?: {} | undefined } | undefined
          }
        }
        output: CreateSlotTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: SlotTypeFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListSlotTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/createuploadurl/': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateUploadUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/': {
      $delete: {
        input: { param: { botId: string } } & {
          query: { skipResourceInUseCheck?: boolean | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteBotResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeBotResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            botName: string
            description?: string | undefined
            roleArn: string
            dataPrivacy: { childDirected?: {} | undefined }
            idleSessionTTLInSeconds: number
            botType?: 'Bot' | 'BotNetwork' | undefined
            botMembers?: BotMember[] | undefined
          }
        }
        output: UpdateBotResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/bots/:botId/botaliases/:botAliasId/': {
      $delete: {
        input: { param: { botAliasId: string; botId: string } } & {
          query: { skipResourceInUseCheck?: boolean | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteBotAliasResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { botAliasId: string; botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeBotAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { botAliasId: string; botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            botAliasName: string
            description?: string | undefined
            botVersion?: string | undefined
            botAliasLocaleSettings?: { [x: string]: BotAliasLocaleSettings } | undefined
            conversationLogSettings?:
              | { textLogSettings?: {} | undefined; audioLogSettings?: {} | undefined }
              | undefined
            sentimentAnalysisSettings?: { detectSentiment?: {} | undefined } | undefined
          }
        }
        output: UpdateBotAliasResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/': {
      $delete: {
        input: { param: { botId: string; botVersion: string } } & {
          query: { skipResourceInUseCheck?: boolean | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteBotVersionResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { botId: string; botVersion: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeBotVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary': {
      $delete: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteCustomVocabularyResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/exports/:exportId/': {
      $delete: {
        input: { param: { exportId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteExportResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { exportId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeExportResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { exportId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { filePassword?: string | undefined } }
        output: UpdateExportResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/imports/:importId/': {
      $delete: {
        input: { param: { importId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteImportResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { importId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeImportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/': {
      $delete: {
        input: {
          param: { intentId: string; botId: string; botVersion: string; localeId: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: { intentId: string; botId: string; botVersion: string; localeId: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeIntentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { intentId: string; botId: string; botVersion: string; localeId: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            intentName: string
            description?: string | undefined
            parentIntentSignature?: string | undefined
            sampleUtterances?: SampleUtterance[] | undefined
            dialogCodeHook?: { enabled?: {} | undefined } | undefined
            fulfillmentCodeHook?:
              | {
                  enabled?: {} | undefined
                  postFulfillmentStatusSpecification?:
                    | {
                        successResponse?: ResponseSpecification | undefined
                        failureResponse?: ResponseSpecification | undefined
                        timeoutResponse?: ResponseSpecification | undefined
                        successNextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        successConditional?:
                          | {
                              active: {}
                              conditionalBranches: {}
                              defaultBranch: {
                                nextStep?:
                                  | {
                                      dialogAction?: DialogAction | undefined
                                      intent?: IntentOverride | undefined
                                      sessionAttributes?: {} | undefined
                                    }
                                  | undefined
                                response?: ResponseSpecification | undefined
                              }
                            }
                          | undefined
                        failureNextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        failureConditional?:
                          | {
                              active: {}
                              conditionalBranches: {}
                              defaultBranch: {
                                nextStep?:
                                  | {
                                      dialogAction?: DialogAction | undefined
                                      intent?: IntentOverride | undefined
                                      sessionAttributes?: {} | undefined
                                    }
                                  | undefined
                                response?: ResponseSpecification | undefined
                              }
                            }
                          | undefined
                        timeoutNextStep?:
                          | {
                              dialogAction?: DialogAction | undefined
                              intent?: IntentOverride | undefined
                              sessionAttributes?: {} | undefined
                            }
                          | undefined
                        timeoutConditional?:
                          | {
                              active: {}
                              conditionalBranches: {}
                              defaultBranch: {
                                nextStep?:
                                  | {
                                      dialogAction?: DialogAction | undefined
                                      intent?: IntentOverride | undefined
                                      sessionAttributes?: {} | undefined
                                    }
                                  | undefined
                                response?: ResponseSpecification | undefined
                              }
                            }
                          | undefined
                      }
                    | undefined
                  fulfillmentUpdatesSpecification?:
                    | {
                        active: {}
                        startResponse?:
                          | {
                              delayInSeconds: {}
                              messageGroups: {}
                              allowInterrupt?: {} | undefined
                            }
                          | undefined
                        updateResponse?:
                          | {
                              frequencyInSeconds: {}
                              messageGroups: {}
                              allowInterrupt?: {} | undefined
                            }
                          | undefined
                        timeoutInSeconds?: {} | undefined
                      }
                    | undefined
                  active?: {} | undefined
                }
              | undefined
            slotPriorities?: SlotPriority[] | undefined
            intentConfirmationSetting?:
              | {
                  promptSpecification?:
                    | {
                        messageGroups: {}
                        maxRetries: {}
                        allowInterrupt?: {} | undefined
                        messageSelectionStrategy?: {} | undefined
                        promptAttemptsSpecification?: {} | undefined
                      }
                    | undefined
                  declinationResponse?:
                    | { messageGroups: {}; allowInterrupt?: {} | undefined }
                    | undefined
                  active?: {} | undefined
                  confirmationResponse?: ResponseSpecification | undefined
                  confirmationNextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  confirmationConditional?:
                    | {
                        active: {}
                        conditionalBranches: {}
                        defaultBranch: {
                          nextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          response?: ResponseSpecification | undefined
                        }
                      }
                    | undefined
                  declinationNextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  declinationConditional?:
                    | {
                        active: {}
                        conditionalBranches: {}
                        defaultBranch: {
                          nextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          response?: ResponseSpecification | undefined
                        }
                      }
                    | undefined
                  failureResponse?: ResponseSpecification | undefined
                  failureNextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  failureConditional?: ConditionalSpecification | undefined
                  codeHook?:
                    | {
                        enableCodeHookInvocation: {}
                        active: {}
                        invocationLabel?: {} | undefined
                        postCodeHookSpecification: {
                          successResponse?: ResponseSpecification | undefined
                          successNextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          successConditional?:
                            | {
                                active: {}
                                conditionalBranches: {}
                                defaultBranch: {
                                  nextStep?:
                                    | {
                                        dialogAction?: DialogAction | undefined
                                        intent?: IntentOverride | undefined
                                        sessionAttributes?: {} | undefined
                                      }
                                    | undefined
                                  response?: ResponseSpecification | undefined
                                }
                              }
                            | undefined
                          failureResponse?: ResponseSpecification | undefined
                          failureNextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          failureConditional?:
                            | {
                                active: {}
                                conditionalBranches: {}
                                defaultBranch: {
                                  nextStep?:
                                    | {
                                        dialogAction?: DialogAction | undefined
                                        intent?: IntentOverride | undefined
                                        sessionAttributes?: {} | undefined
                                      }
                                    | undefined
                                  response?: ResponseSpecification | undefined
                                }
                              }
                            | undefined
                          timeoutResponse?: ResponseSpecification | undefined
                          timeoutNextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          timeoutConditional?:
                            | {
                                active: {}
                                conditionalBranches: {}
                                defaultBranch: {
                                  nextStep?:
                                    | {
                                        dialogAction?: DialogAction | undefined
                                        intent?: IntentOverride | undefined
                                        sessionAttributes?: {} | undefined
                                      }
                                    | undefined
                                  response?: ResponseSpecification | undefined
                                }
                              }
                            | undefined
                        }
                      }
                    | undefined
                  elicitationCodeHook?:
                    | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
                    | undefined
                }
              | undefined
            intentClosingSetting?:
              | {
                  closingResponse?:
                    | { messageGroups: {}; allowInterrupt?: {} | undefined }
                    | undefined
                  active?: {} | undefined
                  nextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  conditional?:
                    | {
                        active: {}
                        conditionalBranches: {}
                        defaultBranch: {
                          nextStep?:
                            | {
                                dialogAction?: DialogAction | undefined
                                intent?: IntentOverride | undefined
                                sessionAttributes?: {} | undefined
                              }
                            | undefined
                          response?: ResponseSpecification | undefined
                        }
                      }
                    | undefined
                }
              | undefined
            inputContexts?: InputContext[] | undefined
            outputContexts?: OutputContext[] | undefined
            kendraConfiguration?:
              | {
                  kendraIndex?: {} | undefined
                  queryFilterStringEnabled?: {} | undefined
                  queryFilterString?: {} | undefined
                }
              | undefined
            initialResponseSetting?:
              | {
                  initialResponse?: ResponseSpecification | undefined
                  nextStep?:
                    | {
                        dialogAction?: DialogAction | undefined
                        intent?: IntentOverride | undefined
                        sessionAttributes?: {} | undefined
                      }
                    | undefined
                  conditional?: ConditionalSpecification | undefined
                  codeHook?: DialogCodeHookInvocationSetting | undefined
                }
              | undefined
          }
        }
        output: UpdateIntentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policy/:resourceArn/statements/:statementId/': {
      $delete: {
        input: { param: { resourceArn: string; statementId: string } } & {
          query: { expectedRevisionId?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteResourcePolicyStatementResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/:slotId/': {
      $delete: {
        input: {
          param: {
            slotId: string
            botId: string
            botVersion: string
            localeId: string
            intentId: string
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: {
            slotId: string
            botId: string
            botVersion: string
            localeId: string
            intentId: string
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeSlotResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            slotId: string
            botId: string
            botVersion: string
            localeId: string
            intentId: string
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            slotName: string
            description?: string | undefined
            slotTypeId?: string | undefined
            valueElicitationSetting: {
              defaultValueSpecification?: { defaultValueList: {} } | undefined
              slotConstraint?: {} | undefined
              promptSpecification?:
                | {
                    messageGroups: {}
                    maxRetries: {}
                    allowInterrupt?: {} | undefined
                    messageSelectionStrategy?: {} | undefined
                    promptAttemptsSpecification?: {} | undefined
                  }
                | undefined
              sampleUtterances?: {} | undefined
              waitAndContinueSpecification?: WaitAndContinueSpecification | undefined
              slotCaptureSetting?:
                | {
                    captureResponse?: ResponseSpecification | undefined
                    captureNextStep?:
                      | {
                          dialogAction?: DialogAction | undefined
                          intent?: IntentOverride | undefined
                          sessionAttributes?: {} | undefined
                        }
                      | undefined
                    captureConditional?:
                      | {
                          active: {}
                          conditionalBranches: {}
                          defaultBranch: {
                            nextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            response?: ResponseSpecification | undefined
                          }
                        }
                      | undefined
                    failureResponse?: ResponseSpecification | undefined
                    failureNextStep?:
                      | {
                          dialogAction?: DialogAction | undefined
                          intent?: IntentOverride | undefined
                          sessionAttributes?: {} | undefined
                        }
                      | undefined
                    failureConditional?:
                      | {
                          active: {}
                          conditionalBranches: {}
                          defaultBranch: {
                            nextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            response?: ResponseSpecification | undefined
                          }
                        }
                      | undefined
                    codeHook?:
                      | {
                          enableCodeHookInvocation: {}
                          active: {}
                          invocationLabel?: {} | undefined
                          postCodeHookSpecification: {
                            successResponse?: ResponseSpecification | undefined
                            successNextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            successConditional?:
                              | {
                                  active: {}
                                  conditionalBranches: {}
                                  defaultBranch: {
                                    nextStep?:
                                      | {
                                          dialogAction?: DialogAction | undefined
                                          intent?: IntentOverride | undefined
                                          sessionAttributes?: {} | undefined
                                        }
                                      | undefined
                                    response?: ResponseSpecification | undefined
                                  }
                                }
                              | undefined
                            failureResponse?: ResponseSpecification | undefined
                            failureNextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            failureConditional?:
                              | {
                                  active: {}
                                  conditionalBranches: {}
                                  defaultBranch: {
                                    nextStep?:
                                      | {
                                          dialogAction?: DialogAction | undefined
                                          intent?: IntentOverride | undefined
                                          sessionAttributes?: {} | undefined
                                        }
                                      | undefined
                                    response?: ResponseSpecification | undefined
                                  }
                                }
                              | undefined
                            timeoutResponse?: ResponseSpecification | undefined
                            timeoutNextStep?:
                              | {
                                  dialogAction?: DialogAction | undefined
                                  intent?: IntentOverride | undefined
                                  sessionAttributes?: {} | undefined
                                }
                              | undefined
                            timeoutConditional?:
                              | {
                                  active: {}
                                  conditionalBranches: {}
                                  defaultBranch: {
                                    nextStep?:
                                      | {
                                          dialogAction?: DialogAction | undefined
                                          intent?: IntentOverride | undefined
                                          sessionAttributes?: {} | undefined
                                        }
                                      | undefined
                                    response?: ResponseSpecification | undefined
                                  }
                                }
                              | undefined
                          }
                        }
                      | undefined
                    elicitationCodeHook?:
                      | { enableCodeHookInvocation: {}; invocationLabel?: {} | undefined }
                      | undefined
                  }
                | undefined
            }
            obfuscationSetting?: { obfuscationSettingType?: {} | undefined } | undefined
            multipleValuesSetting?: { allowMultipleValues?: {} | undefined } | undefined
            subSlotSetting?:
              | { expression?: {} | undefined; slotSpecifications?: {} | undefined }
              | undefined
          }
        }
        output: UpdateSlotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/:slotTypeId/': {
      $delete: {
        input: {
          param: { slotTypeId: string; botId: string; botVersion: string; localeId: string }
        } & { query: { skipResourceInUseCheck?: boolean | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: { slotTypeId: string; botId: string; botVersion: string; localeId: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeSlotTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { slotTypeId: string; botId: string; botVersion: string; localeId: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            slotTypeName: string
            description?: string | undefined
            slotTypeValues?: SlotTypeValue[] | undefined
            valueSelectionSetting?:
              | {
                  resolutionStrategy?: {} | undefined
                  regexFilter?: { pattern: {} } | undefined
                  advancedRecognitionSetting?:
                    | { audioRecognitionStrategy?: {} | undefined }
                    | undefined
                }
              | undefined
            parentSlotTypeSignature?: string | undefined
            externalSourceSetting?:
              | {
                  grammarSlotTypeSetting?:
                    | {
                        source?:
                          | { s3BucketName: {}; s3ObjectKey: {}; kmsKeyArn?: {} | undefined }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            compositeSlotTypeSetting?: { subSlots?: {} | undefined } | undefined
          }
        }
        output: UpdateSlotTypeResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/bots/:botId/utterances/': {
      $delete: {
        input: { param: { botId: string } } & {
          query: { localeId?: string | undefined; sessionId?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteUtterancesResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/': {
      $get: {
        input: {
          param: {
            botId: string
            botVersion: string
            localeId: string
            botRecommendationId: string
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeBotRecommendationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            botId: string
            botVersion: string
            localeId: string
            botRecommendationId: string
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            encryptionSetting: {
              kmsKeyArn?: {} | undefined
              botLocaleExportPassword?: {} | undefined
              associatedTranscriptsPassword?: {} | undefined
            }
          }
        }
        output: UpdateBotRecommendationResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/metadata': {
      $get: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeCustomVocabularyMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/aggregatedutterances/': {
      $post: {
        input: { param: { botId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            botAliasId?: string | undefined
            botVersion?: string | undefined
            localeId: string
            aggregationDuration: {
              relativeAggregationDuration?: { timeDimension: {}; timeValue: {} } | undefined
            }
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: AggregatedUtterancesFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListAggregatedUtterancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/': {
      $post: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListBotRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            transcriptSourceSetting: {
              s3BucketTranscriptSource?:
                | {
                    s3BucketName: {}
                    pathFormat?: { objectPrefixes?: {} | undefined } | undefined
                    transcriptFormat: {}
                    transcriptFilter?:
                      | {
                          lexTranscriptFilter?:
                            | {
                                dateRangeFilter?: { startDateTime: {}; endDateTime: {} } | undefined
                              }
                            | undefined
                        }
                      | undefined
                    kmsKeyArn?: {} | undefined
                  }
                | undefined
            }
            encryptionSetting?:
              | {
                  kmsKeyArn?: {} | undefined
                  botLocaleExportPassword?: {} | undefined
                  associatedTranscriptsPassword?: {} | undefined
                }
              | undefined
          }
        }
        output: StartBotRecommendationResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/builtins/locales/:localeId/intents/': {
      $post: {
        input: { param: { localeId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListBuiltInIntentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/builtins/locales/:localeId/slottypes/': {
      $post: {
        input: { param: { localeId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListBuiltInSlotTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/list': {
      $post: {
        input: { param: { botId: string; botVersion: string; localeId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListCustomVocabularyItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/imports/': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            botId?: string | undefined
            botVersion?: string | undefined
            sortBy?: { attribute?: {} | undefined; order?: {} | undefined } | undefined
            filters?: ImportFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            localeId?: string | undefined
          }
        }
        output: ListImportsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            importId: string
            resourceSpecification: {
              botImportSpecification?:
                | {
                    botName: {}
                    roleArn: {}
                    dataPrivacy: DataPrivacy
                    idleSessionTTLInSeconds?: {} | undefined
                    botTags?: {} | undefined
                    testBotAliasTags?: {} | undefined
                  }
                | undefined
              botLocaleImportSpecification?:
                | {
                    botId: {}
                    botVersion: {}
                    localeId: {}
                    nluIntentConfidenceThreshold?: {} | undefined
                    voiceSettings?: VoiceSettings | undefined
                  }
                | undefined
              customVocabularyImportSpecification?: CustomVocabularyImportSpecification | undefined
            }
            mergeStrategy: 'Overwrite' | 'FailOnConflict' | 'Append'
            filePassword?: string | undefined
          }
        }
        output: StartImportResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/intents': {
      $post: {
        input: {
          param: {
            botId: string
            botVersion: string
            localeId: string
            botRecommendationId: string
          }
        } & { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { nextToken?: string | undefined; maxResults?: number | undefined } }
        output: ListRecommendedIntentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceARN': {
      $get: {
        input: { param: { resourceARN: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceARN: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/associatedtranscripts': {
      $post: {
        input: {
          param: {
            botId: string
            botVersion: string
            localeId: string
            botRecommendationId: string
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            searchOrder?: 'Ascending' | 'Descending' | undefined
            filters: AssociatedTranscriptFilter[]
            maxResults?: number | undefined
            nextIndex?: number | undefined
          }
        }
        output: SearchAssociatedTranscriptsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/stopbotrecommendation': {
      $put: {
        input: {
          param: {
            botId: string
            botVersion: string
            localeId: string
            botRecommendationId: string
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopBotRecommendationResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/tags/:resourceARN#tagKeys': {
      $delete: {
        input: { param: { resourceARN: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
