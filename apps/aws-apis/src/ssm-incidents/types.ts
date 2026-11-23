type RegionMapInputValue = { sseKmsKeyId?: {} | undefined }
type TagValue = string
type CreateReplicationSetOutput = { arn: {} }
type Action = {
  ssmAutomation?:
    | {
        documentName: {}
        documentVersion?: {} | undefined
        dynamicParameters?: {} | undefined
        parameters?: {} | undefined
        roleArn: {}
        targetAccount?: {} | undefined
      }
    | undefined
}
type SsmContactsArn = string
type Integration = {
  pagerDutyConfiguration?:
    | { name: {}; pagerDutyIncidentConfiguration: { serviceId: {} }; secretId: {} }
    | undefined
}
type CreateResponsePlanOutput = { arn: {} }
type EventReference = { relatedItemId?: {} | undefined; resource?: {} | undefined }
type CreateTimelineEventOutput = { eventId: {}; incidentRecordArn: {} }
type DeleteIncidentRecordOutput = { [x: string]: unknown }
type DeleteReplicationSetOutput = { [x: string]: unknown }
type DeleteResourcePolicyOutput = { [x: string]: unknown }
type DeleteResponsePlanOutput = { [x: string]: unknown }
type DeleteTimelineEventOutput = { [x: string]: unknown }
type GetIncidentRecordOutput = {
  incidentRecord: {
    arn: {}
    automationExecutions?: {} | undefined
    chatChannel?: { chatbotSns?: {} | undefined; empty?: {} | undefined } | undefined
    creationTime: {}
    dedupeString: {}
    impact: {}
    incidentRecordSource: {
      createdBy: {}
      invokedBy?: {} | undefined
      resourceArn?: {} | undefined
      source: {}
    }
    lastModifiedBy: {}
    lastModifiedTime: {}
    notificationTargets?: {} | undefined
    resolvedTime?: {} | undefined
    status: {}
    summary?: {} | undefined
    title: {}
  }
}
type GetReplicationSetOutput = {
  replicationSet: {
    arn?: {} | undefined
    createdBy: {}
    createdTime: {}
    deletionProtected: {}
    lastModifiedBy: {}
    lastModifiedTime: {}
    regionMap: {}
    status: {}
  }
}
type GetResourcePoliciesOutput = { nextToken?: {} | undefined; resourcePolicies: {} }
type GetResponsePlanOutput = {
  actions?: {} | undefined
  arn: {}
  chatChannel?: { chatbotSns?: {} | undefined; empty?: {} | undefined } | undefined
  displayName?: {} | undefined
  engagements?: {} | undefined
  incidentTemplate: {
    dedupeString?: {} | undefined
    impact: {}
    incidentTags?: {} | undefined
    notificationTargets?: {} | undefined
    summary?: {} | undefined
    title: {}
  }
  integrations?: {} | undefined
  name: {}
}
type GetTimelineEventOutput = {
  event: {
    eventData: {}
    eventId: {}
    eventReferences?: {} | undefined
    eventTime: {}
    eventType: {}
    eventUpdatedTime: {}
    incidentRecordArn: {}
  }
}
type Filter = {
  condition: {
    after?: {} | undefined
    before?: {} | undefined
    equals?: { integerValues?: {} | undefined; stringValues?: {} | undefined } | undefined
  }
  key: {}
}
type ListIncidentRecordsOutput = { incidentRecordSummaries: {}; nextToken?: {} | undefined }
type ListRelatedItemsOutput = { nextToken?: {} | undefined; relatedItems: {} }
type ListReplicationSetsOutput = { nextToken?: {} | undefined; replicationSetArns: {} }
type ListResponsePlansOutput = { nextToken?: {} | undefined; responsePlanSummaries: {} }
type ListTagsForResourceResponse = { tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type ListTimelineEventsOutput = { eventSummaries: {}; nextToken?: {} | undefined }
type PutResourcePolicyOutput = { policyId: {} }
type RelatedItem = {
  generatedId?: {} | undefined
  identifier: {
    type: {}
    value: {
      arn?: {} | undefined
      metricDefinition?: {} | undefined
      pagerDutyIncidentDetail?:
        | { autoResolve?: {} | undefined; id: {}; secretId?: {} | undefined }
        | undefined
      url?: {} | undefined
    }
  }
  title?: {} | undefined
}
type StartIncidentOutput = { incidentRecordArn: {} }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateDeletionProtectionOutput = { [x: string]: unknown }
type NotificationTargetItem = { snsTopicArn?: {} | undefined }
type UpdateIncidentRecordOutput = { [x: string]: unknown }
type UpdateRelatedItemsOutput = { [x: string]: unknown }
type UpdateReplicationSetAction = {
  addRegionAction?: { regionName: {}; sseKmsKeyId?: {} | undefined } | undefined
  deleteRegionAction?: { regionName: {} } | undefined
}
type UpdateReplicationSetOutput = { [x: string]: unknown }
type UpdateResponsePlanOutput = { [x: string]: unknown }
type UpdateTimelineEventOutput = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/createReplicationSet': {
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
        } & {
          json: {
            clientToken?: string | undefined
            regions: { [x: string]: RegionMapInputValue }
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateReplicationSetOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/createResponsePlan': {
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
        } & {
          json: {
            actions?: Action[] | undefined
            chatChannel?: { chatbotSns?: {} | undefined; empty?: {} | undefined } | undefined
            clientToken?: string | undefined
            displayName?: string | undefined
            engagements?: SsmContactsArn[] | undefined
            incidentTemplate: {
              dedupeString?: {} | undefined
              impact?: {} | undefined
              incidentTags?: {} | undefined
              notificationTargets?: {} | undefined
              summary?: {} | undefined
              title?: {} | undefined
            }
            integrations?: Integration[] | undefined
            name: string
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateResponsePlanOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/createTimelineEvent': {
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
        } & {
          json: {
            clientToken?: string | undefined
            eventData: string
            eventReferences?: EventReference[] | undefined
            eventTime: string
            eventType: string
            incidentRecordArn: string
          }
        }
        output: CreateTimelineEventOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/deleteIncidentRecord': {
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
        } & { json: { arn: string } }
        output: DeleteIncidentRecordOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/deleteReplicationSet#arn': {
      $post: {
        input: { query: { arn: string } } & {
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
        output: DeleteReplicationSetOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/deleteResourcePolicy': {
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
        } & { json: { policyId: string; resourceArn: string } }
        output: DeleteResourcePolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deleteResponsePlan': {
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
        } & { json: { arn: string } }
        output: DeleteResponsePlanOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/deleteTimelineEvent': {
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
        } & { json: { eventId: string; incidentRecordArn: string } }
        output: DeleteTimelineEventOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/getIncidentRecord#arn': {
      $get: {
        input: { query: { arn: string } } & {
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
        output: GetIncidentRecordOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getReplicationSet#arn': {
      $get: {
        input: { query: { arn: string } } & {
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
        output: GetReplicationSetOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getResourcePolicies#resourceArn': {
      $post: {
        input: {
          query: {
            resourceArn: string
            maxResults?: string | undefined
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
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: GetResourcePoliciesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getResponsePlan#arn': {
      $get: {
        input: { query: { arn: string } } & {
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
        output: GetResponsePlanOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getTimelineEvent#eventId&incidentRecordArn': {
      $get: {
        input: { query: { eventId: string; incidentRecordArn: string } } & {
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
        output: GetTimelineEventOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listIncidentRecords': {
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
            filters?: Filter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListIncidentRecordsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listRelatedItems': {
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
            incidentRecordArn: string
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListRelatedItemsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listReplicationSets': {
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
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListReplicationSetsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listResponsePlans': {
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
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListResponsePlansOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
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
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/listTimelineEvents': {
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
            filters?: Filter[] | undefined
            incidentRecordArn: string
            maxResults?: number | undefined
            nextToken?: string | undefined
            sortBy?: 'EVENT_TIME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
          }
        }
        output: ListTimelineEventsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/putResourcePolicy': {
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
        } & { json: { policy: string; resourceArn: string } }
        output: PutResourcePolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/startIncident': {
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
        } & {
          json: {
            clientToken?: string | undefined
            impact?: number | undefined
            relatedItems?: RelatedItem[] | undefined
            responsePlanArn: string
            title?: string | undefined
            triggerDetails?:
              | {
                  rawData?: {} | undefined
                  source?: {} | undefined
                  timestamp?: {} | undefined
                  triggerArn?: {} | undefined
                }
              | undefined
          }
        }
        output: StartIncidentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
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
    }
  } & {
    '/updateDeletionProtection': {
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
        } & { json: { arn: string; clientToken?: string | undefined; deletionProtected: boolean } }
        output: UpdateDeletionProtectionOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/updateIncidentRecord': {
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
        } & {
          json: {
            arn: string
            chatChannel?: { chatbotSns?: {} | undefined; empty?: {} | undefined } | undefined
            clientToken?: string | undefined
            impact?: number | undefined
            notificationTargets?: NotificationTargetItem[] | undefined
            status?: 'OPEN' | 'RESOLVED' | undefined
            summary?: string | undefined
            title?: string | undefined
          }
        }
        output: UpdateIncidentRecordOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/updateRelatedItems': {
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
        } & {
          json: {
            clientToken?: string | undefined
            incidentRecordArn: string
            relatedItemsUpdate: {
              itemToAdd?:
                | {
                    generatedId?: {} | undefined
                    identifier: {
                      type: {}
                      value: {
                        arn?: {} | undefined
                        metricDefinition?: {} | undefined
                        pagerDutyIncidentDetail?:
                          | { autoResolve?: {} | undefined; id: {}; secretId?: {} | undefined }
                          | undefined
                        url?: {} | undefined
                      }
                    }
                    title?: {} | undefined
                  }
                | undefined
              itemToRemove?:
                | {
                    type: {}
                    value: {
                      arn?: {} | undefined
                      metricDefinition?: {} | undefined
                      pagerDutyIncidentDetail?:
                        | { autoResolve?: {} | undefined; id: {}; secretId?: {} | undefined }
                        | undefined
                      url?: {} | undefined
                    }
                  }
                | undefined
            }
          }
        }
        output: UpdateRelatedItemsOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/updateReplicationSet': {
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
        } & {
          json: {
            actions: UpdateReplicationSetAction[]
            arn: string
            clientToken?: string | undefined
          }
        }
        output: UpdateReplicationSetOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/updateResponsePlan': {
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
        } & {
          json: {
            actions?: Action[] | undefined
            arn: string
            chatChannel?: { chatbotSns?: {} | undefined; empty?: {} | undefined } | undefined
            clientToken?: string | undefined
            displayName?: string | undefined
            engagements?: SsmContactsArn[] | undefined
            incidentTemplateDedupeString?: string | undefined
            incidentTemplateImpact?: number | undefined
            incidentTemplateNotificationTargets?: NotificationTargetItem[] | undefined
            incidentTemplateSummary?: string | undefined
            incidentTemplateTags?: { [x: string]: TagValue } | undefined
            incidentTemplateTitle?: string | undefined
            integrations?: Integration[] | undefined
          }
        }
        output: UpdateResponsePlanOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/updateTimelineEvent': {
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
        } & {
          json: {
            clientToken?: string | undefined
            eventData?: string | undefined
            eventId: string
            eventReferences?: EventReference[] | undefined
            eventTime?: string | undefined
            eventType?: string | undefined
            incidentRecordArn: string
          }
        }
        output: UpdateTimelineEventOutput
        outputFormat: 'json'
        status: 204
      }
    }
  },
  '/'
>
export default routes
