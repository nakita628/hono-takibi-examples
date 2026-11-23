type AssociateServiceRoleToAccountResponse = { associatedAt?: {} | undefined }
type DisassociateServiceRoleFromAccountResponse = { disassociatedAt?: {} | undefined }
type GetServiceRoleForAccountResponse = { associatedAt?: {} | undefined; roleArn?: {} | undefined }
type AssociateClientDeviceWithCoreDeviceEntry = { thingName: {} }
type BatchAssociateClientDeviceWithCoreDeviceResponse = { errorEntries?: {} | undefined }
type DisassociateClientDeviceFromCoreDeviceEntry = { thingName: {} }
type BatchDisassociateClientDeviceFromCoreDeviceResponse = { errorEntries?: {} | undefined }
type CancelDeploymentResponse = { message?: {} | undefined }
type TagValue = string
type CreateComponentVersionResponse = {
  arn?: {} | undefined
  componentName: {}
  componentVersion: {}
  creationTimestamp: {}
  status: {
    componentState?: {} | undefined
    message?: {} | undefined
    errors?: {} | undefined
    vendorGuidance?: {} | undefined
    vendorGuidanceMessage?: {} | undefined
  }
}
type ComponentDeploymentSpecification = {
  componentVersion?: {} | undefined
  configurationUpdate?: { merge?: {} | undefined; reset?: {} | undefined } | undefined
  runWith?:
    | {
        posixUser?: {} | undefined
        systemResourceLimits?: { memory?: {} | undefined; cpus?: {} | undefined } | undefined
        windowsUser?: {} | undefined
      }
    | undefined
}
type CreateDeploymentResponse = {
  deploymentId?: {} | undefined
  iotJobId?: {} | undefined
  iotJobArn?: {} | undefined
}
type ListDeploymentsResponse = { deployments?: {} | undefined; nextToken?: {} | undefined }
type GetComponentResponse = { recipeOutputFormat: {}; recipe: {}; tags?: {} | undefined }
type GetCoreDeviceResponse = {
  coreDeviceThingName?: {} | undefined
  coreVersion?: {} | undefined
  platform?: {} | undefined
  architecture?: {} | undefined
  status?: {} | undefined
  lastStatusUpdateTimestamp?: {} | undefined
  tags?: {} | undefined
}
type GetDeploymentResponse = {
  targetArn?: {} | undefined
  revisionId?: {} | undefined
  deploymentId?: {} | undefined
  deploymentName?: {} | undefined
  deploymentStatus?: {} | undefined
  iotJobId?: {} | undefined
  iotJobArn?: {} | undefined
  components?: {} | undefined
  deploymentPolicies?:
    | {
        failureHandlingPolicy?: {} | undefined
        componentUpdatePolicy?:
          | { timeoutInSeconds?: {} | undefined; action?: {} | undefined }
          | undefined
        configurationValidationPolicy?: { timeoutInSeconds?: {} | undefined } | undefined
      }
    | undefined
  iotJobConfiguration?:
    | {
        jobExecutionsRolloutConfig?:
          | {
              exponentialRate?:
                | {
                    baseRatePerMinute: {}
                    incrementFactor: {}
                    rateIncreaseCriteria: {
                      numberOfNotifiedThings?: {} | undefined
                      numberOfSucceededThings?: {} | undefined
                    }
                  }
                | undefined
              maximumPerMinute?: {} | undefined
            }
          | undefined
        abortConfig?: { criteriaList: {} } | undefined
        timeoutConfig?: { inProgressTimeoutInMinutes?: {} | undefined } | undefined
      }
    | undefined
  creationTimestamp?: {} | undefined
  isLatestForTarget?: {} | undefined
  parentTargetArn?: {} | undefined
  tags?: {} | undefined
}
type DescribeComponentResponse = {
  arn?: {} | undefined
  componentName?: {} | undefined
  componentVersion?: {} | undefined
  creationTimestamp?: {} | undefined
  publisher?: {} | undefined
  description?: {} | undefined
  status?:
    | {
        componentState?: {} | undefined
        message?: {} | undefined
        errors?: {} | undefined
        vendorGuidance?: {} | undefined
        vendorGuidanceMessage?: {} | undefined
      }
    | undefined
  platforms?: {} | undefined
  tags?: {} | undefined
}
type GetComponentVersionArtifactResponse = { preSignedUrl: {} }
type GetConnectivityInfoResponse = { connectivityInfo?: {} | undefined; message?: {} | undefined }
type ConnectivityInfo = {
  id?: {} | undefined
  hostAddress?: {} | undefined
  portNumber?: {} | undefined
  metadata?: {} | undefined
}
type UpdateConnectivityInfoResponse = { version?: {} | undefined; message?: {} | undefined }
type ListClientDevicesAssociatedWithCoreDeviceResponse = {
  associatedClientDevices?: {} | undefined
  nextToken?: {} | undefined
}
type ListComponentVersionsResponse = {
  componentVersions?: {} | undefined
  nextToken?: {} | undefined
}
type ListComponentsResponse = { components?: {} | undefined; nextToken?: {} | undefined }
type ListCoreDevicesResponse = { coreDevices?: {} | undefined; nextToken?: {} | undefined }
type ListEffectiveDeploymentsResponse = {
  effectiveDeployments?: {} | undefined
  nextToken?: {} | undefined
}
type ListInstalledComponentsResponse = {
  installedComponents?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type ComponentCandidate = {
  componentName?: {} | undefined
  componentVersion?: {} | undefined
  versionRequirements?: {} | undefined
}
type ResolveComponentCandidatesResponse = { resolvedComponentVersions?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/greengrass/servicerole': {
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { RoleArn: string } }
        output: AssociateServiceRoleToAccountResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociateServiceRoleFromAccountResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetServiceRoleForAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/coreDevices/:coreDeviceThingName/associateClientDevices': {
      $post: {
        input: { param: { coreDeviceThingName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { entries?: AssociateClientDeviceWithCoreDeviceEntry[] | undefined } }
        output: BatchAssociateClientDeviceWithCoreDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/coreDevices/:coreDeviceThingName/disassociateClientDevices': {
      $post: {
        input: { param: { coreDeviceThingName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { entries?: DisassociateClientDeviceFromCoreDeviceEntry[] | undefined } }
        output: BatchDisassociateClientDeviceFromCoreDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/deployments/:deploymentId/cancel': {
      $post: {
        input: { param: { deploymentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/createComponentVersion': {
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
            inlineRecipe?: string | undefined
            lambdaFunction?:
              | {
                  lambdaArn?: {} | undefined
                  componentName?: {} | undefined
                  componentVersion?: {} | undefined
                  componentPlatforms?: {} | undefined
                  componentDependencies?: {} | undefined
                  componentLambdaParameters?:
                    | {
                        eventSources?: {} | undefined
                        maxQueueSize?: {} | undefined
                        maxInstancesCount?: {} | undefined
                        maxIdleTimeInSeconds?: {} | undefined
                        timeoutInSeconds?: {} | undefined
                        statusTimeoutInSeconds?: {} | undefined
                        pinned?: {} | undefined
                        inputPayloadEncodingType?: {} | undefined
                        execArgs?: {} | undefined
                        environmentVariables?: {} | undefined
                        linuxProcessParams?:
                          | {
                              isolationMode?: {} | undefined
                              containerParams?:
                                | {
                                    memorySizeInKB?: {} | undefined
                                    mountROSysfs?: {} | undefined
                                    volumes?: {} | undefined
                                    devices?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            tags?: { [x: string]: TagValue } | undefined
            clientToken?: string | undefined
          }
        }
        output: CreateComponentVersionResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/greengrass/v2/deployments': {
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
            targetArn: string
            deploymentName?: string | undefined
            components?: { [x: string]: ComponentDeploymentSpecification } | undefined
            iotJobConfiguration?:
              | {
                  jobExecutionsRolloutConfig?:
                    | {
                        exponentialRate?:
                          | {
                              baseRatePerMinute: {}
                              incrementFactor: {}
                              rateIncreaseCriteria: {
                                numberOfNotifiedThings?: {} | undefined
                                numberOfSucceededThings?: {} | undefined
                              }
                            }
                          | undefined
                        maximumPerMinute?: {} | undefined
                      }
                    | undefined
                  abortConfig?: { criteriaList: {} } | undefined
                  timeoutConfig?: { inProgressTimeoutInMinutes?: {} | undefined } | undefined
                }
              | undefined
            deploymentPolicies?:
              | {
                  failureHandlingPolicy?: {} | undefined
                  componentUpdatePolicy?:
                    | { timeoutInSeconds?: {} | undefined; action?: {} | undefined }
                    | undefined
                  configurationValidationPolicy?: { timeoutInSeconds?: {} | undefined } | undefined
                }
              | undefined
            parentTargetArn?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
            clientToken?: string | undefined
          }
        }
        output: CreateDeploymentResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            targetArn?: string | undefined
            historyFilter?: 'ALL' | 'LATEST_ONLY' | undefined
            parentTargetArn?: string | undefined
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
        output: ListDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/components/:arn': {
      $delete: {
        input: { param: { arn: string } } & {
          header: {
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
      $get: {
        input: { param: { arn: string } } & {
          query: { recipeOutputFormat?: 'JSON' | 'YAML' | undefined }
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
        output: GetComponentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/coreDevices/:coreDeviceThingName': {
      $delete: {
        input: { param: { coreDeviceThingName: string } } & {
          header: {
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
      $get: {
        input: { param: { coreDeviceThingName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCoreDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/deployments/:deploymentId': {
      $delete: {
        input: { param: { deploymentId: string } } & {
          header: {
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
      $get: {
        input: { param: { deploymentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/components/:arn/metadata': {
      $get: {
        input: { param: { arn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeComponentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/components/:arn/artifacts/:artifactName': {
      $get: {
        input: { param: { arn: string; artifactName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetComponentVersionArtifactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/things/:thingName/connectivityInfo': {
      $get: {
        input: { param: { thingName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetConnectivityInfoResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { thingName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ConnectivityInfo: ConnectivityInfo[] } }
        output: UpdateConnectivityInfoResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/coreDevices/:coreDeviceThingName/associatedClientDevices': {
      $get: {
        input: { param: { coreDeviceThingName: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListClientDevicesAssociatedWithCoreDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/components/:arn/versions': {
      $get: {
        input: { param: { arn: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListComponentVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/components': {
      $get: {
        input: {
          query: {
            scope?: 'PRIVATE' | 'PUBLIC' | undefined
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
        output: ListComponentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/coreDevices': {
      $get: {
        input: {
          query: {
            thingGroupArn?: string | undefined
            status?: 'HEALTHY' | 'UNHEALTHY' | undefined
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
        output: ListCoreDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/coreDevices/:coreDeviceThingName/effectiveDeployments': {
      $get: {
        input: { param: { coreDeviceThingName: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListEffectiveDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/v2/coreDevices/:coreDeviceThingName/installedComponents': {
      $get: {
        input: { param: { coreDeviceThingName: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            topologyFilter?: 'ALL' | 'ROOT' | undefined
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
        output: ListInstalledComponentsResponse
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
        status: 200
      }
    }
  } & {
    '/greengrass/v2/resolveComponentCandidates': {
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
            platform?: { name?: {} | undefined; attributes?: {} | undefined } | undefined
            componentCandidates?: ComponentCandidate[] | undefined
          }
        }
        output: ResolveComponentCandidatesResponse
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
        status: 200
      }
    }
  },
  '/'
>
export default routes
