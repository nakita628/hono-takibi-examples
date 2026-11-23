type DeleteRecommendationPreferencesRequest = {
  resourceType: {}
  scope?: { name?: {} | undefined; value?: {} | undefined } | undefined
  recommendationPreferenceNames: {}
}
type DeleteRecommendationPreferencesResponse = { [x: string]: unknown }
type DescribeRecommendationExportJobsRequest = {
  jobIds?: {} | undefined
  filters?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeRecommendationExportJobsResponse = {
  recommendationExportJobs?: {} | undefined
  nextToken?: {} | undefined
}
type ExportAutoScalingGroupRecommendationsRequest = {
  accountIds?: {} | undefined
  filters?: {} | undefined
  fieldsToExport?: {} | undefined
  s3DestinationConfig: { bucket?: {} | undefined; keyPrefix?: {} | undefined }
  fileFormat?: {} | undefined
  includeMemberAccounts?: {} | undefined
  recommendationPreferences?: { cpuVendorArchitectures?: {} | undefined } | undefined
}
type ExportAutoScalingGroupRecommendationsResponse = {
  jobId?: {} | undefined
  s3Destination?:
    | { bucket?: {} | undefined; key?: {} | undefined; metadataKey?: {} | undefined }
    | undefined
}
type S3DestinationConfig = { bucket?: {} | undefined; keyPrefix?: {} | undefined }
type ExportEBSVolumeRecommendationsRequest = {
  accountIds?: {} | undefined
  filters?: {} | undefined
  fieldsToExport?: {} | undefined
  s3DestinationConfig: S3DestinationConfig
  fileFormat?: {} | undefined
  includeMemberAccounts?: {} | undefined
}
type S3Destination = { bucket?: {} | undefined; key?: {} | undefined; metadataKey?: {} | undefined }
type ExportEBSVolumeRecommendationsResponse = {
  jobId?: {} | undefined
  s3Destination?: S3Destination | undefined
}
type ExportEC2InstanceRecommendationsRequest = {
  accountIds?: {} | undefined
  filters?: {} | undefined
  fieldsToExport?: {} | undefined
  s3DestinationConfig: { bucket?: {} | undefined; keyPrefix?: {} | undefined }
  fileFormat?: {} | undefined
  includeMemberAccounts?: {} | undefined
  recommendationPreferences?: { cpuVendorArchitectures?: {} | undefined } | undefined
}
type ExportEC2InstanceRecommendationsResponse = {
  jobId?: {} | undefined
  s3Destination?:
    | { bucket?: {} | undefined; key?: {} | undefined; metadataKey?: {} | undefined }
    | undefined
}
type ExportECSServiceRecommendationsRequest = {
  accountIds?: {} | undefined
  filters?: {} | undefined
  fieldsToExport?: {} | undefined
  s3DestinationConfig: S3DestinationConfig
  fileFormat?: {} | undefined
  includeMemberAccounts?: {} | undefined
}
type ExportECSServiceRecommendationsResponse = {
  jobId?: {} | undefined
  s3Destination?: S3Destination | undefined
}
type ExportLambdaFunctionRecommendationsRequest = {
  accountIds?: {} | undefined
  filters?: {} | undefined
  fieldsToExport?: {} | undefined
  s3DestinationConfig: S3DestinationConfig
  fileFormat?: {} | undefined
  includeMemberAccounts?: {} | undefined
}
type ExportLambdaFunctionRecommendationsResponse = {
  jobId?: {} | undefined
  s3Destination?: S3Destination | undefined
}
type GetAutoScalingGroupRecommendationsRequest = {
  accountIds?: {} | undefined
  autoScalingGroupArns?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filters?: {} | undefined
  recommendationPreferences?: { cpuVendorArchitectures?: {} | undefined } | undefined
}
type GetAutoScalingGroupRecommendationsResponse = {
  nextToken?: {} | undefined
  autoScalingGroupRecommendations?: {} | undefined
  errors?: {} | undefined
}
type GetEBSVolumeRecommendationsRequest = {
  volumeArns?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filters?: {} | undefined
  accountIds?: {} | undefined
}
type GetEBSVolumeRecommendationsResponse = {
  nextToken?: {} | undefined
  volumeRecommendations?: {} | undefined
  errors?: {} | undefined
}
type GetEC2InstanceRecommendationsRequest = {
  instanceArns?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filters?: {} | undefined
  accountIds?: {} | undefined
  recommendationPreferences?: { cpuVendorArchitectures?: {} | undefined } | undefined
}
type GetEC2InstanceRecommendationsResponse = {
  nextToken?: {} | undefined
  instanceRecommendations?: {} | undefined
  errors?: {} | undefined
}
type GetEC2RecommendationProjectedMetricsRequest = {
  instanceArn: {}
  stat: {}
  period: {}
  startTime: {}
  endTime: {}
  recommendationPreferences?: { cpuVendorArchitectures?: {} | undefined } | undefined
}
type GetEC2RecommendationProjectedMetricsResponse = {
  recommendedOptionProjectedMetrics?: {} | undefined
}
type GetECSServiceRecommendationProjectedMetricsRequest = {
  serviceArn: {}
  stat: {}
  period: {}
  startTime: {}
  endTime: {}
}
type GetECSServiceRecommendationProjectedMetricsResponse = {
  recommendedOptionProjectedMetrics?: {} | undefined
}
type GetECSServiceRecommendationsRequest = {
  serviceArns?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filters?: {} | undefined
  accountIds?: {} | undefined
}
type GetECSServiceRecommendationsResponse = {
  nextToken?: {} | undefined
  ecsServiceRecommendations?: {} | undefined
  errors?: {} | undefined
}
type GetEffectiveRecommendationPreferencesRequest = { resourceArn: {} }
type GetEffectiveRecommendationPreferencesResponse = {
  enhancedInfrastructureMetrics?: {} | undefined
  externalMetricsPreference?: { source?: {} | undefined } | undefined
}
type GetEnrollmentStatusRequest = { [x: string]: unknown }
type GetEnrollmentStatusResponse = {
  status?: {} | undefined
  statusReason?: {} | undefined
  memberAccountsEnrolled?: {} | undefined
  lastUpdatedTimestamp?: {} | undefined
  numberOfMemberAccountsOptedIn?: {} | undefined
}
type GetEnrollmentStatusesForOrganizationRequest = {
  filters?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetEnrollmentStatusesForOrganizationResponse = {
  accountEnrollmentStatuses?: {} | undefined
  nextToken?: {} | undefined
}
type GetLambdaFunctionRecommendationsRequest = {
  functionArns?: {} | undefined
  accountIds?: {} | undefined
  filters?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetLambdaFunctionRecommendationsResponse = {
  nextToken?: {} | undefined
  lambdaFunctionRecommendations?: {} | undefined
}
type GetRecommendationPreferencesRequest = {
  resourceType: {}
  scope?: { name?: {} | undefined; value?: {} | undefined } | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetRecommendationPreferencesResponse = {
  nextToken?: {} | undefined
  recommendationPreferencesDetails?: {} | undefined
}
type GetRecommendationSummariesRequest = {
  accountIds?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetRecommendationSummariesResponse = {
  nextToken?: {} | undefined
  recommendationSummaries?: {} | undefined
}
type PutRecommendationPreferencesRequest = {
  resourceType: {}
  scope?: { name?: {} | undefined; value?: {} | undefined } | undefined
  enhancedInfrastructureMetrics?: {} | undefined
  inferredWorkloadTypes?: {} | undefined
  externalMetricsPreference?: { source?: {} | undefined } | undefined
}
type PutRecommendationPreferencesResponse = { [x: string]: unknown }
type UpdateEnrollmentStatusRequest = { status: {}; includeMemberAccounts?: {} | undefined }
type UpdateEnrollmentStatusResponse = { status?: {} | undefined; statusReason?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.DeleteRecommendationPreferences'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRecommendationPreferencesRequest }
        output: DeleteRecommendationPreferencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.DescribeRecommendationExportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRecommendationExportJobsRequest }
        output: DescribeRecommendationExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.ExportAutoScalingGroupRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportAutoScalingGroupRecommendationsRequest }
        output: ExportAutoScalingGroupRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.ExportEBSVolumeRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportEBSVolumeRecommendationsRequest }
        output: ExportEBSVolumeRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.ExportEC2InstanceRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportEC2InstanceRecommendationsRequest }
        output: ExportEC2InstanceRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.ExportECSServiceRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportECSServiceRecommendationsRequest }
        output: ExportECSServiceRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.ExportLambdaFunctionRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportLambdaFunctionRecommendationsRequest }
        output: ExportLambdaFunctionRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetAutoScalingGroupRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAutoScalingGroupRecommendationsRequest }
        output: GetAutoScalingGroupRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetEBSVolumeRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEBSVolumeRecommendationsRequest }
        output: GetEBSVolumeRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetEC2InstanceRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEC2InstanceRecommendationsRequest }
        output: GetEC2InstanceRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetEC2RecommendationProjectedMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEC2RecommendationProjectedMetricsRequest }
        output: GetEC2RecommendationProjectedMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetECSServiceRecommendationProjectedMetricsRequest }
        output: GetECSServiceRecommendationProjectedMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetECSServiceRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetECSServiceRecommendationsRequest }
        output: GetECSServiceRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetEffectiveRecommendationPreferences'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEffectiveRecommendationPreferencesRequest }
        output: GetEffectiveRecommendationPreferencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetEnrollmentStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEnrollmentStatusRequest }
        output: GetEnrollmentStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetEnrollmentStatusesForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEnrollmentStatusesForOrganizationRequest }
        output: GetEnrollmentStatusesForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetLambdaFunctionRecommendations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLambdaFunctionRecommendationsRequest }
        output: GetLambdaFunctionRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetRecommendationPreferences'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRecommendationPreferencesRequest }
        output: GetRecommendationPreferencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.GetRecommendationSummaries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRecommendationSummariesRequest }
        output: GetRecommendationSummariesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.PutRecommendationPreferences'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRecommendationPreferencesRequest }
        output: PutRecommendationPreferencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ComputeOptimizerService.UpdateEnrollmentStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEnrollmentStatusRequest }
        output: UpdateEnrollmentStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
