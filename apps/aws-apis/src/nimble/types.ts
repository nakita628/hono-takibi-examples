type String = string
type AcceptEulasResponse = { eulaAcceptances?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type InternalServerErrorException = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type ListEulaAcceptancesResponse = { eulaAcceptances?: {} | undefined; nextToken?: {} | undefined }
type EC2SubnetId = string
type LaunchProfileProtocolVersion = string
type CreateLaunchProfileResponse = {
  launchProfile?:
    | {
        arn?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SubnetIds?: {} | undefined
        launchProfileId?: {} | undefined
        launchProfileProtocolVersions?: {} | undefined
        name?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamConfiguration?:
          | {
              automaticTerminationMode?: {} | undefined
              clipboardMode: {}
              ec2InstanceTypes: {}
              maxSessionLengthInMinutes?: {} | undefined
              maxStoppedSessionLengthInMinutes?: {} | undefined
              sessionBackup?:
                | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                | undefined
              sessionPersistenceMode?: {} | undefined
              sessionStorage?:
                | {
                    mode: {}
                    root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                  }
                | undefined
              streamingImageIds: {}
              volumeConfiguration?:
                | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                | undefined
            }
          | undefined
        studioComponentIds?: {} | undefined
        tags?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        validationResults?: {} | undefined
      }
    | undefined
}
type LaunchProfileState =
  | 'CREATE_IN_PROGRESS'
  | 'READY'
  | 'UPDATE_IN_PROGRESS'
  | 'DELETE_IN_PROGRESS'
  | 'DELETED'
  | 'DELETE_FAILED'
  | 'CREATE_FAILED'
  | 'UPDATE_FAILED'
type ListLaunchProfilesResponse = { launchProfiles?: {} | undefined; nextToken?: {} | undefined }
type CreateStreamingImageResponse = {
  streamingImage?:
    | {
        arn?: {} | undefined
        description?: {} | undefined
        ec2ImageId?: {} | undefined
        encryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
        eulaIds?: {} | undefined
        name?: {} | undefined
        owner?: {} | undefined
        platform?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamingImageId?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ListStreamingImagesResponse = { nextToken?: {} | undefined; streamingImages?: {} | undefined }
type CreateStreamingSessionResponse = {
  session?:
    | {
        arn?: {} | undefined
        automaticTerminationMode?: {} | undefined
        backupMode?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        ec2InstanceType?: {} | undefined
        launchProfileId?: {} | undefined
        maxBackupsToRetain?: {} | undefined
        ownedBy?: {} | undefined
        sessionId?: {} | undefined
        sessionPersistenceMode?: {} | undefined
        startedAt?: {} | undefined
        startedBy?: {} | undefined
        startedFromBackupId?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        stopAt?: {} | undefined
        stoppedAt?: {} | undefined
        stoppedBy?: {} | undefined
        streamingImageId?: {} | undefined
        tags?: {} | undefined
        terminateAt?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        volumeConfiguration?:
          | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
          | undefined
        volumeRetentionMode?: {} | undefined
      }
    | undefined
}
type ListStreamingSessionsResponse = { nextToken?: {} | undefined; sessions?: {} | undefined }
type CreateStreamingSessionStreamResponse = {
  stream?:
    | {
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        expiresAt?: {} | undefined
        ownedBy?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        streamId?: {} | undefined
        url?: {} | undefined
      }
    | undefined
}
type CreateStudioResponse = {
  studio?:
    | {
        adminRoleArn?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        displayName?: {} | undefined
        homeRegion?: {} | undefined
        ssoClientId?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        studioEncryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
        studioId?: {} | undefined
        studioName?: {} | undefined
        studioUrl?: {} | undefined
        tags?: {} | undefined
        updatedAt?: {} | undefined
        userRoleArn?: {} | undefined
      }
    | undefined
}
type ListStudiosResponse = { nextToken?: {} | undefined; studios: {} }
type SecurityGroupId = string
type StudioComponentInitializationScript = {
  launchProfileProtocolVersion?: {} | undefined
  platform?: {} | undefined
  runContext?: {} | undefined
  script?: {} | undefined
}
type ScriptParameterKeyValue = { key?: {} | undefined; value?: {} | undefined }
type CreateStudioComponentResponse = {
  studioComponent?:
    | {
        arn?: {} | undefined
        configuration?:
          | {
              activeDirectoryConfiguration?:
                | {
                    computerAttributes?: {} | undefined
                    directoryId?: {} | undefined
                    organizationalUnitDistinguishedName?: {} | undefined
                  }
                | undefined
              computeFarmConfiguration?:
                | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                | undefined
              licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
              sharedFileSystemConfiguration?:
                | {
                    endpoint?: {} | undefined
                    fileSystemId?: {} | undefined
                    linuxMountPoint?: {} | undefined
                    shareName?: {} | undefined
                    windowsMountDrive?: {} | undefined
                  }
                | undefined
            }
          | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SecurityGroupIds?: {} | undefined
        initializationScripts?: {} | undefined
        name?: {} | undefined
        runtimeRoleArn?: {} | undefined
        scriptParameters?: {} | undefined
        secureInitializationRoleArn?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        studioComponentId?: {} | undefined
        subtype?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
      }
    | undefined
}
type StudioComponentState =
  | 'CREATE_IN_PROGRESS'
  | 'READY'
  | 'UPDATE_IN_PROGRESS'
  | 'DELETE_IN_PROGRESS'
  | 'DELETED'
  | 'DELETE_FAILED'
  | 'CREATE_FAILED'
  | 'UPDATE_FAILED'
type StudioComponentType =
  | 'ACTIVE_DIRECTORY'
  | 'SHARED_FILE_SYSTEM'
  | 'COMPUTE_FARM'
  | 'LICENSE_SERVICE'
  | 'CUSTOM'
type ListStudioComponentsResponse = {
  nextToken?: {} | undefined
  studioComponents?: {} | undefined
}
type DeleteLaunchProfileResponse = {
  launchProfile?:
    | {
        arn?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SubnetIds?: {} | undefined
        launchProfileId?: {} | undefined
        launchProfileProtocolVersions?: {} | undefined
        name?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamConfiguration?:
          | {
              automaticTerminationMode?: {} | undefined
              clipboardMode: {}
              ec2InstanceTypes: {}
              maxSessionLengthInMinutes?: {} | undefined
              maxStoppedSessionLengthInMinutes?: {} | undefined
              sessionBackup?:
                | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                | undefined
              sessionPersistenceMode?: {} | undefined
              sessionStorage?:
                | {
                    mode: {}
                    root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                  }
                | undefined
              streamingImageIds: {}
              volumeConfiguration?:
                | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                | undefined
            }
          | undefined
        studioComponentIds?: {} | undefined
        tags?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        validationResults?: {} | undefined
      }
    | undefined
}
type GetLaunchProfileResponse = {
  launchProfile?:
    | {
        arn?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SubnetIds?: {} | undefined
        launchProfileId?: {} | undefined
        launchProfileProtocolVersions?: {} | undefined
        name?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamConfiguration?:
          | {
              automaticTerminationMode?: {} | undefined
              clipboardMode: {}
              ec2InstanceTypes: {}
              maxSessionLengthInMinutes?: {} | undefined
              maxStoppedSessionLengthInMinutes?: {} | undefined
              sessionBackup?:
                | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                | undefined
              sessionPersistenceMode?: {} | undefined
              sessionStorage?:
                | {
                    mode: {}
                    root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                  }
                | undefined
              streamingImageIds: {}
              volumeConfiguration?:
                | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                | undefined
            }
          | undefined
        studioComponentIds?: {} | undefined
        tags?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        validationResults?: {} | undefined
      }
    | undefined
}
type UpdateLaunchProfileResponse = {
  launchProfile?:
    | {
        arn?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SubnetIds?: {} | undefined
        launchProfileId?: {} | undefined
        launchProfileProtocolVersions?: {} | undefined
        name?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamConfiguration?:
          | {
              automaticTerminationMode?: {} | undefined
              clipboardMode: {}
              ec2InstanceTypes: {}
              maxSessionLengthInMinutes?: {} | undefined
              maxStoppedSessionLengthInMinutes?: {} | undefined
              sessionBackup?:
                | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                | undefined
              sessionPersistenceMode?: {} | undefined
              sessionStorage?:
                | {
                    mode: {}
                    root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                  }
                | undefined
              streamingImageIds: {}
              volumeConfiguration?:
                | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                | undefined
            }
          | undefined
        studioComponentIds?: {} | undefined
        tags?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        validationResults?: {} | undefined
      }
    | undefined
}
type DeleteLaunchProfileMemberResponse = { [x: string]: unknown }
type GetLaunchProfileMemberResponse = {
  member?:
    | {
        identityStoreId?: {} | undefined
        persona?: {} | undefined
        principalId?: {} | undefined
        sid?: {} | undefined
      }
    | undefined
}
type UpdateLaunchProfileMemberResponse = {
  member?:
    | {
        identityStoreId?: {} | undefined
        persona?: {} | undefined
        principalId?: {} | undefined
        sid?: {} | undefined
      }
    | undefined
}
type DeleteStreamingImageResponse = {
  streamingImage?:
    | {
        arn?: {} | undefined
        description?: {} | undefined
        ec2ImageId?: {} | undefined
        encryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
        eulaIds?: {} | undefined
        name?: {} | undefined
        owner?: {} | undefined
        platform?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamingImageId?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetStreamingImageResponse = {
  streamingImage?:
    | {
        arn?: {} | undefined
        description?: {} | undefined
        ec2ImageId?: {} | undefined
        encryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
        eulaIds?: {} | undefined
        name?: {} | undefined
        owner?: {} | undefined
        platform?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamingImageId?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type StreamingImage = {
  arn?: {} | undefined
  description?: {} | undefined
  ec2ImageId?: {} | undefined
  encryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
  eulaIds?: {} | undefined
  name?: {} | undefined
  owner?: {} | undefined
  platform?: {} | undefined
  state?: {} | undefined
  statusCode?: {} | undefined
  statusMessage?: {} | undefined
  streamingImageId?: {} | undefined
  tags?: {} | undefined
}
type UpdateStreamingImageResponse = { streamingImage?: StreamingImage | undefined }
type DeleteStreamingSessionResponse = {
  session?:
    | {
        arn?: {} | undefined
        automaticTerminationMode?: {} | undefined
        backupMode?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        ec2InstanceType?: {} | undefined
        launchProfileId?: {} | undefined
        maxBackupsToRetain?: {} | undefined
        ownedBy?: {} | undefined
        sessionId?: {} | undefined
        sessionPersistenceMode?: {} | undefined
        startedAt?: {} | undefined
        startedBy?: {} | undefined
        startedFromBackupId?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        stopAt?: {} | undefined
        stoppedAt?: {} | undefined
        stoppedBy?: {} | undefined
        streamingImageId?: {} | undefined
        tags?: {} | undefined
        terminateAt?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        volumeConfiguration?:
          | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
          | undefined
        volumeRetentionMode?: {} | undefined
      }
    | undefined
}
type GetStreamingSessionResponse = {
  session?:
    | {
        arn?: {} | undefined
        automaticTerminationMode?: {} | undefined
        backupMode?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        ec2InstanceType?: {} | undefined
        launchProfileId?: {} | undefined
        maxBackupsToRetain?: {} | undefined
        ownedBy?: {} | undefined
        sessionId?: {} | undefined
        sessionPersistenceMode?: {} | undefined
        startedAt?: {} | undefined
        startedBy?: {} | undefined
        startedFromBackupId?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        stopAt?: {} | undefined
        stoppedAt?: {} | undefined
        stoppedBy?: {} | undefined
        streamingImageId?: {} | undefined
        tags?: {} | undefined
        terminateAt?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        volumeConfiguration?:
          | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
          | undefined
        volumeRetentionMode?: {} | undefined
      }
    | undefined
}
type DeleteStudioResponse = {
  studio: {
    adminRoleArn?: {} | undefined
    arn?: {} | undefined
    createdAt?: {} | undefined
    displayName?: {} | undefined
    homeRegion?: {} | undefined
    ssoClientId?: {} | undefined
    state?: {} | undefined
    statusCode?: {} | undefined
    statusMessage?: {} | undefined
    studioEncryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
    studioId?: {} | undefined
    studioName?: {} | undefined
    studioUrl?: {} | undefined
    tags?: {} | undefined
    updatedAt?: {} | undefined
    userRoleArn?: {} | undefined
  }
}
type GetStudioResponse = {
  studio: {
    adminRoleArn?: {} | undefined
    arn?: {} | undefined
    createdAt?: {} | undefined
    displayName?: {} | undefined
    homeRegion?: {} | undefined
    ssoClientId?: {} | undefined
    state?: {} | undefined
    statusCode?: {} | undefined
    statusMessage?: {} | undefined
    studioEncryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
    studioId?: {} | undefined
    studioName?: {} | undefined
    studioUrl?: {} | undefined
    tags?: {} | undefined
    updatedAt?: {} | undefined
    userRoleArn?: {} | undefined
  }
}
type UpdateStudioResponse = {
  studio: {
    adminRoleArn?: {} | undefined
    arn?: {} | undefined
    createdAt?: {} | undefined
    displayName?: {} | undefined
    homeRegion?: {} | undefined
    ssoClientId?: {} | undefined
    state?: {} | undefined
    statusCode?: {} | undefined
    statusMessage?: {} | undefined
    studioEncryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
    studioId?: {} | undefined
    studioName?: {} | undefined
    studioUrl?: {} | undefined
    tags?: {} | undefined
    updatedAt?: {} | undefined
    userRoleArn?: {} | undefined
  }
}
type DeleteStudioComponentResponse = {
  studioComponent?:
    | {
        arn?: {} | undefined
        configuration?:
          | {
              activeDirectoryConfiguration?:
                | {
                    computerAttributes?: {} | undefined
                    directoryId?: {} | undefined
                    organizationalUnitDistinguishedName?: {} | undefined
                  }
                | undefined
              computeFarmConfiguration?:
                | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                | undefined
              licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
              sharedFileSystemConfiguration?:
                | {
                    endpoint?: {} | undefined
                    fileSystemId?: {} | undefined
                    linuxMountPoint?: {} | undefined
                    shareName?: {} | undefined
                    windowsMountDrive?: {} | undefined
                  }
                | undefined
            }
          | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SecurityGroupIds?: {} | undefined
        initializationScripts?: {} | undefined
        name?: {} | undefined
        runtimeRoleArn?: {} | undefined
        scriptParameters?: {} | undefined
        secureInitializationRoleArn?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        studioComponentId?: {} | undefined
        subtype?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
      }
    | undefined
}
type GetStudioComponentResponse = {
  studioComponent?:
    | {
        arn?: {} | undefined
        configuration?:
          | {
              activeDirectoryConfiguration?:
                | {
                    computerAttributes?: {} | undefined
                    directoryId?: {} | undefined
                    organizationalUnitDistinguishedName?: {} | undefined
                  }
                | undefined
              computeFarmConfiguration?:
                | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                | undefined
              licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
              sharedFileSystemConfiguration?:
                | {
                    endpoint?: {} | undefined
                    fileSystemId?: {} | undefined
                    linuxMountPoint?: {} | undefined
                    shareName?: {} | undefined
                    windowsMountDrive?: {} | undefined
                  }
                | undefined
            }
          | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SecurityGroupIds?: {} | undefined
        initializationScripts?: {} | undefined
        name?: {} | undefined
        runtimeRoleArn?: {} | undefined
        scriptParameters?: {} | undefined
        secureInitializationRoleArn?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        studioComponentId?: {} | undefined
        subtype?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
      }
    | undefined
}
type UpdateStudioComponentResponse = {
  studioComponent?:
    | {
        arn?: {} | undefined
        configuration?:
          | {
              activeDirectoryConfiguration?:
                | {
                    computerAttributes?: {} | undefined
                    directoryId?: {} | undefined
                    organizationalUnitDistinguishedName?: {} | undefined
                  }
                | undefined
              computeFarmConfiguration?:
                | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                | undefined
              licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
              sharedFileSystemConfiguration?:
                | {
                    endpoint?: {} | undefined
                    fileSystemId?: {} | undefined
                    linuxMountPoint?: {} | undefined
                    shareName?: {} | undefined
                    windowsMountDrive?: {} | undefined
                  }
                | undefined
            }
          | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SecurityGroupIds?: {} | undefined
        initializationScripts?: {} | undefined
        name?: {} | undefined
        runtimeRoleArn?: {} | undefined
        scriptParameters?: {} | undefined
        secureInitializationRoleArn?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        studioComponentId?: {} | undefined
        subtype?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
      }
    | undefined
}
type DeleteStudioMemberResponse = { [x: string]: unknown }
type GetStudioMemberResponse = {
  member?:
    | {
        identityStoreId?: {} | undefined
        persona?: {} | undefined
        principalId?: {} | undefined
        sid?: {} | undefined
      }
    | undefined
}
type GetEulaResponse = {
  eula?:
    | {
        content?: {} | undefined
        createdAt?: {} | undefined
        eulaId?: {} | undefined
        name?: {} | undefined
        updatedAt?: {} | undefined
      }
    | undefined
}
type GetLaunchProfileDetailsResponse = {
  launchProfile?:
    | {
        arn?: {} | undefined
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        description?: {} | undefined
        ec2SubnetIds?: {} | undefined
        launchProfileId?: {} | undefined
        launchProfileProtocolVersions?: {} | undefined
        name?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        streamConfiguration?:
          | {
              automaticTerminationMode?: {} | undefined
              clipboardMode: {}
              ec2InstanceTypes: {}
              maxSessionLengthInMinutes?: {} | undefined
              maxStoppedSessionLengthInMinutes?: {} | undefined
              sessionBackup?:
                | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                | undefined
              sessionPersistenceMode?: {} | undefined
              sessionStorage?:
                | {
                    mode: {}
                    root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                  }
                | undefined
              streamingImageIds: {}
              volumeConfiguration?:
                | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                | undefined
            }
          | undefined
        studioComponentIds?: {} | undefined
        tags?: {} | undefined
        updatedAt?: {} | undefined
        updatedBy?: {} | undefined
        validationResults?: {} | undefined
      }
    | undefined
  streamingImages?: {} | undefined
  studioComponentSummaries?: {} | undefined
}
type GetLaunchProfileInitializationResponse = {
  launchProfileInitialization?:
    | {
        activeDirectory?:
          | {
              computerAttributes?: {} | undefined
              directoryId?: {} | undefined
              directoryName?: {} | undefined
              dnsIpAddresses?: {} | undefined
              organizationalUnitDistinguishedName?: {} | undefined
              studioComponentId?: {} | undefined
              studioComponentName?: {} | undefined
            }
          | undefined
        ec2SecurityGroupIds?: {} | undefined
        launchProfileId?: {} | undefined
        launchProfileProtocolVersion?: {} | undefined
        launchPurpose?: {} | undefined
        name?: {} | undefined
        platform?: {} | undefined
        systemInitializationScripts?: {} | undefined
        userInitializationScripts?: {} | undefined
      }
    | undefined
}
type StreamingSessionState =
  | 'CREATE_IN_PROGRESS'
  | 'DELETE_IN_PROGRESS'
  | 'READY'
  | 'DELETED'
  | 'CREATE_FAILED'
  | 'DELETE_FAILED'
  | 'STOP_IN_PROGRESS'
  | 'START_IN_PROGRESS'
  | 'STOPPED'
  | 'STOP_FAILED'
  | 'START_FAILED'
type GetStreamingSessionBackupResponse = {
  streamingSessionBackup?:
    | {
        arn?: {} | undefined
        backupId?: {} | undefined
        createdAt?: {} | undefined
        launchProfileId?: {} | undefined
        ownedBy?: {} | undefined
        sessionId?: {} | undefined
        state?: StreamingSessionState | undefined
        statusCode?: {} | undefined
        statusMessage?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetStreamingSessionStreamResponse = {
  stream?:
    | {
        createdAt?: {} | undefined
        createdBy?: {} | undefined
        expiresAt?: {} | undefined
        ownedBy?: {} | undefined
        state?: {} | undefined
        statusCode?: {} | undefined
        streamId?: {} | undefined
        url?: {} | undefined
      }
    | undefined
}
type ListEulasResponse = { eulas?: {} | undefined; nextToken?: {} | undefined }
type ListLaunchProfileMembersResponse = { members?: {} | undefined; nextToken?: {} | undefined }
type NewLaunchProfileMember = { persona: {}; principalId: {} }
type PutLaunchProfileMembersResponse = { [x: string]: unknown }
type ListStreamingSessionBackupsResponse = {
  nextToken?: {} | undefined
  streamingSessionBackups?: {} | undefined
}
type ListStudioMembersResponse = { members?: {} | undefined; nextToken?: {} | undefined }
type NewStudioMember = { persona: {}; principalId: {} }
type PutStudioMembersResponse = { [x: string]: unknown }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type StreamingSession = {
  arn?: {} | undefined
  automaticTerminationMode?: {} | undefined
  backupMode?: {} | undefined
  createdAt?: {} | undefined
  createdBy?: {} | undefined
  ec2InstanceType?: {} | undefined
  launchProfileId?: {} | undefined
  maxBackupsToRetain?: {} | undefined
  ownedBy?: {} | undefined
  sessionId?: {} | undefined
  sessionPersistenceMode?: {} | undefined
  startedAt?: {} | undefined
  startedBy?: {} | undefined
  startedFromBackupId?: {} | undefined
  state?: {} | undefined
  statusCode?: {} | undefined
  statusMessage?: {} | undefined
  stopAt?: {} | undefined
  stoppedAt?: {} | undefined
  stoppedBy?: {} | undefined
  streamingImageId?: {} | undefined
  tags?: {} | undefined
  terminateAt?: {} | undefined
  updatedAt?: {} | undefined
  updatedBy?: {} | undefined
  volumeConfiguration?:
    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
    | undefined
  volumeRetentionMode?: {} | undefined
}
type StartStreamingSessionResponse = { session?: StreamingSession | undefined }
type StartStudioSSOConfigurationRepairResponse = {
  studio: {
    adminRoleArn?: {} | undefined
    arn?: {} | undefined
    createdAt?: {} | undefined
    displayName?: {} | undefined
    homeRegion?: {} | undefined
    ssoClientId?: {} | undefined
    state?: {} | undefined
    statusCode?: {} | undefined
    statusMessage?: {} | undefined
    studioEncryptionConfiguration?: { keyArn?: {} | undefined; keyType: {} } | undefined
    studioId?: {} | undefined
    studioName?: {} | undefined
    studioUrl?: {} | undefined
    tags?: {} | undefined
    updatedAt?: {} | undefined
    userRoleArn?: {} | undefined
  }
}
type StopStreamingSessionResponse = { session?: StreamingSession | undefined }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2020-08-01/studios/:studioId/eula-acceptances': {
      $post:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: AcceptEulasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { eulaIds?: String[] | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            output: ListEulaAcceptancesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              query: { eulaIds?: String[] | undefined; nextToken?: string | undefined }
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/launch-profiles': {
      $post:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateLaunchProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2SubnetIds: EC2SubnetId[]
                launchProfileProtocolVersions: LaunchProfileProtocolVersion[]
                name: string
                streamConfiguration: {
                  automaticTerminationMode?: {} | undefined
                  clipboardMode?: {} | undefined
                  ec2InstanceTypes?: {} | undefined
                  maxSessionLengthInMinutes?: {} | undefined
                  maxStoppedSessionLengthInMinutes?: {} | undefined
                  sessionBackup?:
                    | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                    | undefined
                  sessionPersistenceMode?: {} | undefined
                  sessionStorage?:
                    | {
                        mode: {}
                        root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                      }
                    | undefined
                  streamingImageIds?: {} | undefined
                  volumeConfiguration?:
                    | { iops?: {} | undefined; size?: {} | undefined; throughput?: {} | undefined }
                    | undefined
                }
                studioComponentIds: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            output: ListLaunchProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                principalId?: string | undefined
                states?: LaunchProfileState[] | undefined
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-images': {
      $post:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateStreamingImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                ec2ImageId: string
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            output: ListStreamingImagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; owner?: string | undefined }
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-sessions': {
      $post:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateStreamingSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ec2InstanceType?:
                  | 'g4dn.xlarge'
                  | 'g4dn.2xlarge'
                  | 'g4dn.4xlarge'
                  | 'g4dn.8xlarge'
                  | 'g4dn.12xlarge'
                  | 'g4dn.16xlarge'
                  | 'g3.4xlarge'
                  | 'g3s.xlarge'
                  | 'g5.xlarge'
                  | 'g5.2xlarge'
                  | 'g5.4xlarge'
                  | 'g5.8xlarge'
                  | 'g5.16xlarge'
                  | undefined
                launchProfileId: string
                ownedBy?: string | undefined
                streamingImageId?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            output: ListStreamingSessionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                createdBy?: string | undefined
                nextToken?: string | undefined
                ownedBy?: string | undefined
                sessionIds?: string | undefined
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/streams': {
      $post:
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: CreateStreamingSessionStreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { expirationInSeconds?: number | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: CreateStudioResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn: string
                displayName: string
                studioEncryptionConfiguration?:
                  | { keyArn?: {} | undefined; keyType?: {} | undefined }
                  | undefined
                studioName: string
                tags?: { [x: string]: String } | undefined
                userRoleArn: string
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
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
            }
            output: ListStudiosResponse
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
            }
            output: ResourceNotFoundException
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
            }
            output: ConflictException
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
            }
            output: ThrottlingException
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
            }
            output: ValidationException
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
            }
            output: AccessDeniedException
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
            }
            output: InternalServerErrorException
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
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/studio-components': {
      $post:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: CreateStudioComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name: string
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                tags?: { [x: string]: String } | undefined
                type:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            output: ListStudioComponentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                states?: StudioComponentState[] | undefined
                types?: StudioComponentType[] | undefined
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId': {
      $delete:
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteLaunchProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetLaunchProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: UpdateLaunchProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
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
                launchProfileProtocolVersions?: LaunchProfileProtocolVersion[] | undefined
                name?: string | undefined
                streamConfiguration?:
                  | {
                      automaticTerminationMode?: {} | undefined
                      clipboardMode?: {} | undefined
                      ec2InstanceTypes?: {} | undefined
                      maxSessionLengthInMinutes?: {} | undefined
                      maxStoppedSessionLengthInMinutes?: {} | undefined
                      sessionBackup?:
                        | { maxBackupsToRetain?: {} | undefined; mode?: {} | undefined }
                        | undefined
                      sessionPersistenceMode?: {} | undefined
                      sessionStorage?:
                        | {
                            mode: {}
                            root?: { linux?: {} | undefined; windows?: {} | undefined } | undefined
                          }
                        | undefined
                      streamingImageIds?: {} | undefined
                      volumeConfiguration?:
                        | {
                            iops?: {} | undefined
                            size?: {} | undefined
                            throughput?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                studioComponentIds?: String[] | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership/:principalId': {
      $delete:
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteLaunchProfileMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetLaunchProfileMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: UpdateLaunchProfileMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { persona: 'USER' } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-images/:streamingImageId': {
      $delete:
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteStreamingImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetStreamingImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: UpdateStreamingImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { streamingImageId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; name?: string | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId': {
      $delete:
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteStreamingSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetStreamingSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId': {
      $delete:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteStudioResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetStudioResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: UpdateStudioResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                adminRoleArn?: string | undefined
                displayName?: string | undefined
                userRoleArn?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/studio-components/:studioComponentId': {
      $delete:
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteStudioComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetStudioComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: UpdateStudioComponentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioComponentId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configuration?:
                  | {
                      activeDirectoryConfiguration?:
                        | {
                            computerAttributes?: {} | undefined
                            directoryId?: {} | undefined
                            organizationalUnitDistinguishedName?: {} | undefined
                          }
                        | undefined
                      computeFarmConfiguration?:
                        | { activeDirectoryUser?: {} | undefined; endpoint?: {} | undefined }
                        | undefined
                      licenseServiceConfiguration?: { endpoint?: {} | undefined } | undefined
                      sharedFileSystemConfiguration?:
                        | {
                            endpoint?: {} | undefined
                            fileSystemId?: {} | undefined
                            linuxMountPoint?: {} | undefined
                            shareName?: {} | undefined
                            windowsMountDrive?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                description?: string | undefined
                ec2SecurityGroupIds?: SecurityGroupId[] | undefined
                initializationScripts?: StudioComponentInitializationScript[] | undefined
                name?: string | undefined
                runtimeRoleArn?: string | undefined
                scriptParameters?: ScriptParameterKeyValue[] | undefined
                secureInitializationRoleArn?: string | undefined
                subtype?:
                  | 'AWS_MANAGED_MICROSOFT_AD'
                  | 'AMAZON_FSX_FOR_WINDOWS'
                  | 'AMAZON_FSX_FOR_LUSTRE'
                  | 'CUSTOM'
                  | undefined
                type?:
                  | 'ACTIVE_DIRECTORY'
                  | 'SHARED_FILE_SYSTEM'
                  | 'COMPUTE_FARM'
                  | 'LICENSE_SERVICE'
                  | 'CUSTOM'
                  | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/membership/:principalId': {
      $delete:
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteStudioMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetStudioMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { principalId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/eulas/:eulaId': {
      $get:
        | {
            input: { param: { eulaId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetEulaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eulaId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { eulaId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { eulaId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { eulaId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { eulaId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { eulaId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { eulaId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/details': {
      $get:
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetLaunchProfileDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/init#launchProfileProtocolVersions&launchPurpose&platform': {
      $get:
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            output: GetLaunchProfileInitializationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              query: {
                launchProfileProtocolVersions: String[]
                launchPurpose: string
                platform: string
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-session-backups/:backupId': {
      $get:
        | {
            input: { param: { backupId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetStreamingSessionBackupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backupId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { backupId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { backupId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { backupId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { backupId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { backupId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/streams/:streamId': {
      $get:
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetStreamingSessionStreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { sessionId: string; streamId: string; studioId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/eulas': {
      $get:
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListEulasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
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
            status: 480
          }
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
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
            status: 483
          }
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { eulaIds?: String[] | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership': {
      $get:
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: ListLaunchProfileMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $post:
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: PutLaunchProfileMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { launchProfileId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewLaunchProfileMember[] } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-session-backups': {
      $get:
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; ownedBy?: string | undefined }
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
            output: ListStreamingSessionBackupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; ownedBy?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; ownedBy?: string | undefined }
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; ownedBy?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; ownedBy?: string | undefined }
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; ownedBy?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              query: { nextToken?: string | undefined; ownedBy?: string | undefined }
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/membership': {
      $get:
        | {
            input: { param: { studioId: string } } & {
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
            output: ListStudioMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
      $post:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: PutStudioMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { identityStoreId: string; members: NewStudioMember[] } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/tags/:resourceArn': {
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
            output: ResourceNotFoundException
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
            output: ConflictException
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
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
            status: 483
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 204
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: ResourceNotFoundException
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: ConflictException
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
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
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/start': {
      $post:
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: StartStreamingSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backupId?: string | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/sso-configuration': {
      $put:
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: StartStudioSSOConfigurationRepairResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 480
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
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
            status: 483
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/stop': {
      $post:
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: StopStreamingSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { sessionId: string; studioId: string } } & {
              header: {
                'X-Amz-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { volumeRetentionMode?: 'RETAIN' | 'DELETE' | undefined } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2020-08-01/tags/:resourceArn#tagKeys': {
      $delete:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  },
  '/'
>
export default routes
