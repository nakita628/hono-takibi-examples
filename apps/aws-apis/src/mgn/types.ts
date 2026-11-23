type Application = {
  applicationAggregatedStatus?:
    | {
        healthStatus?: {} | undefined
        lastUpdateDateTime?: {} | undefined
        progressStatus?: {} | undefined
        totalSourceServers?: {} | undefined
      }
    | undefined
  applicationID?: {} | undefined
  arn?: {} | undefined
  creationDateTime?: {} | undefined
  description?: {} | undefined
  isArchived?: {} | undefined
  lastModifiedDateTime?: {} | undefined
  name?: {} | undefined
  tags?: {} | undefined
  waveID?: {} | undefined
}
type Wave = {
  arn?: {} | undefined
  creationDateTime?: {} | undefined
  description?: {} | undefined
  isArchived?: {} | undefined
  lastModifiedDateTime?: {} | undefined
  name?: {} | undefined
  tags?: {} | undefined
  waveAggregatedStatus?:
    | {
        healthStatus?: {} | undefined
        lastUpdateDateTime?: {} | undefined
        progressStatus?: {} | undefined
        replicationStartedDateTime?: {} | undefined
        totalApplications?: {} | undefined
      }
    | undefined
  waveID?: {} | undefined
}
type ApplicationID = string
type AssociateApplicationsResponse = { [x: string]: unknown }
type SourceServerID = string
type AssociateSourceServersResponse = { [x: string]: unknown }
type SourceServer = {
  applicationID?: {} | undefined
  arn?: {} | undefined
  dataReplicationInfo?:
    | {
        dataReplicationError?: { error?: {} | undefined; rawError?: {} | undefined } | undefined
        dataReplicationInitiation?:
          | {
              nextAttemptDateTime?: {} | undefined
              startDateTime?: {} | undefined
              steps?: {} | undefined
            }
          | undefined
        dataReplicationState?: {} | undefined
        etaDateTime?: {} | undefined
        lagDuration?: {} | undefined
        lastSnapshotDateTime?: {} | undefined
        replicatedDisks?: {} | undefined
      }
    | undefined
  fqdnForActionFramework?: {} | undefined
  isArchived?: {} | undefined
  launchedInstance?:
    | { ec2InstanceID?: {} | undefined; firstBoot?: {} | undefined; jobID?: {} | undefined }
    | undefined
  lifeCycle?:
    | {
        addedToServiceDateTime?: {} | undefined
        elapsedReplicationDuration?: {} | undefined
        firstByteDateTime?: {} | undefined
        lastCutover?:
          | {
              finalized?: { apiCallDateTime?: {} | undefined } | undefined
              initiated?: { apiCallDateTime?: {} | undefined; jobID?: {} | undefined } | undefined
              reverted?: { apiCallDateTime?: {} | undefined } | undefined
            }
          | undefined
        lastSeenByServiceDateTime?: {} | undefined
        lastTest?:
          | {
              finalized?: { apiCallDateTime?: {} | undefined } | undefined
              initiated?: { apiCallDateTime?: {} | undefined; jobID?: {} | undefined } | undefined
              reverted?: { apiCallDateTime?: {} | undefined } | undefined
            }
          | undefined
        state?: {} | undefined
      }
    | undefined
  replicationType?: {} | undefined
  sourceProperties?:
    | {
        cpus?: {} | undefined
        disks?: {} | undefined
        identificationHints?:
          | {
              awsInstanceID?: {} | undefined
              fqdn?: {} | undefined
              hostname?: {} | undefined
              vmPath?: {} | undefined
              vmWareUuid?: {} | undefined
            }
          | undefined
        lastUpdatedDateTime?: {} | undefined
        networkInterfaces?: {} | undefined
        os?: { fullString?: {} | undefined } | undefined
        ramBytes?: {} | undefined
        recommendedInstanceType?: {} | undefined
      }
    | undefined
  sourceServerID?: {} | undefined
  tags?: {} | undefined
  userProvidedID?: {} | undefined
  vcenterClientID?: {} | undefined
}
type TagValue = string
type Licensing = { osByol?: {} | undefined }
type LaunchConfigurationTemplate = {
  arn?: {} | undefined
  associatePublicIpAddress?: {} | undefined
  bootMode?: {} | undefined
  copyPrivateIp?: {} | undefined
  copyTags?: {} | undefined
  ec2LaunchTemplateID?: {} | undefined
  enableMapAutoTagging?: {} | undefined
  largeVolumeConf?:
    | { iops?: {} | undefined; throughput?: {} | undefined; volumeType?: {} | undefined }
    | undefined
  launchConfigurationTemplateID: {}
  launchDisposition?: {} | undefined
  licensing?: Licensing | undefined
  mapAutoTaggingMpeID?: {} | undefined
  postLaunchActions?:
    | {
        cloudWatchLogGroupName?: {} | undefined
        deployment?: {} | undefined
        s3LogBucket?: {} | undefined
        s3OutputKeyPrefix?: {} | undefined
        ssmDocuments?: {} | undefined
      }
    | undefined
  smallVolumeConf?:
    | { iops?: {} | undefined; throughput?: {} | undefined; volumeType?: {} | undefined }
    | undefined
  smallVolumeMaxSize?: {} | undefined
  tags?: {} | undefined
  targetInstanceTypeRightSizingMethod?: {} | undefined
}
type SecurityGroupID = string
type ReplicationConfigurationTemplate = {
  arn?: {} | undefined
  associateDefaultSecurityGroup?: {} | undefined
  bandwidthThrottling?: {} | undefined
  createPublicIP?: {} | undefined
  dataPlaneRouting?: {} | undefined
  defaultLargeStagingDiskType?: {} | undefined
  ebsEncryption?: {} | undefined
  ebsEncryptionKeyArn?: {} | undefined
  replicationConfigurationTemplateID: {}
  replicationServerInstanceType?: {} | undefined
  replicationServersSecurityGroupsIDs?: {} | undefined
  stagingAreaSubnetId?: {} | undefined
  stagingAreaTags?: {} | undefined
  tags?: {} | undefined
  useDedicatedReplicationServer?: {} | undefined
}
type DeleteApplicationResponse = { [x: string]: unknown }
type DeleteJobResponse = { [x: string]: unknown }
type DeleteLaunchConfigurationTemplateResponse = { [x: string]: unknown }
type DeleteReplicationConfigurationTemplateResponse = { [x: string]: unknown }
type DeleteSourceServerResponse = { [x: string]: unknown }
type DeleteWaveResponse = { [x: string]: unknown }
type DescribeJobLogItemsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type DescribeJobsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type LaunchConfigurationTemplateID = string
type DescribeLaunchConfigurationTemplatesResponse = {
  items?: {} | undefined
  nextToken?: {} | undefined
}
type ReplicationConfigurationTemplateID = string
type DescribeReplicationConfigurationTemplatesResponse = {
  items?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeSourceServersResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type DescribeVcenterClientsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type DisassociateApplicationsResponse = { [x: string]: unknown }
type DisassociateSourceServersResponse = { [x: string]: unknown }
type PostLaunchActions = {
  cloudWatchLogGroupName?: {} | undefined
  deployment?: {} | undefined
  s3LogBucket?: {} | undefined
  s3OutputKeyPrefix?: {} | undefined
  ssmDocuments?: {} | undefined
}
type LaunchConfiguration = {
  bootMode?: {} | undefined
  copyPrivateIp?: {} | undefined
  copyTags?: {} | undefined
  ec2LaunchTemplateID?: {} | undefined
  enableMapAutoTagging?: {} | undefined
  launchDisposition?: {} | undefined
  licensing?: { osByol?: {} | undefined } | undefined
  mapAutoTaggingMpeID?: {} | undefined
  name?: {} | undefined
  postLaunchActions?: PostLaunchActions | undefined
  sourceServerID?: {} | undefined
  targetInstanceTypeRightSizingMethod?: {} | undefined
}
type ReplicationConfiguration = {
  associateDefaultSecurityGroup?: {} | undefined
  bandwidthThrottling?: {} | undefined
  createPublicIP?: {} | undefined
  dataPlaneRouting?: {} | undefined
  defaultLargeStagingDiskType?: {} | undefined
  ebsEncryption?: {} | undefined
  ebsEncryptionKeyArn?: {} | undefined
  name?: {} | undefined
  replicatedDisks?: {} | undefined
  replicationServerInstanceType?: {} | undefined
  replicationServersSecurityGroupsIDs?: {} | undefined
  sourceServerID?: {} | undefined
  stagingAreaSubnetId?: {} | undefined
  stagingAreaTags?: {} | undefined
  useDedicatedReplicationServer?: {} | undefined
}
type InitializeServiceResponse = { [x: string]: unknown }
type ListApplicationsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListExportErrorsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListExportsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListImportErrorsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListImportsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListSourceServerActionsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type ListTemplateActionsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListWavesResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type SsmExternalParameter = { dynamicPath?: {} | undefined }
type SsmParameterStoreParameter = { parameterName: {}; parameterType: {} }
type SsmParameterStoreParameters = SsmParameterStoreParameter[]
type SourceServerActionDocument = {
  actionID?: {} | undefined
  actionName?: {} | undefined
  active?: {} | undefined
  category?: {} | undefined
  description?: {} | undefined
  documentIdentifier?: {} | undefined
  documentVersion?: {} | undefined
  externalParameters?: {} | undefined
  mustSucceedForCutover?: {} | undefined
  order?: {} | undefined
  parameters?: {} | undefined
  timeoutSeconds?: {} | undefined
}
type TemplateActionDocument = {
  actionID?: {} | undefined
  actionName?: {} | undefined
  active?: {} | undefined
  category?: {} | undefined
  description?: {} | undefined
  documentIdentifier?: {} | undefined
  documentVersion?: {} | undefined
  externalParameters?: {} | undefined
  mustSucceedForCutover?: {} | undefined
  operatingSystem?: {} | undefined
  order?: {} | undefined
  parameters?: {} | undefined
  timeoutSeconds?: {} | undefined
}
type RemoveSourceServerActionResponse = { [x: string]: unknown }
type RemoveTemplateActionResponse = { [x: string]: unknown }
type StartCutoverResponse = {
  job?:
    | {
        arn?: {} | undefined
        creationDateTime?: {} | undefined
        endDateTime?: {} | undefined
        initiatedBy?: {} | undefined
        jobID: {}
        participatingServers?: {} | undefined
        status?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
      }
    | undefined
}
type StartExportResponse = {
  exportTask?:
    | {
        creationDateTime?: {} | undefined
        endDateTime?: {} | undefined
        exportID?: {} | undefined
        progressPercentage?: {} | undefined
        s3Bucket?: {} | undefined
        s3BucketOwner?: {} | undefined
        s3Key?: {} | undefined
        status?: {} | undefined
        summary?:
          | {
              applicationsCount?: {} | undefined
              serversCount?: {} | undefined
              wavesCount?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type StartImportResponse = {
  importTask?:
    | {
        creationDateTime?: {} | undefined
        endDateTime?: {} | undefined
        importID?: {} | undefined
        progressPercentage?: {} | undefined
        s3BucketSource?: { s3Bucket: {}; s3BucketOwner?: {} | undefined; s3Key: {} } | undefined
        status?: {} | undefined
        summary?:
          | {
              applications?:
                | { createdCount?: {} | undefined; modifiedCount?: {} | undefined }
                | undefined
              servers?:
                | { createdCount?: {} | undefined; modifiedCount?: {} | undefined }
                | undefined
              waves?: { createdCount?: {} | undefined; modifiedCount?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type StartTestResponse = {
  job?:
    | {
        arn?: {} | undefined
        creationDateTime?: {} | undefined
        endDateTime?: {} | undefined
        initiatedBy?: {} | undefined
        jobID: {}
        participatingServers?: {} | undefined
        status?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
      }
    | undefined
}
type TerminateTargetInstancesResponse = {
  job?:
    | {
        arn?: {} | undefined
        creationDateTime?: {} | undefined
        endDateTime?: {} | undefined
        initiatedBy?: {} | undefined
        jobID: {}
        participatingServers?: {} | undefined
        status?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
      }
    | undefined
}
type TagKey = string
type ReplicationConfigurationReplicatedDisk = {
  deviceName?: {} | undefined
  iops?: {} | undefined
  isBootDisk?: {} | undefined
  stagingDiskType?: {} | undefined
  throughput?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ArchiveApplication': {
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
        } & { json: { applicationID: string } }
        output: Application
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ArchiveWave': {
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
        } & { json: { waveID: string } }
        output: Wave
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/AssociateApplications': {
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
        } & { json: { applicationIDs: ApplicationID[]; waveID: string } }
        output: AssociateApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/AssociateSourceServers': {
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
        } & { json: { applicationID: string; sourceServerIDs: SourceServerID[] } }
        output: AssociateSourceServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ChangeServerLifeCycleState': {
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
        } & { json: { lifeCycle: { state?: {} | undefined }; sourceServerID: string } }
        output: SourceServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateApplication': {
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
            description?: string | undefined
            name: string
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: Application
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/CreateLaunchConfigurationTemplate': {
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
            associatePublicIpAddress?: boolean | undefined
            bootMode?: 'LEGACY_BIOS' | 'UEFI' | undefined
            copyPrivateIp?: boolean | undefined
            copyTags?: boolean | undefined
            enableMapAutoTagging?: boolean | undefined
            largeVolumeConf?:
              | { iops?: {} | undefined; throughput?: {} | undefined; volumeType?: {} | undefined }
              | undefined
            launchDisposition?: 'STOPPED' | 'STARTED' | undefined
            licensing?: { osByol?: {} | undefined } | undefined
            mapAutoTaggingMpeID?: string | undefined
            postLaunchActions?:
              | {
                  cloudWatchLogGroupName?: {} | undefined
                  deployment?: {} | undefined
                  s3LogBucket?: {} | undefined
                  s3OutputKeyPrefix?: {} | undefined
                  ssmDocuments?: {} | undefined
                }
              | undefined
            smallVolumeConf?:
              | { iops?: {} | undefined; throughput?: {} | undefined; volumeType?: {} | undefined }
              | undefined
            smallVolumeMaxSize?: number | undefined
            tags?: { [x: string]: TagValue } | undefined
            targetInstanceTypeRightSizingMethod?: 'NONE' | 'BASIC' | undefined
          }
        }
        output: LaunchConfigurationTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/CreateReplicationConfigurationTemplate': {
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
            associateDefaultSecurityGroup: boolean
            bandwidthThrottling: number
            createPublicIP: boolean
            dataPlaneRouting: 'PRIVATE_IP' | 'PUBLIC_IP'
            defaultLargeStagingDiskType: 'GP2' | 'ST1' | 'GP3'
            ebsEncryption: 'DEFAULT' | 'CUSTOM'
            ebsEncryptionKeyArn?: string | undefined
            replicationServerInstanceType: string
            replicationServersSecurityGroupsIDs: SecurityGroupID[]
            stagingAreaSubnetId: string
            stagingAreaTags: { [x: string]: TagValue }
            tags?: { [x: string]: TagValue } | undefined
            useDedicatedReplicationServer: boolean
          }
        }
        output: ReplicationConfigurationTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/CreateWave': {
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
            description?: string | undefined
            name: string
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: Wave
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/DeleteApplication': {
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
        } & { json: { applicationID: string } }
        output: DeleteApplicationResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/DeleteJob': {
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
        } & { json: { jobID: string } }
        output: DeleteJobResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/DeleteLaunchConfigurationTemplate': {
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
        } & { json: { launchConfigurationTemplateID: string } }
        output: DeleteLaunchConfigurationTemplateResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/DeleteReplicationConfigurationTemplate': {
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
        } & { json: { replicationConfigurationTemplateID: string } }
        output: DeleteReplicationConfigurationTemplateResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/DeleteSourceServer': {
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
        } & { json: { sourceServerID: string } }
        output: DeleteSourceServerResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/DeleteVcenterClient': {
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
        } & { json: { vcenterClientID: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/DeleteWave': {
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
        } & { json: { waveID: string } }
        output: DeleteWaveResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/DescribeJobLogItems': {
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
          json: { jobID: string; maxResults?: number | undefined; nextToken?: string | undefined }
        }
        output: DescribeJobLogItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeJobs': {
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
            filters?:
              | { fromDate?: {} | undefined; jobIDs?: {} | undefined; toDate?: {} | undefined }
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: DescribeJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeLaunchConfigurationTemplates': {
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
            launchConfigurationTemplateIDs?: LaunchConfigurationTemplateID[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: DescribeLaunchConfigurationTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeReplicationConfigurationTemplates': {
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
            maxResults?: number | undefined
            nextToken?: string | undefined
            replicationConfigurationTemplateIDs?: ReplicationConfigurationTemplateID[] | undefined
          }
        }
        output: DescribeReplicationConfigurationTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeSourceServers': {
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
            filters?:
              | {
                  applicationIDs?: {} | undefined
                  isArchived?: {} | undefined
                  lifeCycleStates?: {} | undefined
                  replicationTypes?: {} | undefined
                  sourceServerIDs?: {} | undefined
                }
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: DescribeSourceServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeVcenterClients': {
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeVcenterClientsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DisassociateApplications': {
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
        } & { json: { applicationIDs: ApplicationID[]; waveID: string } }
        output: DisassociateApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DisassociateSourceServers': {
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
        } & { json: { applicationID: string; sourceServerIDs: SourceServerID[] } }
        output: DisassociateSourceServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DisconnectFromService': {
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
        } & { json: { sourceServerID: string } }
        output: SourceServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/FinalizeCutover': {
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
        } & { json: { sourceServerID: string } }
        output: SourceServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetLaunchConfiguration': {
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
        } & { json: { sourceServerID: string } }
        output: LaunchConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetReplicationConfiguration': {
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
        } & { json: { sourceServerID: string } }
        output: ReplicationConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/InitializeService': {
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
        }
        output: InitializeServiceResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/ListApplications': {
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
            filters?:
              | {
                  applicationIDs?: {} | undefined
                  isArchived?: {} | undefined
                  waveIDs?: {} | undefined
                }
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListExportErrors': {
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
            exportID: string
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListExportErrorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListExports': {
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
            filters?: { exportIDs?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListExportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListImportErrors': {
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
            importID: string
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListImportErrorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListImports': {
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
            filters?: { importIDs?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListImportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListSourceServerActions': {
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
            filters?: { actionIDs?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            sourceServerID: string
          }
        }
        output: ListSourceServerActionsResponse
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ListTemplateActions': {
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
            filters?: { actionIDs?: {} | undefined } | undefined
            launchConfigurationTemplateID: string
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListTemplateActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListWaves': {
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
            filters?: { isArchived?: {} | undefined; waveIDs?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListWavesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/MarkAsArchived': {
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
        } & { json: { sourceServerID: string } }
        output: SourceServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PutSourceServerAction': {
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
            actionID: string
            actionName: string
            active?: boolean | undefined
            category?:
              | 'DISASTER_RECOVERY'
              | 'OPERATING_SYSTEM'
              | 'LICENSE_AND_SUBSCRIPTION'
              | 'VALIDATION'
              | 'OBSERVABILITY'
              | 'SECURITY'
              | 'NETWORKING'
              | 'CONFIGURATION'
              | 'BACKUP'
              | 'OTHER'
              | undefined
            description?: string | undefined
            documentIdentifier: string
            documentVersion?: string | undefined
            externalParameters?: { [x: string]: SsmExternalParameter } | undefined
            mustSucceedForCutover?: boolean | undefined
            order: number
            parameters?: { [x: string]: SsmParameterStoreParameters } | undefined
            sourceServerID: string
            timeoutSeconds?: number | undefined
          }
        }
        output: SourceServerActionDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PutTemplateAction': {
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
            actionID: string
            actionName: string
            active?: boolean | undefined
            category?:
              | 'DISASTER_RECOVERY'
              | 'OPERATING_SYSTEM'
              | 'LICENSE_AND_SUBSCRIPTION'
              | 'VALIDATION'
              | 'OBSERVABILITY'
              | 'SECURITY'
              | 'NETWORKING'
              | 'CONFIGURATION'
              | 'BACKUP'
              | 'OTHER'
              | undefined
            description?: string | undefined
            documentIdentifier: string
            documentVersion?: string | undefined
            externalParameters?: { [x: string]: SsmExternalParameter } | undefined
            launchConfigurationTemplateID: string
            mustSucceedForCutover?: boolean | undefined
            operatingSystem?: string | undefined
            order: number
            parameters?: { [x: string]: SsmParameterStoreParameters } | undefined
            timeoutSeconds?: number | undefined
          }
        }
        output: TemplateActionDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/RemoveSourceServerAction': {
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
        } & { json: { actionID: string; sourceServerID: string } }
        output: RemoveSourceServerActionResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/RemoveTemplateAction': {
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
        } & { json: { actionID: string; launchConfigurationTemplateID: string } }
        output: RemoveTemplateActionResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/RetryDataReplication': {
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
        } & { json: { sourceServerID: string } }
        output: SourceServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StartCutover': {
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
          json: { sourceServerIDs: SourceServerID[]; tags?: { [x: string]: TagValue } | undefined }
        }
        output: StartCutoverResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/StartExport': {
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
        } & { json: { s3Bucket: string; s3BucketOwner?: string | undefined; s3Key: string } }
        output: StartExportResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/StartImport': {
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
            s3BucketSource: {
              s3Bucket?: {} | undefined
              s3BucketOwner?: {} | undefined
              s3Key?: {} | undefined
            }
          }
        }
        output: StartImportResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/StartReplication': {
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
        } & { json: { sourceServerID: string } }
        output: SourceServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StartTest': {
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
          json: { sourceServerIDs: SourceServerID[]; tags?: { [x: string]: TagValue } | undefined }
        }
        output: StartTestResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/TerminateTargetInstances': {
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
          json: { sourceServerIDs: SourceServerID[]; tags?: { [x: string]: TagValue } | undefined }
        }
        output: TerminateTargetInstancesResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/UnarchiveApplication': {
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
        } & { json: { applicationID: string } }
        output: Application
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UnarchiveWave': {
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
        } & { json: { waveID: string } }
        output: Wave
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/UpdateApplication': {
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
            applicationID: string
            description?: string | undefined
            name?: string | undefined
          }
        }
        output: Application
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateLaunchConfiguration': {
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
            bootMode?: 'LEGACY_BIOS' | 'UEFI' | undefined
            copyPrivateIp?: boolean | undefined
            copyTags?: boolean | undefined
            enableMapAutoTagging?: boolean | undefined
            launchDisposition?: 'STOPPED' | 'STARTED' | undefined
            licensing?: { osByol?: {} | undefined } | undefined
            mapAutoTaggingMpeID?: string | undefined
            name?: string | undefined
            postLaunchActions?:
              | {
                  cloudWatchLogGroupName?: {} | undefined
                  deployment?: {} | undefined
                  s3LogBucket?: {} | undefined
                  s3OutputKeyPrefix?: {} | undefined
                  ssmDocuments?: {} | undefined
                }
              | undefined
            sourceServerID: string
            targetInstanceTypeRightSizingMethod?: 'NONE' | 'BASIC' | undefined
          }
        }
        output: LaunchConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateLaunchConfigurationTemplate': {
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
            associatePublicIpAddress?: boolean | undefined
            bootMode?: 'LEGACY_BIOS' | 'UEFI' | undefined
            copyPrivateIp?: boolean | undefined
            copyTags?: boolean | undefined
            enableMapAutoTagging?: boolean | undefined
            largeVolumeConf?:
              | { iops?: {} | undefined; throughput?: {} | undefined; volumeType?: {} | undefined }
              | undefined
            launchConfigurationTemplateID: string
            launchDisposition?: 'STOPPED' | 'STARTED' | undefined
            licensing?: { osByol?: {} | undefined } | undefined
            mapAutoTaggingMpeID?: string | undefined
            postLaunchActions?:
              | {
                  cloudWatchLogGroupName?: {} | undefined
                  deployment?: {} | undefined
                  s3LogBucket?: {} | undefined
                  s3OutputKeyPrefix?: {} | undefined
                  ssmDocuments?: {} | undefined
                }
              | undefined
            smallVolumeConf?:
              | { iops?: {} | undefined; throughput?: {} | undefined; volumeType?: {} | undefined }
              | undefined
            smallVolumeMaxSize?: number | undefined
            targetInstanceTypeRightSizingMethod?: 'NONE' | 'BASIC' | undefined
          }
        }
        output: LaunchConfigurationTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateReplicationConfiguration': {
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
            associateDefaultSecurityGroup?: boolean | undefined
            bandwidthThrottling?: number | undefined
            createPublicIP?: boolean | undefined
            dataPlaneRouting?: 'PRIVATE_IP' | 'PUBLIC_IP' | undefined
            defaultLargeStagingDiskType?: 'GP2' | 'ST1' | 'GP3' | undefined
            ebsEncryption?: 'DEFAULT' | 'CUSTOM' | undefined
            ebsEncryptionKeyArn?: string | undefined
            name?: string | undefined
            replicatedDisks?: ReplicationConfigurationReplicatedDisk[] | undefined
            replicationServerInstanceType?: string | undefined
            replicationServersSecurityGroupsIDs?: SecurityGroupID[] | undefined
            sourceServerID: string
            stagingAreaSubnetId?: string | undefined
            stagingAreaTags?: { [x: string]: TagValue } | undefined
            useDedicatedReplicationServer?: boolean | undefined
          }
        }
        output: ReplicationConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateReplicationConfigurationTemplate': {
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
            arn?: string | undefined
            associateDefaultSecurityGroup?: boolean | undefined
            bandwidthThrottling?: number | undefined
            createPublicIP?: boolean | undefined
            dataPlaneRouting?: 'PRIVATE_IP' | 'PUBLIC_IP' | undefined
            defaultLargeStagingDiskType?: 'GP2' | 'ST1' | 'GP3' | undefined
            ebsEncryption?: 'DEFAULT' | 'CUSTOM' | undefined
            ebsEncryptionKeyArn?: string | undefined
            replicationConfigurationTemplateID: string
            replicationServerInstanceType?: string | undefined
            replicationServersSecurityGroupsIDs?: SecurityGroupID[] | undefined
            stagingAreaSubnetId?: string | undefined
            stagingAreaTags?: { [x: string]: TagValue } | undefined
            useDedicatedReplicationServer?: boolean | undefined
          }
        }
        output: ReplicationConfigurationTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateSourceServerReplicationType': {
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
          json: { replicationType: 'AGENT_BASED' | 'SNAPSHOT_SHIPPING'; sourceServerID: string }
        }
        output: SourceServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateWave': {
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
          json: { description?: string | undefined; name?: string | undefined; waveID: string }
        }
        output: Wave
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
