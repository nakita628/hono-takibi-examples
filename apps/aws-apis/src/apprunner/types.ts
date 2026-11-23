type AssociateCustomDomainRequest = {
  ServiceArn: {}
  DomainName: {}
  EnableWWWSubdomain?: {} | undefined
}
type AssociateCustomDomainResponse = {
  DNSTarget: {}
  ServiceArn: {}
  CustomDomain: {
    DomainName: {}
    EnableWWWSubdomain: {}
    CertificateValidationRecords?: {} | undefined
    Status: {}
  }
  VpcDNSTargets: {}
}
type CreateAutoScalingConfigurationRequest = {
  AutoScalingConfigurationName: {}
  MaxConcurrency?: {} | undefined
  MinSize?: {} | undefined
  MaxSize?: {} | undefined
  Tags?: {} | undefined
}
type CreateAutoScalingConfigurationResponse = {
  AutoScalingConfiguration: {
    AutoScalingConfigurationArn?: {} | undefined
    AutoScalingConfigurationName?: {} | undefined
    AutoScalingConfigurationRevision?: {} | undefined
    Latest?: {} | undefined
    Status?: {} | undefined
    MaxConcurrency?: {} | undefined
    MinSize?: {} | undefined
    MaxSize?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type CreateConnectionRequest = { ConnectionName: {}; ProviderType: {}; Tags?: {} | undefined }
type CreateConnectionResponse = {
  Connection: {
    ConnectionName?: {} | undefined
    ConnectionArn?: {} | undefined
    ProviderType?: {} | undefined
    Status?: {} | undefined
    CreatedAt?: {} | undefined
  }
}
type CreateObservabilityConfigurationRequest = {
  ObservabilityConfigurationName: {}
  TraceConfiguration?: { Vendor: {} } | undefined
  Tags?: {} | undefined
}
type CreateObservabilityConfigurationResponse = {
  ObservabilityConfiguration: {
    ObservabilityConfigurationArn?: {} | undefined
    ObservabilityConfigurationName?: {} | undefined
    TraceConfiguration?: { Vendor: {} } | undefined
    ObservabilityConfigurationRevision?: {} | undefined
    Latest?: {} | undefined
    Status?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type CreateServiceRequest = {
  ServiceName: {}
  SourceConfiguration: {
    CodeRepository?:
      | {
          RepositoryUrl: {}
          SourceCodeVersion: { Type: {}; Value: {} }
          CodeConfiguration?:
            | {
                ConfigurationSource: {}
                CodeConfigurationValues?:
                  | {
                      Runtime: {}
                      BuildCommand?: {} | undefined
                      StartCommand?: {} | undefined
                      Port?: {} | undefined
                      RuntimeEnvironmentVariables?: {} | undefined
                      RuntimeEnvironmentSecrets?: {} | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    ImageRepository?:
      | {
          ImageIdentifier: {}
          ImageConfiguration?:
            | {
                RuntimeEnvironmentVariables?: {} | undefined
                StartCommand?: {} | undefined
                Port?: {} | undefined
                RuntimeEnvironmentSecrets?: {} | undefined
              }
            | undefined
          ImageRepositoryType: {}
        }
      | undefined
    AutoDeploymentsEnabled?: {} | undefined
    AuthenticationConfiguration?:
      | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
      | undefined
  }
  InstanceConfiguration?:
    | { Cpu?: {} | undefined; Memory?: {} | undefined; InstanceRoleArn?: {} | undefined }
    | undefined
  Tags?: {} | undefined
  EncryptionConfiguration?: { KmsKey: {} } | undefined
  HealthCheckConfiguration?:
    | {
        Protocol?: {} | undefined
        Path?: {} | undefined
        Interval?: {} | undefined
        Timeout?: {} | undefined
        HealthyThreshold?: {} | undefined
        UnhealthyThreshold?: {} | undefined
      }
    | undefined
  AutoScalingConfigurationArn?: {} | undefined
  NetworkConfiguration?:
    | {
        EgressConfiguration?:
          | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
          | undefined
        IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
      }
    | undefined
  ObservabilityConfiguration?:
    | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
    | undefined
}
type CreateServiceResponse = {
  Service: {
    ServiceName: {}
    ServiceId: {}
    ServiceArn: {}
    ServiceUrl?: {} | undefined
    CreatedAt: {}
    UpdatedAt: {}
    DeletedAt?: {} | undefined
    Status: {}
    SourceConfiguration: {
      CodeRepository?:
        | {
            RepositoryUrl: {}
            SourceCodeVersion: { Type: {}; Value: {} }
            CodeConfiguration?:
              | {
                  ConfigurationSource: {}
                  CodeConfigurationValues?:
                    | {
                        Runtime: {}
                        BuildCommand?: {} | undefined
                        StartCommand?: {} | undefined
                        Port?: {} | undefined
                        RuntimeEnvironmentVariables?: {} | undefined
                        RuntimeEnvironmentSecrets?: {} | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      ImageRepository?:
        | {
            ImageIdentifier: {}
            ImageConfiguration?:
              | {
                  RuntimeEnvironmentVariables?: {} | undefined
                  StartCommand?: {} | undefined
                  Port?: {} | undefined
                  RuntimeEnvironmentSecrets?: {} | undefined
                }
              | undefined
            ImageRepositoryType: {}
          }
        | undefined
      AutoDeploymentsEnabled?: {} | undefined
      AuthenticationConfiguration?:
        | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
        | undefined
    }
    InstanceConfiguration: {
      Cpu?: {} | undefined
      Memory?: {} | undefined
      InstanceRoleArn?: {} | undefined
    }
    EncryptionConfiguration?: { KmsKey: {} } | undefined
    HealthCheckConfiguration?:
      | {
          Protocol?: {} | undefined
          Path?: {} | undefined
          Interval?: {} | undefined
          Timeout?: {} | undefined
          HealthyThreshold?: {} | undefined
          UnhealthyThreshold?: {} | undefined
        }
      | undefined
    AutoScalingConfigurationSummary: {
      AutoScalingConfigurationArn?: {} | undefined
      AutoScalingConfigurationName?: {} | undefined
      AutoScalingConfigurationRevision?: {} | undefined
    }
    NetworkConfiguration: {
      EgressConfiguration?:
        | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
        | undefined
      IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
    }
    ObservabilityConfiguration?:
      | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
      | undefined
  }
  OperationId: {}
}
type CreateVpcConnectorRequest = {
  VpcConnectorName: {}
  Subnets: {}
  SecurityGroups?: {} | undefined
  Tags?: {} | undefined
}
type CreateVpcConnectorResponse = {
  VpcConnector: {
    VpcConnectorName?: {} | undefined
    VpcConnectorArn?: {} | undefined
    VpcConnectorRevision?: {} | undefined
    Subnets?: {} | undefined
    SecurityGroups?: {} | undefined
    Status?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type CreateVpcIngressConnectionRequest = {
  ServiceArn: {}
  VpcIngressConnectionName: {}
  IngressVpcConfiguration: { VpcId?: {} | undefined; VpcEndpointId?: {} | undefined }
  Tags?: {} | undefined
}
type CreateVpcIngressConnectionResponse = {
  VpcIngressConnection: {
    VpcIngressConnectionArn?: {} | undefined
    VpcIngressConnectionName?: {} | undefined
    ServiceArn?: {} | undefined
    Status?: {} | undefined
    AccountId?: {} | undefined
    DomainName?: {} | undefined
    IngressVpcConfiguration?: { VpcId?: {} | undefined; VpcEndpointId?: {} | undefined } | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DeleteAutoScalingConfigurationRequest = { AutoScalingConfigurationArn: {} }
type DeleteAutoScalingConfigurationResponse = {
  AutoScalingConfiguration: {
    AutoScalingConfigurationArn?: {} | undefined
    AutoScalingConfigurationName?: {} | undefined
    AutoScalingConfigurationRevision?: {} | undefined
    Latest?: {} | undefined
    Status?: {} | undefined
    MaxConcurrency?: {} | undefined
    MinSize?: {} | undefined
    MaxSize?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DeleteConnectionRequest = { ConnectionArn: {} }
type DeleteConnectionResponse = {
  Connection?:
    | {
        ConnectionName?: {} | undefined
        ConnectionArn?: {} | undefined
        ProviderType?: {} | undefined
        Status?: {} | undefined
        CreatedAt?: {} | undefined
      }
    | undefined
}
type DeleteObservabilityConfigurationRequest = { ObservabilityConfigurationArn: {} }
type DeleteObservabilityConfigurationResponse = {
  ObservabilityConfiguration: {
    ObservabilityConfigurationArn?: {} | undefined
    ObservabilityConfigurationName?: {} | undefined
    TraceConfiguration?: { Vendor: {} } | undefined
    ObservabilityConfigurationRevision?: {} | undefined
    Latest?: {} | undefined
    Status?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DeleteServiceRequest = { ServiceArn: {} }
type DeleteServiceResponse = {
  Service: {
    ServiceName: {}
    ServiceId: {}
    ServiceArn: {}
    ServiceUrl?: {} | undefined
    CreatedAt: {}
    UpdatedAt: {}
    DeletedAt?: {} | undefined
    Status: {}
    SourceConfiguration: {
      CodeRepository?:
        | {
            RepositoryUrl: {}
            SourceCodeVersion: { Type: {}; Value: {} }
            CodeConfiguration?:
              | {
                  ConfigurationSource: {}
                  CodeConfigurationValues?:
                    | {
                        Runtime: {}
                        BuildCommand?: {} | undefined
                        StartCommand?: {} | undefined
                        Port?: {} | undefined
                        RuntimeEnvironmentVariables?: {} | undefined
                        RuntimeEnvironmentSecrets?: {} | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      ImageRepository?:
        | {
            ImageIdentifier: {}
            ImageConfiguration?:
              | {
                  RuntimeEnvironmentVariables?: {} | undefined
                  StartCommand?: {} | undefined
                  Port?: {} | undefined
                  RuntimeEnvironmentSecrets?: {} | undefined
                }
              | undefined
            ImageRepositoryType: {}
          }
        | undefined
      AutoDeploymentsEnabled?: {} | undefined
      AuthenticationConfiguration?:
        | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
        | undefined
    }
    InstanceConfiguration: {
      Cpu?: {} | undefined
      Memory?: {} | undefined
      InstanceRoleArn?: {} | undefined
    }
    EncryptionConfiguration?: { KmsKey: {} } | undefined
    HealthCheckConfiguration?:
      | {
          Protocol?: {} | undefined
          Path?: {} | undefined
          Interval?: {} | undefined
          Timeout?: {} | undefined
          HealthyThreshold?: {} | undefined
          UnhealthyThreshold?: {} | undefined
        }
      | undefined
    AutoScalingConfigurationSummary: {
      AutoScalingConfigurationArn?: {} | undefined
      AutoScalingConfigurationName?: {} | undefined
      AutoScalingConfigurationRevision?: {} | undefined
    }
    NetworkConfiguration: {
      EgressConfiguration?:
        | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
        | undefined
      IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
    }
    ObservabilityConfiguration?:
      | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
      | undefined
  }
  OperationId: {}
}
type DeleteVpcConnectorRequest = { VpcConnectorArn: {} }
type DeleteVpcConnectorResponse = {
  VpcConnector: {
    VpcConnectorName?: {} | undefined
    VpcConnectorArn?: {} | undefined
    VpcConnectorRevision?: {} | undefined
    Subnets?: {} | undefined
    SecurityGroups?: {} | undefined
    Status?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DeleteVpcIngressConnectionRequest = { VpcIngressConnectionArn: {} }
type DeleteVpcIngressConnectionResponse = {
  VpcIngressConnection: {
    VpcIngressConnectionArn?: {} | undefined
    VpcIngressConnectionName?: {} | undefined
    ServiceArn?: {} | undefined
    Status?: {} | undefined
    AccountId?: {} | undefined
    DomainName?: {} | undefined
    IngressVpcConfiguration?: { VpcId?: {} | undefined; VpcEndpointId?: {} | undefined } | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DescribeAutoScalingConfigurationRequest = { AutoScalingConfigurationArn: {} }
type DescribeAutoScalingConfigurationResponse = {
  AutoScalingConfiguration: {
    AutoScalingConfigurationArn?: {} | undefined
    AutoScalingConfigurationName?: {} | undefined
    AutoScalingConfigurationRevision?: {} | undefined
    Latest?: {} | undefined
    Status?: {} | undefined
    MaxConcurrency?: {} | undefined
    MinSize?: {} | undefined
    MaxSize?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DescribeCustomDomainsRequest = {
  ServiceArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeCustomDomainsResponse = {
  DNSTarget: {}
  ServiceArn: {}
  CustomDomains: {}
  VpcDNSTargets: {}
  NextToken?: {} | undefined
}
type DescribeObservabilityConfigurationRequest = { ObservabilityConfigurationArn: {} }
type DescribeObservabilityConfigurationResponse = {
  ObservabilityConfiguration: {
    ObservabilityConfigurationArn?: {} | undefined
    ObservabilityConfigurationName?: {} | undefined
    TraceConfiguration?: { Vendor: {} } | undefined
    ObservabilityConfigurationRevision?: {} | undefined
    Latest?: {} | undefined
    Status?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DescribeServiceRequest = { ServiceArn: {} }
type DescribeServiceResponse = {
  Service: {
    ServiceName: {}
    ServiceId: {}
    ServiceArn: {}
    ServiceUrl?: {} | undefined
    CreatedAt: {}
    UpdatedAt: {}
    DeletedAt?: {} | undefined
    Status: {}
    SourceConfiguration: {
      CodeRepository?:
        | {
            RepositoryUrl: {}
            SourceCodeVersion: { Type: {}; Value: {} }
            CodeConfiguration?:
              | {
                  ConfigurationSource: {}
                  CodeConfigurationValues?:
                    | {
                        Runtime: {}
                        BuildCommand?: {} | undefined
                        StartCommand?: {} | undefined
                        Port?: {} | undefined
                        RuntimeEnvironmentVariables?: {} | undefined
                        RuntimeEnvironmentSecrets?: {} | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      ImageRepository?:
        | {
            ImageIdentifier: {}
            ImageConfiguration?:
              | {
                  RuntimeEnvironmentVariables?: {} | undefined
                  StartCommand?: {} | undefined
                  Port?: {} | undefined
                  RuntimeEnvironmentSecrets?: {} | undefined
                }
              | undefined
            ImageRepositoryType: {}
          }
        | undefined
      AutoDeploymentsEnabled?: {} | undefined
      AuthenticationConfiguration?:
        | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
        | undefined
    }
    InstanceConfiguration: {
      Cpu?: {} | undefined
      Memory?: {} | undefined
      InstanceRoleArn?: {} | undefined
    }
    EncryptionConfiguration?: { KmsKey: {} } | undefined
    HealthCheckConfiguration?:
      | {
          Protocol?: {} | undefined
          Path?: {} | undefined
          Interval?: {} | undefined
          Timeout?: {} | undefined
          HealthyThreshold?: {} | undefined
          UnhealthyThreshold?: {} | undefined
        }
      | undefined
    AutoScalingConfigurationSummary: {
      AutoScalingConfigurationArn?: {} | undefined
      AutoScalingConfigurationName?: {} | undefined
      AutoScalingConfigurationRevision?: {} | undefined
    }
    NetworkConfiguration: {
      EgressConfiguration?:
        | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
        | undefined
      IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
    }
    ObservabilityConfiguration?:
      | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
      | undefined
  }
}
type DescribeVpcConnectorRequest = { VpcConnectorArn: {} }
type DescribeVpcConnectorResponse = {
  VpcConnector: {
    VpcConnectorName?: {} | undefined
    VpcConnectorArn?: {} | undefined
    VpcConnectorRevision?: {} | undefined
    Subnets?: {} | undefined
    SecurityGroups?: {} | undefined
    Status?: {} | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DescribeVpcIngressConnectionRequest = { VpcIngressConnectionArn: {} }
type DescribeVpcIngressConnectionResponse = {
  VpcIngressConnection: {
    VpcIngressConnectionArn?: {} | undefined
    VpcIngressConnectionName?: {} | undefined
    ServiceArn?: {} | undefined
    Status?: {} | undefined
    AccountId?: {} | undefined
    DomainName?: {} | undefined
    IngressVpcConfiguration?: { VpcId?: {} | undefined; VpcEndpointId?: {} | undefined } | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
type DisassociateCustomDomainRequest = { ServiceArn: {}; DomainName: {} }
type DisassociateCustomDomainResponse = {
  DNSTarget: {}
  ServiceArn: {}
  CustomDomain: {
    DomainName: {}
    EnableWWWSubdomain: {}
    CertificateValidationRecords?: {} | undefined
    Status: {}
  }
  VpcDNSTargets: {}
}
type ListAutoScalingConfigurationsRequest = {
  AutoScalingConfigurationName?: {} | undefined
  LatestOnly?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAutoScalingConfigurationsResponse = {
  AutoScalingConfigurationSummaryList: {}
  NextToken?: {} | undefined
}
type ListConnectionsRequest = {
  ConnectionName?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListConnectionsResponse = { ConnectionSummaryList: {}; NextToken?: {} | undefined }
type ListObservabilityConfigurationsRequest = {
  ObservabilityConfigurationName?: {} | undefined
  LatestOnly?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListObservabilityConfigurationsResponse = {
  ObservabilityConfigurationSummaryList: {}
  NextToken?: {} | undefined
}
type ListOperationsRequest = {
  ServiceArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListOperationsResponse = { OperationSummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListServicesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListServicesResponse = { ServiceSummaryList: {}; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListVpcConnectorsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListVpcConnectorsResponse = { VpcConnectors: {}; NextToken?: {} | undefined }
type ListVpcIngressConnectionsRequest = {
  Filter?: { ServiceArn?: {} | undefined; VpcEndpointId?: {} | undefined } | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListVpcIngressConnectionsResponse = {
  VpcIngressConnectionSummaryList: {}
  NextToken?: {} | undefined
}
type PauseServiceRequest = { ServiceArn: {} }
type PauseServiceResponse = {
  Service: {
    ServiceName: {}
    ServiceId: {}
    ServiceArn: {}
    ServiceUrl?: {} | undefined
    CreatedAt: {}
    UpdatedAt: {}
    DeletedAt?: {} | undefined
    Status: {}
    SourceConfiguration: {
      CodeRepository?:
        | {
            RepositoryUrl: {}
            SourceCodeVersion: { Type: {}; Value: {} }
            CodeConfiguration?:
              | {
                  ConfigurationSource: {}
                  CodeConfigurationValues?:
                    | {
                        Runtime: {}
                        BuildCommand?: {} | undefined
                        StartCommand?: {} | undefined
                        Port?: {} | undefined
                        RuntimeEnvironmentVariables?: {} | undefined
                        RuntimeEnvironmentSecrets?: {} | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      ImageRepository?:
        | {
            ImageIdentifier: {}
            ImageConfiguration?:
              | {
                  RuntimeEnvironmentVariables?: {} | undefined
                  StartCommand?: {} | undefined
                  Port?: {} | undefined
                  RuntimeEnvironmentSecrets?: {} | undefined
                }
              | undefined
            ImageRepositoryType: {}
          }
        | undefined
      AutoDeploymentsEnabled?: {} | undefined
      AuthenticationConfiguration?:
        | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
        | undefined
    }
    InstanceConfiguration: {
      Cpu?: {} | undefined
      Memory?: {} | undefined
      InstanceRoleArn?: {} | undefined
    }
    EncryptionConfiguration?: { KmsKey: {} } | undefined
    HealthCheckConfiguration?:
      | {
          Protocol?: {} | undefined
          Path?: {} | undefined
          Interval?: {} | undefined
          Timeout?: {} | undefined
          HealthyThreshold?: {} | undefined
          UnhealthyThreshold?: {} | undefined
        }
      | undefined
    AutoScalingConfigurationSummary: {
      AutoScalingConfigurationArn?: {} | undefined
      AutoScalingConfigurationName?: {} | undefined
      AutoScalingConfigurationRevision?: {} | undefined
    }
    NetworkConfiguration: {
      EgressConfiguration?:
        | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
        | undefined
      IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
    }
    ObservabilityConfiguration?:
      | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
      | undefined
  }
  OperationId?: {} | undefined
}
type ResumeServiceRequest = { ServiceArn: {} }
type ResumeServiceResponse = {
  Service: {
    ServiceName: {}
    ServiceId: {}
    ServiceArn: {}
    ServiceUrl?: {} | undefined
    CreatedAt: {}
    UpdatedAt: {}
    DeletedAt?: {} | undefined
    Status: {}
    SourceConfiguration: {
      CodeRepository?:
        | {
            RepositoryUrl: {}
            SourceCodeVersion: { Type: {}; Value: {} }
            CodeConfiguration?:
              | {
                  ConfigurationSource: {}
                  CodeConfigurationValues?:
                    | {
                        Runtime: {}
                        BuildCommand?: {} | undefined
                        StartCommand?: {} | undefined
                        Port?: {} | undefined
                        RuntimeEnvironmentVariables?: {} | undefined
                        RuntimeEnvironmentSecrets?: {} | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      ImageRepository?:
        | {
            ImageIdentifier: {}
            ImageConfiguration?:
              | {
                  RuntimeEnvironmentVariables?: {} | undefined
                  StartCommand?: {} | undefined
                  Port?: {} | undefined
                  RuntimeEnvironmentSecrets?: {} | undefined
                }
              | undefined
            ImageRepositoryType: {}
          }
        | undefined
      AutoDeploymentsEnabled?: {} | undefined
      AuthenticationConfiguration?:
        | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
        | undefined
    }
    InstanceConfiguration: {
      Cpu?: {} | undefined
      Memory?: {} | undefined
      InstanceRoleArn?: {} | undefined
    }
    EncryptionConfiguration?: { KmsKey: {} } | undefined
    HealthCheckConfiguration?:
      | {
          Protocol?: {} | undefined
          Path?: {} | undefined
          Interval?: {} | undefined
          Timeout?: {} | undefined
          HealthyThreshold?: {} | undefined
          UnhealthyThreshold?: {} | undefined
        }
      | undefined
    AutoScalingConfigurationSummary: {
      AutoScalingConfigurationArn?: {} | undefined
      AutoScalingConfigurationName?: {} | undefined
      AutoScalingConfigurationRevision?: {} | undefined
    }
    NetworkConfiguration: {
      EgressConfiguration?:
        | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
        | undefined
      IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
    }
    ObservabilityConfiguration?:
      | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
      | undefined
  }
  OperationId?: {} | undefined
}
type StartDeploymentRequest = { ServiceArn: {} }
type StartDeploymentResponse = { OperationId: {} }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateServiceRequest = {
  ServiceArn: {}
  SourceConfiguration?:
    | {
        CodeRepository?:
          | {
              RepositoryUrl: {}
              SourceCodeVersion: { Type: {}; Value: {} }
              CodeConfiguration?:
                | {
                    ConfigurationSource: {}
                    CodeConfigurationValues?:
                      | {
                          Runtime: {}
                          BuildCommand?: {} | undefined
                          StartCommand?: {} | undefined
                          Port?: {} | undefined
                          RuntimeEnvironmentVariables?: {} | undefined
                          RuntimeEnvironmentSecrets?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        ImageRepository?:
          | {
              ImageIdentifier: {}
              ImageConfiguration?:
                | {
                    RuntimeEnvironmentVariables?: {} | undefined
                    StartCommand?: {} | undefined
                    Port?: {} | undefined
                    RuntimeEnvironmentSecrets?: {} | undefined
                  }
                | undefined
              ImageRepositoryType: {}
            }
          | undefined
        AutoDeploymentsEnabled?: {} | undefined
        AuthenticationConfiguration?:
          | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
          | undefined
      }
    | undefined
  InstanceConfiguration?:
    | { Cpu?: {} | undefined; Memory?: {} | undefined; InstanceRoleArn?: {} | undefined }
    | undefined
  AutoScalingConfigurationArn?: {} | undefined
  HealthCheckConfiguration?:
    | {
        Protocol?: {} | undefined
        Path?: {} | undefined
        Interval?: {} | undefined
        Timeout?: {} | undefined
        HealthyThreshold?: {} | undefined
        UnhealthyThreshold?: {} | undefined
      }
    | undefined
  NetworkConfiguration?:
    | {
        EgressConfiguration?:
          | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
          | undefined
        IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
      }
    | undefined
  ObservabilityConfiguration?:
    | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
    | undefined
}
type UpdateServiceResponse = {
  Service: {
    ServiceName: {}
    ServiceId: {}
    ServiceArn: {}
    ServiceUrl?: {} | undefined
    CreatedAt: {}
    UpdatedAt: {}
    DeletedAt?: {} | undefined
    Status: {}
    SourceConfiguration: {
      CodeRepository?:
        | {
            RepositoryUrl: {}
            SourceCodeVersion: { Type: {}; Value: {} }
            CodeConfiguration?:
              | {
                  ConfigurationSource: {}
                  CodeConfigurationValues?:
                    | {
                        Runtime: {}
                        BuildCommand?: {} | undefined
                        StartCommand?: {} | undefined
                        Port?: {} | undefined
                        RuntimeEnvironmentVariables?: {} | undefined
                        RuntimeEnvironmentSecrets?: {} | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      ImageRepository?:
        | {
            ImageIdentifier: {}
            ImageConfiguration?:
              | {
                  RuntimeEnvironmentVariables?: {} | undefined
                  StartCommand?: {} | undefined
                  Port?: {} | undefined
                  RuntimeEnvironmentSecrets?: {} | undefined
                }
              | undefined
            ImageRepositoryType: {}
          }
        | undefined
      AutoDeploymentsEnabled?: {} | undefined
      AuthenticationConfiguration?:
        | { ConnectionArn?: {} | undefined; AccessRoleArn?: {} | undefined }
        | undefined
    }
    InstanceConfiguration: {
      Cpu?: {} | undefined
      Memory?: {} | undefined
      InstanceRoleArn?: {} | undefined
    }
    EncryptionConfiguration?: { KmsKey: {} } | undefined
    HealthCheckConfiguration?:
      | {
          Protocol?: {} | undefined
          Path?: {} | undefined
          Interval?: {} | undefined
          Timeout?: {} | undefined
          HealthyThreshold?: {} | undefined
          UnhealthyThreshold?: {} | undefined
        }
      | undefined
    AutoScalingConfigurationSummary: {
      AutoScalingConfigurationArn?: {} | undefined
      AutoScalingConfigurationName?: {} | undefined
      AutoScalingConfigurationRevision?: {} | undefined
    }
    NetworkConfiguration: {
      EgressConfiguration?:
        | { EgressType?: {} | undefined; VpcConnectorArn?: {} | undefined }
        | undefined
      IngressConfiguration?: { IsPubliclyAccessible?: {} | undefined } | undefined
    }
    ObservabilityConfiguration?:
      | { ObservabilityEnabled: {}; ObservabilityConfigurationArn?: {} | undefined }
      | undefined
  }
  OperationId: {}
}
type UpdateVpcIngressConnectionRequest = {
  VpcIngressConnectionArn: {}
  IngressVpcConfiguration: { VpcId?: {} | undefined; VpcEndpointId?: {} | undefined }
}
type UpdateVpcIngressConnectionResponse = {
  VpcIngressConnection: {
    VpcIngressConnectionArn?: {} | undefined
    VpcIngressConnectionName?: {} | undefined
    ServiceArn?: {} | undefined
    Status?: {} | undefined
    AccountId?: {} | undefined
    DomainName?: {} | undefined
    IngressVpcConfiguration?: { VpcId?: {} | undefined; VpcEndpointId?: {} | undefined } | undefined
    CreatedAt?: {} | undefined
    DeletedAt?: {} | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AppRunner.AssociateCustomDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.AssociateCustomDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateCustomDomainRequest }
        output: AssociateCustomDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.CreateAutoScalingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAutoScalingConfigurationRequest }
        output: CreateAutoScalingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.CreateConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.CreateConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConnectionRequest }
        output: CreateConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.CreateObservabilityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.CreateObservabilityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateObservabilityConfigurationRequest }
        output: CreateObservabilityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.CreateService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.CreateService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceRequest }
        output: CreateServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.CreateVpcConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.CreateVpcConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateVpcConnectorRequest }
        output: CreateVpcConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.CreateVpcIngressConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.CreateVpcIngressConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateVpcIngressConnectionRequest }
        output: CreateVpcIngressConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DeleteAutoScalingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAutoScalingConfigurationRequest }
        output: DeleteAutoScalingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DeleteConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DeleteConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConnectionRequest }
        output: DeleteConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DeleteObservabilityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteObservabilityConfigurationRequest }
        output: DeleteObservabilityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DeleteService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DeleteService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceRequest }
        output: DeleteServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DeleteVpcConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DeleteVpcConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteVpcConnectorRequest }
        output: DeleteVpcConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DeleteVpcIngressConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DeleteVpcIngressConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteVpcIngressConnectionRequest }
        output: DeleteVpcIngressConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DescribeAutoScalingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAutoScalingConfigurationRequest }
        output: DescribeAutoScalingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DescribeCustomDomains': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.DescribeCustomDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCustomDomainsRequest }
        output: DescribeCustomDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DescribeObservabilityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeObservabilityConfigurationRequest }
        output: DescribeObservabilityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DescribeService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DescribeService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeServiceRequest }
        output: DescribeServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DescribeVpcConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DescribeVpcConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeVpcConnectorRequest }
        output: DescribeVpcConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DescribeVpcIngressConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DescribeVpcIngressConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeVpcIngressConnectionRequest }
        output: DescribeVpcIngressConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.DisassociateCustomDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.DisassociateCustomDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateCustomDomainRequest }
        output: DisassociateCustomDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListAutoScalingConfigurations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.ListAutoScalingConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAutoScalingConfigurationsRequest }
        output: ListAutoScalingConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListConnections': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.ListConnections'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListConnectionsRequest }
        output: ListConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListObservabilityConfigurations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.ListObservabilityConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListObservabilityConfigurationsRequest }
        output: ListObservabilityConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListOperations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.ListOperations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOperationsRequest }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListServices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.ListServices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServicesRequest }
        output: ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListVpcConnectors': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.ListVpcConnectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListVpcConnectorsRequest }
        output: ListVpcConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ListVpcIngressConnections': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AppRunner.ListVpcIngressConnections'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListVpcIngressConnectionsRequest }
        output: ListVpcIngressConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.PauseService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.PauseService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PauseServiceRequest }
        output: PauseServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.ResumeService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.ResumeService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResumeServiceRequest }
        output: ResumeServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.StartDeployment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.StartDeployment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDeploymentRequest }
        output: StartDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.UpdateService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.UpdateService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceRequest }
        output: UpdateServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AppRunner.UpdateVpcIngressConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AppRunner.UpdateVpcIngressConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateVpcIngressConnectionRequest }
        output: UpdateVpcIngressConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
