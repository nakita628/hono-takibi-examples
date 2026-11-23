type CancelImageCreationResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  imageBuildVersionArn?: {} | undefined
}
type ServiceException = { [x: string]: unknown }
type ClientException = { [x: string]: unknown }
type ServiceUnavailableException = { [x: string]: unknown }
type InvalidRequestException = { [x: string]: unknown }
type IdempotentParameterMismatchException = { [x: string]: unknown }
type ForbiddenException = { [x: string]: unknown }
type CallRateLimitExceededException = { [x: string]: unknown }
type ResourceInUseException = { [x: string]: unknown }
type OsVersion = string
type TagValue = string
type CreateComponentResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  componentBuildVersionArn?: {} | undefined
}
type InvalidVersionNumberException = { [x: string]: unknown }
type InvalidParameterCombinationException = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type ComponentConfiguration = { componentArn: {}; parameters?: {} | undefined }
type CreateContainerRecipeResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  containerRecipeArn?: {} | undefined
}
type ResourceAlreadyExistsException = { [x: string]: unknown }
type Distribution = {
  region: {}
  amiDistributionConfiguration?:
    | {
        name?: {} | undefined
        description?: {} | undefined
        targetAccountIds?: {} | undefined
        amiTags?: {} | undefined
        kmsKeyId?: {} | undefined
        launchPermission?:
          | {
              userIds?: {} | undefined
              userGroups?: {} | undefined
              organizationArns?: {} | undefined
              organizationalUnitArns?: {} | undefined
            }
          | undefined
      }
    | undefined
  containerDistributionConfiguration?:
    | {
        description?: {} | undefined
        containerTags?: {} | undefined
        targetRepository: { service: {}; repositoryName: {} }
      }
    | undefined
  licenseConfigurationArns?: {} | undefined
  launchTemplateConfigurations?: {} | undefined
  s3ExportConfiguration?:
    | { roleName: {}; diskImageFormat: {}; s3Bucket: {}; s3Prefix?: {} | undefined }
    | undefined
  fastLaunchConfigurations?: {} | undefined
}
type CreateDistributionConfigurationResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  distributionConfigurationArn?: {} | undefined
}
type CreateImageResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  imageBuildVersionArn?: {} | undefined
}
type CreateImagePipelineResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  imagePipelineArn?: {} | undefined
}
type InstanceBlockDeviceMapping = {
  deviceName?: {} | undefined
  ebs?:
    | {
        encrypted?: {} | undefined
        deleteOnTermination?: {} | undefined
        iops?: {} | undefined
        kmsKeyId?: {} | undefined
        snapshotId?: {} | undefined
        volumeSize?: {} | undefined
        volumeType?: {} | undefined
        throughput?: {} | undefined
      }
    | undefined
  virtualName?: {} | undefined
  noDevice?: {} | undefined
}
type CreateImageRecipeResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  imageRecipeArn?: {} | undefined
}
type InstanceType = string
type NonEmptyString = string
type CreateInfrastructureConfigurationResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  infrastructureConfigurationArn?: {} | undefined
}
type DeleteComponentResponse = {
  requestId?: {} | undefined
  componentBuildVersionArn?: {} | undefined
}
type ResourceDependencyException = { [x: string]: unknown }
type DeleteContainerRecipeResponse = {
  requestId?: {} | undefined
  containerRecipeArn?: {} | undefined
}
type DeleteDistributionConfigurationResponse = {
  requestId?: {} | undefined
  distributionConfigurationArn?: {} | undefined
}
type DeleteImageResponse = { requestId?: {} | undefined; imageBuildVersionArn?: {} | undefined }
type DeleteImagePipelineResponse = { requestId?: {} | undefined; imagePipelineArn?: {} | undefined }
type DeleteImageRecipeResponse = { requestId?: {} | undefined; imageRecipeArn?: {} | undefined }
type DeleteInfrastructureConfigurationResponse = {
  requestId?: {} | undefined
  infrastructureConfigurationArn?: {} | undefined
}
type GetComponentResponse = {
  requestId?: {} | undefined
  component?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        version?: {} | undefined
        description?: {} | undefined
        changeDescription?: {} | undefined
        type?: {} | undefined
        platform?: {} | undefined
        supportedOsVersions?: {} | undefined
        state?: { status?: {} | undefined; reason?: {} | undefined } | undefined
        parameters?: {} | undefined
        owner?: {} | undefined
        data?: {} | undefined
        kmsKeyId?: {} | undefined
        encrypted?: {} | undefined
        dateCreated?: {} | undefined
        tags?: {} | undefined
        publisher?: {} | undefined
        obfuscate?: {} | undefined
      }
    | undefined
}
type GetComponentPolicyResponse = { requestId?: {} | undefined; policy?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type GetContainerRecipeResponse = {
  requestId?: {} | undefined
  containerRecipe?:
    | {
        arn?: {} | undefined
        containerType?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        platform?: {} | undefined
        owner?: {} | undefined
        version?: {} | undefined
        components?: {} | undefined
        instanceConfiguration?:
          | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
          | undefined
        dockerfileTemplateData?: {} | undefined
        kmsKeyId?: {} | undefined
        encrypted?: {} | undefined
        parentImage?: {} | undefined
        dateCreated?: {} | undefined
        tags?: {} | undefined
        workingDirectory?: {} | undefined
        targetRepository?: { service: {}; repositoryName: {} } | undefined
      }
    | undefined
}
type GetContainerRecipePolicyResponse = { requestId?: {} | undefined; policy?: {} | undefined }
type GetDistributionConfigurationResponse = {
  requestId?: {} | undefined
  distributionConfiguration?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        distributions?: {} | undefined
        timeoutMinutes: {}
        dateCreated?: {} | undefined
        dateUpdated?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetImageResponse = {
  requestId?: {} | undefined
  image?:
    | {
        arn?: {} | undefined
        type?: {} | undefined
        name?: {} | undefined
        version?: {} | undefined
        platform?: {} | undefined
        enhancedImageMetadataEnabled?: {} | undefined
        osVersion?: {} | undefined
        state?: { status?: {} | undefined; reason?: {} | undefined } | undefined
        imageRecipe?:
          | {
              arn?: {} | undefined
              type?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
              platform?: {} | undefined
              owner?: {} | undefined
              version?: {} | undefined
              components?: {} | undefined
              parentImage?: {} | undefined
              blockDeviceMappings?: {} | undefined
              dateCreated?: {} | undefined
              tags?: {} | undefined
              workingDirectory?: {} | undefined
              additionalInstanceConfiguration?:
                | {
                    systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                    userDataOverride?: {} | undefined
                  }
                | undefined
            }
          | undefined
        containerRecipe?:
          | {
              arn?: {} | undefined
              containerType?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
              platform?: {} | undefined
              owner?: {} | undefined
              version?: {} | undefined
              components?: {} | undefined
              instanceConfiguration?:
                | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                | undefined
              dockerfileTemplateData?: {} | undefined
              kmsKeyId?: {} | undefined
              encrypted?: {} | undefined
              parentImage?: {} | undefined
              dateCreated?: {} | undefined
              tags?: {} | undefined
              workingDirectory?: {} | undefined
              targetRepository?: { service: {}; repositoryName: {} } | undefined
            }
          | undefined
        sourcePipelineName?: {} | undefined
        sourcePipelineArn?: {} | undefined
        infrastructureConfiguration?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
              instanceTypes?: {} | undefined
              instanceProfileName?: {} | undefined
              securityGroupIds?: {} | undefined
              subnetId?: {} | undefined
              logging?:
                | {
                    s3Logs?:
                      | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                      | undefined
                  }
                | undefined
              keyPair?: {} | undefined
              terminateInstanceOnFailure?: {} | undefined
              snsTopicArn?: {} | undefined
              dateCreated?: {} | undefined
              dateUpdated?: {} | undefined
              resourceTags?: {} | undefined
              instanceMetadataOptions?:
                | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                | undefined
              tags?: {} | undefined
            }
          | undefined
        distributionConfiguration?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
              distributions?: {} | undefined
              timeoutMinutes: {}
              dateCreated?: {} | undefined
              dateUpdated?: {} | undefined
              tags?: {} | undefined
            }
          | undefined
        imageTestsConfiguration?:
          | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
          | undefined
        dateCreated?: {} | undefined
        outputResources?: { amis?: {} | undefined; containers?: {} | undefined } | undefined
        tags?: {} | undefined
        buildType?: {} | undefined
        imageSource?: {} | undefined
        scanState?: { status?: {} | undefined; reason?: {} | undefined } | undefined
        imageScanningConfiguration?:
          | {
              imageScanningEnabled?: {} | undefined
              ecrConfiguration?:
                | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetImagePipelineResponse = {
  requestId?: {} | undefined
  imagePipeline?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        platform?: {} | undefined
        enhancedImageMetadataEnabled?: {} | undefined
        imageRecipeArn?: {} | undefined
        containerRecipeArn?: {} | undefined
        infrastructureConfigurationArn?: {} | undefined
        distributionConfigurationArn?: {} | undefined
        imageTestsConfiguration?:
          | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
          | undefined
        schedule?:
          | {
              scheduleExpression?: {} | undefined
              timezone?: {} | undefined
              pipelineExecutionStartCondition?: {} | undefined
            }
          | undefined
        status?: {} | undefined
        dateCreated?: {} | undefined
        dateUpdated?: {} | undefined
        dateLastRun?: {} | undefined
        dateNextRun?: {} | undefined
        tags?: {} | undefined
        imageScanningConfiguration?:
          | {
              imageScanningEnabled?: {} | undefined
              ecrConfiguration?:
                | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetImagePolicyResponse = { requestId?: {} | undefined; policy?: {} | undefined }
type GetImageRecipeResponse = {
  requestId?: {} | undefined
  imageRecipe?:
    | {
        arn?: {} | undefined
        type?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        platform?: {} | undefined
        owner?: {} | undefined
        version?: {} | undefined
        components?: {} | undefined
        parentImage?: {} | undefined
        blockDeviceMappings?: {} | undefined
        dateCreated?: {} | undefined
        tags?: {} | undefined
        workingDirectory?: {} | undefined
        additionalInstanceConfiguration?:
          | {
              systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
              userDataOverride?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetImageRecipePolicyResponse = { requestId?: {} | undefined; policy?: {} | undefined }
type GetInfrastructureConfigurationResponse = {
  requestId?: {} | undefined
  infrastructureConfiguration?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        instanceTypes?: {} | undefined
        instanceProfileName?: {} | undefined
        securityGroupIds?: {} | undefined
        subnetId?: {} | undefined
        logging?:
          | { s3Logs?: { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined } | undefined }
          | undefined
        keyPair?: {} | undefined
        terminateInstanceOnFailure?: {} | undefined
        snsTopicArn?: {} | undefined
        dateCreated?: {} | undefined
        dateUpdated?: {} | undefined
        resourceTags?: {} | undefined
        instanceMetadataOptions?:
          | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
          | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetWorkflowExecutionResponse = {
  requestId?: {} | undefined
  workflowBuildVersionArn?: {} | undefined
  workflowExecutionId?: {} | undefined
  imageBuildVersionArn?: {} | undefined
  type?: {} | undefined
  status?: {} | undefined
  message?: {} | undefined
  totalStepCount?: {} | undefined
  totalStepsSucceeded?: {} | undefined
  totalStepsFailed?: {} | undefined
  totalStepsSkipped?: {} | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
}
type GetWorkflowStepExecutionResponse = {
  requestId?: {} | undefined
  stepExecutionId?: {} | undefined
  workflowBuildVersionArn?: {} | undefined
  workflowExecutionId?: {} | undefined
  imageBuildVersionArn?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  action?: {} | undefined
  status?: {} | undefined
  rollbackStatus?: {} | undefined
  message?: {} | undefined
  inputs?: {} | undefined
  outputs?: {} | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
  onFailure?: {} | undefined
  timeoutSeconds?: {} | undefined
}
type ImportComponentResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  componentBuildVersionArn?: {} | undefined
}
type ImportVmImageResponse = {
  requestId?: {} | undefined
  imageArn?: {} | undefined
  clientToken?: {} | undefined
}
type ListComponentBuildVersionsResponse = {
  requestId?: {} | undefined
  componentSummaryList?: {} | undefined
  nextToken?: {} | undefined
}
type InvalidPaginationTokenException = { [x: string]: unknown }
type Filter = { name?: {} | undefined; values?: {} | undefined }
type ListComponentsResponse = {
  requestId?: {} | undefined
  componentVersionList?: {} | undefined
  nextToken?: {} | undefined
}
type ListContainerRecipesResponse = {
  requestId?: {} | undefined
  containerRecipeSummaryList?: {} | undefined
  nextToken?: {} | undefined
}
type ListDistributionConfigurationsResponse = {
  requestId?: {} | undefined
  distributionConfigurationSummaryList?: {} | undefined
  nextToken?: {} | undefined
}
type ListImageBuildVersionsResponse = {
  requestId?: {} | undefined
  imageSummaryList?: {} | undefined
  nextToken?: {} | undefined
}
type ListImagePackagesResponse = {
  requestId?: {} | undefined
  imagePackageList?: {} | undefined
  nextToken?: {} | undefined
}
type ListImagePipelineImagesResponse = {
  requestId?: {} | undefined
  imageSummaryList?: {} | undefined
  nextToken?: {} | undefined
}
type ListImagePipelinesResponse = {
  requestId?: {} | undefined
  imagePipelineList?: {} | undefined
  nextToken?: {} | undefined
}
type ListImageRecipesResponse = {
  requestId?: {} | undefined
  imageRecipeSummaryList?: {} | undefined
  nextToken?: {} | undefined
}
type ListImageScanFindingAggregationsResponse = {
  requestId?: {} | undefined
  aggregationType?: {} | undefined
  responses?: {} | undefined
  nextToken?: {} | undefined
}
type ImageScanFindingsFilter = { name?: {} | undefined; values?: {} | undefined }
type ListImageScanFindingsResponse = {
  requestId?: {} | undefined
  findings?: {} | undefined
  nextToken?: {} | undefined
}
type ListImagesResponse = {
  requestId?: {} | undefined
  imageVersionList?: {} | undefined
  nextToken?: {} | undefined
}
type ListInfrastructureConfigurationsResponse = {
  requestId?: {} | undefined
  infrastructureConfigurationSummaryList?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type InvalidParameterException = { [x: string]: unknown }
type TagResourceResponse = { [x: string]: unknown }
type ListWorkflowExecutionsResponse = {
  requestId?: {} | undefined
  workflowExecutions?: {} | undefined
  imageBuildVersionArn?: {} | undefined
  message?: {} | undefined
  nextToken?: {} | undefined
}
type ListWorkflowStepExecutionsResponse = {
  requestId?: {} | undefined
  steps?: {} | undefined
  workflowBuildVersionArn?: {} | undefined
  workflowExecutionId?: {} | undefined
  imageBuildVersionArn?: {} | undefined
  message?: {} | undefined
  nextToken?: {} | undefined
}
type PutComponentPolicyResponse = { requestId?: {} | undefined; componentArn?: {} | undefined }
type InvalidParameterValueException = { [x: string]: unknown }
type PutContainerRecipePolicyResponse = {
  requestId?: {} | undefined
  containerRecipeArn?: {} | undefined
}
type PutImagePolicyResponse = { requestId?: {} | undefined; imageArn?: {} | undefined }
type PutImageRecipePolicyResponse = { requestId?: {} | undefined; imageRecipeArn?: {} | undefined }
type StartImagePipelineExecutionResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  imageBuildVersionArn?: {} | undefined
}
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateDistributionConfigurationResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  distributionConfigurationArn?: {} | undefined
}
type UpdateImagePipelineResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  imagePipelineArn?: {} | undefined
}
type UpdateInfrastructureConfigurationResponse = {
  requestId?: {} | undefined
  clientToken?: {} | undefined
  infrastructureConfigurationArn?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/CancelImageCreation': {
      $put:
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: CancelImageCreationResponse
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: ServiceException
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: ClientException
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: ServiceUnavailableException
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: InvalidRequestException
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
            } & { json: { imageBuildVersionArn: string; clientToken: string } }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/CreateComponent': {
      $put:
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: CreateComponentResponse
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceException
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ClientException
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceUnavailableException
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
                name: string
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidRequestException
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
                name: string
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidVersionNumberException
            outputFormat: 'json'
            status: 487
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 488
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidParameterCombinationException
            outputFormat: 'json'
            status: 489
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                platform: 'Windows' | 'Linux'
                supportedOsVersions?: OsVersion[] | undefined
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/CreateContainerRecipe': {
      $put:
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: CreateContainerRecipeResponse
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: ServiceException
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: ClientException
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: ServiceUnavailableException
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: InvalidRequestException
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: InvalidVersionNumberException
            outputFormat: 'json'
            status: 487
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 488
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 489
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
                containerType: 'DOCKER'
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                instanceConfiguration?:
                  | { image?: {} | undefined; blockDeviceMappings?: {} | undefined }
                  | undefined
                dockerfileTemplateData?: string | undefined
                dockerfileTemplateUri?: string | undefined
                platformOverride?: 'Windows' | 'Linux' | undefined
                imageOsVersionOverride?: string | undefined
                parentImage: string
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                targetRepository: { service?: {} | undefined; repositoryName?: {} | undefined }
                kmsKeyId?: string | undefined
                clientToken: string
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/CreateDistributionConfiguration': {
      $put:
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: CreateDistributionConfigurationResponse
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceException
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ClientException
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceUnavailableException
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
                name: string
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidRequestException
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
                name: string
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 488
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidParameterCombinationException
            outputFormat: 'json'
            status: 489
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
                description?: string | undefined
                distributions: Distribution[]
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/CreateImage': {
      $put:
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: CreateImageResponse
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceException
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ClientException
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceUnavailableException
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InvalidRequestException
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
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
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                distributionConfigurationArn?: string | undefined
                infrastructureConfigurationArn: string
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/CreateImagePipeline': {
      $put:
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: CreateImagePipelineResponse
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceException
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ClientException
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceUnavailableException
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
                name: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InvalidRequestException
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
                name: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 488
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
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/CreateImageRecipe': {
      $put:
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: CreateImageRecipeResponse
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: ServiceException
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: ClientException
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: ServiceUnavailableException
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
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: InvalidRequestException
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
                name: string
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: InvalidVersionNumberException
            outputFormat: 'json'
            status: 487
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 488
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 489
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
                description?: string | undefined
                semanticVersion: string
                components: ComponentConfiguration[]
                parentImage: string
                blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                workingDirectory?: string | undefined
                additionalInstanceConfiguration?:
                  | {
                      systemsManagerAgent?: { uninstallAfterBuild?: {} | undefined } | undefined
                      userDataOverride?: {} | undefined
                    }
                  | undefined
                clientToken: string
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/CreateInfrastructureConfiguration': {
      $put:
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: CreateInfrastructureConfigurationResponse
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceException
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ClientException
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceUnavailableException
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
                name: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidRequestException
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
                name: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 488
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
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/DeleteComponent#componentBuildVersionArn': {
      $delete:
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceDependencyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/DeleteContainerRecipe#containerRecipeArn': {
      $delete:
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteContainerRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceDependencyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/DeleteDistributionConfiguration#distributionConfigurationArn': {
      $delete:
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteDistributionConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceDependencyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/DeleteImage#imageBuildVersionArn': {
      $delete:
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceDependencyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/DeleteImagePipeline#imagePipelineArn': {
      $delete:
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteImagePipelineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceDependencyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/DeleteImageRecipe#imageRecipeArn': {
      $delete:
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteImageRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceDependencyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/DeleteInfrastructureConfiguration#infrastructureConfigurationArn': {
      $delete:
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteInfrastructureConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceDependencyException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/GetComponent#componentBuildVersionArn': {
      $get:
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { componentBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetComponentPolicy#componentArn': {
      $get:
        | {
            input: { query: { componentArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetComponentPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { componentArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { componentArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { componentArn: string } } & {
              header: {
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
        | {
            input: { query: { componentArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { componentArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { componentArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetContainerRecipe#containerRecipeArn': {
      $get:
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetContainerRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetContainerRecipePolicy#containerRecipeArn': {
      $get:
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetContainerRecipePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { containerRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetDistributionConfiguration#distributionConfigurationArn': {
      $get:
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDistributionConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { distributionConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetImage#imageBuildVersionArn': {
      $get:
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imageBuildVersionArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetImagePipeline#imagePipelineArn': {
      $get:
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetImagePipelineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imagePipelineArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetImagePolicy#imageArn': {
      $get:
        | {
            input: { query: { imageArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetImagePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imageArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imageArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { imageArn: string } } & {
              header: {
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
        | {
            input: { query: { imageArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { imageArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imageArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetImageRecipe#imageRecipeArn': {
      $get:
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetImageRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetImageRecipePolicy#imageRecipeArn': {
      $get:
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetImageRecipePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { imageRecipeArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetInfrastructureConfiguration#infrastructureConfigurationArn': {
      $get:
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetInfrastructureConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { infrastructureConfigurationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetWorkflowExecution#workflowExecutionId': {
      $get:
        | {
            input: { query: { workflowExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workflowExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { workflowExecutionId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { workflowExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { workflowExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { workflowExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { workflowExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/GetWorkflowStepExecution#stepExecutionId': {
      $get:
        | {
            input: { query: { stepExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWorkflowStepExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { stepExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { stepExecutionId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { query: { stepExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { stepExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { stepExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { stepExecutionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/ImportComponent': {
      $put:
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ImportComponentResponse
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceException
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ClientException
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceUnavailableException
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
                name: string
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidRequestException
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
                name: string
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidVersionNumberException
            outputFormat: 'json'
            status: 487
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 488
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
                semanticVersion: string
                description?: string | undefined
                changeDescription?: string | undefined
                type: 'BUILD' | 'TEST'
                format: 'SHELL'
                platform: 'Windows' | 'Linux'
                data?: string | undefined
                uri?: string | undefined
                kmsKeyId?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: InvalidParameterCombinationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/ImportVmImage': {
      $put:
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
                semanticVersion: string
                description?: string | undefined
                platform: 'Windows' | 'Linux'
                osVersion?: string | undefined
                vmImportTaskId: string
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ImportVmImageResponse
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
                semanticVersion: string
                description?: string | undefined
                platform: 'Windows' | 'Linux'
                osVersion?: string | undefined
                vmImportTaskId: string
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceException
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
                semanticVersion: string
                description?: string | undefined
                platform: 'Windows' | 'Linux'
                osVersion?: string | undefined
                vmImportTaskId: string
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ClientException
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
                semanticVersion: string
                description?: string | undefined
                platform: 'Windows' | 'Linux'
                osVersion?: string | undefined
                vmImportTaskId: string
                tags?: { [x: string]: TagValue } | undefined
                clientToken: string
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ListComponentBuildVersions': {
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListComponentBuildVersionsResponse
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                componentVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListComponents': {
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListComponentsResponse
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListContainerRecipes': {
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListContainerRecipesResponse
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListDistributionConfigurations': {
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListDistributionConfigurationsResponse
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListImageBuildVersions': {
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListImageBuildVersionsResponse
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                imageVersionArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListImagePackages': {
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListImagePackagesResponse
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 486
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
                imageBuildVersionArn: string
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/ListImagePipelineImages': {
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListImagePipelineImagesResponse
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 486
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
                imagePipelineArn: string
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/ListImagePipelines': {
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListImagePipelinesResponse
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListImageRecipes': {
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListImageRecipesResponse
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListImageScanFindingAggregations': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: ListImageScanFindingAggregationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
                filter?: { name?: {} | undefined; values?: {} | undefined } | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListImageScanFindings': {
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListImageScanFindingsResponse
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                filters?: ImageScanFindingsFilter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListImages': {
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: ListImagesResponse
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: ServiceException
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                owner?: 'Self' | 'Shared' | 'Amazon' | 'ThirdParty' | undefined
                filters?: Filter[] | undefined
                byName?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                includeDeprecated?: boolean | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListInfrastructureConfigurations': {
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ListInfrastructureConfigurationsResponse
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceException
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                filters?: Filter[] | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
            output: ServiceException
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
            output: InvalidParameterException
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
            output: ServiceException
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
            output: InvalidParameterException
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
            } & { json: { tags: { [x: string]: TagValue } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ListWorkflowExecutions': {
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: ListWorkflowExecutionsResponse
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: ServiceException
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                imageBuildVersionArn: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/ListWorkflowStepExecutions': {
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: ListWorkflowStepExecutionsResponse
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: ServiceException
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: ClientException
            outputFormat: 'json'
            status: 481
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: InvalidPaginationTokenException
            outputFormat: 'json'
            status: 484
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                maxResults?: number | undefined
                nextToken?: string | undefined
                workflowExecutionId: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/PutComponentPolicy': {
      $put:
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
            } & { json: { componentArn: string; policy: string } }
            output: PutComponentPolicyResponse
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
            } & { json: { componentArn: string; policy: string } }
            output: ServiceException
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
            } & { json: { componentArn: string; policy: string } }
            output: ClientException
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
            } & { json: { componentArn: string; policy: string } }
            output: ServiceUnavailableException
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
            } & { json: { componentArn: string; policy: string } }
            output: InvalidRequestException
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
            } & { json: { componentArn: string; policy: string } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 484
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
            } & { json: { componentArn: string; policy: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
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
            } & { json: { componentArn: string; policy: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 486
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
            } & { json: { componentArn: string; policy: string } }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/PutContainerRecipePolicy': {
      $put:
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: PutContainerRecipePolicyResponse
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: ServiceException
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: ClientException
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: ServiceUnavailableException
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: InvalidRequestException
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 484
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 486
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
            } & { json: { containerRecipeArn: string; policy: string } }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/PutImagePolicy': {
      $put:
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
            } & { json: { imageArn: string; policy: string } }
            output: PutImagePolicyResponse
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
            } & { json: { imageArn: string; policy: string } }
            output: ServiceException
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
            } & { json: { imageArn: string; policy: string } }
            output: ClientException
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
            } & { json: { imageArn: string; policy: string } }
            output: ServiceUnavailableException
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
            } & { json: { imageArn: string; policy: string } }
            output: InvalidRequestException
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
            } & { json: { imageArn: string; policy: string } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 484
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
            } & { json: { imageArn: string; policy: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
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
            } & { json: { imageArn: string; policy: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 486
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
            } & { json: { imageArn: string; policy: string } }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/PutImageRecipePolicy': {
      $put:
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: PutImageRecipePolicyResponse
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: ServiceException
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: ClientException
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: ServiceUnavailableException
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: InvalidRequestException
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: InvalidParameterValueException
            outputFormat: 'json'
            status: 484
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 485
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 486
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
            } & { json: { imageRecipeArn: string; policy: string } }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/StartImagePipelineExecution': {
      $put:
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: StartImagePipelineExecutionResponse
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: ServiceException
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: ClientException
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: ServiceUnavailableException
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: InvalidRequestException
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 485
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 486
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 487
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
            } & { json: { imagePipelineArn: string; clientToken: string } }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 488
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
            output: ServiceException
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
            output: InvalidParameterException
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/UpdateDistributionConfiguration': {
      $put:
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: UpdateDistributionConfigurationResponse
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: ServiceException
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: ClientException
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: ServiceUnavailableException
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: InvalidRequestException
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
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
                distributionConfigurationArn: string
                description?: string | undefined
                distributions: Distribution[]
                clientToken: string
              }
            }
            output: InvalidParameterCombinationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/UpdateImagePipeline': {
      $put:
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UpdateImagePipelineResponse
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceException
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ClientException
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceUnavailableException
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InvalidRequestException
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                imagePipelineArn: string
                description?: string | undefined
                imageRecipeArn?: string | undefined
                containerRecipeArn?: string | undefined
                infrastructureConfigurationArn: string
                distributionConfigurationArn?: string | undefined
                imageTestsConfiguration?:
                  | { imageTestsEnabled?: {} | undefined; timeoutMinutes?: {} | undefined }
                  | undefined
                enhancedImageMetadataEnabled?: boolean | undefined
                schedule?:
                  | {
                      scheduleExpression?: {} | undefined
                      timezone?: {} | undefined
                      pipelineExecutionStartCondition?: {} | undefined
                    }
                  | undefined
                status?: 'DISABLED' | 'ENABLED' | undefined
                clientToken: string
                imageScanningConfiguration?:
                  | {
                      imageScanningEnabled?: {} | undefined
                      ecrConfiguration?:
                        | { repositoryName?: {} | undefined; containerTags?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/UpdateInfrastructureConfiguration': {
      $put:
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: UpdateInfrastructureConfigurationResponse
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: ServiceException
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: ClientException
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: ServiceUnavailableException
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: InvalidRequestException
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 484
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 485
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: CallRateLimitExceededException
            outputFormat: 'json'
            status: 486
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
                infrastructureConfigurationArn: string
                description?: string | undefined
                instanceTypes?: InstanceType[] | undefined
                instanceProfileName: string
                securityGroupIds?: NonEmptyString[] | undefined
                subnetId?: string | undefined
                logging?:
                  | {
                      s3Logs?:
                        | { s3BucketName?: {} | undefined; s3KeyPrefix?: {} | undefined }
                        | undefined
                    }
                  | undefined
                keyPair?: string | undefined
                terminateInstanceOnFailure?: boolean | undefined
                snsTopicArn?: string | undefined
                clientToken: string
                resourceTags?: { [x: string]: TagValue } | undefined
                instanceMetadataOptions?:
                  | { httpTokens?: {} | undefined; httpPutResponseHopLimit?: {} | undefined }
                  | undefined
              }
            }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 487
          }
    }
  },
  '/'
>
export default routes
