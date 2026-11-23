type CreateConfigurationSetResponse = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type InternalServiceErrorException = { [x: string]: unknown }
type AlreadyExistsException = { [x: string]: unknown }
type ListConfigurationSetsResponse = {
  ConfigurationSets?: {} | undefined
  NextToken?: {} | undefined
}
type CloudWatchLogsDestination = { IamRoleArn?: {} | undefined; LogGroupArn?: {} | undefined }
type KinesisFirehoseDestination = {
  DeliveryStreamArn?: {} | undefined
  IamRoleArn?: {} | undefined
}
type EventType =
  | 'INITIATED_CALL'
  | 'RINGING'
  | 'ANSWERED'
  | 'COMPLETED_CALL'
  | 'BUSY'
  | 'FAILED'
  | 'NO_ANSWER'
type EventTypes = EventType[]
type SnsDestination = { TopicArn?: {} | undefined }
type CreateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type EventDestination = {
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
  Enabled?: {} | undefined
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
  MatchingEventTypes?: EventTypes | undefined
  Name?: {} | undefined
  SnsDestination?: SnsDestination | undefined
}
type EventDestinations = EventDestination[]
type GetConfigurationSetEventDestinationsResponse = {
  EventDestinations?: EventDestinations | undefined
}
type DeleteConfigurationSetResponse = { [x: string]: unknown }
type DeleteConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type UpdateConfigurationSetEventDestinationResponse = { [x: string]: unknown }
type CallInstructionsMessageType = { Text?: {} | undefined }
type PlainTextMessageType = {
  LanguageCode?: {} | undefined
  Text?: {} | undefined
  VoiceId?: {} | undefined
}
type SSMLMessageType = {
  LanguageCode?: {} | undefined
  Text?: {} | undefined
  VoiceId?: {} | undefined
}
type SendVoiceMessageResponse = { MessageId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/sms-voice/configuration-sets': {
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
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: CreateConfigurationSetResponse
            outputFormat: 'json'
            status: 200
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
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: TooManyRequestsException
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
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: BadRequestException
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
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: LimitExceededException
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
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: InternalServiceErrorException
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
            } & { json: { ConfigurationSetName?: string | undefined } }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: string | undefined } } & {
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
            output: ListConfigurationSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: string | undefined } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { NextToken?: string | undefined; PageSize?: string | undefined } } & {
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
            input: { query: { NextToken?: string | undefined; PageSize?: string | undefined } } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations': {
      $post:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
                EventDestinationName?: string | undefined
              }
            }
            output: CreateConfigurationSetEventDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
                EventDestinationName?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
                EventDestinationName?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
                EventDestinationName?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
                EventDestinationName?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
                EventDestinationName?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
                EventDestinationName?: string | undefined
              }
            }
            output: AlreadyExistsException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: GetConfigurationSetEventDestinationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            input: { param: { ConfigurationSetName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            input: { param: { ConfigurationSetName: string } } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName': {
      $delete:
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            output: DeleteConfigurationSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            input: { param: { ConfigurationSetName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string } } & {
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
            input: { param: { ConfigurationSetName: string } } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName': {
      $delete:
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            output: DeleteConfigurationSetEventDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
              }
            }
            output: UpdateConfigurationSetEventDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConfigurationSetName: string; EventDestinationName: string } } & {
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
                EventDestination?:
                  | {
                      CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined
                      Enabled?: {} | undefined
                      KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined
                      MatchingEventTypes?: EventTypes | undefined
                      SnsDestination?: SnsDestination | undefined
                    }
                  | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/sms-voice/voice/message': {
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
                CallerId?: string | undefined
                ConfigurationSetName?: string | undefined
                Content?:
                  | {
                      CallInstructionsMessage?: CallInstructionsMessageType | undefined
                      PlainTextMessage?: PlainTextMessageType | undefined
                      SSMLMessage?: SSMLMessageType | undefined
                    }
                  | undefined
                DestinationPhoneNumber?: string | undefined
                OriginationPhoneNumber?: string | undefined
              }
            }
            output: SendVoiceMessageResponse
            outputFormat: 'json'
            status: 200
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
                CallerId?: string | undefined
                ConfigurationSetName?: string | undefined
                Content?:
                  | {
                      CallInstructionsMessage?: CallInstructionsMessageType | undefined
                      PlainTextMessage?: PlainTextMessageType | undefined
                      SSMLMessage?: SSMLMessageType | undefined
                    }
                  | undefined
                DestinationPhoneNumber?: string | undefined
                OriginationPhoneNumber?: string | undefined
              }
            }
            output: TooManyRequestsException
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
                CallerId?: string | undefined
                ConfigurationSetName?: string | undefined
                Content?:
                  | {
                      CallInstructionsMessage?: CallInstructionsMessageType | undefined
                      PlainTextMessage?: PlainTextMessageType | undefined
                      SSMLMessage?: SSMLMessageType | undefined
                    }
                  | undefined
                DestinationPhoneNumber?: string | undefined
                OriginationPhoneNumber?: string | undefined
              }
            }
            output: BadRequestException
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
                CallerId?: string | undefined
                ConfigurationSetName?: string | undefined
                Content?:
                  | {
                      CallInstructionsMessage?: CallInstructionsMessageType | undefined
                      PlainTextMessage?: PlainTextMessageType | undefined
                      SSMLMessage?: SSMLMessageType | undefined
                    }
                  | undefined
                DestinationPhoneNumber?: string | undefined
                OriginationPhoneNumber?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
