type CancelJobResponse = { [x: string]: unknown }
type ClientException = { [x: string]: unknown }
type ServerException = { [x: string]: unknown }
type TagValue = string
type CreateComputeEnvironmentResponse = {
  computeEnvironmentName?: {} | undefined
  computeEnvironmentArn?: {} | undefined
}
type ComputeEnvironmentOrder = { order: {}; computeEnvironment: {} }
type CreateJobQueueResponse = { jobQueueName: {}; jobQueueArn: {} }
type CreateSchedulingPolicyResponse = { name: {}; arn: {} }
type DeleteComputeEnvironmentResponse = { [x: string]: unknown }
type DeleteJobQueueResponse = { [x: string]: unknown }
type DeleteSchedulingPolicyResponse = { [x: string]: unknown }
type DeregisterJobDefinitionResponse = { [x: string]: unknown }
type String = string
type DescribeComputeEnvironmentsResponse = {
  computeEnvironments?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeJobDefinitionsResponse = {
  jobDefinitions?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeJobQueuesResponse = { jobQueues?: {} | undefined; nextToken?: {} | undefined }
type DescribeJobsResponse = { jobs?: {} | undefined }
type DescribeSchedulingPoliciesResponse = { schedulingPolicies?: {} | undefined }
type KeyValuesPair = { name?: {} | undefined; values?: {} | undefined }
type ListJobsResponse = { jobSummaryList: {}; nextToken?: {} | undefined }
type ListSchedulingPoliciesResponse = {
  schedulingPolicies?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type RuntimePlatform = { operatingSystemFamily?: {} | undefined; cpuArchitecture?: {} | undefined }
type PlatformCapability = 'EC2' | 'FARGATE'
type RegisterJobDefinitionResponse = { jobDefinitionName: {}; jobDefinitionArn: {}; revision: {} }
type JobDependency = { jobId?: {} | undefined; type?: {} | undefined }
type SubmitJobResponse = { jobArn?: {} | undefined; jobName: {}; jobId: {} }
type TerminateJobResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateComputeEnvironmentResponse = {
  computeEnvironmentName?: {} | undefined
  computeEnvironmentArn?: {} | undefined
}
type UpdateJobQueueResponse = { jobQueueName?: {} | undefined; jobQueueArn?: {} | undefined }
type UpdateSchedulingPolicyResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/canceljob': {
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
            } & { json: { jobId: string; reason: string } }
            output: CancelJobResponse
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
            } & { json: { jobId: string; reason: string } }
            output: ClientException
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
            } & { json: { jobId: string; reason: string } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/createcomputeenvironment': {
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
                computeEnvironmentName: string
                type: 'MANAGED' | 'UNMANAGED'
                state?: 'ENABLED' | 'DISABLED' | undefined
                unmanagedvCpus?: number | undefined
                computeResources?:
                  | {
                      type?: {} | undefined
                      allocationStrategy?: {} | undefined
                      minvCpus?: {} | undefined
                      maxvCpus?: {} | undefined
                      desiredvCpus?: {} | undefined
                      instanceTypes?: {} | undefined
                      imageId?: {} | undefined
                      subnets?: {} | undefined
                      securityGroupIds?: {} | undefined
                      ec2KeyPair?: {} | undefined
                      instanceRole?: {} | undefined
                      tags?: {} | undefined
                      placementGroup?: {} | undefined
                      bidPercentage?: {} | undefined
                      spotIamFleetRole?: {} | undefined
                      launchTemplate?:
                        | {
                            launchTemplateId?: {} | undefined
                            launchTemplateName?: {} | undefined
                            version?: {} | undefined
                          }
                        | undefined
                      ec2Configuration?: {} | undefined
                    }
                  | undefined
                serviceRole?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                eksConfiguration?:
                  | { eksClusterArn?: {} | undefined; kubernetesNamespace?: {} | undefined }
                  | undefined
              }
            }
            output: CreateComputeEnvironmentResponse
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
                computeEnvironmentName: string
                type: 'MANAGED' | 'UNMANAGED'
                state?: 'ENABLED' | 'DISABLED' | undefined
                unmanagedvCpus?: number | undefined
                computeResources?:
                  | {
                      type?: {} | undefined
                      allocationStrategy?: {} | undefined
                      minvCpus?: {} | undefined
                      maxvCpus?: {} | undefined
                      desiredvCpus?: {} | undefined
                      instanceTypes?: {} | undefined
                      imageId?: {} | undefined
                      subnets?: {} | undefined
                      securityGroupIds?: {} | undefined
                      ec2KeyPair?: {} | undefined
                      instanceRole?: {} | undefined
                      tags?: {} | undefined
                      placementGroup?: {} | undefined
                      bidPercentage?: {} | undefined
                      spotIamFleetRole?: {} | undefined
                      launchTemplate?:
                        | {
                            launchTemplateId?: {} | undefined
                            launchTemplateName?: {} | undefined
                            version?: {} | undefined
                          }
                        | undefined
                      ec2Configuration?: {} | undefined
                    }
                  | undefined
                serviceRole?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                eksConfiguration?:
                  | { eksClusterArn?: {} | undefined; kubernetesNamespace?: {} | undefined }
                  | undefined
              }
            }
            output: ClientException
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
                computeEnvironmentName: string
                type: 'MANAGED' | 'UNMANAGED'
                state?: 'ENABLED' | 'DISABLED' | undefined
                unmanagedvCpus?: number | undefined
                computeResources?:
                  | {
                      type?: {} | undefined
                      allocationStrategy?: {} | undefined
                      minvCpus?: {} | undefined
                      maxvCpus?: {} | undefined
                      desiredvCpus?: {} | undefined
                      instanceTypes?: {} | undefined
                      imageId?: {} | undefined
                      subnets?: {} | undefined
                      securityGroupIds?: {} | undefined
                      ec2KeyPair?: {} | undefined
                      instanceRole?: {} | undefined
                      tags?: {} | undefined
                      placementGroup?: {} | undefined
                      bidPercentage?: {} | undefined
                      spotIamFleetRole?: {} | undefined
                      launchTemplate?:
                        | {
                            launchTemplateId?: {} | undefined
                            launchTemplateName?: {} | undefined
                            version?: {} | undefined
                          }
                        | undefined
                      ec2Configuration?: {} | undefined
                    }
                  | undefined
                serviceRole?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                eksConfiguration?:
                  | { eksClusterArn?: {} | undefined; kubernetesNamespace?: {} | undefined }
                  | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/createjobqueue': {
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
                jobQueueName: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                schedulingPolicyArn?: string | undefined
                priority: number
                computeEnvironmentOrder: ComputeEnvironmentOrder[]
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateJobQueueResponse
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
                jobQueueName: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                schedulingPolicyArn?: string | undefined
                priority: number
                computeEnvironmentOrder: ComputeEnvironmentOrder[]
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ClientException
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
                jobQueueName: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                schedulingPolicyArn?: string | undefined
                priority: number
                computeEnvironmentOrder: ComputeEnvironmentOrder[]
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/createschedulingpolicy': {
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
                fairsharePolicy?:
                  | {
                      shareDecaySeconds?: {} | undefined
                      computeReservation?: {} | undefined
                      shareDistribution?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateSchedulingPolicyResponse
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
                fairsharePolicy?:
                  | {
                      shareDecaySeconds?: {} | undefined
                      computeReservation?: {} | undefined
                      shareDistribution?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ClientException
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
                fairsharePolicy?:
                  | {
                      shareDecaySeconds?: {} | undefined
                      computeReservation?: {} | undefined
                      shareDistribution?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/deletecomputeenvironment': {
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
            } & { json: { computeEnvironment: string } }
            output: DeleteComputeEnvironmentResponse
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
            } & { json: { computeEnvironment: string } }
            output: ClientException
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
            } & { json: { computeEnvironment: string } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/deletejobqueue': {
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
            } & { json: { jobQueue: string } }
            output: DeleteJobQueueResponse
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
            } & { json: { jobQueue: string } }
            output: ClientException
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
            } & { json: { jobQueue: string } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/deleteschedulingpolicy': {
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
            } & { json: { arn: string } }
            output: DeleteSchedulingPolicyResponse
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
            } & { json: { arn: string } }
            output: ClientException
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
            } & { json: { arn: string } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/deregisterjobdefinition': {
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
            } & { json: { jobDefinition: string } }
            output: DeregisterJobDefinitionResponse
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
            } & { json: { jobDefinition: string } }
            output: ClientException
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
            } & { json: { jobDefinition: string } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/describecomputeenvironments': {
      $post:
        | {
            input: {
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
                computeEnvironments?: String[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: DescribeComputeEnvironmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
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
                computeEnvironments?: String[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
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
                computeEnvironments?: String[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/describejobdefinitions': {
      $post:
        | {
            input: {
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
                jobDefinitions?: String[] | undefined
                maxResults?: number | undefined
                jobDefinitionName?: string | undefined
                status?: string | undefined
                nextToken?: string | undefined
              }
            }
            output: DescribeJobDefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
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
                jobDefinitions?: String[] | undefined
                maxResults?: number | undefined
                jobDefinitionName?: string | undefined
                status?: string | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
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
                jobDefinitions?: String[] | undefined
                maxResults?: number | undefined
                jobDefinitionName?: string | undefined
                status?: string | undefined
                nextToken?: string | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/describejobqueues': {
      $post:
        | {
            input: {
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
                jobQueues?: String[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: DescribeJobQueuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
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
                jobQueues?: String[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
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
                jobQueues?: String[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/describejobs': {
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
            } & { json: { jobs: String[] } }
            output: DescribeJobsResponse
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
            } & { json: { jobs: String[] } }
            output: ClientException
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
            } & { json: { jobs: String[] } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/describeschedulingpolicies': {
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
            } & { json: { arns: String[] } }
            output: DescribeSchedulingPoliciesResponse
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
            } & { json: { arns: String[] } }
            output: ClientException
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
            } & { json: { arns: String[] } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/listjobs': {
      $post:
        | {
            input: {
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
                jobQueue?: string | undefined
                arrayJobId?: string | undefined
                multiNodeJobId?: string | undefined
                jobStatus?:
                  | 'SUBMITTED'
                  | 'PENDING'
                  | 'RUNNABLE'
                  | 'STARTING'
                  | 'RUNNING'
                  | 'SUCCEEDED'
                  | 'FAILED'
                  | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                filters?: KeyValuesPair[] | undefined
              }
            }
            output: ListJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
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
                jobQueue?: string | undefined
                arrayJobId?: string | undefined
                multiNodeJobId?: string | undefined
                jobStatus?:
                  | 'SUBMITTED'
                  | 'PENDING'
                  | 'RUNNABLE'
                  | 'STARTING'
                  | 'RUNNING'
                  | 'SUCCEEDED'
                  | 'FAILED'
                  | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                filters?: KeyValuesPair[] | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
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
                jobQueue?: string | undefined
                arrayJobId?: string | undefined
                multiNodeJobId?: string | undefined
                jobStatus?:
                  | 'SUBMITTED'
                  | 'PENDING'
                  | 'RUNNABLE'
                  | 'STARTING'
                  | 'RUNNING'
                  | 'SUCCEEDED'
                  | 'FAILED'
                  | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                filters?: KeyValuesPair[] | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/listschedulingpolicies': {
      $post:
        | {
            input: {
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
            output: ListSchedulingPoliciesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
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
            output: ClientException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
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
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/tags/:resourceArn': {
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
            output: ClientException
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
            output: ServerException
            outputFormat: 'json'
            status: 481
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
            } & { json: { tags: { [x: string]: TagValue } } }
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
            } & { json: { tags: { [x: string]: TagValue } } }
            output: ClientException
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
            } & { json: { tags: { [x: string]: TagValue } } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/registerjobdefinition': {
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
                jobDefinitionName: string
                type: 'container' | 'multinode'
                parameters?: { [x: string]: String } | undefined
                schedulingPriority?: number | undefined
                containerProperties?:
                  | {
                      image?: {} | undefined
                      vcpus?: {} | undefined
                      memory?: {} | undefined
                      command?: {} | undefined
                      jobRoleArn?: {} | undefined
                      executionRoleArn?: {} | undefined
                      volumes?: {} | undefined
                      environment?: {} | undefined
                      mountPoints?: {} | undefined
                      readonlyRootFilesystem?: {} | undefined
                      privileged?: {} | undefined
                      ulimits?: {} | undefined
                      user?: {} | undefined
                      instanceType?: {} | undefined
                      resourceRequirements?: {} | undefined
                      linuxParameters?:
                        | {
                            devices?: {} | undefined
                            initProcessEnabled?: {} | undefined
                            sharedMemorySize?: {} | undefined
                            tmpfs?: {} | undefined
                            maxSwap?: {} | undefined
                            swappiness?: {} | undefined
                          }
                        | undefined
                      logConfiguration?:
                        | {
                            logDriver: {}
                            options?: {} | undefined
                            secretOptions?: {} | undefined
                          }
                        | undefined
                      secrets?: {} | undefined
                      networkConfiguration?: { assignPublicIp?: {} | undefined } | undefined
                      fargatePlatformConfiguration?:
                        | { platformVersion?: {} | undefined }
                        | undefined
                      ephemeralStorage?: { sizeInGiB: {} } | undefined
                      runtimePlatform?: RuntimePlatform | undefined
                    }
                  | undefined
                nodeProperties?:
                  | {
                      numNodes?: {} | undefined
                      mainNode?: {} | undefined
                      nodeRangeProperties?: {} | undefined
                    }
                  | undefined
                retryStrategy?:
                  | { attempts?: {} | undefined; evaluateOnExit?: {} | undefined }
                  | undefined
                propagateTags?: boolean | undefined
                timeout?: { attemptDurationSeconds?: {} | undefined } | undefined
                tags?: { [x: string]: TagValue } | undefined
                platformCapabilities?: PlatformCapability[] | undefined
                eksProperties?:
                  | {
                      podProperties?:
                        | {
                            serviceAccountName?: {} | undefined
                            hostNetwork?: {} | undefined
                            dnsPolicy?: {} | undefined
                            containers?: {} | undefined
                            volumes?: {} | undefined
                            metadata?: { labels?: {} | undefined } | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: RegisterJobDefinitionResponse
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
                jobDefinitionName: string
                type: 'container' | 'multinode'
                parameters?: { [x: string]: String } | undefined
                schedulingPriority?: number | undefined
                containerProperties?:
                  | {
                      image?: {} | undefined
                      vcpus?: {} | undefined
                      memory?: {} | undefined
                      command?: {} | undefined
                      jobRoleArn?: {} | undefined
                      executionRoleArn?: {} | undefined
                      volumes?: {} | undefined
                      environment?: {} | undefined
                      mountPoints?: {} | undefined
                      readonlyRootFilesystem?: {} | undefined
                      privileged?: {} | undefined
                      ulimits?: {} | undefined
                      user?: {} | undefined
                      instanceType?: {} | undefined
                      resourceRequirements?: {} | undefined
                      linuxParameters?:
                        | {
                            devices?: {} | undefined
                            initProcessEnabled?: {} | undefined
                            sharedMemorySize?: {} | undefined
                            tmpfs?: {} | undefined
                            maxSwap?: {} | undefined
                            swappiness?: {} | undefined
                          }
                        | undefined
                      logConfiguration?:
                        | {
                            logDriver: {}
                            options?: {} | undefined
                            secretOptions?: {} | undefined
                          }
                        | undefined
                      secrets?: {} | undefined
                      networkConfiguration?: { assignPublicIp?: {} | undefined } | undefined
                      fargatePlatformConfiguration?:
                        | { platformVersion?: {} | undefined }
                        | undefined
                      ephemeralStorage?: { sizeInGiB: {} } | undefined
                      runtimePlatform?: RuntimePlatform | undefined
                    }
                  | undefined
                nodeProperties?:
                  | {
                      numNodes?: {} | undefined
                      mainNode?: {} | undefined
                      nodeRangeProperties?: {} | undefined
                    }
                  | undefined
                retryStrategy?:
                  | { attempts?: {} | undefined; evaluateOnExit?: {} | undefined }
                  | undefined
                propagateTags?: boolean | undefined
                timeout?: { attemptDurationSeconds?: {} | undefined } | undefined
                tags?: { [x: string]: TagValue } | undefined
                platformCapabilities?: PlatformCapability[] | undefined
                eksProperties?:
                  | {
                      podProperties?:
                        | {
                            serviceAccountName?: {} | undefined
                            hostNetwork?: {} | undefined
                            dnsPolicy?: {} | undefined
                            containers?: {} | undefined
                            volumes?: {} | undefined
                            metadata?: { labels?: {} | undefined } | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ClientException
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
                jobDefinitionName: string
                type: 'container' | 'multinode'
                parameters?: { [x: string]: String } | undefined
                schedulingPriority?: number | undefined
                containerProperties?:
                  | {
                      image?: {} | undefined
                      vcpus?: {} | undefined
                      memory?: {} | undefined
                      command?: {} | undefined
                      jobRoleArn?: {} | undefined
                      executionRoleArn?: {} | undefined
                      volumes?: {} | undefined
                      environment?: {} | undefined
                      mountPoints?: {} | undefined
                      readonlyRootFilesystem?: {} | undefined
                      privileged?: {} | undefined
                      ulimits?: {} | undefined
                      user?: {} | undefined
                      instanceType?: {} | undefined
                      resourceRequirements?: {} | undefined
                      linuxParameters?:
                        | {
                            devices?: {} | undefined
                            initProcessEnabled?: {} | undefined
                            sharedMemorySize?: {} | undefined
                            tmpfs?: {} | undefined
                            maxSwap?: {} | undefined
                            swappiness?: {} | undefined
                          }
                        | undefined
                      logConfiguration?:
                        | {
                            logDriver: {}
                            options?: {} | undefined
                            secretOptions?: {} | undefined
                          }
                        | undefined
                      secrets?: {} | undefined
                      networkConfiguration?: { assignPublicIp?: {} | undefined } | undefined
                      fargatePlatformConfiguration?:
                        | { platformVersion?: {} | undefined }
                        | undefined
                      ephemeralStorage?: { sizeInGiB: {} } | undefined
                      runtimePlatform?: RuntimePlatform | undefined
                    }
                  | undefined
                nodeProperties?:
                  | {
                      numNodes?: {} | undefined
                      mainNode?: {} | undefined
                      nodeRangeProperties?: {} | undefined
                    }
                  | undefined
                retryStrategy?:
                  | { attempts?: {} | undefined; evaluateOnExit?: {} | undefined }
                  | undefined
                propagateTags?: boolean | undefined
                timeout?: { attemptDurationSeconds?: {} | undefined } | undefined
                tags?: { [x: string]: TagValue } | undefined
                platformCapabilities?: PlatformCapability[] | undefined
                eksProperties?:
                  | {
                      podProperties?:
                        | {
                            serviceAccountName?: {} | undefined
                            hostNetwork?: {} | undefined
                            dnsPolicy?: {} | undefined
                            containers?: {} | undefined
                            volumes?: {} | undefined
                            metadata?: { labels?: {} | undefined } | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/submitjob': {
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
                jobName: string
                jobQueue: string
                shareIdentifier?: string | undefined
                schedulingPriorityOverride?: number | undefined
                arrayProperties?: { size?: {} | undefined } | undefined
                dependsOn?: JobDependency[] | undefined
                jobDefinition: string
                parameters?: { [x: string]: String } | undefined
                containerOverrides?:
                  | {
                      vcpus?: {} | undefined
                      memory?: {} | undefined
                      command?: {} | undefined
                      instanceType?: {} | undefined
                      environment?: {} | undefined
                      resourceRequirements?: {} | undefined
                    }
                  | undefined
                nodeOverrides?:
                  | { numNodes?: {} | undefined; nodePropertyOverrides?: {} | undefined }
                  | undefined
                retryStrategy?:
                  | { attempts?: {} | undefined; evaluateOnExit?: {} | undefined }
                  | undefined
                propagateTags?: boolean | undefined
                timeout?: { attemptDurationSeconds?: {} | undefined } | undefined
                tags?: { [x: string]: TagValue } | undefined
                eksPropertiesOverride?:
                  | {
                      podProperties?:
                        | {
                            containers?: {} | undefined
                            metadata?: { labels?: {} | undefined } | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: SubmitJobResponse
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
                jobName: string
                jobQueue: string
                shareIdentifier?: string | undefined
                schedulingPriorityOverride?: number | undefined
                arrayProperties?: { size?: {} | undefined } | undefined
                dependsOn?: JobDependency[] | undefined
                jobDefinition: string
                parameters?: { [x: string]: String } | undefined
                containerOverrides?:
                  | {
                      vcpus?: {} | undefined
                      memory?: {} | undefined
                      command?: {} | undefined
                      instanceType?: {} | undefined
                      environment?: {} | undefined
                      resourceRequirements?: {} | undefined
                    }
                  | undefined
                nodeOverrides?:
                  | { numNodes?: {} | undefined; nodePropertyOverrides?: {} | undefined }
                  | undefined
                retryStrategy?:
                  | { attempts?: {} | undefined; evaluateOnExit?: {} | undefined }
                  | undefined
                propagateTags?: boolean | undefined
                timeout?: { attemptDurationSeconds?: {} | undefined } | undefined
                tags?: { [x: string]: TagValue } | undefined
                eksPropertiesOverride?:
                  | {
                      podProperties?:
                        | {
                            containers?: {} | undefined
                            metadata?: { labels?: {} | undefined } | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ClientException
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
                jobName: string
                jobQueue: string
                shareIdentifier?: string | undefined
                schedulingPriorityOverride?: number | undefined
                arrayProperties?: { size?: {} | undefined } | undefined
                dependsOn?: JobDependency[] | undefined
                jobDefinition: string
                parameters?: { [x: string]: String } | undefined
                containerOverrides?:
                  | {
                      vcpus?: {} | undefined
                      memory?: {} | undefined
                      command?: {} | undefined
                      instanceType?: {} | undefined
                      environment?: {} | undefined
                      resourceRequirements?: {} | undefined
                    }
                  | undefined
                nodeOverrides?:
                  | { numNodes?: {} | undefined; nodePropertyOverrides?: {} | undefined }
                  | undefined
                retryStrategy?:
                  | { attempts?: {} | undefined; evaluateOnExit?: {} | undefined }
                  | undefined
                propagateTags?: boolean | undefined
                timeout?: { attemptDurationSeconds?: {} | undefined } | undefined
                tags?: { [x: string]: TagValue } | undefined
                eksPropertiesOverride?:
                  | {
                      podProperties?:
                        | {
                            containers?: {} | undefined
                            metadata?: { labels?: {} | undefined } | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/terminatejob': {
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
            } & { json: { jobId: string; reason: string } }
            output: TerminateJobResponse
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
            } & { json: { jobId: string; reason: string } }
            output: ClientException
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
            } & { json: { jobId: string; reason: string } }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/tags/:resourceArn#tagKeys': {
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
            status: 200
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
            output: ClientException
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
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/updatecomputeenvironment': {
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
                computeEnvironment: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                unmanagedvCpus?: number | undefined
                computeResources?:
                  | {
                      minvCpus?: {} | undefined
                      maxvCpus?: {} | undefined
                      desiredvCpus?: {} | undefined
                      subnets?: {} | undefined
                      securityGroupIds?: {} | undefined
                      allocationStrategy?: {} | undefined
                      instanceTypes?: {} | undefined
                      ec2KeyPair?: {} | undefined
                      instanceRole?: {} | undefined
                      tags?: {} | undefined
                      placementGroup?: {} | undefined
                      bidPercentage?: {} | undefined
                      launchTemplate?:
                        | {
                            launchTemplateId?: {} | undefined
                            launchTemplateName?: {} | undefined
                            version?: {} | undefined
                          }
                        | undefined
                      ec2Configuration?: {} | undefined
                      updateToLatestImageVersion?: {} | undefined
                      type?: {} | undefined
                      imageId?: {} | undefined
                    }
                  | undefined
                serviceRole?: string | undefined
                updatePolicy?:
                  | {
                      terminateJobsOnUpdate?: {} | undefined
                      jobExecutionTimeoutMinutes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UpdateComputeEnvironmentResponse
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
                computeEnvironment: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                unmanagedvCpus?: number | undefined
                computeResources?:
                  | {
                      minvCpus?: {} | undefined
                      maxvCpus?: {} | undefined
                      desiredvCpus?: {} | undefined
                      subnets?: {} | undefined
                      securityGroupIds?: {} | undefined
                      allocationStrategy?: {} | undefined
                      instanceTypes?: {} | undefined
                      ec2KeyPair?: {} | undefined
                      instanceRole?: {} | undefined
                      tags?: {} | undefined
                      placementGroup?: {} | undefined
                      bidPercentage?: {} | undefined
                      launchTemplate?:
                        | {
                            launchTemplateId?: {} | undefined
                            launchTemplateName?: {} | undefined
                            version?: {} | undefined
                          }
                        | undefined
                      ec2Configuration?: {} | undefined
                      updateToLatestImageVersion?: {} | undefined
                      type?: {} | undefined
                      imageId?: {} | undefined
                    }
                  | undefined
                serviceRole?: string | undefined
                updatePolicy?:
                  | {
                      terminateJobsOnUpdate?: {} | undefined
                      jobExecutionTimeoutMinutes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ClientException
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
                computeEnvironment: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                unmanagedvCpus?: number | undefined
                computeResources?:
                  | {
                      minvCpus?: {} | undefined
                      maxvCpus?: {} | undefined
                      desiredvCpus?: {} | undefined
                      subnets?: {} | undefined
                      securityGroupIds?: {} | undefined
                      allocationStrategy?: {} | undefined
                      instanceTypes?: {} | undefined
                      ec2KeyPair?: {} | undefined
                      instanceRole?: {} | undefined
                      tags?: {} | undefined
                      placementGroup?: {} | undefined
                      bidPercentage?: {} | undefined
                      launchTemplate?:
                        | {
                            launchTemplateId?: {} | undefined
                            launchTemplateName?: {} | undefined
                            version?: {} | undefined
                          }
                        | undefined
                      ec2Configuration?: {} | undefined
                      updateToLatestImageVersion?: {} | undefined
                      type?: {} | undefined
                      imageId?: {} | undefined
                    }
                  | undefined
                serviceRole?: string | undefined
                updatePolicy?:
                  | {
                      terminateJobsOnUpdate?: {} | undefined
                      jobExecutionTimeoutMinutes?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/updatejobqueue': {
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
                jobQueue: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                schedulingPolicyArn?: string | undefined
                priority?: number | undefined
                computeEnvironmentOrder?: ComputeEnvironmentOrder[] | undefined
              }
            }
            output: UpdateJobQueueResponse
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
                jobQueue: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                schedulingPolicyArn?: string | undefined
                priority?: number | undefined
                computeEnvironmentOrder?: ComputeEnvironmentOrder[] | undefined
              }
            }
            output: ClientException
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
                jobQueue: string
                state?: 'ENABLED' | 'DISABLED' | undefined
                schedulingPolicyArn?: string | undefined
                priority?: number | undefined
                computeEnvironmentOrder?: ComputeEnvironmentOrder[] | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/v1/updateschedulingpolicy': {
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
                arn: string
                fairsharePolicy?:
                  | {
                      shareDecaySeconds?: {} | undefined
                      computeReservation?: {} | undefined
                      shareDistribution?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UpdateSchedulingPolicyResponse
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
                arn: string
                fairsharePolicy?:
                  | {
                      shareDecaySeconds?: {} | undefined
                      computeReservation?: {} | undefined
                      shareDistribution?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ClientException
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
                arn: string
                fairsharePolicy?:
                  | {
                      shareDecaySeconds?: {} | undefined
                      computeReservation?: {} | undefined
                      shareDistribution?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ServerException
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
