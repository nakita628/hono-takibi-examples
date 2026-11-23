type Channel = { eventPublishers: {}; id?: {} | undefined; uri: {} }
type AddNotificationChannelsResponse = {
  notificationConfiguration?: { channels?: {} | undefined } | undefined
}
type GetNotificationConfigurationResponse = {
  notificationConfiguration: { channels?: {} | undefined }
}
type FrameMetric = { frameName: {}; threadStates: {}; type: {} }
type BatchGetFrameMetricDataResponse = {
  endTime: {}
  endTimes: {}
  frameMetricData: {}
  resolution: {}
  startTime: {}
  unprocessedEndTimes: {}
}
type String = string
type ConfigureAgentResponse = {
  configuration: { agentParameters?: {} | undefined; periodInSeconds: {}; shouldProfile: {} }
}
type CreateProfilingGroupResponse = {
  profilingGroup: {
    agentOrchestrationConfig?: { profilingEnabled: {} } | undefined
    arn?: {} | undefined
    computePlatform?: {} | undefined
    createdAt?: {} | undefined
    name?: {} | undefined
    profilingStatus?:
      | {
          latestAgentOrchestratedAt?: {} | undefined
          latestAgentProfileReportedAt?: {} | undefined
          latestAggregatedProfile?: { period?: {} | undefined; start?: {} | undefined } | undefined
        }
      | undefined
    tags?: {} | undefined
    updatedAt?: {} | undefined
  }
}
type DeleteProfilingGroupResponse = { [x: string]: unknown }
type DescribeProfilingGroupResponse = {
  profilingGroup: {
    agentOrchestrationConfig?: { profilingEnabled: {} } | undefined
    arn?: {} | undefined
    computePlatform?: {} | undefined
    createdAt?: {} | undefined
    name?: {} | undefined
    profilingStatus?:
      | {
          latestAgentOrchestratedAt?: {} | undefined
          latestAgentProfileReportedAt?: {} | undefined
          latestAggregatedProfile?: { period?: {} | undefined; start?: {} | undefined } | undefined
        }
      | undefined
    tags?: {} | undefined
    updatedAt?: {} | undefined
  }
}
type UpdateProfilingGroupResponse = {
  profilingGroup: {
    agentOrchestrationConfig?: { profilingEnabled: {} } | undefined
    arn?: {} | undefined
    computePlatform?: {} | undefined
    createdAt?: {} | undefined
    name?: {} | undefined
    profilingStatus?:
      | {
          latestAgentOrchestratedAt?: {} | undefined
          latestAgentProfileReportedAt?: {} | undefined
          latestAggregatedProfile?: { period?: {} | undefined; start?: {} | undefined } | undefined
        }
      | undefined
    tags?: {} | undefined
    updatedAt?: {} | undefined
  }
}
type GetFindingsReportAccountSummaryResponse = { nextToken?: {} | undefined; reportSummaries: {} }
type GetPolicyResponse = { policy: {}; revisionId: {} }
type GetProfileResponse = { profile: {} }
type GetRecommendationsResponse = {
  anomalies: {}
  profileEndTime: {}
  profileStartTime: {}
  profilingGroupName: {}
  recommendations: {}
}
type ListFindingsReportsResponse = { findingsReportSummaries: {}; nextToken?: {} | undefined }
type ListProfileTimesResponse = { nextToken?: {} | undefined; profileTimes: {} }
type ListProfilingGroupsResponse = {
  nextToken?: {} | undefined
  profilingGroupNames: {}
  profilingGroups?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type PostAgentProfileResponse = { [x: string]: unknown }
type Principal = string
type PutPermissionResponse = { policy: {}; revisionId: {} }
type RemoveNotificationChannelResponse = {
  notificationConfiguration?: { channels?: {} | undefined } | undefined
}
type RemovePermissionResponse = { policy: {}; revisionId: {} }
type SubmitFeedbackResponse = { [x: string]: unknown }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/profilingGroups/:profilingGroupName/notificationConfiguration': {
      $post: {
        input: { param: { profilingGroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { channels: Channel[] } }
        output: AddNotificationChannelsResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { profilingGroupName: string } } & {
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
        output: GetNotificationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/frames/-/metrics': {
      $post: {
        input: { param: { profilingGroupName: string } } & {
          query: {
            endTime?: string | undefined
            period?: string | undefined
            startTime?: string | undefined
            targetResolution?: 'PT5M' | 'PT1H' | 'P1D' | undefined
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
        } & { json: { frameMetrics?: FrameMetric[] | undefined } }
        output: BatchGetFrameMetricDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/configureAgent': {
      $post: {
        input: { param: { profilingGroupName: string } } & {
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
            fleetInstanceId?: string | undefined
            metadata?: { [x: string]: String } | undefined
          }
        }
        output: ConfigureAgentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups#clientToken': {
      $post: {
        input: { query: { clientToken: string } } & {
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
            agentOrchestrationConfig?: { profilingEnabled?: {} | undefined } | undefined
            computePlatform?: 'Default' | 'AWSLambda' | undefined
            profilingGroupName: string
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateProfilingGroupResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName': {
      $delete: {
        input: { param: { profilingGroupName: string } } & {
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
        output: DeleteProfilingGroupResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { profilingGroupName: string } } & {
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
        output: DescribeProfilingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profilingGroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { agentOrchestrationConfig: { profilingEnabled?: {} | undefined } } }
        output: UpdateProfilingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/internal/findingsReports': {
      $get: {
        input: {
          query: {
            dailyReportsOnly?: boolean | undefined
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
        output: GetFindingsReportAccountSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/policy': {
      $get: {
        input: { param: { profilingGroupName: string } } & {
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
        output: GetPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/profile': {
      $get: {
        input: { param: { profilingGroupName: string } } & {
          query: {
            endTime?: string | undefined
            maxDepth?: number | undefined
            period?: string | undefined
            startTime?: string | undefined
          }
        } & {
          header: {
            Accept?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/internal/profilingGroups/:profilingGroupName/recommendations#endTime&startTime': {
      $get: {
        input: { param: { profilingGroupName: string } } & {
          query: { endTime: string; locale?: string | undefined; startTime: string }
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
        output: GetRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/internal/profilingGroups/:profilingGroupName/findingsReports#endTime&startTime': {
      $get: {
        input: { param: { profilingGroupName: string } } & {
          query: {
            dailyReportsOnly?: boolean | undefined
            endTime: string
            maxResults?: number | undefined
            nextToken?: string | undefined
            startTime: string
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
        output: ListFindingsReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/profileTimes#endTime&period&startTime': {
      $get: {
        input: { param: { profilingGroupName: string } } & {
          query: {
            endTime: string
            maxResults?: number | undefined
            nextToken?: string | undefined
            orderBy?: 'TimestampDescending' | 'TimestampAscending' | undefined
            period: 'PT5M' | 'PT1H' | 'P1D'
            startTime: string
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
        output: ListProfileTimesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups': {
      $get: {
        input: {
          query: {
            includeDescription?: boolean | undefined
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
        output: ListProfilingGroupsResponse
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
        } & { json: { tags: { [x: string]: String } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/agentProfile#Content-Type': {
      $post: {
        input: { param: { profilingGroupName: string } } & {
          query: { profileToken?: string | undefined }
        } & {
          header: {
            'Content-Type': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { agentProfile: string } }
        output: PostAgentProfileResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/policy/:actionGroup': {
      $put: {
        input: { param: { actionGroup: 'agentPermissions'; profilingGroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { principals: Principal[]; revisionId?: string | undefined } }
        output: PutPermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/notificationConfiguration/:channelId': {
      $delete: {
        input: { param: { channelId: string; profilingGroupName: string } } & {
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
        output: RemoveNotificationChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profilingGroups/:profilingGroupName/policy/:actionGroup#revisionId': {
      $delete: {
        input: { param: { actionGroup: 'agentPermissions'; profilingGroupName: string } } & {
          query: { revisionId: string }
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
        output: RemovePermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/internal/profilingGroups/:profilingGroupName/anomalies/:anomalyInstanceId/feedback': {
      $post: {
        input: { param: { anomalyInstanceId: string; profilingGroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { comment?: string | undefined; type: 'Positive' | 'Negative' } }
        output: SubmitFeedbackResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: String[] } } & {
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
  },
  '/'
>
export default routes
