type CancelJobRunResponse = { id?: {} | undefined; virtualClusterId?: {} | undefined }
type ValidationException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type DescribeJobRunResponse = {
  jobRun?:
    | {
        id?: {} | undefined
        name?: {} | undefined
        virtualClusterId?: {} | undefined
        arn?: {} | undefined
        state?: {} | undefined
        clientToken?: {} | undefined
        executionRoleArn?: {} | undefined
        releaseLabel?: {} | undefined
        configurationOverrides?:
          | {
              applicationConfiguration?: {} | undefined
              monitoringConfiguration?:
                | {
                    persistentAppUI?: {} | undefined
                    cloudWatchMonitoringConfiguration?:
                      | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                      | undefined
                    s3MonitoringConfiguration?: { logUri: {} } | undefined
                  }
                | undefined
            }
          | undefined
        jobDriver?:
          | {
              sparkSubmitJobDriver?:
                | {
                    entryPoint: {}
                    entryPointArguments?: {} | undefined
                    sparkSubmitParameters?: {} | undefined
                  }
                | undefined
              sparkSqlJobDriver?:
                | { entryPoint?: {} | undefined; sparkSqlParameters?: {} | undefined }
                | undefined
            }
          | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        finishedAt?: {} | undefined
        stateDetails?: {} | undefined
        failureReason?: {} | undefined
        tags?: {} | undefined
        retryPolicyConfiguration?: { maxAttempts: {} } | undefined
        retryPolicyExecution?: { currentAttemptCount: {} } | undefined
      }
    | undefined
}
type ResourceNotFoundException = { [x: string]: unknown }
type JobDriver = {
  sparkSubmitJobDriver?:
    | {
        entryPoint: {}
        entryPointArguments?: {} | undefined
        sparkSubmitParameters?: {} | undefined
      }
    | undefined
  sparkSqlJobDriver?:
    | { entryPoint?: {} | undefined; sparkSqlParameters?: {} | undefined }
    | undefined
}
type StringEmpty256 = string
type CreateJobTemplateResponse = {
  id?: {} | undefined
  name?: {} | undefined
  arn?: {} | undefined
  createdAt?: {} | undefined
}
type ListJobTemplatesResponse = { templates?: {} | undefined; nextToken?: {} | undefined }
type CreateManagedEndpointResponse = {
  id?: {} | undefined
  name?: {} | undefined
  arn?: {} | undefined
  virtualClusterId?: {} | undefined
}
type EndpointType = string
type EndpointState = 'CREATING' | 'ACTIVE' | 'TERMINATING' | 'TERMINATED' | 'TERMINATED_WITH_ERRORS'
type ListManagedEndpointsResponse = { endpoints?: {} | undefined; nextToken?: {} | undefined }
type CreateVirtualClusterResponse = {
  id?: {} | undefined
  name?: {} | undefined
  arn?: {} | undefined
}
type VirtualClusterState = 'RUNNING' | 'TERMINATING' | 'TERMINATED' | 'ARRESTED'
type ListVirtualClustersResponse = { virtualClusters?: {} | undefined; nextToken?: {} | undefined }
type DeleteJobTemplateResponse = { id?: {} | undefined }
type DescribeJobTemplateResponse = {
  jobTemplate?:
    | {
        name?: {} | undefined
        id?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        tags?: {} | undefined
        jobTemplateData: {
          executionRoleArn: {}
          releaseLabel: {}
          configurationOverrides?:
            | {
                applicationConfiguration?: {} | undefined
                monitoringConfiguration?:
                  | {
                      persistentAppUI?: {} | undefined
                      cloudWatchMonitoringConfiguration?:
                        | { logGroupName?: {} | undefined; logStreamNamePrefix?: {} | undefined }
                        | undefined
                      s3MonitoringConfiguration?: { logUri?: {} | undefined } | undefined
                    }
                  | undefined
              }
            | undefined
          jobDriver: JobDriver
          parameterConfiguration?: {} | undefined
          jobTags?: {} | undefined
        }
        kmsKeyArn?: {} | undefined
        decryptionError?: {} | undefined
      }
    | undefined
}
type DeleteManagedEndpointResponse = { id?: {} | undefined; virtualClusterId?: {} | undefined }
type DescribeManagedEndpointResponse = {
  endpoint?:
    | {
        id?: {} | undefined
        name?: {} | undefined
        arn?: {} | undefined
        virtualClusterId?: {} | undefined
        type?: {} | undefined
        state?: {} | undefined
        releaseLabel?: {} | undefined
        executionRoleArn?: {} | undefined
        certificateArn?: {} | undefined
        certificateAuthority?:
          | { certificateArn?: {} | undefined; certificateData?: {} | undefined }
          | undefined
        configurationOverrides?:
          | {
              applicationConfiguration?: {} | undefined
              monitoringConfiguration?:
                | {
                    persistentAppUI?: {} | undefined
                    cloudWatchMonitoringConfiguration?:
                      | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                      | undefined
                    s3MonitoringConfiguration?: { logUri: {} } | undefined
                  }
                | undefined
            }
          | undefined
        serverUrl?: {} | undefined
        createdAt?: {} | undefined
        securityGroup?: {} | undefined
        subnetIds?: {} | undefined
        stateDetails?: {} | undefined
        failureReason?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type DeleteVirtualClusterResponse = { id?: {} | undefined }
type DescribeVirtualClusterResponse = {
  virtualCluster?:
    | {
        id?: {} | undefined
        name?: {} | undefined
        arn?: {} | undefined
        state?: {} | undefined
        containerProvider?:
          | {
              type: {}
              id: {}
              info?: { eksInfo?: { namespace?: {} | undefined } | undefined } | undefined
            }
          | undefined
        createdAt?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type JobRunState =
  | 'PENDING'
  | 'SUBMITTED'
  | 'RUNNING'
  | 'FAILED'
  | 'CANCELLED'
  | 'CANCEL_PENDING'
  | 'COMPLETED'
type ListJobRunsResponse = { jobRuns?: {} | undefined; nextToken?: {} | undefined }
type String1024 = string
type StartJobRunResponse = {
  id?: {} | undefined
  name?: {} | undefined
  arn?: {} | undefined
  virtualClusterId?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type String128 = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/virtualclusters/:virtualClusterId/jobruns/:jobRunId': {
      $delete:
        | {
            input: { param: { jobRunId: string; virtualClusterId: string } } & {
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
            output: CancelJobRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobRunId: string; virtualClusterId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { jobRunId: string; virtualClusterId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { jobRunId: string; virtualClusterId: string } } & {
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
            output: DescribeJobRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobRunId: string; virtualClusterId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { jobRunId: string; virtualClusterId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { jobRunId: string; virtualClusterId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/jobtemplates': {
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
                name: string
                clientToken: string
                jobTemplateData: {
                  executionRoleArn?: {} | undefined
                  releaseLabel?: {} | undefined
                  configurationOverrides?:
                    | {
                        applicationConfiguration?: {} | undefined
                        monitoringConfiguration?:
                          | {
                              persistentAppUI?: {} | undefined
                              cloudWatchMonitoringConfiguration?:
                                | {
                                    logGroupName?: {} | undefined
                                    logStreamNamePrefix?: {} | undefined
                                  }
                                | undefined
                              s3MonitoringConfiguration?: { logUri?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                  jobDriver?: JobDriver | undefined
                  parameterConfiguration?: {} | undefined
                  jobTags?: {} | undefined
                }
                tags?: { [x: string]: StringEmpty256 } | undefined
                kmsKeyArn?: string | undefined
              }
            }
            output: CreateJobTemplateResponse
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
                name: string
                clientToken: string
                jobTemplateData: {
                  executionRoleArn?: {} | undefined
                  releaseLabel?: {} | undefined
                  configurationOverrides?:
                    | {
                        applicationConfiguration?: {} | undefined
                        monitoringConfiguration?:
                          | {
                              persistentAppUI?: {} | undefined
                              cloudWatchMonitoringConfiguration?:
                                | {
                                    logGroupName?: {} | undefined
                                    logStreamNamePrefix?: {} | undefined
                                  }
                                | undefined
                              s3MonitoringConfiguration?: { logUri?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                  jobDriver?: JobDriver | undefined
                  parameterConfiguration?: {} | undefined
                  jobTags?: {} | undefined
                }
                tags?: { [x: string]: StringEmpty256 } | undefined
                kmsKeyArn?: string | undefined
              }
            }
            output: ValidationException
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
                name: string
                clientToken: string
                jobTemplateData: {
                  executionRoleArn?: {} | undefined
                  releaseLabel?: {} | undefined
                  configurationOverrides?:
                    | {
                        applicationConfiguration?: {} | undefined
                        monitoringConfiguration?:
                          | {
                              persistentAppUI?: {} | undefined
                              cloudWatchMonitoringConfiguration?:
                                | {
                                    logGroupName?: {} | undefined
                                    logStreamNamePrefix?: {} | undefined
                                  }
                                | undefined
                              s3MonitoringConfiguration?: { logUri?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                  jobDriver?: JobDriver | undefined
                  parameterConfiguration?: {} | undefined
                  jobTags?: {} | undefined
                }
                tags?: { [x: string]: StringEmpty256 } | undefined
                kmsKeyArn?: string | undefined
              }
            }
            output: ResourceNotFoundException
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
                name: string
                clientToken: string
                jobTemplateData: {
                  executionRoleArn?: {} | undefined
                  releaseLabel?: {} | undefined
                  configurationOverrides?:
                    | {
                        applicationConfiguration?: {} | undefined
                        monitoringConfiguration?:
                          | {
                              persistentAppUI?: {} | undefined
                              cloudWatchMonitoringConfiguration?:
                                | {
                                    logGroupName?: {} | undefined
                                    logStreamNamePrefix?: {} | undefined
                                  }
                                | undefined
                              s3MonitoringConfiguration?: { logUri?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                  jobDriver?: JobDriver | undefined
                  parameterConfiguration?: {} | undefined
                  jobTags?: {} | undefined
                }
                tags?: { [x: string]: StringEmpty256 } | undefined
                kmsKeyArn?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: {
                createdAfter?: string | undefined
                createdBefore?: string | undefined
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
            output: ListJobTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                createdAfter?: string | undefined
                createdBefore?: string | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                createdAfter?: string | undefined
                createdBefore?: string | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/virtualclusters/:virtualClusterId/endpoints': {
      $post:
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name: string
                type: string
                releaseLabel: string
                executionRoleArn: string
                certificateArn?: string | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: CreateManagedEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name: string
                type: string
                releaseLabel: string
                executionRoleArn: string
                certificateArn?: string | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name: string
                type: string
                releaseLabel: string
                executionRoleArn: string
                certificateArn?: string | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name: string
                type: string
                releaseLabel: string
                executionRoleArn: string
                certificateArn?: string | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { virtualClusterId: string } } & {
              query: {
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                types?: EndpointType[] | undefined
                states?: EndpointState[] | undefined
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
            output: ListManagedEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { virtualClusterId: string } } & {
              query: {
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                types?: EndpointType[] | undefined
                states?: EndpointState[] | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { virtualClusterId: string } } & {
              query: {
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                types?: EndpointType[] | undefined
                states?: EndpointState[] | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/virtualclusters': {
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
                name: string
                containerProvider: {
                  type?: {} | undefined
                  id?: {} | undefined
                  info?: { eksInfo?: { namespace?: {} | undefined } | undefined } | undefined
                }
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: CreateVirtualClusterResponse
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
                name: string
                containerProvider: {
                  type?: {} | undefined
                  id?: {} | undefined
                  info?: { eksInfo?: { namespace?: {} | undefined } | undefined } | undefined
                }
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: ValidationException
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
                name: string
                containerProvider: {
                  type?: {} | undefined
                  id?: {} | undefined
                  info?: { eksInfo?: { namespace?: {} | undefined } | undefined } | undefined
                }
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: ResourceNotFoundException
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
                name: string
                containerProvider: {
                  type?: {} | undefined
                  id?: {} | undefined
                  info?: { eksInfo?: { namespace?: {} | undefined } | undefined } | undefined
                }
                clientToken: string
                tags?: { [x: string]: StringEmpty256 } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: {
                containerProviderId?: string | undefined
                containerProviderType?: 'EKS' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                states?: VirtualClusterState[] | undefined
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
            output: ListVirtualClustersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                containerProviderId?: string | undefined
                containerProviderType?: 'EKS' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                states?: VirtualClusterState[] | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                containerProviderId?: string | undefined
                containerProviderType?: 'EKS' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                states?: VirtualClusterState[] | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/jobtemplates/:templateId': {
      $delete:
        | {
            input: { param: { templateId: string } } & {
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
            output: DeleteJobTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { templateId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { templateId: string } } & {
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
            output: DescribeJobTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { templateId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { templateId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/virtualclusters/:virtualClusterId/endpoints/:endpointId': {
      $delete:
        | {
            input: { param: { endpointId: string; virtualClusterId: string } } & {
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
            output: DeleteManagedEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointId: string; virtualClusterId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { endpointId: string; virtualClusterId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { endpointId: string; virtualClusterId: string } } & {
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
            output: DescribeManagedEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpointId: string; virtualClusterId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { endpointId: string; virtualClusterId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { endpointId: string; virtualClusterId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/virtualclusters/:virtualClusterId': {
      $delete:
        | {
            input: { param: { virtualClusterId: string } } & {
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
            output: DeleteVirtualClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { virtualClusterId: string } } & {
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
            output: DescribeVirtualClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/virtualclusters/:virtualClusterId/jobruns': {
      $get:
        | {
            input: { param: { virtualClusterId: string } } & {
              query: {
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                name?: string | undefined
                states?: JobRunState[] | undefined
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
            output: ListJobRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { virtualClusterId: string } } & {
              query: {
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                name?: string | undefined
                states?: JobRunState[] | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { virtualClusterId: string } } & {
              query: {
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                name?: string | undefined
                states?: JobRunState[] | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
      $post:
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name?: string | undefined
                clientToken: string
                executionRoleArn?: string | undefined
                releaseLabel?: string | undefined
                jobDriver?:
                  | {
                      sparkSubmitJobDriver?:
                        | {
                            entryPoint: {}
                            entryPointArguments?: {} | undefined
                            sparkSubmitParameters?: {} | undefined
                          }
                        | undefined
                      sparkSqlJobDriver?:
                        | { entryPoint?: {} | undefined; sparkSqlParameters?: {} | undefined }
                        | undefined
                    }
                  | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                tags?: { [x: string]: StringEmpty256 } | undefined
                jobTemplateId?: string | undefined
                jobTemplateParameters?: { [x: string]: String1024 } | undefined
                retryPolicyConfiguration?: { maxAttempts?: {} | undefined } | undefined
              }
            }
            output: StartJobRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name?: string | undefined
                clientToken: string
                executionRoleArn?: string | undefined
                releaseLabel?: string | undefined
                jobDriver?:
                  | {
                      sparkSubmitJobDriver?:
                        | {
                            entryPoint: {}
                            entryPointArguments?: {} | undefined
                            sparkSubmitParameters?: {} | undefined
                          }
                        | undefined
                      sparkSqlJobDriver?:
                        | { entryPoint?: {} | undefined; sparkSqlParameters?: {} | undefined }
                        | undefined
                    }
                  | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                tags?: { [x: string]: StringEmpty256 } | undefined
                jobTemplateId?: string | undefined
                jobTemplateParameters?: { [x: string]: String1024 } | undefined
                retryPolicyConfiguration?: { maxAttempts?: {} | undefined } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name?: string | undefined
                clientToken: string
                executionRoleArn?: string | undefined
                releaseLabel?: string | undefined
                jobDriver?:
                  | {
                      sparkSubmitJobDriver?:
                        | {
                            entryPoint: {}
                            entryPointArguments?: {} | undefined
                            sparkSubmitParameters?: {} | undefined
                          }
                        | undefined
                      sparkSqlJobDriver?:
                        | { entryPoint?: {} | undefined; sparkSqlParameters?: {} | undefined }
                        | undefined
                    }
                  | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                tags?: { [x: string]: StringEmpty256 } | undefined
                jobTemplateId?: string | undefined
                jobTemplateParameters?: { [x: string]: String1024 } | undefined
                retryPolicyConfiguration?: { maxAttempts?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { virtualClusterId: string } } & {
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
                name?: string | undefined
                clientToken: string
                executionRoleArn?: string | undefined
                releaseLabel?: string | undefined
                jobDriver?:
                  | {
                      sparkSubmitJobDriver?:
                        | {
                            entryPoint: {}
                            entryPointArguments?: {} | undefined
                            sparkSubmitParameters?: {} | undefined
                          }
                        | undefined
                      sparkSqlJobDriver?:
                        | { entryPoint?: {} | undefined; sparkSqlParameters?: {} | undefined }
                        | undefined
                    }
                  | undefined
                configurationOverrides?:
                  | {
                      applicationConfiguration?: {} | undefined
                      monitoringConfiguration?:
                        | {
                            persistentAppUI?: {} | undefined
                            cloudWatchMonitoringConfiguration?:
                              | { logGroupName: {}; logStreamNamePrefix?: {} | undefined }
                              | undefined
                            s3MonitoringConfiguration?: { logUri: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                tags?: { [x: string]: StringEmpty256 } | undefined
                jobTemplateId?: string | undefined
                jobTemplateParameters?: { [x: string]: String1024 } | undefined
                retryPolicyConfiguration?: { maxAttempts?: {} | undefined } | undefined
              }
            }
            output: InternalServerException
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
            output: InternalServerException
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
            output: ValidationException
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
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
            } & { json: { tags: { [x: string]: StringEmpty256 } } }
            output: TagResourceResponse
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
            } & { json: { tags: { [x: string]: StringEmpty256 } } }
            output: InternalServerException
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
            } & { json: { tags: { [x: string]: StringEmpty256 } } }
            output: ValidationException
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
            } & { json: { tags: { [x: string]: StringEmpty256 } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: String128[] } } & {
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
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: String128[] } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: String128[] } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: String128[] } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
