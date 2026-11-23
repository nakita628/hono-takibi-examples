type AcknowledgeAlarmActionRequest = {
  requestId: {}
  alarmModelName: {}
  keyValue?: {} | undefined
  note?: {} | undefined
}
type BatchAcknowledgeAlarmResponse = { errorEntries?: {} | undefined }
type DeleteDetectorRequest = { messageId: {}; detectorModelName: {}; keyValue?: {} | undefined }
type BatchDeleteDetectorResponse = { batchDeleteDetectorErrorEntries?: {} | undefined }
type DisableAlarmActionRequest = {
  requestId: {}
  alarmModelName: {}
  keyValue?: {} | undefined
  note?: {} | undefined
}
type BatchDisableAlarmResponse = { errorEntries?: {} | undefined }
type EnableAlarmActionRequest = {
  requestId: {}
  alarmModelName: {}
  keyValue?: {} | undefined
  note?: {} | undefined
}
type BatchEnableAlarmResponse = { errorEntries?: {} | undefined }
type Message = {
  messageId: {}
  inputName: {}
  payload: {}
  timestamp?: { timeInMillis?: {} | undefined } | undefined
}
type BatchPutMessageResponse = { BatchPutMessageErrorEntries?: {} | undefined }
type ResetAlarmActionRequest = {
  requestId: {}
  alarmModelName: {}
  keyValue?: {} | undefined
  note?: {} | undefined
}
type BatchResetAlarmResponse = { errorEntries?: {} | undefined }
type SnoozeAlarmActionRequest = {
  requestId: {}
  alarmModelName: {}
  keyValue?: {} | undefined
  note?: {} | undefined
  snoozeDuration: {}
}
type BatchSnoozeAlarmResponse = { errorEntries?: {} | undefined }
type UpdateDetectorRequest = {
  messageId: {}
  detectorModelName: {}
  keyValue?: {} | undefined
  state: { stateName: {}; variables: {}; timers: {} }
}
type BatchUpdateDetectorResponse = { batchUpdateDetectorErrorEntries?: {} | undefined }
type DescribeAlarmResponse = {
  alarm?:
    | {
        alarmModelName?: {} | undefined
        alarmModelVersion?: {} | undefined
        keyValue?: {} | undefined
        alarmState?:
          | {
              stateName?: {} | undefined
              ruleEvaluation?:
                | {
                    simpleRuleEvaluation?:
                      | {
                          inputPropertyValue?: {} | undefined
                          operator?: {} | undefined
                          thresholdValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              customerAction?:
                | {
                    actionName?: {} | undefined
                    snoozeActionConfiguration?:
                      | { snoozeDuration?: {} | undefined; note?: {} | undefined }
                      | undefined
                    enableActionConfiguration?: { note?: {} | undefined } | undefined
                    disableActionConfiguration?: { note?: {} | undefined } | undefined
                    acknowledgeActionConfiguration?: { note?: {} | undefined } | undefined
                    resetActionConfiguration?: { note?: {} | undefined } | undefined
                  }
                | undefined
              systemEvent?:
                | {
                    eventType?: {} | undefined
                    stateChangeConfiguration?: { triggerType?: {} | undefined } | undefined
                  }
                | undefined
            }
          | undefined
        severity?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
      }
    | undefined
}
type DescribeDetectorResponse = {
  detector?:
    | {
        detectorModelName?: {} | undefined
        keyValue?: {} | undefined
        detectorModelVersion?: {} | undefined
        state?: { stateName: {}; variables: {}; timers: {} } | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
      }
    | undefined
}
type ListAlarmsResponse = { alarmSummaries?: {} | undefined; nextToken?: {} | undefined }
type ListDetectorsResponse = { detectorSummaries?: {} | undefined; nextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/alarms/acknowledge': {
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
        } & { json: { acknowledgeActionRequests: AcknowledgeAlarmActionRequest[] } }
        output: BatchAcknowledgeAlarmResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/detectors/delete': {
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
        } & { json: { detectors: DeleteDetectorRequest[] } }
        output: BatchDeleteDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alarms/disable': {
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
        } & { json: { disableActionRequests: DisableAlarmActionRequest[] } }
        output: BatchDisableAlarmResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/alarms/enable': {
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
        } & { json: { enableActionRequests: EnableAlarmActionRequest[] } }
        output: BatchEnableAlarmResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/inputs/messages': {
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
        } & { json: { messages: Message[] } }
        output: BatchPutMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alarms/reset': {
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
        } & { json: { resetActionRequests: ResetAlarmActionRequest[] } }
        output: BatchResetAlarmResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/alarms/snooze': {
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
        } & { json: { snoozeActionRequests: SnoozeAlarmActionRequest[] } }
        output: BatchSnoozeAlarmResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/detectors': {
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
        } & { json: { detectors: UpdateDetectorRequest[] } }
        output: BatchUpdateDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alarms/:alarmModelName/keyValues/': {
      $get: {
        input: { param: { alarmModelName: string } } & {
          query: { keyValue?: string | undefined }
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
        output: DescribeAlarmResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detectors/:detectorModelName/keyValues/': {
      $get: {
        input: { param: { detectorModelName: string } } & {
          query: { keyValue?: string | undefined }
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
        output: DescribeDetectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alarms/:alarmModelName': {
      $get: {
        input: { param: { alarmModelName: string } } & {
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
        output: ListAlarmsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detectors/:detectorModelName': {
      $get: {
        input: { param: { detectorModelName: string } } & {
          query: {
            stateName?: string | undefined
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
        output: ListDetectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
