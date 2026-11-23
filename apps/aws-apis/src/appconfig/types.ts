type TagValue = string
type Application = { Id?: {} | undefined; Name?: {} | undefined; Description?: {} | undefined }
type Applications = { Items?: {} | undefined; NextToken?: {} | undefined }
type Validator = { Type: {}; Content: {} }
type ConfigurationProfile = {
  ApplicationId?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  LocationUri?: {} | undefined
  RetrievalRoleArn?: {} | undefined
  Validators?: {} | undefined
  Type?: {} | undefined
}
type ConfigurationProfiles = { Items?: {} | undefined; NextToken?: {} | undefined }
type DeploymentStrategy = {
  Id?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  DeploymentDurationInMinutes?: {} | undefined
  GrowthType?: {} | undefined
  GrowthFactor?: {} | undefined
  FinalBakeTimeInMinutes?: {} | undefined
  ReplicateTo?: {} | undefined
}
type DeploymentStrategies = { Items?: {} | undefined; NextToken?: {} | undefined }
type Monitor = { AlarmArn: {}; AlarmRoleArn?: {} | undefined }
type Environment = {
  ApplicationId?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  State?: {} | undefined
  Monitors?: {} | undefined
}
type Environments = { Items?: {} | undefined; NextToken?: {} | undefined }
type Action = {
  Name?: {} | undefined
  Description?: {} | undefined
  Uri?: {} | undefined
  RoleArn?: {} | undefined
}
type ActionList = Action[]
type Parameter = { Description?: {} | undefined; Required?: {} | undefined }
type Extension = {
  Id?: {} | undefined
  Name?: {} | undefined
  VersionNumber?: {} | undefined
  Arn?: {} | undefined
  Description?: {} | undefined
  Actions?: {} | undefined
  Parameters?: {} | undefined
}
type Extensions = { Items?: {} | undefined; NextToken?: {} | undefined }
type StringWithLengthBetween1And2048 = string
type ExtensionAssociation = {
  Id?: {} | undefined
  ExtensionArn?: {} | undefined
  ResourceArn?: {} | undefined
  Arn?: {} | undefined
  Parameters?: {} | undefined
  ExtensionVersionNumber?: {} | undefined
}
type ExtensionAssociations = { Items?: {} | undefined; NextToken?: {} | undefined }
type HostedConfigurationVersion = { Content?: {} | undefined }
type Configuration = { Content?: {} | undefined }
type Deployment = {
  ApplicationId?: {} | undefined
  EnvironmentId?: {} | undefined
  DeploymentStrategyId?: {} | undefined
  ConfigurationProfileId?: {} | undefined
  DeploymentNumber?: {} | undefined
  ConfigurationName?: {} | undefined
  ConfigurationLocationUri?: {} | undefined
  ConfigurationVersion?: {} | undefined
  Description?: {} | undefined
  DeploymentDurationInMinutes?: {} | undefined
  GrowthType?: {} | undefined
  GrowthFactor?: {} | undefined
  FinalBakeTimeInMinutes?: {} | undefined
  State?: {} | undefined
  EventLog?: {} | undefined
  PercentageComplete?: {} | undefined
  StartedAt?: {} | undefined
  CompletedAt?: {} | undefined
  AppliedExtensions?: {} | undefined
  KmsKeyArn?: {} | undefined
  KmsKeyIdentifier?: {} | undefined
}
type Deployments = { Items?: {} | undefined; NextToken?: {} | undefined }
type HostedConfigurationVersions = { Items?: {} | undefined; NextToken?: {} | undefined }
type ResourceTags = { Tags?: {} | undefined }
type TagKey = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/applications': {
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
            Name: string
            Description?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: Application
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: Applications
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:ApplicationId/configurationprofiles': {
      $post: {
        input: { param: { ApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Description?: string | undefined
            LocationUri: string
            RetrievalRoleArn?: string | undefined
            Validators?: Validator[] | undefined
            Tags?: { [x: string]: TagValue } | undefined
            Type?: string | undefined
          }
        }
        output: ConfigurationProfile
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { ApplicationId: string } } & {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            type?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ConfigurationProfiles
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentstrategies': {
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
            Name: string
            Description?: string | undefined
            DeploymentDurationInMinutes: number
            FinalBakeTimeInMinutes?: number | undefined
            GrowthFactor: number
            GrowthType?: 'LINEAR' | 'EXPONENTIAL' | undefined
            ReplicateTo?: 'NONE' | 'SSM_DOCUMENT' | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: DeploymentStrategy
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: DeploymentStrategies
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:ApplicationId/environments': {
      $post: {
        input: { param: { ApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Description?: string | undefined
            Monitors?: Monitor[] | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: Environment
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { ApplicationId: string } } & {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: Environments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extensions': {
      $post: {
        input: {
          header: {
            'Latest-Version-Number'?: number | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Description?: string | undefined
            Actions: { [x: string]: ActionList }
            Parameters?: { [x: string]: Parameter } | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: Extension
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            name?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: Extensions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extensionassociations': {
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
            ExtensionIdentifier: string
            ExtensionVersionNumber?: number | undefined
            ResourceIdentifier: string
            Parameters?: { [x: string]: StringWithLengthBetween1And2048 } | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: ExtensionAssociation
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            resource_identifier?: string | undefined
            extension_identifier?: string | undefined
            extension_version_number?: number | undefined
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ExtensionAssociations
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions#Content-Type': {
      $post: {
        input: { param: { ApplicationId: string; ConfigurationProfileId: string } } & {
          header: {
            Description?: string | undefined
            'Content-Type': string
            'Latest-Version-Number'?: number | undefined
            VersionLabel?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Content: string } }
        output: HostedConfigurationVersion
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/applications/:ApplicationId': {
      $delete: {
        input: { param: { ApplicationId: string } } & {
          header: {
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
        input: { param: { ApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: Application
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name?: string | undefined; Description?: string | undefined } }
        output: Application
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId': {
      $delete: {
        input: { param: { ApplicationId: string; ConfigurationProfileId: string } } & {
          header: {
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
        input: { param: { ApplicationId: string; ConfigurationProfileId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ConfigurationProfile
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ApplicationId: string; ConfigurationProfileId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name?: string | undefined
            Description?: string | undefined
            RetrievalRoleArn?: string | undefined
            Validators?: Validator[] | undefined
          }
        }
        output: ConfigurationProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deployementstrategies/:DeploymentStrategyId': {
      $delete: {
        input: { param: { DeploymentStrategyId: string } } & {
          header: {
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
    }
  } & {
    '/applications/:ApplicationId/environments/:EnvironmentId': {
      $delete: {
        input: { param: { ApplicationId: string; EnvironmentId: string } } & {
          header: {
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
        input: { param: { ApplicationId: string; EnvironmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: Environment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ApplicationId: string; EnvironmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name?: string | undefined
            Description?: string | undefined
            Monitors?: Monitor[] | undefined
          }
        }
        output: Environment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extensions/:ExtensionIdentifier': {
      $delete: {
        input: { param: { ExtensionIdentifier: string } } & {
          query: { version?: number | undefined }
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { ExtensionIdentifier: string } } & {
          query: { version_number?: number | undefined }
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
        output: Extension
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ExtensionIdentifier: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Description?: string | undefined
            Actions?: { [x: string]: ActionList } | undefined
            Parameters?: { [x: string]: Parameter } | undefined
            VersionNumber?: number | undefined
          }
        }
        output: Extension
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extensionassociations/:ExtensionAssociationId': {
      $delete: {
        input: { param: { ExtensionAssociationId: string } } & {
          header: {
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
        input: { param: { ExtensionAssociationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExtensionAssociation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ExtensionAssociationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Parameters?: { [x: string]: StringWithLengthBetween1And2048 } | undefined } }
        output: ExtensionAssociation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions/:VersionNumber': {
      $delete: {
        input: {
          param: { ApplicationId: string; ConfigurationProfileId: string; VersionNumber: number }
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: { ApplicationId: string; ConfigurationProfileId: string; VersionNumber: number }
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
        output: HostedConfigurationVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:Application/environments/:Environment/configurations/:Configuration#client_id': {
      $get: {
        input: { param: { Application: string; Environment: string; Configuration: string } } & {
          query: { client_id: string; client_configuration_version?: string | undefined }
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
        output: Configuration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments/:DeploymentNumber': {
      $get: {
        input: {
          param: { ApplicationId: string; EnvironmentId: string; DeploymentNumber: number }
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
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: { ApplicationId: string; EnvironmentId: string; DeploymentNumber: number }
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
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/deploymentstrategies/:DeploymentStrategyId': {
      $get: {
        input: { param: { DeploymentStrategyId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeploymentStrategy
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { DeploymentStrategyId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Description?: string | undefined
            DeploymentDurationInMinutes?: number | undefined
            FinalBakeTimeInMinutes?: number | undefined
            GrowthFactor?: number | undefined
            GrowthType?: 'LINEAR' | 'EXPONENTIAL' | undefined
          }
        }
        output: DeploymentStrategy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments': {
      $get: {
        input: { param: { ApplicationId: string; EnvironmentId: string } } & {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: Deployments
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ApplicationId: string; EnvironmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            DeploymentStrategyId: string
            ConfigurationProfileId: string
            ConfigurationVersion: string
            Description?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
            KmsKeyIdentifier?: string | undefined
          }
        }
        output: Deployment
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions': {
      $get: {
        input: { param: { ApplicationId: string; ConfigurationProfileId: string } } & {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            version_label?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: HostedConfigurationVersions
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
        output: ResourceTags
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
        output: {}
        outputFormat: string
        status: 204
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
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/validators#configuration_version': {
      $post: {
        input: { param: { ApplicationId: string; ConfigurationProfileId: string } } & {
          query: { configuration_version: string }
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
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
