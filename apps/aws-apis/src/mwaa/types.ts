type CreateCliTokenResponse = { CliToken?: {} | undefined; WebServerHostname?: {} | undefined }
type ConfigValue = string
type TagValue = string
type CreateEnvironmentOutput = { Arn?: {} | undefined }
type DeleteEnvironmentOutput = { [x: string]: unknown }
type GetEnvironmentOutput = {
  Environment?:
    | {
        AirflowConfigurationOptions?: {} | undefined
        AirflowVersion?: {} | undefined
        Arn?: {} | undefined
        CreatedAt?: {} | undefined
        DagS3Path?: {} | undefined
        EnvironmentClass?: {} | undefined
        ExecutionRoleArn?: {} | undefined
        KmsKey?: {} | undefined
        LastUpdate?:
          | {
              CreatedAt?: {} | undefined
              Error?: { ErrorCode?: {} | undefined; ErrorMessage?: {} | undefined } | undefined
              Source?: {} | undefined
              Status?: {} | undefined
            }
          | undefined
        LoggingConfiguration?:
          | {
              DagProcessingLogs?:
                | {
                    CloudWatchLogGroupArn?: {} | undefined
                    Enabled?: {} | undefined
                    LogLevel?: {} | undefined
                  }
                | undefined
              SchedulerLogs?:
                | {
                    CloudWatchLogGroupArn?: {} | undefined
                    Enabled?: {} | undefined
                    LogLevel?: {} | undefined
                  }
                | undefined
              TaskLogs?:
                | {
                    CloudWatchLogGroupArn?: {} | undefined
                    Enabled?: {} | undefined
                    LogLevel?: {} | undefined
                  }
                | undefined
              WebserverLogs?:
                | {
                    CloudWatchLogGroupArn?: {} | undefined
                    Enabled?: {} | undefined
                    LogLevel?: {} | undefined
                  }
                | undefined
              WorkerLogs?:
                | {
                    CloudWatchLogGroupArn?: {} | undefined
                    Enabled?: {} | undefined
                    LogLevel?: {} | undefined
                  }
                | undefined
            }
          | undefined
        MaxWorkers?: {} | undefined
        MinWorkers?: {} | undefined
        Name?: {} | undefined
        NetworkConfiguration?:
          | { SecurityGroupIds?: {} | undefined; SubnetIds?: {} | undefined }
          | undefined
        PluginsS3ObjectVersion?: {} | undefined
        PluginsS3Path?: {} | undefined
        RequirementsS3ObjectVersion?: {} | undefined
        RequirementsS3Path?: {} | undefined
        Schedulers?: {} | undefined
        ServiceRoleArn?: {} | undefined
        SourceBucketArn?: {} | undefined
        StartupScriptS3ObjectVersion?: {} | undefined
        StartupScriptS3Path?: {} | undefined
        Status?: {} | undefined
        Tags?: {} | undefined
        WebserverAccessMode?: {} | undefined
        WebserverUrl?: {} | undefined
        WeeklyMaintenanceWindowStart?: {} | undefined
      }
    | undefined
}
type UpdateEnvironmentOutput = { Arn?: {} | undefined }
type CreateWebLoginTokenResponse = { WebServerHostname?: {} | undefined; WebToken?: {} | undefined }
type ListEnvironmentsOutput = { Environments: {}; NextToken?: {} | undefined }
type ListTagsForResourceOutput = { Tags?: {} | undefined }
type TagResourceOutput = { [x: string]: unknown }
type MetricDatum = {
  Dimensions?: {} | undefined
  MetricName: {}
  StatisticValues?:
    | {
        Maximum?: {} | undefined
        Minimum?: {} | undefined
        SampleCount?: {} | undefined
        Sum?: {} | undefined
      }
    | undefined
  Timestamp: {}
  Unit?: {} | undefined
  Value?: {} | undefined
}
type PublishMetricsOutput = { [x: string]: unknown }
type TagKey = string
type UntagResourceOutput = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/clitoken/:Name': {
      $post: {
        input: { param: { Name: string } } & {
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
        output: CreateCliTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/environments/:Name': {
      $put: {
        input: { param: { Name: string } } & {
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
            AirflowConfigurationOptions?: { [x: string]: ConfigValue } | undefined
            AirflowVersion?: string | undefined
            DagS3Path: string
            EnvironmentClass?: string | undefined
            ExecutionRoleArn: string
            KmsKey?: string | undefined
            LoggingConfiguration?:
              | {
                  DagProcessingLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  SchedulerLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  TaskLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  WebserverLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  WorkerLogs?: { Enabled: {}; LogLevel: {} } | undefined
                }
              | undefined
            MaxWorkers?: number | undefined
            MinWorkers?: number | undefined
            NetworkConfiguration: { SecurityGroupIds?: {} | undefined; SubnetIds?: {} | undefined }
            PluginsS3ObjectVersion?: string | undefined
            PluginsS3Path?: string | undefined
            RequirementsS3ObjectVersion?: string | undefined
            RequirementsS3Path?: string | undefined
            Schedulers?: number | undefined
            SourceBucketArn: string
            StartupScriptS3ObjectVersion?: string | undefined
            StartupScriptS3Path?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
            WebserverAccessMode?: 'PRIVATE_ONLY' | 'PUBLIC_ONLY' | undefined
            WeeklyMaintenanceWindowStart?: string | undefined
          }
        }
        output: CreateEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Name: string } } & {
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
        output: DeleteEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { Name: string } } & {
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
        output: GetEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { Name: string } } & {
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
            AirflowConfigurationOptions?: { [x: string]: ConfigValue } | undefined
            AirflowVersion?: string | undefined
            DagS3Path?: string | undefined
            EnvironmentClass?: string | undefined
            ExecutionRoleArn?: string | undefined
            LoggingConfiguration?:
              | {
                  DagProcessingLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  SchedulerLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  TaskLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  WebserverLogs?: { Enabled: {}; LogLevel: {} } | undefined
                  WorkerLogs?: { Enabled: {}; LogLevel: {} } | undefined
                }
              | undefined
            MaxWorkers?: number | undefined
            MinWorkers?: number | undefined
            NetworkConfiguration?: { SecurityGroupIds?: {} | undefined } | undefined
            PluginsS3ObjectVersion?: string | undefined
            PluginsS3Path?: string | undefined
            RequirementsS3ObjectVersion?: string | undefined
            RequirementsS3Path?: string | undefined
            Schedulers?: number | undefined
            SourceBucketArn?: string | undefined
            StartupScriptS3ObjectVersion?: string | undefined
            StartupScriptS3Path?: string | undefined
            WebserverAccessMode?: 'PRIVATE_ONLY' | 'PUBLIC_ONLY' | undefined
            WeeklyMaintenanceWindowStart?: string | undefined
          }
        }
        output: UpdateEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webtoken/:Name': {
      $post: {
        input: { param: { Name: string } } & {
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
        output: CreateWebLoginTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/environments': {
      $get: {
        input: { query: { MaxResults?: number | undefined; NextToken?: string | undefined } } & {
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
        output: ListEnvironmentsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn': {
      $get: {
        input: { param: { ResourceArn: string } } & {
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
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ResourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metrics/environments/:EnvironmentName': {
      $post: {
        input: { param: { EnvironmentName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MetricData: MetricDatum[] } }
        output: PublishMetricsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete: {
        input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        output: UntagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
