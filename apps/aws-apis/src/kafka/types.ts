type String = string
type BatchAssociateScramSecretResponse = {
  ClusterArn?: {} | undefined
  UnprocessedScramSecrets?: {} | undefined
}
type BadRequestException = { [x: string]: unknown }
type UnauthorizedException = { [x: string]: unknown }
type InternalServerErrorException = { [x: string]: unknown }
type ForbiddenException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type ServiceUnavailableException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type BatchDisassociateScramSecretResponse = {
  ClusterArn?: {} | undefined
  UnprocessedScramSecrets?: {} | undefined
}
type ListScramSecretsResponse = { NextToken?: {} | undefined; SecretArnList?: {} | undefined }
type CreateClusterResponse = {
  ClusterArn?: {} | undefined
  ClusterName?: {} | undefined
  State?: {} | undefined
}
type ConflictException = { [x: string]: unknown }
type ListClustersResponse = { ClusterInfoList?: {} | undefined; NextToken?: {} | undefined }
type CreateClusterV2Response = {
  ClusterArn?: {} | undefined
  ClusterName?: {} | undefined
  State?: {} | undefined
  ClusterType?: {} | undefined
}
type ListClustersV2Response = { ClusterInfoList?: {} | undefined; NextToken?: {} | undefined }
type CreateConfigurationResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  LatestRevision?: { CreationTime: {}; Description?: {} | undefined; Revision: {} } | undefined
  Name?: {} | undefined
  State?: {} | undefined
}
type ListConfigurationsResponse = { Configurations?: {} | undefined; NextToken?: {} | undefined }
type CreateVpcConnectionResponse = {
  VpcConnectionArn?: {} | undefined
  State?: {} | undefined
  Authentication?: {} | undefined
  VpcId?: {} | undefined
  ClientSubnets?: {} | undefined
  SecurityGroups?: {} | undefined
  CreationTime?: {} | undefined
  Tags?: {} | undefined
}
type DeleteClusterResponse = { ClusterArn?: {} | undefined; State?: {} | undefined }
type DescribeClusterResponse = {
  ClusterInfo?:
    | {
        ActiveOperationArn?: {} | undefined
        BrokerNodeGroupInfo?:
          | {
              BrokerAZDistribution?: {} | undefined
              ClientSubnets: {}
              InstanceType: {}
              SecurityGroups?: {} | undefined
              StorageInfo?:
                | {
                    EbsStorageInfo?:
                      | {
                          ProvisionedThroughput?:
                            | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                            | undefined
                          VolumeSize?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              ConnectivityInfo?:
                | {
                    PublicAccess?: { Type?: {} | undefined } | undefined
                    VpcConnectivity?:
                      | {
                          ClientAuthentication?:
                            | {
                                Sasl?:
                                  | {
                                      Scram?: { Enabled?: {} | undefined } | undefined
                                      Iam?: { Enabled?: {} | undefined } | undefined
                                    }
                                  | undefined
                                Tls?: { Enabled?: {} | undefined } | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              ZoneIds?: {} | undefined
            }
          | undefined
        ClientAuthentication?:
          | {
              Sasl?:
                | {
                    Scram?: { Enabled?: {} | undefined } | undefined
                    Iam?: { Enabled?: {} | undefined } | undefined
                  }
                | undefined
              Tls?:
                | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                | undefined
              Unauthenticated?: { Enabled?: {} | undefined } | undefined
            }
          | undefined
        ClusterArn?: {} | undefined
        ClusterName?: {} | undefined
        CreationTime?: {} | undefined
        CurrentBrokerSoftwareInfo?:
          | {
              ConfigurationArn?: {} | undefined
              ConfigurationRevision?: {} | undefined
              KafkaVersion?: {} | undefined
            }
          | undefined
        CurrentVersion?: {} | undefined
        EncryptionInfo?:
          | {
              EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
              EncryptionInTransit?:
                | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                | undefined
            }
          | undefined
        EnhancedMonitoring?: {} | undefined
        OpenMonitoring?:
          | {
              Prometheus: {
                JmxExporter?: { EnabledInBroker: {} } | undefined
                NodeExporter?: { EnabledInBroker: {} } | undefined
              }
            }
          | undefined
        LoggingInfo?:
          | {
              BrokerLogs: {
                CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                S3?: { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined } | undefined
              }
            }
          | undefined
        NumberOfBrokerNodes?: {} | undefined
        State?: {} | undefined
        StateInfo?: { Code?: {} | undefined; Message?: {} | undefined } | undefined
        Tags?: {} | undefined
        ZookeeperConnectString?: {} | undefined
        ZookeeperConnectStringTls?: {} | undefined
        StorageMode?: {} | undefined
      }
    | undefined
}
type DeleteClusterPolicyResponse = { [x: string]: unknown }
type GetClusterPolicyResponse = { CurrentVersion?: {} | undefined; Policy?: {} | undefined }
type PutClusterPolicyResponse = { CurrentVersion?: {} | undefined }
type DeleteConfigurationResponse = { Arn?: {} | undefined; State?: {} | undefined }
type DescribeConfigurationResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  Description?: {} | undefined
  KafkaVersions?: {} | undefined
  LatestRevision?: { CreationTime: {}; Description?: {} | undefined; Revision: {} } | undefined
  Name?: {} | undefined
  State?: {} | undefined
}
type UpdateConfigurationResponse = {
  Arn?: {} | undefined
  LatestRevision?: { CreationTime: {}; Description?: {} | undefined; Revision: {} } | undefined
}
type DeleteVpcConnectionResponse = { VpcConnectionArn?: {} | undefined; State?: {} | undefined }
type DescribeVpcConnectionResponse = {
  VpcConnectionArn?: {} | undefined
  TargetClusterArn?: {} | undefined
  State?: {} | undefined
  Authentication?: {} | undefined
  VpcId?: {} | undefined
  Subnets?: {} | undefined
  SecurityGroups?: {} | undefined
  CreationTime?: {} | undefined
  Tags?: {} | undefined
}
type DescribeClusterV2Response = {
  ClusterInfo?:
    | {
        ActiveOperationArn?: {} | undefined
        ClusterType?: {} | undefined
        ClusterArn?: {} | undefined
        ClusterName?: {} | undefined
        CreationTime?: {} | undefined
        CurrentVersion?: {} | undefined
        State?: {} | undefined
        StateInfo?: { Code?: {} | undefined; Message?: {} | undefined } | undefined
        Tags?: {} | undefined
        Provisioned?:
          | {
              BrokerNodeGroupInfo: {
                BrokerAZDistribution?: {} | undefined
                ClientSubnets: {}
                InstanceType: {}
                SecurityGroups?: {} | undefined
                StorageInfo?:
                  | {
                      EbsStorageInfo?:
                        | {
                            ProvisionedThroughput?:
                              | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                              | undefined
                            VolumeSize?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                ConnectivityInfo?:
                  | {
                      PublicAccess?: { Type?: {} | undefined } | undefined
                      VpcConnectivity?:
                        | {
                            ClientAuthentication?:
                              | {
                                  Sasl?:
                                    | {
                                        Scram?: { Enabled?: {} | undefined } | undefined
                                        Iam?: { Enabled?: {} | undefined } | undefined
                                      }
                                    | undefined
                                  Tls?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ZoneIds?: {} | undefined
              }
              CurrentBrokerSoftwareInfo?:
                | {
                    ConfigurationArn?: {} | undefined
                    ConfigurationRevision?: {} | undefined
                    KafkaVersion?: {} | undefined
                  }
                | undefined
              ClientAuthentication?:
                | {
                    Sasl?:
                      | {
                          Scram?: { Enabled?: {} | undefined } | undefined
                          Iam?: { Enabled?: {} | undefined } | undefined
                        }
                      | undefined
                    Tls?:
                      | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                      | undefined
                    Unauthenticated?: { Enabled?: {} | undefined } | undefined
                  }
                | undefined
              EncryptionInfo?:
                | {
                    EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                    EncryptionInTransit?:
                      | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                      | undefined
                  }
                | undefined
              EnhancedMonitoring?: {} | undefined
              OpenMonitoring?:
                | {
                    Prometheus: {
                      JmxExporter?: { EnabledInBroker: {} } | undefined
                      NodeExporter?: { EnabledInBroker: {} } | undefined
                    }
                  }
                | undefined
              LoggingInfo?:
                | {
                    BrokerLogs: {
                      CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                      Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                      S3?:
                        | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                        | undefined
                    }
                  }
                | undefined
              NumberOfBrokerNodes: {}
              ZookeeperConnectString?: {} | undefined
              ZookeeperConnectStringTls?: {} | undefined
              StorageMode?: {} | undefined
            }
          | undefined
        Serverless?:
          | {
              VpcConfigs: {}
              ClientAuthentication?:
                | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeClusterOperationResponse = {
  ClusterOperationInfo?:
    | {
        ClientRequestId?: {} | undefined
        ClusterArn?: {} | undefined
        CreationTime?: {} | undefined
        EndTime?: {} | undefined
        ErrorInfo?: { ErrorCode?: {} | undefined; ErrorString?: {} | undefined } | undefined
        OperationArn?: {} | undefined
        OperationState?: {} | undefined
        OperationSteps?: {} | undefined
        OperationType?: {} | undefined
        SourceClusterInfo?:
          | {
              BrokerEBSVolumeInfo?: {} | undefined
              ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
              NumberOfBrokerNodes?: {} | undefined
              EnhancedMonitoring?: {} | undefined
              OpenMonitoring?:
                | {
                    Prometheus: {
                      JmxExporter?: { EnabledInBroker: {} } | undefined
                      NodeExporter?: { EnabledInBroker: {} } | undefined
                    }
                  }
                | undefined
              KafkaVersion?: {} | undefined
              LoggingInfo?:
                | {
                    BrokerLogs: {
                      CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                      Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                      S3?:
                        | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                        | undefined
                    }
                  }
                | undefined
              InstanceType?: {} | undefined
              ClientAuthentication?:
                | {
                    Sasl?:
                      | {
                          Scram?: { Enabled?: {} | undefined } | undefined
                          Iam?: { Enabled?: {} | undefined } | undefined
                        }
                      | undefined
                    Tls?:
                      | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                      | undefined
                    Unauthenticated?: { Enabled?: {} | undefined } | undefined
                  }
                | undefined
              EncryptionInfo?:
                | {
                    EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                    EncryptionInTransit?:
                      | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                      | undefined
                  }
                | undefined
              ConnectivityInfo?:
                | {
                    PublicAccess?: { Type?: {} | undefined } | undefined
                    VpcConnectivity?:
                      | {
                          ClientAuthentication?:
                            | {
                                Sasl?:
                                  | {
                                      Scram?: { Enabled?: {} | undefined } | undefined
                                      Iam?: { Enabled?: {} | undefined } | undefined
                                    }
                                  | undefined
                                Tls?: { Enabled?: {} | undefined } | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              StorageMode?: {} | undefined
            }
          | undefined
        TargetClusterInfo?:
          | {
              BrokerEBSVolumeInfo?: {} | undefined
              ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
              NumberOfBrokerNodes?: {} | undefined
              EnhancedMonitoring?: {} | undefined
              OpenMonitoring?:
                | {
                    Prometheus: {
                      JmxExporter?: { EnabledInBroker: {} } | undefined
                      NodeExporter?: { EnabledInBroker: {} } | undefined
                    }
                  }
                | undefined
              KafkaVersion?: {} | undefined
              LoggingInfo?:
                | {
                    BrokerLogs: {
                      CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                      Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                      S3?:
                        | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                        | undefined
                    }
                  }
                | undefined
              InstanceType?: {} | undefined
              ClientAuthentication?:
                | {
                    Sasl?:
                      | {
                          Scram?: { Enabled?: {} | undefined } | undefined
                          Iam?: { Enabled?: {} | undefined } | undefined
                        }
                      | undefined
                    Tls?:
                      | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                      | undefined
                    Unauthenticated?: { Enabled?: {} | undefined } | undefined
                  }
                | undefined
              EncryptionInfo?:
                | {
                    EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                    EncryptionInTransit?:
                      | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                      | undefined
                  }
                | undefined
              ConnectivityInfo?:
                | {
                    PublicAccess?: { Type?: {} | undefined } | undefined
                    VpcConnectivity?:
                      | {
                          ClientAuthentication?:
                            | {
                                Sasl?:
                                  | {
                                      Scram?: { Enabled?: {} | undefined } | undefined
                                      Iam?: { Enabled?: {} | undefined } | undefined
                                    }
                                  | undefined
                                Tls?: { Enabled?: {} | undefined } | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              StorageMode?: {} | undefined
            }
          | undefined
        VpcConnectionInfo?:
          | {
              VpcConnectionArn?: {} | undefined
              Owner?: {} | undefined
              UserIdentity?: { Type?: {} | undefined; PrincipalId?: {} | undefined } | undefined
              CreationTime?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeClusterOperationV2Response = {
  ClusterOperationInfo?:
    | {
        ClusterArn?: {} | undefined
        ClusterType?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        ErrorInfo?: { ErrorCode?: {} | undefined; ErrorString?: {} | undefined } | undefined
        OperationArn?: {} | undefined
        OperationState?: {} | undefined
        OperationType?: {} | undefined
        Provisioned?:
          | {
              OperationSteps?: {} | undefined
              SourceClusterInfo?:
                | {
                    BrokerEBSVolumeInfo?: {} | undefined
                    ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                    NumberOfBrokerNodes?: {} | undefined
                    EnhancedMonitoring?: {} | undefined
                    OpenMonitoring?:
                      | {
                          Prometheus: {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        }
                      | undefined
                    KafkaVersion?: {} | undefined
                    LoggingInfo?:
                      | {
                          BrokerLogs: {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        }
                      | undefined
                    InstanceType?: {} | undefined
                    ClientAuthentication?:
                      | {
                          Sasl?:
                            | {
                                Scram?: { Enabled?: {} | undefined } | undefined
                                Iam?: { Enabled?: {} | undefined } | undefined
                              }
                            | undefined
                          Tls?:
                            | {
                                CertificateAuthorityArnList?: {} | undefined
                                Enabled?: {} | undefined
                              }
                            | undefined
                          Unauthenticated?: { Enabled?: {} | undefined } | undefined
                        }
                      | undefined
                    EncryptionInfo?:
                      | {
                          EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                          EncryptionInTransit?:
                            | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    ConnectivityInfo?:
                      | {
                          PublicAccess?: { Type?: {} | undefined } | undefined
                          VpcConnectivity?:
                            | {
                                ClientAuthentication?:
                                  | {
                                      Sasl?:
                                        | {
                                            Scram?: { Enabled?: {} | undefined } | undefined
                                            Iam?: { Enabled?: {} | undefined } | undefined
                                          }
                                        | undefined
                                      Tls?: { Enabled?: {} | undefined } | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    StorageMode?: {} | undefined
                  }
                | undefined
              TargetClusterInfo?:
                | {
                    BrokerEBSVolumeInfo?: {} | undefined
                    ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                    NumberOfBrokerNodes?: {} | undefined
                    EnhancedMonitoring?: {} | undefined
                    OpenMonitoring?:
                      | {
                          Prometheus: {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        }
                      | undefined
                    KafkaVersion?: {} | undefined
                    LoggingInfo?:
                      | {
                          BrokerLogs: {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        }
                      | undefined
                    InstanceType?: {} | undefined
                    ClientAuthentication?:
                      | {
                          Sasl?:
                            | {
                                Scram?: { Enabled?: {} | undefined } | undefined
                                Iam?: { Enabled?: {} | undefined } | undefined
                              }
                            | undefined
                          Tls?:
                            | {
                                CertificateAuthorityArnList?: {} | undefined
                                Enabled?: {} | undefined
                              }
                            | undefined
                          Unauthenticated?: { Enabled?: {} | undefined } | undefined
                        }
                      | undefined
                    EncryptionInfo?:
                      | {
                          EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                          EncryptionInTransit?:
                            | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    ConnectivityInfo?:
                      | {
                          PublicAccess?: { Type?: {} | undefined } | undefined
                          VpcConnectivity?:
                            | {
                                ClientAuthentication?:
                                  | {
                                      Sasl?:
                                        | {
                                            Scram?: { Enabled?: {} | undefined } | undefined
                                            Iam?: { Enabled?: {} | undefined } | undefined
                                          }
                                        | undefined
                                      Tls?: { Enabled?: {} | undefined } | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    StorageMode?: {} | undefined
                  }
                | undefined
              VpcConnectionInfo?:
                | {
                    VpcConnectionArn?: {} | undefined
                    Owner?: {} | undefined
                    UserIdentity?:
                      | { Type?: {} | undefined; PrincipalId?: {} | undefined }
                      | undefined
                    CreationTime?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Serverless?:
          | {
              VpcConnectionInfo?:
                | {
                    CreationTime?: {} | undefined
                    Owner?: {} | undefined
                    UserIdentity?:
                      | { Type?: {} | undefined; PrincipalId?: {} | undefined }
                      | undefined
                    VpcConnectionArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeConfigurationRevisionResponse = {
  Arn?: {} | undefined
  CreationTime?: {} | undefined
  Description?: {} | undefined
  Revision?: {} | undefined
  ServerProperties?: {} | undefined
}
type GetBootstrapBrokersResponse = {
  BootstrapBrokerString?: {} | undefined
  BootstrapBrokerStringTls?: {} | undefined
  BootstrapBrokerStringSaslScram?: {} | undefined
  BootstrapBrokerStringSaslIam?: {} | undefined
  BootstrapBrokerStringPublicTls?: {} | undefined
  BootstrapBrokerStringPublicSaslScram?: {} | undefined
  BootstrapBrokerStringPublicSaslIam?: {} | undefined
  BootstrapBrokerStringVpcConnectivityTls?: {} | undefined
  BootstrapBrokerStringVpcConnectivitySaslScram?: {} | undefined
  BootstrapBrokerStringVpcConnectivitySaslIam?: {} | undefined
}
type GetCompatibleKafkaVersionsResponse = { CompatibleKafkaVersions?: {} | undefined }
type ListClusterOperationsResponse = {
  ClusterOperationInfoList?: {} | undefined
  NextToken?: {} | undefined
}
type ListClusterOperationsV2Response = {
  ClusterOperationInfoList?: {} | undefined
  NextToken?: {} | undefined
}
type ListConfigurationRevisionsResponse = { NextToken?: {} | undefined; Revisions?: {} | undefined }
type ListKafkaVersionsResponse = { KafkaVersions?: {} | undefined; NextToken?: {} | undefined }
type ListNodesResponse = { NextToken?: {} | undefined; NodeInfoList?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListClientVpcConnectionsResponse = {
  ClientVpcConnections?: {} | undefined
  NextToken?: {} | undefined
}
type ListVpcConnectionsResponse = { VpcConnections?: {} | undefined; NextToken?: {} | undefined }
type RejectClientVpcConnectionResponse = { [x: string]: unknown }
type RebootBrokerResponse = { ClusterArn?: {} | undefined; ClusterOperationArn?: {} | undefined }
type UpdateBrokerCountResponse = {
  ClusterArn?: {} | undefined
  ClusterOperationArn?: {} | undefined
}
type UpdateBrokerTypeResponse = {
  ClusterArn?: {} | undefined
  ClusterOperationArn?: {} | undefined
}
type BrokerEBSVolumeInfo = {
  KafkaBrokerNodeId: {}
  ProvisionedThroughput?:
    | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
    | undefined
  VolumeSizeGB?: {} | undefined
}
type UpdateBrokerStorageResponse = {
  ClusterArn?: {} | undefined
  ClusterOperationArn?: {} | undefined
}
type UpdateConnectivityResponse = {
  ClusterArn?: {} | undefined
  ClusterOperationArn?: {} | undefined
}
type UpdateClusterConfigurationResponse = {
  ClusterArn?: {} | undefined
  ClusterOperationArn?: {} | undefined
}
type UpdateClusterKafkaVersionResponse = {
  ClusterArn?: {} | undefined
  ClusterOperationArn?: {} | undefined
}
type UpdateMonitoringResponse = {
  ClusterArn?: {} | undefined
  ClusterOperationArn?: {} | undefined
}
type UpdateSecurityResponse = { ClusterArn?: {} | undefined; ClusterOperationArn?: {} | undefined }
type UpdateStorageResponse = { ClusterArn?: {} | undefined; ClusterOperationArn?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/clusters/:clusterArn/scram-secrets': {
      $post:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: BatchAssociateScramSecretResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: BatchDisassociateScramSecretResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { secretArnList: String[] } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListScramSecretsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/clusters': {
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: CreateClusterResponse
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: BadRequestException
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: InternalServerErrorException
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: UnauthorizedException
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: ForbiddenException
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: ServiceUnavailableException
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: TooManyRequestsException
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
                brokerNodeGroupInfo: {
                  BrokerAZDistribution?: {} | undefined
                  ClientSubnets?: {} | undefined
                  InstanceType?: {} | undefined
                  SecurityGroups?: {} | undefined
                  StorageInfo?:
                    | {
                        EbsStorageInfo?:
                          | {
                              ProvisionedThroughput?:
                                | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                                | undefined
                              VolumeSize?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ConnectivityInfo?:
                    | {
                        PublicAccess?: { Type?: {} | undefined } | undefined
                        VpcConnectivity?:
                          | {
                              ClientAuthentication?:
                                | {
                                    Sasl?:
                                      | {
                                          Scram?: { Enabled?: {} | undefined } | undefined
                                          Iam?: { Enabled?: {} | undefined } | undefined
                                        }
                                      | undefined
                                    Tls?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  ZoneIds?: {} | undefined
                }
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                clusterName: string
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaVersion: string
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                numberOfBrokerNodes: number
                tags?: { [x: string]: String } | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListClustersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/api/v2/clusters': {
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: CreateClusterV2Response
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerErrorException
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UnauthorizedException
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenException
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceUnavailableException
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
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
                clusterName: string
                tags?: { [x: string]: String } | undefined
                provisioned?:
                  | {
                      BrokerNodeGroupInfo?:
                        | {
                            BrokerAZDistribution?: {} | undefined
                            ClientSubnets: {}
                            InstanceType: {}
                            SecurityGroups?: {} | undefined
                            StorageInfo?:
                              | {
                                  EbsStorageInfo?:
                                    | {
                                        ProvisionedThroughput?:
                                          | {
                                              Enabled?: {} | undefined
                                              VolumeThroughput?: {} | undefined
                                            }
                                          | undefined
                                        VolumeSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ConnectivityInfo?:
                              | {
                                  PublicAccess?: { Type?: {} | undefined } | undefined
                                  VpcConnectivity?:
                                    | {
                                        ClientAuthentication?:
                                          | {
                                              Sasl?:
                                                | {
                                                    Scram?: { Enabled?: {} | undefined } | undefined
                                                    Iam?: { Enabled?: {} | undefined } | undefined
                                                  }
                                                | undefined
                                              Tls?: { Enabled?: {} | undefined } | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ZoneIds?: {} | undefined
                          }
                        | undefined
                      ClientAuthentication?:
                        | {
                            Sasl?:
                              | {
                                  Scram?: { Enabled?: {} | undefined } | undefined
                                  Iam?: { Enabled?: {} | undefined } | undefined
                                }
                              | undefined
                            Tls?:
                              | {
                                  CertificateAuthorityArnList?: {} | undefined
                                  Enabled?: {} | undefined
                                }
                              | undefined
                            Unauthenticated?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      ConfigurationInfo?: { Arn: {}; Revision: {} } | undefined
                      EncryptionInfo?:
                        | {
                            EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                            EncryptionInTransit?:
                              | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      EnhancedMonitoring?: {} | undefined
                      OpenMonitoring?:
                        | {
                            Prometheus: {
                              JmxExporter?: { EnabledInBroker: {} } | undefined
                              NodeExporter?: { EnabledInBroker: {} } | undefined
                            }
                          }
                        | undefined
                      KafkaVersion?: {} | undefined
                      LoggingInfo?:
                        | {
                            BrokerLogs: {
                              CloudWatchLogs?:
                                | { Enabled: {}; LogGroup?: {} | undefined }
                                | undefined
                              Firehose?:
                                | { DeliveryStream?: {} | undefined; Enabled: {} }
                                | undefined
                              S3?:
                                | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                                | undefined
                            }
                          }
                        | undefined
                      NumberOfBrokerNodes?: {} | undefined
                      StorageMode?: {} | undefined
                    }
                  | undefined
                serverless?:
                  | {
                      VpcConfigs?: {} | undefined
                      ClientAuthentication?:
                        | { Sasl?: { Iam?: { Enabled?: {} | undefined } | undefined } | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                clusterTypeFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListClustersV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                clusterTypeFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                clusterTypeFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                clusterTypeFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                clusterNameFilter?: string | undefined
                clusterTypeFilter?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/configurations': {
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: CreateConfigurationResponse
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: BadRequestException
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: InternalServerErrorException
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: UnauthorizedException
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: ForbiddenException
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: ServiceUnavailableException
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: TooManyRequestsException
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
                description?: string | undefined
                kafkaVersions?: String[] | undefined
                name: string
                serverProperties: string
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/vpc-connection': {
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
                targetClusterArn: string
                authentication: string
                vpcId: string
                clientSubnets: String[]
                securityGroups: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateVpcConnectionResponse
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
                targetClusterArn: string
                authentication: string
                vpcId: string
                clientSubnets: String[]
                securityGroups: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
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
                targetClusterArn: string
                authentication: string
                vpcId: string
                clientSubnets: String[]
                securityGroups: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
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
                targetClusterArn: string
                authentication: string
                vpcId: string
                clientSubnets: String[]
                securityGroups: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: UnauthorizedException
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
                targetClusterArn: string
                authentication: string
                vpcId: string
                clientSubnets: String[]
                securityGroups: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
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
                targetClusterArn: string
                authentication: string
                vpcId: string
                clientSubnets: String[]
                securityGroups: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ServiceUnavailableException
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
                targetClusterArn: string
                authentication: string
                vpcId: string
                clientSubnets: String[]
                securityGroups: String[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/clusters/:clusterArn': {
      $delete:
        | {
            input: { param: { clusterArn: string } } & {
              query: { currentVersion?: string | undefined }
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
            output: DeleteClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: { currentVersion?: string | undefined }
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: { currentVersion?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: { currentVersion?: string | undefined }
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
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: { currentVersion?: string | undefined }
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
    }
  } & {
    '/v1/clusters/:clusterArn/policy': {
      $delete:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteClusterPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 483
          }
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetClusterPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 483
          }
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion?: string | undefined; policy: string } }
            output: PutClusterPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion?: string | undefined; policy: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion?: string | undefined; policy: string } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion?: string | undefined; policy: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/configurations/:arn': {
      $delete:
        | {
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
            output: DeleteConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
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
            output: DescribeConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
      $put:
        | {
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
            } & { json: { description?: string | undefined; serverProperties: string } }
            output: UpdateConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { description?: string | undefined; serverProperties: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { description?: string | undefined; serverProperties: string } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { description?: string | undefined; serverProperties: string } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            } & { json: { description?: string | undefined; serverProperties: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            } & { json: { description?: string | undefined; serverProperties: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            } & { json: { description?: string | undefined; serverProperties: string } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/vpc-connection/:arn': {
      $delete:
        | {
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
            output: DeleteVpcConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
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
            output: DescribeVpcConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/api/v2/clusters/:clusterArn': {
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeClusterV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
    }
  } & {
    '/v1/operations/:clusterOperationArn': {
      $get:
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeClusterOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
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
    }
  } & {
    '/api/v2/operations/:clusterOperationArn': {
      $get:
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeClusterOperationV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
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
            status: 485
          }
        | {
            input: { param: { clusterOperationArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/configurations/:arn/revisions/:revision': {
      $get:
        | {
            input: { param: { arn: string; revision: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeConfigurationRevisionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { arn: string; revision: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { arn: string; revision: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { arn: string; revision: number } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { arn: string; revision: number } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { arn: string; revision: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { arn: string; revision: number } } & {
              header: {
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
            status: 485
          }
    }
  } & {
    '/v1/clusters/:clusterArn/bootstrap-brokers': {
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetBootstrapBrokersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
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
    }
  } & {
    '/v1/compatible-kafka-versions': {
      $get:
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetCompatibleKafkaVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
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
            status: 482
          }
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
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
            status: 483
          }
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
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
            status: 485
          }
        | {
            input: { query: { clusterArn?: string | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/clusters/:clusterArn/operations': {
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListClusterOperationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/api/v2/clusters/:clusterArn/operations': {
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListClusterOperationsV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/configurations/:arn/revisions': {
      $get:
        | {
            input: { param: { arn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListConfigurationRevisionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { arn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { arn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { arn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { arn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { arn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { arn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/kafka-versions': {
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListKafkaVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/clusters/:clusterArn/nodes': {
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListNodesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
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
            output: NotFoundException
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
            output: BadRequestException
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
            output: InternalServerErrorException
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
            } & { json: { tags: { [x: string]: String } } }
            output: {}
            outputFormat: string
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
            } & { json: { tags: { [x: string]: String } } }
            output: NotFoundException
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
            } & { json: { tags: { [x: string]: String } } }
            output: BadRequestException
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
            } & { json: { tags: { [x: string]: String } } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/clusters/:clusterArn/client-vpc-connections': {
      $get:
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListClientVpcConnectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/vpc-connections': {
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ListVpcConnectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
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
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/clusters/:clusterArn/client-vpc-connection': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { vpcConnectionArn: string } }
            output: RejectClientVpcConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { vpcConnectionArn: string } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { vpcConnectionArn: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { vpcConnectionArn: string } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { vpcConnectionArn: string } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { vpcConnectionArn: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/clusters/:clusterArn/reboot-broker': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: RebootBrokerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { brokerIds: String[] } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/tags/:resourceArn#tagKeys': {
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
            output: {}
            outputFormat: string
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
            output: NotFoundException
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
            output: BadRequestException
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/clusters/:clusterArn/nodes/count': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetNumberOfBrokerNodes: number } }
            output: UpdateBrokerCountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetNumberOfBrokerNodes: number } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetNumberOfBrokerNodes: number } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetNumberOfBrokerNodes: number } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetNumberOfBrokerNodes: number } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetNumberOfBrokerNodes: number } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/clusters/:clusterArn/nodes/type': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: UpdateBrokerTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { currentVersion: string; targetInstanceType: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/clusters/:clusterArn/nodes/storage': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { currentVersion: string; targetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] }
            }
            output: UpdateBrokerStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { currentVersion: string; targetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { currentVersion: string; targetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { currentVersion: string; targetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { currentVersion: string; targetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { currentVersion: string; targetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/clusters/:clusterArn/connectivity': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                connectivityInfo: {
                  PublicAccess?: { Type?: {} | undefined } | undefined
                  VpcConnectivity?:
                    | {
                        ClientAuthentication?:
                          | {
                              Sasl?:
                                | {
                                    Scram?: { Enabled?: {} | undefined } | undefined
                                    Iam?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                              Tls?: { Enabled?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                currentVersion: string
              }
            }
            output: UpdateConnectivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                connectivityInfo: {
                  PublicAccess?: { Type?: {} | undefined } | undefined
                  VpcConnectivity?:
                    | {
                        ClientAuthentication?:
                          | {
                              Sasl?:
                                | {
                                    Scram?: { Enabled?: {} | undefined } | undefined
                                    Iam?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                              Tls?: { Enabled?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                currentVersion: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                connectivityInfo: {
                  PublicAccess?: { Type?: {} | undefined } | undefined
                  VpcConnectivity?:
                    | {
                        ClientAuthentication?:
                          | {
                              Sasl?:
                                | {
                                    Scram?: { Enabled?: {} | undefined } | undefined
                                    Iam?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                              Tls?: { Enabled?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                currentVersion: string
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                connectivityInfo: {
                  PublicAccess?: { Type?: {} | undefined } | undefined
                  VpcConnectivity?:
                    | {
                        ClientAuthentication?:
                          | {
                              Sasl?:
                                | {
                                    Scram?: { Enabled?: {} | undefined } | undefined
                                    Iam?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                              Tls?: { Enabled?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                currentVersion: string
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                connectivityInfo: {
                  PublicAccess?: { Type?: {} | undefined } | undefined
                  VpcConnectivity?:
                    | {
                        ClientAuthentication?:
                          | {
                              Sasl?:
                                | {
                                    Scram?: { Enabled?: {} | undefined } | undefined
                                    Iam?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                              Tls?: { Enabled?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                currentVersion: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                connectivityInfo: {
                  PublicAccess?: { Type?: {} | undefined } | undefined
                  VpcConnectivity?:
                    | {
                        ClientAuthentication?:
                          | {
                              Sasl?:
                                | {
                                    Scram?: { Enabled?: {} | undefined } | undefined
                                    Iam?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                              Tls?: { Enabled?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                currentVersion: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                connectivityInfo: {
                  PublicAccess?: { Type?: {} | undefined } | undefined
                  VpcConnectivity?:
                    | {
                        ClientAuthentication?:
                          | {
                              Sasl?:
                                | {
                                    Scram?: { Enabled?: {} | undefined } | undefined
                                    Iam?: { Enabled?: {} | undefined } | undefined
                                  }
                                | undefined
                              Tls?: { Enabled?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                currentVersion: string
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/clusters/:clusterArn/configuration': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo: { Arn?: {} | undefined; Revision?: {} | undefined }
                currentVersion: string
              }
            }
            output: UpdateClusterConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo: { Arn?: {} | undefined; Revision?: {} | undefined }
                currentVersion: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo: { Arn?: {} | undefined; Revision?: {} | undefined }
                currentVersion: string
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo: { Arn?: {} | undefined; Revision?: {} | undefined }
                currentVersion: string
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo: { Arn?: {} | undefined; Revision?: {} | undefined }
                currentVersion: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo: { Arn?: {} | undefined; Revision?: {} | undefined }
                currentVersion: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo: { Arn?: {} | undefined; Revision?: {} | undefined }
                currentVersion: string
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/clusters/:clusterArn/version': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: UpdateClusterKafkaVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configurationInfo?: { Arn?: {} | undefined; Revision?: {} | undefined } | undefined
                currentVersion: string
                targetKafkaVersion: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/clusters/:clusterArn/monitoring': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UpdateMonitoringResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                enhancedMonitoring?:
                  | 'DEFAULT'
                  | 'PER_BROKER'
                  | 'PER_TOPIC_PER_BROKER'
                  | 'PER_TOPIC_PER_PARTITION'
                  | undefined
                openMonitoring?:
                  | {
                      Prometheus?:
                        | {
                            JmxExporter?: { EnabledInBroker: {} } | undefined
                            NodeExporter?: { EnabledInBroker: {} } | undefined
                          }
                        | undefined
                    }
                  | undefined
                loggingInfo?:
                  | {
                      BrokerLogs?:
                        | {
                            CloudWatchLogs?: { Enabled: {}; LogGroup?: {} | undefined } | undefined
                            Firehose?: { DeliveryStream?: {} | undefined; Enabled: {} } | undefined
                            S3?:
                              | { Bucket?: {} | undefined; Enabled: {}; Prefix?: {} | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/clusters/:clusterArn/security': {
      $patch:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UpdateSecurityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientAuthentication?:
                  | {
                      Sasl?:
                        | {
                            Scram?: { Enabled?: {} | undefined } | undefined
                            Iam?: { Enabled?: {} | undefined } | undefined
                          }
                        | undefined
                      Tls?:
                        | { CertificateAuthorityArnList?: {} | undefined; Enabled?: {} | undefined }
                        | undefined
                      Unauthenticated?: { Enabled?: {} | undefined } | undefined
                    }
                  | undefined
                currentVersion: string
                encryptionInfo?:
                  | {
                      EncryptionAtRest?: { DataVolumeKMSKeyId: {} } | undefined
                      EncryptionInTransit?:
                        | { ClientBroker?: {} | undefined; InCluster?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/v1/clusters/:clusterArn/storage': {
      $put:
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: UpdateStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { clusterArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                currentVersion: string
                provisionedThroughput?:
                  | { Enabled?: {} | undefined; VolumeThroughput?: {} | undefined }
                  | undefined
                storageMode?: 'LOCAL' | 'TIERED' | undefined
                volumeSizeGB?: number | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 486
          }
    }
  },
  '/'
>
export default routes
