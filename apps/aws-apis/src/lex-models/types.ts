type CreateBotVersionResponse = {
  name?: {} | undefined
  description?: {} | undefined
  intents?: {} | undefined
  clarificationPrompt?: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined } | undefined
  abortStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  status?: {} | undefined
  failureReason?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  idleSessionTTLInSeconds?: {} | undefined
  voiceId?: {} | undefined
  checksum?: {} | undefined
  version?: {} | undefined
  locale?: {} | undefined
  childDirected?: {} | undefined
  enableModelImprovements?: {} | undefined
  detectSentiment?: {} | undefined
}
type NotFoundException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type InternalFailureException = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type PreconditionFailedException = { [x: string]: unknown }
type CreateIntentVersionResponse = {
  name?: {} | undefined
  description?: {} | undefined
  slots?: {} | undefined
  sampleUtterances?: {} | undefined
  confirmationPrompt?: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined } | undefined
  rejectionStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  followUpPrompt?:
    | {
        prompt: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
        rejectionStatement: { messages: {}; responseCard?: {} | undefined }
      }
    | undefined
  conclusionStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  dialogCodeHook?: { uri: {}; messageVersion: {} } | undefined
  fulfillmentActivity?:
    | { type: {}; codeHook?: { uri: {}; messageVersion: {} } | undefined }
    | undefined
  parentIntentSignature?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  version?: {} | undefined
  checksum?: {} | undefined
  kendraConfiguration?:
    | { kendraIndex: {}; queryFilterString?: {} | undefined; role: {} }
    | undefined
  inputContexts?: {} | undefined
  outputContexts?: {} | undefined
}
type CreateSlotTypeVersionResponse = {
  name?: {} | undefined
  description?: {} | undefined
  enumerationValues?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  version?: {} | undefined
  checksum?: {} | undefined
  valueSelectionStrategy?: {} | undefined
  parentSlotTypeSignature?: {} | undefined
  slotTypeConfigurations?: {} | undefined
}
type ResourceInUseException = { [x: string]: unknown }
type GetBotAliasResponse = {
  name?: {} | undefined
  description?: {} | undefined
  botVersion?: {} | undefined
  botName?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  checksum?: {} | undefined
  conversationLogs?: { logSettings?: {} | undefined; iamRoleArn?: {} | undefined } | undefined
}
type Tag = { key: {}; value: {} }
type PutBotAliasResponse = {
  name?: {} | undefined
  description?: {} | undefined
  botVersion?: {} | undefined
  botName?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  checksum?: {} | undefined
  conversationLogs?: { logSettings?: {} | undefined; iamRoleArn?: {} | undefined } | undefined
  tags?: {} | undefined
}
type GetBotChannelAssociationResponse = {
  name?: {} | undefined
  description?: {} | undefined
  botAlias?: {} | undefined
  botName?: {} | undefined
  createdDate?: {} | undefined
  type?: {} | undefined
  botConfiguration?: {} | undefined
  status?: {} | undefined
  failureReason?: {} | undefined
}
type GetIntentResponse = {
  name?: {} | undefined
  description?: {} | undefined
  slots?: {} | undefined
  sampleUtterances?: {} | undefined
  confirmationPrompt?: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined } | undefined
  rejectionStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  followUpPrompt?:
    | {
        prompt: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
        rejectionStatement: { messages: {}; responseCard?: {} | undefined }
      }
    | undefined
  conclusionStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  dialogCodeHook?: { uri: {}; messageVersion: {} } | undefined
  fulfillmentActivity?:
    | { type: {}; codeHook?: { uri: {}; messageVersion: {} } | undefined }
    | undefined
  parentIntentSignature?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  version?: {} | undefined
  checksum?: {} | undefined
  kendraConfiguration?:
    | { kendraIndex: {}; queryFilterString?: {} | undefined; role: {} }
    | undefined
  inputContexts?: {} | undefined
  outputContexts?: {} | undefined
}
type GetBotResponse = {
  name?: {} | undefined
  description?: {} | undefined
  intents?: {} | undefined
  enableModelImprovements?: {} | undefined
  nluIntentConfidenceThreshold?: {} | undefined
  clarificationPrompt?: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined } | undefined
  abortStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  status?: {} | undefined
  failureReason?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  idleSessionTTLInSeconds?: {} | undefined
  voiceId?: {} | undefined
  checksum?: {} | undefined
  version?: {} | undefined
  locale?: {} | undefined
  childDirected?: {} | undefined
  detectSentiment?: {} | undefined
}
type GetBotAliasesResponse = { BotAliases?: {} | undefined; nextToken?: {} | undefined }
type GetBotChannelAssociationsResponse = {
  botChannelAssociations?: {} | undefined
  nextToken?: {} | undefined
}
type GetBotVersionsResponse = { bots?: {} | undefined; nextToken?: {} | undefined }
type GetBotsResponse = { bots?: {} | undefined; nextToken?: {} | undefined }
type GetBuiltinIntentResponse = {
  signature?: {} | undefined
  supportedLocales?: {} | undefined
  slots?: {} | undefined
}
type GetBuiltinIntentsResponse = { intents?: {} | undefined; nextToken?: {} | undefined }
type GetBuiltinSlotTypesResponse = { slotTypes?: {} | undefined; nextToken?: {} | undefined }
type GetExportResponse = {
  name?: {} | undefined
  version?: {} | undefined
  resourceType?: {} | undefined
  exportType?: {} | undefined
  exportStatus?: {} | undefined
  failureReason?: {} | undefined
  url?: {} | undefined
}
type GetImportResponse = {
  name?: {} | undefined
  resourceType?: {} | undefined
  mergeStrategy?: {} | undefined
  importId?: {} | undefined
  importStatus?: {} | undefined
  failureReason?: {} | undefined
  createdDate?: {} | undefined
}
type GetIntentVersionsResponse = { intents?: {} | undefined; nextToken?: {} | undefined }
type GetIntentsResponse = { intents?: {} | undefined; nextToken?: {} | undefined }
type GetMigrationResponse = {
  migrationId?: {} | undefined
  v1BotName?: {} | undefined
  v1BotVersion?: {} | undefined
  v1BotLocale?: {} | undefined
  v2BotId?: {} | undefined
  v2BotRole?: {} | undefined
  migrationStatus?: {} | undefined
  migrationStrategy?: {} | undefined
  migrationTimestamp?: {} | undefined
  alerts?: {} | undefined
}
type GetMigrationsResponse = { migrationSummaries?: {} | undefined; nextToken?: {} | undefined }
type StartMigrationResponse = {
  v1BotName?: {} | undefined
  v1BotVersion?: {} | undefined
  v1BotLocale?: {} | undefined
  v2BotId?: {} | undefined
  v2BotRole?: {} | undefined
  migrationId?: {} | undefined
  migrationStrategy?: {} | undefined
  migrationTimestamp?: {} | undefined
}
type AccessDeniedException = { [x: string]: unknown }
type GetSlotTypeResponse = {
  name?: {} | undefined
  description?: {} | undefined
  enumerationValues?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  version?: {} | undefined
  checksum?: {} | undefined
  valueSelectionStrategy?: {} | undefined
  parentSlotTypeSignature?: {} | undefined
  slotTypeConfigurations?: {} | undefined
}
type GetSlotTypeVersionsResponse = { slotTypes?: {} | undefined; nextToken?: {} | undefined }
type GetSlotTypesResponse = { slotTypes?: {} | undefined; nextToken?: {} | undefined }
type Version = string
type GetUtterancesViewResponse = { botName?: {} | undefined; utterances?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type Intent = { intentName: {}; intentVersion: {} }
type PutBotResponse = {
  name?: {} | undefined
  description?: {} | undefined
  intents?: {} | undefined
  enableModelImprovements?: {} | undefined
  nluIntentConfidenceThreshold?: {} | undefined
  clarificationPrompt?: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined } | undefined
  abortStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  status?: {} | undefined
  failureReason?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  idleSessionTTLInSeconds?: {} | undefined
  voiceId?: {} | undefined
  checksum?: {} | undefined
  version?: {} | undefined
  locale?: {} | undefined
  childDirected?: {} | undefined
  createVersion?: {} | undefined
  detectSentiment?: {} | undefined
  tags?: {} | undefined
}
type Slot = {
  name: {}
  description?: {} | undefined
  slotConstraint: {}
  slotType?: {} | undefined
  slotTypeVersion?: {} | undefined
  valueElicitationPrompt?:
    | { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
    | undefined
  priority?: {} | undefined
  sampleUtterances?: {} | undefined
  responseCard?: {} | undefined
  obfuscationSetting?: {} | undefined
  defaultValueSpec?: { defaultValueList: {} } | undefined
}
type Utterance = string
type InputContext = { name: {} }
type OutputContext = { name: {}; timeToLiveInSeconds: {}; turnsToLive: {} }
type PutIntentResponse = {
  name?: {} | undefined
  description?: {} | undefined
  slots?: {} | undefined
  sampleUtterances?: {} | undefined
  confirmationPrompt?: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined } | undefined
  rejectionStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  followUpPrompt?:
    | {
        prompt: { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
        rejectionStatement: { messages: {}; responseCard?: {} | undefined }
      }
    | undefined
  conclusionStatement?: { messages: {}; responseCard?: {} | undefined } | undefined
  dialogCodeHook?: { uri: {}; messageVersion: {} } | undefined
  fulfillmentActivity?:
    | { type: {}; codeHook?: { uri: {}; messageVersion: {} } | undefined }
    | undefined
  parentIntentSignature?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  version?: {} | undefined
  checksum?: {} | undefined
  createVersion?: {} | undefined
  kendraConfiguration?:
    | { kendraIndex: {}; queryFilterString?: {} | undefined; role: {} }
    | undefined
  inputContexts?: {} | undefined
  outputContexts?: {} | undefined
}
type EnumerationValue = { value: {}; synonyms?: {} | undefined }
type SlotTypeConfiguration = { regexConfiguration?: { pattern: {} } | undefined }
type PutSlotTypeResponse = {
  name?: {} | undefined
  description?: {} | undefined
  enumerationValues?: {} | undefined
  lastUpdatedDate?: {} | undefined
  createdDate?: {} | undefined
  version?: {} | undefined
  checksum?: {} | undefined
  valueSelectionStrategy?: {} | undefined
  createVersion?: {} | undefined
  parentSlotTypeSignature?: {} | undefined
  slotTypeConfigurations?: {} | undefined
}
type StartImportResponse = {
  name?: {} | undefined
  resourceType?: {} | undefined
  mergeStrategy?: {} | undefined
  importId?: {} | undefined
  importStatus?: {} | undefined
  tags?: {} | undefined
  createdDate?: {} | undefined
}
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bots/:name/versions': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: CreateBotVersionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/intents/:name/versions': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: CreateIntentVersionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/slottypes/:name/versions': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: CreateSlotTypeVersionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { checksum?: string | undefined } }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/bots/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
        | {
            input: { param: { name: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/bots/:botName/aliases/:name': {
      $delete:
        | {
            input: { param: { name: string; botName: string } } & {
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
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: GetBotAliasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { name: string; botName: string } } & {
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
                botVersion: string
                checksum?: string | undefined
                conversationLogs?:
                  | { logSettings?: {} | undefined; iamRoleArn?: {} | undefined }
                  | undefined
                tags?: Tag[] | undefined
              }
            }
            output: PutBotAliasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
                botVersion: string
                checksum?: string | undefined
                conversationLogs?:
                  | { logSettings?: {} | undefined; iamRoleArn?: {} | undefined }
                  | undefined
                tags?: Tag[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
                botVersion: string
                checksum?: string | undefined
                conversationLogs?:
                  | { logSettings?: {} | undefined; iamRoleArn?: {} | undefined }
                  | undefined
                tags?: Tag[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
                botVersion: string
                checksum?: string | undefined
                conversationLogs?:
                  | { logSettings?: {} | undefined; iamRoleArn?: {} | undefined }
                  | undefined
                tags?: Tag[] | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
                botVersion: string
                checksum?: string | undefined
                conversationLogs?:
                  | { logSettings?: {} | undefined; iamRoleArn?: {} | undefined }
                  | undefined
                tags?: Tag[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string; botName: string } } & {
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
                botVersion: string
                checksum?: string | undefined
                conversationLogs?:
                  | { logSettings?: {} | undefined; iamRoleArn?: {} | undefined }
                  | undefined
                tags?: Tag[] | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/bots/:botName/aliases/:aliasName/channels/:name': {
      $delete:
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: GetBotChannelAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; botName: string; aliasName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/bots/:name/versions/:version': {
      $delete:
        | {
            input: { param: { name: string; version: string } } & {
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
        | {
            input: { param: { name: string; version: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/intents/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
        | {
            input: { param: { name: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/intents/:name/versions/:version': {
      $delete:
        | {
            input: { param: { name: string; version: string } } & {
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
        | {
            input: { param: { name: string; version: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { name: string; version: string } } & {
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
            output: GetIntentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/slottypes/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
        | {
            input: { param: { name: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/slottypes/:name/version/:version': {
      $delete:
        | {
            input: { param: { name: string; version: string } } & {
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
        | {
            input: { param: { name: string; version: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: ResourceInUseException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/bots/:botName/utterances/:userId': {
      $delete:
        | {
            input: { param: { botName: string; userId: string } } & {
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
        | {
            input: { param: { botName: string; userId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string; userId: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string; userId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { botName: string; userId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/bots/:name/versions/:versionoralias': {
      $get:
        | {
            input: { param: { name: string; versionoralias: string } } & {
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
            output: GetBotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; versionoralias: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; versionoralias: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; versionoralias: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; versionoralias: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/bots/:botName/aliases/': {
      $get:
        | {
            input: { param: { botName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: GetBotAliasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/bots/:botName/aliases/:aliasName/channels/': {
      $get:
        | {
            input: { param: { botName: string; aliasName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: GetBotChannelAssociationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botName: string; aliasName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string; aliasName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string; aliasName: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/bots/:name/versions/': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: GetBotVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/bots/': {
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: GetBotsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/builtins/intents/:signature': {
      $get:
        | {
            input: { param: { signature: string } } & {
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
            output: GetBuiltinIntentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { signature: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { signature: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { signature: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/builtins/intents/': {
      $get:
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: GetBuiltinIntentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/builtins/slottypes/': {
      $get:
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: GetBuiltinSlotTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                locale?:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                  | undefined
                signatureContains?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/exports/#name&version&resourceType&exportType': {
      $get:
        | {
            input: {
              query: {
                name: string
                version: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                exportType: 'ALEXA_SKILLS_KIT' | 'LEX'
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
            output: GetExportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                version: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                exportType: 'ALEXA_SKILLS_KIT' | 'LEX'
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                name: string
                version: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                exportType: 'ALEXA_SKILLS_KIT' | 'LEX'
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                name: string
                version: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                exportType: 'ALEXA_SKILLS_KIT' | 'LEX'
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                name: string
                version: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                exportType: 'ALEXA_SKILLS_KIT' | 'LEX'
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/imports/:importId': {
      $get:
        | {
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
            output: GetImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/intents/:name/versions/': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: GetIntentVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/intents/': {
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: GetIntentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/migrations/:migrationId': {
      $get:
        | {
            input: { param: { migrationId: string } } & {
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
            output: GetMigrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { migrationId: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { migrationId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { migrationId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { migrationId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/migrations': {
      $get:
        | {
            input: {
              query: {
                sortByAttribute?: 'V1_BOT_NAME' | 'MIGRATION_DATE_TIME' | undefined
                sortByOrder?: 'ASCENDING' | 'DESCENDING' | undefined
                v1BotNameContains?: string | undefined
                migrationStatusEquals?: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: GetMigrationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sortByAttribute?: 'V1_BOT_NAME' | 'MIGRATION_DATE_TIME' | undefined
                sortByOrder?: 'ASCENDING' | 'DESCENDING' | undefined
                v1BotNameContains?: string | undefined
                migrationStatusEquals?: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                sortByAttribute?: 'V1_BOT_NAME' | 'MIGRATION_DATE_TIME' | undefined
                sortByOrder?: 'ASCENDING' | 'DESCENDING' | undefined
                v1BotNameContains?: string | undefined
                migrationStatusEquals?: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                sortByAttribute?: 'V1_BOT_NAME' | 'MIGRATION_DATE_TIME' | undefined
                sortByOrder?: 'ASCENDING' | 'DESCENDING' | undefined
                v1BotNameContains?: string | undefined
                migrationStatusEquals?: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
      $post:
        | {
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
                v1BotName: string
                v1BotVersion: string
                v2BotName: string
                v2BotRole: string
                migrationStrategy: 'CREATE_NEW' | 'UPDATE_EXISTING'
              }
            }
            output: StartMigrationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
                v1BotName: string
                v1BotVersion: string
                v2BotName: string
                v2BotRole: string
                migrationStrategy: 'CREATE_NEW' | 'UPDATE_EXISTING'
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                v1BotName: string
                v1BotVersion: string
                v2BotName: string
                v2BotRole: string
                migrationStrategy: 'CREATE_NEW' | 'UPDATE_EXISTING'
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                v1BotName: string
                v1BotVersion: string
                v2BotName: string
                v2BotRole: string
                migrationStrategy: 'CREATE_NEW' | 'UPDATE_EXISTING'
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                v1BotName: string
                v1BotVersion: string
                v2BotName: string
                v2BotRole: string
                migrationStrategy: 'CREATE_NEW' | 'UPDATE_EXISTING'
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                v1BotName: string
                v1BotVersion: string
                v2BotName: string
                v2BotRole: string
                migrationStrategy: 'CREATE_NEW' | 'UPDATE_EXISTING'
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/slottypes/:name/versions/:version': {
      $get:
        | {
            input: { param: { name: string; version: string } } & {
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
            output: GetSlotTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string; version: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/slottypes/:name/versions/': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: GetSlotTypeVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/slottypes/': {
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: GetSlotTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                nameContains?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/bots/:botname/utterances#view=aggregation&bot_versions&status_type': {
      $get:
        | {
            input: { param: { botname: string } } & {
              query: {
                bot_versions: Version[]
                status_type: 'Detected' | 'Missed'
                view: 'aggregation'
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
            output: GetUtterancesViewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botname: string } } & {
              query: {
                bot_versions: Version[]
                status_type: 'Detected' | 'Missed'
                view: 'aggregation'
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botname: string } } & {
              query: {
                bot_versions: Version[]
                status_type: 'Detected' | 'Missed'
                view: 'aggregation'
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botname: string } } & {
              query: {
                bot_versions: Version[]
                status_type: 'Detected' | 'Missed'
                view: 'aggregation'
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
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/tags/:resourceArn': {
      $get:
        | {
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
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
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
            } & { json: { tags: Tag[] } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 204
          }
        | {
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
            } & { json: { tags: Tag[] } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { tags: Tag[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { tags: Tag[] } }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            } & { json: { tags: Tag[] } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            } & { json: { tags: Tag[] } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/bots/:name/versions/$LATEST': {
      $put:
        | {
            input: { param: { name: string } } & {
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
                intents?: Intent[] | undefined
                enableModelImprovements?: boolean | undefined
                nluIntentConfidenceThreshold?: number | undefined
                clarificationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                abortStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                idleSessionTTLInSeconds?: number | undefined
                voiceId?: string | undefined
                checksum?: string | undefined
                processBehavior?: 'SAVE' | 'BUILD' | undefined
                locale:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                childDirected: boolean
                detectSentiment?: boolean | undefined
                createVersion?: boolean | undefined
                tags?: Tag[] | undefined
              }
            }
            output: PutBotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                intents?: Intent[] | undefined
                enableModelImprovements?: boolean | undefined
                nluIntentConfidenceThreshold?: number | undefined
                clarificationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                abortStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                idleSessionTTLInSeconds?: number | undefined
                voiceId?: string | undefined
                checksum?: string | undefined
                processBehavior?: 'SAVE' | 'BUILD' | undefined
                locale:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                childDirected: boolean
                detectSentiment?: boolean | undefined
                createVersion?: boolean | undefined
                tags?: Tag[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                intents?: Intent[] | undefined
                enableModelImprovements?: boolean | undefined
                nluIntentConfidenceThreshold?: number | undefined
                clarificationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                abortStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                idleSessionTTLInSeconds?: number | undefined
                voiceId?: string | undefined
                checksum?: string | undefined
                processBehavior?: 'SAVE' | 'BUILD' | undefined
                locale:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                childDirected: boolean
                detectSentiment?: boolean | undefined
                createVersion?: boolean | undefined
                tags?: Tag[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
                intents?: Intent[] | undefined
                enableModelImprovements?: boolean | undefined
                nluIntentConfidenceThreshold?: number | undefined
                clarificationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                abortStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                idleSessionTTLInSeconds?: number | undefined
                voiceId?: string | undefined
                checksum?: string | undefined
                processBehavior?: 'SAVE' | 'BUILD' | undefined
                locale:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                childDirected: boolean
                detectSentiment?: boolean | undefined
                createVersion?: boolean | undefined
                tags?: Tag[] | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
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
                intents?: Intent[] | undefined
                enableModelImprovements?: boolean | undefined
                nluIntentConfidenceThreshold?: number | undefined
                clarificationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                abortStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                idleSessionTTLInSeconds?: number | undefined
                voiceId?: string | undefined
                checksum?: string | undefined
                processBehavior?: 'SAVE' | 'BUILD' | undefined
                locale:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                childDirected: boolean
                detectSentiment?: boolean | undefined
                createVersion?: boolean | undefined
                tags?: Tag[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
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
                intents?: Intent[] | undefined
                enableModelImprovements?: boolean | undefined
                nluIntentConfidenceThreshold?: number | undefined
                clarificationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                abortStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                idleSessionTTLInSeconds?: number | undefined
                voiceId?: string | undefined
                checksum?: string | undefined
                processBehavior?: 'SAVE' | 'BUILD' | undefined
                locale:
                  | 'de-DE'
                  | 'en-AU'
                  | 'en-GB'
                  | 'en-IN'
                  | 'en-US'
                  | 'es-419'
                  | 'es-ES'
                  | 'es-US'
                  | 'fr-FR'
                  | 'fr-CA'
                  | 'it-IT'
                  | 'ja-JP'
                  | 'ko-KR'
                childDirected: boolean
                detectSentiment?: boolean | undefined
                createVersion?: boolean | undefined
                tags?: Tag[] | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/intents/:name/versions/$LATEST': {
      $put:
        | {
            input: { param: { name: string } } & {
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
                slots?: Slot[] | undefined
                sampleUtterances?: Utterance[] | undefined
                confirmationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                rejectionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                followUpPrompt?:
                  | {
                      prompt?:
                        | { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
                        | undefined
                      rejectionStatement?:
                        | { messages: {}; responseCard?: {} | undefined }
                        | undefined
                    }
                  | undefined
                conclusionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                dialogCodeHook?:
                  | { uri?: {} | undefined; messageVersion?: {} | undefined }
                  | undefined
                fulfillmentActivity?:
                  | {
                      type?: {} | undefined
                      codeHook?: { uri: {}; messageVersion: {} } | undefined
                    }
                  | undefined
                parentIntentSignature?: string | undefined
                checksum?: string | undefined
                createVersion?: boolean | undefined
                kendraConfiguration?:
                  | {
                      kendraIndex?: {} | undefined
                      queryFilterString?: {} | undefined
                      role?: {} | undefined
                    }
                  | undefined
                inputContexts?: InputContext[] | undefined
                outputContexts?: OutputContext[] | undefined
              }
            }
            output: PutIntentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                slots?: Slot[] | undefined
                sampleUtterances?: Utterance[] | undefined
                confirmationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                rejectionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                followUpPrompt?:
                  | {
                      prompt?:
                        | { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
                        | undefined
                      rejectionStatement?:
                        | { messages: {}; responseCard?: {} | undefined }
                        | undefined
                    }
                  | undefined
                conclusionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                dialogCodeHook?:
                  | { uri?: {} | undefined; messageVersion?: {} | undefined }
                  | undefined
                fulfillmentActivity?:
                  | {
                      type?: {} | undefined
                      codeHook?: { uri: {}; messageVersion: {} } | undefined
                    }
                  | undefined
                parentIntentSignature?: string | undefined
                checksum?: string | undefined
                createVersion?: boolean | undefined
                kendraConfiguration?:
                  | {
                      kendraIndex?: {} | undefined
                      queryFilterString?: {} | undefined
                      role?: {} | undefined
                    }
                  | undefined
                inputContexts?: InputContext[] | undefined
                outputContexts?: OutputContext[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                slots?: Slot[] | undefined
                sampleUtterances?: Utterance[] | undefined
                confirmationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                rejectionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                followUpPrompt?:
                  | {
                      prompt?:
                        | { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
                        | undefined
                      rejectionStatement?:
                        | { messages: {}; responseCard?: {} | undefined }
                        | undefined
                    }
                  | undefined
                conclusionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                dialogCodeHook?:
                  | { uri?: {} | undefined; messageVersion?: {} | undefined }
                  | undefined
                fulfillmentActivity?:
                  | {
                      type?: {} | undefined
                      codeHook?: { uri: {}; messageVersion: {} } | undefined
                    }
                  | undefined
                parentIntentSignature?: string | undefined
                checksum?: string | undefined
                createVersion?: boolean | undefined
                kendraConfiguration?:
                  | {
                      kendraIndex?: {} | undefined
                      queryFilterString?: {} | undefined
                      role?: {} | undefined
                    }
                  | undefined
                inputContexts?: InputContext[] | undefined
                outputContexts?: OutputContext[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
                slots?: Slot[] | undefined
                sampleUtterances?: Utterance[] | undefined
                confirmationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                rejectionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                followUpPrompt?:
                  | {
                      prompt?:
                        | { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
                        | undefined
                      rejectionStatement?:
                        | { messages: {}; responseCard?: {} | undefined }
                        | undefined
                    }
                  | undefined
                conclusionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                dialogCodeHook?:
                  | { uri?: {} | undefined; messageVersion?: {} | undefined }
                  | undefined
                fulfillmentActivity?:
                  | {
                      type?: {} | undefined
                      codeHook?: { uri: {}; messageVersion: {} } | undefined
                    }
                  | undefined
                parentIntentSignature?: string | undefined
                checksum?: string | undefined
                createVersion?: boolean | undefined
                kendraConfiguration?:
                  | {
                      kendraIndex?: {} | undefined
                      queryFilterString?: {} | undefined
                      role?: {} | undefined
                    }
                  | undefined
                inputContexts?: InputContext[] | undefined
                outputContexts?: OutputContext[] | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
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
                slots?: Slot[] | undefined
                sampleUtterances?: Utterance[] | undefined
                confirmationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                rejectionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                followUpPrompt?:
                  | {
                      prompt?:
                        | { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
                        | undefined
                      rejectionStatement?:
                        | { messages: {}; responseCard?: {} | undefined }
                        | undefined
                    }
                  | undefined
                conclusionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                dialogCodeHook?:
                  | { uri?: {} | undefined; messageVersion?: {} | undefined }
                  | undefined
                fulfillmentActivity?:
                  | {
                      type?: {} | undefined
                      codeHook?: { uri: {}; messageVersion: {} } | undefined
                    }
                  | undefined
                parentIntentSignature?: string | undefined
                checksum?: string | undefined
                createVersion?: boolean | undefined
                kendraConfiguration?:
                  | {
                      kendraIndex?: {} | undefined
                      queryFilterString?: {} | undefined
                      role?: {} | undefined
                    }
                  | undefined
                inputContexts?: InputContext[] | undefined
                outputContexts?: OutputContext[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
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
                slots?: Slot[] | undefined
                sampleUtterances?: Utterance[] | undefined
                confirmationPrompt?:
                  | {
                      messages?: {} | undefined
                      maxAttempts?: {} | undefined
                      responseCard?: {} | undefined
                    }
                  | undefined
                rejectionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                followUpPrompt?:
                  | {
                      prompt?:
                        | { messages: {}; maxAttempts: {}; responseCard?: {} | undefined }
                        | undefined
                      rejectionStatement?:
                        | { messages: {}; responseCard?: {} | undefined }
                        | undefined
                    }
                  | undefined
                conclusionStatement?:
                  | { messages?: {} | undefined; responseCard?: {} | undefined }
                  | undefined
                dialogCodeHook?:
                  | { uri?: {} | undefined; messageVersion?: {} | undefined }
                  | undefined
                fulfillmentActivity?:
                  | {
                      type?: {} | undefined
                      codeHook?: { uri: {}; messageVersion: {} } | undefined
                    }
                  | undefined
                parentIntentSignature?: string | undefined
                checksum?: string | undefined
                createVersion?: boolean | undefined
                kendraConfiguration?:
                  | {
                      kendraIndex?: {} | undefined
                      queryFilterString?: {} | undefined
                      role?: {} | undefined
                    }
                  | undefined
                inputContexts?: InputContext[] | undefined
                outputContexts?: OutputContext[] | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/slottypes/:name/versions/$LATEST': {
      $put:
        | {
            input: { param: { name: string } } & {
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
                enumerationValues?: EnumerationValue[] | undefined
                checksum?: string | undefined
                valueSelectionStrategy?: 'ORIGINAL_VALUE' | 'TOP_RESOLUTION' | undefined
                createVersion?: boolean | undefined
                parentSlotTypeSignature?: string | undefined
                slotTypeConfigurations?: SlotTypeConfiguration[] | undefined
              }
            }
            output: PutSlotTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
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
                enumerationValues?: EnumerationValue[] | undefined
                checksum?: string | undefined
                valueSelectionStrategy?: 'ORIGINAL_VALUE' | 'TOP_RESOLUTION' | undefined
                createVersion?: boolean | undefined
                parentSlotTypeSignature?: string | undefined
                slotTypeConfigurations?: SlotTypeConfiguration[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
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
                enumerationValues?: EnumerationValue[] | undefined
                checksum?: string | undefined
                valueSelectionStrategy?: 'ORIGINAL_VALUE' | 'TOP_RESOLUTION' | undefined
                createVersion?: boolean | undefined
                parentSlotTypeSignature?: string | undefined
                slotTypeConfigurations?: SlotTypeConfiguration[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
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
                enumerationValues?: EnumerationValue[] | undefined
                checksum?: string | undefined
                valueSelectionStrategy?: 'ORIGINAL_VALUE' | 'TOP_RESOLUTION' | undefined
                createVersion?: boolean | undefined
                parentSlotTypeSignature?: string | undefined
                slotTypeConfigurations?: SlotTypeConfiguration[] | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
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
                enumerationValues?: EnumerationValue[] | undefined
                checksum?: string | undefined
                valueSelectionStrategy?: 'ORIGINAL_VALUE' | 'TOP_RESOLUTION' | undefined
                createVersion?: boolean | undefined
                parentSlotTypeSignature?: string | undefined
                slotTypeConfigurations?: SlotTypeConfiguration[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
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
                enumerationValues?: EnumerationValue[] | undefined
                checksum?: string | undefined
                valueSelectionStrategy?: 'ORIGINAL_VALUE' | 'TOP_RESOLUTION' | undefined
                createVersion?: boolean | undefined
                parentSlotTypeSignature?: string | undefined
                slotTypeConfigurations?: SlotTypeConfiguration[] | undefined
              }
            }
            output: PreconditionFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/imports/': {
      $post:
        | {
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
                payload: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                mergeStrategy: 'OVERWRITE_LATEST' | 'FAIL_ON_CONFLICT'
                tags?: Tag[] | undefined
              }
            }
            output: StartImportResponse
            outputFormat: 'json'
            status: 201
          }
        | {
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
                payload: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                mergeStrategy: 'OVERWRITE_LATEST' | 'FAIL_ON_CONFLICT'
                tags?: Tag[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                payload: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                mergeStrategy: 'OVERWRITE_LATEST' | 'FAIL_ON_CONFLICT'
                tags?: Tag[] | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                payload: string
                resourceType: 'BOT' | 'INTENT' | 'SLOT_TYPE'
                mergeStrategy: 'OVERWRITE_LATEST' | 'FAIL_ON_CONFLICT'
                tags?: Tag[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            status: 204
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
